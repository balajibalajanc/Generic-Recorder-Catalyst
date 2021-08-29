from O365 import Account, MSGraphProtocol

CLIENT_ID = 'c3002f21-2eba-47c2-bb16-ccb43fed203f   '
SECRET_ID = '.CTrhjT5g07Q8g0pAXeZ3n3e-8_n2~xv-f'

credentials = (CLIENT_ID, SECRET_ID)

protocol = MSGraphProtocol() 
#protocol = MSGraphProtocol(defualt_resource='<sharedcalendar@domain.com>') 
scopes = ['Calendars.Read']
account = Account(credentials, protocol=protocol)

if account.authenticate(scopes=scopes):
   print('Authenticated!')


   