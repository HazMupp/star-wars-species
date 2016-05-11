

// Klicka på spotify-knappen
$('#human-button').click(function() {

  var humanUrl = "http://swapi.co/api/species/1/";
  $.get(humanUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;
    $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
    $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});

$('#droid-button').click(function() {

  var droidUrl = "http://swapi.co/api/species/2/";
  
  $.get(droidUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
        $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});

$('#wookie-button').click(function() {

  var wookieUrl = "http://swapi.co/api/species/3/";
  
  $.get(wookieUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
        $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});

$('#rodian-button').click(function() {

  var rodianUrl = "http://swapi.co/api/species/4/";
  
  $.get(rodianUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
        $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});

$('#hutt-button').click(function() {

  var huttUrl = "http://swapi.co/api/species/5/";
  
  $.get(huttUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
        $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});

$('#yoda-button').click(function() {

  var yodaUrl = "http://swapi.co/api/species/6/";
  
  $.get(yodaUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " responseBody.average_height + ".");
    
        $('information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".")
    
  })
  
});
