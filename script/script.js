let what = document.getElementById('what');
let paragraph = what.querySelectorAll('p');
let contentWhat = what.getElementsByClassName('answer-con');
for( let j = 0; j < paragraph.length; j++) {
    paragraph[j].addEventListener('click', function(){
        if(contentWhat[j].style.display == 'block') {
            contentWhat[j].style.display = 'none';
        } else {
            contentWhat[j].style.display = 'block';
        }
    });
}

function Services(e) {
    let services = document.getElementById('services');
    let buttons = services.getElementsByClassName('tabs-button');
    let first = document.getElementById('first-serv');
    let second = document.getElementById('second-serv');
    let third = document.getElementById('third-serv');
    if ( e === 0 ) {
        first.style.display = 'block';
        second.style.display = 'none';
        third.style.display = 'none';
        buttons[0].classList.add('tabs-active');
        buttons[1].classList.remove('tabs-active');
        buttons[2].classList.remove('tabs-active');
    } else if (e === 1) {
        first.style.display = 'none';
        second.style.display = 'block';
        third.style.display = 'none';
        buttons[0].classList.remove('tabs-active');
        buttons[1].classList.add('tabs-active');
        buttons[2].classList.remove('tabs-active');
    } else if (e === 2) {
        first.style.display = 'none';
        second.style.display = 'none';
        third.style.display = 'block';
        buttons[0].classList.remove('tabs-active');
        buttons[1].classList.remove('tabs-active');
        buttons[2].classList.add('tabs-active');
    }
}
function BurgerMenu(e) {
    let navContainer = document.getElementById('navContainer');
    let burger = document.getElementById('burger');
    let burgerClose = document.getElementById('burgerClose');
    if(e === 0) {
        burger.style.display = 'none';
        burgerClose.style.display = 'block';
        navContainer.classList.add('add-class');
    } else if (e === 1) {
        burgerClose.style.display = 'none';
        burger.style.display = 'block';
        navContainer.classList.remove('add-class');
    }
    console.log(navContainer)
}
function ReadMore(e) {
    let Packets = document.getElementById('pack');
    let Cards = Packets.getElementsByClassName('cards');
    if( e === 0 ) {
        let hiddenAfterRead = Cards[0].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[0].getElementsByTagName('ul')[1];
        nextUl.style.display = 'block';
        hiddenAfterRead[0].style.display = 'none';
    } else if ( e === 1 ) {
        let hiddenAfterRead = Cards[0].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[0].getElementsByTagName('ul')[1];
        nextUl.style.display = 'none';
        hiddenAfterRead[0].style.display = 'block';
    } else if ( e === 2 ) {
        let hiddenAfterRead = Cards[1].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[1].getElementsByTagName('ul')[1];
        nextUl.style.display = 'block';
        hiddenAfterRead[0].style.display = 'none';
    } else if ( e === 3 ) {
        let hiddenAfterRead = Cards[1].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[1].getElementsByTagName('ul')[1];
        nextUl.style.display = 'none';
        hiddenAfterRead[0].style.display = 'block';
    } else if ( e === 4 ) {
        let hiddenAfterRead = Cards[2].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[2].getElementsByTagName('ul')[1];
        nextUl.style.display = 'block';
        hiddenAfterRead[0].style.display = 'none';
    } else if ( e === 5 ) {
        let hiddenAfterRead = Cards[2].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[2].getElementsByTagName('ul')[1];
        nextUl.style.display = 'none';
        hiddenAfterRead[0].style.display = 'block';
    } else if ( e === 6 ) {
        let hiddenAfterRead = Cards[3].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[3].getElementsByTagName('ul')[1];
        nextUl.style.display = 'block';
        hiddenAfterRead[0].style.display = 'none';
    } else if ( e === 7 ) {
        let hiddenAfterRead = Cards[3].getElementsByClassName('hiddenAfterRead');
        let nextUl = Cards[3].getElementsByTagName('ul')[1];
        nextUl.style.display = 'none';
        hiddenAfterRead[0].style.display = 'block';
    }
}