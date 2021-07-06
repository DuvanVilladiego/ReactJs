class Observable {
  constructor() {
    this.observer = [];
  }

  subscribe(notifyingClass) {
    this.observer.push(notifyingClass);
  }

  unsubscribe(notifyingClass) {
    this.observer = this.observer.filter(
      (observer) => observer instanceof notifyingClass !== true
    );
  }

  notifyObservable(model){
    this.observer.forEach(
        observer => {
            observer.notify(model);
        }
    )
  }
}

class NumberExample extends Observable {
    constructor() {
        super();
        this.value = 0;
    }
    increment() {
        this.value++;
        this.notifyObservable(this)
    }
}

class NumberExampleSpanish {
    notify(model) {
        console.log(`El nuevo numero es : ${model.value}`)
    }
}

class NumberExampleEnglish {
    notify(model) {
        console.log(`The new number is : ${model.value}`)
    }
}

let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish())
// numberExample.subscribe(new NumberExampleEnglish())

numberExample.increment();
numberExample.increment()