
    $("#top-banner-max-toggle").on("click", function () {
        $("#top-banner-max").slideUp(function () {
            $("#top-banner-min").css("display", "block");
        });
    })
    setTimeout(function(){
        $("#top-banner-max-toggle").click()
    },5000)
    $("#top-banner-min-close").on("click", function () {
        $("#top-banner-min").remove();
    })
    
    function getstyle(ele, item) {
        if (getComputedStyle) {
            return getComputedStyle(ele)[item];
        } else {
            return ele.currentStyle[itme];
        }
    }
    function move(ele, item, num) {
        clearInterval(ele.time);
        ele.time = setInterval(function () {
            if (item = "opacity") {
                var inow = parseInt(getstyle(ele, item) * 100);
            } else {
                var inow = parseInt(getstyle(ele, item));
            }
            var speed = (num - inow) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (inow == item) {
                clearInterval(ele.time)
            } else {
                if (item == "opacity") {
                    ele.style[item] = (inow + speed) / 100
                } else {
                    ele.style[item] = inow + speed + "px"
                }
            }
        }, 30)
    }

    $("#hungBar-top").css("display","none");
    window.onscroll = function(){
        var scrollTop = document.documentElement.
        scrollTop || document.body.scrollTop;
        if(scrollTop>1500){
            $("#hungBar-top").css("display","block");
        }else{
            $("#hungBar-top").css("display","none");
        }
    }

    var oul = document.getElementById("index_slider").children[0];
    var oli = oul.children;
    oli = [].slice.call(oli);
    var obtnlist = document.getElementsByClassName("ec-slider-nav-1");
    var ospan = obtnlist[0].children;
    ospan = [].slice.call(ospan);
    
    
    
    var now = 0;
    var index = 0;
    $(".button-slider-next").on("click", function () {
        now = index;
        if (index == oli.length - 1) {
            index = 0;
        } else {
            index++;
        }
        oli[index].style.zIndex = 2;
        oli[now].style.opacity = 100;
        move(oli[now], "opacity", 0);
        oli[index].style.opacity = 0;
        move(oli[index], "opacity", 100)
        console.log(index, now);
        // console.log(oli[index]);
        for (var i = 0; i < ospan.length; i++) {
            $(ospan[i]).removeClass("current")
        }
        $(ospan[index]).addClass("current")
    })
    
    $(".button-slider-prev").on("click", function () {
        // console.log(index,now);
    
        now = index;
        if (index == 0) {
            index = oli.length - 1;
        } else {
            index--;
        }
        console.log(index, now);
        oli[index].zIndex = 2;
        oli[now].style.opacity = 100;
        move(oli[now], "opacity", 0);
        oli[index].style.opacity = 0;
        move(oli[index], "opacity", 100)
        for (var i = 0; i < ospan.length; i++) {
            $(ospan[i]).removeClass("current")
        }
        $(ospan[index]).addClass("current")
    })
    
    ospan.forEach(function (ele, after) {
        ele.onmouseover = function () {
            console.log(after, index)
            if (after == index) {
                return
            } else {
                // oli[index].style.zIndex = 1;
                oli[after].style.zIndex = 2;
                oli[index].style.opacity = 100;
                move(oli[index], "opacity", 0);
                oli[after].style.opacity = 0;
                move(oli[after], "opacity", 100);
                index = after;
            }
            for (var i = 0; i < ospan.length; i++) {
                $(ospan[i]).removeClass("current")
            }
            $(this).addClass("current")
        }
    
    
    })
    $("#search-kw").on("click", function () {
        $("#search-bar-key").css("display", "none");
    })
    

    var tt;
    var obox= document.getElementsByClassName("hot-board");
    tt=setInterval(function(){
         $(".button-slider-next").click();
    },2000)
    // obox[0].onmouseover = $(".button-slider-prev").mouseover = $(".button-slider-next").mouseover =function(){
    //     clearInterval(tt)
    // }
    // obox[0].onmouseout =  $(".button-slider-prev").mouseout = $(".button-slider-next").mouseout =function(){
    //     clearInterval(tt)
    //     tt=setInterval( $(".button-slider-next").on("click"),2000)
    // }  

    obox[0].onmouseover = function(){
        clearInterval(tt)
    }
    obox[0].onmouseout = function(){
        clearInterval(tt)
        tt=setInterval(function(){
            $(".button-slider-next").click();
       },2000)
    }

    $(".button-slider-next").on("mouseover" ,function(){
        clearInterval(tt)
    })

    $(".button-slider-prev").on("mouseover" ,function(){
        clearInterval(tt)
    })

    $(".button-slider-next").on("mouseout" ,function(){
        clearInterval(tt)
        tt=setInterval( $(".button-slider-next").on("click"),2000)
    })
    $(".button-slider-prev").on("mouseout" ,function(){
        clearInterval(tt)
        tt=setInterval( $(".button-slider-next").on("click"),2000)
    })