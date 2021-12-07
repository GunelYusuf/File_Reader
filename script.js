let input=document.getElementById("input");
let table=document.getElementById("table");
let tableBody=table.lastElementChild;


input.onchange=function(e){
    for (const item of e.target.files) {
       var reader= new FileReader();
       reader.onloadend=function(e){
         //console.log(e.target.result);
         let tr=document.createElement("tr");
         tr.classList.add("list");
         let tdImage=document.createElement("td");
         let image=document.createElement("img");
         image.setAttribute("src",e.target.result)
         image.style.height="200px";
         image.style.width="170px"
         tdImage.append(image);
         let tdImageName=document.createElement("td");
         tdImageName.innerText=item.name;
         let tdSize=document.createElement("td")
         tdSize.innerText=item.size;
        
         tr.append(tdImage,tdImageName,tdSize);
         tableBody.append(tr);
       }

       reader.readAsDataURL(item);
    }
}
let resetButton = document.getElementById('resetButton');

resetButton.addEventListener('click', function () {
  document.querySelectorAll('.list').src="";
  //  photoList.forEach( g=> {
  //    g.innerHTML="";
     
  //  });
});
