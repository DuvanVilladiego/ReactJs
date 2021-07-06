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
  notifyObservable(model) {
    this.observer.forEach((observer) => {
     observer.notify(model)
    });
  }
}

class NotificatorManager extends Observable {
  constructor() {
    super();
    this.value = 0;
    this.name = "";
  }
  increment(name) {
    this.value++;
    this.name = name
    this.notifyObservable(this);
  }
}

class MessageExample {
  notify(model) {
    console.log(`${model.name} tienes ${model.value} mensajes nuevos`);
  }
}

class EmailExample {
  notify(model) {
    console.log(`${model.name} tienes ${model.value} correos nuevos`);
  }
}

let NotificatorManagerObject = new NotificatorManager();

NotificatorManagerObject.subscribe(new MessageExample());
NotificatorManagerObject.subscribe(new EmailExample());

NotificatorManagerObject.increment("Duvan");
