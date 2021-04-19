
$(document).ready(function(){
    $('.ano-div').click(function(){
        var id = $(this).attr("id");
        $("#" + id + "_port").toggle();
    })
}),

$(function() {
        let anos = $(".ano-div[id=2020]").on('click', function() {
            $('.ano-div').toggle();
            $(this).show();
        }
        )}
)
