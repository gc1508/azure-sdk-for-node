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
 * Initializes a new instance of the VirtualMachineScaleSetIdentity class.
 * @constructor
 * Identity for the virtual machine scale set.
 *
 * @member {string} [principalId] The principal id of virtual machine scale set
 * identity.
 *
 * @member {string} [tenantId] The tenant id associated with the virtual
 * machine scale set.
 *
 * @member {string} [type] The type of identity used for the virtual machine
 * scale set. Currently, the only supported type is 'SystemAssigned', which
 * implicitly creates an identity. Possible values include: 'SystemAssigned'
 *
 */
class VirtualMachineScaleSetIdentity {
  constructor() {
  }

  /**
   * Defines the metadata of VirtualMachineScaleSetIdentity
   *
   * @returns {object} metadata of VirtualMachineScaleSetIdentity
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineScaleSetIdentity',
      type: {
        name: 'Composite',
        className: 'VirtualMachineScaleSetIdentity',
        modelProperties: {
          principalId: {
            required: false,
            readOnly: true,
            serializedName: 'principalId',
            type: {
              name: 'String'
            }
          },
          tenantId: {
            required: false,
            readOnly: true,
            serializedName: 'tenantId',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'Enum',
              allowedValues: [ 'SystemAssigned' ]
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineScaleSetIdentity;
