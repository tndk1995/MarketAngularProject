$(document).ready(function(){
    $('#homePage footer').click(changePage);

});

function changePage(){
    $('#homePage').hide();
    $('#storePage').show();
}