const request = require('request');



const get_message=(id,authToken,callback)=>
  {
    request.post({
      url: `https://api.symbl.ai/v1/conversations/${id}/experiences`,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        "name": "verbose-text-summary",
        "logo": "https://symblsanitydata.s3.us-east-2.amazonaws.com/symbl-logo.png",
        "favicon" :"https://symblsanitydata.s3.us-east-2.amazonaws.com/symbl-favicon.png",
        "color": {
          "background": "#0A2136",
          "topicsFilter": "#FF0000",
          "insightsFilter": "#FF0000"
           },
        "font": {
          "family": "roboto"
        },
        "readOnly": true
      }),
  }, (err, response, body) => {
      callback(undefined,body);
  });

    // let final_object={messages:null,actionItems:null,followUps:null,topics:null,questions:null};
    // let result=null;
    // const url_messagesl=`https://api.symbl.ai/v1/conversations/${id}/messages`
    // const url_action_item=`https://api.symbl.ai/v1/conversations/${id}/action-items`
    // const url_followUps=`https://api.symbl.ai/v1/conversations/${id}/follow-ups`
    // const url_topics=`https://api.symbl.ai/v1/conversations/${id}/topics`
    // const url_questions=`https://api.symbl.ai/v1/conversations/${id}/questions`
    // setTimeout(() => {
      
     

    //   request.get({url: url_messagesl,headers: { 'Authorization': `Bearer ${authToken}`},json: true},(err, response, body) =>
    //   {
    //           if(!body.messages.length ===0)
    //           {
    //           result=body.messages.map(function(i){
    //           return i.text
    //           })
    //           final_object.messages =result.join(' ');
    //           }
              
    //           // return callback(undefined,result_var);

    //           //action_item
    //           request.get({url: url_action_item,headers: { 'Authorization': `Bearer ${authToken}` },json: true}, (err, response, body) => {
    //             if(!body.actionItems.length ===0) {
    //             result=body.actionItems.map(function(i){
    //             return i.text
    //           })
    //           final_object.actionItems =result.join(' ');
    //           }

    //           //action_item
    //           request.get({url: url_followUps,headers: { 'Authorization': `Bearer ${authToken}` },json: true}, (err, response, body) => {
    //             if(!body.followUps.length ===0) {
    //             result=body.followUps.map(function(i){
    //             return i.text
    //           })
    //           final_object.followUps =result.join(' ');
    //           }

    //             //action_item
    //             request.get({url: url_topics,headers: { 'Authorization': `Bearer ${authToken}` },json: true}, (err, response, body) => {
    //               if(!body.topics.length ===0) {
    //               result=body.topics.map(function(i){
    //               return i.text
    //             })
    //             final_object.topics =result.join(' ');
    //             }

    //               //action_item
    //           request.get({url: url_questions,headers: { 'Authorization': `Bearer ${authToken}` },json: true}, (err, response, body) => {
    //             if(!body.questions.length ===0) {
    //             result=body.questions.map(function(i){
    //             return i.text
    //           })
    //           final_object.questions =result.join(' ');
    //           }


              
    //         })
  
  
                
    //           })


              
    //         })
    // });

    // })  
    // }, 10000);
     
  }


module.exports=get_message