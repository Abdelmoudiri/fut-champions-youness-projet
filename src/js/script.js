let closeMenu = document.getElementById("closeMenu");
let closeMenu2 = document.getElementById("closeMenu2");
let closeMenu3 = document.getElementById("closeMenu3");
let formPlayer = document.getElementById("formPlayer");
let formPlayer3 = document.getElementById("formPlayer3")
let formPlayer2 = document.getElementById("formPlayer2");
let leagueName =document.getElementById("leagueName")
let leagueName2 =document.getElementById("leagueName2")
let leagueName3 =document.getElementById("leagueName3")
let nationaliteFlag = document.getElementById("nationaliteFlag");
let ClubLogo = document.getElementById("ClubLogo");
let ClubLogo2 = document.getElementById("ClubLogo2");
let nationaliteFlag2 = document.getElementById("nationaliteFlag2");
let Position = document.getElementById("Position");
let PAC = document.getElementById("PAC");
let SHO = document.getElementById("SHO");
let PAS = document.getElementById("PAS");
let DRI = document.getElementById("DRI");
let DEF = document.getElementById("DEF");
let PHY = document.getElementById("PHY");
let PAC2 = document.getElementById("PAC2");
let SHO2 = document.getElementById("SHO2");
let PAS2 = document.getElementById("PAS2");
let DRI2 = document.getElementById("DRI2");
let DEF2 = document.getElementById("DEF2");
let PHY2 = document.getElementById("PHY2");
let PAC3 = document.getElementById("PAC3");
let SHO3 = document.getElementById("SHO3");
let PAS3 = document.getElementById("PAS3");
let DRI3 = document.getElementById("DRI3");
let DEF3 = document.getElementById("DEF3");
let PHY3 = document.getElementById("PHY3");
let DIV2  = document.getElementById("DIV2");
let KIC2 = document.getElementById("KIC2");
let HAN2 = document.getElementById("HAN2");
let POS2 = document.getElementById("POS2");
let REF2 = document.getElementById("REF2");
let SPE2 = document.getElementById("SPE2");
let DIV3  = document.getElementById("DIV3");
let KIC3 = document.getElementById("KIC3");
let HAN3 = document.getElementById("HAN3");
let POS3 = document.getElementById("POS3");
let REF3 = document.getElementById("REF3");
let SPE3 = document.getElementById("SPE3");
let DIV = document.getElementById("DIV");
let KIC = document.getElementById("KIC");
let HAN = document.getElementById("HAN");
let POS = document.getElementById("POS");
let SPE = document.getElementById("SPE");
let REF = document.getElementById("REF");
let PlayerName = document.getElementById("PlayerName");
let PlayerName3 = document.getElementById("PlayerName3");
let imgPlayerSrc = document.getElementById("imgPlayerSrc");
let nationalite = document.getElementById("nationalite");
let Position2 = document.getElementById("Position2");
let PlayerName2 = document.getElementById("PlayerName2");
let imgPlayerSrc2 = document.getElementById("imgPlayerSrc2");
let nationalite2 = document.getElementById("nationalite2");
let ClubLogo3 =document.getElementById("ClubLogo3")
let  club3 =document.getElementById("club3")
let nationaliteFlag3 = document.getElementById("nationaliteFlag3")
let nationalite3= document.getElementById("nationalite3")
let imgPlayerSrc3=document.getElementById("imgPlayerSrc3")
let Position3 = document.getElementById("Position3")
let Rate3 = document.getElementById("Rate3")
let club = document.getElementById("club");
let Rate = document.getElementById("Rate");
let club2 = document.getElementById("club2");
let Rate2 = document.getElementById("Rate2");
let formPlayer2button = document.getElementById("formPlayer2");
let playerInformations3 = document.getElementById("playerInformations3")
let playerInformations = document.getElementById("playerInformations");
let playerInformations2 = document.getElementById("playerInformations2");
document.getElementById("fillAuto")
document.getElementById("addPlayerButton").addEventListener("click", function () {
    formPlayer2.style.display = "block";
    console.log("hello");
});
  closeMenu3.addEventListener("click", function () {
    formPlayer.style.display = "none";
    formPlayer2.style.display = "none";
    formPlayer3.style.display = "none";
});
closeMenu.addEventListener("click", function () {
  formPlayer.style.display = "none";
  formPlayer2.style.display = "none";
});
closeMenu2.addEventListener("click", function () {
  formPlayer.style.display = "none";
  formPlayer2.style.display = "none";
});
let players = JSON.parse(localStorage.getItem("players")) || [];
  // VALIDATION DE FORMULAIRE NUMERO 2
