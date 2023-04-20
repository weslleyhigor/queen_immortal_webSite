const openMenu = () => {
    const buttonOpenMenu = document.querySelector('.menu-hamburguer');

    buttonOpenMenu.addEventListener('click', function(){
        const buttonCloseMenu = document.querySelector('.menu-close');

        buttonCloseMenu.style.display = 'flex';
        buttonOpenMenu.style.display = 'none';
        closeMenu();

        const navigation = document.querySelector('.navigation');
        navigation.style.display =  'flex';

    });
}

const closeMenu = () => {
    const buttonCloseMenu = document.querySelector('.menu-close');
    const buttonOpenMenu = document.querySelector('.menu-hamburguer');

    buttonCloseMenu.addEventListener('click', function(){
        buttonOpenMenu.style.display = 'flex';
        buttonCloseMenu.style.display = 'none';

        const navigation = document.querySelector('.navigation');
        navigation.style.display =  'none';
    })
}

openMenu();