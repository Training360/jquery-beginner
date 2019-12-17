$(() => {
    // Global functions.
    const set = (key, value) => localStorage.setItem(key, value);
    const get = key => localStorage.getItem(key);
    const increase = el => set(el, parseInt(get(el), 10), +1);
    const decrease = el => set(el, parseInt(get(el), 10), -1);

    const startScreen = (text) => {
        $('#g')
            .removeAttr('class')
            .empty();
        $('.logo').fadeIn(250);

        $('.c1').text(text.substring(0, 1));
        $('.c2').text(text.substring(1, 2));
        $('.c3').text(text.substring(2, 3));
        $('.c4').text(text.substring(3, 4));
    }

    startScreen('fail');


    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            if ($('#g').attr('data-paused') === '1') {
                $('#g').attr('data-paused', '0');
            } else {
                $('#g').attr('data-paused', '1');
            }

        } else if (e.keyCode === 27) {
            // Escape. (esc)
            startScreen('flip');
            if ($('#g').attr('data-paused') === '1') {
                $('#g').attr('data-paused', '0');
            }
            $(window).off();
        }
    });
});