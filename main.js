const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const ahourHand = document.querySelector('.a-hour-hand');
const asecondHand = document.querySelector('.a-second-hand');
const aminuteHand = document.querySelector('.a-min-hand');
const thourHand = document.querySelector('.t-hour-hand');
const tsecondHand = document.querySelector('.t-second-hand');
const tminuteHand = document.querySelector('.t-min-hand');
const bangkok = document.querySelector('[data-timeZone="Asia/Bangkok"]');
const losAngeles = document.querySelector('[data-timeZone="America/Los_Angeles"]')
const toronto = document.querySelector('[data-timeZone="America/Toronto"]')
const dropDown = document.querySelector('.dropbtn');



bangkok.addEventListener('click',function(){
  var bangkokClock = document.getElementById("Asia")
      if(bangkokClock.style.display !== "none"){
        bangkokClock.classList.remove("asiaClock")
        bangkokClock.classList.toggle("asiaClockShow");
      }
    
   
})
toronto.addEventListener('click', function(){
  const torontoClock = document.getElementById("Canada")
      if(torontoClock.style.display !== "none"){
        torontoClock.classList.remove("canadaClock")
       torontoClock.classList.toggle('canadaClockShow');
          
      }
})

losAngeles.addEventListener('click', function(){
  const losAngelesClock = document.getElementById("America")
      if(losAngelesClock.style.display !== "none"){
        losAngelesClock.classList.remove("clock")
       losAngelesClock.classList.toggle('clockShow');
          
      }
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

function canadaZone(){
  const toronto = new moment().tz("America/Toronto")
  
  const seconds = toronto.seconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  tsecondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = toronto.minutes();
  const minsDegrees = ((mins/60) * 360) + ((seconds/60)*6)+90;
  tminuteHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = toronto.hour();
  const hourDegrees = ((hour/12)*360) + ((mins/60)*30) + 90 ;
  thourHand.style.transform = `rotate(${hourDegrees}deg)`;

  
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
setInterval(canadaZone, 1000)
setInterval(asiaZone, 1000)


dropDown.addEventListener('mouseover',function() {
  document.getElementById("myDropdown").classList.toggle("show");
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