function Form2(){
  formPlayer2button.addEventListener("click", function (e) {
    e.preventDefault();
  
    if (
      PlayerName2.value != "" && imgPlayerSrc2.value != "" && Rate2.value != "") {
      console.log(PlayerName2.value);
      console.log(leagueName2.value)
      if (Position2.value[0] == "C" && Position2.value[1] != "B") {
        console.log("isHere");
        let box = [];
        let flag = false;
        let player;
        for (let i = 0; i < 5; i++) {
          let classp = `centre${i}`;
          let l = document.getElementById(classp);
  
          if (l && !l.hasChildNodes()) {
            flag = true;
            box.push(classp);
            player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              position: Position2.value,
              flagUrl: nationaliteFlag2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
              leagueName :leagueName2.value,
              DIVstats  :DIV3.value,
              KICstats  :KIC3.value,
              HANstats  :HAN3.value,
              POSstats  :POS3.value,
              SPEstats  :SPE3.value,
              REFstats  :REF3.value

  
            };
  
            eventListenerfornotfill();
            break; // Stop the loop once a slot is filled
          }
        }
        if (player) {
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          resetInputs(); 
          fillwithLocalStorage();
        
          }
        if (flag == false) {
          for (let i = 0; i < 10; i++) {
            let classp = `remplace${i}`;
            let l = document.getElementById(classp);
  
            if (l && !l.hasChildNodes()) {
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName : leagueName2.value,
                DIVstats  :DIV2.value,
              KICstats  :KIC2.value,
              HANstats  :HAN2.value,
              POSstats  :POS2.value,
              SPEstats  :SPE2.value,
              REFstats  :REF2.value
              };
  
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            fillwithLocalStorage();
            resetInputs(); 
            
          }
        }
      }
      if (Position2.value.includes("M")) {
        console.log("isHere");
        let box = [];
        let flag = false;
        let player;
        for (let i = 0; i < 5; i++) {
          let classp = `back${i}`;
          let l = document.getElementById(classp);
  
          if (l && !l.hasChildNodes()) {
            flag = true;
            box.push(classp);
            player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              position: Position2.value,
              flagUrl: nationaliteFlag2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
              leagueName :leagueName2.value,
              DIVstats  :DIV2.value,
              KICstats  :KIC2.value,
              HANstats  :HAN2.value,
              POSstats  :POS2.value,
              SPEstats  :SPE2.value,
              REFstats  :REF2.value
  
            };
  
            eventListenerfornotfill();
            break; // Stop the loop once a slot is filled
          }
        }
        if (player) {
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          resetInputs();
          fillwithLocalStorage(); 
          }
        if (flag == false) {
          for (let i = 0; i < 10; i++) {
            let classp = `remplace${i}`;
            let l = document.getElementById(classp);
  
            if (l && !l.hasChildNodes()) {
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName : leagueName2.value,
                DIVstats  :DIV2.value,
                KICstats  :KIC2.value,
                HANstats  :HAN2.value,
                POSstats  :POS2.value,
                SPEstats  :SPE2.value,
                REFstats  :REF2.value
              };
  
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
          }
        }
      }
      if (Position2.value.includes("S") || Position2.value[1]== "W") {
        console.log("isHere Attak");
        let box = [];
        let flag = false;
        let player;
        for (let i = 0; i < 5; i++) {
          let classp = `attak${i}`;
          let l = document.getElementById(classp);
          if (l && !l.hasChildNodes()) {
            flag = true;
            box.push(classp);
            player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              position: Position2.value,
              flagUrl: nationaliteFlag2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
              leagueName :leagueName2.value,
              DIVstats  :DIV2.value,
              KICstats  :KIC2.value,
              HANstats  :HAN2.value,
              POSstats  :POS2.value,
              SPEstats  :SPE2.value,
              REFstats  :REF2.value
  
            };
  
            eventListenerfornotfill();
            break; // Stop the loop once a slot is filled
          }
        }
        if (player) {
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          resetInputs(); 
          fillwithLocalStorage();
          }
        if (flag == false) {
          for (let i = 0; i < 10; i++) {
            let classp = `remplace${i}`;
            let l = document.getElementById(classp);
  
            if (l && !l.hasChildNodes()) {
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName : leagueName2.value,
                DIVstats  :DIV2.value,
                KICstats  :KIC2.value,
                HANstats  :HAN2.value,
                POSstats  :POS2.value,
                SPEstats  :SPE2.value,
                REFstats  :REF2.value
              };
                
              eventListenerfornotfill();
              break; // Stop the loop once a slot is filled
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
          }
        }
      }
      if (Position2.value.includes("GK")) {
        console.log("isHere goalKeeper");
        let box = [];
        let flag = false;
        let player;
          let classp = 'GoalKeeper';
          let l = document.getElementById(classp);
        console.log(l)
          if (l && !l.hasChildNodes()) {
            flag = true;
            box.push(classp);
            player = {
              id: box[0],
              name: PlayerName2.value,
              image: imgPlayerSrc2.value,
              rate: Rate2.value,
              position: Position2.value,
              flagUrl: nationaliteFlag2.value,
              ClubUrl: ClubLogo2.value,
              PACstats: PAC2.value,
              SHOstats: SHO2.value,
              PASstats: PAS2.value,
              DRIstats: DRI2.value,
              DEFstats: DEF2.value,
              PHYstats: PHY2.value,
              leagueName :leagueName2.value,
              DIVstats  :DIV2.value,
              KICstats  :KIC2.value,
              HANstats  :HAN2.value,
              POSstats  :POS2.value,
              SPEstats  :SPE2.value,
              REFstats  :REF2.value
  
            };
  
            eventListenerfornotfill();
          }
        
        if (player) {
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          resetInputs(); 
          fillwithLocalStorage();
          }
        if (flag == false) {
          for (let i = 0; i < 10; i++) {
            let classp = `remplace${i}`;
            let l = document.getElementById(classp);
  
            if (l && !l.hasChildNodes()) {
              box.push(classp);
              player = {
                id: box[0],
                name: PlayerName2.value,
                image: imgPlayerSrc2.value,
                rate: Rate2.value,
                position: Position2.value,
                flagUrl: nationaliteFlag2.value,
                ClubUrl: ClubLogo2.value,
                PACstats: PAC2.value,
                SHOstats: SHO2.value,
                PASstats: PAS2.value,
                DRIstats: DRI2.value,
                DEFstats: DEF2.value,
                PHYstats: PHY2.value,
                leagueName : leagueName2.value,
                DIVstats  :DIV2.value,
                KICstats  :KIC2.value,
                HANstats  :HAN2.value,
                POSstats  :POS2.value,
                SPEstats  :SPE2.value,
                REFstats  :REF2.value
              };
  
              eventListenerfornotfill();
              break; 
            }
          }
          if (player) {
            players.push(player);
            localStorage.setItem("players", JSON.stringify(players));
            resetInputs(); 
            fillwithLocalStorage();
          }
        }
        console.log(flag)
      }
console.log(Position2.value[0])
    }
  });
}
  // RESET INPUTS
