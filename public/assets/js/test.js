 //client side javascript code to real time button system sound record button invocation function
 var common_id;

 const submit_system_sound=document.getElementById('submit_system_sound');
 submit_system_sound.addEventListener('click',()=>{
		console.log("Real time recorder with the system sound");
		var language_sys = document.querySelector("#language_sys");
		output = language_sys.value;
		console.log("Language Selected to record: ",output)
			 
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
		 
})

//client side javascript code to real time button Micropghone record button invocation function
const submit_mic=document.getElementById('submit_mic');
submit_mic.addEventListener('click',()=>{
	console.log("Real time recorder with the Microphone sound");
	var language_mic = document.querySelector("#language_mic");
	output = language_mic.value;
	console.log('Language Selected to record: ',output);
	 
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

			
})

//client side javascript code to real time button both the system and mic record button invocation function
const submit_both_sound=document.getElementById('submit_both_sound');
submit_both_sound.addEventListener('click',()=>{
	console.log("Real time recorder both");
	var language_both = document.querySelector("#language_both");
	output = language_both.value;
	console.log('Language Selected to record: ',output);
			
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