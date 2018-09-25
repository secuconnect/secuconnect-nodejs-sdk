
import ApiClient from '../ApiClient';
import PaymentTransactionsProductModel from './PaymentTransactionsProductModel';





/**
* The PaymentTransactionsCancelList model module.
* @module model/PaymentTransactionsCancelList
*/
export default class PaymentTransactionsCancelList {
    /**
    * Constructs a new <code>PaymentTransactionsCancelList</code>.
    * @alias module:model/PaymentTransactionsCancelList
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>PaymentTransactionsCancelList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PaymentTransactionsCancelList} obj Optional instance to populate.
    * @return {module:model/PaymentTransactionsCancelList} The populated <code>PaymentTransactionsCancelList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymentTransactionsCancelList();

            
            
            

            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [PaymentTransactionsProductModel]);
            }
        }
        return obj;
    }

    /**
    * Count of returned payment contracts
    * @member {Number} count
    */
    count = undefined;
    /**
    * POST Payment/Transactions/{paymentTransactionId}/cancel
    * @member {Array.<module:model/PaymentTransactionsProductModel>} data
    */
    data = undefined;








}


