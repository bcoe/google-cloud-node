// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

/* global window */
import type * as gax from 'google-gax';
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  LROperation,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/network_edge_security_services_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './network_edge_security_services_client_config.json';
const version = require('../../../package.json').version;

/**
 *  The NetworkEdgeSecurityServices API.
 * @class
 * @memberof v1
 */
export class NetworkEdgeSecurityServicesClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  networkEdgeSecurityServicesStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of NetworkEdgeSecurityServicesClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean | "rest"} [options.fallback] - Use HTTP fallback mode.
   *     Pass "rest" to use HTTP/1.1 REST API instead of gRPC.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new NetworkEdgeSecurityServicesClient({fallback: 'rest'}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this
      .constructor as typeof NetworkEdgeSecurityServicesClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    // Implicitely set 'rest' value for the apis use rest as transport (eg. googleapis-discovery apis).
    if (!opts) {
      opts = {fallback: 'rest'};
    } else {
      opts.fallback = opts.fallback ?? 'rest';
    }
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else if (opts.fallback === 'rest') {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      aggregatedList: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'items'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.cloud.compute.v1.NetworkEdgeSecurityServices',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.networkEdgeSecurityServicesStub) {
      return this.networkEdgeSecurityServicesStub;
    }

    // Put together the "service stub" for
    // google.cloud.compute.v1.NetworkEdgeSecurityServices.
    this.networkEdgeSecurityServicesStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.cloud.compute.v1.NetworkEdgeSecurityServices'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.cloud.compute.v1
            .NetworkEdgeSecurityServices,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const networkEdgeSecurityServicesStubMethods = [
      'aggregatedList',
      'delete',
      'get',
      'insert',
      'patch',
    ];
    for (const methodName of networkEdgeSecurityServicesStubMethods) {
      const callPromise = this.networkEdgeSecurityServicesStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.networkEdgeSecurityServicesStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'compute.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'compute.googleapis.com';
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/compute',
      'https://www.googleapis.com/auth/cloud-platform',
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
  /**
   * Deletes the specified service.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.networkEdgeSecurityService
   *   Name of the network edge security service to delete.
   * @param {string} request.project
   *   Project ID for this request.
   * @param {string} request.region
   *   Name of the region scoping this request.
   * @param {string} request.requestId
   *   An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   *   This method is considered to be in beta. This means while
   *   stable it is still a work-in-progress and under active development,
   *   and might get backwards-incompatible changes at any time.
   *   `.promise()` is not supported yet.
   * @example <caption>include:samples/generated/v1/network_edge_security_services.delete.js</caption>
   * region_tag:compute_v1_generated_NetworkEdgeSecurityServices_Delete_async
   */
  delete(
    request?: protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  >;
  delete(
    request: protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  delete(
    request: protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  delete(
    request?: protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.IOperation,
          | protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IDeleteNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
        region: request.region ?? '',
        network_edge_security_service: request.networkEdgeSecurityService ?? '',
      });
    this.initialize();
    return this.innerApiCalls
      .delete(request, options, callback)
      .then(
        ([response, operation, rawResponse]: [
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation
        ]) => {
          return [
            {
              latestResponse: response,
              done: false,
              name: response.id,
              metadata: null,
              result: {},
            },
            operation,
            rawResponse,
          ];
        }
      );
  }
  /**
   * Gets a specified NetworkEdgeSecurityService.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.networkEdgeSecurityService
   *   Name of the network edge security service to get.
   * @param {string} request.project
   *   Project ID for this request.
   * @param {string} request.region
   *   Name of the region scoping this request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing [NetworkEdgeSecurityService]{@link google.cloud.compute.v1.NetworkEdgeSecurityService}.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/network_edge_security_services.get.js</caption>
   * region_tag:compute_v1_generated_NetworkEdgeSecurityServices_Get_async
   */
  get(
    request?: protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
      (
        | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
        | undefined
      ),
      {} | undefined
    ]
  >;
  get(
    request: protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
      | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  get(
    request: protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
      | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  get(
    request?: protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
          | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
      | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.cloud.compute.v1.INetworkEdgeSecurityService,
      (
        | protos.google.cloud.compute.v1.IGetNetworkEdgeSecurityServiceRequest
        | undefined
      ),
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
        region: request.region ?? '',
        network_edge_security_service: request.networkEdgeSecurityService ?? '',
      });
    this.initialize();
    return this.innerApiCalls.get(request, options, callback);
  }
  /**
   * Creates a new service in the specified project using the data included in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {google.cloud.compute.v1.NetworkEdgeSecurityService} request.networkEdgeSecurityServiceResource
   *   The body resource for this request
   * @param {string} request.project
   *   Project ID for this request.
   * @param {string} request.region
   *   Name of the region scoping this request.
   * @param {string} request.requestId
   *   An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   * @param {boolean} request.validateOnly
   *   If true, the request will not be committed.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   *   This method is considered to be in beta. This means while
   *   stable it is still a work-in-progress and under active development,
   *   and might get backwards-incompatible changes at any time.
   *   `.promise()` is not supported yet.
   * @example <caption>include:samples/generated/v1/network_edge_security_services.insert.js</caption>
   * region_tag:compute_v1_generated_NetworkEdgeSecurityServices_Insert_async
   */
  insert(
    request?: protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  >;
  insert(
    request: protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  insert(
    request: protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  insert(
    request?: protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.IOperation,
          | protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IInsertNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
        region: request.region ?? '',
      });
    this.initialize();
    return this.innerApiCalls
      .insert(request, options, callback)
      .then(
        ([response, operation, rawResponse]: [
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation
        ]) => {
          return [
            {
              latestResponse: response,
              done: false,
              name: response.id,
              metadata: null,
              result: {},
            },
            operation,
            rawResponse,
          ];
        }
      );
  }
  /**
   * Patches the specified policy with the data included in the request.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.networkEdgeSecurityService
   *   Name of the network edge security service to update.
   * @param {google.cloud.compute.v1.NetworkEdgeSecurityService} request.networkEdgeSecurityServiceResource
   *   The body resource for this request
   * @param {string} request.paths
   * @param {string} request.project
   *   Project ID for this request.
   * @param {string} request.region
   *   Name of the region scoping this request.
   * @param {string} request.requestId
   *   An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported ( 00000000-0000-0000-0000-000000000000).
   * @param {string} request.updateMask
   *   Indicates fields to be updated as part of this request.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing
   *   a long running operation.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#long-running-operations)
   *   for more details and examples.
   *   This method is considered to be in beta. This means while
   *   stable it is still a work-in-progress and under active development,
   *   and might get backwards-incompatible changes at any time.
   *   `.promise()` is not supported yet.
   * @example <caption>include:samples/generated/v1/network_edge_security_services.patch.js</caption>
   * region_tag:compute_v1_generated_NetworkEdgeSecurityServices_Patch_async
   */
  patch(
    request?: protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest,
    options?: CallOptions
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  >;
  patch(
    request: protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  patch(
    request: protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest,
    callback: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): void;
  patch(
    request?: protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.cloud.compute.v1.IOperation,
          | protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.cloud.compute.v1.IOperation,
      | protos.google.cloud.compute.v1.IPatchNetworkEdgeSecurityServiceRequest
      | null
      | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      LROperation<protos.google.cloud.compute.v1.IOperation, null>,
      protos.google.cloud.compute.v1.IOperation | undefined,
      {} | undefined
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
        region: request.region ?? '',
        network_edge_security_service: request.networkEdgeSecurityService ?? '',
      });
    this.initialize();
    return this.innerApiCalls
      .patch(request, options, callback)
      .then(
        ([response, operation, rawResponse]: [
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation,
          protos.google.cloud.compute.v1.IOperation
        ]) => {
          return [
            {
              latestResponse: response,
              done: false,
              name: response.id,
              metadata: null,
              result: {},
            },
            operation,
            rawResponse,
          ];
        }
      );
  }

  /**
   * Retrieves the list of all NetworkEdgeSecurityService resources available to the specified project.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.filter
   *   A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: ``` labels.owner:* ``` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: ``` (scheduling.automaticRestart = true) (cpuPlatform = "Intel Skylake") ``` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: ``` (cpuPlatform = "Intel Skylake") OR (cpuPlatform = "Intel Broadwell") AND (scheduling.automaticRestart = true) ``` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq 'single quoted literal'` `fieldname eq "double quoted literal"` `(fieldname1 eq literal) (fieldname2 ne "literal")` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.
   * @param {boolean} request.includeAllScopes
   *   Indicates whether every visible scope for each scope type (zone, region, global) should be included in the response. For new resource types added after this field, the flag has no effect as new resource types will always include every visible scope for each scope type in response. For resource types which predate this field, if this flag is omitted or false, only scopes of the scope types where the resource type is expected to be found will be included.
   * @param {number} request.maxResults
   *   The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)
   * @param {string} request.orderBy
   *   Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy="creationTimestamp desc"`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.
   * @param {string} request.pageToken
   *   Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.
   * @param {string} request.project
   *   Name of the project scoping this request.
   * @param {boolean} request.returnPartialSuccess
   *   Opt-in for partial success behavior which provides partial results in case of failure. The default value is false.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows [async iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).
   *   When you iterate the returned iterable, each element will be an object representing
   *   as tuple [string, [NetworkEdgeSecurityServicesScopedList]{@link google.cloud.compute.v1.NetworkEdgeSecurityServicesScopedList}]. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the
   *   [documentation](https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination)
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/network_edge_security_services.aggregated_list.js</caption>
   * region_tag:compute_v1_generated_NetworkEdgeSecurityServices_AggregatedList_async
   */
  aggregatedListAsync(
    request?: protos.google.cloud.compute.v1.IAggregatedListNetworkEdgeSecurityServicesRequest,
    options?: CallOptions
  ): AsyncIterable<
    [
      string,
      protos.google.cloud.compute.v1.INetworkEdgeSecurityServicesScopedList
    ]
  > {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        project: request.project ?? '',
      });
    const defaultCallSettings = this._defaults['aggregatedList'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.aggregatedList.asyncIterate(
      this.innerApiCalls['aggregatedList'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<
      [
        string,
        protos.google.cloud.compute.v1.INetworkEdgeSecurityServicesScopedList
      ]
    >;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.networkEdgeSecurityServicesStub && !this._terminated) {
      return this.networkEdgeSecurityServicesStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}
