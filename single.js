//ANSWER 1
function zeros(n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5);
        count += n;
    }
    return count;
}

// Test cases
console.log(zeros(0));  // 0
console.log(zeros(5));  // 1
console.log(zeros(6));  // 1
console.log(zeros(30)); // 7

//ANSWER 2
function cakes(recipe, available) {
    let maxCakes = Infinity; 
  
   
    for (let ingredient in recipe) {
 
      if (!available.hasOwnProperty(ingredient)) {
        return 0;
      }
      
      let cakesForIngredient = Math.floor(available[ingredient] / recipe[ingredient]);
  
      
      maxCakes = Math.min(maxCakes, cakesForIngredient);
    }
  
    return maxCakes;
  }
  
  // Test cases
  console.log(cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  ));  // 2
  
  console.log(cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  ));  // 0
  


//ANSWER 3
function cakes(recipe, available) {
    let maxCakes = Infinity;

    for (let ingredient in recipe) {
        if (!available[ingredient]) {
          
            return 0;
        }

        maxCakes = Math.min(maxCakes, Math.floor(available[ingredient] / recipe[ingredient]));
    }

    return maxCakes;
}


console.log(cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
)); 

console.log(cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
)); 


//ANSWER 4
function createMessage(word) {
    let words = [word]; 

    function addWord(nextWord) {
        if (nextWord === undefined) {
            return words.join(' '); 
        }
        words.push(nextWord); 
        return addWord; 
    }

    return addWord; 
}

// Test case
console.log(createMessage("Hello")("World!")("how")("are")("you?")()); 


//ANSWER 5
function isPalindrome(str) {
    
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
 
    return cleanedStr === cleanedStr.split('').reverse().join('');
  }
  
  // Test cases
  console.log(isPalindrome("A man is a canal panama"));  // true
  console.log(isPalindrome("RaceCar"));  // true
  console.log(isPalindrome("Eva, can i see bees in a cava ?"));  // true
  console.log(isPalindrome("race a Car"));  // false
  

  //ANSWER 6

  function greet(name, age) {
    console.log(`Hello, my name is ${name} and I am ${age} years old.`);
  }
  
  greet.call(null, 'Alice', 25); 

  greet.apply(null, ['Bob', 30]); 
  
  const greetAlice = greet.bind(null, 'Alice'); 

  greetAlice(25); 
  
  
  
