export const fn = (a, b, c) => {
   let preciofinal = 0
    let numac = 0 
    let numbc = 0
    let numab = 0
    let totalEmpanadas = a + b + c
    let iteraciones = a + b + c
    let ciclos = 1
    let cogida = false
    
    if(a < 0 || b < 0 || c < 0) {
      console.log("Algun valor de cantidad de empanadas es negativo")
        throwError;
    }

    if((a+b+c)%3 !== 0) {
        console.log("El número total de empanadas NO es divisible entre 3")
        throwError;
    }

    if(a+b+c > 40) {
      console.log("Hay más de 40 empanadas")
      throwError;
    }

    while (a !== 0 && c !== 0) {
       a--
       c--
       numac += 2
    }

    while (b !== 0 && c!== 0) {
       b--
       c--
       numbc += 2
    }

    while(a !== 0 && b !== 0) {
       a--
       b--
       numab += 2
    }
    
    for(let i = 0; i < iteraciones; i++) {
        
        if (ciclos == 4) {
            ciclos = 1
         }
       if(c > 0 && ciclos <= 3 && cogida === false) {
          c--
          if (ciclos === 1) {
             preciofinal += 16
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       if(numbc > 0 && ciclos <= 3 && cogida === false) {
          numbc--
          if (ciclos === 1) {
             preciofinal += 15
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       if(b > 0 && ciclos <= 3 && cogida === false) {
          b--
          if (ciclos === 1) {
             preciofinal += 14
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       if(numac > 0 && ciclos <= 3 && cogida === false) {
          numac--
          if (ciclos === 1) {
             preciofinal += 14
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       if(numab > 0 && ciclos <= 3 && cogida === false) {
          numab--
          if (ciclos === 1) {
             preciofinal += 13
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       if(a > 0 && ciclos <= 3 && cogida === false) {
          a--
          if (ciclos === 1) {
             preciofinal += 12
          }
          ciclos++
          totalEmpanadas--
          cogida = true
       }
       cogida = false
    }

    return preciofinal
};
