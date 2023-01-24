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

function main(name) {
  // [START secretmanager_v1_generated_SecretManagerService_DeleteSecret_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the Secret google.cloud.secretmanager.v1.Secret  to delete in the format
   *  `projects/* /secrets/*`.
   */
  // const name = 'abc123'
  /**
   *  Optional. Etag of the Secret google.cloud.secretmanager.v1.Secret. The request succeeds if it matches
   *  the etag of the currently stored secret object. If the etag is omitted,
   *  the request succeeds.
   */
  // const etag = 'abc123'

  // Imports the Secretmanager library
  const {SecretManagerServiceClient} = require('@google-cloud/secret-manager').v1;

  // Instantiates a client
  const secretmanagerClient = new SecretManagerServiceClient();

  async function callDeleteSecret() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await secretmanagerClient.deleteSecret(request);
    console.log(response);
  }

  callDeleteSecret();
  // [END secretmanager_v1_generated_SecretManagerService_DeleteSecret_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
