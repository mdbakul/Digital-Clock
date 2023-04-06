function timing() {
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();
  let sesseion = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    sesseion = "PM";
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  timed = hh + ":" + mm + ":" + ss + " " + sesseion;

  let result = date.toLocaleTimeString("en-us", {
    day: "2-digit",
    month: "short",
  });

  let final = result.split(",");

  let bar = final[0];

  document.querySelector(".clock").innerHTML = `${bar} ${","} ${timed}  `;
}

setInterval(() => {
  timing();
});
