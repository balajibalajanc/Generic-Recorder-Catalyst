const express=require('express');
const app=express()
const port=process.env.PORT || 3001
const path=require('path');
const cron = require('node-cron');
const public_dir_path=path.join(__dirname,'../public');
const Device_Index_Util=require('../Services/Device_Index_service');
const Recorder_v=require('../Services/Recorder_Service');
app.use(express.static(public_dir_path))
let flag;


app.get("/recorder_test",(request,response)=>{
    //passing a text to verify the response
    response.send(' Main Page status: 1st Page')

    //verfiying the system has the line(virtual audio cable anabled and getting the index)
    Device_Index_Util((error,result)=>{
        if (error)
        {  return console.log('Error ' + error); }   
        //logger
        console.log('Index in device_index function : '+result)    
        console.log('Index sent to recorder and calling the recorder function');
        //calling the recorder funtion
        Recorder_v(result,(error_1,result_1)=>{
            
            if(error)
            {  return console.log('Error ' + error_1); }   

            console.log('Index  inside the recorder_v: '+result_1)    
        });
    });
 
})
 
app.get("/test2",(request,response)=>{
    response.send(' Main Page status: 2nd page pure testing')
    console.log('Recording started');
    Device_Index_Util((error,result)=>{
        if (error)
        {  return console.log('Error ' + error); }   
       console.log('Index : '+result)    
    });
    
})

app.get("/cron",(req,response)=>{
    cron.schedule('*/1 * * * *', () => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log('hakunama tata',time);
      });
})

app.use(function(req, res, next){
    console.log("A new request received at " + Date.now());
 });



app.listen(port,()=>{   
    console.log("Port is listening ")
});
