Webcam.set({
    width:350,
    height:300,
    image_format: 'png' ,
    png_quality:90
    });
    camera=document.getElementById("camera");
    
    Webcam.attach('#camera');
    
    function take_snapshot(){
        Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image"/>';
        });
    }
    
    console.log('ml5 version:' , ml5.version);
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/EcYW8wpu9/model.json' , modelLoaded);
    
        function modelLoaded(){
            console.log('Model Loaded!');
        }
    
        function check(){
            img=document.getElementById('captured_image');
            classifier.classify(img , gotResult);
        }
    
        
    function gotResult(error , results){
        if(error){
          console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML=results[0].label;
            document.getElementById("result_emotion_name2").innerHTML=results[1].label;
            if(results[0].label == "Cheese"){
                document.getElementById("update_emoji").innerHTML="&#9996;";
            }
            if(results[0].label == "Thumbs Up"){
                document.getElementById("update_emoji").innerHTML="&#128077;";
            }
            if(results[0].label == "Great"){
                document.getElementById("update_emoji").innerHTML="&#128076;";
            }
            if(results[0].label == "Hi-Fi"){
                document.getElementById("update_emoji").innerHTML="&#128400;";
            }
            if(results[0].label == "Hello"){
                document.getElementById("update_emoji").innerHTML="&#128075;";
            }
            if(results[0].label == "Clap"){
                document.getElementById("update_emoji").innerHTML="&#128079;";
            }
            if(results[0].label == "Yo Bro"){
                document.getElementById("update_emoji").innerHTML="&#129304;";
            }


            if(results[1].label == "Cheese"){
                document.getElementById("update_emoji2").innerHTML="&#9996;";
            }
            if(results[1].label == "Thumbs Up"){
                document.getElementById("update_emoji2").innerHTML="&#128077;";
            }
            if(results[1].label == "Great"){
                document.getElementById("update_emoji2").innerHTML="&#128076;";
            }
            if(results[1].label == "Hi-Fi"){
                document.getElementById("update_emoji2").innerHTML="&#128400;";
            }
            if(results[1].label == "Hello"){
                document.getElementById("update_emoji2").innerHTML="&#128075;";
            }
            if(results[1].label == "Clap"){
                document.getElementById("update_emoji2").innerHTML="&#128079;";
            }
            if(results[1].label == "Yo Bro"){
                document.getElementById("update_emoji2").innerHTML="&#129304;";
            }
        }
    }