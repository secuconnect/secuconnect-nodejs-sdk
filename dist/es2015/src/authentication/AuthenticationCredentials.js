"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthenticationCredentials = function () {
    function AuthenticationCredentials() {
        _classCallCheck(this, AuthenticationCredentials);
    }

    _createClass(AuthenticationCredentials, [{
        key: "getCredentials",
        value: function getCredentials() {
            return this.credentials;
        }
    }, {
        key: "setCredentials",
        value: function setCredentials(credentials) {
            this.credentials = credentials;
        }
    }, {
        key: "getUniqueKey",
        value: function getUniqueKey() {}
    }]);

    return AuthenticationCredentials;
}();

exports.default = AuthenticationCredentials;


AuthenticationCredentials.credentials = {};