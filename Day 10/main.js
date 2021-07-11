const box=document.querySelector('.box');
box.addEventListener('click',(r) => {
    if (r.target.classList.contains("item")){
        r.target.classList.add('flip-card-inner');
        console.log('flip-card-back');
    }

});