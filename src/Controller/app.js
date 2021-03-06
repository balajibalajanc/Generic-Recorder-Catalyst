const express = require('express');
const app = express()

// local hosting port defined
const port = process.env.PORT || 3001

const path = require('path');
const multer = require('multer')
//services defined
const public_dir_path = path.join(__dirname, '../../public');
const Device_Index_Util = require('../Services/Device_Index_Service');
const Recorder_rtr = require('../Services/Recording_Service_Real_Time_Recorder');
const transcript_service = require('../Services/Transcript_Service');
const get_video_summary = require('../Services/Post_Video_Url_Service');
const Device_Index_Util_both = require('../Services/Device_Index_both');
const recorder_both = require('../Services/Recording_Service_Real_Time_Both');
const transcript_service_file = require('../Services/Transcripting_Uploaded_File');
const mailing_proto=require('../Services/Mailing_Service');
const trans=require('../Services/get_translation_service');

app.use(express.static(public_dir_path))
//root hosting
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Generic Recorder Catalyst'
    });
})


//configuration assigned for the upload a file functionality
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './target');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName)
    }
});


const upload = multer({
    storage: storage
});


//root for uploading a function
app.post('/uploadSound', upload.single('avatar'), function(req, response, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    console.log('Recording started from the controller layer');
    console.log("Requested file name ",req.file.originalname);
    transcript_service_file(req.file.originalname, (error_t, result_t) => {
        if (error_t) {
            return response.send('Error ' + error_t);
        }
        response.redirect(302,result_t);
    });
})





//record system sound
app.get("/RTR", (request, response) => {
    console.log('Recording started from the controller layer');
    console.log('Language code selected for recording :',request.query.search);
    try {
    var language_code=String(request.query.search);
    
        Device_Index_Util("Stereo", (error, result) => {
            if (error) {
                return  response.send('Error ' + error);
            }
            console.log('Index for the stereo device and the id is : ' + result)
            Recorder_rtr(result,"System sound", (error_1, result_1) => {
                if (error_1) {
                    return response.send(error_1);
                }

                console.log('File successfully created from the recorder function is: ' + result_1)
                // return response.send(result_1);
                transcript_service(result_1,language_code, (error_2, result_2) => {
                    if (error_2) {
                        return response.send(error_2);
                    }
                    console.log('Json response from the transcript function: ' + result_2)
                    response.send(result_2);
                });

            });
        });
    } catch (e) {
        console.log("Catched in the try/catch block with the error: ", e)
    }

})

//record microphone sound
app.get("/RTR_mic", (request, response) => {
    console.log('Recording started from the controller layer');
    console.log('Language code seleted :',request.query.search);
    try{
    var language_code=String(request.query.search);
    Device_Index_Util("External", (error, result) => {
        if (error) {
            return  response.send('Error ' + error);
        }
        console.log('Index for the stereo device is : ' + result)
        Recorder_rtr(result,"Microphone", (error_1, result_1) => {
            if (error_1) {
                return response.send(error_1);
            }

            console.log('File created from the recorder function is: ' + result_1)
            transcript_service(result_1,language_code, (error_2, result_2) => {
                if (error_2) {
                    return response.send('Error ' + error_2);
                }
                console.log('Json response from the transcript function: ' + result_2)
                response.send(result_2);
                // if (request.query.search) {
                //     console.log("final _email",request.query.search)
                //     mailing_proto(request.query.search,result_2);
                // }
            });
        })
    })
} catch (e) {
    console.log("Catched in the try/catch block with the error: ", e)
}

})

//record both the system sound as well as microphone sound
app.get("/RTR_both", (request, response) => {
    console.log('Recording started from the controller layer');
    console.log('Language code seleted :',request.query.search);
    try {
    var language_code=String(request.query.search);

    Device_Index_Util_both((error, result) => {
        if (error) {
            return response.send('Error ' + error);
        }
        console.log('Index for the stereo device is : ' + result)
        recorder_both(result[0], result[1], (error_1, result_1) => {
            if (error_1) {
                return response.send(error_1);
            }
            console.log('File created from the recorder function is: ' + result_1)
            transcript_service(result_1,language_code, (error_2, result_2) => {
                if (error_2) {
                    return response.send('Error ' + error_2);
                }
                console.log('Json response from the transcript function: ' + result_2)
                response.send(result_2);
                // if (request.query.search) {
                //     console.log("final _email",request.query.search)
                //     mailing_proto(request.query.search,result_2);
                // }
            });
        })
    })
} catch (e) {
    console.log("Catched in the try/catch block with the error: ", e)
}
})


