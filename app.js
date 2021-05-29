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

  
/*<<<< for cards emoji >>>>> */  
  let items = document.querySelectorAll(".item"); //the animal faces
  const itemsArray = ["🐰","🐰","🐯","🐯","🦁","🦁","🦄","🦄","🐼","🐼","🦊","🦊"];
  let randomItemsArray = itemsArray.sort(function(a, b){return 0.5 - Math.random()}); //gives random emojis from itemsArray
  items.forEach((emoji,i)=>{
    emoji.textContent=randomItemsArray[i];
  })
/*<<<< for cards emoji >>>>> */                       

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
     console.log(card.classList[0]);
    let currentCard = card.textContent;
    
    card.classList.toggle("fun"); 
    cardFront.classList.toggle("showFrontCard");
    cardBack.classList.toggle("visible");
     console.log(flag);
     if(currentCard===clickedCard && !flag){
      card.style.border='2px solid blue'
      preCard.style.border='2px solid blue'
      flag=true;
      completed++
    }
    
    else if(flag){
      flag = false;
    }
    
    else if(currentCard!==clickedCard && totalCards>1){
      if(!flag && preCard.style.border!=='2px solid blue'){
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
       setTimeout(()=>{
        alert("congratulations!! You Won!");
       },500)
    }
    // card.style.transform='rotate(60deg)' //this line is working
  }
  cards.forEach(card=>card.addEventListener('click', ()=>{   //event listner for card click
     console.log(card)
    if(completed<6 
      && 
      (
        (card.style.border!=='2px solid blue' && (card===sameCard && totalCards%2===0 && totalCards!==1))
        ||
        (card.style.border!=='2px solid blue' && card!==sameCard) 
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
    })
    gameCompleted=false;
    moves = 0;
    completed=0;
    displayMoves.textContent = 0;
    restartButton.classList.toggle("showButton");

  }

    //  location.reload(); 
    //  return false;
    
  
  }





  //            inProgress
      //creating a time counter




  //            tasks

      // create highscore element and using local storage to store it and update it
      //styling of game: grid positioning layout etc.
      //theme option on .singleCard using the colour classes, red, green, etc
  

  //            done

     //finding different way to restart the game 