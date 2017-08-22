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