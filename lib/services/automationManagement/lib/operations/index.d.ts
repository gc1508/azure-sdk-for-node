/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback, HttpOperationResponse } from 'ms-rest';
import * as models from '../models';


/**
 * @class
 * AutomationAccounts
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutomationClient.
 */
export interface AutomationAccounts {


    /**
     * Update an automation account.
     *
     * @param {string} automationAccountName Automation account name.
     *
     * @param {object} parameters Parameters supplied to the update automation
     * account.
     *
     * @param {object} [parameters.sku] Gets or sets account SKU.
     *
     * @param {string} [parameters.sku.name] Gets or sets the SKU (pricing tier) of
     * the account. Possible values include: 'Free', 'Basic'
     *
     * @param {string} [parameters.sku.family] Gets or sets the SKU family.
     *
     * @param {number} [parameters.sku.capacity] Gets or sets the SKU capacity.
     *
     * @param {string} [parameters.name] Gets or sets the name of the resource.
     *
     * @param {string} [parameters.location] Gets or sets the location of the
     * resource.
     *
     * @param {object} [parameters.tags] Gets or sets the tags attached to the
     * resource.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    updateWithHttpOperationResponse(automationAccountName: string, parameters: models.AutomationAccountUpdateParameters, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccount>>;

    /**
     * Update an automation account.
     *
     * @param {string} automationAccountName Automation account name.
     *
     * @param {object} parameters Parameters supplied to the update automation
     * account.
     *
     * @param {object} [parameters.sku] Gets or sets account SKU.
     *
     * @param {string} [parameters.sku.name] Gets or sets the SKU (pricing tier) of
     * the account. Possible values include: 'Free', 'Basic'
     *
     * @param {string} [parameters.sku.family] Gets or sets the SKU family.
     *
     * @param {number} [parameters.sku.capacity] Gets or sets the SKU capacity.
     *
     * @param {string} [parameters.name] Gets or sets the name of the resource.
     *
     * @param {string} [parameters.location] Gets or sets the location of the
     * resource.
     *
     * @param {object} [parameters.tags] Gets or sets the tags attached to the
     * resource.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    update(automationAccountName: string, parameters: models.AutomationAccountUpdateParameters, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccount>;
    update(automationAccountName: string, parameters: models.AutomationAccountUpdateParameters, resourceGroupName: string, callback: ServiceCallback<models.AutomationAccount>): void;
    update(automationAccountName: string, parameters: models.AutomationAccountUpdateParameters, resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccount>): void;


    /**
     * Create or update an automation account.
     *
     * @param {string} automationAccountName Parameters supplied to the create or
     * update automation account.
     *
     * @param {object} parameters Parameters supplied to the create or update
     * automation account.
     *
     * @param {object} [parameters.sku] Gets or sets account SKU.
     *
     * @param {string} [parameters.sku.name] Gets or sets the SKU (pricing tier) of
     * the account. Possible values include: 'Free', 'Basic'
     *
     * @param {string} [parameters.sku.family] Gets or sets the SKU family.
     *
     * @param {number} [parameters.sku.capacity] Gets or sets the SKU capacity.
     *
     * @param {string} [parameters.name] Gets or sets the name of the resource.
     *
     * @param {string} [parameters.location] Gets or sets the location of the
     * resource.
     *
     * @param {object} [parameters.tags] Gets or sets the tags attached to the
     * resource.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    createOrUpdateWithHttpOperationResponse(automationAccountName: string, parameters: models.AutomationAccountCreateOrUpdateParameters, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccount>>;

    /**
     * Create or update an automation account.
     *
     * @param {string} automationAccountName Parameters supplied to the create or
     * update automation account.
     *
     * @param {object} parameters Parameters supplied to the create or update
     * automation account.
     *
     * @param {object} [parameters.sku] Gets or sets account SKU.
     *
     * @param {string} [parameters.sku.name] Gets or sets the SKU (pricing tier) of
     * the account. Possible values include: 'Free', 'Basic'
     *
     * @param {string} [parameters.sku.family] Gets or sets the SKU family.
     *
     * @param {number} [parameters.sku.capacity] Gets or sets the SKU capacity.
     *
     * @param {string} [parameters.name] Gets or sets the name of the resource.
     *
     * @param {string} [parameters.location] Gets or sets the location of the
     * resource.
     *
     * @param {object} [parameters.tags] Gets or sets the tags attached to the
     * resource.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    createOrUpdate(automationAccountName: string, parameters: models.AutomationAccountCreateOrUpdateParameters, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccount>;
    createOrUpdate(automationAccountName: string, parameters: models.AutomationAccountCreateOrUpdateParameters, resourceGroupName: string, callback: ServiceCallback<models.AutomationAccount>): void;
    createOrUpdate(automationAccountName: string, parameters: models.AutomationAccountCreateOrUpdateParameters, resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccount>): void;


    /**
     * Delete an automation account.
     *
     * @param {string} automationAccountName Automation account name.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<null>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    deleteMethodWithHttpOperationResponse(automationAccountName: string, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<void>>;

    /**
     * Delete an automation account.
     *
     * @param {string} automationAccountName Automation account name.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {null} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {null} [result]   - The deserialized result object if an error did not occur.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    deleteMethod(automationAccountName: string, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<void>;
    deleteMethod(automationAccountName: string, resourceGroupName: string, callback: ServiceCallback<void>): void;
    deleteMethod(automationAccountName: string, resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;


    /**
     * Get information about an Automation Account.
     *
     * @param {string} automationAccountName The automation account name.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccount>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getWithHttpOperationResponse(automationAccountName: string, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccount>>;

    /**
     * Get information about an Automation Account.
     *
     * @param {string} automationAccountName The automation account name.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccount} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccount} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccount} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    get(automationAccountName: string, resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccount>;
    get(automationAccountName: string, resourceGroupName: string, callback: ServiceCallback<models.AutomationAccount>): void;
    get(automationAccountName: string, resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccount>): void;


    /**
     * Retrieve a list of accounts within a given resource group.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupWithHttpOperationResponse(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccountListResult>>;

    /**
     * Retrieve a list of accounts within a given resource group.
     *
     * @param {string} resourceGroupName The resource group name.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccountListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroup(resourceGroupName: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccountListResult>;
    listByResourceGroup(resourceGroupName: string, callback: ServiceCallback<models.AutomationAccountListResult>): void;
    listByResourceGroup(resourceGroupName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccountListResult>): void;


    /**
     * @summary Lists the Automation Accounts within an Azure subscitption.
     *
     * Retrieve a list of accounts within a given subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionIdWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccountListResult>>;

    /**
     * @summary Lists the Automation Accounts within an Azure subscitption.
     *
     * Retrieve a list of accounts within a given subscription.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccountListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionId(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccountListResult>;
    listBySubscriptionId(callback: ServiceCallback<models.AutomationAccountListResult>): void;
    listBySubscriptionId(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccountListResult>): void;


    /**
     * Retrieve a list of accounts within a given resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listByResourceGroupNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccountListResult>>;

    /**
     * Retrieve a list of accounts within a given resource group.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccountListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listByResourceGroupNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccountListResult>;
    listByResourceGroupNext(nextPageLink: string, callback: ServiceCallback<models.AutomationAccountListResult>): void;
    listByResourceGroupNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccountListResult>): void;


    /**
     * @summary Lists the Automation Accounts within an Azure subscitption.
     *
     * Retrieve a list of accounts within a given subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<AutomationAccountListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listBySubscriptionIdNextWithHttpOperationResponse(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.AutomationAccountListResult>>;

    /**
     * @summary Lists the Automation Accounts within an Azure subscitption.
     *
     * Retrieve a list of accounts within a given subscription.
     *
     * @param {string} nextPageLink The NextLink from the previous successful call
     * to List operation.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {AutomationAccountListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {AutomationAccountListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link AutomationAccountListResult} for more
     *                      information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    listBySubscriptionIdNext(nextPageLink: string, options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.AutomationAccountListResult>;
    listBySubscriptionIdNext(nextPageLink: string, callback: ServiceCallback<models.AutomationAccountListResult>): void;
    listBySubscriptionIdNext(nextPageLink: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AutomationAccountListResult>): void;
}

/**
 * @class
 * Operations
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutomationClient.
 */
export interface Operations {


    /**
     * Lists all of the available Automation REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse<OperationListResult>} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    listWithHttpOperationResponse(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<HttpOperationResponse<models.OperationListResult>>;

    /**
     * Lists all of the available Automation REST API operations.
     *
     * @param {object} [options] Optional Parameters.
     *
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     *
     * @param {ServiceCallback} [optionalCallback] - The optional callback.
     *
     * @returns {ServiceCallback|Promise} If a callback was passed as the last
     * parameter then it returns the callback else returns a Promise.
     *
     * {Promise} A promise is returned.
     *
     *                      @resolve {OperationListResult} - The deserialized result object.
     *
     *                      @reject {Error|ServiceError} - The error object.
     *
     * {ServiceCallback} optionalCallback(err, result, request, response)
     *
     *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
     *
     *                      {OperationListResult} [result]   - The deserialized result object if an error did not occur.
     *                      See {@link OperationListResult} for more information.
     *
     *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
     *
     *                      {http.IncomingMessage} [response] - The HTTP Response stream if an error did not occur.
     */
    list(options?: { customHeaders? : { [headerName: string]: string; } }): Promise<models.OperationListResult>;
    list(callback: ServiceCallback<models.OperationListResult>): void;
    list(options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.OperationListResult>): void;
}
