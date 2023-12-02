document.querySelector("#open-subscribe-form").addEventListener("ontouchstart",function(){
  document.querySelector(".subscribe-form").classList.add("active");
});

document.querySelector(".subscribe-form  .close-btn").addEventListener("ontouchstart",function(){
  document.querySelector(".subscribe-form").classList.remove("active");
});