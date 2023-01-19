// creating object for storing functions and variables when using the API
let weather = {
    //this key will access the weather in specified location
    apiKey: "029e26860b0434b1df1fd1cd64387892",
// once URL is activated paste here and unlselect this section as comment
    fetchWeather: function (city) {
        fetch(
        // city added as parameter 
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city
            + "&appid="
            + this.apiKey
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data; 
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "Weather in " + name;
       // icon insert - sort this later: document.querySelector(".icon").src = "" .innerText = icon;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp;
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
    }
};

/* NOTE TO ME WHERE I LEFT OFF: 29.12.2022 API seems to log and work but need to work on the following:
 Code keeps on looping in console
 Degrees c data is incorrect, may need to convert this?
 Styling - enquire about cloud icon and degrees c sympbols
 

