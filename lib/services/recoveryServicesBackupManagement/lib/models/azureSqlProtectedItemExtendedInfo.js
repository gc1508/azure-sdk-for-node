/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the AzureSqlProtectedItemExtendedInfo class.
 * @constructor
 * Additional information for the Azure SQL specific backup item.
 *
 * @member {date} [oldestRecoveryPoint] The oldest backup copy available for
 * this item in the service.
 *
 * @member {number} [recoveryPointCount] The number of available backup copies
 * for this backup item.
 *
 * @member {string} [policyState] The state of the backup policy associated
 * with this backup item.
 *
 */
class AzureSqlProtectedItemExtendedInfo {
  constructor() {
  }

  /**
   * Defines the metadata of AzureSqlProtectedItemExtendedInfo
   *
   * @returns {object} metadata of AzureSqlProtectedItemExtendedInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureSqlProtectedItemExtendedInfo',
      type: {
        name: 'Composite',
        className: 'AzureSqlProtectedItemExtendedInfo',
        modelProperties: {
          oldestRecoveryPoint: {
            required: false,
            serializedName: 'oldestRecoveryPoint',
            type: {
              name: 'DateTime'
            }
          },
          recoveryPointCount: {
            required: false,
            serializedName: 'recoveryPointCount',
            type: {
              name: 'Number'
            }
          },
          policyState: {
            required: false,
            serializedName: 'policyState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AzureSqlProtectedItemExtendedInfo;