

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

    // show request statistics when select in changed
    $(".popper-forms-container").on("change", "#leave-type", function(){

        
            
        $(".popper-forms-container").find(".request-statistics").css({
            display : 'flex',
            opacity : '0',
            transform : 'translateY(-50px)'
        }).animate({
            
            transform : 'translateY(0px)',
            opacity : '1'
        })
    })
        
    // next button click
    $(".popper-forms-container").on("click", ".next-button", function(){
        let previewContainer = $("body .preview-container");
        previewContainer.animate({
            bottom : 0
        })
    }).on("click", ".go-back", function(){
        let previewContainer = $("body .preview-container");
        previewContainer.animate({
            bottom : '-1000px'
        })
    })


    
})