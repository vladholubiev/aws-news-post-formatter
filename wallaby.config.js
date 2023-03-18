module.exports = () => {
  return {
    autoDetect: true,
    files: ['package.json', 'src/**/get-custom-tags.ts', '!src/**/get-custom-tags.test.ts'],
    tests: ['src/**/get-custom-tags.test.ts'],
    env: {
      params: {
        env: 'TZ=UTC',
      },
    },
    testFramework: {
      // the jest configuration file path
      // (relative to project root)
      configFile: './jest.config.wallaby.js',
    },
  };
};
