var submitkey=document.getElementById("submit");
var words=document.getElementById("output");
var definition1=document.getElementById("definition1");
var definition2=document.getElementById("definition2");
var definition3=document.getElementById("definition3");
var partofspeech=document.getElementById("partofspeech");
var searching=document.querySelector('input[type=search]');
searching.addEventListener('search', function () {
    words.innerHTML="";
    definition1.innerHTML="";
definition2.innerHTML="";
definition3.innerHTML="";
partofspeech.innerHTML="";
});
submitkey.addEventListener("click",e=>{
    let searchword=document.querySelector(".search").value;
    if(!searchword.length){
        words.innerHTML="Enter a word again"
        definition1.innerHTML="";
definition2.innerHTML="";
definition3.innerHTML="";
partofspeech.innerHTML="";
    }
    fetch(`https://wordsapiv1.p.rapidapi.com/words/${searchword}/definitions`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "db70ae1a3bmsh31b59520504c403p17a791jsn32ea6aa793c2",
            "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
	}
    
})
.then(response => {
 return response.json();
}).then(result=>{
    if(result.message){
        words.innerHTML=result.message;
        definition1.innerHTML="";
definition2.innerHTML="";
definition3.innerHTML="";
partofspeech.innerHTML="";
    }else{
        definition1.innerHTML=`${result.definitions[0].definition}.`;
definition2.innerHTML=`${result.definitions[1].definition}.`;
definition3.innerHTML=`${result.definitions[2].definition}.`;
partofspeech.innerHTML=`Part of speech: ${result.definitions[0].partOfSpeech}`;
words.innerHTML=result.word.toUpperCase()
    }
    



}
)
.catch(err => {
	console.error(err.data);
    
});
})

