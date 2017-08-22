var button = document.getElementById("counter");
//var counter = 0;

button.onclick = function(){
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if ( request.readystate == XMLHttpRequest.Done){
            //Take some action
            if( request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
        //Not Done Yet
    };
    
    // Make the request
    request.open('GET','http://riteshmukim.imad.hasura-app.io/counter',true);
    request.send(null);
    
    
}

var nameInput = document.getElementById("name");
var nam = nameInput.value;
var submit = document.getElementById("submit_btn");
submit.onclick = function(){
    var names = ['name1','name2','name3','name4'];
    var list = '';
    for ( var i = 0; i< names.length; i++){
        list+="<li>"+names[i]+"</li>";
    }
    var ul = document.getElementById("namelist");
    ul.innerHTML = list;
};