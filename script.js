function mySubmitFunction(event){
event.preventDefault()
// alert(JSON.stringify(event))
}

$( "#rateFilm" ).submit(function( event ) {
  const result = $( "#inlineFormCustomSelect" ).val()
  if (result==='Amazing') {
    alert('did you watch the same film as me?')
  }
  else if(result === 'Great') {
    alert('It was nice and christmassy')
  }
  else {
    alert("I'd watch something else next time then")
  }
  event.preventDefault();
});

$('#addFilm').submit(function(event){
  event.preventDefault();
  const newFilm =$( "#addThisPlease" ).first().val()
  $("#listOfFilms").append($("<li class='list-group-item'>").text(newFilm));
})

 $("#geoffrey").click(function(){
    $(this).hide();
  });