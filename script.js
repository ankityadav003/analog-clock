setInterval(() => {
  let date = new Date();
  s = date.getSeconds();
  m = date.getMinutes();
  h = date.getHours();

  srotation = 6 * s;
  mrotation = 6 * m;
  hrotation = 30 * h + m / 2;

  let hour = document.getElementById("h");
  let min = document.getElementById("m");
  let sec = document.getElementById("s");
  hour.style.transform = `rotate(${hrotation}deg)`;
  min.style.transform=`rotate(${mrotation}deg)`;
  sec.style.transform=`rotate(${srotation}deg)`;
}, 1000);
