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

function main(parent) {
  // [START run_v2_generated_Services_ListServices_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location and project to list resources on.
   *  Location must be a valid GCP region, and cannot be the "-" wildcard.
   *  Format: projects/{project}/locations/{location}, where {project} can be
   *  project id or number.
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of Services to return in this call.
   */
  // const pageSize = 1234
  /**
   *  A page token received from a previous call to ListServices.
   *  All other parameters must match.
   */
  // const pageToken = 'abc123'
  /**
   *  If true, returns deleted (but unexpired) resources along with active ones.
   */
  // const showDeleted = true

  // Imports the Run library
  const {ServicesClient} = require('@google-cloud/run').v2;

  // Instantiates a client
  const runClient = new ServicesClient();

  async function callListServices() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await runClient.listServicesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListServices();
  // [END run_v2_generated_Services_ListServices_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
