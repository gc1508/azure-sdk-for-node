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
 * Initializes a new instance of the PublicIPAddress class.
 * @constructor
 * PublicIPAddress resource
 * @member {string} [etag] Gets a unique read-only string that changes
 * whenever the resource is updated
 * 
 * @member {string} [publicIPAllocationMethod] Gets or sets PublicIP
 * allocation method (Static/Dynamic). Possible values for this property
 * include: 'Static', 'Dynamic'.
 * 
 * @member {object} [ipConfiguration]
 * 
 * @member {string} [ipConfiguration.name] Gets name of the resource that is
 * unique within a resource group. This name can be used to access the
 * resource
 * 
 * @member {string} [ipConfiguration.etag] A unique read-only string that
 * changes whenever the resource is updated
 * 
 * @member {string} [ipConfiguration.privateIPAddress] Gets or sets the
 * privateIPAddress of the IP Configuration
 * 
 * @member {string} [ipConfiguration.privateIPAllocationMethod] Gets or sets
 * PrivateIP allocation method (Static/Dynamic). Possible values for this
 * property include: 'Static', 'Dynamic'.
 * 
 * @member {object} [ipConfiguration.subnet] Gets or sets the reference of the
 * subnet resource
 * 
 * @member {string} [ipConfiguration.subnet.name] Gets name of the resource
 * that is unique within a resource group. This name can be used to access
 * the resource
 * 
 * @member {string} [ipConfiguration.subnet.etag] A unique read-only string
 * that changes whenever the resource is updated
 * 
 * @member {string} [ipConfiguration.subnet.addressPrefix] Gets or sets
 * Address prefix for the subnet.
 * 
 * @member {object} [ipConfiguration.subnet.networkSecurityGroup] Gets or sets
 * the reference of the NetworkSecurityGroup resource
 * 
 * @member {string} [ipConfiguration.subnet.networkSecurityGroup.etag] Gets a
 * unique read-only string that changes whenever the resource is updated
 * 
 * @member {array} [ipConfiguration.subnet.networkSecurityGroup.securityRules]
 * Gets or sets Security rules of network security group
 * 
 * @member {array}
 * [ipConfiguration.subnet.networkSecurityGroup.defaultSecurityRules] Gets or
 * sets Default security rules of network security group
 * 
 * @member {array}
 * [ipConfiguration.subnet.networkSecurityGroup.networkInterfaces] Gets
 * collection of references to Network Interfaces
 * 
 * @member {array} [ipConfiguration.subnet.networkSecurityGroup.subnets] Gets
 * collection of references to subnets
 * 
 * @member {string} [ipConfiguration.subnet.networkSecurityGroup.resourceGuid]
 * Gets or sets resource guid property of the network security group resource
 * 
 * @member {string}
 * [ipConfiguration.subnet.networkSecurityGroup.provisioningState] Gets or
 * sets Provisioning state of the PublicIP resource Updating/Deleting/Failed
 * 
 * @member {object} [ipConfiguration.subnet.routeTable] Gets or sets the
 * reference of the RouteTable resource
 * 
 * @member {string} [ipConfiguration.subnet.routeTable.etag] Gets a unique
 * read-only string that changes whenever the resource is updated
 * 
 * @member {array} [ipConfiguration.subnet.routeTable.routes] Gets or sets
 * Routes in a Route Table
 * 
 * @member {array} [ipConfiguration.subnet.routeTable.subnets] Gets collection
 * of references to subnets
 * 
 * @member {string} [ipConfiguration.subnet.routeTable.provisioningState] Gets
 * or sets Provisioning state of the resource Updating/Deleting/Failed
 * 
 * @member {array} [ipConfiguration.subnet.ipConfigurations] Gets array of
 * references to the network interface IP configurations using subnet
 * 
 * @member {string} [ipConfiguration.subnet.provisioningState] Gets or sets
 * Provisioning state of the PublicIP resource Updating/Deleting/Failed
 * 
 * @member {object} [ipConfiguration.publicIPAddress] Gets or sets the
 * reference of the PublicIP resource
 * 
 * @member {string} [ipConfiguration.provisioningState] Gets or sets
 * Provisioning state of the PublicIP resource Updating/Deleting/Failed
 * 
 * @member {object} [dnsSettings] Gets or sets FQDN of the DNS record
 * associated with the public IP address
 * 
 * @member {string} [dnsSettings.domainNameLabel] Gets or sets the Domain name
 * label.The concatenation of the domain name label and the regionalized DNS
 * zone make up the fully qualified domain name associated with the public IP
 * address. If a domain name label is specified, an A DNS record is created
 * for the public IP in the Microsoft Azure DNS system.
 * 
 * @member {string} [dnsSettings.fqdn] Gets the FQDN, Fully qualified domain
 * name of the A DNS record associated with the public IP. This is the
 * concatenation of the domainNameLabel and the regionalized DNS zone.
 * 
 * @member {string} [dnsSettings.reverseFqdn] Gets or Sests the Reverse FQDN.
 * A user-visible, fully qualified domain name that resolves to this public
 * IP address. If the reverseFqdn is specified, then a PTR DNS record is
 * created pointing from the IP address in the in-addr.arpa domain to the
 * reverse FQDN.
 * 
 * @member {string} [ipAddress]
 * 
 * @member {number} [idleTimeoutInMinutes] Gets or sets the Idletimeout of the
 * public IP address
 * 
 * @member {string} [resourceGuid] Gets or sets resource guid property of the
 * PublicIP resource
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function PublicIPAddress(parameters) {
  PublicIPAddress['super_'].call(this, parameters);
  if (parameters !== null && parameters !== undefined) {
    if (parameters.etag !== undefined) {
      this.etag = parameters.etag;
    }
    if (parameters.publicIPAllocationMethod !== undefined) {
      this.publicIPAllocationMethod = parameters.publicIPAllocationMethod;
    }
    if (parameters.ipConfiguration) {
      this.ipConfiguration = new models['IPConfiguration'](parameters.ipConfiguration);
    }
    if (parameters.dnsSettings) {
      this.dnsSettings = new models['PublicIPAddressDnsSettings'](parameters.dnsSettings);
    }
    if (parameters.ipAddress !== undefined) {
      this.ipAddress = parameters.ipAddress;
    }
    if (parameters.idleTimeoutInMinutes !== undefined) {
      this.idleTimeoutInMinutes = parameters.idleTimeoutInMinutes;
    }
    if (parameters.resourceGuid !== undefined) {
      this.resourceGuid = parameters.resourceGuid;
    }
    if (parameters.provisioningState !== undefined) {
      this.provisioningState = parameters.provisioningState;
    }
  }    
}

