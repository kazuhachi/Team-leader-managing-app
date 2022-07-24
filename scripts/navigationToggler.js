// alert()

$("body left-body").addClass("shrinked");

$(document).ready(function(){
    //initialize navigation state "collapsed or uncollapsed"
    let body = $(".right-body");
    let navigation = $(".left-body");
    let topHeader = $(".header-container");
    let mainContainer = $(".main-content-container");

    toggleOnWindowResize();
    
    // if (localStorage.getItem("isNavigationCollapsed") === null){
    //     localStorage.setItem("isNavigationCollapsed", false)
        

    // }else{
    //     let isNavigationCollapsed = localStorage.getItem("isNavigationCollapsed");
        
    //     // bool true doesnt worked. uses string instead
    //     if (isNavigationCollapsed == "true"){
    //         setTimeout(function(){
    //             collapseNavigation();
    //         },0)
    //     }else{
            
    //         uncollapseNavigation();
    //     }
    // }



    // navigation toggler
    $(".navigation-toggler").on("click", function(){
        toggleNavigation();
    })

    // uncollapsed navigation when hover
    $(".left-body").on("mouseover", function(){
        // $(this).removeClass("shrinked");
    })

    function toggleNavigation(){

        let windowSize = $(window).width();
        let isOnMobileWidth = false;
        if (windowSize <= 800){
            isOnMobileWidth = true;
        }


        if (localStorage.getItem("isNavigationCollapsed") === null){
            localStorage.setItem("isNavigationCollapsed", true)
            collapseNavigation();

        }else{
            let isNavigationCollapsed = localStorage.getItem("isNavigationCollapsed");
            
            // bool true doesnt worked. uses string instead
            if (isNavigationCollapsed == "true"){
                uncollapseNavigation();
                localStorage.setItem("isNavigationCollapsed", false)
            }else{
                collapseNavigation();
                
                localStorage.setItem("isNavigationCollapsed", true)
            }
        }

            

    }

    function collapseNavigation(){

        
        navigation.addClass("shrinked");
        topHeader.addClass("widened");
        body.addClass("widened");
    }

    function uncollapseNavigation(){
        let windowWidth = $(window).width();
        if (!(windowWidth <= 800)){
            topHeader.removeClass("widened");
            body.removeClass("widened");
        }
        navigation.removeClass("shrinked");
        
    }



    // navigation hides when min width has reached
    // basically tooggles
    $(window).on("resize", function(){
        toggleOnWindowResize();
    })

    function toggleOnWindowResize(){
        let windowWidth = $(window).width();
        console.log(windowWidth);
        if (windowWidth <= 800){
            // make left slider 100% on width 
            $(".left-body").addClass("is-on-mobile-width");

            if (localStorage.getItem("isNavigationCollapsed") === null){
                localStorage.setItem("isNavigationCollapsed", true)
                collapseNavigation()
            }else{
                if (localStorage.getItem("isNavigationCollapsed") == "false"){
                    
                    localStorage.setItem("isNavigationCollapsed", true)
                    collapseNavigation()
                }
            }
        }
        else{
            // remove left slider 100% on width 
            $(".left-body").removeClass("is-on-mobile-width");


            if (localStorage.getItem("isNavigationCollapsed") === null){
                localStorage.setItem("isNavigationCollapsed", false)
                uncollapseNavigation()
            }else{
                if (localStorage.getItem("isNavigationCollapsed") == "true"){
                    
                    localStorage.setItem("isNavigationCollapsed", false)
                    uncollapseNavigation()
                }
            }
        }
    }

})