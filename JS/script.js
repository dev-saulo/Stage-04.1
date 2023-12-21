let estudante = [
    {
        name:"Saulo",
        n1:9.5,
        n2:8.5
    },
    {
        name:"Cassius",
        n1:7.0,
        n2:4.0
    },
    {
        name:"Lucas",
        n1:8.0,
        n2:7.5
    },
    {
        name:"Matheus",
        n1:4.5,
        n2:5.2
    },
    {
        name:"Sinval",
        n1:9.5,
        n2:5.7
    }
]

function calcularMedia(n1,n2) {
    return ((n1 + n2) / 2).toFixed(1)
}

for(let posicao of estudante) {

    if(calcularMedia(posicao.n1,posicao.n2) >= 7) {

        alert(`A média do(a) aluno(a) ${posicao.name} é: ${calcularMedia(posicao.n1,posicao.n2)} \n
        Parabéns, ${posicao.name}! Você foi aprovado(a) no concurso!`)
        
    } else {
        alert(`A média do(a) aluno(a) ${posicao.name} é: ${calcularMedia(posicao.n1,posicao.n2)} \n
        Não foi dessa vez, ${posicao.name}! Tente novamente!`)
    }
}