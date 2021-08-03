const express=require('express');
const app=express()
const port=process.env.PORT || 3001
const path=require('path');
const {PythonShell} =require('python-shell');
const cron = require('node-cron');
const public_dir_path=path.join(__dirname,'../public');
app.use(express.static(public_dir_path))



app.get("/test",(request,response)=>{
    response.send(' Main Page status: Page under Construction')
    console.log('Recording started');
    let options={
        args:['16:30:00','17:00:00']
    }
    PythonShell.run('C:\\Users\\bbalasubraman\\Documents\\Nodejs\\Udemy\\play_exp\\src\\Utilities\\Recorder.py', null, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected 
        //during execution of script.
        console.log(result);
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
