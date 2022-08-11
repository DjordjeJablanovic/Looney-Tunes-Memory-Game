const cardArray = [{
    name: 'daffy-duck',
    img: 'images/daffy-duck.png'
},
{
    name: 'foghorn',
    img: 'images/foghorn.jpg'
},
{
    name: 'sylvester',
    img: 'images/sylvester.jpg'
},
{
    name: 'tasmanian-devil',
    img: 'images/tasmanian-devil.png'
},
{
    name: 'tweety',
    img: 'images/tweety.gif'
},
{
    name: 'zeka-peka',
    img: 'images/zeka-peka.jpg'
},
{
    name: 'daffy-duck',
    img: 'images/daffy-duck.png'
},
{
    name: 'foghorn',
    img: 'images/foghorn.jpg'
},
{
    name: 'sylvester',
    img: 'images/sylvester.jpg'
},
{
    name: 'tasmanian-devil',
    img: 'images/tasmanian-devil.png'
},
{
    name: 'tweety',
    img: 'images/tweety.gif'
},
{
    name: 'zeka-peka',
    img: 'images/zeka-peka.jpg'
}];

cardArray.sort(() => 0.5 - Math.random()); //shuffle cardArray to be random.

const grid = document.querySelector('#grid');
let cardsChosen = [];
let cardsChosenId = [];
const cardsWon = [];

function createBoard(){
    for(let i=0; i<cardArray.length ; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.append(card);
    }
   
}
createBoard();

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2 ){
        setTimeout(checkMetch, 500);
    }
}
function checkMetch(){
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    const cards = document.querySelectorAll('img');

    if (optionOneId == optionTwoId){
        alert(' you clicked the same card')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].removeEventListener('click', flipCard)
        cards[optionOneId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen);
    } else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
    }
    cardsChosen = [];
    cardsChosenId = [];
}