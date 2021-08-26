 //client side javascript code to real time button system sound record button invocation function
 var common_id;
//  var temp_obj={
// 	messages: 'I will share the file to Thomas for the team wise analysis. We need to meet today, and we will discuss how to organise stock valuation certificate. Can I get the resected code today? I will follow up with you next week on the thesis.',
// 	actionItems: 'We need to meet today, and we need to discuss how to organise stock valuation certificate.',
// 	followUps: 'I will follow up with you next week on the thesis. I will share the file to Thomas for the team wise analysis.',
// 	topics: 'team wise analysis stock valuation certificate',
// 	questions: 'Can I get the resected code today?',
// 	messages_array: [
// 	  'I will share the file to Thomas for the team wise analysis.',
// 	  'We need to meet today, and we will discuss how to organise stock valuation certificate.',
// 	  'Can I get the resected code today?',
// 	  'I will follow up with you next week on the thesis.'
// 	],
// 	sent_a: ['neutral','positive','negative','neutral'],
// 	analytics: {
// 		x_met: [ 'total_silence', 'total_talk_time', 'total_overlap' ],
// 		y_met: [ 26.566, 73.434, 0 ]
// 	  },
// 	  member_track_analysis: { m_pace: [ 148,120 ], m_talktime: [ 64,36 ], m_listentime: [ 36,64 ] }
//   };

 const submit_system_sound=document.getElementById('submit_system_sound');
 submit_system_sound.addEventListener('click',()=>{
		console.log("Real time recorder with the system sound");
		  //request
		  //window.location.href="../../Transcripting.html"
		  var language_sys = document.querySelector("#language_sys");
		 output = language_sys.value;
		 console.log("as",output)

			if(common_id !== undefined)
			{
				$.ajax( {
					type:"GET",
					url:'/RTR?search='+encodeURIComponent(common_id),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						window.location.href=data.url;
					}
				 });
				
			}
		 else{
			 
			$.ajax( {
				type:"GET",
				url:'/RTR?search='+encodeURIComponent(output),
				dataType:"json",
				beforeSend:function(){
					$('#js-preloader').addClass('unloaded');
				} ,
				success:function(data) {
					console.log(data);
					localStorage.clear();
					//window.location.href=data.url;
					url_loc='../../final_transcript.html?name='+ (data);
					localStorage.setItem('final_obj',JSON.stringify(data));
					window.location.href=url_loc;
				}
			 });
		 }
})

//client side javascript code to real time button Micropghone record button invocation function
const submit_mic=document.getElementById('submit_mic');
submit_mic.addEventListener('click',()=>{
	console.log("Real time recorder with the Microphone sound");
	  //request
	  var language_mic = document.querySelector("#language_mic");
				output = language_mic.value;
				console.log(output);
	  if(common_id !== undefined)
			{
				$.ajax( {
					type:"GET",
					url:'/RTR_mic?search='+encodeURIComponent(common_id),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						window.location.href=data.url;
					}
				 });

			}
			else{
				

				$.ajax( {
					type:"GET",
					url:'/RTR_mic?search='+encodeURIComponent(output),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						localStorage.clear();
						//window.location.href=data.url;
						url_loc='../../final_transcript.html?name='+ (data);
						localStorage.setItem('final_obj',JSON.stringify(data));
						window.location.href=url_loc;
					}
				 });

			}
})

//client side javascript code to real time button both the system and mic record button invocation function
const submit_both_sound=document.getElementById('submit_both_sound');
submit_both_sound.addEventListener('click',()=>{
	console.log("Real time recorder both");
	  //request
	  var language_both = document.querySelector("#language_both");
	  output = language_both.value;
				console.log(output);

	  if(common_id !== undefined)
			{

				$.ajax( {
					type:"GET",
					url:'/RTR_both?search='+encodeURIComponent(common_id),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						window.location.href=data.url;
					}
				 });

			}
			else{ 
				
				$.ajax( {
					type:"GET",
					url:'/RTR_both?search='+encodeURIComponent(output),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						localStorage.clear();
						//window.location.href=data.url;
						url_loc='../../final_transcript.html?name='+ (data);
						localStorage.setItem('final_obj',JSON.stringify(data));
						window.location.href=url_loc;
					}
				 });

	}
	
})

//client side javascript code to real time button system sound record button invocation function
const submit_ind_app=document.getElementById('submit_ind_app');
submit_ind_app.addEventListener('click',()=>{
	console.log("Real time recorder with the independent application sound");
	  //request
	  //window.location.href="../../Transcripting.html"
	  var language_line = document.querySelector("#language_line");
	  output = language_line.value;
				console.log(output);
	  if(common_id !== undefined)
	  {  
		$.ajax( {
					type:"GET",
					url:'/RTR_Line?search='+encodeURIComponent(common_id),
					dataType:"json",
					beforeSend:function(){
						$('#js-preloader').addClass('unloaded');
					} ,
					success:function(data) {
						console.log(data.url);
						window.location.href=data.url;
					}
				 });

}
	  else{  
		$.ajax( {
			type:"GET",
			url:'/RTR_Line?search='+encodeURIComponent(output),
			dataType:"json",
			beforeSend:function(){
				$('#js-preloader').addClass('unloaded');
			} ,
			success:function(data) {
				console.log(data.url);
				localStorage.clear();
				//window.location.href=data.url;
				url_loc='../../final_transcript.html?name='+ (data);
				localStorage.setItem('final_obj',JSON.stringify(data));
				window.location.href=url_loc;
			}
		 });


}
	//   $('#js-preloader').addClass('loaded');	
	

})

function load_dot(){
	$('#js-preloader').addClass('unloaded');
}

