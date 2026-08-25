const header = document.getElementsByTagName("header");
const order_btn = document.querySelector("header div");
const order_btn_text = document.querySelector("header div a");

order_btn.addEventListener("mouseenter", ()=>{
    order_btn.style.backgroundColor = "#ff5600";
    order_btn_text.style.color = "white";
});
order_btn.addEventListener("mouseleave", ()=>{
    order_btn.style.backgroundColor = "white";
    order_btn_text.style.color = "black";
});