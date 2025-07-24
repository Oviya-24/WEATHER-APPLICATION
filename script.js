async function  getweather() {
    const city=document.getelementbyid("city input").value;
    const apiKey ="634611f3934ee569174ad694f677ebc0"
    const url = `https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apikey}`
    try {
        const response=await fetch(url)
        if (!response.ok) {
            throw new Error("City not found")

        
    } 
   const data = await response.json() 
        displayWeather(data);
    }
    
    catch (error) {

        document.getElementById("weather-result").innerHTML = `<p style="color:red">${error.message}</p>`;
    }

}
   function displayWeather(data) {
   const weatherhtml= `<h1>${data.name},${data.sys.country}</h1>
                           <h3>${data.main.temp}</h3>
                           <p>${data.weather[0].description}</p>
                           <p>${data.wind.speed}m/s</p>`;
  
    document.getElementById("weather-result").innerHTML = weatherhtml;
}
