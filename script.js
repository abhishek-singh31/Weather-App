const city=document.getElementById("city");
const btn=document.getElementById("submit");
const cityname=document.getElementById("cityname");
const container=document.querySelector(".container");
const temp=document.getElementById("temp");
const desc=document.getElementById("desc");
const img=document.querySelector("img");

img.hidden=true;

btn.addEventListener("click",(e) =>{
    const API_Key="3c77da34a1cddb94121e92e76490c80a";
    e.preventDefault();
    console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API_Key}`);
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${API_Key}`
    )
    .then(response => response.json())
    .then(data => {
        container.classList.add("show");
        cityname.innerHTML=data['name'] + "," + data['sys']['country'];
        temp.innerHTML="Current Temperature : "+ data['main']['temp']+ "°C";
        desc.innerHTML=data['weather'][0]['description'].toUpperCase();
        img.hidden=false;
        img.src=`https://openweathermap.org/img/w/${data['weather'][0]['icon']}.png`;
    }

    )
    .catch(err => alert("Please enter correct city name !!!"));
    city.value="";
});