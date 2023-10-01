import { SaleStatusText, SaleStatus } from './interface/vtubers.js';
import Atropos from './atropos/atropos.js'
const testVtuber = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.OnSale,
    SaleStatusText: SaleStatusText.OnSale,
    urlVideo: "./assets/test.mp4"
};
const testVtuber2 = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.InProgress,
    SaleStatusText: SaleStatusText.InProgress,
    urlVideo: "./assets/test.mp4"
};
const testVtuber3 = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.Sold,
    SaleStatusText: SaleStatusText.Sold,
    urlVideo: "./assets/test.mp4"
};
const testVtuber4 = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.Sold,
    SaleStatusText: SaleStatusText.Sold,
    urlVideo: "./assets/test.mp4"
};
const testVtuber5 = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.Sold,
    SaleStatusText: SaleStatusText.Sold,
    urlVideo: "./assets/test.mp4"
};
const testVtuber6 = {
    id: "1",
    name: "AquaStream",
    description: "El VTuber maestro del agua, te sumergirá en emocionantes travesías acuáticas desde su estudio virtual. ",
    price: 150,
    saleStatus: SaleStatus.Sold,
    SaleStatusText: SaleStatusText.Sold,
    urlVideo: "./assets/test.mp4"
};
function createCard(idSection, vtuber) {
    const sectionForAddDiv = document.getElementById(idSection);
    if (sectionForAddDiv) {
        const cardDiv2 = document.createElement("div");
        cardDiv2.classList.add("text-content", "hvr-grow-shadow", "mb-5");
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card", "card-color", "box-card");
        cardDiv2.appendChild(cardDiv);
        const cardVideo = document.createElement("video");
        cardVideo.autoplay = true;
        cardVideo.muted = true;
        cardVideo.playsInline = true;
        cardVideo.loop = true;
        const sourceVideo = document.createElement("source");
        sourceVideo.setAttribute("src", vtuber.urlVideo);
        sourceVideo.setAttribute("type", "video/mp4");
        cardVideo.appendChild(sourceVideo);
        cardDiv.appendChild(cardVideo);
        const divSaleStatus = document.createElement("div");
        divSaleStatus.classList.add("sale-status", vtuber.saleStatus);
        const spanSaleStatus = document.createElement("span");
        spanSaleStatus.textContent = vtuber.SaleStatusText;
        divSaleStatus.appendChild(spanSaleStatus);
        cardDiv.appendChild(divSaleStatus);
        const divCardBody = document.createElement("div");
        divCardBody.classList.add("card-body");
        const h5DivCardBody = document.createElement("h5");
        h5DivCardBody.classList.add("card-title");
        h5DivCardBody.textContent = vtuber.name;
        divCardBody.appendChild(h5DivCardBody);
        const pDivCardBody = document.createElement("p");
        pDivCardBody.classList.add("card-text");
        pDivCardBody.textContent = vtuber.description;
        divCardBody.appendChild(pDivCardBody);
        const aDivCardBody = document.createElement("a");
        aDivCardBody.setAttribute("href", "#");
        aDivCardBody.classList.add("btn", "btn-primary", "card-button");
        aDivCardBody.textContent = "Detalles";
        divCardBody.appendChild(aDivCardBody);
        cardDiv.appendChild(divCardBody);
        sectionForAddDiv.appendChild(cardDiv2);
    }
    else {
        console.error(`El elemento con el ID '${idSection}' no se encontró.`);
    }
}
createCard("sale-vtubers", testVtuber);
createCard("sale-vtubers", testVtuber2);
createCard("sale-vtubers", testVtuber3);
createCard("sale-vtubers", testVtuber4);
createCard("sale-vtubers", testVtuber5);
createCard("sale-vtubers", testVtuber6);


const myAtropos = Atropos({
    el: '.my-atropos',
  });