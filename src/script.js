  // Google Map AIP
  function initMap() {
    var position = {lat: 43.777930, lng: -79.344839};
        var map = new google.maps.Map(document.getElementById('map'),{
          zoom: 13,
          center: position
          });
          var marker = new google.maps.Marker({
            position: position,
            map: map
    });
  }
