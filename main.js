const section=document.querySelector("section");
const playerLivesCount=document.querySelector("span");
let playerLives=4;

//linktext
playerLivesCount.textContent=playerLives;

//Generate the data
const getData = ()=>[
      { imgSrc:"./image/ADung.jpg", name:"Adung"},
      { imgSrc:"./image/AS2.jpg", name:"AS2"},
      { imgSrc:"./image/D.png", name:"D"},
      { imgSrc:"./image/H1.jpg", name:"H1"},
      { imgSrc:"./image/HGM.jpg", name:"HGM"},
      { imgSrc:"./image/tuan.jpg", name:"tuan"},
      { imgSrc:"./image/itiscup.jpg", name:"itiscup"},
      { imgSrc:"./image/Logo nền sáng.png", name:"Logo"},
      { imgSrc:"./image/ADung.jpg", name:"Adung"},
      { imgSrc:"./image/AS2.jpg", name:"AS2"},
      { imgSrc:"./image/D.png", name:"D"},
      { imgSrc:"./image/H1.jpg", name:"H1"},
      { imgSrc:"./image/HGM.jpg", name:"HGM"},
      { imgSrc:"./image/tuan.jpg", name:"tuan"},
      { imgSrc:"./image/itiscup.jpg", name:"itiscup"},
      { imgSrc:"./image/Logo nền sáng.png", name:"Logo"},
];
const randomize = ()=>{
    const cardData=getData();
  //  console.log(cardData);
    cardData.sort(() => Math.random()-0.5);
    return cardData;
}
//Card generator function
const cardGenerator = () =>{
    const cardData= randomize();
   //Generate the HTML
    cardData.forEach((item) => {
        const card=document.createElement("div");
        const face=document.createElement("img");
        const back=document.createElement("div");
        card.classList="card";
        face.classList="face";
        back.classList="back";
        //attach the info to the cards
        face.src=item.imgSrc;
        card.setAttribute("name",item.name);
        //attach the info to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click",(e)=>{
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};
//check cards
const checkCards=(e)=>{
    console.log(e);
    const clickedCard=e.target;
    clickedCard.classList.add("flipped");
    const flippedCards=document.querySelectorAll(".flipped");
    const toggleCard=document.querySelectorAll(".toggleCard");
    console.log(flippedCards);
    //logic
    if(flippedCards.length===2){
        if(flippedCards[0].getAttribute("name")===flippedCards[1].getAttribute("name")){
            console.log("match");
            flippedCards.forEach((card)=>{
                card.classList.remove("flipped");
                card.style.pointerEvents="none";
            });
        }
        else{
            console.log("wrong");
            flippedCards.forEach((card) =>{
                card.classList.remove("flipped");
                setTimeout(()=> card.classList.remove("toggleCard"),1000);
            });
            playerLives--;
            playerLivesCount.textContent=playerLives;
            if(playerLives===0){
                restart("non lam");
            }
        }
    }
    //win
    if(toggleCard.length===16){
        restart("you win");
    }
} ;
//restart
const restart =(text)=>{
    let cardData=randomize();
    let faces=document.querySelectorAll(".face");
    let cards=document.querySelectorAll(".card");
    section.style,pointerEvents="none";
    cardData.forEach((item,index)=>{
        cards[index].classList.remove("toggleCard");
        //randomize
        setTimeout(()=>{
            cards[index].style.pointerEvents="all";
        faces[index].src=item.imgSrc;
        cards[index].setAttribute("name",item.name);
        section.style.pointerEvents="all";
        },1000);
    });
    playerLives=4;
    playerLivesCount.textContent=playerLives;
    setTimeout(()=>window.alert(text),100);
    //svkndv
};

cardGenerator();


