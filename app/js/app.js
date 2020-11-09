const controlador = new NegociacaoController();
document.querySelector('.form')
    .addEventListener('submit', controlador.adiciona.bind(controlador));
