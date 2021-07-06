//Creacion de clase constructora
class Observable {
  constructor() {
    this.observer = [];
  }
  //Metodo subscribe del constructor
  subscribe(notifyingClass) {
    this.observer.push(notifyingClass);
  }
  //Metodo unsubscribe del constructor
  unsubscribe(notifyingClass) {
    this.observer = this.observer.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }
  //Recorrido de todos los elementos contenidos 
  notifyObservable(model){
    this.observer.forEach(
        observer => {
            // aplicacion del metodo notify a todos los elementos contenidos
            observer.notify(model);
        }
    )
  }
}

//Clase padre que hereda propiedades del constructor Observable
class NumberExample extends Observable {
    constructor() {
        super();
        this.value = 0;
    }
    // Incremento del valor de una variable estatica
    increment() {
        this.value++;
        this.notifyObservable(this)
    }
}

//Clase que notifica en español usando el metodo notify de la clase constructora Observable
class NumberExampleSpanish {
    notify(model) {
        console.log(`El nuevo numero es : ${model.value}`)
    }
}

//Clase que notifica en español usando el metodo notify de la clase constructora Observable
class NumberExampleEnglish {
    notify(model) {
        console.log(`The new number is : ${model.value}`)
    }
}

//Creacion del objeto numberExample asignandole las propiedades de la clase NumberExample
let numberExample = new NumberExample();

//Asignacion de las clases notificadoras dentro del objeto
numberExample.subscribe(new NumberExampleSpanish())
numberExample.subscribe(new NumberExampleEnglish())

//Llamado del metodo increment para mostrar los mensajes de sus clases contenidas
numberExample.increment();
numberExample.increment()