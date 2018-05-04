const path = require('path')
const TEMP_PATH = process.env.TMP_PATH || '/tmp'

module.exports = {
  TMP: TEMP_PATH,
  COMPRESSED_EXECUTABLE: path.resolve(__dirname, './headless_shell_r549031.zip'),
  EXECUTABLE: path.resolve(TEMP_PATH, './headless_shell')
}
