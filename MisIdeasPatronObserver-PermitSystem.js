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

class LicenseObj extends Observable {
  constructor() {
    super();
    this.name = "";
  }
  increment(name, license) {
    this.name = name
    if (license){
      LicenseManager.subscribe(new Nameupdate())
      LicenseManager.subscribe(new Emailupdate())
      LicenseManager.subscribe(new Deleteusers())
      LicenseManager.subscribe(new Postimg())
    } else {
      LicenseManager.subscribe(new Postimg())
    }
    this.notifyObservable(this);
  }
}

class Nameupdate {
  notify(model) {
    console.log(`${model.name}, Puedes actualizar los nombres de otros usuarios`);
  }
}

class Emailupdate {
  notify(model) {
    console.log(`${model.name}, Puedes actualizar los correos de otros usuarios`);
  }
}

class Deleteusers {
  notify(model) {
    console.log(`${model.name}, Puedes eliminar otros usuarios`);
  }
}

class Postimg {
  notify(model) {
    console.log(`${model.name}, Puedes publicar en el muro`)
  }
}
let LicenseManager = new LicenseObj();

LicenseManager.increment("Duvan", true);
