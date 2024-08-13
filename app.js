document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector(".counter");
  const increaseBtn = document.querySelector(".increase-btn");
  let value = 0;
  const decreaseBtn = document.querySelector(".decrease-btn");
  const resetBtn = document.querySelector(".reset-btn");

  // to increase counter
  increaseBtn.addEventListener("click", () => {
    value++;
    counter.innerText = value;
    // changing color based on counter values: positive - green, negative - red, zero - black
    if (value > 0) {
      counter.style.color = "green";
    } else if (value < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
    console.log(value);
  });

  // to decrease counter
  decreaseBtn.addEventListener("click", () => {
    value--;
    counter.innerText = value;
    if (value > 0) {
      counter.style.color = "green";
    } else if (value < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
    console.log(value);
  });

  // to reset counter
  resetBtn.addEventListener("click", () => {
    value = 0;
    counter.innerText = value;
    if (value > 0) {
      counter.style.color = "green";
    } else if (value < 0) {
      counter.style.color = "red";
    } else {
      counter.style.color = "black";
    }
  });
});
