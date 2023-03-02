let matriz =   [[1,10,211],
                [30,51,2],
                [5,10,99]]
maior = 0
posicao = 0
menor = maior
console.table(matriz)
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++)
    if(matriz[i][j] > maior){
        maior = matriz[i][j]
        linha = matriz[i]
        menor = maior
    }    
} for(let k=0;k<linha.length;k++){
    if(linha[k] < menor){
        menor = linha[k]
        posicao = k
    }
}
console.log(`Linha do Array ${linha}`);
console.log(`O maior Número da matriz é: ${maior}`)
console.log(`O menor número da linha do Array em que o maior foi enontrado é ${menor}`);
console.log(`A posição do menor número é o índice: ${posicao}`);











// function MyMin(myarr){
//     var al = myarr.length;
//     minimum = myarr[al-1];
//     while (al--){
//         if(myarr[al] < minimum){
//             minimum = myarr[al]
//         }
//     }
//     return minimum;
// };
// var l = [0,1,2,3]
// var m = MyMin(l)
// console.log(m)