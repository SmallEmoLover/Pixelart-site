const button = document.getElementById("up_button");

function show_button(){
    if(window.pageYOffset >= window.innerHeight * 1.5) {
        button.style.opacity = '1';
    }
    else {
        button.style.opacity = '0';
    }
}

window.onscroll = show_button;