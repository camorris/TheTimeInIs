const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const ahourHand = document.querySelector('.a-hour-hand');
const asecondHand = document.querySelector('.a-second-hand');
const aminuteHand = document.querySelector('.a-min-hand');
const bangkok = document.querySelector('[data-timeZone="Asia/Bangkok"]')
const  dropDown = document.getElementById("myDropdown")


bangkok.addEventListener('click',function(){
  var bangkokClock = document.querySelector(".clock")
  bangkokClock.style.opacity = '0';
})
function asiaZone(){
  const asia = new moment().tz("Asia/Bangkok")
  
  const seconds = asia.seconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  asecondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = asia.minutes();
  const minsDegrees = ((mins/60) * 360) + ((seconds/60)*6)+90;
  aminuteHand.style.form = `rotate(${minsDegrees}deg)`;

  const hour = asia.hour();
  const hourDegrees = ((hour/12)*360) + ((mins/60)*30) + 90 ;
  ahourHand.style.transform = `rotate(${hourDegrees}deg)`;

  
}


function setDate(){
  const now = new Date();
  
  const seconds = now.getSeconds();
  const secondsDegrees =((seconds/60) *360) + 90;
  secondHand.style.transform =  `rotate(${secondsDegrees}deg)`;
  
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}
setInterval(setDate, 1000)

setInterval(asiaZone, 1000)

dropDown.addEventListener('mouseover', function() {
dropDown.classList.toggle("show");
})

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

console.log(Date())