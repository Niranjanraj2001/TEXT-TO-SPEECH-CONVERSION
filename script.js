
       const textToSpeak = document.getElementById('textToSpeak');
       //let voices;

       function textToSpeech(){
        
        let speechObj=new SpeechSynthesisUtterance(textToSpeak.value);
        //speechObj.voice=voices[10];
        window.speechSynthesis.speak(speechObj);
       }


    //    speechSynthesis.onvoiceschanged=() =>{
    //     voices=speechSynthesis.getVoices();
    //     console.log(speechSynthesis.getVoices());
    //    }

    