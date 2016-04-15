// process for usage of dropbox api:
// call create_folder service with path /Members/<person's name> as parameter: https://www.dropbox.com/developers/documentation/http/documentation#files-create_folder
// call create_folder service with value "CV"
// call create_folder service with value "Portfolio"
// call upload service and pass CV: https://www.dropbox.com/developers/documentation/http/documentation#files-upload

// other non-file data:
// send to backend that takes the data and stores it in some sql database
// also send the data to google doc api


;
$(document).ready(function () {
  service = {};
  service.base_url = '';
  if(location.hostname === 'localhost'){
    service.base_url = 'http://localhost';
  }

  service.regions = [];
  service.updateRegions = function(region){
    if ($.inArray(region, service.regions) == -1){
      service.regions.push(region);
    }
    else{
      service.regions.splice(service.regions.indexOf(region), 1);
    }
  }

  service.skillsandpassions = [];
  service.wordcloudElementClicked = function(id, element){
    if ($.inArray(element, service.skillsandpassions) == -1){
      service.skillsandpassions.push(element);
      $('#'+id).addClass('selected');
    }
    else{
      service.skillsandpassions.splice(service.skillsandpassions.indexOf(element), 1);
      $('#'+id).removeClass('selected');
    }
  }

  service.submit = function(){
    var name = $("#i_name").val();
    var email = $("#i_mail").val();

    //read "stuff I like" radio button selectedRegions
    var stuffILike = $('input[type=radio]:checked', '#i_wrapper_stuffilike').vals();

    var data = {
      "name" : name,
      "email" : email,
      "countries": service.regions,
      "stuffILike": stuffILike,
      "skillsandpassions": service.skillsandpassions
    }
    console.log(data);

    // $.post(service.base_url+'/api/signup', data, function(data) {
    //  console.log('done.');
    // });

    // $.post(service.base_url+'/Projekte/ee_signupform/signup.php', data, function(data) {
    //  console.log(data);
    // });
  };

});
