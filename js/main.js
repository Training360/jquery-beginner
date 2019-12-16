$(() => {
    const img = $('img');
    let isPlaying = false;

    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            console.log('paused');
        } else if (e.keyCode === 27) {
            // Escape. (esc)
            if (!isPlaying) {
                isPlaying = true;
                img.hide(1000)
                    .show(1000, () => isPlaying = false);
            }
        }
    });
});