const {PythonShell} =require('python-shell');

const path=require('path');
const public_dir_path=path.join(__dirname,'../Utilities');
const regex = /\\/g;
const FilePath = public_dir_path.replace(regex, "\\\\");
const LOCATION=FilePath+'\\\\';


const Device_Index_Util=(callback)=>{
let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION
    }
 

    PythonShell.run('Device_Index_Both.py', options, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected 
        //during execution of script.
        if(result === null) 
        {
          
        callback("No Virtual Cable",undefined);
    }
        else{

        callback(undefined,result);
        }
  });
}

module.exports=Device_Index_Util