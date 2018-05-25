
$(function(){
    var t = null;
    var t1 = null;
    var t2= null;
    var t3 = null;
    var t4= null;


    $("#zxnav_0").mouseenter(function(){
        setTimeout(function(){
            $("#naverSub00")
            .stop(true)
            .slideDown("normal")
        },100)
        
    })
    $("#zxnav_0").mouseleave(function(){
        clearTimeout(t)
        t=setTimeout(function(){
            $("#naverSub00").css("display","none")
        },100)
    })
    $("#naverSub00").mouseenter(function(){
        clearTimeout(t)
        $("#naverSub00").css("display","block")
    })
    $("#naverSub00").mouseleave(function(){
        $("#naverSub00").css("display","none")
    })


    $("#zxnav_1").mouseenter(function(){
        setTimeout(function(){
            $("#naverSub01")
            .stop(true)
            .slideDown("normal")
        },100)
        
    })
    $("#zxnav_1").mouseleave(function(){
        clearTimeout(t1)
        t1=setTimeout(function(){
            $("#naverSub01").css("display","none")
        },100)
    })
    $("#naverSub01").mouseenter(function(){
        clearTimeout(t1)
        $("#naverSub01").css("display","block")
    })
    $("#naverSub01").mouseleave(function(){
        $("#naverSub01").css("display","none")
    })

    $("#search-kw").on("click", function () {
        $("#search-bar-key").css("display", "none");
    })
    
    //  $("#zxnav_2").mouseenter(function(){
    //     setTimeout(function(){
    //         $("#naverSub02")
    //         .stop(true)
    //         .slideDown("normal")
    //     },100)
        
    // })
    // $("#zxnav_2").mouseleave(function(){
    //     clearTimeout(t)
    //     t=setTimeout(function(){
    //         $("#naverSub02").css("display","none")
    //     },100)
    // })
    // $("#naverSub02").mouseenter(function(){
    //     clearTimeout(t)
    //     $("#naverSub02").css("display","block")
    // })
    // $("#naverSub02").mouseleave(function(){
    //     $("#naverSub02").css("display","none")
    // })

    // $("#zxnav_3").mouseenter(function(){
    //     setTimeout(function(){
    //         $("#naverSub03")
    //         .stop(true)
    //         .slideDown("normal")
    //     },100)
        
    // })
    // $("#zxnav_3").mouseleave(function(){
    //     clearTimeout(t)
    //     t=setTimeout(function(){
    //         $("#naverSub03").css("display","none")
    //     },100)
    // })
    // $("#naverSub03").mouseenter(function(){
    //     clearTimeout(t)
    //     $("#naverSub03").css("display","block")
    // })
    // $("#naverSub03").mouseleave(function(){
    //     $("#naverSub03").css("display","none")
    // })


    // $("#zxnav_4").mouseenter(function(){
    //     setTimeout(function(){
    //         $("#naverSub04")
    //         .stop(true)
    //         .slideDown("normal")
    //     },100)
        
    // })
    // $("#zxnav_4").mouseleave(function(){
    //     clearTimeout(t)
    //     t=setTimeout(function(){
    //         $("#naverSub04").css("display","none")
    //     },100)
    // })
    // $("#naverSub04").mouseenter(function(){
    //     clearTimeout(t)
    //     $("#naverSub04").css("display","block")
    // })
    // $("#naverSub04").mouseleave(function(){
    //     $("#naverSub04").css("display","none")
    // })


})