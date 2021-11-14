console.log("************** DELIVERABLE 05 *********************");
console.log("************** 5. Slot Machine **************");
//El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda.
//Cada máquina tragaperras(instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
/*Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
"Congratulations!!!. You won <número de monedas> coins!!";
y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:

"Good luck next time!!".
*/
class SlothMachine {
  constructor() {
    this.monedas = 0;
  }

  play() {
    this.monedas += 1;
    const aleatorio1 = Math.round(Math.random());
    const aleatorio2 = Math.round(Math.random());
    const aleatorio3 = Math.round(Math.random());
    if (aleatorio1 === 1 && aleatorio2 === 1 && aleatorio3 === 1) {
      console.log("Congratulations!!!. You won " + this.monedas + " coins!!");
      this.monedas = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
