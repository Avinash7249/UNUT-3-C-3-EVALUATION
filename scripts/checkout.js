// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let walletammount=JSON.parse(localStorage.getItem("amount"))||[];
        let h1=document.getElementById("wallet");
        h1.append(walletammount)

document.getElementById("confirm").addEventListener("click",confirm);
function confirm(){
    let seat=document.getElementById("number_of_seats").value;
    // Each ticket will cost 100 Rupees
    let total=Number(seat)*100;
    if(total>Number(walletammount)){
        alert("Insufficient Balance !")
    }else{
        total=Number(walletammount)-total;
        walletammount.splice(0,walletammount.length)
       walletammount.push(total);
       localStorage.setItem("amount",JSON.stringify(walletammount))
        alert("Booking Successful!")
        window.location.reload()
    }
    console.log(total)
}

let data=JSON.parse(localStorage.getItem("movie"))||[];
data.forEach(function(el) {

    let m=document.getElementById("movie");
    m.innerHTML=null;

    let p=document.createElement("p");
    let Poster=document.createElement("img");
    Poster.src=el.Poster
    p.innerText=el.Title;
    let btn=document.createElement("button");
    m.append(Poster,p)
    
    });
