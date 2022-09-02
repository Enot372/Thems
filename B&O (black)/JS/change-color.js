let intrestingColor = '#fea4c6"'; // pink
const btn1 = document.querySelector('.btn-lazuli');
const btn2 = document.querySelector('.btn-malahit');
const btn3 = document.querySelector('.btn-ruby');
let Col = document.querySelectorAll('#chang');
let btnReset = document.querySelectorAll('.btn-reset');

let colours = {
    lazuli: '#007fff',
    malahit: '#0BDA51',
    ruby: '#e0112a',
    default: '#151515',
    defaultWhite: '#fde4c6'
}

Col.forEach(elem => {
    if (!localStorage.getItem('lastColor')) {
        if (localStorage.getItem('dark') == 'false') {
            elem.style.backgroundColor = colours.defaultWhite;
            return;
        }
        else {
            elem.style.backgroundColor = colours.default;
            return;
        }
    }
    elem.style.backgroundColor = localStorage.getItem('lastColor');
})

function onClick(e) {
    switch(e.target.id) {
        case 'lazuli':
            localStorage.setItem('lastColor', `${colours.lazuli}`);
            Col.forEach((elem) =>{
                elem.style.backgroundColor = colours.lazuli;
            });
            break;
        case 'malahit':
            localStorage.setItem('lastColor', `${colours.malahit}`);
            Col.forEach((elem) =>{
                elem.style.backgroundColor = colours.malahit;
            });
            break
        case 'ruby':
            localStorage.setItem('lastColor', `${colours.ruby}`);
            Col.forEach((elem) =>{
                elem.style.backgroundColor = colours.ruby;
            });
            break
        default:
            break;
    }
}

btn1.addEventListener('click', onClick);
btn2.addEventListener('click', onClick);
btn3.addEventListener('click', onClick);

btnReset.addEventListener('click', () => {
    if (localStorage.getItem('dark') == 'false') {
        Col.forEach(elem => {
            elem.style.backgroundColor = colours.defaultWhite;
        });
        btnReset.style.backgroundColor = colours.defaultWhite
        localStorage.removeItem('lastColor');
    }
    else {
        Col.forEach(elem => {
            elem.style.backgroundColor = colours.default;
        });
        btnReset.style.backgroundColor = colours.default
        localStorage.removeItem('lastColor');
    }
})