// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let walletammount=JSON.parse(localStorage.getItem("amount"))||[];
let h1=document.getElementById("wallet");
h1.append(walletammount)


let m=document.getElementById("movies");
async function search12(){
try{
const query=document.getElementById("search").value;
let res=await fetch(`https://www.omdbapi.com/?apikey=261143e5&s=${query}`)
let data=await res.json();
let movies=data.Search;
//display(movies)
console.log("res:",data)
return movies;
}catch(err){
   console.log("err:",err)
}
}

function display(data){

m.innerHTML=null;
data.forEach(function(el) {
let p=document.createElement("p");

let Poster=document.createElement("img");
Poster.src=el.Poster
p.innerText=el.Title;
let btn=document.createElement("button");
btn.innerText="book now";
btn.setAttribute("class","book_now");
btn.style.cursor="pointer";
 btn.addEventListener("click",function(){
    store(el)
 });
m.append(Poster,p,btn)
   
});
}
let arr=[];
function store(el){
arr.push(el);
localStorage.setItem("movie",JSON.stringify(arr))
window.location.href="checkout.html";
}







async function main12(){
let data=await search12();
if(data===undefined){
   return false;
}
display(data);
}
let id;
function debounce(func,delay){
if(id){
   clearTimeout(id);
}
id=setTimeout(function(){
   func()
},delay);
}

