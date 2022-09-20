const ids = ["selecao", "lancamentos","feminino","masculino","infantil","snkrs"];



ids.forEach(element => {
    document.querySelector("#"+element).addEventListener('mouseover', ()=>{ 
        
        document.querySelectorAll("."+element).forEach(x => x.classList.remove("close"));
        ids.filter(el => el != element).forEach(x => document.querySelectorAll("."+x).forEach(a => a.classList.add("close")));

    });
    
    
});

document.querySelector("#nav-header").addEventListener('mouseout', ()=>{ 
    document.querySelector('.sub-menu').classList.add('close'); 
    
});

document.querySelector("#nav-header").addEventListener('mouseover', ()=>{ 
    document.querySelector('.sub-menu').classList.remove('close'); 
    
});
