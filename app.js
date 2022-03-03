//1
const name = 'Jan'
const age = 22
const isOpen = true
const stringBoolean = 'true'
const stringNumber = '100';

//2
const number = 10 % 4
console.log(number);
const thisIsTomasz= {
    tomaszName: 'Tomasz',
    tomaszAge: 33
}
const aboutTomasz = `${thisIsTomasz.tomaszName} ma ${thisIsTomasz.tomaszAge} lata`
console.log(aboutTomasz);
const firstName = 'Jan'
const lastName = 'Kowalski'
console.log(`${firstName} ${lastName}`)
console.log(firstName + ' ' + lastName);

//3
const x = 3
const y = x+1+2
console.log('wynik' + ' ' + y);

//4
const numbers = [1, 2, 3]
const cars = ['audi', 'toyota', 'bmw']
const formulation = [true, false, true]
const empty =[]
const various = [5, 'Ewelina', false, 5, 'tablica']
console.log(various[1])
console.log(various.length)
empty.push(22)
console.log(empty)
const persons = {
    herName: 'Ewelina',
    herLastName: 'Kuźniewska',
    herAge: 26,
    hisName: 'Arek',
    hisLastName: 'Kowalski',
    hisAge: 25,
    herName2: 'Ela',
    herLastName2: 'Malinowska',
    herAge2: 29}
console.log(persons.hisName);
const z = 2
const arr=[]
arr.push(z)
console.log(arr);

const emptyObject = {}
const person = {
    name: 'Iza'
}
const personDetails = {
    name: 'Ewelina',
    lastName: 'Kuźniewska',
    age: 26,
    drivingLicence: true,
}
console.log(personDetails.age);
console.log(personDetails);
const car = {
    marka: 'Audi',
    kolor: 'czarny',
    lataSprzedazy: [2009, 2013, 2019],
}

const senstence = `proste-wartości przepisane do zmiennych, złozone- wskazują na miejsce w pamięci gdzie sa przetrzymywane dane`;
const personLicence = {
    name: 'Ala',
    lastName: 'Kowalska',
    age: 19,
    drivingLicence: true,
    drinkAlcohol: true,
}
if (age>=18 && personLicence.drivingLicence === true && personLicence.drinkAlcohol === false) {
    console.log('osoba moze prowadzić')
}
else {
   console.log('osoba nie moze prowadzić')
};

//6c
const car = {
    name: 'mustang',
    productionYear: 2020,
    color: 'red'
}
const {name, productionYear, color} = car;
const result = `Moje auto to ${name} i zostało wyprodukowane w roku ${productionYear}` 
console.log(result)
//6d
const isAdult = true 
if(isAdult === true) {
  console.log('Mozesz kupić alkohol')
} else {
  console.log('Nie mozesz kupic alkoholu')
}
const alcohol = isAdult === true ? 'Mozesz kupić alkohol' : 'Nie mozesz kupić alkoholu';
console.log(alcohol)






