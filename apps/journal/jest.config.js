module.exports = {
  name: 'journal',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/journal',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
