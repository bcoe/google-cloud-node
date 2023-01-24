// Copyright 2022 Google LLC
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
  // [START containeranalysis_v1_generated_Grafeas_ListNotes_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  The name of the project to list notes for in the form of
   *  `projects/[PROJECT_ID]`.
   */
  // const parent = 'abc123'
  /**
   *  The filter expression.
   */
  // const filter = 'abc123'
  /**
   *  Number of notes to return in the list. Must be positive. Max allowed page
   *  size is 1000. If not specified, page size defaults to 20.
   */
  // const pageSize = 1234
  /**
   *  Token to provide to skip to a particular spot in the list.
   */
  // const pageToken = 'abc123'

  // Imports the Containeranalysis library
  const {ContainerAnalysisClient} =
    // eslint-disable-next-line node/no-missing-require
    require('@google-cloud/containeranalysis').v1;

  // Instantiates a client
  const containeranalysisClient = new ContainerAnalysisClient();

  async function callListNotes() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await containeranalysisClient
      .getGrafeasClient()
      .listNotesAsync(request);
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListNotes();
  // [END containeranalysis_v1_generated_Grafeas_ListNotes_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
