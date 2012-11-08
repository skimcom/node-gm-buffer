var gm = require('gm');

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
