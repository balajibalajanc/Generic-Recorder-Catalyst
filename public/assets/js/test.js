 //client side javascript code to real time button system sound record button invocation function
 var common_id;
 const submit_system_sound=document.getElementById('submit_system_sound');
 submit_system_sound.addEventListener('click',()=>{
		console.log("Real time recorder with the system sound");
		  //request
		  //window.location.href="../../Transcripting.html"
			if(common_id !== undefined)
			{
				console.log(common_id);
				fetch('/RTR?search='+encodeURIComponent(common_id)).then((response)=>{
					response.json().then((data)=>{
						console.log(data.url);
						window.open(data.url,'_blank');
				})
			})
				
			}
		//   $('#js-preloader').addClass('loaded');	
		 else{ fetch('/RTR').then((response)=>{
			response.json().then((data)=>{
				console.log(data.url);
				window.open(data.url,'_blank');
		})
	})
		 }
})

//client side javascript code to real time button Micropghone record button invocation function
const submit_mic=document.getElementById('submit_mic');
submit_mic.addEventListener('click',()=>{
	console.log("Real time recorder with the Microphone sound");
	  //request
	  if(common_id !== undefined)
			{
				fetch('/RTR_mic?search='+encodeURIComponent(common_id)).then((response)=>{
					response.json().then((data)=>{
						console.log(data.url);
						window.open(data.url,'_blank');
				})
			})
			}
			else{
	  fetch('/RTR_mic').then((response)=>{
		response.json().then((data)=>{
			console.log(data.url);
			window.open(data.url,'_blank');
	})
})
			}
})

//client side javascript code to real time button both the system and mic record button invocation function
const submit_both_sound=document.getElementById('submit_both_sound');
submit_both_sound.addEventListener('click',()=>{
	console.log("Real time recorder both");
	  //request

	  if(common_id !== undefined)
			{
				fetch('/RTR_both?search='+encodeURIComponent(common_id)).then((response)=>{
					console.log(response)
				  response.json().then((data)=>{
					  console.log(data.url);
					  window.open(data.url,'_blank');
			  })
		  })
			}
			else{  fetch('/RTR_both').then((response)=>{
				console.log(response)
			  response.json().then((data)=>{
				  console.log(data.url);
				  window.open(data.url,'_blank');
		  })
	  })
	}
	
})

//client side javascript code to real time button system sound record button invocation function
const submit_ind_app=document.getElementById('submit_ind_app');
submit_ind_app.addEventListener('click',()=>{
	console.log("Real time recorder with the independent application sound");
	  //request
	  //window.location.href="../../Transcripting.html"
	  if(common_id !== undefined)
	  {  fetch('/RTR_Line?search='+encodeURIComponent(common_id)).then((response)=>{
		response.json().then((data)=>{
			console.log(data.url);
			window.open(data.url,'_blank');
	})
})

}
	  else{  fetch('/RTR_Line').then((response)=>{
		response.json().then((data)=>{
			console.log(data.url);
			window.open(data.url,'_blank');
	})
})
}
	//   $('#js-preloader').addClass('loaded');	
	

})

//paste_audio transcribe btn click

function geturl()
{
	const url = document.getElementById("Url_link").value;
	console.log(url);
	fetch('/paste_url?search='+encodeURIComponent(url)).then((response)=>{
		response.json().then((data)=>{
			console.log(data.url);
			window.open(data.url,'_blank');
	})
			console.log("success client js",response)
	})
}

function mailsubs()
{
	const mail_id = document.getElementById("mail_id").value;
	common_id=mail_id
	console.log(common_id);
	// fetch('/paste_url?search='+encodeURIComponent(url)).then((response)=>{
	// 	response.json().then((data)=>{
	// 		console.log(data.url);
	// 		window.location.href = data.url;
	// })
	// 		console.log("success client js",response)
	// })
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
				
				function geturl() 
				{
					
					var url = document.getElementById("Url_link").value;
					console.log(url);
				}
			