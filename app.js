const caixaImagem = document.querySelectorAll('.caixa-img');

caixaImagem.forEach(function(caixa){
    const imagens = caixa.querySelectorAll('img');
    let idx = 0;

    
    function carousel(){
        idx++;

        if(idx > imagens.length -1){
            idx = 0;
        }

        caixa.style.transform = `translateX(${-idx * 310}px)`
    }

    setInterval(carousel, 2500)
})


let botoes = document.querySelectorAll('.colors div');

botoes.forEach(function(botao){
    botao.addEventListener('click', function(){
        botoes.forEach(function(outroBotao){
            outroBotao.classList.remove('selecionado')
        })

        botao.classList.add('selecionado')
    })
})