util.inherits(PublicIPAddress, models['Resource']);

/**
 * Validate the payload against the PublicIPAddress schema
 *
 * @param {JSON} payload
 *
 */
PublicIPAddress.prototype.serialize = function () {
  var payload = PublicIPAddress['super_'].prototype.serialize.call(this);
  if (this['etag'] !== null && this['etag'] !== undefined) {
    if (typeof this['etag'].valueOf() !== 'string') {
      throw new Error('this[\'etag\'] must be of type string.');
    }
    payload['etag'] = this['etag'];
  }

  if (this['publicIPAllocationMethod'] !== null && this['publicIPAllocationMethod'] !== undefined) {
    if (typeof this['publicIPAllocationMethod'].valueOf() !== 'string') {
      throw new Error('this[\'publicIPAllocationMethod\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['publicIPAllocationMethod'] = this['publicIPAllocationMethod'];
  }

  if (this['ipConfiguration']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['ipConfiguration'] = this['ipConfiguration'].serialize();
  }

  if (this['dnsSettings']) {
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['dnsSettings'] = this['dnsSettings'].serialize();
  }

  if (this['ipAddress'] !== null && this['ipAddress'] !== undefined) {
    if (typeof this['ipAddress'].valueOf() !== 'string') {
      throw new Error('this[\'ipAddress\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['ipAddress'] = this['ipAddress'];
  }

  if (this['idleTimeoutInMinutes'] !== null && this['idleTimeoutInMinutes'] !== undefined) {
    if (typeof this['idleTimeoutInMinutes'] !== 'number') {
      throw new Error('this[\'idleTimeoutInMinutes\'] must be of type number.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['idleTimeoutInMinutes'] = this['idleTimeoutInMinutes'];
  }

  if (this['resourceGuid'] !== null && this['resourceGuid'] !== undefined) {
    if (typeof this['resourceGuid'].valueOf() !== 'string') {
      throw new Error('this[\'resourceGuid\'] must be of type string.');
    }
    if (payload['properties'] === null || payload['properties'] === undefined) {
      payload['properties'] = {};
    }
    payload['properties']['resourceGuid'] = this['resourceGuid'];
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
 * Deserialize the instance to PublicIPAddress schema
 *
 * @param {JSON} instance
 *
 */
PublicIPAddress.prototype.deserialize = function (instance) {
  PublicIPAddress['super_'].prototype.deserialize.call(this, instance);
  if (instance) {
    if (instance['etag'] !== undefined) {
      this['etag'] = instance['etag'];
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['publicIPAllocationMethod'] !== undefined) {
        this['publicIPAllocationMethod'] = instance['properties']['publicIPAllocationMethod'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['ipConfiguration']) {
        this['ipConfiguration'] = new models['IPConfiguration']().deserialize(instance['properties']['ipConfiguration']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['dnsSettings']) {
        this['dnsSettings'] = new models['PublicIPAddressDnsSettings']().deserialize(instance['properties']['dnsSettings']);
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['ipAddress'] !== undefined) {
        this['ipAddress'] = instance['properties']['ipAddress'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['idleTimeoutInMinutes'] !== undefined) {
        this['idleTimeoutInMinutes'] = instance['properties']['idleTimeoutInMinutes'];
      }
    }

    if (instance['properties'] !== null && instance['properties'] !== undefined) {
      if (instance['properties']['resourceGuid'] !== undefined) {
        this['resourceGuid'] = instance['properties']['resourceGuid'];
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

module.exports = PublicIPAddress;