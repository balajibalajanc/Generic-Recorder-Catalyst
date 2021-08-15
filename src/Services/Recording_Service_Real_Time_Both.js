const {PythonShell} =require('python-shell');

const path=require('path');
const public_dir_path=path.join(__dirname,'../Utilities');
const regex = /\\/g;
const FilePath = public_dir_path.replace(regex, "\\\\");
const LOCATION=FilePath+'\\\\';


const Recorder_service_both=(index_f,index_s,callback)=>{
    let options={ mode: 'text',
    pythonOptions: ['-u'], // get print results in real-time
      scriptPath:LOCATION,
        args:[index_f,index_s]
    }
    console.log("Index sent",index_f,index_s);
    PythonShell.run('Recorder_Real_Time_Both.py', options, function (err, result_we){
        if (err) callback(err,undefined) ;
        // result is an array consisting of messages collected 
        //during execution of script.
        let options_t={ mode: 'text',
              pythonOptions: ['-u'], 
              scriptPath:LOCATION,
              args:[result_we[0],result_we[1]]
            }
            console.log(result_we[0],result_we[1]);
        PythonShell.run('Overlay_Two_Files.py', options_t, function (err_2, result_2){
          if (err) callback(err_2,undefined) ;
          callback(undefined,result_2[0]);
        });
        
  });
};

module.exports=Recorder_service_both;