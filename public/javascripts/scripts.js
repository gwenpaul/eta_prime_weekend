$(document).ready(function(){

// submit function for form
$('form').on('submit', function(event){
  event.preventDefault();

// serializes data from form submission into an array
  var addComments = $(this).serializeArray();

// new empty object
  var newComment = {};

// put form DATA into objects properties
  for (var i = 0; i < addComments.length; i++) {
    if(addComments[i].name === 'message') {
        newComment.message = addComments[i].value;
      } else if (addComments[i].name === 'imageId'){
        newComment.imageId = addComments[i].value;
      }
    }

// ajax call to comments
//why post?
$.ajax({
  url: '/comments',
  type: 'post',
  data: newComment
}).done(function(addComments){
  $('h2').replaceWith(addComments.message);

});

$(this)[0].reset();


});// submit form


}); // doc ready
