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

function main(gameServerDeployment, updateMask) {
  // [START gameservices_v1_generated_GameServerDeploymentsService_UpdateGameServerDeployment_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The game server delpoyment to be updated.
   *  Only fields specified in update_mask are updated.
   */
  // const gameServerDeployment = {}
  /**
   *  Required. Mask of fields to update. At least one path must be supplied in
   *  this field. For the `FieldMask` definition, see
   *  https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
   */
  // const updateMask = {}

  // Imports the Gaming library
  const {GameServerDeploymentsServiceClient} = require('@google-cloud/game-servers').v1;

  // Instantiates a client
  const gamingClient = new GameServerDeploymentsServiceClient();

  async function callUpdateGameServerDeployment() {
    // Construct request
    const request = {
      gameServerDeployment,
      updateMask,
    };

    // Run request
    const [operation] = await gamingClient.updateGameServerDeployment(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callUpdateGameServerDeployment();
  // [END gameservices_v1_generated_GameServerDeploymentsService_UpdateGameServerDeployment_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
