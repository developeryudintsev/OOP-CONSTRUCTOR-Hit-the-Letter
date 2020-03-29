function Constructor() {
    this.LRCoordinat = 0;
    this.DUCoordinat = 0;
    this.rightCoordinat = 0;
    this.DownCoordinat = 0;
    this.leftCoordinat = 0;
    this.upCoordinat = 0;


    this.start = function () {
        currentThis = this;//что бы работали переменные в прототипе!!
        $('#move').html('O')
        let muClick = setInterval(this.engine, 100)
        let myClickPlus = null;
        let caunter = 0;
        $('#move').click(function () {
            caunter++;
            if (caunter === 1) {
                clearInterval(muClick)
                myClickPlus = setInterval(currentThis.engine, 60);
            } else if (caunter === 2) {
                clearInterval(myClickPlus)
                myClickPlus = setInterval(currentThis.engine, 20);
            } else if (caunter === 3) {
                clearInterval(myClickPlus)
                $('#move').html('You are win!')
            }
        })
    }
}
Constructor.prototype.engine = function () {
    if (currentThis.rightCoordinat === 0 && currentThis.DownCoordinat === 0 && currentThis.leftCoordinat === 0 && currentThis.upCoordinat === 0) {
        $('#move').offset({ left: currentThis.LRCoordinat })
        currentThis.LRCoordinat++;
        if (currentThis.LRCoordinat === 60) {
            currentThis.rightCoordinat = 1
        }
    }
    if (currentThis.rightCoordinat === 1 && currentThis.DownCoordinat === 0 && currentThis.leftCoordinat === 0 && currentThis.upCoordinat === 0) {
        $('#move').offset({ top: currentThis.DUCoordinat })
        currentThis.DUCoordinat++;
        if (currentThis.DUCoordinat === 60) {
            currentThis.DownCoordinat = 1;
        }
    }
    if (currentThis.rightCoordinat === 1 && currentThis.DownCoordinat === 1 && currentThis.leftCoordinat === 0 && currentThis.upCoordinat === 0) {
        $('#move').offset({ left: currentThis.LRCoordinat })
        currentThis.LRCoordinat--;
        if (currentThis.LRCoordinat === 0) {
            currentThis.leftCoordinat = 1;
        }
    }
    if (currentThis.rightCoordinat === 1 && currentThis.DownCoordinat === 1 && currentThis.leftCoordinat === 1 && currentThis.upCoordinat === 0) {
        $('#move').offset({ top: currentThis.DUCoordinat })
        currentThis.DUCoordinat--;
        if (currentThis.DUCoordinat === 0) {
            currentThis.upCoordinat = 1;
        }
    }
    if (currentThis.rightCoordinat === 1 && currentThis.DownCoordinat === 1 && currentThis.leftCoordinat === 1 && currentThis.upCoordinat === 1) {
        $('#move').offset({ left: currentThis.LRCoordinat })
        currentThis.LRCoordinat++;
        if (currentThis.LRCoordinat === 60) {
            currentThis.rightCoordinat = 1;
            currentThis.DownCoordinat = 0;
            currentThis.leftCoordinat = 0;
            currentThis.upCoordinat = 0;
        }
    }


}