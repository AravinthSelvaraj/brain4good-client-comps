const config = {
    setupFilesAfterEnv: [
        "<rootDir>/jest-setup.ts"
    ],
    moduleNameMapper: {
        "\\.(css|less)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif)$": "<rootDir>/src/__mocks__/fileMock.ts"
    },
    testEnvironment: "jsdom"
};

export default config;