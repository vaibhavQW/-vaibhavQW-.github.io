$(document).ready(function(){
    $('#btncontainer').on("click",function(){
        $('#links').css('height','240px');
        setTimeout(function(){
            $('#links').css('height','0px');
        },3000);
    });
});