const {PythonShell} =require('python-shell');
const path=require('path');
const public_dir_path=path.join(__dirname,'../Utilities');
const regex = /\\/g;
const FilePath = public_dir_path.replace(regex, "\\\\");
const LOCATION=FilePath+'\\\\';


const Device_Index_Util=(device,callback)=>{
let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
      args:[device]
    }
    let second="Microphone Array"
    let options_t={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
      args:[second]
    }


    PythonShell.run('Device_Index.py', options, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected 
        //during execution of script.
        if(result === null) 
        {
            PythonShell.run('Device_Index.py', options_t, function (err, result){
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
        else{

        callback(undefined,result[0]);
        }
  });
}

module.exports=Device_Index_Util