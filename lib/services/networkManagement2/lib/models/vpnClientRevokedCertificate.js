/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the VpnClientRevokedCertificate class.
 * @constructor
 * VPN client revoked certificate of virtual network gateway
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated
 * 
 * @member {string} [thumbprint] Gets or sets the revoked Vpn client
 * certificate thumbprint
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * VPN client revoked certificate resource Updating/Deleting/Failed
 * 
 */
function VpnClientRevokedCertificate(parameters) {
  VpnClientRevokedCertificate['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.name !== undefined) {
      this.name = parameters.name;
    }
    if (parameters.etag !== undefined) {
      this.etag = parameters.etag;
    }
    if (parameters.thumbprint !== undefined) {
      this.thumbprint = parameters.thumbprint;
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
  }    
}

util.inherits(VpnClientRevokedCertificate, models['SubResource']);

/**
 * Validate the payload against the VpnClientRevokedCertificate schema
 *
 * @param {JSON} payload
 *
 */
VpnClientRevokedCertificate.prototype.serialize = function () {
  var payload = VpnClientRevokedCertificate['super_'].prototype.serialize.call(this);
  if (this['name'] !== null && this['name'] !== undefined) {
    if (typeof this['name'].valueOf() !== 'string') {
      throw new Error('this[\'name\'] must be of type string.');
    }
    payload['name'] = this['name'];
  }

  if (this['etag'] !== null && this['etag'] !== undefined) {
    if (typeof this['etag'].valueOf() !== 'string') {
      throw new Error('this[\'etag\'] must be of type string.');
    }
    payload['etag'] = this['etag'];
  }

  if (this['thumbprint'] !== null && this['thumbprint'] !== undefined) {
    if (typeof this['thumbprint'].valueOf() !== 'string') {
      throw new Error('this[\'thumbprint\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['thumbprint'] = this['thumbprint'];
  }

  if (this['provisioningState'] !== null && this['provisioningState'] !== undefined) {
    if (typeof this['provisioningState'].valueOf() !== 'string') {
      throw new Error('this[\'provisioningState\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['provisioningState'] = this['provisioningState'];
  }

  return payload;
};

/**
 * Deserialize the instance to VpnClientRevokedCertificate schema
 *
 * @param {JSON} instance
 *
 */
VpnClientRevokedCertificate.prototype.deserialize = function (instance) {
  VpnClientRevokedCertificate['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['name'] !== undefined) {
      this['name'] = instance['name'];
    }

    if (instance['etag'] !== undefined) {
      this['etag'] = instance['etag'];
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['thumbprint'] !== undefined) {
        this['thumbprint'] = instance['properties']['thumbprint'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['provisioningState'] !== undefined) {
        this['provisioningState'] = instance['properties']['provisioningState'];
      }
    }
  }

  return this;
};

module.exports = VpnClientRevokedCertificate;