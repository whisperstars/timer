addEvent(window, 'load', function() {
    var dom_elem = document.getElementById('time'),

        timer = new Timer(dom_elem),
        log = new Log(dom_elem);
});