const container =document.querySelector('.box');

const seatc =document.getElementById('count');
const remc =document.getElementById('total');

var bookedseat=0;
var remaining=40;


container.addEventListener('click',(r) => {
    if(r.target.classList.contains("item") && !r.target.classList.contains('clicked')){
    r.target.classList.add('clicked');
    bookedseat++;
    remaining--;
    }
    else{
        r.target.classList.remove('clicked')
        bookedseat--;
        remaining++;
    }
    seatc.innerText=bookedseat;
    remc.innerText=remaining;
});