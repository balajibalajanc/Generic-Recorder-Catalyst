const request = require('request');
// const authToken = AUTH_TOKEN;
// const webhookUrl = WEBHOOK_URL;

const post_vid=(url,callback)=>{

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


    const payload = {
      'url': url,
      // A valid url string. The URL must be a publicly accessible url.
      'name': "BusinessMeeting",
      // <Optional, string| your_conversation_name | Your meeting name. Default name set to conversationId.>
      'confidenceThreshold': 0.6,
      // <Optional, double| confidence_threshold | Minimum required confidence for the insight to be recognized.>
      // 'webhookUrl': "https://yourdomain.com/jobs/callback",
      // <Optional, string| your_webhook_url| Webhook url on which job updates to be sent. (This should be post API)>
      // 'customVocabulary': ['Platform', 'Discussion', 'Targets'],
      // <Optional, list| custom_vocabulary_list> |Contains a list of words and phrases that provide hints to the speech recognition task.
      // 'detectPhrases': true,
      // <Optional, boolean| detect_phrases |Accepted values are true & false. It shows Actionable Phrases in each sentence of conversation. These sentences can be found in the Conversation's Messages API.>
      // 'languageCode': "en-US"
      // <Optional, boolean| language_code> |code of language of recording.>
    }
    
    const videoOption = {
      url: 'https://api.symbl.ai/v1/process/video/url',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      // qs: {
      //   webhookUrl: webhookUrl,
      //   customEntities: [{
      //     "customType": "Custom_Entity_Type",
      //     "text": "Custom Entity to be searched in transcript"
      //   }]
      // },
      body: JSON.stringify(payload)
    };
    
    const responses = {
      400: 'Bad Request! Please refer docs for correct input fields.',
      401: 'Unauthorized. Please generate a new access token.',
      404: 'The conversation and/or it\'s metadata you asked could not be found, please check the input provided',
      429: 'Maximum number of concurrent jobs reached. Please wait for some requests to complete.',
      500: 'Something went wrong! Please contact support@symbl.ai'
    }
    
    request.post(videoOption, (err, response, body) => {
      const statusCode = response.statusCode;
      if (err || Object.keys(responses).indexOf(statusCode.toString()) !== -1) {
        callback(Error(responses[statusCode]),undefined)
      }
      console.log('Status code: ', statusCode);
      console.log('Body', response.body);
      callback(undefined,response.body)
    });
  });

}

module.exports=post_vid;