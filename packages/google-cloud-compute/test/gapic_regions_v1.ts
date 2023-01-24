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

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it, beforeEach, afterEach} from 'mocha';
import * as regionsModule from '../src';

import {PassThrough} from 'stream';

import {GoogleAuth, protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(
  require('../protos/protos.json')
).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
  let type = root.lookupType(typeName) as protobuf.Type;
  for (const field of fields.slice(0, -1)) {
    type = type.fields[field]?.resolvedType as protobuf.Type;
  }
  return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
  const filledObject = (
    instance.constructor as typeof protobuf.Message
  ).toObject(instance as protobuf.Message<T>, {defaults: true});
  return (instance.constructor as typeof protobuf.Message).fromObject(
    filledObject
  ) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
  return error
    ? sinon.stub().rejects(error)
    : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(
  response?: ResponseType,
  error?: Error
) {
  return error
    ? sinon.stub().callsArgWith(2, error)
    : sinon.stub().callsArgWith(2, null, response);
}

function stubPageStreamingCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  const pagingStub = sinon.stub();
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      pagingStub.onCall(i).callsArgWith(2, null, responses[i]);
    }
  }
  const transformStub = error
    ? sinon.stub().callsArgWith(2, error)
    : pagingStub;
  const mockStream = new PassThrough({
    objectMode: true,
    transform: transformStub,
  });
  // trigger as many responses as needed
  if (responses) {
    for (let i = 0; i < responses.length; ++i) {
      setImmediate(() => {
        mockStream.write({});
      });
    }
    setImmediate(() => {
      mockStream.end();
    });
  } else {
    setImmediate(() => {
      mockStream.write({});
    });
    setImmediate(() => {
      mockStream.end();
    });
  }
  return sinon.stub().returns(mockStream);
}

function stubAsyncIterationCall<ResponseType>(
  responses?: ResponseType[],
  error?: Error
) {
  let counter = 0;
  const asyncIterable = {
    [Symbol.asyncIterator]() {
      return {
        async next() {
          if (error) {
            return Promise.reject(error);
          }
          if (counter >= responses!.length) {
            return Promise.resolve({done: true, value: undefined});
          }
          return Promise.resolve({done: false, value: responses![counter++]});
        },
      };
    },
  };
  return sinon.stub().returns(asyncIterable);
}

