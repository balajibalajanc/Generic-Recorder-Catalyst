const request = require('request');




const get_max_details=(id,authToken,data_url,callback) => {
let result = null;
var final_object = {
    messages: null,
    actionItems: null,
    followUps: null,
    topics: null,
    questions: null,
    messages_array:null,
    sent_a:null,
    analytics:null,
    member_track_analysis:null,
    url:data_url
};
let mess={}
const url_messagesl = `https://api.symbl.ai/v1/conversations/${id}/messages?sentiment=true`
const url_action_item = `https://api.symbl.ai/v1/conversations/${id}/action-items`
const url_followUps = `https://api.symbl.ai/v1/conversations/${id}/follow-ups`
const url_topics = `https://api.symbl.ai/v1/conversations/${id}/topics`
const url_questions = `https://api.symbl.ai/v1/conversations/${id}/questions`
const url_analytics = `https://api.symbl.ai/v1/conversations/${id}/analytics`
const url_sent=`https://api.symbl.ai/v1/conversations/${id}/messages?sentiment=true`

request.get({
    url: url_messagesl,
    headers: {
        'Authorization': `Bearer ${authToken}`
    },
    json: true
}, (err, response, body) => {
    if (body.messages.length) {
        result=body.messages.map(function(value) {
            return value.text
        })
        final_object.messages_array=result
        final_object.messages = result.join(' ');
    }

    // return callback(undefined,result_var);
    //action_item
    request.get({
        url: url_action_item,
        headers: {
            'Authorization': `Bearer ${authToken}`
        },
        json: true
    }, (err, response, body) => {
        if (body.actionItems.length) {
            result = body.actionItems.map(function(i) {
                return i.text
            })
            final_object.actionItems = result.join(' ');
        }

        //action_item
        request.get({
            url: url_followUps,
            headers: {
                'Authorization': `Bearer ${authToken}`
            },
            json: true
        }, (err, response, body) => {
            if (body.followUps.length) {
                result = body.followUps.map(function(i) {
                    return i.text
                })
                final_object.followUps = result.join(' ');
            }

            //action_item
            request.get({
                url: url_topics,
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                json: true
            }, (err, response, body) => {
                if (body.topics.length) {
                    result = body.topics.map(function(i) {
                        return i.text
                    })
                    final_object.topics = result.join(' ');
                }

                //action_item
                request.get({
                    url: url_questions,
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    },
                    json: true
                }, (err, response, body) => {
                    if (body.questions.length ) {
                        result = body.questions.map(function(i) {
                            return i.text
                        })
                        final_object.questions = result.join(' ');
                    }

                    request.get({
                        url: url_sent,
                        headers: {
                            'Authorization': `Bearer ${authToken}`
                        },
                        json: true
                    }, (err, response, body) => {
                        //console.log(body);
                        if (body.messages.length) {
                            sent=body.messages.map(function(value) {
                                return value.sentiment.suggested
                            })
                            final_object.sent_a=sent
                            
                        }

                        request.get({
                            url: url_analytics,
                            headers: {
                                'Authorization': `Bearer ${authToken}`
                            },
                            json: true
                        }, (err, response, body) => {
                            

                            var x_met=[];
                            var y_met=[];
                            body.metrics.forEach((i)=>{
                                x_met.push(i.type);
                                y_met.push(i.percent);
                            })
                            var m_pace=[];
                            var m_talktime=[];
                            var m_listentime=[];
                            body.members.forEach((i)=>{
                                m_pace.push(i.pace.wpm);
                                m_talktime.push(i.talkTime.percentage);
                                m_listentime.push(i.listenTime.percentage)
                            })
                            
                            final_object.member_track_analysis={m_pace:m_pace,m_talktime:m_talktime,m_listentime:m_listentime}
                            final_object.analytics={x_met: x_met, y_met: y_met}
                            
                           // console.log(final_object);
                            const one_final_obj=JSON.stringify(final_object);
                            callback(undefined,one_final_obj);
                        });

                    });


                })



            })



        })
    });

})

}

const id_tk='6309078058926080'
const accesstk='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlFVUTRNemhDUVVWQk1rTkJNemszUTBNMlFVVTRRekkyUmpWQ056VTJRelUxUTBVeE5EZzFNUSJ9.eyJodHRwczovL3BsYXRmb3JtLnN5bWJsLmFpL3VzZXJJZCI6IjYwNjA3MTA4MjkyMjgwMzIiLCJpc3MiOiJodHRwczovL2RpcmVjdC1wbGF0Zm9ybS5hdXRoMC5jb20vIiwic3ViIjoiVmVQR0ozanlMM2s5TndwejJwZkswQnZBSEUyc0FrRHhAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vcGxhdGZvcm0ucmFtbWVyLmFpIiwiaWF0IjoxNjI5NjkxMjA0LCJleHAiOjE2Mjk3Nzc2MDQsImF6cCI6IlZlUEdKM2p5TDNrOU53cHoycGZLMEJ2QUhFMnNBa0R4IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.wFKZvYhbhv0USDYQl6T8bRO13WhUyMq4g0W6C-58bCgj-vMYnys2MtbW4kVRD83CLFRpL1GLbYyWvD32buMvG18ToLFzGZ9G25at3tnErVN3W3GTdszPGwFCmmncx_WPiz5sPU_DOeTY_uxpyRYe_JmKnyLJ78dNa6eoEQhXnbwPSphLp--kGjlCS0UBGNVG_LvnIOEBEYXt7AqhR82L-j1906MeKllYrXlbCufdZet71NMVmRaGvJd67iPkQEOmWybG5XqhvA1XAccWNApQd4bt4PDFMW9uKnhytYu09NCkEcQlhDENvQtBBgRpfQUUm4XjcE8cqHpNPX2vOYMslQ'
module.exports=get_max_details;