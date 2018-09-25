
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionProductDTORedirectUrl model module.
* @module model/SecupayTransactionProductDTORedirectUrl
*/
export default class SecupayTransactionProductDTORedirectUrl {
    /**
    * Constructs a new <code>SecupayTransactionProductDTORedirectUrl</code>.
    * A list of redirect urls used for the payment checkout page
    * @alias module:model/SecupayTransactionProductDTORedirectUrl
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductDTORedirectUrl</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductDTORedirectUrl} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductDTORedirectUrl} The populated <code>SecupayTransactionProductDTORedirectUrl</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductDTORedirectUrl();

            
            
            

            if (data.hasOwnProperty('url_success')) {
                obj['url_success'] = ApiClient.convertToType(data['url_success'], 'String');
            }
            if (data.hasOwnProperty('url_failure')) {
                obj['url_failure'] = ApiClient.convertToType(data['url_failure'], 'String');
            }
            if (data.hasOwnProperty('url_push')) {
                obj['url_push'] = ApiClient.convertToType(data['url_push'], 'String');
            }
        }
        return obj;
    }

    /**
    * After successfully entering the cash data of the payer is returned to this page.
    * @member {String} url_success
    */
    url_success = undefined;
    /**
    * After canceling or on errors the payer will be redirected to this page and can select there an another payment method.
    * @member {String} url_failure
    */
    url_failure = undefined;
    /**
    * The secupay system will be send status change notifications to this URL.
    * @member {String} url_push
    */
    url_push = undefined;








}


