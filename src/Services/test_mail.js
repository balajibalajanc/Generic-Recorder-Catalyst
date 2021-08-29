const request = require('request');

var auth='EwBgA8l6BAAU6k7+XVQzkGyMv7VHB/h4cHbJYRAAAby/itvCVMQvsqWBtH9S6PkOcKfoC61eeGBb46Ak1nDnqDu7QUEZmkZgucRPRmtYFHKNWrf4niPZl7SY4Z+44h7a+PIS+jDSf/ZGCQWPCO1pTDp3SBPFXK/M/RwnwX/xegIkRpIwcwNjlGOUCabo9EOruto++z9SPSlVtTSdCQhsxyh02MINFNhMRH/LN2OO+9cWIFRXfwUZPnN1UEWkAMtzDe75gibFnKvdIV0pENlTOjzYtgoE/Ch3zmoUkGlmUvNet0Nq7vTmFc3MZ1Rl9EQiuyxsVu0HVCiNKnvjbCW08PiusiYjtLrGTRHiftd2JK/jK3bCQzXq3EPvBqSUxRADZgAACDEs3QNUutkZMAJW2YGZldEnZ0xUIW+eVkn1RFtHtp23vLlv1BFdciLkd/fAxUa4sQyXzhpy2jHsW6TdhWWWL8dieMqUCWp/XqHqq0E48KXo95CY0PSvXKx+Bdlwyd3Tz3Rjh0EGQLfJQeHTyD05qpk8jjY/yQMdELM17qDbjjoYFWaN/20ex5KHXhaGXy8wiOwqfMae8XJ+oOrkHInTD2dcrmgK1c2xXGAhsxc/FtvMN2kQ3drVwknEvitwXGmIkalFX8Nm3SG0WtFt2qI6F9Ne0npwGgHQxhAyyGRUcvGjsoFVkMHHVFSF+CnRPI2Yi4/QAhTvzUzmVfsBoYV8XB9dtl9jwWaRvC3QcygNobf+55QHuUlbcHotJb0+qFIYM/guLslu7x9fKC3SBRAn23grx0s8fCUfPsvB3U+LIWuvThN1gUfC44s182jEeQA4JvJnaMNfZS5/AfZq2TqFCGDeth41hyRKdxBkl2j0lGe/yBS7TeymxRZLOvH9KPYPVidJasvcU+tlWHgOY4Nz6h2xsrae+64x5PGxSWHLyqZ2xqnM/OPYDBIV91el7IuwGnYV2/kJb/NL9ioYbsNpVDnBTNFaOV6mYilChdUw1+Dk98Ebukj8HV6TRJgZQnTh1t3p8zIWgMa8j/ZDEIl255CInCHwBOYo9VUaRBRofoSrYtdEzq/6TGd6GH1PDF76ogPiStmtdynRvbxwcvKT1wGT7tdFQr0L6gC5qzUDfZeyVpz0+K83YsDGsYIC'

function job_status(AUTH_TOKEN){
request.get({
    url: `https://graph.microsoft.com/v1.0/me/calendarview?startdatetime=2021-08-27T09:59:35.906Z&enddatetime=2021-09-03T09:59:35.906Z`,
    headers: { 'Authorization': `Bearer ${AUTH_TOKEN}` },
    json: true
   }, (err, response, body) => {

var final_temp={
};

var fin=body.value.map(function(i){
    final_temp.subject =i.subject;
    final_temp.body=i.bodyPreview;
    var start=i.start
    var end=i.end
    final_temp.start_time=start.dateTime
    final_temp.end_time=end.dateTime

    return  final_temp;
})

console.log(fin)

})

   }



   job_status(auth);