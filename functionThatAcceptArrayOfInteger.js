function createPhoneNumber(numbers) {
    const str = numbers.join(""); 
    return str.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3'); 
}

function disemvowel(str){
    return str.replace(/[aeiou]/gi, '')
}