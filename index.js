window.onload = function(){

    function apagar(DOM) {
        while(DOM.firstChild) {
            DOM.removeChild(DOM.firstChild);
        };
    };


    const ListaFrutas = [
        {
            'fruta':'Mamão',
            'preco':3.9,
            'imagem':'1'
        },
        {
            'fruta':'Laranja',
            'preco':0.7,
            'imagem':'2'
        },
        {
            'fruta':'Manga',
            'preco':2.3,
            'imagem':'3'
        },
        {
            'fruta':'Melão',
            'preco':2.8,
            'imagem':'4'
        },
        {
            'fruta':'Melancia',
            'preco':4.1,
            'imagem':'5'
        },
        {
            'fruta':'Maçã',
            'preco':2.4,
            'imagem':'6'
        },
        {
            'fruta':'Banana',
            'preco':1.7,
            'imagem':'7'
        },
    ];
    
    const frutas = document.getElementById('produtos');
    const frutasCarrinho = document.getElementById('cestaDoCliente');
    const totalCompra = document.getElementById('mostraTotalCompra');
    const aviso = document.getElementById('aviso');

    ListaFrutas.map((n) => {
        frutas.insertAdjacentHTML('afterbegin', `<li class="listaDeFrutas"><img src="assets/img/${n.imagem}.jpg" alt="">${n.fruta}</li>`);
    });

    const compraLista = [];

    let frutasQuery = document.querySelectorAll('.listaDeFrutas');

    const jaIncluido = (fruta) => {
        apagar(aviso)
        aviso.insertAdjacentHTML('afterbegin', `<p> ${fruta} já está na cesta</p>`)
    }

    frutasQuery.forEach((el) => {

        el.addEventListener('click', ()=>{

            const fruta = el.textContent;

            for (let i = 0; i < ListaFrutas.length; i++) {
                if(ListaFrutas[i].fruta === fruta) {
                   (!compraLista.includes(ListaFrutas[i])) ? compraLista.push(ListaFrutas[i]) : jaIncluido(ListaFrutas[i].fruta);
                };
            };

            AdicionarFrutasCesta();

        });
    });
    
    const AdicionarFrutasCesta = () => {

        apagar(frutasCarrinho);
        compraLista.sort(function (a, b) {
            return a.imagem - b.imagem;
        });

        compraLista.map((n) => {
            frutasCarrinho.insertAdjacentHTML('afterbegin', `<li class="listaDeFrutas"><img src="assets/img/${n.imagem}.jpg" alt="">${n.fruta}</li>`);
        });
        AdicionarSoma();
    }

    const arraySoma = [];
    const AdicionarSoma = () => {

        apagar(totalCompra);
        for ( var i = 0; i < compraLista.length; i++ ){
            if(compraLista.length !== arraySoma.length){
                arraySoma.push(compraLista[i].preco);
            };
        };

        let total = 0;
        for ( var i = 0; i < arraySoma.length; i++ ){
            total += arraySoma[i];
        };
        totalCompra.placeholder = `R$ ${parseFloat(total).toFixed( 2 )}`;

    }

}