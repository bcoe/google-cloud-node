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

function main(name, ciphertext) {
  // [START cloudkms_v1_generated_KeyManagementService_AsymmetricDecrypt_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  to use for
   *  decryption.
   */
  // const name = 'abc123'
  /**
   *  Required. The data encrypted with the named
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion's public key using
   *  OAEP.
   */
  // const ciphertext = 'Buffer.from('string')'
  /**
   *  Optional. An optional CRC32C checksum of the
   *  AsymmetricDecryptRequest.ciphertext google.cloud.kms.v1.AsymmetricDecryptRequest.ciphertext.
   *  If specified,
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  verify the integrity of the received
   *  AsymmetricDecryptRequest.ciphertext google.cloud.kms.v1.AsymmetricDecryptRequest.ciphertext 
   *  using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  report an error if the checksum verification fails. If you receive a
   *  checksum error, your client should verify that
   *  CRC32C(AsymmetricDecryptRequest.ciphertext google.cloud.kms.v1.AsymmetricDecryptRequest.ciphertext)
   *  is equal to
   *  AsymmetricDecryptRequest.ciphertext_crc32c google.cloud.kms.v1.AsymmetricDecryptRequest.ciphertext_crc32c,
   *  and if so, perform a limited number of retries. A persistent mismatch may
   *  indicate an issue in your computation of the CRC32C checksum. Note: This
   *  field is defined as int64 for reasons of compatibility across different
   *  languages. However, it is a non-negative integer, which will never exceed
   *  2^32-1, and can be safely downconverted to uint32 in languages that support
   *  this type.
   */
  // const ciphertextCrc32c = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callAsymmetricDecrypt() {
    // Construct request
    const request = {
      name,
      ciphertext,
    };

    // Run request
    const response = await kmsClient.asymmetricDecrypt(request);
    console.log(response);
  }

  callAsymmetricDecrypt();
  // [END cloudkms_v1_generated_KeyManagementService_AsymmetricDecrypt_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
