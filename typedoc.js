module.exports = {
  entryPoints: ['./src/typings/NIM.ts', './src/typings/services/V2NIMSessionService.ts', './src/typings/services/V2NIMMessageService.ts'],
  out: 'dist/apidocs',
  disableSources: true,
  hideGenerator: true,
  readme: './src/typings/README.md'
}
