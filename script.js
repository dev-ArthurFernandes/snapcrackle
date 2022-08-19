function snapCrackle(maxValue){

    let string = ""

    for(let i = 1; i <= maxValue; i++){
        
        if(i % 2 == 1 && i % 5 == 0){
            if(i == maxValue){
                string += "SnapCrackle"
            }else{
                string += "SnapCrackle, "
            }
        }else if(i % 2 == 1){
            if(i == maxValue){
                string += "Snap"
            }else{
                string += "Snap, "
            }
        }else if(i % 5 == 0){
            if(i == maxValue){
                string += "Crackle"
            }else{
                string += "Crackle, "
            }
        }else{
          if(i == maxValue){
            string += `${i}`
          }else{
            string += `${i}, `
          }
        }
    }

    return string
}

let a = snapCrackle(15)

console.log(`Entrega: ${a}`)