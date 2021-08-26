import win32com.client
import win32com.client as win32
import win32com
import xlsxwriter
import sys
import xlrd
import os
import datetime
import psycopg2
import datetime as dt
date_time = dt.datetime.now()
print("Welcome to DTOMATION")
print("Enter the Medium of communicaton you want to Automate")
print("Email ", ",", " Zendesk")
outlook = win32com.client.Dispatch("Outlook.Application").GetNamespace("MAPI")
print('Accounts which are present in currently synced with this system')
accounts= win32com.client.Dispatch("Outlook.Application").Session.Accounts;
filename_output = "output.xlsx";
wb = xlsxwriter.Workbook(os.getcwd() + filename_output);
worksheet = wb.add_worksheet()
c=0;
for account in accounts:
    print(account.DisplayName)
    c = c+1
# Navigate to tickets folder
inbox = outlook.GetDefaultFolder(9)

# Time Period Based Input segregation
last30MinuteDateTime = dt.datetime.now() - dt.timedelta(minutes = 600 )
print("The time from which the input segregation gonna happen", last30MinuteDateTime)

# Analyzing all the message and sort based on the received time
messages = inbox.Items
messages.Sort("[ReceivedTime]", True)

last30MinuteMessages = messages.Restrict("[ReceivedTime] >= '" + last30MinuteDateTime.strftime('%m/%d/%Y %H:%M %p')+"'")

print("Current time",date_time.strftime('%m/%d/%Y %H:%M %p'))

# make connection between python and postgresql

print("DB credentials can be provided dynamically")
conn = psycopg2.connect("dbname = 'postgres' user = 'postgres' host = 'localhost' password = 'tesco'")
cur = conn.cursor()
print ( conn.get_dsn_parameters(),"\n")
cur.execute("SELECT version();")
record = cur.fetchone()
print("You are connected to - ", record,"\n")

# temp table name we are currently working

table_name = 'sa_store_day'

print ("Messages from the past 30 minute:")
c=0
for message in last30MinuteMessages:
    print("Information about the request")
    c=c+1;
print ("The count of meesgaes received from past 30 minutes ==",c)
sender_name=message.SenderEmailAddress
print(sender_name)
if(c>0):
    print("Analysing the parameters")
    # Attachement
    subFolderItemAttachments = message.Attachments
    nbrOfAttachmentInMessage = subFolderItemAttachments.Count
    print("Number of attachements present in request ", nbrOfAttachmentInMessage)

    for att in subFolderItemAttachments:
        print("File_Name of the ",att.FileName)
        print("File_Type",att.FileName.split('.')[1])
        if att.FileName.split('.')[1] == "xlsx":
            # File will be downloaded and save in current directory of the applications
            att.SaveASFile(os.getcwd() + '\\' + att.FileName)
            path_loc=os.getcwd() + '\\' + att.FileName
            # ExcelSheet is loaded from the directory through xlrd
            xl_workbook = xlrd.open_workbook(path_loc)
            sheet_name = xl_workbook.sheet_names()
            sh=xl_workbook.sheet_by_index(0)
            sh.cell_value(0, 0)
            first_row = []  # Header value from the excel sheet
            print()
            for col in range(sh.ncols):
                first_row.append(sh.cell_value(0, col))
                # tronsforming the workbook to a list of dictionnaries
            data = []
            for row in range(1, sh.nrows):
                elm = {}
                for col in range(sh.ncols):
                    elm[first_row[col]] = sh.cell_value(row, col)
                data.append(elm)

            print(data)
            #print([d['business_date'] for d in data if 'business_date' in d])
            #print([x['business_date'] for x in data])
        # Passing the values from the excel into the DB
            for i in range(len(data)):
                all_keys=data[i]
                for j in all_keys:
                    tempt= (int(all_keys[j]))
                    cur.execute("select * from %s where store =%%s" % table_name, [tempt])
                    rowns = cur.fetchall()
                    for row in rowns:
                        print("store = ", row[0])
                        print("Date = ", row[1])
                        print("Tender=", row[2])
                        break;

            for k in range(sh.ncols):
                tempo=sh.cell_value(0, k)

                for i in data:
                    if (sh.cell_value(0, k).lower() == "DATE".lower()) or (sh.cell_value(0, k).lower == "BUSINESS DATE".lower()):
                        a1_as_datetime = datetime.datetime(*xlrd.xldate_as_tuple(i[sh.cell_value(0, k)], xl_workbook.datemode))
                        print(str(a1_as_datetime.date()))

                    else:
                        print(int(i[sh.cell_value(0, k)]))
conn.close()
import win32com.client as win32
outlook = win32.Dispatch('outlook.application')
mail = outlook.CreateItem(0)
mail.To =sender_name
mail.Subject = 'Message subject'
mail.Body = 'Message body'
attachment='C://Users//bbalasubraman//PycharmProjects//Fin_hack//output.xlsx'
mail.Attachments.Add(attachment)
mail.Send()
#sql = "COPY (SELECT * from emp where id=%%s) TO STDOUT WITH CSV DELIMITER ',' HEADER"
#with open("C:/Users/bbalasubraman/Downloads/table2.csv", "w") as file:
    #cur.copy_expert(sql, file)