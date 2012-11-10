var gm = require('gm');

if (Number(gm.version.replace(/\./g, '')) < 160) {
    throw new Error('Version 1.6.0 or higher of "gm" module is required.')
}

gm.prototype.buffer = function(callback) {
    this.stream(function(err, stdout) {
        var buf = '';

        if (err) {
            return callback(err);
        }

        stdout
            .on('data', function(data) {
                buf += data.toString('binary');
            })
            .on('end', function() {
                callback(null, new Buffer(buf, 'binary'));
            });
    });

    return this;
};
