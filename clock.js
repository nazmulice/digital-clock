function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let mid = "AM";
  mid = hour >= 12 ? "PM" : "AM";
  hour = hour == 0 ? 12 : hour > 12 ? hour - 12 : hour;
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  
  document.querySelector("#time").innerHTML = `${hour}:${min}`;
  document.querySelector("#sec").innerHTML = `${sec}`;
  document.querySelector("#mid").innerHTML = `${mid}`;
}

function updateTime(e) {
  if (e < 10) return "0" + e;
  else return e;
}
setInterval(currentTime, 1000);
