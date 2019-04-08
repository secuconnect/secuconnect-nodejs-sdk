'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ApiClient = require('../ApiClient');

var _ApiClient2 = _interopRequireDefault(_ApiClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The GeneralMerchantsUrls model module.
 * @module model/GeneralMerchantsUrls
 */
var GeneralMerchantsUrls = function () {
    /**
     * Constructs a new <code>GeneralMerchantsUrls</code>.
     * @alias module:model/GeneralMerchantsUrls
     * @class
     */

    function GeneralMerchantsUrls() {
        _classCallCheck(this, GeneralMerchantsUrls);

        this.type = undefined;
        this.url = undefined;
    }

    /**
    * Constructs a <code>GeneralMerchantsUrls</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/GeneralMerchantsUrls} obj Optional instance to populate.
    * @return {module:model/GeneralMerchantsUrls} The populated <code>GeneralMerchantsUrls</code> instance.
    */


    _createClass(GeneralMerchantsUrls, null, [{
        key: 'constructFromObject',
        value: function constructFromObject(data, obj) {
            if (data) {
                obj = obj || new GeneralMerchantsUrls();

                if (data.hasOwnProperty('type')) {
                    obj['type'] = _ApiClient2.default.convertToType(data['type'], 'String');
                }
                if (data.hasOwnProperty('url')) {
                    obj['url'] = _ApiClient2.default.convertToType(data['url'], 'String');
                }
            }
            return obj;
        }

        /**
         * Type of urls
         * @member {String} type
         */


        /**
         * Url
         * @member {String} url
         */

    }]);

    return GeneralMerchantsUrls;
}();

exports.default = GeneralMerchantsUrls;