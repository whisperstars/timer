function Timer(dom_elem) {
    var time_interval = 10,

    addZero = function(number) {
        return (number < 10)? '0' + number : number;
    },

    getShortTime = function() {
        var date = new Date();
        time_interval = 1000;

        return addZero(date.getHours()) + ':' + addZero(date.getMinutes());
    },

    getFullTime = function() {
        var date = new Date();
        time_interval = 10;

        return addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds());
    },

    getDate = function() {
        var date = new Date();
        time_interval = 1000*60;

        return addZero((date.getMonth() + 1)) + ':' + addZero(date.getDate()) + ':' + (date.getFullYear() + '').substr(2);
    },

    mod = getShortTime,

    writeTime = function(time_format) {
        var root = dom_elem;

        root.innerHTML = time_format;
    },

    eventsHandler = function(){
        var clickEvent = function(e) {
                stopDefault(e);

                if(mod === getShortTime) {
                    mod = getFullTime;
                } else if(mod === getFullTime) {
                    mod = getShortTime;
                }
            },

            contextMenuEvent = function(e) {
                stopDefault(e);

                if(mod === getShortTime || mod === getFullTime) {
                    mod = getDate;
                } else if(mod === getDate) {
                    mod = getShortTime;
                }
            };

        addEvent(dom_elem, 'click', clickEvent);
        addEvent(dom_elem, 'contextmenu', contextMenuEvent);
    },

    start = function() {
        eventsHandler();

        setInterval(function() {
                       writeTime(mod());
                    }, time_interval);
    };

    start();
    
    return this;
}