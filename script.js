const ids = ["selecao", "lancamentos","feminino","masculino","infantil","snkrs"];

let selected ="";

ids.forEach(element => {
    const link = document.querySelector("#"+element);
    
    link.addEventListener('mouseover', ()=>{ 
        selected = element;
        document.querySelectorAll("."+element).forEach(x => {
            x.classList.remove("close");
            
        });
        ids.filter(el => el != element).forEach(x => {
            document.querySelectorAll("."+x).forEach(a => a.classList.add("close"))
            
        });
        link.classList.add('header-ul-li-hover');    
        
    });

    link.addEventListener('mouseout', ()=>{ 
        link.classList.remove('header-ul-li-hover');    
    });

    
    
    
});

document.querySelector("#nav-header").addEventListener('mouseout', ()=>{ 
    document.querySelector('.sub-menu').classList.add('close'); 
    document.querySelector('#'+selected).classList.remove('header-ul-li-hover'); 
    
});

let frete = document.querySelector("#frete-icone");
frete.addEventListener('click', () =>{
    document.querySelector('.frete').classList.toggle('close');
    if(frete.innerHTML =='+')
        frete.innerHTML = '-';
    else frete.innerHTML = "+";
});

document.querySelector("#nav-header").addEventListener('mouseover', ()=>{ 
    document.querySelector('.sub-menu').classList.remove('close'); 
    document.querySelector('#'+selected).classList.add('header-ul-li-hover');  
});

document.querySelector(".sub-menu").addEventListener('mouseout', ()=>{ 
    document.querySelector('.sub-menu').classList.add('close'); 
    document.querySelector('#'+selected).classList.remove('header-ul-li-hover'); 
});

document.querySelector(".sub-menu").addEventListener('mouseover', ()=>{ 
    document.querySelector('.sub-menu').classList.remove('close'); 
    document.querySelector('#'+selected).classList.add('header-ul-li-hover');  
});
let index = 0;
let dx =0;
const left = document.querySelector(".icon-prev");
left.addEventListener('click', () => {
    if(index < 2 ){
        let current = document.querySelector(".current-item");
        let next = current.nextSibling;
        console.log("vv " + next);
        let width = current.getBoundingClientRect().width;
        let ofertas_wrapper = document.querySelector('.ofertas-wrapper');
        
        current.classList.remove("current-item");
        console.log("cc " + current.innerHTML);
        
        console.log("nc " + next.innerHTML);
        next.classList.add("current-item");
        index++;
        dx-= width;
        ofertas_wrapper.style.transform= "translateX("+(dx)+"px)";
    }
});

const right = document.querySelector(".icon-next");
right.addEventListener('click', () => {
    if( index > 0 && index <=2 ){
        let current = document.querySelector(".current-item");
        let prev = current.previousSibling;
        console.log("vv " + prev);
        let width = current.getBoundingClientRect().width;
        let ofertas_wrapper = document.querySelector('.ofertas-wrapper');
        
        current.classList.remove("current-item");
        console.log("cc " + current.innerHTML);
        
        console.log("nc " + prev.innerHTML);
        prev.classList.add("current-item");
        index--;
        dx+=width
        ofertas_wrapper.style.transform= "translateX("+(dx)+"px)";
    }
});

let mais = document.querySelector('#vermais');
mais.addEventListener('click',  () => {
    let details = document.querySelector('.details');
    if( details.classList.contains('open')) {
        mais.innerHTML = 'Ver mais detalhes do produto';
    } else {
        mais.innerHTML = 'Ver menos';
        
    }
    details.classList.toggle('open');
    details.classList.toggle('no-after');
    
});

let ajuda = document.querySelector("#ajuda");
ajuda.addEventListener('click', () => {
    if (ajuda.innerHTML == "+") {
        ajuda.innerHTML = '-';
        document.querySelector("#ajuda-toggle").style.display = 'block';
    } else {
        ajuda.innerHTML = '+';
        document.querySelector("#ajuda-toggle").style.display = 'none';
    }
});

let sobre = document.querySelector("#sobre");
sobre.addEventListener('click', () => {
    if (sobre.innerHTML == "+") {
        sobre.innerHTML = '-';
        document.querySelector("#sobre-toggle").style.display = 'block';
    } else {
        sobre.innerHTML = '+';
        document.querySelector("#sobre-toggle").style.display = 'none';
    }
});

let menu = document.querySelector("#menu-icon");
menu.addEventListener('click', () => {
    document.querySelector(".mobile-menu").classList.toggle('close');
});

let close = document.querySelector(".close-icon");
close.addEventListener('click', () => {
    document.querySelector(".mobile-menu").classList.toggle('close');
});

let tamanhos = document.querySelector(".btn-tamanho");
tamanhos.addEventListener('click', () => {
    document.querySelector(".tamanhos").classList.toggle('close');
    if (tamanhos.innerHTML == "Tamanho +") {
        tamanhos.innerHTML = 'Tamanho -';
    } else {
        tamanhos.innerHTML = 'Tamanho +';
    }
});

let addButton = document.querySelector(".add");
let troca = true;
let yAnterior = 0;
document.addEventListener('scroll', () => {
    const superHeader = document.querySelector('.super-header');
    const header = document.querySelector(".header");
    const headerShop = document.querySelector(".header-shop");
    //console.log("pos " + addButton.getBoundingClientRect().top + " " +header.getBoundingClientRect().bottom);
    //if( window.pageYOffset - dxs > 30)
        
   // console.log("dsx " + dxs + " depois " + window.pageYOffset + " dif " + (window.pageYOffset -dxs)) ;
   let dif  = Math.abs(window.pageYOffset - yAnterior);
   yAnterior+= window.pageYOffset - yAnterior;
   
    let headerUl = document.querySelector(".header-ul");
    let display = window.getComputedStyle(headerUl, null).display;
    
    if( display != 'none') {
        if(addButton.getBoundingClientRect().top  < header.getBoundingClientRect().bottom) {
            // console.log("maior ");
             if(troca ) {
                 headerShop.classList.remove('close');
                 header.classList.add('close');
                 superHeader.classList.add('close');
                 
                 troca =false;
             }
         } else {
             if( !troca ) {
                 headerShop.classList.add('close');
                 header.classList.remove('close');
                 superHeader.classList.remove('close');
                 
                 troca =true;
             }
             
         }
    }
    
   
})
