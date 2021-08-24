const request = require('request');
console.log("Before");
var AUTH_TOKEN='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjYwNjA3MTA4MjkyMjgwMzIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiVmVQR0ozanlMM2s5TndwejJwZkswQnZBSEUyc0FrRHhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI5NjkxMjA0LCJleHAiOjE2Mjk3Nzc2MDQsImF6cCI6IlZlUEdKM2p5TDNrOU53cHoycGZLMEJ2QUhFMnNBa0R4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.wFKZvYhbhv0USDYQl6T8bRO13WhUyMq4g0W6C-58bCgj-vMYnys2MtbW4kVRD83CLFRpL1GLbYyWvD32buMvG18ToLFzGZ9G25at3tnErVN3W3GTdszPGwFCmmncx_WPiz5sPU_DOeTY_uxpyRYe_JmKnyLJ78dNa6eoEQhXnbwPSphLp--kGjlCS0UBGNVG_LvnIOEBEYXt7AqhR82L-j1906MeKllYrXlbCufdZet71NMVmRaGvJd67iPkQEOmWybG5XqhvA1XAccWNApQd4bt4PDFMW9uKnhytYu09NCkEcQlhDENvQtBBgRpfQUUm4XjcE8cqHpNPX2vOYMslQ'
var JOB_ID='a0442ed7-ba7c-4a1b-9527-bce03c813acc'

function job_status(AUTH_TOKEN,JOB_ID){

   
    request.get({
                  url: `https://api.symbl.ai/v1/job/${JOB_ID}`,
                  headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` },
                  json: true
                 }, (err, response, body) => {
      console.log("Job_status ",body.status);
      
      if (body.status==='completed')
      {
        console.log("Status Completed");
      }

      else{
        job_status(AUTH_TOKEN,JOB_ID)
      }
});



}

job_status(AUTH_TOKEN,JOB_ID)

// var waitTill = new Date(new Date().getTime() + 5 * 1000);
// while(waitTill > new Date()){

    
// }

// console.log("After");