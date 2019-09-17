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

$("#generate").on("click", function() {  
  // API Search request:
  var query = randomQuery();
  var queryURL =
    "http://dictionaryapi.com/api/v3/references/ithesaurus/json/" +
    query +
    "?key=bbb6c475-fd1e-43df-a360-8c5dafa0fb48";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    var random = Math.floor(Math.random() * response[0].meta.syns[0].length);
    rand = response[0].meta.syns[0][random];
    $("#adjective-1").html(rand);
  });
});
