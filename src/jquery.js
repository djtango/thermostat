  var thermostat = new Thermostat()
  $(document).ready(function() {

    updateTemp();


    $("#minus_button").click(function() {
      thermostat.down()
      updateTemp();
      $(this).effect("pulsate", {
        times: 0
      }, 50);
    });

    $("#plus_button").click(function() {
      thermostat.up()
      updateTemp();
      $(this).effect("pulsate", {
        times: 0
      }, 50);
    });

    $("#resetButton").click(function() {
      thermostat.resetTemperature();
      updateTemp();
    });
    $("#myPSMswitch").change(function() {
      thermostat.powerSavingSwitch();
      updateTemp();
    });

    $("#submit_location").click(function(event) {
      var location = $("#location_input").val();
      getWeather(location);
      event.preventDefault();
    });

    function setProgress(progress) {
      var progressBarWidth = progress * $(".container").width();
      $(".progressbar").width(progressBarWidth);
      $("#Ttext").html(thermostat.temperature + '\xB0' + 'C');
    };

    function updateTemp() {
      $('#temperature').text('Temperature: ' + thermostat.temperature)
      setProgress(thermostat.temperature / 32)
    };

    var getWeather = function(location) {
      var url = "http://api.openweathermap.org/data/2.5/weather";
      var location = 'q=' + location;
      var id = 'appid=5b0530235264ae9772c53b8a59018b69';
      var data = location + "&" + id;
      $.getJSON(url, data, unPackWeather);
    };

    var unPackWeather = function(resp) {
      var temp = KtoC(resp.main.temp);
      $('#local_temp_value').text(temp);
    };

    var KtoC = function(tempK) {
      return Math.round(tempK - 273.15);
    }

    getWeather($("#location_input").val())


  })
