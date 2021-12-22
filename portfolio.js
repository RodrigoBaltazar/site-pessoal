let ano_2021 = document.getElementById('2021');
let ano_2020 = document.getElementById('2020');
let ano_2019 = document.getElementById('2019');

let hide_2021 = document.getElementById("2021_port");
let hide_2020 = document.getElementById("2020_port");
let hide_2019 = document.getElementById("2019_port");

ano_2021.onclick = function(){
    if(hide_2021.hidden != false){
        hide_2021.hidden = false;
    }else{
        hide_2021.hidden = true;
    }
}

ano_2020.onclick = function(){
    if(hide_2020.hidden != false){
        hide_2020.hidden = false;
    }else{
        hide_2020.hidden = true;
    }
}

ano_2019.onclick = function(){
    if(hide_2019.hidden != false){
        hide_2019.hidden = false;
    }else{
        hide_2019.hidden = true;
    }
}




/*$(document).ready(function(){
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
*/