var library = (function () {
    return {
        // Utility --- Complete Functions Below
        identity: function (val) {
            return val;
        },

        // Collections --- Complete Functions Below
        each: function (list, iterator) {
            list = ['dog', 'cat', 'fish'];
            for (var i = 0; i < list.length; i++) {
                iterator(list[i], i, list);
            }

        },

        filter: function (list, test) {
            var results = [];
            
            for (var i = 0; i < list.length; i++) {
                if (list[i] > test) {
                    results.push(list[i]);
                }
            }
            return results;
        },
        reject: function (list, test) { },

        map: function (list, iterator) {
            var array = [];
            for (i = 0; i < list.length; i++) {
                array.push(iterator(list[i], i, list));
            }
            return array;
        },

        pluck: function (list, key) {
            return this.map(list, function (item) {
                return item[key];
            });
        },
        reduce: function (list, iterator, accumulator) {
        for (var i = 0; i < list.length; i++) {
            accumulator = iterator(list[i], accumulator);
        }
        return accumulator;
        },

        every: function (list, iterator) { },

        some: function (list, iterator) { },

        contains: function (list, target) {
            for (var e in list) {
                if (list[e] == target) {
                    return true;
                }
            }
            return false;
        },

        // Advanced Collections --- Complete Functions Below
        shuffle: function (array) { },

        invoke: function (list, methodName, args) { },

        sortBy: function (list, iterator) { },

        // Objects --- Complete Functions Below
        extend: function (obj) { },

        defaults: function (obj) { },

        // Arrays --- Complete Functions Below
        first: function (array, n) {
            return n === undefined ? array[0] : array.slice(0, n);
        },

        last: function (array, n) { },

        indexOf: function (array, target) {
            return array.indexOf(target);
        },

        uniq: function (array) { },

        // Advanced Arrays --- Complete Functions Below
        zip: function () { },

        flatten: function (nestedArray, result) { },

        intersection: function () { },

        difference: function (array) { },

        // Functions --- Complete Functions Below
        once: function (func) { },

        memoize: function (func) {

        },

        delay: function (func, wait) { }
    }
})();




