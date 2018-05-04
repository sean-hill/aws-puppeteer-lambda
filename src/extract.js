const fs = require('fs-extra')
const decompress = require('decompress')
const PATHS = require('./paths')

module.exports = async () => {
  if (!(await fs.pathExists(PATHS.EXECUTABLE))) {
    await decompress(PATHS.COMPRESSED_EXECUTABLE, PATHS.TMP)
  }

  return PATHS.EXECUTABLE
}
