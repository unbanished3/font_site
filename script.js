black_screen = document.querySelector(".black_screen")
aside = document.querySelector(".aside")

function show(Element) {
    if(black_screen.classList.contains("hidden")){
        image = Element.cloneNode(true)
        image.classList.remove("galery")
        image.classList.add("show")

        black_screen.innerHTML = ""
        black_screen.appendChild(image)
        black_screen.classList.remove("hidden")
    }
    else{
        black_screen.classList.add("hidden")
    }
}

function show_aside() { 
    aside.classList.toggle("mobile-aside-hidden")
}