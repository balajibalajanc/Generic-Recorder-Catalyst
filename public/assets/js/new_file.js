var temp_obj;
window.onload = function () {
  
    var jsonString = (localStorage.getItem('final_obj'))
    var fin_obj = JSON.parse(jsonString);

    console.log(fin_obj.url)
    temp_obj=fin_obj;
    var out_click="";
    out_click+=`<ul>
         <li>
        <a id="transcript_summary_tab_space" class="col-lg-auto"> ${temp_obj.messages}</a> 
       </li>
       </ul>`;

       $('#Transcript_Summary_Space').html(out_click);
}

function click_summany_tab_1(){
    var out_click="";
    out_click+=`<ul>
         <li>
        <a id="transcript_summary_tab_space" class="col-lg-auto"> ${temp_obj.messages}</a> 
       </li>
       </ul>`;

       $('#Transcript_Summary_Space').html(out_click);
}

function click_summany_sent_tab_2(){
     var out_click="";
    word_to_emoj=temp_obj.sent_a.map((i)=>{
            if(i ==='neutral'){return '😐'}
            if(i ==='positive'){ return '😇'}
            if(i==='negative'){ return '🤐'}
    })
     for(var i in temp_obj.messages_array)
     {
        out_click+=`<ul>
         <li>
         <a class="col-lg-2">${word_to_emoj[i]}</a>  <a id="transcript_summary_tab_space" class="col-lg-9"> ${temp_obj.messages_array[i]}</a> 
       </li>
       </ul>`;
     }

     $('#Transcription_Summary_with_sentiment_Space').html(out_click);
 }


 function mailsubs()
{
	var mailid = document.getElementById("mail_id").value;	
	var mailmsg = document.getElementById("mail_msg").value;
	console.log(mailmsg);
  console.log(mailid);

  $.ajax( {
    type:"GET",
    url:'/mail_send?id='+encodeURIComponent(mailid)+'&subject='+encodeURIComponent(mailmsg)+'&msg='+encodeURIComponent(temp_obj.url),
    dataType:"json",
    beforeSend:function(){
      // $('#js-preloader').addClass('unloaded');
    } ,
    success:function(result) {
      // var out_click="";
      //  out=result.data
      //  val=out.translations
      //   console.log(val[0].translatedText);

      //   out_click+=`<ul>
      //   <li>
      //  <a class="col-lg-auto"> ${val[0].translatedText}</a> 
      // </li>
      // </ul>`;

      // $('#Translation_space').html(out_click);
        
    }
   });
	
}

function briefsubs(){
window.location.href=temp_obj.url;
}



function trans_lang(){
  var language_trans = document.querySelector("#language_trans");
				output = language_trans.value;
				console.log(output);
        console.log(temp_obj.messages);

        $.ajax( {
					type:"GET",
					url:'/trans?search='+encodeURIComponent(output)+'&msg='+encodeURIComponent(temp_obj.messages),
					dataType:"json",
					beforeSend:function(){
						// $('#js-preloader').addClass('unloaded');
					} ,
					success:function(result) {
            var out_click="";
             out=result.data
             val=out.translations
            	console.log(val[0].translatedText);

              out_click+=`<ul>
              <li>
             <a class="col-lg-auto"> ${val[0].translatedText}</a> 
            </li>
            </ul>`;
     
            $('#Translation_space').html(out_click);
              
					}
				 });


}


function chart(){

 var xValues = temp_obj.analytics.x_met;
var yValues = temp_obj.analytics.y_met;
var barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "Metric in Barchart"
    }
  }
});


var barColors = ["red", "green","blue","orange","brown"];

new Chart("mysecChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Metric in BarChart"
    }
  }
});

}


function a_f_q_t(){
       document.getElementById('action_item_tab_space').innerHTML=temp_obj.actionItems
       document.getElementById('Follow_Up_tab_space').innerHTML=temp_obj.followUps
       document.getElementById('Questions_tab_space').innerHTML=temp_obj.questions
       document.getElementById('Topics_tab_space').innerHTML=temp_obj.topics
       
}


function mem_track_analysis(){
    var xValues = ["User1"];
var yValues_pace = temp_obj.member_track_analysis.m_pace
var barColors_pace = ["red"];

new Chart("pace_mem_Chart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors_pace,
      data: yValues_pace
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Memebers Voice Pace"
    }
  }
});

 yValues_talk = temp_obj.member_track_analysis.m_talktime
 barColors_talk = ["blue"];

new Chart("talk_mem_Chart", {
    type: "doughnut",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors_talk,
        data: yValues_talk
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Members talk time"
      }
    }
  });

  yValues_listen = temp_obj.member_track_analysis.m_listentime
  barColors_listen = ["green"];

  new Chart("listen_mem_chart", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors_listen,
        data: yValues_listen
      }]
    },
    options: {
      legend: {display: false},
      title: {
        display: true,
        text: "Memebers listen time"
      }
    }
  });
}