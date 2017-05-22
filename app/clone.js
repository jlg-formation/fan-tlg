(function () {
    var a = {
        x: 3,
        y: 5,
        z: {
            u: 8
        }
    };
    var b = clone(a);
    console.log('a', a);
    console.log('b', b);
    a.z.u = 12;
    console.log('a', a);
    console.log('b', b);
    function clone(o) {
        var result = {};
        for (var p in o) {
            if (o[p] !== null && typeof o[p] === 'object') {
                result[p] = clone(o[p]);
            } else {
                result[p] = o[p];
            }
        }

        return result;
    }

})();

