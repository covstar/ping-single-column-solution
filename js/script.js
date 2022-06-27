$(document).ready(function(){
    $("#submit").click(function(){
        // getting values from input
        let email = $('input').val();
        
        // setting the RegExp
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        // conditional statements 
        if (email == "") {
             $('#error_message').html("Please provide your email address");
            $('input').css("border", "2px solid  hsl(354, 100%, 66%)");
            $('#error_message').css("padding", "1rem");
            return false;
        }
        if (!filter.test(email)) {
            $('#error_message').html("Please provide a valid email address");
            $('input').css("border", "2px solid  hsl(354, 100%, 66%)");
            return false;
        }
   
    })
})