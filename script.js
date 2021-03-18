
var input = $("#my_todo");

input.keydown(function(e){
    
    if (e.which == 13) {
        var testo = $(this).val();
        
        if (testo != "") {
            var template = $(".template li").clone();

            template.prepend(testo);
            $(".todo_wrap ul").append(template);
            $(this).val("");
            
        }

    }
});
//rimuovo il div anche se è generato
$(document).on("click", ".close", function(){

    $(this).parent().remove();

});