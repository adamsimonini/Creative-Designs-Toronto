$(document).ready(function(){
  // Cancel default submit function and replace with custom JS
    $("#submitButton").click(function(e){
        // cancels the form submission
        e.preventDefault();
        submitForm();
    });

  // Contact Form
    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#clientName").val();
        var email = $("#clientEmail").val();
        var inquiry =$("#inquiry").val();
        var message = $("#clientMessage").val();
        console.log("start");

        $.ajax({
            type: "POST",
            url: "https://www.creativedesignstoronto.com/php/contact-form.php",
            dataType: 'jsonp',
            data: "name=" + name + "&email=" + email + "&message=" + message,
            success: function(text){
                if (text == "success"){
                    console.log("success!");
                    formSuccess();
                }
            }
        });
    }
    function formSuccess(){
        console.log("formSuccess success!");
        $("#msgSubmit").removeClass("invisible");
    }
  });
