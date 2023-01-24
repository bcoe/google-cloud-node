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

function main(parent, algorithm, importJob) {
  // [START cloudkms_v1_generated_KeyManagementService_ImportCryptoKeyVersion_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name google.cloud.kms.v1.CryptoKey.name  of the
   *  CryptoKey google.cloud.kms.v1.CryptoKey  to be imported into.
   *  The create permission is only required on this key when creating a new
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion.
   */
  // const parent = 'abc123'
  /**
   *  Optional. The optional name google.cloud.kms.v1.CryptoKeyVersion.name  of
   *  an existing CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  to
   *  target for an import operation. If this field is not present, a new
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  containing the
   *  supplied key material is created.
   *  If this field is present, the supplied key material is imported into
   *  the existing CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion. To
   *  import into an existing
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion, the
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  must be a child of
   *  ImportCryptoKeyVersionRequest.parent google.cloud.kms.v1.ImportCryptoKeyVersionRequest.parent,
   *  have been previously created via ImportCryptoKeyVersion , and be in
   *  DESTROYED google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROYED 
   *  or
   *  IMPORT_FAILED google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.IMPORT_FAILED 
   *  state. The key material and algorithm must match the previous
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  exactly if the
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  has ever contained
   *  key material.
   */
  // const cryptoKeyVersion = 'abc123'
  /**
   *  Required. The
   *  algorithm google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionAlgorithm 
   *  of the key being imported. This does not need to match the
   *  version_template google.cloud.kms.v1.CryptoKey.version_template  of the
   *  CryptoKey google.cloud.kms.v1.CryptoKey  this version imports into.
   */
  // const algorithm = {}
  /**
   *  Required. The name google.cloud.kms.v1.ImportJob.name  of the
   *  ImportJob google.cloud.kms.v1.ImportJob  that was used to wrap this key
   *  material.
   */
  // const importJob = 'abc123'
  /**
   *  Optional. The wrapped key material to import.
   *  Before wrapping, key material must be formatted. If importing symmetric key
   *  material, the expected key material format is plain bytes. If importing
   *  asymmetric key material, the expected key material format is PKCS#8-encoded
   *  DER (the PrivateKeyInfo structure from RFC 5208).
   *  When wrapping with import methods
   *  (RSA_OAEP_3072_SHA1_AES_256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_3072_SHA1_AES_256 
   *  or
   *  RSA_OAEP_4096_SHA1_AES_256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_4096_SHA1_AES_256 
   *  or
   *  RSA_OAEP_3072_SHA256_AES_256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_3072_SHA256_AES_256 
   *  or
   *  RSA_OAEP_4096_SHA256_AES_256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_4096_SHA256_AES_256),
   *  this field must contain the concatenation of:
   *  <ol>
   *    <li>An ephemeral AES-256 wrapping key wrapped with the
   *        public_key google.cloud.kms.v1.ImportJob.public_key  using
   *        RSAES-OAEP with SHA-1/SHA-256, MGF1 with SHA-1/SHA-256, and an empty
   *        label.
   *    </li>
   *    <li>The formatted key to be imported, wrapped with the ephemeral AES-256
   *        key using AES-KWP (RFC 5649).
   *    </li>
   *  </ol>
   *  This format is the same as the format produced by PKCS#11 mechanism
   *  CKM_RSA_AES_KEY_WRAP.
   *  When wrapping with import methods
   *  (RSA_OAEP_3072_SHA256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_3072_SHA256 
   *  or
   *  RSA_OAEP_4096_SHA256 google.cloud.kms.v1.ImportJob.ImportMethod.RSA_OAEP_4096_SHA256),
   *  this field must contain the formatted key to be imported, wrapped with the
   *  public_key google.cloud.kms.v1.ImportJob.public_key  using RSAES-OAEP
   *  with SHA-256, MGF1 with SHA-256, and an empty label.
   */
  // const wrappedKey = 'Buffer.from('string')'
  /**
   *  Optional. This field has the same meaning as
   *  wrapped_key google.cloud.kms.v1.ImportCryptoKeyVersionRequest.wrapped_key.
   *  Prefer to use that field in new work. Either that field or this field
   *  (but not both) must be specified.
   */
  // const rsaAesWrappedKey = 'Buffer.from('string')'

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callImportCryptoKeyVersion() {
    // Construct request
    const request = {
      parent,
      algorithm,
      importJob,
    };

    // Run request
    const response = await kmsClient.importCryptoKeyVersion(request);
    console.log(response);
  }

  callImportCryptoKeyVersion();
  // [END cloudkms_v1_generated_KeyManagementService_ImportCryptoKeyVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));