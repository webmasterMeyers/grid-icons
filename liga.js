/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'download': '&#xe9c7;',
            'upload': '&#xe9c8;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'home': '&#xe900;',
            'house': '&#xe900;',
            'pencil': '&#xe905;',
            'write': '&#xe905;',
            'edit': '&#xe905;',
            'camera': '&#xe90f;',
            'photo': '&#xe90f;',
            'user-plus': '&#xe973;',
            'user-minus': '&#xe974;',
            'pie-chart': '&#xe99a;',
            'stats': '&#xe99a;',
            'stats-dots': '&#xe99b;',
            'stats2': '&#xe99b;',
            'stats-bars': '&#xe99c;',
            'stats3': '&#xe99c;',
            'bin': '&#xe9ac;',
            'trashcan': '&#xe9ac;',
            'delete': '&#xe9ac;',
            'switch': '&#xe9b6;',
            'power': '&#xe9b6;',
            'logout': '&#xe9b6;',
            'star': '&#xe9d9;',
            'heart': '&#xe9da;',
            'like': '&#xe9da;',
            'man': '&#xe9dc;',
            'male': '&#xe9dc;',
            'woman': '&#xe9dd;',
            'female': '&#xe9dd;',
            'error': '&#xea07;',
            'warning': '&#xea08;',
            'question': '&#xea09;',
            'help': '&#xea09;',
            'info': '&#xea0c;',
            'information': '&#xea0c;',
            'cross': '&#xea0f;',
            'cancel': '&#xea0f;',
            'checkmark': '&#xea10;',
            'tick': '&#xea10;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
