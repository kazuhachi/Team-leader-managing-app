$(document).ready(function(){
    //initialize navigation state "collapsed or uncollapsed"

    let body = $(".right-body");
    let navigation = $(".left-body");
    
    if (localStorage.getItem("isNavigationCollapsed") === null){
        localStorage.setItem("isNavigationCollapsed", false)
        

    }else{
        let isNavigationCollapsed = localStorage.getItem("isNavigationCollapsed");
        
        // bool true doesnt worked. uses string instead
        if (isNavigationCollapsed == "true"){
            setTimeout(function(){
                collapseNavigation();
            },1000)
        }else{
            
            uncollapseNavigation();
        }
    }



    // navigation toggler
    $(".navigation-toggler").on("click", function(){
        toggleNavigation();
    })

    // uncollapsed navigation when hover
    $(".left-body").on("mouseover", function(){
        // $(this).removeClass("shrinked");
    })

    function toggleNavigation(){


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
    }

    function uncollapseNavigation(){
        navigation.removeClass("shrinked");
    }



    // navigation hides when min width has reached
    // basically tooggles
    $(window).on("resize", function(){
        let windowWidth = $(window).width();
        console.log(windowWidth);
        if (windowWidth <= 800){
            if (localStorage.getItem("isNavigationCollapsed") === null){
                localStorage.setItem("isNavigationCollapsed", true)
                navigation.addClass("shrinked")
            }else{
                if (localStorage.getItem("isNavigationCollapsed") == "false"){
                    
                    localStorage.setItem("isNavigationCollapsed", true)
                    navigation.addClass("shrinked")
                }
            }
        }
        else{
            if (localStorage.getItem("isNavigationCollapsed") === null){
                localStorage.setItem("isNavigationCollapsed", false)
                navigation.removeClass("shrinked")
            }else{
                if (localStorage.getItem("isNavigationCollapsed") == "true"){
                    
                    localStorage.setItem("isNavigationCollapsed", false)
                    navigation.removeClass("shrinked")
                }
            }
        }
    })

})