function resetInputs() {
  PlayerName2.value = "";
  imgPlayerSrc2.value = "";
  Rate2.value = "";
  Position2.value = "";
  nationaliteFlag2.value = "";
  ClubLogo2.value = "";
  PAC2.value = "";
  SHO2.value = "";
  PAS2.value = "";
  DRI2.value = "";
  DEF2.value = "";
  PHY2.value = "";
}
function search2(response) {
  response.forEach((element) => {

    document.getElementById("search2").addEventListener("keyup", function (e) {
      let searchh2 = document.getElementById("search2").value.toLowerCase();
console.log(searchh2)
      if (element.firstName.toLowerCase().includes(searchh2)) {
        Rate2.value = element.overallRating;
        PlayerName2.value = element.lastName;
        Position2.value = element.position.shortLabel;
        imgPlayerSrc2.value = element.avatarUrl;
        nationalite2.value = element.nationality.label;
        nationaliteFlag2.value = element.nationality.imageUrl;
        club2.value = element.team.label;
        ClubLogo2.value = element.team.imageUrl;
        PAC2.value = element.stats.pac.value;
        SHO2.value = element.stats.sho.value;
        PAS2.value = element.stats.pas.value;
        DRI2.value = element.stats.dri.value;
        DEF2.value = element.stats.def.value;
        PHY2.value = element.stats.phy.value;
        DIV2.value=element.stats.gkDiving.value;
        KIC2.value=element.stats.acceleration.value;
        HAN2.value=element.stats.gkHandling.value;
        POS2.value=element.stats.gkPositioning.value;
        SPE2.value=element.stats.acceleration.value;
        REF2.value=element.stats.gkReflexes.value;
        leagueName2.value = element.leagueName
        playerInformations2.innerHTML = `
       <img class="w-16" src="${element.avatarUrl}" >`;
      }
    });
  });
}
function search3(response) {
  response.forEach((element) => {
    // console.log(element)

    document.getElementById("search3").addEventListener("keyup", function (e) {
      let searchh = document.getElementById("search3").value.toLowerCase();
console.log(searchh)
      if (element.firstName.toLowerCase().includes(searchh)) {
        Rate3.value = element.overallRating;
        PlayerName3.value = element.lastName;
        Position3.value = element.position.shortLabel;
        imgPlayerSrc3.value = element.avatarUrl;
        nationalite3.value = element.nationality.label;
        nationaliteFlag3.value = element.nationality.imageUrl;
        club3.value = element.team.imageUrl;
        ClubLogo3.value = element.team.imageUrl;
        PAC3.value = element.stats.pac.value;
        SHO3.value = element.stats.sho.value;
        PAS3.value = element.stats.pas.value;
        DRI3.value = element.stats.dri.value;
        DEF3.value = element.stats.def.value;
        PHY3.value = element.stats.phy.value;
        DIV3.value=element.stats.gkDiving.value;
        KIC3.value=element.stats.acceleration.value;
        HAN3.value=element.stats.gkHandling.value;
        POS3.value=element.stats.gkPositioning.value;
        SPE3.value=element.stats.acceleration.value;
        REF3.value=element.stats.gkReflexes.value;
        leagueName3.value= element.leagueName
        playerInformations3.innerHTML = `
        
     <img class="w-16" src="${imgPlayerSrc3.value}" >`;
      }
    });
  });
}
function search(response) {
  response.forEach((element) => {
    // console.log(element)

    document.getElementById("search").addEventListener("keyup", function (e) {
      let searchh = document.getElementById("search").value.toLowerCase();
      console.log("searchh")
      if (element.firstName.toLowerCase().includes(searchh)) {
        
        Rate.value = element.overallRating;
        PlayerName.value = element.lastName;
        Position.value = element.position.shortLabel;
        imgPlayerSrc.value = element.avatarUrl;
        nationalite.value = element.nationality.label;
        nationaliteFlag.value = element.nationality.imageUrl;
        club.value = element.team.label;
        ClubLogo.value = element.team.imageUrl;
        PAC.value = element.stats.pac.value;
        SHO.value = element.stats.sho.value;
        PAS.value = element.stats.pas.value;
        DRI.value = element.stats.dri.value;
        DEF.value = element.stats.def.value;
        DIV.value=element.stats.gkDiving.value;
        KIC.value=element.stats.acceleration.value;
        HAN.value=element.stats.gkHandling.value;
        POS.value=element.stats.gkPositioning.value;
        SPE.value=element.stats.acceleration.value;
        REF.value=element.stats.gkReflexes.value;
        leagueName3.value= element.leagueName
        PHY.value = element.stats.phy.value;
        playerInformations.innerHTML = `
     <img class="w-16" src="${element.avatarUrl}" >`;
      }
    });
  });
}
fetch("https://younessboumeshouli.github.io/FUT_CHAMPIONS_API/players.json")
 .then((res) => res.json())
  .then((response) => {
    console.log(response);
    JSON.parse(localStorage.getItem("players")) || [];
    search(response);
    search2(response);
    search3(response);
    
    eventListenerfornotfill();
    Form2()
  })
  .catch((error) => console.error("Error:", error));
