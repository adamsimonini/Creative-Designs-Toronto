
// Cancel default submit function and replace with custom JS
  $("#contactForm").submit(function(event){
      // cancels the form submission
      event.preventDefault();
      submitForm();
  });

// Contact Form
  function submitForm(){
      // Initiate Variables With Form Content
      var name = $("#clientName").val();
      var email = $("#clientEmail").val();
      var inquiry =$("#inquiry").val();
      var message = $("#clientMessage").val();

      $.ajax({
          type: "POST",
          url: "php/contact-form.php",
          data: "name=" + name + "&email=" + email + "&message=" + message,
          success : function(text){
              if (text == "success"){
                  formSuccess();
              }
          }
      });
  }
  function formSuccess(){
      $( "#msgSubmit" ).removeClass( "hidden" );
  }
