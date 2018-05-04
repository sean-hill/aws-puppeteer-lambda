const path = require('path')
const fs = require('fs-extra')
const sut = require('../')
const PATHS = require('../src/paths')
const { expect } = require('chai')

describe('Puppeteer Lambda Tests', () => {
  beforeEach(async () => {
    await fs.remove(PATHS.EXECUTABLE)
  })

  it('should extract headless chrome to the /tmp directory', async () => {
    const executablePath = await sut.extract()
    expect(executablePath).to.equal(PATHS.EXECUTABLE)

    const executableExists = await fs.pathExists(PATHS.EXECUTABLE)
    expect(executableExists).to.equal(true)
  })

  it('should reuse the same extracted executable if available', async () => {
    await sut.extract()
    const startTime = new Date()

    await sut.extract()
    const endTime = new Date()

    expect(startTime - endTime).to.be.lessThan(10)
  })

  it('should cleanup the TMP directory', async () => {
    const leftoversFile = path.resolve(PATHS.TMP, './core.headless_shell.123')
    await fs.writeFile(leftoversFile, 'leftovers')
    await sut.cleanup()

    const leftoversExists = await fs.pathExists(leftoversFile)
    expect(leftoversExists).to.equal(false)
  })
})
