let btnborder = document.getElementById("button-border");

btnborder.addEventListener("click",function() {
    
    if(btnborder.style.animationDirection == "normal" || btnborder.style.animationDirection == ""){
        btnborder.style.animationDirection = "reverse";
    }
    else {
        btnborder.style.animationDirection = "normal"
    }
});
