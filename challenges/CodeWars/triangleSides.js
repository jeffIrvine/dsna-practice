const typeOfTriangle = (sideA, sideB, sideC) => {
  
  const sides = [sideA, sideB, sideC].sort((a, b) => b - a);

  for (let i = 0; i < sides.length; i++){
      let side = sides[i]
      if(isNaN(side)){
        return "Not a valid triangle"
      }
  }
  if(sides[0] >= sides[1] + sides[2]){
    return "Not a valid triangle"
  }
  
  const memo = new Set(sides) 
  const results = {
    1: "Equilateral",
    2: "Isosceles",
    3: "Scalene"
  }
  return results[memo.size]
}
