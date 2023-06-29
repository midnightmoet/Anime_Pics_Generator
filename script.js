const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector('.anime-container');
const animeImgEl = document.querySelector('.anime-img');
const animeNameEl = document.querySelector('.anime-name');

const animeList = [

    {
        name: 'Naruto',
        img: 'https://i.pinimg.com/originals/0a/0e/0a/0a0e0a1b0b0b0b0b0b0b0b0b0b0b0b0b.jpg'
    },

    {
        name: 'One Piece',
        img: 'https://i.pinimg.com/originals/0a/0e/0a/0a0e0a1b0b0b0b0b0b0b0b0b0b0b0b0b.jpg'
    },

    {
        name: 'Bleach',
        img: 'https://i.pinimg.com/originals/0a/0e/0a/0a0e0a1b0b0b0b0b0b0b0b0b0b0b0b0b.jpg'
    },
];

btnEl.addEventListener('click', function(){
    // console.log('hello'); // test
    console.log(animeList[0].name); // test
});