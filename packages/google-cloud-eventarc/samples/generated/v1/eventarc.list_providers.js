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
  // [START eventarc_v1_generated_Eventarc_ListProviders_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The parent of the provider to get.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of providers to return on each page.
   */
  // const pageSize = 1234
  /**
   *  The page token; provide the value from the `next_page_token` field in a
   *  previous `ListProviders` call to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListProviders` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  The sorting order of the resources returned. Value should be a
   *  comma-separated list of fields. The default sorting oder is ascending. To
   *  specify descending order for a field, append a `desc` suffix; for example:
   *  `name desc, _id`.
   */
  // const orderBy = 'abc123'
  /**
   *  The filter field that the list request will filter on.
   */
  // const filter = 'abc123'

  // Imports the Eventarc library
  const {EventarcClient} = require('@google-cloud/eventarc').v1;

  // Instantiates a client
  const eventarcClient = new EventarcClient();

  async function callListProviders() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await eventarcClient.listProvidersAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListProviders();
  // [END eventarc_v1_generated_Eventarc_ListProviders_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
