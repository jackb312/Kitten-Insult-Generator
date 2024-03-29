// below is all the Words API code

// nounURL for generating nouns, adjURL for generating adjectives, noun for saving the noun, adj for saving the adjective
var nounURL =
  "https://wordsapiv1.p.mashape.com/words/?random=true&partOfSpeech=noun";
var adjURL =
  "https://wordsapiv1.p.mashape.com/words/?random=true&partOfSpeech=adjective";
var adj;
var noun;

function randomWords() {
  // get adjective, save in adj variable
  $.ajax({
    async: true,
    crossDomain: true,
    url: adjURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "e142a905d6mshb8000184dc70a74p1e82aajsnaa2f7a5de3be"
    }
  }).then(function(response) {
    console.log(response);
    adj = response.word;
    $("#adjective-2").prepend(" " + adj);
  });

  // get noun, save in noun variable
  $.ajax({
    async: true,
    crossDomain: true,
    url: nounURL,
    method: "GET",
    headers: {
      "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
      "x-rapidapi-key": "e142a905d6mshb8000184dc70a74p1e82aajsnaa2f7a5de3be"
    }
  }).then(function(response) {
    console.log(response);
    noun = response.word;
    $("#noun").prepend(" " + noun);
  });
}

$("#generate").on("click", function() {
  randomWords();
});
