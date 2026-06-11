const numeros = document.querySelectorAll('.numero');

const animarNumero = (elemento) => {
    const alvo = +elemento.getAttribute('data-target');
    let atual = 0;
    const incremento = alvo / 100;

    const contador = setInterval(() => {
        atual += incremento;

        if(atual >= alvo){
            elemento.textContent = alvo;
            clearInterval(contador);
        } else {
            elemento.textContent = Math.floor(atual);
        }
    }, 20);
};

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            animarNumero(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

numeros.forEach(numero=>{
    observer.observe(numero);
});