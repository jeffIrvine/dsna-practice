
//Convert a phrase to an acronym
//take in a string 
//return a string
//identify each word 
//identify the fist letter of each word
//hold onto and join the letters pulled from the words

const fullPhrase = 'National Public Radio'

export const acronymParser = (phrase) => {
  return phrase.split(' ').map(word => word[0]).join('');
}

console.log(acronymParser(fullPhrase));