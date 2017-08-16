var button=document.getElementById('counter');

button.onclick=function(){
    var request= new XMLHttpRequest();
    request.onreadystateChange = function(){
      if(request.readystate==XMLHttpRequest.DONE){
          if(request.status==200){
              var counter = request.responseText;
              var span=document.getElementById('count');
                span.innerHTML=counter.toString();
          }
      }  
    };
  counter=counter+1;
  request.open('GET','http://rc10131.imad.hasura-app.io/counter',true);
  request.send(null);
};
var nameInput=document.getElementById('name');
var name= nameInput.value;
var submit=document.getElementById('submit');
submit.onClick=function(){
    var name=['name1','name2','name3','name4'];
    var list='';
    for(var i =0; i<names.length;i++){
        list +='<li>'+names[i]+'<li>';    
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML =list;
};