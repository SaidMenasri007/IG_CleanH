!function (a) {
    var b = Array.prototype.slice, c = {
        dict: null, missingPattern: null, load: function (b, c) {
            null !== this.dict ? a.extend(this.dict, b) : this.dict = b, c && (this.missingPattern = c)
        }, unload: function () {
            this.dict = null, this.missingPattern = null
        }, _: function (a) {
            if (dict = this.dict, dict && dict.hasOwnProperty(a)) a = dict[a]; else if (null !== this.missingPattern)return this.printf(this.missingPattern, a);
            return args = b.call(arguments), args[0] = a, this.printf.apply(this, args)
        }, printf: function (c, d) {
            return arguments.length < 2 ? c : (d = a.isArray(d) ? d : b.call(arguments, 1), c.replace(/([^%]|^)%(?:(\d+)\$)?s/g, function (a, b, c) {
                return c ? b + d[parseInt(c) - 1] : b + d.shift()
            }).replace(/%%s/g, "%s"))
        }
    };
    a.fn._t = function () {
        return a(this).html(c._.apply(c, arguments))
    }, a.i18n = c
}(jQuery);