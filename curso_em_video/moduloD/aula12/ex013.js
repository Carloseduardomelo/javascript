var data = new Date()
var datas = data.getDay()
switch(datas){
    case 0:
        console.log('hoje w domingo')
        break
    case 1:
        console.log('hoje e segunda')
        break
    case 2:
        console.log('hoje e terca')
        break
    case 3:
        console.log('hoje e quarta')
        break
    case 4:
        console.log('hoje e quinta')
        break
    case 5:
        console.log('hoje e sexta')
        break
    default:
        console.log('hoje e sabado')
}