localStorageFormation();
let attack, z, y;
let form = document.getElementById("form");
let formation = document.getElementById("formation");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(formation.value);
  switch (formation.value) {
    case "442":
      fill(2, 4, 4);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "433":
      fill(3, 3, 4);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "343":
      fill(3, 4, 3);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
    case "523":
      fill(3, 2, 5);
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;

    default:
      fillwithLocalStorage();
      eventListenerfornotfill();
      break;
  }
});
function localStorageFormation() {
  let f = JSON.parse(localStorage.getItem("formationL")) || "442";
  let l = f[0];
  let m = f[1];
  let n = f[2];
  fill(+n, +m, +l);
}
function fill(l, m, n) {
  let f = `${n}${m}${l}`;
  localStorage.setItem("formationL", JSON.stringify(f));
  console.log(f);
  let x = document.querySelector("#terrain").firstElementChild;
  x.innerHTML = "";
  x.className.className = "";
  x.classList.add("flex");
  
  x.classList.add("justify-around");
  for (let i = 0; i < l; i++) {
    let div = document.createElement("div");
    div.id = "attak" + i;

    div.classList.add("notFill");
    let Deletebutton = document.createElement("button");
    Deletebutton.innerText = "X"
    let idD = `attak${i}`
    Deletebutton.setAttribute("onclick",`DeletePlayer(${idD})`)
    Deletebutton.classList.add("w-4")
    Deletebutton.classList.add("h-6")
    Deletebutton.classList.add("bg-red-400")
    Deletebutton.classList.add("relative")
    Deletebutton.classList.add("top-1")
    Deletebutton.classList.add("left-18")
    Deletebutton.classList.add("rounded-xl")

    x.appendChild(Deletebutton)
    x.appendChild(div);
  }
  let y = document.getElementById("terrain").children[1];
  y.innerHTML = "";
  y.className = "";
  y.classList.add("flex");
  y.classList.add("justify-between");
  for (let i = 0; i < m; i++) {
    let div = document.createElement("div");
    div.id = "centre" + i;

    div.classList.add("notFill");
    let Deletebutton = document.createElement("button");
    Deletebutton.innerText = "Delete Player"
    let idD = `centre${i}`
    Deletebutton.setAttribute("onclick",`DeletePlayer(${idD})`)
    Deletebutton.innerText = "X"
     Deletebutton.classList.add("w-4")
    Deletebutton.classList.add("h-6")
    Deletebutton.classList.add("bg-red-400")
    Deletebutton.classList.add("relative")
    Deletebutton.classList.add("top-1")
    Deletebutton.classList.add("left-18")
    Deletebutton.classList.add("rounded-xl")

    y.appendChild(Deletebutton)
    y.appendChild(div);
  }
  let z = document.getElementById("terrain").children[2];
  z.innerHTML = "";
  z.className = "";
  z.classList.add("flex");
  z.classList.add("justify-between");
  for (let i = 0; i < n; i++) {
    let div = document.createElement("div");
    div.id = "back" + i;

    div.classList.add("notFill");
    let Deletebutton = document.createElement("button");
    Deletebutton.innerText = "X"
    Deletebutton.classList.add("w-4")
    Deletebutton.classList.add("h-6")
    Deletebutton.classList.add("bg-red-400")
    let idD = `back${i}`
    Deletebutton.setAttribute("onclick",`DeletePlayer(${idD})`)
    Deletebutton.classList.add("relative")
    Deletebutton.classList.add("top-0")
    Deletebutton.classList.add("left-18")
    Deletebutton.classList.add("rounded-xl")

    z.appendChild(Deletebutton)

    z.appendChild(div);
  }
  let h = document.getElementById("terrain").children[3];
  h.innerHTML = "";
  h.className = "";
  h.classList.add("flex");
  h.classList.add("justify-center");
  let divG = document.createElement("div");
  divG.id = "GoalKeeper";
  divG.classList.add("notFill");
  let Deletebutton = document.createElement("button");
  Deletebutton.innerText = "X"
  Deletebutton.classList.add("w-4")
  Deletebutton.classList.add("h-6")
  Deletebutton.classList.add("bg-red-400")
  let idD = 'GoalKeeper'
  Deletebutton.setAttribute("onclick",`DeletePlayer(${idD})`)
    Deletebutton.classList.add("relative")
    Deletebutton.classList.add("top-8")
    Deletebutton.classList.add("rounded-xl")

    Deletebutton.classList.add("left-64")
    h.appendChild(Deletebutton)
    h.appendChild(divG);
  l = document.querySelectorAll("#remplace DIV");
  if (l) {
    console.log(l.length);
  } else {
    console.log("not work");
  }
  let i = 0;
  l.forEach((le) => {
    le.id = "remplace" + i;
    le.classList.add("notFill");
    i++;
  });
}
eventListenerfornotfill();

