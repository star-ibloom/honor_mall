function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    }
    else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, json, fnEnd) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var bStop = true;
        for (var attri in json) {
            var cur = 0;
            if (attri == 'opacity') {
                cur = Math.round(parseFloat(getStyle(obj, attri)) * 100);
            }
            else {
                cur = parseInt(getStyle(obj, attri));
            }

            var speed = (json[attri] - cur) / 6;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (cur != json[attri]) {
                bStop = false;
            }

            if (attri == 'opacity') {
                obj.style.opacity = (cur + speed) / 100;
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'
//                        document.title=obj.style.opacity
            }
            else {
                obj.style[attri] = cur + speed + 'px';
            }
        }
        if (bStop) {
            clearInterval(obj.timer)
            if (fnEnd) fnEnd();
        }

    }, 30);
}
