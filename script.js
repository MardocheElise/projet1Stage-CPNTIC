let info = [
     {
          img:"assset/photo1",
          title:"MatrixSpace 360 Radar",
          description:"Fixed and portable radar systems designed for low-altitude airspace monitoring, with options for rapid deployment or permanent installation.",
     },
     {
          img:"assset/photo2",
          title:"MatrixSpace AiCloud",
          description:"The only AI native cloud for seamless multi-sensor counter drone detection and deep airspace analysis.",
     },
     {
          img:"assset/photo3",
          title:"Expeditionary",
          description:"aDetect, classify, and track airborne objects at the tactical edge, wherever it moves. Threat types are identified automatically, with results shared into existing command systems. All while keeping emissions low.",
     },
     {
          img:"assset/photo4",
          title:"MatrixSpace 360 Radar",
          description:"Fixed and portable radar systems designed for low-altitude airspace monitoring, with options for rapid deployment or permanent installation",
     }
];

let zone_text = document.getElementById('zone-text');
let text_content = document.getElementById('centent-text')

function insert(){
     

}

function create_zone(img, tiltle, description){
     ` <img src="${img}" alt=""/>
       <div class=''> 
          <h3>${tiltle}</h3>
          <p>${description}</p>
       </div>
       <a href=""> Learn More </a>
     `
}