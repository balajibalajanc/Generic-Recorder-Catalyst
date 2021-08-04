const {PythonShell} =require('python-shell');

const LOCATION='C:\\Users\\bbalasubraman\\Documents\\Nodejs\\Udemy\\play_exp\\src\\Utilities\\';

const Recorder_service=(index,callback)=>{
    let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
        args:[index]
    }
    console.log("tester",index);
    PythonShell.run('Recorder.py', options, function (err, result){
        if (err) callback(err,undefined) ;
        // result is an array consisting of messages collected 
        //during execution of script.
        console.log("inside_service",result);
        callback(undefined,result);
  });
};

module.exports=Recorder_service;