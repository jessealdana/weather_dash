 console.log("here")         
$(document).ready(function() {
 
    $("#find-city").on("click", function(event) {

        //text from the input box
        var city = $("#city-input").val();

        if (city === "") {
        //query the database for current weather of userChoice city
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=" + city + "&appid=eab78c727c5c9a0c1ae2d2b96188e8ea";

        //AJAX call to the OpenWeatherMap API
        $.ajax({
                url: queryURL,
                method: "GET"
        })
          //store all of the retrieved data inside of an object called "response"
        .then(function(response) {
            console.log(queryURL);
            console.log(response);

          // Transfer content to HTML
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
        });

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
              }        
    }
})