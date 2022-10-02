module.exports = {
  typescript: {
    compile: 'tsc',
    rewritePaths: {
      'src/': 'dist/src/',
      'test/': 'dist/test/'
    }
  },
  workerThreads: false
}
