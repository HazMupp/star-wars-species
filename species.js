


$('#human-button').click(function() {

  var humanUrl = "http://swapi.co/api/species/1/";
  $.get(humanUrl, function(data, textStatus, jqXHR){
    
    var responseBody = data;
    $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
    $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
 //   $('#information-field3').text("Homeworld: " +  )
  })
  
});

$('#droid-button').click(function() {

  var droidUrl = "http://swapi.co/api/species/2/";
  
  $.get(droidUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
        $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
    
    
  })
  
});

$('#wookie-button').click(function() {

  var wookieUrl = "http://swapi.co/api/species/3/";
  
  $.get(wookieUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
        $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
    
  })
  
});

$('#rodian-button').click(function() {

  var rodianUrl = "http://swapi.co/api/species/4/";
  
  $.get(rodianUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
        $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
    
  })
  
});

$('#hutt-button').click(function() {

  var huttUrl = "http://swapi.co/api/species/5/";
  
  $.get(huttUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
        $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
    
  })
  
});

$('#yoda-button').click(function() {

  var yodaUrl = "http://swapi.co/api/species/6/";
  
  $.get(yodaUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Classification: " + responseBody.classification +
    ". " + "Designation: " + responseBody.designation + ". " + "Average height: " + responseBody.average_height + ".");
    
        $('#information-field2').text("Skin colors: " + responseBody.skin_colors + ". " + "Hair colors: " + responseBody.hair_colors + 
    ". " + "Eye colors: " + responseBody.eye_colors + ". " + "Average lifespan: " + responseBody.average_lifespan + ".");
    
    var homeworldUrl = responseBody.homeworld;
    
    $.get(homeworldUrl, function(data2, textStatus2, jqXHR2) {
      
      var planetName = data2;
       $('#information-field3').text("Homeworld: " +  planetName.name );
      
    });
    
  })
  
});


$('#tatooine-button').click(function() {

  var tatooineUrl = "http://swapi.co/api/planets/1/";
  
  $.get(tatooineUrl, function(data, textStatus, jqXHR){
  
        var responseBody = data;
        $('#information-field').text("Name: " + responseBody.name + ". " + "Rotation period: " + responseBody.rotation_period +
    ". " + "Orbital period: " + responseBody.orbital_period + ". " + "Diameter: " + responseBody.diameter + ".");
    
        $('#information-field2').text("Climate: " + responseBody.climate + ". " + "Gravity: " + responseBody.gravity + 
    ". " + "Terrain: " + responseBody.terrain + ". " + "Surface water: " + responseBody.surface_water + ".");
    
    var residentsUrl = responseBody.residents[1];
    
    $.get(residentsUrl, function(data2, textStatus2, jqXHR2) {
      
      var residentNames = data2;
       $('#information-field3').text("Residents: " +  residentNames.name);
      
    });
    
  })
  
});

