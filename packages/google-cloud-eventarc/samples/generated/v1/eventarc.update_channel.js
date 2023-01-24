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

function main(validateOnly) {
  // [START eventarc_v1_generated_Eventarc_UpdateChannel_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The channel to be updated.
   */
  // const channel = {}
  /**
   *  The fields to be updated; only fields explicitly provided are updated.
   *  If no field mask is provided, all provided fields in the request are
   *  updated. To update all fields, provide a field mask of "*".
   */
  // const updateMask = {}
  /**
   *  Required. If set, validate the request and preview the review, but do not
   *  post it.
   */
  // const validateOnly = true

  // Imports the Eventarc library
  const {EventarcClient} = require('@google-cloud/eventarc').v1;

  // Instantiates a client
  const eventarcClient = new EventarcClient();

  async function callUpdateChannel() {
    // Construct request
    const request = {
      validateOnly,
    };

    // Run request
    const [operation] = await eventarcClient.updateChannel(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateChannel();
  // [END eventarc_v1_generated_Eventarc_UpdateChannel_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
