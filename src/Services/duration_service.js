const {PythonShell} =require('python-shell');
const path=require('path');
const public_dir_path=path.join(__dirname,'../Utilities');
const regex = /\\/g;
const FilePath = public_dir_path.replace(regex, "\\\\");
const LOCATION=FilePath+'\\\\';

const Duration_Util=(filename,callback)=>{
let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
        args:[filename]
    }


    PythonShell.run('duration.py', options, function (err, result){
        if (err) throw err;
        // result is an array consisting of messages collected 
        //during execution of script.
        if(result === null) 
        {
            callback("No results",undefined);
    }
        else{

        callback(undefined,result[0]);
        }
  });
}

module.exports=Duration_Util