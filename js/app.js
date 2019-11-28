window.addEventListener('load', () => {
  let long;
  let lat;

  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const api = `https://api.darksky.net/forecast/25d03dbf2158c76a6ff2caffb71d3157/${lat},${long}`;

      fetch(api)
          .then(data =>{
              return data.json();
          })
          .then(data =>{
              console.log(data);
          });
    });


  }
});
