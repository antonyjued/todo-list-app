 

function addList(){
  const app_container=document.getElementById("listContainer");
  let data=document.getElementById("userData");
  if(data.value===""){
    alert("Empty Data Detected");
  }
  else{
  let li=document.createElement("li");
  li.innerHTML=data.value;
  app_container.appendChild(li);
  let span=document.createElement("span");
  span.innerHTML="\u00d7";
  li.appendChild(span);
  }
  data.value="";
  storeData(app_container,data);
}
function start(){
  let app_container=document.getElementById("listContainer");
  app_container.addEventListener("click",function (e){
  if(e.target.tagName==="LI"){
    alert(data.value);
    storeData(app_container,data);
  }
  else if(e.target.tagName==="SPAN"){
    let confDelete=confirm("Are you sure?");
    if(confDelete===1 ||confDelete===true)
      e.target.parentElement.remove();
    storeData(app_container,data);
  }
},false);
}
/*function storeData(app_container,data){
  localStorage.setItem("data",app_container.innerHTML);
}
function RetrieveData(app_container,data1){
  app_container.innerHTML=localStorage.getItem("data");
}
*/