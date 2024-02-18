export const fn = (a, b, c) => {
   let preciofinal = 0
   let numac = 0 
   let numbc = 0
   let numab = 0
   let totalEmpanadas = a + b + c
   let iteraciones = a + b + c
   let ciclos = 1
   let cogida = false
   
   /*Búsqueda de valores de entrada incorrectos*/
   if(a < 0 || b < 0 || c < 0) {
      throwError("Algun valor de cantidad de empanadas es negativo")
   }

   if((a + b + c) % 3 !== 0) {
      throwError("El número total de empanadas NO es divisible entre 3")
   }

   if(a + b + c > 40) {
      throwError("Hay más de 40 empanadas")
   }

   /*Reducción de empanadas hasta hacer las "medias-empanadas" máximas posibles, se mezclan por orden de prioridad, primero las caras con las más baratas, luego las caras con las intermedias y finalmente las intermedias con las baratas, me invento las subcaterias ac, ab y bc que son las posibles mezclas de las entradas iniciales de datos. Se haran las mezclas mientras queden empanadas con las que hacerlas*/
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
   
   /*Formación de grupos de 3 empanadas cobrándose la de más valor. Para maximizar, siempre se irán cogiendo las más caras y luego las más baratas. La variable ciclos indica cuantas empanadas hay en el grupo. Sólo cuando se coge la primera se paga, las otras dos son gratis, al llegar a 4 se resetea el contador y se vuelve a coger la primera emapanda.*/
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
