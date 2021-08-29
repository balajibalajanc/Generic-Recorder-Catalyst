const request = require('request');


function job_status(text,targ,callback){
var text_val=String(text);
var targ_val=String(targ);
const options = {
  method: 'POST',
  url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'accept-encoding': 'application/gzip',
    'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
    'x-rapidapi-key': process.env.rapid_key,
    useQueryString: true
  },
  form: {q: text_val, target: targ_val, source: 'en'}
};

request(options, function (error, response, body) {
	if (error) {throw new Error(error,undefined);}
  
  callback(undefined,body)

});

}

module.exports= job_status;




// request.get({
//   url: `https://api.symbl.ai/v1/job/${JOB_ID}`,
//   headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` },
//   json: true
//  }, (err, response, body) => {
// console.log("Job_status ",body.status);

// if (body.status==='completed')
// {
// console.log("Status Completed");
// }

// else{
// job_status(AUTH_TOKEN,JOB_ID)
// }
// });
// var waitTill = new Date(new Date().getTime() + 5 * 1000);
// while(waitTill > new Date()){

    
// }

// console.log("After");