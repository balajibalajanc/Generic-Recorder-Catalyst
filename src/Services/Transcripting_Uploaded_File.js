const request = require('request');
const fs = require('fs');
const path=require('path');
const target_dir_path=path.join(__dirname,'../../target/');
const get_conversation=require('./Getting_conversation_message_service');
// const duration_service=require('./duration_service');

// fucntion to authenticate and upload the audio file to the server
function job_status(AUTH_TOKEN,JOB_ID){
          request.get({
                        url: `https://api.symbl.ai/v1/job/${JOB_ID}`,
                        headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` },
                        json: true
                       }, (err, response, body) => {
            console.log("Job_status_",body);
});
}

const auth_upld=(file_name,callback)=>{
                const authOptions = {
                  method: 'post',
                  url: "https://api.symbl.ai/oauth2/token:generate",
                  body: {
                    type: "application",
                    appId: process.env.appId,
                    appSecret: process.env.appSecret
                  },
                    json: true
                  };

request(authOptions, (err, res, body) => {
    if (err) {
      console.error('error posting json: ', err);
      throw err
    }
    var {accessToken}=body;
    const authToken = accessToken
    const file_path=target_dir_path+String(file_name)
    const audioFileStream = fs.createReadStream(file_path);
 
 const params = {
      'name': "News Report",
      // <Optional, string| your_conversation_name | Your meeting name. Default name set to conversationId.>
    
       'webhookUrl': 'http://localhost:7293/test',
      // <Optional, string| your_webhook_url| Webhook url on which job updates to be sent. (This should be post API)>
    
      // 'customVocabulary': ['Platform', 'Discussion', 'Targets'],
      // <Optional, list| custom_vocabulary_list> |Contains a list of words and phrases that provide hints to the speech recognition task.
    
      'confidenceThreshold': 0.6,
      // <Optional, double| confidence_threshold | Minimum required confidence for the insight to be recognized.>
    
      // 'detectPhrases': True,
      // <Optional, boolean| detect_phrases> |Accepted values are true & false. It shows Actionable Phrases in each sentence of conversation. These sentences can be found in the Conversation's Messages API.
    
      // 'enableSeparateRecognitionPerChannel': True,
      // "<Optional, boolean| enable_separate_recognition_per_channel> |Enables Speaker Separated Channel audio processing. Accepts true or false.
    
      // 'channelMetadata': [{"channel": 1, "speaker": {"name": "Robert Bartheon", "email": "robertbartheon@gmail.com"}}],
      // ["<Optional, boolean| channel_metadata> |This object parameter contains two variables speaker and channel to specific which speaker corresponds to which channel. This object only works when enableSeparateRecognitionPerChannel query param is set to true."
    
      // 'languageCode': "en-US"  // <Optional, boolean| language_code> |code of language of recording.
    }
    const audioOption = {
      url: 'https://api.symbl.ai/v1/process/audio',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'audio/wav'
      },
      qs: params,
      json: true,
    };
    
    const responses = {
      400: 'Bad Request! Please refer docs for correct input fields.',
      401: 'Unauthorized. Please generate a new access token.',
      404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
      429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
      500: 'Something went wrong! Please contact support@symbl.ai'
    }
    
    audioFileStream.pipe(request.post(audioOption, (err, response, body) => {
      const statusCode = response.statusCode;
      if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
        throw new Error(responses[statusCode]);
      }
      console.log('Status code: ', statusCode);
      console.log('Body', body);
      var {conversationId} = body
      var {jobId}=body
      job_status(accessToken,jobId);

      
        setTimeout(() => {
          get_conversation(conversationId,accessToken,(error,result)=>{
            if(error) {
              return callback(error,undefined);
            }
            
              const objectValue = JSON.parse(result);
              console.log(objectValue.url);
            return callback(undefined,objectValue.url);
          })
        }, 5*1000);
      
      // get_conversation(conversationId,accessToken,(error,result)=>{
      //   if(error) {
      //     return callback(error,undefined);
      //   }
      //   return callback(undefined,result);
      // })
      

    }));
});

}

// function to get the  message from the conversationId

module.exports=auth_upld;





