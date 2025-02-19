export default ({ config }) => ({
  ...config,
  ...{
    updates: {
      url: "https://expo-open-ota-production-9c9a.up.railway.app",
      codeSigningMetadata: {
        keyid: "main",
        alg: "rsa-v1_5-sha256",
      },
      codeSigningCertificate: "./certs/certificate.pem",
      enabled: true,
      requestHeaders: {
        "expo-channel-name": process.env.RELEASE_CHANNEL,
      },
      channel: "production",
      runtimeVersion: "1.0.0",
    },
  },
});
