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

function main(backup) {
  // [START gkebackup_v1_generated_BackupForGKE_UpdateBackup_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. A new version of the Backup resource that contains updated fields.
   *  This may be sparsely populated if an `update_mask` is provided.
   */
  // const backup = {}
  /**
   *  This is used to specify the fields to be overwritten in the
   *  Backup targeted for update. The values for each of these
   *  updated fields will be taken from the `backup_plan` provided
   *  with this request. Field names are relative to the root of the resource.
   *  If no `update_mask` is provided, all fields in `backup` will be
   *  written to the target Backup resource.
   *  Note that OUTPUT_ONLY and IMMUTABLE fields in `backup` are ignored
   *  and are not used to update the target Backup.
   */
  // const updateMask = {}

  // Imports the Gkebackup library
  const {BackupForGKEClient} = require('@google-cloud/gke-backup').v1;

  // Instantiates a client
  const gkebackupClient = new BackupForGKEClient();

  async function callUpdateBackup() {
    // Construct request
    const request = {
      backup,
    };

    // Run request
    const [operation] = await gkebackupClient.updateBackup(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateBackup();
  // [END gkebackup_v1_generated_BackupForGKE_UpdateBackup_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
