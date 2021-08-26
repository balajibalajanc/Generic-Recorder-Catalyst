const {PythonShell} =require('python-shell');

const path=require('path');
const public_dir_path=path.join(__dirname,'../Utilities');
const regex = /\\/g;
const FilePath = public_dir_path.replace(regex, "\\\\");
const LOCATION=FilePath+'\\\\';


const Recorder_service_rtr=(index,device,callback)=>{
    let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
        args:[index,device]
    }
    PythonShell.run('Recorder_Real_Time_Recorder.py', options, function (err, result){
        if (err) callback(err,undefined) ;
        // result is an array consisting of messages collected 
        //during execution of script.
        console.log("File Name: ",result[0]);
        callback(undefined,result[0]);
  });
};

module.exports=Recorder_service_rtr;