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

function main(parent, domainName, domain) {
  // [START managedidentities_v1beta1_generated_ManagedIdentitiesService_CreateMicrosoftAdDomain_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource project name and location using the form:
   *  `projects/{project_id}/locations/global`
   */
  // const parent = 'abc123'
  /**
   *  Required. A domain name, e.g. mydomain.myorg.com, with the following restrictions:
   *   * Must contain only lowercase letters, numbers, periods and hyphens.
   *   * Must start with a letter.
   *   * Must contain between 2-64 characters.
   *   * Must end with a number or a letter.
   *   * Must not start with period.
   *   * First segment length (mydomain form example above) shouldn't exceed
   *     15 chars.
   *   * The last segment cannot be fully numeric.
   *   * Must be unique within the customer project.
   */
  // const domainName = 'abc123'
  /**
   *  Required. A Managed Identity domain resource.
   */
  // const domain = {}

  // Imports the Managedidentities library
  const {ManagedIdentitiesServiceClient} = require('@google-cloud/managed-identities').v1beta1;

  // Instantiates a client
  const managedidentitiesClient = new ManagedIdentitiesServiceClient();

  async function callCreateMicrosoftAdDomain() {
    // Construct request
    const request = {
      parent,
      domainName,
      domain,
    };

    // Run request
    const [operation] = await managedidentitiesClient.createMicrosoftAdDomain(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateMicrosoftAdDomain();
  // [END managedidentities_v1beta1_generated_ManagedIdentitiesService_CreateMicrosoftAdDomain_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
