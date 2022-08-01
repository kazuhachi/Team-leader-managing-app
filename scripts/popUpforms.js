$(document).ready(function(){
    $(".add-request-leave").on("click", function(){
        $(".popper-forms-container").load("/subHTMLs/popUpForms.html");
    })

    $(".popper-forms-container").on("click", ".clickable-whole-wrapper", function(e){
        if (e.target == this){
            console.log("its the wrapperPrente")
            $(this).siblings().remove();
            $(this).remove();
        }
    }).on("click", ".form-closer-button", function(e){
        $(".popper-forms-container .clickable-whole-wrapper").click();
        
    } )
    
    
})