

// Klicka på spotify-knappen
$('#human-button').click(function() {

  var humanrUrl = "http://swapi.co/api/species/1/";
  $.get(humanUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;
    $('#information-field').text(responseBody.name + ". " + responseBody.classification + ". " + responseBody.designation + ".");
    
  })
  
});

$('#droid-button').click(function() {


  var droidUrl = "http://swapi.co/api/species/2/";
  
  $.get(chewbaccaUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text(responseBody.name + ". " + responseBody.classification + ". " + responseBody.designation + ".");
    
  })
  
});
