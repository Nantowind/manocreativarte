import { Vtuber,SaleStatusText, SaleStatus } from './interface/vtubers.js';


    const testVtuber:Vtuber ={
        id:"1",
        name:"AquaStream",
        description:"El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
        price:150,
        saleStatus: SaleStatus.OnSale,
        SaleStatusText: SaleStatusText.OnSale,
        urlVideo: "./assets/test.mp4"
    }
    const testVtuber2:Vtuber ={
        id:"1",
        name:"AquaStream",
        description:"El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
        price:150,
        saleStatus: SaleStatus.InProgress,
        SaleStatusText: SaleStatusText.InProgress,
        urlVideo: "./assets/test.mp4"
    }
    const testVtuber3:Vtuber ={
        id:"1",
        name:"AquaStream",
        description:"El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
        price:150,
        saleStatus: SaleStatus.Sold,
        SaleStatusText: SaleStatusText.Sold,
        urlVideo: "./assets/test.mp4"
    }

    
    //creamos a partir de un objeto que se pasa por parametro una card
    function createCard(idSection: string,vtuber:Vtuber): void {
        const sectionForAddDiv: HTMLElement | null = document.getElementById(idSection);
        //crearemos 1 div principal dentro de el 2 divs y un video element
    
        if (sectionForAddDiv) {
    
            //div principal
            const cardDiv2: HTMLDivElement = document.createElement("div");
            cardDiv2.classList.add("text-content","hvr-grow-shadow","mb-5");


            const cardDiv: HTMLDivElement = document.createElement("div");
            cardDiv.classList.add("card", "card-color","box-card");

            cardDiv2.appendChild(cardDiv);


            const cardVideo: HTMLVideoElement = document.createElement("video");
            cardVideo.autoplay = true;
            cardVideo.muted = true;
            cardVideo.playsInline = true;
            cardVideo.loop = true;
    
            const sourceVideo: HTMLSourceElement = document.createElement("source");
            sourceVideo.setAttribute("src", vtuber.urlVideo);
            sourceVideo.setAttribute("type", "video/mp4");
            cardVideo.appendChild(sourceVideo);
    
            cardDiv.appendChild(cardVideo);
    
    
            //div 1 sale status
            const divSaleStatus: HTMLDivElement = document.createElement("div");
            divSaleStatus.classList.add("sale-status",  vtuber.saleStatus);
            const spanSaleStatus: HTMLSpanElement = document.createElement("span");
            //RECORDATORIO AQUI USAR EL SALESTATUSTEXT
            spanSaleStatus.textContent = vtuber.SaleStatusText;
            divSaleStatus.appendChild(spanSaleStatus);
    
            cardDiv.appendChild(divSaleStatus);
    
    
            //div 2 card body
            const divCardBody: HTMLDivElement = document.createElement("div");
            divCardBody.classList.add("card-body");
    
            const h5DivCardBody: HTMLHeadElement = document.createElement("h5");
            h5DivCardBody.classList.add("card-title")
            h5DivCardBody.textContent = vtuber.name;
            divCardBody.appendChild(h5DivCardBody);
    
            const pDivCardBody: HTMLParagraphElement = document.createElement("p");
            pDivCardBody.classList.add("card-text");
            pDivCardBody.textContent = vtuber.description;
            divCardBody.appendChild(pDivCardBody);
    
            const aDivCardBody: HTMLAnchorElement = document.createElement("a");
            //pasar id por objeto para que nos re envie a detalles
            aDivCardBody.setAttribute("href", "#");
            aDivCardBody.classList.add("btn", "btn-primary","card-button");
            aDivCardBody.textContent = "Detalles";
            divCardBody.appendChild(aDivCardBody);
    
            cardDiv.appendChild(divCardBody);
            sectionForAddDiv.appendChild(cardDiv2);
    
        } else {
            console.error(`El elemento con el ID '${idSection}' no se encontró.`);
        }
    }
    createCard("sale-vtubers",testVtuber);
    createCard("sale-vtubers",testVtuber2);
    createCard("sale-vtubers",testVtuber3);




export function viewPower():void{

    let button: HTMLButtonElement | null = document.getElementById("view-power-button") as HTMLButtonElement | null;

    if(button){

        button.addEventListener("click",function(){
         let containerHidden:HTMLDivElement |null = document.getElementById("container-hide-power") as HTMLDivElement|null;
         containerHidden?.classList.add("hidden")

         let containerViewPower:HTMLDivElement |null = document.getElementById("container-view-power") as HTMLDivElement|null;
         containerViewPower?.classList.remove("hidden")

        });
    }else{
        console.log("no se encontro view-power-button")
    }
}

function hidePower():void{

    let button: HTMLButtonElement | null = document.getElementById("hide-power-button") as HTMLButtonElement | null;

    if(button){

        button.addEventListener("click",function(){
         let containerHidden:HTMLDivElement |null = document.getElementById("container-view-power") as HTMLDivElement|null;
         containerHidden?.classList.add("hidden")

         let containerViewPower:HTMLDivElement |null = document.getElementById("container-hide-power") as HTMLDivElement|null;
         containerViewPower?.classList.remove("hidden")

 
        });
    }else{
        console.log("no se encontro view-power-button")
    }
}
hidePower();
viewPower();
