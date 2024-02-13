const accesskey="w33eTKPaJKQMqrqiHx74tvLiD3ry1wi15wfP3sr9Fs0";

const formE1=document.querrySelector("form");
const inputE1=document.getElementById("Search-input");
const SearchResults=document.querrySelector(".Search-results");
const  showmore=document.getElementById("show-more-button");

let inputData="";
let page =1;

 async function searchimages(){
    inputData = inputE1.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&querry=$
    {inputData}&client_id=${accesskey}`;


const response= await fetch(url);
const data = await response.json();
 
const results=  data.results;

if(page==1)
{
    SearchResults .innerhtml="";
}
results.map((result) =>{
const imageWrapper=document.createElement("div");
imageWrapper.classList.add("Search-result");
const image=document.createElement("img");
image.src= result.urls.small;
image.alt = result.alt_description;
const imagelink = document.createElement("a");
imagelink.href =  result.links.html;
image.link.target="_blank";
image.link.textcontent =  result.alt_description;
imageWrapper .appendchild(image);
imageWrapper .appendchild(imagelink);
imageWrapper .appendchild(imageWrapper);
});
 page++;

 if(page >1){
    showmore.style.display="block";

 }
}
formE1.addEventListener("submit", (event)=>{
    event.preventDefault();
    page=1;
    searchimages();
});
showmore.addEventListener("click", ()=>{
    
    searchimages();
});