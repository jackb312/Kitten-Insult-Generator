function newCat() {
  var settings = {
    url: "https://api.thecatapi.com/v1/images/search?format=json",
    method: "GET",
    headers: {
      "x-api-key": "17d94b92-754f-46eb-99a0-65be65b5d18f"
    }
  };
  $.ajax(settings).done(function(response) {
    var image = response[0].url;
    var element = $("<img></img>");
    element.attr("src", image);
    element.attr("id", "imgTest");
    element.addClass("rounded");
    $("#placeKittenImg").html(element);
  });
}

$("#generate").on("click", function() {
  newCat();
});
