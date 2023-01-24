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
  // [START workflows_v1beta_generated_Workflows_ListWorkflows_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Project and location from which the workflows should be listed.
   *  Format: projects/{project}/locations/{location}
   */
  // const parent = 'abc123'
  /**
   *  Maximum number of workflows to return per call. The service may return
   *  fewer than this value. If the value is not specified, a default value of
   *  500 will be used. The maximum permitted value is 1000 and values greater
   *  than 1000 will be coerced down to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous `ListWorkflows` call.
   *  Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to `ListWorkflows` must
   *  match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Filter to restrict results to specific workflows.
   */
  // const filter = 'abc123'
  /**
   *  Comma-separated list of fields that that specify the order of the results.
   *  Default sorting order for a field is ascending. To specify descending order
   *  for a field, append a " desc" suffix.
   *  If not specified, the results will be returned in an unspecified order.
   */
  // const orderBy = 'abc123'

  // Imports the Workflows library
  const {WorkflowsClient} = require('@google-cloud/workflows').v1beta;

  // Instantiates a client
  const workflowsClient = new WorkflowsClient();

  async function callListWorkflows() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await workflowsClient.listWorkflowsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListWorkflows();
  // [END workflows_v1beta_generated_Workflows_ListWorkflows_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
