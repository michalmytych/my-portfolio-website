/*
    Handler of Burger toggling animation.
*/

const toggleBurgerMenu = () => {
    const burger_menu = document.getElementById('burger_menu');
    const burger_icon = document.getElementById('burger_icon');
    const fadeOut = async () => {
        await new Promise(resolve => setTimeout(resolve, 900))
        burger_menu.style.display = "none"
    };
    
    if (burger_menu.style.display === "block") {
        burger_menu.classList.add('animate__fadeOut');
        fadeOut();
    }
    else{
        if (burger_menu.classList.contains('animate__fadeOut')){
            burger_menu.classList.remove('animate__fadeOut');
        }
        burger_menu.style.display = "block";
    }
    if (burger_icon.classList.contains('open')){
        burger_icon.classList.remove('open');
    }
    else{
        burger_icon.classList.add('open');
    }
}

export default { toggleBurgerMenu };