app.get("/RTR_Line", (request, response) => {
    console.log('Recording started from the controller layer');
    console.log('Language code seleted :',request.query.search);
    try{
    var language_code=String(request.query.search);
    Device_Index_Util("Line 1 (Virtual Audio Cable)", (error, result) => {
        if (error) {
            return response.send('Error ' + error);
        }
        console.log('Index for the LineS device is : ' + result)
        Recorder_rtr(result,"sound of Independent Application", (error_1, result_1) => {

            if (error_1) {
                return response.send(error_1);
            }
            console.log('File created from the recorder function is: ' + result_1)
            // return response.send(result_1);
            transcript_service(result_1,language_code, (error_2, result_2) => {
                if (error_2) {
                    return response.send('Error ' + error_2);
                }
                console.log('Json response from the transcript function: ' + result_2)
                response.send(result_2);
                // if (request.query.search) {
                //     console.log("final _email",request.query.search)
                //     mailing_proto(request.query.search,result_2);
                // }
            });

        });
    });
} catch (e) {
    console.log("Catched in the try/catch block with the error: ", e)
}
})

//get the insights from the 
app.get("/paste_url", (req, response) => {
    if (!req.query.search) {
        console.log("No url provided");
        return res.send({
            error: 'Am i joke to you pleas give Address to search'
        });
    }
    console.log(req.query.search);
    get_video_summary(req.query.search, (error_p, result_p) => {
        if (error_p) {
            return response.send(error_p);
        }

        console.log('Index  inside the get video summary: ' + result_p)
        response.send(result_p);

    })
})


app.get("/trans",(request,response) => {

    console.log("Messages sent to translate : ",request.query.msg);
    console.log("Language code selected to translate",request.query.search);
    trans(request.query.msg,request.query.search,(error,result)=>{
        if(error) {console.log(error)}
        console.log(result);
        response.send(result);
    })

})

app.get("/mail_send",(request,response) => {

    console.log("Messages sent to translate :",request.query.msg);
    console.log("Email to send: ",request.query.id);
    console.log("Subject to send: ",request.query.subject);
    mailing_proto(request.query.id,request.query.subject,request.query.msg,(error,result)=>{
        if(error) {console.log(error)}
        console.log("Message Sent Successfully");

    })

})





app.listen(port, () => {
    console.log("Server started and the Port is listening ")
});

//   //record system sound only for 10 seconds
// app.get("/recorder_test",(request,response)=>{
//     //passing a text to verify the response
//     response.send(' Main Page status: 1st Page')

//     //verfiying the system has the line(virtual audio cable anabled and getting the index)
//     Device_Index_Util("Stereo",(error,result)=>{
//         if (error)
//         {  return console.log('Error ' + error); }   
//         //logger
//         console.log('Index in device_index function : '+result)    
//         console.log('Index sent to recorder and recorder test');
//         //calling the recorder funtion
//         Recorder_v(result,(error_1,result_1)=>{

//             if(error)
//             {  return console.log('Error ' + error_1); }   

//             console.log('Index  inside the recorder_v: '+result_1)    
//         });
//     });

// })


//beta to set the cron scheduler to run 
// app.get("/cron",(req,response)=>{
//     cron.schedule('*/1 * * * *', () => {
//         let today = new Date();
//         let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//         console.log('hakunama tata',time);
//       });
// })



// app.get("/test_btn",(req,response)=>{
//     response.send("balaji");
//     const LOCATION='C:\\Users\\bbalasubraman\\Documents\\Nodejs\\Udemy\\play_exp\\src\\Utilities\\my_script.py';

//     let pyshell = new PythonShell(LOCATION, {
//         args: ['hello', 'world']
//     });

//     pyshell.send('rangan');
//     console.log("between ");

//     setTimeout(() => {

//     }, 5000);

//     pyshell.on('message', function (message) {

//         // received a message sent from the Python script (a simple "print" statement)
//         console.log("message_received "+ message);
//       });

//     //   pyshell.end(function (err,code,signal) {
//     //     if (err) throw err;
//     //     console.log('The exit code was: ' + code);
//     //     console.log('The exit signal was: ' + signal);
//     //     console.log('finished');
//     //   });

// })


// app.use(function(req, res, next){
//     console.log("A new request received at " + Date.now());
//  });