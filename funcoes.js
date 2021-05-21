function calcular() {

    var valor = Number(document.getElementById('tempinicial').value)
    var tipoescala = document.getElementById('tipoescala').value
    var escala = document.getElementById('escala').value
    var result = document.getElementById('result')
    var mostratipo

    if (tipoescala == '1' && escala == '2') {
        valor = valor * 1.8 + 32
        mostratipo = '°F'
    } else if (tipoescala == '1' && escala == '3') {
        valor = valor + 273.15
        mostratipo = 'K'
    } else if (tipoescala == '2' && escala == '1') {
        valor = (valor - 32)/1.8 
        mostratipo = '°C'
    } else if (tipoescala == '2' && escala == '3') {
        valor = (valor - 32)/1.8000 + 273.15
        mostratipo = 'K'
    } else if (tipoescala == '3' && escala == '1') {
        valor = valor - 273.15
        mostratipo = '°C'
    } else if (tipoescala == '3' && escala == '2') {
        valor = (valor - 273.15) * 1.8000 + 32
        mostratipo = '°F'
    } else if (tipoescala == '1' && escala == '1' || tipoescala == '2' && escala == '2' || tipoescala == '3' && escala == '3') {
        valor = "x"
        mostratipo = ""
    }  
    
    if (valor == "x" || document.getElementById('tempinicial').value == "") {
        result.innerHTML = `Não há o que converter.`
    } else {
    result.innerHTML = `${valor.toFixed(1)} ${mostratipo}` 
    }
}
