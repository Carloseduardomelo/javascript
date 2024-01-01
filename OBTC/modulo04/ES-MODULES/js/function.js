export const media = (...dados) => {

    let media = 0

    for(i in dados){
        media += dados[i]
    }

    return `a media e ${media}`
}