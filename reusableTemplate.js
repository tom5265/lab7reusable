var library = (function () {
    return {
        // Utility --- Complete Functions Below
        identity: function (val) {
            return val;
        },

        // Collections --- Complete Functions Below
        each: function (list, iterator) {          
           

        },

        filter: function (list, test) {
            var eve = [];
            var odd = [];
            for (var i = 0; i < list.length; i++) {
                if (test(list[i]) == true) {
                    eve.push(list[i]);
                } else {
                    odd.push(list[i]);
                }
            }
            return eve;
            return odd;

        },
        reject: function (list, test) { 
            var eve = [];
            var odd = [];
            for (var i = 0; i < list.length; i++) {
                if (test(list[i]) == true) {
                    eve.push(list[i]);
                } else {
                    odd.push(list[i]);
                }
            }
            
            return odd;
        },

        map: function (list, iterator) {

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

        every: function (list, iterator) {
            var x;
            if (list[x] == true) {

            }
        },

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




