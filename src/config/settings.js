import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: "https://localhost:4000/api",
  },
  staging: {
    apiUrl: "https://dev.example.com/api",
  },
  prod: {
    apiUrl: "https://example.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
