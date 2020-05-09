 console.log("here")         
$(document).ready(function() {
 console.log("hello")
    $("#find-city").on("click", function(event) {
        console.log("hola")
        //text from the input box
        var city = $("#city-input").val();

          // if (city === "") {
          //console.log("bonjour")
          //query the database for current weather of userChoice city
          // var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&uvi&appid=eab78c727c5c9a0c1ae2d2b96188e8ea";

          // //AJAX call to the OpenWeatherMap API
          // $.ajax({
          //       url: queryURL,
          //       method: "GET"
          // })
          // //store all of the retrieved data inside of an object called "response"
          // .then(function(response) {
          //     console.log(queryURL);
          //     console.log(response);
          //     // <script>
          //     document.getElementById("date").innerHTML = Date();
          //     // </script>
          // // Transfer content to HTML
          //   $(".city").html("<h2>" + response.name + " Weather Details</h2>");
          //   $(".temp").text("Temperature: " + response.main.temp + "(F)");
          //   $(".humidity").text("Humidity: " + response.main.humidity + "%");            
          //   $(".wind").text("Wind Speed: " + response.wind.speed);
          //   $(".uvIndex").text("UV Index: " + response.value);


          // });

                //create mod to account for the new forecast updated by the app every 3 hours, or 8 times a day
                const date = new Date();
                console.log(date)
                const hour = date.getHours();
                const mod = Math.floor((24-hour)/3);
                event.preventDefault();

                //query the database for forecast
                var queryURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=" + city + "&appid=eab78c727c5c9a0c1ae2d2b96188e8ea";
           
                //AJAX call to the OpenWeatherMap API
                $.ajax({
                url: queryURL,
                method: "GET"
                })
                //store all of the retrieved data inside of an object called "response"
                .then(function(response) {
                    for(let i = 0 ;i<40; i+=8){
                        $("#forecast").append(`<div class="card col-2" style='margin:auto'>
                                                <div class="card-body">
                                                <h5 class="card-title">${response.city.name} <img src="https://openweathermap.org/img/wn/${response.list[i+mod].weather[0].icon}.png"/></h5>
                                                <p class="card-text">${response.list[i+mod].weather[0].description}</p>
                                                <p class="card-text">Temperature - ${response.list[i+mod].main.temp}</p>
                                                <p class="card-text">Wind Speed - ${response.list[i+mod].wind.speed}</p>
                                                <p class="card-text">Humidity - ${response.list[i+mod].main.humidity}</p>
                                                </div>
                                                </div>`)
                                                }

                });
        // }        
    })
})