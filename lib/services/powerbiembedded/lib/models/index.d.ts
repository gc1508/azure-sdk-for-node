/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the ErrorDetail class.
 * @constructor
 * @member {string} [code]
 *
 * @member {string} [message]
 *
 * @member {string} [target]
 *
 */
export interface ErrorDetail {
  code?: string;
  message?: string;
  target?: string;
}

/**
 * @class
 * Initializes a new instance of the ErrorModel class.
 * @constructor
 * @member {string} [code]
 *
 * @member {string} [message]
 *
 * @member {string} [target]
 *
 * @member {array} [details]
 *
 */
export interface ErrorModel {
  code?: string;
  message?: string;
  target?: string;
  details?: ErrorDetail[];
}

/**
 * @class
 * Initializes a new instance of the AzureSku class.
 * @constructor
 */
export interface AzureSku {
}

/**
 * @class
 * Initializes a new instance of the WorkspaceCollection class.
 * @constructor
 * @member {string} [id] Resource id
 *
 * @member {string} [name] Workspace collection name
 *
 * @member {string} [type] Resource type
 *
 * @member {string} [location] Azure location
 *
 * @member {object} [tags]
 *
 * @member {object} [properties] Properties
 *
 */
export interface WorkspaceCollection {
  id?: string;
  name?: string;
  type?: string;
  location?: string;
  tags?: { [propertyName: string]: string };
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceCollectionList class.
 * @constructor
 * @member {array} [value]
 *
 */
export interface WorkspaceCollectionList {
  value?: WorkspaceCollection[];
}

/**
 * @class
 * Initializes a new instance of the Workspace class.
 * @constructor
 * @member {string} [id] Workspace id
 *
 * @member {string} [name] Workspace name
 *
 * @member {string} [type] Resource type
 *
 * @member {object} [properties] Property bag
 *
 */
export interface Workspace {
  id?: string;
  name?: string;
  type?: string;
  properties?: any;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceList class.
 * @constructor
 * @member {array} [value]
 *
 */
export interface WorkspaceList {
  value?: Workspace[];
}

/**
 * @class
 * Initializes a new instance of the Display class.
 * @constructor
 * @member {string} [provider] The localized friendly form of the resource
 * provider name. This form is also expected to include the publisher/company
 * responsible. Use Title Casing. Begin with “Microsoft” for 1st party
 * services.
 *
 * @member {string} [resource] The localized friendly form of the resource type
 * related to this action/operation. This form should match the public
 * documentation for the resource provider. Use Title Casing. For examples,
 * refer to the “name” section.
 *
 * @member {string} [operation] The localized friendly name for the operation
 * as shown to the user. This name should be concise (to fit in drop downs),
 * but clear (self-documenting). Use Title Casing and include the
 * entity/resource to which it applies.
 *
 * @member {string} [description] The localized friendly description for the
 * operation as shown to the user. This description should be thorough, yet
 * concise. It will be used in tool-tips and detailed views.
 *
 * @member {string} [origin] The intended executor of the operation; governs
 * the display of the operation in the RBAC UX and the audit logs UX. Default
 * value is 'user,system'
 *
 */
export interface Display {
  provider?: string;
  resource?: string;
  operation?: string;
  description?: string;
  origin?: string;
}

/**
 * @class
 * Initializes a new instance of the Operation class.
 * @constructor
 * @member {string} [name] The name of the operation being performed on this
 * particular object. This name should match the action name that appears in
 * RBAC / the event service.
 *
 * @member {object} [display]
 *
 * @member {string} [display.provider] The localized friendly form of the
 * resource provider name. This form is also expected to include the
 * publisher/company responsible. Use Title Casing. Begin with “Microsoft” for
 * 1st party services.
 *
 * @member {string} [display.resource] The localized friendly form of the
 * resource type related to this action/operation. This form should match the
 * public documentation for the resource provider. Use Title Casing. For
 * examples, refer to the “name” section.
 *
 * @member {string} [display.operation] The localized friendly name for the
 * operation as shown to the user. This name should be concise (to fit in drop
 * downs), but clear (self-documenting). Use Title Casing and include the
 * entity/resource to which it applies.
 *
 * @member {string} [display.description] The localized friendly description
 * for the operation as shown to the user. This description should be thorough,
 * yet concise. It will be used in tool-tips and detailed views.
 *
 * @member {string} [display.origin] The intended executor of the operation;
 * governs the display of the operation in the RBAC UX and the audit logs UX.
 * Default value is 'user,system'
 *
 */
export interface Operation {
  name?: string;
  display?: Display;
}

/**
 * @class
 * Initializes a new instance of the OperationList class.
 * @constructor
 * @member {array} [value]
 *
 */
export interface OperationList {
  value?: Operation[];
}

/**
 * @class
 * Initializes a new instance of the WorkspaceCollectionAccessKeys class.
 * @constructor
 * @member {string} [key1] Access key 1
 *
 * @member {string} [key2] Access key 2
 *
 */
export interface WorkspaceCollectionAccessKeys {
  key1?: string;
  key2?: string;
}

/**
 * @class
 * Initializes a new instance of the WorkspaceCollectionAccessKey class.
 * @constructor
 * @member {string} [keyName] Key name. Possible values include: 'key1', 'key2'
 *
 */
export interface WorkspaceCollectionAccessKey {
  keyName?: string;
}

/**
 * @class
 * Initializes a new instance of the CreateWorkspaceCollectionRequest class.
 * @constructor
 * @member {string} [location] Azure location
 *
 * @member {object} [tags]
 *
 */
export interface CreateWorkspaceCollectionRequest {
  location?: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the UpdateWorkspaceCollectionRequest class.
 * @constructor
 * @member {object} [tags]
 *
 */
export interface UpdateWorkspaceCollectionRequest {
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the CheckNameRequest class.
 * @constructor
 * @member {string} [name] Workspace collection name
 *
 * @member {string} [type] Resource type. Default value:
 * 'Microsoft.PowerBI/workspaceCollections' .
 *
 */
export interface CheckNameRequest {
  name?: string;
  type?: string;
}

/**
 * @class
 * Initializes a new instance of the CheckNameResponse class.
 * @constructor
 * @member {boolean} [nameAvailable] Specifies a Boolean value that indicates
 * whether the specified Power BI Workspace Collection name is available to
 * use.
 *
 * @member {string} [reason] Reason why the workspace collection name cannot be
 * used. Possible values include: 'Unavailable', 'Invalid'
 *
 * @member {string} [message] Message indicating an unavailable name due to a
 * conflict, or a description of the naming rules that are violated.
 *
 */
export interface CheckNameResponse {
  nameAvailable?: boolean;
  reason?: string;
  message?: string;
}

/**
 * @class
 * Initializes a new instance of the MigrateWorkspaceCollectionRequest class.
 * @constructor
 * @member {string} [targetResourceGroup] Name of the resource group the Power
 * BI workspace collections will be migrated to.
 *
 * @member {array} [resources]
 *
 */
export interface MigrateWorkspaceCollectionRequest {
  targetResourceGroup?: string;
  resources?: string[];
}

/**
 * @class
 * Initializes a new instance of the WorkspaceCollectionList class.
 * @constructor
 * @member {array} [value]
 *
 */
export interface WorkspaceCollectionList {
  value?: WorkspaceCollection[];
}

/**
 * @class
 * Initializes a new instance of the WorkspaceList class.
 * @constructor
 * @member {array} [value]
 *
 */
export interface WorkspaceList {
  value?: Workspace[];
}


/**
 * @class
 * Initializes a new instance of the WorkspaceCollectionList class.
 * @constructor
 */
export interface WorkspaceCollectionList extends Array<WorkspaceCollection> {
}

/**
 * @class
 * Initializes a new instance of the WorkspaceList class.
 * @constructor
 */
export interface WorkspaceList extends Array<Workspace> {
}
