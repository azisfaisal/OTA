export default ({ config }) => ({
  ...config,
  ...{
    updates: {
      url: "https://expo.wdata.pw",
      codeSigningMetadata: {
        keyid: "main",
        alg: "rsa-v1_5-sha256",
      },
      codeSigningCertificate: "certs/certificate.pem",
      enabled: true,
      requestHeaders: {
        "expo-channel-name": process.env.RELEASE_CHANNEL,
      },
      channel: "production",
      runtimeVersion: "1.0.0",
    },
  },
});
