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

function main(parent, agent) {
  // [START dialogflow_v3beta1_generated_Agents_CreateAgent_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The location to create a agent for.
   *  Format: `projects/<Project ID>/locations/<Location ID>`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The agent to create.
   */
  // const agent = {}

  // Imports the Cx library
  const {AgentsClient} = require('@google-cloud/dialogflow-cx').v3beta1;

  // Instantiates a client
  const cxClient = new AgentsClient();

  async function callCreateAgent() {
    // Construct request
    const request = {
      parent,
      agent,
    };

    // Run request
    const response = await cxClient.createAgent(request);
    console.log(response);
  }

  callCreateAgent();
  // [END dialogflow_v3beta1_generated_Agents_CreateAgent_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
