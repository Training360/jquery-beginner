$(() => {
    $(window).on('keyup', (e) => {
        // Pause. (p)
        if (e.keyCode === 80) {
            console.log('paused');
        } else if (e.keyCode === 27) {
            console.log('cancelled');
        }
    });
});