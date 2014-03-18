function Log(dom_elem){
    var stats = {
            'Lclick' : 0,
            'Rclick' : 0
        },

        eventsHandler = function() {
                var clickEvent = function(e) {
                        stopDefault(e);

                        stats['Lclick']++;
                    },

                    contextMenuEvent = function(e) {
                        stopDefault(e);

                        stats['Rclick']++;
                    },

                    dblClickEvent = function(e) {
                        stopDefault(e);

                        stats['Lclick'] -= 2;
                        console.log(stats);
                    };

                addEvent(dom_elem, 'click', clickEvent);
                addEvent(dom_elem, 'contextmenu', contextMenuEvent);
                addEvent(dom_elem, 'dblclick', dblClickEvent);
            },

        start = function() {
            eventsHandler();
        };

    start();

    return this;
}