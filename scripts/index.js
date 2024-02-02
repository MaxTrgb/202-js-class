document.addEventListener("DOMContentLoaded", (e)=>{
    const BTN_PRESS = document.querySelector("#btn_press");
    BTN_PRESS.addEventListener("click", (e)=>{
        alert("Pressed");
    });
    const BTN_DEL = document.querySelector("#close_window");
    BTN_DEL.addEventListener("click", (e)=>{
        window.close();
    });
    const BTN_OPEN = document.querySelector("#btn_open");
    BTN_OPEN.addEventListener("click", (e)=>{
        window.open("https://www.google.com");
    });
})