$("#restart").on("click", function() {
  $.each($(".insult"), function() {
    $(this).text(" ");
  });
  similarWord();
  randomWords();
  newCat();
});
