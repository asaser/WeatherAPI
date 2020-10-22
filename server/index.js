// console.log(process.env.API_KEY_NEW);

// API using jQuery

$(document).ready(function () {


    const d = new Date();

    function nowaData() {
        return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    }

    $("#textButton").click(function () {

        //  var APIkey = process.env.API_KEY;
        var APIkey = "882093c6b009651d06b4d050d0d05415"; //OpenWeatherMap website

        const approvalText = $("#textCity").val();

        if (approvalText != '') {

            $.ajax({

                type: 'GET',
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + approvalText + "&appid=" + APIkey + '&units=metric',
                dataType: "json",
                success: function (data) {

                    // sprawdzic inne URL na stroce, może to pomoże aby znależć RAIN oraz dodać różne grafiki
                    // city
                    $(".city_name").html('<span>City name: </span>' + data.name + ', ' + data.sys.country);

                    // current day
                    $(".current_day").html('<span>Current day: </span>' + nowaData());
                    // temperature in city degrees C
                    $(".temperature_forecast").html('<span>Temp: </span>' + data.main.temp + '<span> °C</span>');
                    // rain mm
                    $(".rain_forecast").html('<span>Rain: </span>' + data.main.rain + '<span> mm</span>');
                    // humiditi
                    $(".humidity_forecast").html('<span>Humidity: </span>' + data.main.humidity + '<span> %</span>');
                    // clouds %
                    $(".clouds_forecast").html('<span>Cloudy: </span>' + data.clouds.all + '<span> %</span>');
                    // wind kn/h
                    $(".wind_forecast").html('<span>Windy: </span>' + data.wind.speed + '<span> km/h</span>');
                    // sky
                    $(".sky_forecast").html('<span>Sky: </span>' + data.weather[0].description);
                    // pressure
                    $(".pressure_forecast").html('<span>Pressure: </span>' + data.main.pressure + '<span> hPa</span>');
                    //    console.log(data);
                }

                //    error: function (e) {
                //    }
            });

        } else {
            alert("Please write city name on text field");
        }
    });

});