function handleSubmit(event) {
  event.preventDefault();

  const nf = formPlayer.currentTarget;
  console.log(nf);
  if (nf) {
    Disable(nf);
    console.log(nf);
    console.log(nf.id);
    let player = {
      id: nf.id,
      name: PlayerName.value,
      image: imgPlayerSrc.value,
      rate: Rate.value,
      position: Position.value,
      flagUrl: nationaliteFlag.value,
      leagueName : leagueName.value,
      ClubUrl: ClubLogo.value,
      PACstats: PAC.value,
      SHOstats: SHO.value,
      PASstats: PAS.value,
      DRIstats: DRI.value,
      DEFstats: DEF.value,
      PHYstats: PHY.value,
      DIVstats:DIV.value,
      KICstats  :KIC.value,
        HANstats:HAN.value,
       POSstats :POS.value,
       SPEstats :SPE.value,
       REF :REF.value
    };

    players.push(player);
    localStorage.setItem("players", JSON.stringify(players));
    eventListenerfornotfill();
    fillwithLocalStorage();
  }

  formPlayer.style.display = "none";
  formPlayer.removeEventListener("submit", handleSubmit);
  formPlayer.currentTarget = null;
}
function eventListenerfornotfill() {
  let NOTFILL = document.querySelectorAll(".notFill");
  NOTFILL.forEach((nf) => {
    nf.addEventListener("mousedown", event => {
      if (event.button == 0) { 
        console.log("is clicked");

        formPlayer.style.display = "block";
        formPlayer.currentTarget = nf;
        console.log(nf);
  
        formPlayer.addEventListener("submit", removeClass(nf));
  
        formPlayer.addEventListener("submit", handleSubmit);
      }else if (event.button == 2){  
         console.log(event.target.parentElement)
         divid = event.target.parentElement.id
         players.forEach(player=>{
          if(player.id === divid ){
            console.log("is in the localStorage")
            updatePlayer(player.id)
            
          }
         })
      }});
   
    
  });
}
function updatePlayer(playerId){
  formPlayer3.style.display = "block";
  console.log(playerId)
  players.forEach(player=>{
    if(player.id == playerId){
      PlayerName3.value = player.name
      Position3.value = player.position;
      Rate3.value = player.rate
        imgPlayerSrc3.value = player.image;
        nationalite3.value = player.flagUrl;
        nationaliteFlag3.value = player.flagUrl;
        club3.value = player.ClubUrl;   
        formPlayer3.addEventListener("submit",function(){
  if( PlayerName3.value!= ""&&Rate3.value!=""&&nationalite3.value!=""){
                players = players.filter(player => player.id !== playerId);
 let newPlayer = {  
                  
ClubUrl: club3.value,
DEFstats: player.DEFstats,
DRIstats: player.DEFstats,
PACstats: player.PACstats,
PASstats: player.PASstats,
PHYstats: player.PHYstats,
SHOstats: player.SHOstats,
DIVstats:DIV3.value,
KICstats:KIC3.value,
HANstats:HAN3.value,
POSstats:POS3.value,
SPEstats:SPE3.value,
REFstats:REF3.value,
flagUrl:  nationaliteFlag3.value,
id: playerId,
leagueName: leagueName3.value,
image: imgPlayerSrc3.value,
name: PlayerName3.value,
position: Position3.value,
rate: Rate3.value
                }
                players.push(newPlayer)
                localStorage.setItem("players", JSON.stringify(players));
                fillwithLocalStorage();
              }
        })
    }
  })
}
function Disable(nf) {
  console.log(nf);
  if (nf.className === "") {
    nf.classList.add("disable");
  }
}
closeMenu.addEventListener("click", function () {
  formPlayer.style.display = "none"; // Hide the form
  formPlayer.removeEventListener("submit", handleSubmit); // Remove the submit listener
  formPlayer.currentTarget = null; // Clear current target
});
function fillwithLocalStorage() {
  let players = JSON.parse(localStorage.getItem("players")) || [];
  players.forEach((element) => {
    
    let thisdiv = document.getElementById(element.id);
   
    if (thisdiv) {
      
      thisdiv.setAttribute("draggable", true);
      thisdiv.addEventListener("dragstart",function(e){
        console.log('hello')
        
      })
    if(element.position == "GK"){
      thisdiv.innerHTML = `
      <section   class="sectionRemplace flex ">
 
  <span  class="relative spanRomplacent">
  <p class=" text-yellow-300 text-center RateText">${element.rate}</p>
  <p class=" text-center text-white playerPostion">${element.position}</p>
  <img class="flags" src="${element.flagUrl}" alt="Flag">
  <img class="logos" src="${element.ClubUrl}" alt="Club">
  </span>
  <section>
  <img class="imageCard" src="${element.image}" alt="Player">
  </section>
  </section>
  
  <h1 class=" text-center text-white playerName">${element.name}</h1>
  
  <section class="flex  text-yellow-400 spanStats">
  <section class="firstStats">
  <p class="text-[8px]">DIV ${element.DIVstats}</p>
  <p class="text-[8px]">KIC ${element.KICstats}</p>
  <p class="text-[8px]">HAN ${element.HANstats}</p>
  </section>
  <section class=" firstStats">
  <p class="text-[8px]">POS ${element.POSstats}</p>
  <p class="text-[8px]">SPE ${element.SPEstats}</p>
  <p class="text-[8px]">REF ${element.REFstats}</p>
  </section>
  </section>
  
  `;
    }else{
      thisdiv.innerHTML = `
      <section   class="sectionRemplace flex ">
<span  class="relative spanRomplacent">
 <p class=" text-yellow-300 text-center RateText">${element.rate}</p>
 <p class=" text-center text-white playerPostion">${element.position}</p>
 <img class="flags" src="${element.flagUrl}" alt="Flag">
 <img class="logos" src="${element.ClubUrl}" alt="Club">
</span>
<section>
 <img class="imageCard" src="${element.image}" alt="Player">
</section>
</section>

<h1 class=" text-center text-white playerName">${element.name}</h1>

<section class="flex  text-yellow-400 spanStats">
<section class="firstStats">
 <p class="text-[8px]">PAC ${element.PACstats}</p>
 <p class="text-[8px]">SHO ${element.SHOstats}</p>
 <p class="text-[8px]">PAS ${element.PASstats}</p>
</section>
<section class=" firstStats">
 <p class="text-[8px]">DRI ${element.DRIstats}</p>
 <p class="text-[8px]">DEF ${element.DEFstats}</p>
 <p class="text-[8px]">PHY ${element.PHYstats}</p>
</section>
</section>

`;
    }
    
    }
  });
}
fillwithLocalStorage();
function removeClass(nf) {


  nf.className = "";
}
const setupDragAndDrop = () => {

  const Cards = document.querySelectorAll(".notFill");
  
  Cards.forEach(card => {
      card.addEventListener("dragstart", (e) => {
          e.dataTransfer.setData('text/plain', card.dataset.id);
          card.classList.add("Dragged");
          setTimeout(() => { card.children[0].style.display = 'none';
            card.children[1].style.display = 'none';
            card.children[2].style.display = 'none';
           }, 1000);
      });
      card.addEventListener("dragend", (e) => {
        card.children[0].style.display = 'block';
        card.children[1].style.display = 'block';
        card.children[2].style.display = 'block';
      });
  });

  
  Cards.forEach(card => {
      card.addEventListener('dragover', (e) => e.preventDefault());
      card.addEventListener('drop', (e) => handleDrop(e, card));
  });
}

