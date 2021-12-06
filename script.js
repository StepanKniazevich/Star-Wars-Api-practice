//const url = "https://swapi.dev/api/planets/"

const showInform = document.querySelector(".showInformation");
const listBlock = document.querySelector(".listBlock");






//getData(url, "Get");


function generateData(data) {

    listBlock.innerHTML = " ";

    const list = document.createElement("ul");


    for (let item in data) {

        const listItem = document.createElement("li");

        if (Array.isArray(data[item]))

            data[item].forEach(element => {
                listItem.innerHTML += `${element} \n `

            });
        else {
            listItem.innerHTML = `${data[item]}`
        }

        list.append(listItem);

    }

    listBlock.append(list);


}



showInform.addEventListener("click", async function () {

    try {

        let randomValue = Math.floor(Math.random() * 84);
        let response = await fetch(`https://swapi.dev/api/people/${randomValue}`);
        let data = await response.json();
        generateData(data);

    }
    catch (error) { }

});








//  1. Створити сайт використовуючи swapi.dev. вибрати 1 з 6 проперті (films, characters etc..) і зробити запит по них, 
//  вибрати одну з перших проперті що отримаєте і витягнувши з неї "url" - отримати конкретну(планету,фільм, персонажа) 
//  з всією інформацією про нього. Додати кнопку при натисканні на яку вивести всю наявну інформацію на екран красиво структуровано.

//  2. Використовуючи параметр серч, розробити сайт який буде з допомогою інпута робити пошук за конкретним параметром і виводити дані на сторінку. 
//  (якщо 1 знахідка - вивести всю інфу про айтем, якщо більше 1 то вивести список по філду).


/*
    .then(response => response.json())
    .then(data => console.log(data.results)).then(data => console.log(data.status))
    .catch(data => console.log(`Error ${data.status}`));
*/


/*

function getData() {
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        xhr.open("Get", "https://swapi.dev/api/people/");
        xhr.send();
        xhr.responseType = "json";

        resolve(xhr);


    });
}

getData().then(data => console.log("Star War ", data.results));
*/