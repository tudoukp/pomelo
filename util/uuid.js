module.exports = function() {
    var id = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz'+
                'ABCDEFGHIJKLMNOPQRSTUVWXYZ'+
                '0123456789-_';
    for (i=0; i<10; i++) {
        var index = Math.floor(Math.random() * chars.length)
        id += chars[index];
    }
    return id;
};
