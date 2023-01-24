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



'use strict';

function main(parent, document) {
  // [START contentwarehouse_v1_generated_DocumentService_CreateDocument_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent name.
   *  Format: projects/{project_number}/locations/{location}.
   */
  // const parent = 'abc123'
  /**
   *  Required. The document to create.
   */
  // const document = {}
  /**
   *  The meta information collected about the end user, used to enforce access
   *  control for the service.
   */
  // const requestMetadata = {}
  /**
   *  Default document policy during creation. Conditions defined in the policy
   *  will be ignored.
   */
  // const policy = {}
  /**
   *  Request Option for processing Cloud AI Document in CW Document.
   */
  // const cloudAiDocumentOption = {}
  /**
   *  Field mask for creating Document fields. If mask path is empty,
   *  it means all fields are masked.
   *  For the `FieldMask` definition,
   *  see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  // const createMask = {}

  // Imports the Contentwarehouse library
  const {DocumentServiceClient} = require('@google-cloud/contentwarehouse').v1;

  // Instantiates a client
  const contentwarehouseClient = new DocumentServiceClient();

  async function callCreateDocument() {
    // Construct request
    const request = {
      parent,
      document,
    };

    // Run request
    const response = await contentwarehouseClient.createDocument(request);
    console.log(response);
  }

  callCreateDocument();
  // [END contentwarehouse_v1_generated_DocumentService_CreateDocument_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
