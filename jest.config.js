module.exports = {
  verbose: false,
  clearMocks: true,
  collectCoverage: true,
  moduleDirectories: ["node_modules", "src"],
  collectCoverageFrom: ["/src/**/*.{js,ts,jsx,tsx}"],
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageDirectory: "coverage",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./setupTests.js"],
  moduleNameMapper: {
    "^.+\\.scss$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$"
};