const handleDrop = (e, card) => {
  e.preventDefault();
    const targetCard = e.target.id;
  console.log(targetCard)

  console.log("is worked",card)
 
}
window.onload = setupDragAndDrop()

function DeletePlayer(playerID) {
  console.log(playerID);

  let deletedPlayer = players.filter(player => player.id == playerID.id);
  console.log(deletedPlayer);

  if (deletedPlayer.length == 0) {
    console.log("The player does not exist");
  } else {
    players = players.filter(player => player.id !== playerID.id);
    
    localStorage.setItem("players", JSON.stringify(players));
    
    const playerElement = document.getElementById(`${playerID.id}`);
    if (playerElement) {
      playerElement.innerHTML = "";
    }
  }
}

document.getElementById("fillAuto").addEventListener("click",function(){
 let remplacents = players.filter(player => player.id[0]=="r");
 let formatolL = JSON.parse(localStorage.getItem("formationL")) || "442";
  console.log(remplacents)
  remplacents.forEach(rPlayer=>{
    
    if (rPlayer.position[1] == "B") {
      console.log("isHere");
      let box = [];
      let playerIndex = 0
      let flag = false;
      for (let i = 0; i < formatolL[0]; i++) {
        let classp = `back${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()&&flag==false) {
          document.getElementById(rPlayer.id).innerHTML = ""

          players = players.filter(player => player.id !== rPlayer.id);
          localStorage.setItem("players", JSON.stringify(players));
          flag = true;
          box.push(classp);
          let player = {
            id: box[playerIndex],
            name: rPlayer.name,
            image: rPlayer.image,
            rate: rPlayer.rate,
            position: rPlayer.position,
            flagUrl: rPlayer.flagUrl,
            ClubUrl: rPlayer.ClubUrl,
            PACstats: rPlayer.PACstats,
            leagueName: leagueName.value,
            SHOstats: rPlayer.SHOstats,
            PASstats: rPlayer.PASstats,
            DRIstats: rPlayer.DRIstats,
            DEFstats: rPlayer.DEFstats,
            PHYstats: rPlayer.PHYstats,
            DIVstats:rPlayer.DIVstats,
      KICstats  :rPlayer.KICstats,
        HANstats:rPlayer.HANstats,
       POSstats :rPlayer.POSstats,
       SPEstats :rPlayer.SPEstats,
       REFstats :rPlayer.REFstats
          };
          playerIndex++
          console.log(playerIndex)
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
          fillwithLocalStorage();
        }
      }
      if (flag == false) {
        console.log("the post is full")
      }
    }
    if (rPlayer.position[0] == "C" && rPlayer.position[1] != "B"){
      console.log(formatolL[1]);
      let box = [];
      let playerIndex = 0
      let flag = false;
      for (let i = 0; i < formatolL[1]; i++) {
        let classp = `centre${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()&&flag==false) {
          document.getElementById(rPlayer.id).innerHTML = ""

          players = players.filter(player => player.id !== rPlayer.id);
          localStorage.setItem("players", JSON.stringify(players));
          flag = true;
          box.push(classp);
          let player = {
            id: box[playerIndex],
            name: rPlayer.name,
            image: rPlayer.image,
            rate: rPlayer.rate,
            position: rPlayer.position,
            flagUrl: rPlayer.flagUrl,
            ClubUrl: rPlayer.ClubUrl,
            leagueName: leagueName.value,
            PACstats: rPlayer.PACstats,
            SHOstats: rPlayer.SHOstats,
            PASstats: rPlayer.PASstats,
            DRIstats: rPlayer.DRIstats,
            DEFstats: rPlayer.DEFstats,
            PHYstats: rPlayer.PHYstats,
          
          };
          playerIndex++
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
          fillwithLocalStorage();
        }
      }
      if (flag == false) {
        console.log("the post is full")
      }
    }
    if (rPlayer.position[1] == "W" || rPlayer.position.includes("S")){
      console.log("isHere");
      let box = [];
      let playerIndex = 0
      let flag = false;
      console.log(formatolL[2])
      for (let i = 0; i < formatolL[2]; i++) {
        console.log(i)
        let classp = `attak${i}`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()&&flag==false) {
          document.getElementById(rPlayer.id).innerHTML = ""

          players = players.filter(player => player.id !== rPlayer.id);
          localStorage.setItem("players", JSON.stringify(players));
          flag = true;
          box.push(classp);
          let player = {
            id: box[playerIndex],
            name: rPlayer.name,
            image: rPlayer.image,
            rate: rPlayer.rate,
            position: rPlayer.position,
            flagUrl: rPlayer.flagUrl,
            ClubUrl: rPlayer.ClubUrl,
            PACstats: rPlayer.PACstats,
            leagueName: leagueName.value,
            SHOstats: rPlayer.SHOstats,
            PASstats: rPlayer.PASstats,
            DRIstats: rPlayer.DRIstats,
            DEFstats: rPlayer.DEFstats,
            PHYstats: rPlayer.PHYstats,
            
          };
          playerIndex++
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
          fillwithLocalStorage();
        }
      }
      if (flag == false) {
        console.log("the post is full")
      }
    }
    if (rPlayer.position.includes("G")) {
      console.log("isHere");
      let box = [];
      let flag = false;
      
        let classp = `GoalKeeper`;
        let l = document.getElementById(classp);

        if (l && !l.hasChildNodes()&&flag==false) {
          console.log(rPlayer.id)
          document.getElementById(rPlayer.id).innerHTML = ""
          players = players.filter(player => player.id !== rPlayer.id);
          localStorage.setItem("players", JSON.stringify(players));
          flag = true;
          box.push(classp);
          let player = {
            id: box[0],
            name: rPlayer.name,
            image: rPlayer.image,
            rate: rPlayer.rate,
            position: rPlayer.position,
            flagUrl: rPlayer.flagUrl,
            ClubUrl: rPlayer.ClubUrl,
            PACstats: rPlayer.PACstats,
            SHOstats: rPlayer.SHOstats,
            leagueName: leagueName.value,
            PASstats: rPlayer.PASstats,
            DRIstats: rPlayer.DRIstats,
            DEFstats: rPlayer.DEFstats,
            PHYstats: rPlayer.PHYstats,
            DIVstats:rPlayer.DIVstats,
            KICstats  :rPlayer.KICstats,
              HANstats:rPlayer.HANstats,
             POSstats :rPlayer.POSstats,
             SPEstats :rPlayer.SPEstats,
             REFstats :rPlayer.REFstats
          };
          players.push(player);
          localStorage.setItem("players", JSON.stringify(players));
          eventListenerfornotfill();
          fillwithLocalStorage();
        }
      
      if (flag == false) {
        console.log("the post is full")
      }
    }
  })
})
function CalculChemestry(){
  let note = 0
  let players = JSON.parse(localStorage.getItem("players")) || [];

  players.forEach(player=>{
    players.forEach(player2=>{
    if(player2!=player){
      
      if(player2.ClubUrl == player.ClubUrl){
        note+=5
        console.log(player2.name,player.name)
      }
      if(player2.flagUrl == player.flagUrl){
        note+=5
        console.log(player2.name,player.name)  
           }
      if(player2.leagueName == player.leagueName){
            note+=5
            console.log(player2.leagueName,player.leagueName)  
      }

    }
    })
  })
  document.getElementById("chemestry").innerHTML = `
  <h1>${note}</h1>
  `
  console.log(note)
}
console.log(players.length)
CalculChemestry()
// function 
console.log(players.length)