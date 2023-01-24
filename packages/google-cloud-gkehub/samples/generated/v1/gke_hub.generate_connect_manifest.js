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
  // [START gkehub_v1_generated_GkeHub_GenerateConnectManifest_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Membership resource name the Agent will associate with, in the format
   *  `projects/* /locations/* /memberships/*`.
   */
  // const name = 'abc123'
  /**
   *  Optional. Namespace for GKE Connect agent resources. Defaults to `gke-connect`.
   *  The Connect Agent is authorized automatically when run in the default
   *  namespace. Otherwise, explicit authorization must be granted with an
   *  additional IAM binding.
   */
  // const namespace = 'abc123'
  /**
   *  Optional. URI of a proxy if connectivity from the agent to gkeconnect.googleapis.com
   *  requires the use of a proxy. Format must be in the form
   *  `http(s)://{proxy_address}`, depending on the HTTP/HTTPS protocol
   *  supported by the proxy. This will direct the connect agent's outbound
   *  traffic through a HTTP(S) proxy.
   */
  // const proxy = 'Buffer.from('string')'
  /**
   *  Optional. The Connect agent version to use. Defaults to the most current version.
   */
  // const version = 'abc123'
  /**
   *  Optional. If true, generate the resources for upgrade only. Some resources
   *  generated only for installation (e.g. secrets) will be excluded.
   */
  // const isUpgrade = true
  /**
   *  Optional. The registry to fetch the connect agent image from. Defaults to
   *  gcr.io/gkeconnect.
   */
  // const registry = 'abc123'
  /**
   *  Optional. The image pull secret content for the registry, if not public.
   */
  // const imagePullSecretContent = 'Buffer.from('string')'

  // Imports the Gkehub library
  const {GkeHubClient} = require('@google-cloud/gke-hub').v1;

  // Instantiates a client
  const gkehubClient = new GkeHubClient();

  async function callGenerateConnectManifest() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const response = await gkehubClient.generateConnectManifest(request);
    console.log(response);
  }

  callGenerateConnectManifest();
  // [END gkehub_v1_generated_GkeHub_GenerateConnectManifest_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
