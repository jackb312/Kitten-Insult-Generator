var nounURL = "https://wordsapiv1.p.mashape.com/words/?random=true&partOfSpeech=noun";
var adjURL = "https://wordsapiv1.p.mashape.com/words/?random=true&partOfSpeech=adjective";
var adj;
var noun;

$.ajax({
    "async": true,
	"crossDomain": true,
    url: adjURL,
    method: "GET",
    "headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "e142a905d6mshb8000184dc70a74p1e82aajsnaa2f7a5de3be"
	}
}) .then(function(response){
    console.log(response);
    adj = response.word;
    console.log(adj);
})

$.ajax({
    "async": true,
	"crossDomain": true,
    url: nounURL,
    method: "GET",
    "headers": {
		"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
		"x-rapidapi-key": "e142a905d6mshb8000184dc70a74p1e82aajsnaa2f7a5de3be"
	}
}) .then(function(response){
    console.log(response);
    noun = response.word;
    console.log(noun);
})