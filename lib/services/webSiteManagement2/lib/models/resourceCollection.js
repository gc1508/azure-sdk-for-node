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
 * Initializes a new instance of the ResourceCollection class.
 * @constructor
 * Collection of resources.
 *
 * @member {string} [nextLink] Link to next page of resources.
 *
 */
class ResourceCollection extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResourceCollection
   *
   * @returns {object} metadata of ResourceCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceCollection',
      type: {
        name: 'Composite',
        className: 'ResourceCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
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

module.exports = ResourceCollection;