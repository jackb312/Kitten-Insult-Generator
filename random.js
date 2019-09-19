randomList = [
  "clumsy",
  "feeble",
  "slimy",
  "weird",
  "stinky",
  "ugly",
  "uncouth",
  "saucy",
  "slanderous",
  "loathsome",
  "dim",
  "unoriginal",
  "lowly",
  "banal",
  "rotten"
];

var rand;

function randomQuery() {
  return randomList[Math.floor(Math.random() * randomList.length)];
}

function similarWord() {
  // API Search request:
  var query = randomQuery();
  var queryURL =
    "https://dictionaryapi.com/api/v3/references/ithesaurus/json/" +
    query +
    "?key=bbb6c475-fd1e-43df-a360-8c5dafa0fb48";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var random = Math.floor(Math.random() * response[0].meta.syns[0].length);
    rand = response[0].meta.syns[0][random];
    if (
      rand[0] === "a" ||
      rand[0] === "i" ||
      rand[0] === "e" ||
      rand[0] === "o" ||
      rand[0] === "u"
    ) {
      $("#youAreA").text("You are an");
    } else {
      $("#youAreA").text("You are a");
    }
    $("#adjective-1").prepend(" " + rand);
  });
}

$("#generate").on("click", function() {
  similarWord();
});
