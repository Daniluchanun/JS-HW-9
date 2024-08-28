console.log(document);
let div = document.createElement('div');
div.classList.add('wrap', 'collapse', 'alpha', 'beta');
div.innerText = 'hello world';
div.style.background = 'red';
div.style.color = 'white';
div.style.fontSize = '24px';
div.style.width = '300px';
document.body.appendChild(div);

let divCopy = div.cloneNode(true);
document.body.appendChild(divCopy);
divCopy.innerText = 'Hi world';


let arr = ['Main', 'Products', 'About us', 'Contacts'];
document.write(`<ul>`);
for (const item of arr) {
    document.write(`<li>${item}</li>`);
}
document.write(`</ul>`);


let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const element of coursesAndDurationArray) {
    document.write(`<div>${element.title} ${element.monthDuration}</div>`);
}


{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];
    for (const element of coursesAndDurationArray) {
        let div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = `<h1 class='heading'>${element.title}</h1> <p class='description'>${element.monthDuration}</p>`;
        document.body.appendChild(div);
    }

}

