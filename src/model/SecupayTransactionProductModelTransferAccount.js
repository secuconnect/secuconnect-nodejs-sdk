
import ApiClient from '../ApiClient';





/**
* The SecupayTransactionProductModelTransferAccount model module.
* @module model/SecupayTransactionProductModelTransferAccount
*/
export default class SecupayTransactionProductModelTransferAccount {
    /**
    * Constructs a new <code>SecupayTransactionProductModelTransferAccount</code>.
    * The bank account the payer needs to use for his transfer
    * @alias module:model/SecupayTransactionProductModelTransferAccount
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>SecupayTransactionProductModelTransferAccount</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/SecupayTransactionProductModelTransferAccount} obj Optional instance to populate.
    * @return {module:model/SecupayTransactionProductModelTransferAccount} The populated <code>SecupayTransactionProductModelTransferAccount</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecupayTransactionProductModelTransferAccount();

            
            
            

            if (data.hasOwnProperty('iban')) {
                obj['iban'] = ApiClient.convertToType(data['iban'], 'String');
            }
            if (data.hasOwnProperty('bic')) {
                obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
            }
            if (data.hasOwnProperty('accountnumber')) {
                obj['accountnumber'] = ApiClient.convertToType(data['accountnumber'], 'String');
            }
            if (data.hasOwnProperty('bankcode')) {
                obj['bankcode'] = ApiClient.convertToType(data['bankcode'], 'String');
            }
            if (data.hasOwnProperty('account_owner')) {
                obj['account_owner'] = ApiClient.convertToType(data['account_owner'], 'String');
            }
        }
        return obj;
    }

    /**
    * IBAN
    * @member {String} iban
    */
    iban = undefined;
    /**
    * BIC
    * @member {String} bic
    */
    bic = undefined;
    /**
    * Bank account number
    * @member {String} accountnumber
    */
    accountnumber = undefined;
    /**
    * The name of the bank institute
    * @member {String} bankcode
    */
    bankcode = undefined;
    /**
    * The owner of bank account
    * @member {String} account_owner
    */
    account_owner = undefined;








}


