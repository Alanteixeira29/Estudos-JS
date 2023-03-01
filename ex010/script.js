function calcular() {
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}</strong> Km/h.</p>`
    if (vel > 100) {
        res.innerHTML = `<p>Você está MULTADO por EXCESSO DE VELOCIDADE.</p>`
    }
    res.innerHTML += `<p>Dirija sempre com o cinto de segurança.</p>`
}