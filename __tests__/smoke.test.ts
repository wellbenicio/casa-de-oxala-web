/**
 * Basic smoke test to verify the test infrastructure is working correctly.
 * More specific component tests should be added as the application grows.
 */
describe('Test infrastructure', () => {
  it('should run basic assertions', () => {
    expect(true).toBe(true)
  })

  it('should handle string operations', () => {
    const appName = 'Casa de Oxalá'
    expect(appName).toBeTruthy()
    expect(appName).toContain('Oxalá')
  })
})
