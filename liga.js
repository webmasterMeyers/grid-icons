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
            'phone': '&#xe900;',
            'landline': '&#xe900;',
            'mobile': '&#xe905;',
            'cellular': '&#xe905;',
            'png': '&#xe901;',
            'pdf': '&#xe902;',
            'jpg': '&#xe903;',
            'bmp': '&#xe904;',
            'gif': '&#xe906;',
            'download': '&#xe9c7;',
            'upload': '&#xe9c8;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'home': '&#xe907;',
            'house': '&#xe907;',
            'pencil': '&#xe908;',
            'write': '&#xe908;',
            'edit': '&#xe908;',
            'camera': '&#xe910;',
            'photo': '&#xe910;',
            'user-plus': '&#xe974;',
            'user-minus': '&#xe977;',
            'pie-chart': '&#xe99a;',
            'stats': '&#xe99a;',
            'stats-dots': '&#xe99b;',
            'stats2': '&#xe99b;',
            'stats-bars': '&#xe99c;',
            'stats3': '&#xe99c;',
            'bin': '&#xe9ad;',
            'trashcan': '&#xe9ad;',
            'delete': '&#xe9ad;',
            'switch': '&#xe9b6;',
            'power': '&#xe9b6;',
            'logout': '&#xe9b6;',
            'heart': '&#xe9db;',
            'like': '&#xe9db;',
            'man': '&#xe9de;',
            'male': '&#xe9de;',
            'woman': '&#xe9df;',
            'female': '&#xe9df;',
            'error': '&#xea08;',
            'warning': '&#xea09;',
            'question': '&#xea0b;',
            'help': '&#xea0b;',
            'info': '&#xea0d;',
            'information': '&#xea0d;',
            'cross': '&#xea11;',
            'cancel': '&#xea11;',
            'checkmark': '&#xea12;',
            'tick': '&#xea12;',
            'images': '&#xe90e;',
            'pictures': '&#xe90e;',
            'bullhorn': '&#xe91a;',
            'megaphone': '&#xe91a;',
            'file-text': '&#xe922;',
            'file': '&#xe922;',
            'profile': '&#xe923;',
            'file2': '&#xe923;',
            'location': '&#xe947;',
            'map-marker': '&#xe947;',
            'clock': '&#xe94e;',
            'time': '&#xe94e;',
            'printer': '&#xe954;',
            'print': '&#xe954;',
            'drawer': '&#xe95c;',
            'box': '&#xe95c;',
            'drawer2': '&#xe95d;',
            'box2': '&#xe95d;',
            'undo': '&#xe965;',
            'ccw': '&#xe965;',
            'redo': '&#xe966;',
            'cw': '&#xe966;',
            'bubbles': '&#xe970;',
            'comments': '&#xe970;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'user-check': '&#xe975;',
            'user4': '&#xe975;',
            'user-tie': '&#xe976;',
            'user5': '&#xe976;',
            'spinner': '&#xe984;',
            'loading': '&#xe984;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'clipboard': '&#xe9b8;',
            'board': '&#xe9b8;',
            'sphere': '&#xe9c9;',
            'globe': '&#xe9c9;',
            'attachment': '&#xe9cd;',
            'paperclip': '&#xe9cd;',
            'star-empty': '&#xe9d7;',
            'star': '&#xe9d9;',
            'blocked': '&#xea0e;',
            'forbidden': '&#xea0e;',
            'arrow-up': '&#xea3a;',
            'up': '&#xea3a;',
            'arrow-right': '&#xea3c;',
            'right': '&#xea3c;',
            'arrow-down': '&#xea3e;',
            'down': '&#xea3e;',
            'arrow-left': '&#xea40;',
            'left': '&#xea40;',
            'checkbox-unchecked': '&#xea53;',
            'checkbox2': '&#xea53;',
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
