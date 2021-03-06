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
 * Initializes a new instance of the AuthorizationPolicyListResult class.
 * @constructor
 * The response of list authorization policy operation.
 *
 * @member {string} [nextLink] Link to the next set of results.
 *
 */
class AuthorizationPolicyListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of AuthorizationPolicyListResult
   *
   * @returns {object} metadata of AuthorizationPolicyListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AuthorizationPolicyListResult',
      type: {
        name: 'Composite',
        className: 'AuthorizationPolicyListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'AuthorizationPolicyResourceFormatElementType',
                  type: {
                    name: 'Composite',
                    className: 'AuthorizationPolicyResourceFormat'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AuthorizationPolicyListResult;
