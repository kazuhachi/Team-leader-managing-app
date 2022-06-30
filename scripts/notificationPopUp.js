$(document).ready(function(){
    let notificationContainer = $(".notification-list-container");
    $(".notification-button").on("click",function(){
        notificationContainer.addClass("show");

        //data-target-popper value should begin with selector reference
        // example.   #thisId  or .thisClass or element tag
        $(".body-content").prepend(`<div class="pop-wrapper-shutter" data-target-popper-elem=".notification-list-container" ></div>`)
    })
    $(".body-content").on("click",".pop-wrapper-shutter",function(){
        $(this).remove();
        let targetElement = $(this).attr("data-target-popper-elem");
        $(targetElement).removeClass("show");
    })
})