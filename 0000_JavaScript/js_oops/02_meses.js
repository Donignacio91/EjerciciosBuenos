let {aMeses, aMesesRusos, aMesesIngles} = require('./02_data.js')

//La sentencia switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y ejecuta sentencias asociadas a ese case, así como las sentencias en los case que siguen.
function elegirArray(key) { //actua como decodificador 
    let r
    switch (key) { //aqui al switch le digo que busqye estos casos en relaccion con el key de los arrays y que returne el array que yo le pido 
        case 'español':
        case 'es':
            r = aMeses
            break;
        case 'ruso':    
        case 'ru':
            r =  aMesesRusos
            break;
        case 'ingles': 
        case 'íngles':    
        case 'en':
            r = aMesesIngles
            break;
        default:
            throw new Error('Código de idioma incorrecto')
    }
    return r
}

function elegirIdioma(key) {
    let r
    switch (key) {
        case 'es':
            r = 'español'
            break;
        case 'ru':
            r =  'ruso'
            break;
        case 'en':
            r = 'inglés'
            break;
        default:
            r = key
    }
    return r
}

function prepararMeses (id1, id2) { // los id1 son variables que yo me he inventado para que actuen como x, y 

    let meses1 = elegirArray(id1)
    let meses2 = elegirArray(id2)
   
    if (meses1.length > meses2.length ) {
        throw new Error('Falta un mes del segundo idioma')
    } else if (meses1.length < meses2.length) {
        throw new Error('Falta un mes del primer idioma')
    }

    let oMeses = {}
    for (let i = 0; i < meses1.length; i++) {
        const item = meses1[i];
        oMeses[item] = meses2[i]   
    }
    return oMeses
} 

function mostrarParesMeses(id1, id2) {
    
    let oMeses = prepararMeses(id1, id2)
    let texto = ``
    let ids = [elegirIdioma(id1), elegirIdioma(id2)]
    for (const mes in oMeses) {
        const trad = oMeses[mes];    
        texto += `El mes ${mes} en ${ids[0]}, se dice ${trad} en ${ids[1]}\n`
    }
    console.log(texto)
}

try {
    let idioma1= 'ruso'
    // Eleige dos entre 'es', 'ru', 'en'
    mostrarParesMeses('ruso', 'en')//son lo mismo con let o con la palabra va por la posicion
    mostrarParesMeses(idioma1, 'en')
} catch (e) {
    console.error('Lo sentimos')
    console.error(e.message)
}
console.log('Gracias por venir')