'use strict';

// Дан массив объектов:

const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2,
    },
    {
        name: 'Three',
        age: 3,

    },
    {
        name: 'Four',
        age: 4,
    }
];

function  sayHello() {
    console.log(`Hello! My name is ${this.name}`);
}

persons.forEach((persons) => {
    persons.sayHello = sayHello;
})

persons[1].sayHello

// Каждому объекту из этого массива необходимо добавить метод .sayHello() который выводит
//  сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта

// Используя setTimeout и .forEach(), вызовите метод .sayHello() у каждого объекта с задержкой в 1 секунду


persons.forEach ((persons, index)=>{
    setTimeout( sayHello.bind(persons),index * 1000)
})

// Используя объект заставьте creature воспользоваться методом .sayHello() любого объекта из массива, при этом не добавляя этот метод в creature

const creature = { name: 'Ctulhu', eyes: 8 };

sayHello.call(creature)

// Напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива)
//  эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
//  после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива) пример:

function presentation(element,getStarted){
    
    function getStarted (){
        console.log("Ladies and Gentlemen, here is our person: ")
    return element.sayHello()
    }
    return getStarted();
};

function presentation(callback){
    console.log("Ladies and Gentlemen, here is our person: ");
    callback();
}


presentation(persons[1].sayHello.bind(persons[0]))
presentation(() => persons[1].sayHello())



