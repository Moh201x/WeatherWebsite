const city = document.getElementById('city-input');
const flag = document.getElementById('flag');



const ToCel=(f)=>{

    let tocel=((f - 32) * 5 / 9)
    return tocel.toFixed(2)
}
showWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name
    document.getElementById("weather-type").innerText = weatherData.weather[0].main
    document.getElementById("temp").innerText = ToCel(weatherData.main.temp)
    document.getElementById("min-temp").innerText =ToCel( weatherData.main.temp_min)
    document.getElementById("max-temp").innerText = ToCel( weatherData.main.temp_max)


  }
  
  
const searchCity=async()=>{
    console.log(`${city.value}`)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '9b2fac40b2msh92fd19b214c15d7p12cdfajsn422b993145ba',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    
    fetch('https://open-weather13.p.rapidapi.com/city/landon', options)


     let response=await  fetch(`https://open-weather13.p.rapidapi.com/city/${city.value}`,options)
     let data=await response.json()
     showWeatherData(data)

     flag.src=`https://countryflagsapi.com/png/${data.name}`


}




//  var fToCel = (fTemp - 32) * 5 / 9;
