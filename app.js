  let cards = document.querySelectorAll('.zone');
  let displayMoves = document.querySelector('span');
  // let highScore = document.querySelector('.highScore');
  let clickedCard;
  let preCard;
  let totalCards = 0;
  let preCardFront, preCardBack;
  let flag = false;
  let completed =0;
  let sameCard;
  let moves = 0;
  let gameCompleted = false;
  let restartButton = document.querySelector('.restart');

  // time elapsed:
  
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');
  let totalSeconds = 0;
  let interval = setInterval(setTime, 1000);

  function setTime() {
  ++totalSeconds;
  sec.textContent = pad(totalSeconds % 60);
  min.textContent = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
  let valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

function resetCounter(){
  sec.textContent = '00';
  min.textContent = '00';
  totalSeconds = 0;
  interval = setInterval(setTime, 1000);
}



/*<<<< for cards emoji >>>>> */  
  let items = document.querySelectorAll(".item"); //the animal faces
  const itemsArray = ["🐰","🐰","🐯","🐯","🦁","🦁","🦄","🦄","🐼","🐼","🦊","🦊"];
  
  const sortEmoji = (itemsArray) =>{
    let randomItemsArray = itemsArray.sort(function(a, b){return 0.5 - Math.random()}); //gives random emojis from itemsArray
    items.forEach((emoji,i)=>{
      return emoji.textContent=randomItemsArray[i];
    })
  }
  sortEmoji(itemsArray);

/*<<<< for cards emoji >>>>> */                       



// MODAL ON GAME COMPLETION:
 let modal = document.querySelector('.modal');
//  const closeModal = document.querySelector('.modal_nav_button');
 let modal_totalMoves = document.querySelector('.modal_totalMoves');
 let modal_totalTime = document.querySelector('.modal_totalTime');

const displayModal = () =>{
  modal.classList.toggle('show_modal');
}

const closeModal = () =>{
  modal.classList.toggle('show_modal');
}



  //Game Logic:
  if(moves===0){
    displayMoves.textContent='0';
  }


  
  const toggleDiv=(card)=>{
    
    moves++;
    displayMoves.textContent=`${moves}`
     console.log("completed", completed)
    let cardBack = card.querySelector('.initialCard');
    let cardFront = card.querySelector('.card_back');
    
    totalCards++;
     console.log(totalCards)
    //  console.log(card.classList[0]);
    let currentCard = card.textContent;
    card.classList.toggle("fun"); 
    cardFront.classList.toggle("showFrontCard");
    cardBack.classList.toggle("visible");
     console.log(flag);
     if(currentCard===clickedCard && !flag){
      card.classList.toggle('yellow');
      preCard.classList.toggle('yellow');
      card.style.border='1px solid blue'
      preCard.style.border='1px solid blue'
      flag=true;
      completed++
    }
    
    else if(flag){
      flag = false;
    }
    
    else if(currentCard!==clickedCard && totalCards>1){
      if(!flag && preCard.style.border!=='1px solid blue'){
      preCard.classList.toggle("fun");
      preCardFront.classList.toggle("showFrontCard");
      preCardBack.classList.toggle("visible");
      setTimeout(()=>{
        card.classList.toggle("fun"); 
        cardFront.classList.toggle("showFrontCard");
        cardBack.classList.toggle("visible");
      },500)
      flag=true;
      }
    }
    // console.log("precard",preCard)
    clickedCard = currentCard; 
    preCard = card;
     console.log(`precard:${preCard.classList}`)
    preCardFront = cardFront;
    preCardBack = cardBack;
     console.log(clickedCard);
     console.log(flag);
    
     if(completed === 6){ //on game completion
       gameCompleted = true;
       restartButton.classList.toggle("showButton");
       modal_totalMoves.textContent = moves;
       modal_totalTime.textContent = `${min.textContent}:${sec.textContent}`;
       displayModal(); //displays modal
      //  setTimeout(()=>{
      //   alert("congratulations!! You Won!");
      //  },500)
       clearInterval(interval); //stops the time counter
    }
    // card.style.transform='rotate(60deg)' //this line is working
  }
  cards.forEach(card=>card.addEventListener('click', ()=>{   //event listner for card click
    console.log(card)
    if(completed<6 
      && 
      (
        (card.style.border!=='1px solid blue' && (card===sameCard && totalCards%2===0 && totalCards!==1))
        ||
        (card.style.border!=='1px solid blue' && card!==sameCard) 
           || totalCards<1)
      ){
      sameCard = card;
      toggleDiv(card);
    }
  }));

  const restart = () =>{
    if(gameCompleted){ 
      cards.forEach(card=>{//toggles all cards if game is completed
        let cardBack = card.querySelector('.initialCard');
        let cardFront = card.querySelector('.card_back');
        card.classList.toggle("fun"); 
        cardFront.classList.toggle("showFrontCard");
        cardBack.classList.toggle("visible");
        card.style.border='none';
        card.classList.toggle('yellow')
      })
      gameCompleted=false;
      moves = 0;
      completed=0;
      displayMoves.textContent = 0;
      restartButton.classList.toggle("showButton");
      sortEmoji(itemsArray);
      totalSeconds = 0;
      resetCounter(); //resets and starts the time counter
    }
  }





  //            inProgress
      
      // create highscore element and using local storage to store it and update it
      




  //            tasks

      //styling of game: grid positioning layout etc.
      //creating a modal that shows the score and time elapsed in it after the game completes
      //theme option on .singleCard using the colour classes, red, green, etc
      //make the counter good by extracting it to function so it avoids global declaations

  //            done

     //finding different way to restart the game 
     //creating a time counter