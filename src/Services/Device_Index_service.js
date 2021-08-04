const {PythonShell} =require('python-shell');

const LOCATION='C:\\Users\\bbalasubraman\\Documents\\Nodejs\\Udemy\\play_exp\\src\\Utilities\\';

const Device_Index_Util=(callback)=>{
let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
        args:['16:30:00','17:00:00']
    }


    PythonShell.run('Device_Index_Util.py', options, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected 
        //during execution of script.
        if(result === null) 
        {
            callback("No Virtual Cable",undefined);
    }
        else{

        callback(undefined,result[0]);
        }
  });
}

module.exports=Device_Index_Util