function igpayAtinlay(input) {
    let vowels = ['A', 'E', 'I', 'O', 'U'];
    let regex = /^[a-z]/;
    let sentenceInput = input.toUpperCase();

    let pigLatinSentence = sentenceInput.split(' ');
    let pigLatinSentenceBroken = pigLatinSentence.map(word => {
        let x = [...word];
        console.log(x);
        //The `w` variable can be deleted, replace `w` in the following FOR LOOP with `x`. The `w` variable is the filter removing punctuation to ensure proper translation.
        let w = x.filter(letter => {
            if (letter === ',' || letter === '.' || letter === "'") {
                
            } else {
                return letter;
            }
        });
        for (let i = 0; i < vowels.length; i++) {
            //Rule #1 & corresponding changes.
            if (w[0] === 'A' || w[0] === 'E' || w[0] === 'I' || w[0] === 'O' || w[0] === 'U') {
                w.push('W','A','Y');
                break;
            };
            //Rule #3 & corresponding changes.
            if (w[0] !== vowels[i] && w[1] === 'A' || w[1] === 'E' || w[1] === 'I' || w[1] === 'O' || w[1] === 'U') {
                let convertThree = w.shift();
                w.push(convertThree);
                w.push('A', 'Y');
                break;
            };
            //Rule #2 & corresponding changes.
            if (w[0] !== vowels[i] && w[1] !== vowels[i]) {
                let convert = w.shift();
                let convertTwo = w.shift();
                w.push(convert);
                w.push(convertTwo);
                w.push('A', 'Y');
                break;
            };
        }
        //Placing each word, its letters joined back together again, in an array.
        let y = w.join('').toLowerCase();
        return y;
    });
    //Joining the words back together in a full sentence.
    let boundPigLatinSentence = pigLatinSentenceBroken.join(' ');
    //The next two lines consists on ensuring the first word of the translated sentence is capitalized.
    let capitalizedSentence = boundPigLatinSentence[0].toUpperCase();
    let renderedPigLatinSentence = boundPigLatinSentence.replace(regex, capitalizedSentence);
    
    return renderedPigLatinSentence;
};

console.log(igpayAtinlay('Amazon, Hamza, Troy'));


module.exports.igpayAtinlay = igpayAtinlay;
/*--------------------------------------------
CREDITS FOR PIG LATIN TRANSLATION GOES TO. . .
//Credit goes to Purdue University for laying
out the basic understanding of Pig Latin: 
https://web.ics.purdue.edu/~morelanj/RAO/prepare2.html
--------------------------------------------*/