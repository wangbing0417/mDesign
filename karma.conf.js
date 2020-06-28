module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],
    client: {
      chai: {
        includeStack: true
      }
    },

    // list of files/patterns to load in the browser
    files: ['dist/**/*.test.js', 'dist/**/*.test.css'],
    exclude: [],
    preprocessors: {},
    // 测试结果输出，默认提供 dots 与 progress 两种
    reporters: ['progress'],

    // web server port
    port: 8888,
    colors: true,
    logLevel: config.LOG_INFO,
    authWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: false,
    concurrency: Infinity
  })
}
