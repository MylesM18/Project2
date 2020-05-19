$("#search_button").on("click", function () {
  var user_input = $("#keyword_input").val().trim();
  console.log(user_input);
  window.location.href = "/verses/" + user_input;
 
});

