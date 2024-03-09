const calculateAverage = (vet) => {
    const sum = vet.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum / vet.length;
}

const findMaxAge = (vet) => {
    return Math.max(...vet);
}

const getOddAges = (vet) => {
    return vet.filter(age => age % 2 !== 0);
}

const allAreAdults = (vet) => {
    return vet.every(age => age >= 18);
}

const allAgesGreaterOrEqual = (vet, threshold) => {
    return vet.every(age => age >= threshold);
}

const displayAgesGreaterOrEqual = (vet, threshold) => {
    return vet.filter(age => age >= threshold);
}

const calculateAverageOfSelectedAges = (vet, threshold) => {
    const filteredAges = vet.filter(age => age >= threshold);
    if (filteredAges.length > 0) {
        const sum = filteredAges.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return sum / filteredAges.length;
    } 
}

const sumAges = (vet) => {
    let sum = 0;

    vet.forEach(element => {
        sum += element;
    });

    return sum;
}

const getRandomPositions = (vet) => {
    const randomIndex = Math.floor(Math.random() * vet.length);
    return randomIndex;
}

document.addEventListener('DOMContentLoaded', () => {
    const vetAges = [10, 21, 31, 40];
   
    document.write(`<strong>Idades = ${vetAges}</strong>`);
    document.write(`<p>Soma das idades = ${sumAges(vetAges)}</p>`);
    document.write(`<p>Média das idades = ${calculateAverage(vetAges)}</p>`)
    document.write(`<p>Maior idade = ${findMaxAge(vetAges)}</p>`)
    document.write(`<p>Idades ímpares = ${getOddAges(vetAges)}</p>`)
    document.write(`<p>Todos são maiores de idade = ${allAreAdults(vetAges)}</p>`)

    const userThreshold = prompt('Informe um valor para verificar se todas as idades são maiores ou iguais:');
    document.write(`<p>Todas as idades são maiores ou iguais a ${parseInt(userThreshold)}? =  ${allAgesGreaterOrEqual(vetAges, parseInt(userThreshold))}</p>`);

    const randomIndex = getRandomPositions(vetAges);
    const randomAge = vetAges[randomIndex];

    document.write(`</p><strong> Idade aleatória escolhida = ${randomAge}</strong></p>`)
    document.write(`<p>Todas as idades maiores ou igual a ${randomAge} = ${displayAgesGreaterOrEqual(vetAges, randomAge)}</p>`)
    document.write(`<p>Média das idades maiores ou iguais a ${randomAge}= ${calculateAverageOfSelectedAges(vetAges, randomAge)}</p>`)
});
