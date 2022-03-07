var elForm=document.querySelector("#form");
var elInput=document.querySelector("#input");

var elWalk=document.querySelector("#walk");
var elBike=document.querySelector("#bike");
var elCar=document.querySelector("#car");
var elPlane=document.querySelector("#plane")
var SPEED_BY_WALK=3.6;
var SPEED_BY_BIKE=20.1;
var SPEED_BY_CAR=100;
var SPEED_BY_PLANE=800;

function calculateHours(distance, speed) {

     var vaqt=distance/speed;
    var hours=Math.floor(vaqt)
    var minutes=Math.floor((vaqt-hours)*60)
    var secundes=Math.round(((vaqt-hours)*60-minutes)*60)

    var hourjon = hours ? `${hours} soat` : "";
    var minutjon = minutes ? `${minutes} minut` : "";
    var sekundjon = secundes ? `${secundes} sekund` : "";
    
    return `${hourjon} ${minutjon} ${sekundjon}`
}
elForm.addEventListener("submit",function(evt) {
    evt.preventDefault();
    var InputValue=elInput.value.trim();
    if (isNaN(InputValue)) {
      return  alert(`${InputValue} bu son emas son kiriting`)
    }

    if (InputValue<=0) {
 return alert("Musbat son kiriting")        
    }

  console.log(calculateHours(InputValue,SPEED_BY_WALK));
  console.log(calculateHours(InputValue,SPEED_BY_BIKE));
  console.log(calculateHours(InputValue,SPEED_BY_CAR));
  console.log(calculateHours(InputValue,SPEED_BY_PLANE));

  elWalk.textContent=calculateHours(InputValue,SPEED_BY_WALK)
  elBike.textContent=calculateHours(InputValue,SPEED_BY_BIKE)
  elCar.textContent=calculateHours(InputValue,SPEED_BY_CAR)
  elPlane.textContent=calculateHours(InputValue,SPEED_BY_PLANE)
})

