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