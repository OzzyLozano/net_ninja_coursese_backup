// let ul = document.querySelector('.people');

// let people = ['adita', 'betsaida', 'kenia', 'ozzy', 'naila'];

// let html = ``;

// let log_person = (person) => {
//     html += `<li style="color: purple"> ${person} </li>`
// }

// people.forEach(log_person);

// ul.innerHTML = html;

// // chapter 5 - objects
// let user = {
//     name: 'ozzy',
//     age: 19,
//     email: 'ozzy@gmail.com',
//     location: 'here',
//     blogs: [
//         {title: 'hello there', likes: 30}, 
//         {title: 'oh hi mark', likes: 35}
//     ],
//     log_blogs() {
//         console.log(this.name, 'has written the following blogs: ');
//         this.blogs.forEach(blog => {
//             console.log(blog.title, '- likes:', blog.likes);
//         });
//     }
// };

// user.log_blogs();

// let paragraphs = document.querySelectorAll('p');
// // paragraphs.forEach(paragraph => {
// //     console.log(paragraph);
// // })

// // get elements by id
// let title = document.getElementById('page-title');
// console.log(title);

// // get elements by class name
// let errors = document.getElementsByClassName('error');
// console.log(errors);

// // get elements by tag name
// let p_tags = document.getElementsByTagName('p');

// for (let i = 0; i < p_tags.length; i++) {
//     console.log(p_tags[i]);
// }

// let paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new txt';
// });

// let content = document.querySelector('.content');
// console.log(content.innerHTML);

// let ppl = ['adita', 'betsaida', 'kenia'];
// ppl.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// let link = document.querySelector('a');
// link.setAttribute('href', 'https://www.thenetninja.co.uk')
// link.innerText = 'the net ninja website';

// let mssg = document.querySelector('p');
// mssg.setAttribute('class', 'success');

// let content = document.querySelector('p');
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

let content = document.querySelectorAll('p');
content.forEach(p => {
    if (p.textContent.includes('error')) p.classList.add('error');
    if (p.textContent.includes('success')) p.classList.add('success');
});

let title = document.querySelector('.title');
title.classList.toggle('test');