describe('v1.RegionsClient', () => {
  let googleAuth: GoogleAuth;
  beforeEach(() => {
    googleAuth = {
      getClient: sinon.stub().resolves({
        getRequestHeaders: sinon
          .stub()
          .resolves({Authorization: 'Bearer SOME_TOKEN'}),
      }),
    } as unknown as GoogleAuth;
  });
  afterEach(() => {
    sinon.restore();
  });
  describe('Common methods', () => {
    it('has servicePath', () => {
      const servicePath = regionsModule.v1.RegionsClient.servicePath;
      assert(servicePath);
    });

    it('has apiEndpoint', () => {
      const apiEndpoint = regionsModule.v1.RegionsClient.apiEndpoint;
      assert(apiEndpoint);
    });

    it('has port', () => {
      const port = regionsModule.v1.RegionsClient.port;
      assert(port);
      assert(typeof port === 'number');
    });

    it('should create a client with no option', () => {
      const client = new regionsModule.v1.RegionsClient();
      assert(client);
    });

    it('should create a client with gRPC fallback', () => {
      const client = new regionsModule.v1.RegionsClient({
        fallback: true,
      });
      assert(client);
    });

    it('has initialize method and supports deferred initialization', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      assert.strictEqual(client.regionsStub, undefined);
      await client.initialize();
      assert(client.regionsStub);
    });

    it('has close method for the initialized client', done => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      assert(client.regionsStub);
      client.close().then(() => {
        done();
      });
    });

    it('has close method for the non-initialized client', done => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      assert.strictEqual(client.regionsStub, undefined);
      client.close().then(() => {
        done();
      });
    });

    it('has getProjectId method', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
      const result = await client.getProjectId();
      assert.strictEqual(result, fakeProjectId);
      assert((client.auth.getProjectId as SinonStub).calledWithExactly());
    });

    it('has getProjectId method with callback', async () => {
      const fakeProjectId = 'fake-project-id';
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.auth.getProjectId = sinon
        .stub()
        .callsArgWith(0, null, fakeProjectId);
      const promise = new Promise((resolve, reject) => {
        client.getProjectId((err?: Error | null, projectId?: string | null) => {
          if (err) {
            reject(err);
          } else {
            resolve(projectId);
          }
        });
      });
      const result = await promise;
      assert.strictEqual(result, fakeProjectId);
    });
  });

  describe('get', () => {
    it('invokes get without error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetRegionRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['project']
      );
      request.project = defaultValue1;
      const defaultValue2 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['region']
      );
      request.region = defaultValue2;
      const expectedHeaderRequestParams = `project=${defaultValue1}&region=${defaultValue2}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.compute.v1.Region()
      );
      client.innerApiCalls.get = stubSimpleCall(expectedResponse);
      const [response] = await client.get(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.get as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.get as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes get without error using callback', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetRegionRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['project']
      );
      request.project = defaultValue1;
      const defaultValue2 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['region']
      );
      request.region = defaultValue2;
      const expectedHeaderRequestParams = `project=${defaultValue1}&region=${defaultValue2}`;
      const expectedResponse = generateSampleMessage(
        new protos.google.cloud.compute.v1.Region()
      );
      client.innerApiCalls.get = stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.get(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.compute.v1.IRegion | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.get as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.get as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes get with error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetRegionRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['project']
      );
      request.project = defaultValue1;
      const defaultValue2 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['region']
      );
      request.region = defaultValue2;
      const expectedHeaderRequestParams = `project=${defaultValue1}&region=${defaultValue2}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.get = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.get(request), expectedError);
      const actualRequest = (client.innerApiCalls.get as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.get as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes get with closed client', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.GetRegionRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['project']
      );
      request.project = defaultValue1;
      const defaultValue2 = getTypeDefaultValue(
        '.google.cloud.compute.v1.GetRegionRequest',
        ['region']
      );
      request.region = defaultValue2;
      const expectedError = new Error('The client has already been closed.');
      client.close();
      await assert.rejects(client.get(request), expectedError);
    });
  });

  describe('list', () => {
    it('invokes list without error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
      ];
      client.innerApiCalls.list = stubSimpleCall(expectedResponse);
      const [response] = await client.list(request);
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.list as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.list as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes list without error using callback', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
      ];
      client.innerApiCalls.list = stubSimpleCallWithCallback(expectedResponse);
      const promise = new Promise((resolve, reject) => {
        client.list(
          request,
          (
            err?: Error | null,
            result?: protos.google.cloud.compute.v1.IRegion[] | null
          ) => {
            if (err) {
              reject(err);
            } else {
              resolve(result);
            }
          }
        );
      });
      const response = await promise;
      assert.deepStrictEqual(response, expectedResponse);
      const actualRequest = (client.innerApiCalls.list as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.list as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes list with error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.innerApiCalls.list = stubSimpleCall(undefined, expectedError);
      await assert.rejects(client.list(request), expectedError);
      const actualRequest = (client.innerApiCalls.list as SinonStub).getCall(0)
        .args[0];
      assert.deepStrictEqual(actualRequest, request);
      const actualHeaderRequestParams = (
        client.innerApiCalls.list as SinonStub
      ).getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
      assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
    });

    it('invokes listStream without error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
      ];
      client.descriptors.page.list.createStream =
        stubPageStreamingCall(expectedResponse);
      const stream = client.listStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.compute.v1.Region[] = [];
        stream.on('data', (response: protos.google.cloud.compute.v1.Region) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      const responses = await promise;
      assert.deepStrictEqual(responses, expectedResponse);
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.list, request)
      );
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('invokes listStream with error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.list.createStream = stubPageStreamingCall(
        undefined,
        expectedError
      );
      const stream = client.listStream(request);
      const promise = new Promise((resolve, reject) => {
        const responses: protos.google.cloud.compute.v1.Region[] = [];
        stream.on('data', (response: protos.google.cloud.compute.v1.Region) => {
          responses.push(response);
        });
        stream.on('end', () => {
          resolve(responses);
        });
        stream.on('error', (err: Error) => {
          reject(err);
        });
      });
      await assert.rejects(promise, expectedError);
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .calledWith(client.innerApiCalls.list, request)
      );
      assert(
        (client.descriptors.page.list.createStream as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with list without error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        auth: googleAuth,
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedResponse = [
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
        generateSampleMessage(new protos.google.cloud.compute.v1.Region()),
      ];
      client.descriptors.page.list.asyncIterate =
        stubAsyncIterationCall(expectedResponse);
      const responses: protos.google.cloud.compute.v1.IRegion[] = [];
      const iterable = client.listAsync(request);
      for await (const resource of iterable) {
        responses.push(resource!);
      }
      assert.deepStrictEqual(responses, expectedResponse);
      assert.deepStrictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert(
        (client.descriptors.page.list.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });

    it('uses async iteration with list with error', async () => {
      const client = new regionsModule.v1.RegionsClient({
        credentials: {client_email: 'bogus', private_key: 'bogus'},
        projectId: 'bogus',
      });
      client.initialize();
      const request = generateSampleMessage(
        new protos.google.cloud.compute.v1.ListRegionsRequest()
      );
      const defaultValue1 = getTypeDefaultValue(
        '.google.cloud.compute.v1.ListRegionsRequest',
        ['project']
      );
      request.project = defaultValue1;
      const expectedHeaderRequestParams = `project=${defaultValue1}`;
      const expectedError = new Error('expected');
      client.descriptors.page.list.asyncIterate = stubAsyncIterationCall(
        undefined,
        expectedError
      );
      const iterable = client.listAsync(request);
      await assert.rejects(async () => {
        const responses: protos.google.cloud.compute.v1.IRegion[] = [];
        for await (const resource of iterable) {
          responses.push(resource!);
        }
      });
      assert.deepStrictEqual(
        (client.descriptors.page.list.asyncIterate as SinonStub).getCall(0)
          .args[1],
        request
      );
      assert(
        (client.descriptors.page.list.asyncIterate as SinonStub)
          .getCall(0)
          .args[2].otherArgs.headers['x-goog-request-params'].includes(
            expectedHeaderRequestParams
          )
      );
    });
  });
});