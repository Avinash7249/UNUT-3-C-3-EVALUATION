// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",addtowallet);
let h1=document.getElementById("wallet");
let arr=[];
function addtowallet(){
    console.log("str");
    h1.innerHTML=null;
    let amount=document.getElementById("amount").value;
    h1.append(amount);
    arr.push(amount)
    localStorage.setItem("amount",JSON.stringify(arr));


}
document.getElementById("book_movies").addEventListener("click",bookmovies);
function bookmovies(){
    window.location.href="movies.html"
}