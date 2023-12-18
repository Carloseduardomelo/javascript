const tela = document.getElementById('tela')

tela.addEventListener('click' , (ev) =>{
    tela.innerHTML = `
        <div style="width: 10px; height: 10px; position: absolute; top: ${ev.y}px; left: ${ev.x}px; background-color: black;"> </div>
    `
    console.log(ev.x , ev.y)
})