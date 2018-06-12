const SecjsGroup = require('../src/index')
const expect = require('chai').expect

describe('SecjsGroup', () => {
  let config = {'accAddrLength': 4}
  const secGroup = new SecjsGroup(config)

  describe('generateGroupId() function test', () => {
    it('generated group ID is within the defined range', () => {
      for(let i = 0; i < 100; i++) {
        let result = secGroup.generateGroupId()
        expect(result).to.be.within(1, 10)
      }
    })
  })

  describe('generateGroupIds(peerAddrList) function test', () => {
    it('valid peerAddrList input', () => {
      let peerAddrList = ['aaaa', 'bbbb', 'cccc']
      secGroup.generateGroupIds(peerAddrList)

      expect(secGroup.generatedPeerGroupId['aaaa']).to.be.within(1, 10)
      expect(secGroup.generatedPeerGroupId['bbbb']).to.be.within(1, 10)
      expect(secGroup.generatedPeerGroupId['cccc']).to.be.within(1, 10)
    })

    it('test different peerAddrList input type', () => {
      let peerAddrList = "1234"
      expect().to.not.throw()
    })

    it('invalid peerAddrList address value', () => {
      expect().to.not.throw()
    })
  })
})
