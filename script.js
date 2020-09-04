// Rating handler
$('.rating').on('click', function (e) {
  var rating = e.target.value;
  if (rating) {
    window.parent.postMessage(JSON.stringify({
      event_code: 'ym-client-event', data: JSON.stringify({
        event: {
          code: "rating",
          data: {
            selectedRating: rating
          }
        }
      })
    }), '*');
    $('input[type="radio"]').attr('disabled', 'disabled');
  }
});