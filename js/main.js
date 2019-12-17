$(() => {
    const img = $('img');
    let isPlaying = false;

    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            if (!isPlaying) {
                isPlaying = true;
                img.fadeTo(1000, 0.25)
                    .fadeTo(1000, 1, () => isPlaying = false);
            }
        } else if (e.keyCode === 27) {
            // Escape. (esc)
            if (!isPlaying) {
                isPlaying = true;
                img.hide(1000)
                    .show(1000, () => isPlaying = false);
            }
        } else if (e.keyCode === 83) {
            // Slide. (s)
            if (!isPlaying) {
                isPlaying = true;
                img.slideUp(1000)
                    .slideDown(1000, () => isPlaying = false);
            }
        }
    });
});

//