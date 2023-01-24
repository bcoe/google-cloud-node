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

function main(scope, constraint) {
  // [START cloudasset_v1_generated_AssetService_AnalyzeOrgPolicyGovernedAssets_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The organization to scope the request. Only organization
   *  policies within the scope will be analyzed. The output assets will
   *  also be limited to the ones governed by those in-scope organization
   *  policies.
   *  * organizations/{ORGANIZATION_NUMBER} (e.g., "organizations/123456")
   */
  // const scope = 'abc123'
  /**
   *  Required. The name of the constraint to analyze governed assets for. The
   *  analysis only contains analyzed organization policies for the provided
   *  constraint.
   */
  // const constraint = 'abc123'
  /**
   *  The expression to filter the governed assets in result. The only supported
   *  fields for governed resources are `governed_resource.project` and
   *  `governed_resource.folders`. The only supported fields for governed iam
   *  policies are `governed_iam_policy.project` and
   *  `governed_iam_policy.folders`. The only supported operator is `=`.
   *  Example 1: governed_resource.project="projects/12345678" filter will return
   *  all governed resources under projects/12345678 including the project
   *  ifself, if applicable.
   *  Example 2: governed_iam_policy.folders="folders/12345678" filter will
   *  return all governed iam policies under folders/12345678, if applicable.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of items to return per page. If unspecified,
   *  AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets google.cloud.asset.v1.AnalyzeOrgPolicyGovernedAssetsResponse.governed_assets 
   *  will contain 100 items with a maximum of 200.
   */
  // const pageSize = 1234
  /**
   *  The pagination token to retrieve the next page.
   */
  // const pageToken = 'abc123'

  // Imports the Asset library
  const {AssetServiceClient} = require('@google-cloud/asset').v1;

  // Instantiates a client
  const assetClient = new AssetServiceClient();

  async function callAnalyzeOrgPolicyGovernedAssets() {
    // Construct request
    const request = {
      scope,
      constraint,
    };

    // Run request
    const iterable = await assetClient.analyzeOrgPolicyGovernedAssetsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callAnalyzeOrgPolicyGovernedAssets();
  // [END cloudasset_v1_generated_AssetService_AnalyzeOrgPolicyGovernedAssets_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
