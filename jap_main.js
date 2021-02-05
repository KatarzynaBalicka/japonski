
const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation_top--js');
    navigation.classList.toggle('navigation--open')
})