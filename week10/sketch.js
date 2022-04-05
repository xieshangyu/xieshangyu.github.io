var id = null;

function myMove() {
    var elem = document.getElementById("myAnimation1");
    var pos = 0;
    var state = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    // elem.style.left = '100px';

    function frame() {
        if (pos == 150 && state == 0) {
            // clearInterval(id);
            state = 1;
        }
        if (state == 1) {
            // clearInterval(id);
            pos--;
            elem.style.top = pos + 'px';
            // elem.style.left = pos + 'px';
        }
        if (pos == 0 && state == 1) {
            // clearInterval(id);
            state = 0;
        }
        if (state == 0) {
            // clearInterval(id);
            pos++;
            elem.style.top = pos + 'px';
            // elem.style.left = pos + 'px';
        }
    }
}


function myMove2() {
    var elem = document.getElementById("myAnimation2");
    var pos = 0;
    var state = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    // elem.style.left = '100px';

    function frame() {
        if (pos == 150 && state == 0) {
            // clearInterval(id);
            state = 1;
        }
        if (state == 1) {
            // clearInterval(id);
            pos--;
            elem.style.left = pos + 'px';
            // elem.style.left = pos + 'px';
        }
        if (pos == 0 && state == 1) {
            // clearInterval(id);
            state = 0;
        }
        if (state == 0) {
            // clearInterval(id);
            pos++;
            elem.style.left = pos + 'px';
            // elem.style.left = pos + 'px';
        }
    }
}