const request = require('request');
const get_object_conversation=require('./Getting_insights');


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
    const temp_bod=JSON.parse(body)
    get_object_conversation(id,authToken,temp_bod.url,(error,result)=>{
      if (error) {
        return  callback(error,undefined);
    }
    callback(undefined,result);
    })
      
  });

     
  }


module.exports=get_message