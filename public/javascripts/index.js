function clickMe() {
  $.ajax({
    type: 'GET',
    url: '/colors',
    success: function(resp) {
      $(`#box${resp.id}`).css('background-color', `${resp.color}`)
    },
    error: function() {
      console.log('GET Request Error');
    }
  });
}
