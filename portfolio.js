
$(document).ready(function(){
    $('.ano-div').click(function(){
        var id = $(this).attr("id");
        $("#" + id + "_port").toggle();
    })
})



