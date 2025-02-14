export default ({ config }) => ({
  ...config,
  ...{
    updates: {
      url: "https://expo.wdata.pw/manifest",
      codeSigningMetadata: {
        keyid: "main",
        alg: "rsa-v1_5-sha256",
      },
      codeSigningCertificate: "certs/certificate.pem",
      enabled: true,
      requestHeaders: {
        "expo-channel-name": process.env.RELEASE_CHANNEL,
      },
    },
  },
});
