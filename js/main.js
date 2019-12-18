$(() => {
    // Global functions.
    const set = (key, value) => localStorage.setItem(key, value);
    const get = key => localStorage.getItem(key);
    const increase = el => set(el, parseInt(get(el), 10), +1);
    const decrease = el => set(el, parseInt(get(el), 10), -1);

    // Global variables.
    const Game = $('#g');

    const startScreen = (text) => {
        Game
            .removeAttr('class')
            .empty();
        $('.logo').fadeIn(250);

        $('.c1').text(text.substring(0, 1));
        $('.c2').text(text.substring(1, 2));
        $('.c3').text(text.substring(2, 3));
        $('.c4').text(text.substring(3, 4));
    }

    // Init cards and set events.
    const initCards = () => {
        $('.logo .card:not(".twist")').on('click', (e) => {
            e.preventDefault();
            $(e.currentTarget)
                .toggleClass('active')
                .siblings('.card')
                .not('.twist')
                .removeClass('active');
        });
    };

    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            if (Game.attr('data-paused') === '1') {
                Game.attr('data-paused', '0');
                $('.timer').css('animation-play-state', 'running');
                $('.pause').remove();
            } else {
                Game.attr('data-paused', '1');
                $('.timer').css('animation-play-state', 'paused');
                Game.after('<div class="pause"></div>');
            }

        } else if (e.keyCode === 27) {
            // Escape. (esc)
            startScreen('flip');
            if (Game.attr('data-paused') === '1') {
                Game.attr('data-paused', '0');
                $('.pause').remove();
            }
            $(window).off();
        }
    });

    // Init timer.
    const initTimer = (timer) => {
        $('<i class="timer"></i>')
            .prependTo(Game)
            .css({ animation: `timer ${timer}ms liner` })
            .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', e => {
                startScreen('fail');
            });
    };

    // Init game.
    (() => {
        startScreen('flip');
        initCards();
    })();
});