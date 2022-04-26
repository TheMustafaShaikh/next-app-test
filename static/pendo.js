if (typeof window !== 'undefined') {
    var apiKey = "cdecd6f3-ae77-4a46-63fd-e471301fea59";
    (function(apiKey) {
        (async function(p, e, n, d, o) {
            var v, w, x, y, z;
            o = p[d] = p[d] || {};
            o._q = o._q || [];
            v = ["initialize", "identify", "updateOptions", "pageLoad", "track"];
            for (w = 0, x = v.length; w < x; ++w)
                (function(m) {
                    o[m] =
                        o[m] ||
                        function() {
                            o._q[m === v[0] ? "unshift" : "push"](
                                [m].concat([].slice.call(arguments, 0))
                            );
                        };
                })(v[w]);
            y = e.createElement(n);
            y.async = !0;
            y.src = await "https://cdn.pendo.io/agent/static/" + "cdecd6f3-ae77-4a46-63fd-e471301fea59" + "/pendo.js";
            z = e.getElementsByTagName(n)[0];
            z.parentNode.insertBefore(y, z);
        })(window, document, "script", "pendo")
    })("cdecd6f3-ae77-4a46-63fd-e471301fea59");
}