const right_btn = document.querySelector(".right-btn");
const Left_btn = document.querySelector(".left-btn");
const basket_1 = document.querySelector(".box-1 h1");
const basket_2 = document.querySelector(".box-2 h1");

// console.log(basket_1)

let totalApp = 10;
let secondApplecount = 0;
let firstbasketcount = totalApp - secondApplecount;
// console.log(firstbasketcount--)

basket_1.textContent = totalApp;
basket_2.textContent = secondApplecount;

right_btn.addEventListener("click", () => {
  if (firstbasketcount > 0) {
    firstbasketcount--;
    basket_1.textContent = firstbasketcount;
    secondApplecount++;
    basket_2.textContent = secondApplecount;
  }
});

Left_btn.addEventListener("click", () => {
  if (secondApplecount > 0) {
    firstbasketcount++;
    basket_1.textContent = firstbasketcount;
    secondApplecount--;
    basket_2.textContent = secondApplecount;
  }
});
