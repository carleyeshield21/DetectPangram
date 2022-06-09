// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

function isPangram(string){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    string1 = string.replace(/ /g, '').toLowerCase();

    counter = 0
    for(i=0; i<=string1.length-1; i++){
        for(j=0; j<=alphabet.length-1; j++){
            // console.log(alphabet[j], string1[i])
            if(alphabet[j] == string1[i]){
                counter++
                break
            }
        }
    }
    if(counter >= 26){
        console.log(`The sentence: ${string}\nis a Pangram\nBecause all the letters in the alphabet appeared at least once`)
    }
}
isPangram('The quick brown fox jumps over the lazy dog')
console.log('=====')
isPangram('abc defgh ijklmno pqrstuv wxyz')