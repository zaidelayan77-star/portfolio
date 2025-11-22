let productImgs = document.querySelectorAll(".restImgs img");
let mainImg = document.querySelector(".mainImg img");

productImgs.forEach((e) => {
  e.addEventListener("click", () => {
    productImgs.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    mainImg.src = e.src;
  });
});

let minus = document.querySelector(".fa-minus");
let plus = document.querySelector(".fa-plus");
let quantity = document.getElementById("quantity");

minus.addEventListener("click", () => {
  if (+quantity.innerHTML > 1) {
    quantity.innerHTML = +quantity.innerHTML - 1;
  }
});
plus.addEventListener("click", () => {
  quantity.innerHTML = +quantity.innerHTML + 1;
});


let closePop = document.getElementById('closePop');
let wrapper = document.getElementById('wrapper');
let popInner = document.getElementById('pop');

for (let i = 0; i < productImgs.length; i++) {
  wrapper.innerHTML += `
  <div class="swiper-slide">
          <img src="${productImgs[i].src}" alt="">
    </div>
  `;
}

mainImg.addEventListener('click',()=>{
  popInner.style.display='flex';
})
closePop.addEventListener('click',()=>{
  popInner.style.display='none';
})