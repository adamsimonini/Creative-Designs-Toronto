  // Googlr analytics
  // (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  // (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  // m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  //
  // ga('create', 'UA-100894383-1', 'auto');
  // ga('send', 'pageview');


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
