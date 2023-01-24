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
  // [START cloudchannel_v1_generated_CloudChannelReportsService_RunReportJob_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The report's resource name. Specifies the account and report used
   *  to generate report data. The report_id identifier is a UID (for example,
   *  `613bf59q`).
   *  Name uses the format:
   *  accounts/{account_id}/reports/{report_id}
   */
  // const name = 'abc123'
  /**
   *  Optional. The range of usage or invoice dates to include in the result.
   */
  // const dateRange = {}
  /**
   *  Optional. A structured string that defines conditions on dimension columns
   *  to restrict the report output.
   *  Filters support logical operators (AND, OR, NOT) and conditional operators
   *  (=, !=, <, >, <=, and >=) using `column_id` as keys.
   *  For example:
   *  `(customer:"accounts/C123abc/customers/S456def" OR
   *  customer:"accounts/C123abc/customers/S789ghi") AND
   *  invoice_start_date.year >= 2022`
   */
  // const filter = 'abc123'
  /**
   *  Optional. The BCP-47 language code, such as "en-US".  If specified, the
   *  response is localized to the corresponding language code if the
   *  original data sources support it.
   *  Default is "en-US".
   */
  // const languageCode = 'abc123'

  // Imports the Channel library
  const {CloudChannelReportsServiceClient} = require('@google-cloud/channel').v1;

  // Instantiates a client
  const channelClient = new CloudChannelReportsServiceClient();

  async function callRunReportJob() {
    // Construct request
    const request = {
      name,
    };

    // Run request
    const [operation] = await channelClient.runReportJob(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callRunReportJob();
  // [END cloudchannel_v1_generated_CloudChannelReportsService_RunReportJob_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));