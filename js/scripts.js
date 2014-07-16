$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-id-addresses").append('<div class="new-class-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#add-phone").click(function() {
    $("#new-phones").append('<div class="new-phone">' +
                              '<div class="form-group">'+
                                 '<label for="new-phone-entry">Phone Number</label>' +
                                 '<input type="text" class="form-control new-phone-entry">' +
                              '</div>' +
                            '</div>');
  });

  $("#add-email").click(function() {
    $("#new-email-ad").append('<div class="new-email">' +
                              '<div class="form-group">'+
                                 '<label for="new-email-entry">Email</label>' +
                                 '<input type="text" class="form-control new-email-entry">' +
                              '</div>' +
                            '</div>');

  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses:[], phones:[], emails: [] };

    $(".new-class-address").each(function(){
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState};
      newContact.addresses.push(newAddress);
    });

    $(".new-phone").each(function() {
      var inputtedPhone = $(this).find("input.new-phone-entry").val();

      var newPhone = { number: inputtedPhone};
      newContact.phones.push(newPhone);
    });

    $(".new-email").each(function() {
      var inputtedEmail = $(this).find("input.new-email-entry").val();

      var newEmail = {email: inputtedEmail};
      newContact.emails.push(newEmail);
    });


    $("ul#contacts").append("<li><span class='contact'>" +
                              newContact.firstName + " " +
                              newContact.lastName + "</span></li>");

    $(".contact").last().click(function() {
      console.log(newContact);
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city
                                  + ", " + address.state + "</li>");
        });

      $("ul#phones").text("");
      newContact.phones.forEach(function(phone) {
        $("ul#phones").append("<li>" + phone.number + "</li>");
      });

      $("ul#emails").text("");
      newContact.emails.forEach(function(emtry){
        $("ul#emails").append("<li>" + emtry.email + "</li>");
      });
    });

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-phone-entry").val("");
    $("input.new-email-entry").val("");
  });
});
