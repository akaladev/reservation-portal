
function getReservations(cb){
  var apiUrl = readConfigApiUrl;
  var webserviceUrl=apiUrl+"reservation";
  $.ajax({
         type:'GET',
         url: webserviceUrl,
         dataType: 'json',
         success: function(response){
           alert(response[0].mto);
              $('#api-data').html(response[0].mto);
         }
       });
}

function readConfig(){
  var config = read('../config.txt').;

}

var readConfigApiUrl = {

    fileContents:"Null",
    pagePrefix:"Null",
    slides:"Null",

    init: function () {
        $.ajax({
            url: "../config.txt",
            async: false,
            success: function (data){
                readConfigApiUrl.fileContents = data;
            }
        });
    }
};
