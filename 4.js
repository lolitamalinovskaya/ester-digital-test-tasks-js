for (var i = 0; i < 5; i++) {
    function a(i) {
        return setTimeout(() => {
            console.log(i);
        }, 1000);
    } a(i);
}

