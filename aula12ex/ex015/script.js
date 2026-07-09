const verificar = () => {
    const data = new Date()
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        alert("[ERRO] Verifique os dados e tente novamente!!! ")
    } else {
        const fsex = document.getElementsByName('radsex')
        const idade = ano - Number(fano.value)
        let genero = ''
        const img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >= 10 && idade < 21) {
                // Adulto
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >= 10 && idade < 21) {
                // Adulto
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
        
    }


}