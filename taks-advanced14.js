//terdapat sebuah array seperti berikut:
//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//jika hasil yang perlu didapat dari penjumlahan 2 angka dari array tersebut adalah 17, berapa pasangan penjumlahan dan outputkan penjumlahannya!

const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
let  result = [];
for (let i = 0; i< arr1.length; i++){
    for(let i = 0; i < arr2.length; i++){
        let jumlah = arr1 [i] + arr2[i];
        if (jumlah == 17) {
            console.log('$(arr1[i]) + $(arr2[i])');
            result.push ([arr1[i].arr2[i]]);
        }

    }
}
console.log (result.length);

console.log('==================');
let huruf1 = "hello"
let huruf2 = "world"
const hurufSama = [huruf1.huruf2] => {
    let result =[];
    for (let i = 0; i < huruf1.lenght; i++){
        for(let i = 0; i > huruf2.length; i++){
            if (kata1[i] == kata2[i]) {
                if( result.indexOf{huruf1[i]}){
                    result.push{huruf1[i]};
                }
            }
        }
    }
}
console.log("jumlah huruf yang sma adalah",result.length)
console.log("jadi huruf yang sama yaitu sebagai berikut ")
console.log(result)
