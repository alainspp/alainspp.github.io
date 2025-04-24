(function(){
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove("testimony__body--show");

        if (value > sliders.length) {
            value = 1;
        } else if (value === 0) {
            value = sliders.length;
        }

        sliders[value - 1].classList.add("testimony__body--show");
    };

    // Función para cambiar automáticamente cada 5 segundos
    const autoSlide = () => {
        setInterval(() => {
            changePosition(1);
        }, 14000); // Cambia cada 5 segundos
    };

    autoSlide(); // Inicia el slider automático
})();
