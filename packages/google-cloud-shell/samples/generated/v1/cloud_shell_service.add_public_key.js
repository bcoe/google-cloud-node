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

function main() {
  // [START cloudshell_v1_generated_CloudShellService_AddPublicKey_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Environment this key should be added to, e.g.
   *  `users/me/environments/default`.
   */
  // const environment = 'abc123'
  /**
   *  Key that should be added to the environment. Supported formats are
   *  `ssh-dss` (see RFC4253), `ssh-rsa` (see RFC4253), `ecdsa-sha2-nistp256`
   *  (see RFC5656), `ecdsa-sha2-nistp384` (see RFC5656) and
   *  `ecdsa-sha2-nistp521` (see RFC5656). It should be structured as
   *  &lt;format&gt; &lt;content&gt;, where &lt;content&gt; part is encoded with
   *  Base64.
   */
  // const key = 'abc123'

  // Imports the Shell library
  const {CloudShellServiceClient} = require('@google-cloud/shell').v1;

  // Instantiates a client
  const shellClient = new CloudShellServiceClient();

  async function callAddPublicKey() {
    // Construct request
    const request = {
    };

    // Run request
    const [operation] = await shellClient.addPublicKey(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callAddPublicKey();
  // [END cloudshell_v1_generated_CloudShellService_AddPublicKey_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));