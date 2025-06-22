// script.js
const story = [
    {
      text: "Er was eens een meisje van acht jaar oud dat Mila heette.",
      image: "https://i.postimg.cc/DfbzWh9D/openart-image-Nk-JEBu4-S-1748794881988-raw.jpg"
    },
    {
      text: "Mila woonde in een knus huisje aan de rand van het bos.",
      image: "https://i.postimg.cc/t4rbSm0W/openart-image-ETBFhs-Tt-1748793786203-raw.jpg"
    },
    {
      text: "Op een zonnige ochtend vond ze een oude kaart in een glazen fles.",
      image: "https://i.postimg.cc/8zc95p3f/meisje.jpg"
    },
    {
        text: "Op de kaart stond een pijl met de woorden: “Zoek de magische sleutel.",
        image: "https://i.postimg.cc/Bnj73hLx/openart-image-pi-Evcy1n-1748796065488-raw.jpg"
      },
    {
      text: "Mila trok haar rugzak aan en begon vol moed aan haar avontuur.",
      image: "https://i.postimg.cc/yxfn497Q/openart-image-v5-Ql1-PPK-1748794773516-raw.jpg"
    },
    {
        text: "Al snel ontmoette ze een konijn met een gouden bril.",
        image: "https://i.postimg.cc/6ppz0MLk/openart-image-P-ESg-SJI-1748794945693-raw.jpg"
      },
      {
        text: "Ik heb gehoord van die sleutel,” zei het konijn, “maar pas op voor de Mistheuvels.",
        image: "https://i.postimg.cc/JhWNFKb7/openart-image-fu-O2-FZCQ-1748795055519-raw.jpg"
      },
      {
        text: "Ze vervolgde haar weg en hoorde gezang vanuit de bomen.",
        image: "https://i.postimg.cc/brdkn5jg/openart-image-q-Eni-Brd3-1748795229635-raw.jpg"
      },
      {
          text: "Daar zat een papegaai met kleurrijke veren en een grote glimlach.",
          image: "https://i.postimg.cc/wMPJQkqp/openart-image-Uzj-Yb-SS4-1748795558438-raw.jpg"
        },
      {
        text: "Ik kan je helpen de juiste richting te vinden,” kraaide hij vrolijk.",
        image: "https://i.postimg.cc/cCVgn4h1/Scherm-afbeelding-2025-06-01-om-18-33-52.png"
      },
      {
        text: "Verderop ontmoette ze een schildpad die traag maar wijs was.",
        image: "https://i.postimg.cc/9XqGcvJX/openart-image-k-Mo-S2m-ZS-1748795747287-raw.jpg"
      },
      {
        text: "De sleutel opent niet alleen deuren, maar ook harten,” zei hij.",
        image: "https://i.postimg.cc/hPLTdTkH/openart-image-v-T57o-Bp-N-1748796417078-raw.jpg"
      },
      {
        text: "Die nacht sliep Mila onder een eikenboom terwijl een uil over haar waakte.",
        image: "https://i.postimg.cc/8cTLCCZ2/openart-image-I4-Dzp-C7a-1748796194457-raw.jpg"
      },
      {
          text: "De volgende ochtend leidde een eekhoorn haar naar een verborgen grot.",
          image: "https://i.postimg.cc/ZqRd2gWS/meisje2.jpg"
        },
      {
        text: "In de grot schitterde iets tussen de stenen.",
        image: "https://i.postimg.cc/C1nfLqCr/openart-image-zfqx-Oi-HK-1748796369005-raw.jpg"
      },
      {
          text: "Daar lag de magische sleutel, precies zoals op de kaart getekend.",
          image: "https://i.postimg.cc/hPLTdTkH/openart-image-v-T57o-Bp-N-1748796417078-raw.jpg"
        },
        {
          text: "Toen Mila hem oppakte, begon de grot te gloeien.",
          image: "https://i.postimg.cc/C1nfLqCr/openart-image-zfqx-Oi-HK-1748796369005-raw.jpg"
        },
        {
          text: "Al haar nieuwe dierenvrienden kwamen tevoorschijn en begonnen te juichen.",
          image: "https://i.postimg.cc/7ZC4RnqR/openart-image-z9-Dvygc-N-1748796653645-raw.jpg"
        },
        {
            text: "De sleutel was voor iemand met een dapper hart en een zachte ziel,” zei de uil.",
            image: "https://i.postimg.cc/GpkW0MVX/openart-image-OWKPm-Oaj-1748796768552-raw.jpg"
          },
        {
          text: "En zo keerde Mila terug naar huis, met de sleutel… én een hart vol vriendschap en magie.",
          image: "https://i.postimg.cc/sgfyJCL3/openart-image-Ey-P9-Bj-SN-1748794663395-raw.jpg"
        }
  ];
  
  let currentPage = 0;
  
  function nextPage() {
    if (currentPage < story.length) {
      document.getElementById("story-text").innerText = story[currentPage].text;
      document.getElementById("story-image").src = story[currentPage].image;
      currentPage++;
    } else {
      document.getElementById("story-text").innerText = "bedankt voor het lezen ";
      
    }
  }
  