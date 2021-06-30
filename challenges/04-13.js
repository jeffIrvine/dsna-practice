
//Convert a phrase to an acronym

//test cases:
//National Public Radio => NPR 
//As Soon As Possible => ASAP 

//Approach:
//take in a string (phrase)
//break into each word 
//identify the fist letter of each word
//hold onto and join the letters pulled from the words
//return a string 

const fullPhrase = 'National Public Radio'

export const acronymParser = (phrase) => {
  return phrase.split(' ').map(word => word[0]).join('');
}

//input: number
//output: phrase or number

//Approach:
//take in a number
//divide the number by 3 5 and/or 7
//if number is divisible with no remainder return corresponding phrase
//else return number 

export const raindrops = (num) => {
  let output = '';
  if(num % 3 === 0) output += 'Pling'
  if(num % 5 === 0) output += 'Plang'
  if(num % 7 === 0) output += 'Plong'
  else return num
}

