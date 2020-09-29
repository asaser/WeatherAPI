
console.log(process.env.SECRET_MESSAGE);
console.log(process.env.TOKEN);


//    // API using jQuery

//    $(document).ready(function () {


//        $("#textButton").click(function () {

//            const APIkey = "882093c6b009651d06b4d050d0d05415";
//            //    const APIkey = process.env.API_KEY;

//            const approvalText = $("#textCity").val();

         

//            if (approvalText != '') {

//                $.ajax({

//                    type: 'GET',
//                    url: 'https://api.openweathermap.org/data/2.5/weather?q=' + approvalText + "&appid=" + APIkey + '&units=metric',
//                    dataType: "json",
//                    success: function (data) {

//                        // sprawdzic inne URL na stroce, może to pomoże aby znależć RAIN oraz dodać różne grafiki
//                        // city
//                        $(".city_name").html(data.name + ', ' + data.sys.country);

//                        // current day

//                        // temperature in city degrees C
//                        $(".temperature_forecast").html(data.main.temp + '<span> °C</span>');

//                        // rain mm
//                        $(".rain_forecast").html(data.rain + '<span> mm</span>');
//                        // humiditi
//                        $(".humidity_forecast").html(data.main.humidity + '<span> %</span>');
//                        // clouds %
//                        $(".clouds_forecast").html(data.clouds.all + '<span> %</span>');
//                        // wind kn/h
//                        $(".wind_forecast").html(data.wind.speed + '<span> km/h</span>');
//                        // sky
//                        $(".sky_forecast").html(data.weather[0].description);
//                        // pressure
//                        $(".pressure_forecast").html(data.main.pressure + '<span> hPa</span>');
//                        console.log(data);
//                    }

//                    //    error: function (e) {
//                    //    }

//                });

//            } else {
//                alert("Please write city name on text field");
//            }
//        });

//    });