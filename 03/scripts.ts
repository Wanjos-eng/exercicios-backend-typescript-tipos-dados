const tabuadas = (numeros: number[]): string => {
    let resultado: string = '';

    for (const n of numeros) {
        for (let i = 0; i <= 10; i++) {
            resultado += `${n} x ${i} = ${n * i}\n`;
        }

        resultado += '--------------------------------\n';
        
    }

    return resultado;
}

console.log(tabuadas([1, 5, 2]));