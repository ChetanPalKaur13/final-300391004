// get the date from the input field
function getDate() {
  var countDay = new Date(document.getElementById("birthday").value).getTime();
  return countDay;
}

// start the countdown
function start() {
  // Set the date we're counting down to
  var countDay = getDate();
  // Update the count down every 1 second
  setInterval('start()', 1000);

  // Get today's date and time
  var now = new Date();

  var time_Difference = now - countDay;
  // Find the distance between now and the count down date
  var time_Difference = countDay - now;
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(time_Difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (time_Difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((time_Difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((time_Difference % (1000 * 60)) / 1000);
  var Dicseconds = Math.floor(0.1 * seconds);
  // Output the result in an element with id="demo"
    if(time_Difference>0){
    document.getElementById("day").innerText = days;
    document.getElementById("hrs").innerText = hours;
    document.getElementById("min").innerText = minutes;
    document.getElementById("sec").innerText = seconds;
    document.getElementById("dicdecs").innerText = Dicseconds;
    }

  if (time_Difference < 0) {
    
    clearInterval();
    document.getElementById('countdown').innerHTML = "EXPIRED";
    alert("Date is Expired ")
    clearInterval();
    
  }
}




