const memebtn=document.getElementById('memebtn')
const bg=['#ff3381','#93f','#eeff00','003cff']
const fg=['#111','#fff','#111','#111','#fff']
function changecolor(){
    let limit=bg.length
    let index=Math.floor(Math.random()*limit);
    memebtn.style.background=bg[index]
    memebtn.style.color=fg[index]
}
var after= ""
function fetchmemes(){
    changecolor()
    if(document.getElementById('memes')){
        document.getElementById('memes').remove()
    }


    let parentdiv=document.createElement('div')
    parentdiv.id='memes'
    fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
    .then(response => response.json())
    .then(body=>{
        after=body.data.after
        console.log(after)
        for(let index=0;index<body.data.children.length;index++){
            if(body.data.children[index].data.post_hint=='image'){
                let div=document.createElement("div")
                let h4=document.createElement('h4')
                let image=document.createElement('img')
                image.src=body.data.children[index].data.url_overridden_by_dest
                h4.textContent=body.data.children[index].data.title
                div.appendChild(h4)
                div.appendChild(image)
                parentdiv.appendChild(div)
            }
        }
        document.body.appendChild(parentdiv) 
    });

}