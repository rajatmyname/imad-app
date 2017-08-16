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