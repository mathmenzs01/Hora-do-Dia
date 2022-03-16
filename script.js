function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()
    var horas = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são exatamente ${horas} horas e ${minutos} minutos.`
    if (horas >= 0 && horas < 12) {
        //BOM DIA
        foto.src = 'fotomanhã.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas < 18) {
        //BOA TARDE
        foto.src = 'fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        //BOA NOITE
        foto.src = 'fotonoite.jpg'
        document.body.style.background = '#515154'
    }
        
}