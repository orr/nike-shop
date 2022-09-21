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