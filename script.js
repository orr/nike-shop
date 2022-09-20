const ids = ["selecao", "lancamentos","feminino","masculino","infantil","snkrs"];



ids.forEach(element => {
    document.querySelector("#"+element).addEventListener('mouseover', ()=>{ 
        
        document.querySelector("."+element).classList.remove("close");
        ids.filter(el => el != element).forEach(x => document.querySelector("."+x).classList.add("close"));

    });
    
    
});

document.querySelector("#nav-header").addEventListener('mouseout', ()=>{ 
    document.querySelector('.sub-menu').classList.add('close'); 
    
});

document.querySelector("#nav-header").addEventListener('mouseover', ()=>{ 
    document.querySelector('.sub-menu').classList.remove('close'); 
    
});