//paste_audio transcribe btn click

function geturl()
{
	const url = document.getElementById("Url_link").value;
	console.log("Paste_url_link "+url);
	fetch('/paste_url?search='+encodeURIComponent(url)).then((response)=>{
		response.json().then((data)=>{
			console.log(data.url);
			localStorage.clear();
				//window.location.href=data.url;
				url_loc='../../final_transcript.html?name='+ (data);
				localStorage.setItem('final_obj',JSON.stringify(data));
				window.location.href=url_loc;
	})
			console.log("success client js",response)
	})
}




	 
	 function func3() 
                {
                    if(document.getElementById("h").checked)
                    {
                        var val = document.getElementById("h").value;
                        console.log(val);
                    }
                    
                    else if(document.getElementById("r").checked)
                    {
                        var val = document.getElementById("r").value;
                        console.log(val);
                    }
                    
                    else if(document.getElementById("a").checked)
                    {
                        var val = document.getElementById("a").value;
                        console.log(val);
                    }
					
					else alert("Enter all the values");
                }
				
				
				 function funchappy() 
				 {
					   if(document.getElementById("b").checked)
                    {
                        var val1 = document.getElementById("b").value;
                        console.log(val1);
                    }
					 else if(document.getElementById("c").checked)
                    {
                        var val1 = document.getElementById("c").value;
                        console.log(val1);
                    }
					else alert("Enter all the values");
					 
				 }
				 
				 
				 function abc() 
				 {
					
					 var x = document.getElementById("Har").value;
					 console.log(x);
					 var y = document.getElementById("Bal").value;
					 console.log(y);
					 
				 }
				
				function audio() 
				 {
					
					var audio = document.getElementById("myaudio").value;
					console.log(audio);
				 }
				 
				 function start() 
				 {
					
					
					console.log("Start");
				 }


				function stop() 
				 {
					
					
					console.log("Stop");
				 }
	
					
				 
				 
				 
			

				 
// function click_summany_tab_1(){
//         var out_click="";
//         out_click+=`<ul>
//              <li>
//             <a id="transcript_summary_tab_space" class="col-lg-auto"> ${temp_obj.messages}</a> 
//            </li>
//            </ul>`;
    
//            $('#Transcript_Summary_Space').html(out_click);
//     }

// function click_summany_sent_tab_2(){
// 	 var out_click="";
// 	word_to_emoj=temp_obj.sent_a.map((i)=>{
// 			if(i ==='neutral'){return '😐'}
// 			if(i ==='positive'){ return '😇'}
// 			if(i==='negative'){ return '🤐'}
// 	})
// 	 for(var i in temp_obj.messages_array)
// 	 {
// 		out_click+=`<ul>
// 		 <li>
// 		 <a class="col-lg-2">${word_to_emoj[i]}</a>  <a id="transcript_summary_tab_space" class="col-lg-9"> ${temp_obj.messages_array[i]}</a> 
// 	   </li>
// 	   </ul>`;
// 	 }

// 	 $('#Transcription_Summary_with_sentiment_Space').html(out_click);
//  }


// function chart(){

//  var xValues = temp_obj.analytics.x_met;
// var yValues = temp_obj.analytics.y_met;
// var barColors = [
//   "#b91d47",
//   "#00aba9",
//   "#2b5797",
//   "#e8c3b9",
//   "#1e7145"
// ];

// new Chart("myChart", {
//   type: "pie",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     title: {
//       display: true,
//       text: "Metric in Barchart"
//     }
//   }
// });


// var barColors = ["red", "green","blue","orange","brown"];

// new Chart("mysecChart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors,
//       data: yValues
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "Metric in BarChart"
//     }
//   }
// });

// }


// function a_f_q_t(){
// 	   document.getElementById('action_item_tab_space').innerHTML=temp_obj.actionItems
// 	   document.getElementById('Follow_Up_tab_space').innerHTML=temp_obj.followUps
// 	   document.getElementById('Questions_tab_space').innerHTML=temp_obj.questions
// 	   document.getElementById('Topics_tab_space').innerHTML=temp_obj.topics
	   
// }


// function mem_track_analysis(){
// 	var xValues = ["User1"];
// var yValues_pace = temp_obj.member_track_analysis.m_pace
// var barColors_pace = ["red"];

// new Chart("pace_mem_Chart", {
//   type: "bar",
//   data: {
//     labels: xValues,
//     datasets: [{
//       backgroundColor: barColors_pace,
//       data: yValues_pace
//     }]
//   },
//   options: {
//     legend: {display: false},
//     title: {
//       display: true,
//       text: "Memebers Voice Pace"
//     }
//   }
// });

//  yValues_talk = temp_obj.member_track_analysis.m_talktime
//  barColors_talk = ["blue"];

// new Chart("talk_mem_Chart", {
// 	type: "doughnut",
// 	data: {
// 	  labels: xValues,
// 	  datasets: [{
// 		backgroundColor: barColors_talk,
// 		data: yValues_talk
// 	  }]
// 	},
// 	options: {
// 	  legend: {display: false},
// 	  title: {
// 		display: true,
// 		text: "Members talk time"
// 	  }
// 	}
//   });

//   yValues_listen = temp_obj.member_track_analysis.m_listentime
//   barColors_listen = ["green"];

//   new Chart("listen_mem_chart", {
// 	type: "bar",
// 	data: {
// 	  labels: xValues,
// 	  datasets: [{
// 		backgroundColor: barColors_listen,
// 		data: yValues_listen
// 	  }]
// 	},
// 	options: {
// 	  legend: {display: false},
// 	  title: {
// 		display: true,
// 		text: "Memebers listen time"
// 	  }
// 	}
//   });
// }