
const  a = document.querySelector("input");
const b = document.querySelector("button");
const c = document.createElement("div");
const cont = document.querySelector(".after");

cont.style.display ="none";

async function get(){
    let response = await fetch(`https://api.weatherapi.com/v1/current.json?key=9ccfaec91a3b45eab17160641251503&q=${a.value}&aqi=no`);
    let data = await response.json();


    cont.style.display ="block";
    cont.innerHTML =`<img src ="${data.current.condition.icon}" alt="Weather icon">
             <p><strong>Location:</strong> ${data.location.name}, ${data.location.country}</p>
            <p><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>`;
   console.log(data);
   
}

a.addEventListener("click",()=>{
    a.value= " ";  

})

b.addEventListener("click", get); 






