'use strict'

function initMap() {
    var uluru = {lat: 55.2282103, lng: 61.3733594};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }