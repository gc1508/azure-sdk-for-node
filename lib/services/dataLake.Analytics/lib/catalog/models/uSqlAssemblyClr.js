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

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the USqlAssemblyClr class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL assembly CLR item.
 *
 * @member {string} [databaseName] the name of the database.
 *
 * @member {string} [name] the name of the assembly.
 *
 * @member {string} [clrName] the name of the CLR.
 *
 */
class USqlAssemblyClr extends models['CatalogItem'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of USqlAssemblyClr
   *
   * @returns {object} metadata of USqlAssemblyClr
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'USqlAssemblyClr',
      type: {
        name: 'Composite',
        className: 'USqlAssemblyClr',
        modelProperties: {
          computeAccountName: {
            required: false,
            serializedName: 'computeAccountName',
            type: {
              name: 'String'
            }
          },
          version: {
            required: false,
            serializedName: 'version',
            type: {
              name: 'String'
            }
          },
          databaseName: {
            required: false,
            serializedName: 'databaseName',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'assemblyClrName',
            type: {
              name: 'String'
            }
          },
          clrName: {
            required: false,
            serializedName: 'clrName',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = USqlAssemblyClr;
