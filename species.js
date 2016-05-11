

// Klicka på spotify-knappen
$('#human-button').click(function() {

  var humanUrl = "http://swapi.co/api/species/1/";
  $.get(humanUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;
    $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ".");
    
  })
  
});

$('#droid-button').click(function() {

  var droidUrl = "http://swapi.co/api/species/2/";
  
  $.get(droidUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ".");
    
  })
  
});
