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
  // [START composer_v1_generated_Environments_GetEnvironment_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The resource name of the environment to get, in the form:
   *  "projects/{projectId}/locations/{locationId}/environments/{environmentId}"
   */
  // const name = 'abc123'

  // Imports the Service library
  const {EnvironmentsClient} = require('@google-cloud/orchestration-airflow').v1;

  // Instantiates a client
  const serviceClient = new EnvironmentsClient();

  async function callGetEnvironment() {
    // Construct request
    const request = {
    };

    // Run request
    const response = await serviceClient.getEnvironment(request);
    console.log(response);
  }

  callGetEnvironment();
  // [END composer_v1_generated_Environments_GetEnvironment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
