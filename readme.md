## A plugin for gm node module, which enables simple buffering of image binary for later content-length detection.

### Installation

    npm i gm
    npm i gm-buffer

### Usage

    var gm = require('gm');

    require('gm-buffer');

    gm('/me.jpg')
        .resize(canvas.width, canvas.height, '^')
        .gravity('Center')
        .buffer(function(err, buf) {
            console.log(buf.length);
        });
