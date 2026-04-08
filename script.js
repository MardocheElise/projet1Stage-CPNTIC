
// tableau des objet a affiche de façon dynamique dans la section 3
let info = [
{
    li:"AiCloud",
    img:"assets/photo1.png",
    title:"MatrixSpace 360 Radar",
    description:"Fixed and portable radar systems designed for low-altitude airspace monitoring."
},
{    
    li:"Expeditionary",
    img:"assets/drone.jpg",
    title:"MatrixSpace AiCloud",
    description:"The only AI native cloud for seamless multi-sensor counter drone detection."
},
{    
    li:'Expeditionary',
    img:"assets/photo3.png",
    title:"Expeditionary",
    description:"Detect, classify, and track airborne objects at the tactical edge."
},
{
     li:'360 Radar',
    img:"assets/photo4.png",
    title:"MatrixSpace 360 Radar",
    description:"Fixed and portable radar systems designed for low-altitude monitoring."
}
];

// tableau des objet a affiche de façon scrollabe dans la section 4
let scrollImage= [
     {
          id:"1",
          img:"assets/img1.png",
          title:"public Safety and Security",
          para:"Get the situational awareness and practical insights needed to make swift decisions crucial for the safety of your teams and the general public."

     },

     {
          id:"2",
          img:"assets/img2.png",
          title:"Defense",
          para:"New levels of fast, easy to deploy detecting solutions, for any conditions. Make sense of fast-changing situations in real-time while staying silent."

     },

          {
          id:"3",
          img:"assets/img3.png",
          title:"Critical Infrastructure",
          para:"eAerial view of a large concrete curved dam with water reservoir on one side and rocky canyon on the other.Critical InfrastructureDigitize outdoor environments with scalable, weatherproof sensors designed for 24/7 surveillance and integration with existing systems."

     },

     {
          id:"4",
          img:"assets/img4.png",
          title:"Utilities and Linear Structures",
          para:"With high regulatory demands and challenging, diverse locations, utilities have unique needs for monitoring facilities, assets and service area"
     },

     {
          id:"5",
          img:"assets/img5.png",
          title:"smart-cities",
          para:"Smart Cities are connected cities – providing interconnected public safety and transportation, economic development, recreation and environmental protection. And the level of connection is growing with autonomous vehicles on the ground and in the air"

     }
]

// let infoAndImages=[
//      {
//           id:'1',
//           title:'Multiple Signals, One True Track, One Pane of Glass',
//           texte:'Radar detections automatically cue PTZ cameras for visualconfirmation. Those tracks are checked against remote IDtelemetry from compliant drones. Targets are labeled asfriendly, potential threat, or confirmed threat so you can immediately respond with confidence',
//           imag:'assets/image2.png'
//      },

//      {
//           id:'2',
//           title:'Enterprise Radar Networks',
//           texte:'See airspace activity for all your sites in one place.Field users and central teams can zoom into any site together for detailed situational awareness. MatrixSpace AiCloud significantly expands capabilities beyond multi-sensor threat detection',
//           imag:'assets/img1.png'
//      },

//      {
//           id:'3',
//           title:'Multiple Signals, One True Track, One Pane of Glass',
//           texte:'See airspace activity for all your sites in one place.Field users and central teams can zoom into any site together for detailed situational awareness. MatrixSpace AiCloud significantly expands capabilities beyond multi-sensor threat detection',
//           imag:'assets/img4.png'
//      },
// ]

let index = 0;
     
//fontion qui a affiche de manière dynanique les img et texte dans la section 3
function displayOnebyOne(){
      
     let i = info[index];

     document.getElementById('zone-text').innerHTML=
         `<div class="header">
          <ul class="menu">
            <li class="item" id="title-1">Fusion 360</li>
            <li class="item" id="title-2">AiCloud</li>
            <li class="item" id="title-3">Expeditionary</li>
            <li class="item" id="title-4">360 Radar</li>
          </ul>
        </div>
        <div id="content-text"></div>`;

     document.getElementById("zone-image").innerHTML =
        `<img src="${i.img}" width="500" height="500">`;

     document.getElementById("content-text").innerHTML =
        `<div>
            <h3>${i.title}</h3>
            <p>${i.description}</p>
        </div>
        <a href="">Learn More</a>`;


    setInterval(() => {

        let i = info[index];
     
        document.getElementById('')

        document.getElementById("zone-image").innerHTML =
        `<img src="${i.img}" width="500" height="500">`;
        

        document.getElementById("content-text").innerHTML =
        `<div>
            <h3>${i.title}</h3>
            <p>${i.description}</p>
        </div>
        <a href="">Learn More</a>`;

        index++;

        if(index >= info.length){
            index = 0;
        }

    },10000);
}


// //fontion qui a affiche de manière dynanique les img et texte dans la section 4
function scrollInfo(){
     let insert = "";
     for(i of scrollImage){
          insert+=
               `<div class="containerImage">
                    <img src="${i.img}" alt="${i.title}"  width="450" heigth="450" />
                    <h3>${i.title}</h3>
                    <p>${i.para}</p>
                    <a href="">Learn More &#8599; <i></i></a>
               </div>`
     }
     document.getElementById('scroll-images').innerHTML=insert;
}

const scrollContainer = document.getElementById("scroll-images");
const btnGauche = document.getElementById("gauche");
const btnDroit = document.getElementById("droit");

// Distance de défilement
const scrollAmount = 400;

// Bouton droite 
btnDroit.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
    });
});

// Bouton gauche 
btnGauche.addEventListener("click", () => {
    scrollContainer.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
    });
});

// let text_image = document.getElementById('textAndImage');

// function displayInfoAndImage1(){
//      text_image.innerHTML=`<div class="text-and-image" id="textAndImage">
//                 <div class="text">
//                   <h2>${infoAndImages[0].title}</h2>

//                   <span
//                     >${infoAndImages[0].texte}
//                   </span>

//                   <a href="">Explore AI Platform capabilites <i>icone</i></a>
//                 </div>
//                 <div>
//                   <img
//                     src="${infoAndImages[0].imag}"
//                     alt="image1"
//                     width="500"
//                     height="400"
//                   />
//                 </div>
//               </div>`
     
// }

// function displayInfoAndImage2(){
//      text_image.innerHTML=`<div class="text-and-image" id="textAndImage">
//                 <div class="text">
//                   <h2>${infoAndImages[1].title}</h2>

//                   <span
//                     >${infoAndImages[1].texte}
//                   </span>

//                   <a href="">Explore AI Platform capabilites <i>icone</i></a>
//                 </div>
//                 <div>
//                   <img
//                     src="${infoAndImages[1].imag}"
//                     alt="image1"
//                     width="500"
//                     height="400"
//                   />
//                 </div>
//               </div>`
// }

// function displayInfoAndImage3(){
//      text_image.innerHTML=`<div class="text-and-image" id="textAndImage">
//                 <div class="text">
//                   <h2>${infoAndImages[2].title}</h2>

//                   <span
//                     >${infoAndImages[2].texte}
//                   </span>

//                   <a href="">Explore AI Platform capabilites <i>icone</i></a>
//                 </div>
//                 <div>
//                   <img
//                     src="${infoAndImages[2].imag}"
//                     alt="image1"
//                     width="500"
//                     height="400"
//                   />
//                 </div>
//               </div>`
// }
 
scrollInfo();
displayOnebyOne();



 