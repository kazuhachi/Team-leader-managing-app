$(document).ready(function(){
    $(".tab-item-button").on("click", function(){
        let targetElementId = $(this).attr("data-tab-target-id");
        let tabContainer = $(this).closest(".tab-container");
        let tabContentItems = tabContainer.find(".tab-content-item");

        // marked as seleted then unselect siblings
        $(this).addClass("selected");
        $(this).siblings().removeClass("selected")
        
        tabContentItems.each(function(){
            if ($(this).attr("id") == targetElementId){
                $(this).css({
                    "display" : "block"
                })
            }else{
                $(this).css({
                    "display" : "none"
                })
            }
        })
    })
})