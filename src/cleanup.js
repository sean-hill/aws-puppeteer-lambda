const fs = require('fs-extra')
const glob = require('glob')

module.exports = async () => {
  const files = glob.sync('/tmp/core.headless_shell.*')
  await Promise.all(files.map(file => fs.remove(file)))
}
