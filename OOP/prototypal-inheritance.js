/*const john = {
  name: 'John',
  yearOfBirthday: 1990,
  job: 'teacher'
};

const ruslan = {
  name: 'Ruslan',
  yearOfBirthday: 1991,
  job: 'web-developer'
};*/

function Person(name, surname, yearOfBirthday, job) {
  this.name = name;
  this.surname = surname;
  this._yearOfBirth = yearOfBirthday;
  this.job = job;
  let color = 'white';
  let adminMode = false;
  this.setAdminMode = function (boolean) {
    boolean ? adminMode = true : adminMode = false;
  };
  this.setColor = function (colorAr) {
    if(adminMode) {
      color = colorAr;
      return;
    }
    console.log('You are not admin! You cannot set this property');
  };
  this.getColor = function () {
    if(adminMode) {
      console.log(color);
      return color;
    }
    console.log('You are not admin! You cannot get this property');
  };

  this._isAdmin = function () {
    return adminMode;
  };

  const getFullName = function () {
    return this.name + ' ' + this.surname;
  }.bind(this);

  this.sayHi = function () {
    console.log('Hello, my name is ' + getFullName())
  }
}

const ruslan = new Person('Ruslan', 'Runner');
ruslan.sayHi();

Person.prototype.age = function getAge() {
  return new Date().getFullYear() - this.yearOfBirth;
};

const tanya = new Person('Tanya', 1974, 'Homekeeper');

function Boxer(name, surname, yearOfBirthday, job, title, wins, losses) {
  Person.apply(this, arguments);
  this.title = title;
  this.wins = wins;
  this.losses = losses;

  let getColor = this.getColor;
  this.getColor = function () {
    getColor.apply(this, arguments);
    if(this._isAdmin()) {
      console.log('haha!');
    }
  }
}

const muhammad = new Boxer('Muhammad', 'Ali', 1931, 'Boxer', 'champion', 55, 3);


