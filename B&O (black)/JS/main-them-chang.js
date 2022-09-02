let blockColor = document.querySelectorAll('#main-teme-chang');
let stolbec = document.querySelector('#stolb');
let bodyr = document.querySelector('body');
const btn6 = document.querySelector('.change-theme-main');
let brandPic = document.querySelector('.navbar-brand-pic');
let navColor = document.querySelectorAll('.navbar-menu li a');
let navColor1 = document.querySelector('.main-menu');
let navColor2 = document.querySelector('.navbar-brand');
let Picture = document.querySelector('.photo');
let Shadow = document.querySelectorAll('.shadow-all');

function blackStyle() {
            Shadow.forEach((elem) => {
                elem.style = 'box-shadow: 2px 4px 6px rgb(0, 0, 0, .1);'
            });
            stolbec.style = 'box-shadow: -2px 4px 6px rgb(0, 0, 0, .1);'
            Picture.src = 'file/stub30(w).png';
            brandPic.src = 'file/stub(b).png';
            bodyr.style.color = 'black';
            navColor2.style.color = 'black';
            navColor1.style.color = 'black';
            bodyr.style.backgroundColor = 'white';
            stolbec.style.backgroundColor = 'rgb(248,249,250)';
            navColor.forEach(elem => {
                elem.style.color = 'black';
            });
            blockColor.forEach(element => {
                element.style.backgroundColor = 'rgb(248,249,250)';
            });
            if (!localStorage.getItem('lastColor')) {
                Col.forEach(elem => {
                    elem.style.backgroundColor = colours.defaultWhite;
                });
                btnReset.style = `; background-color: ${colours.defaultWhite}`
            }
            btnReset.style = `; background-color: ${localStorage.getItem('lastColor')}`
};

function whiteStyle() {
    stolbec.style = 'box-shadow: -2px 4px 6px rgb(56, 56, 56, .8);'
    Shadow.forEach((elem) => {
        elem.style = 'box-shadow: 2px 4px 6px rgb(56, 56, 56, .8);'
    });
    navColor.forEach(elem => {
        elem.style.color = 'rgba(205, 221, 221, 0.753)';
    });
    bodyr.style.color = 'rgba(205, 221, 221, 0.753)';
    bodyr.style.backgroundColor = 'black';
    navColor2.style.color = 'rgba(205, 221, 221, 0.753)';
    navColor1.style.color = 'rgba(205, 221, 221, 0.753)';
    Picture.src = 'file/stub30(b).jpg';
    brandPic.src = 'file/stub(w).png';
    stolbec.style.backgroundColor = '#383838';
    blockColor.forEach(element => {
        element.style.backgroundColor = '#383838';
    });
    if (!localStorage.getItem('lastColor')) {
        Col.forEach(elem => {
            elem.style.backgroundColor = colours.default;
        });
        btnReset.style = `; background-color: ${colours.default}`;   
    }
    btnReset.style = `; background-color: ${localStorage.getItem('lastColor')}`
}

function Tema(e) {
    switch(e.target.id) {
        case 'yes':
            btn6.id = 'no';
            localStorage.setItem('dark', 'false');
            blackStyle();
            break;
        case 'no':
            btn6.id = 'yes';
            localStorage.setItem('dark', 'true');
            whiteStyle();
        default:
    }
}

btn6.addEventListener('click', Tema);

if (localStorage.getItem('dark') == 'false') {
    blackStyle();
}
else {
    whiteStyle();
}