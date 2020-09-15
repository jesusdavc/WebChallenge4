const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const image_person =document.getElementById('image-person');
const quote_autor_name = document.getElementById('autor-name');
const quote_autor_position = document.getElementById('autor-position');
const phrase = document.getElementById('quote-phrase')

let counter = 0

const John = {
    avatar:'./images/image-john.jpg',
    name: 'John Tarkpor',
    position: 'Junior Front-end Developer',
    phrase:'“If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.”'
}
const Tanya = {
    avatar:'./images/image-tanya.jpg',
    name: 'Tanya Sinclair',
    position: 'UX Engineer',
    phrase:'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” '
}
const Tanya2 = {
    avatar:'./images/image-tanya.jpg',
    name: 'Tanya Sinclair2',
    position: 'UX Engineer2',
    phrase:'“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” '
}

const people = [Tanya, John, Tanya2]


function nextSlide(){
    counter = counter + 1
    if(counter >= people.length){
        counter = 0
    }
    console.log(counter)
    Slide(counter)
}
function pastSlide(){
    counter = counter - 1
    console.log(counter)
    if(counter < 0){
        counter = people.length - 1
    }
    Slide(counter)
}


nextButton.addEventListener('click', nextSlide)
prevButton.addEventListener('click', pastSlide)

function Slide(a){
    image_person.src= people[a].avatar
    quote_autor_name.innerHTML = people[a].name
    quote_autor_position.innerHTML = people[a].position
    phrase.innerHTML = people[a].phrase
}
