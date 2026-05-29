


const emojiArray = [
    {
        name: 'frown',
        icon:'<i class="fa-regular fa-face-frown"></i>'
    },

    {
        name: 'grin',
        icon: '<i class="fa-regular fa-face-grin"></i>'
    },

    {
        name: 'heart',
        icon:'<i class="fa-regular fa-face-grin-hearts"></i>'
    },

    {
        name: 'grin-tears',
        icon:'<i class="fa-regular fa-face-grin-tears"></i>'
    },
    {
        name: 'kiss',
        icon:'<i class="fa-regular fa-face-kiss"></i>'
    },
    
    {
        name: 'rolling-eyes',
        icon:'<i class="fa-regular fa-face-rolling-eyes"></i>'
    },
        {
        name: 'frown',
        icon:'<i class="fa-regular fa-face-frown"></i>'
    },

    {
        name: 'grin',
        icon: '<i class="fa-regular fa-face-grin"></i>'
    },

    {
        name: 'heart',
        icon:'<i class="fa-regular fa-face-grin-hearts"></i>'
    },

    {
        name: 'grin-tears',
        icon:'<i class="fa-regular fa-face-grin-tears"></i>'
    },
    {
        name: 'kiss',
        icon:'<i class="fa-regular fa-face-kiss"></i>'
    },
    {
        name: 'rolling-eyes',
        icon:'<i class="fa-regular fa-face-rolling-eyes"></i>'
    }
    
    
];

let gameContainer = document.querySelector(".container");
let flippedArray = [];
let matchedPairs = 0;

shuffle();
displayCards();

function shuffle(){

    for(let i = emojiArray.length-1;i>=0;i--){
       let cardIndex = Math.floor(Math.random()*(i+1));
       [emojiArray[i],emojiArray[cardIndex]] = [emojiArray[cardIndex],emojiArray[i]];
    }
}

function displayCards(){

    emojiArray.forEach((curr,index,arr)=>{
        const cardDiv= document.createElement("div");
        cardDiv.setAttribute("id",index);
        cardDiv.classList.add("cardback");
        gameContainer.append(cardDiv);
        cardDiv.addEventListener('click',flipCard);
    });
}

function flipCard(){

    if(flippedArray.length<2){
    let Id = this.getAttribute("id");
    flippedArray.push(this);
    this.classList.remove("cardback"); 
    this.innerHTML=emojiArray[Id].icon;
    setTimeout(()=>{
 if(flippedArray.length==2){
        checkMatch();
    }
    },1500);
   
    
    }


}

function checkMatch(){
    let cardId1 = flippedArray[0].getAttribute("id");
     let cardId2 = flippedArray[1].getAttribute("id");
     if(emojiArray[cardId1].name==emojiArray[cardId2].name){
    flippedArray[0].style.border = 'none';
    flippedArray[0].style.backgroundColor='#dfdbdb';
    flippedArray[0].innerHTML='';
     flippedArray[1].style.border = 'none';
    flippedArray[1].style.backgroundColor='#dfdbdb';
    flippedArray[1].innerHTML='';
    matchedPairs++;
    checkResult();
     }else{
  
    flippedArray[0].innerHTML='';
    flippedArray[0].classList.add('cardback');
     flippedArray[1].innerHTML='';
      flippedArray[1].classList.add('cardback');
   
    }
    flippedArray=[];

}

function checkResult(){
    if(matchedPairs== emojiArray.length/2){
          while(gameContainer.firstChild){
            gameContainer.removeChild(gameContainer.firstChild)
        }
        gameContainer.innerHTML = 'Congratulations ! You Won 🎉';
        gameContainer.classList.add('won');
    }
}


