

window.onload = function() {
    const animationContainer = document.getElementById('animationContainer');
    
    let divsAmount = 100;
    let i = 0;

    for(i=0; i<divsAmount; i++) {
        let animatedDiv = document.createElement('div');
        animatedDiv.classList.add('animated-div');
        animatedDiv.style.left = `${0+i}vw`;
        animatedDiv.style.animationTimingFunction = `cubic-bezier(0,${i/divsAmount},${divsAmount-i/divsAmount},1)`;
        animatedDiv.style.animationDelay = `${i/divsAmount}s`;
     
        animationContainer.appendChild(animatedDiv);
    }    
}

