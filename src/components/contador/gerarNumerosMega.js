function gerarNumeroNaoContido(min, max, array){
    const aleatirio = parseInt(Math.random() * (max + 1 - min)) + min

    //chamada recursiva - vai para de executar quando o numero gerado não estiver no array
    return array.includes(aleatirio) ? gerarNumeroNaoContido(min, max, array) : aleatirio
}

function gerarNumerosMega(qtde){

    //preenchendo o array com 0 baseado na quantidade passada no qtde
    const numeros = Array(qtde).fill(0)
    .reduce((nums) => {
        //gerando o novo numero
        const novoNumero = gerarNumeroNaoContido(1, 60, nums)

        //incrementando o novo numero no array que ja possui valores anteriores
        return[...nums, novoNumero]
    }, [])
    //ordenando os numeros do array
    .sort((n1, n2) => n1 - n2)

    return numeros
}