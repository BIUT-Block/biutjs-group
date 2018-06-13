const SecjsGroup = require('../src/index')
const expect = require('chai').expect

describe('SecjsGroup', () => {
  const config = {'accAddrLength': 4}

  describe('generateGroupId() function test', () => {
    it('generated group ID is within the defined range', () => {
      let secGroup = new SecjsGroup(config)
      for (let i = 0; i < 100; i++) {
        let result = secGroup.generateGroupId()
        expect(result).to.be.within(1, 10)
      }
    })
  })

  describe('generateGroupIds(peerAddrList) function test', () => {
    it('valid peerAddrList input', () => {
      let secGroup = new SecjsGroup(config)
      let peerAddrList = ['aaaa', 'bbbb', 'cccc']
      secGroup.generateGroupIds(peerAddrList)

      expect(secGroup.generatedPeerGroupId['aaaa']).to.be.within(1, 10)
      expect(secGroup.generatedPeerGroupId['bbbb']).to.be.within(1, 10)
      expect(secGroup.generatedPeerGroupId['cccc']).to.be.within(1, 10)
    })

    it('invalid peerAddrList input type', () => {
      let secGroup = new SecjsGroup(config)
      let peerAddrList = "1234"
      expect(() => { secGroup.generateGroupIds(peerAddrList) }).to.throw('Invalid peer node address input type')

      peerAddrList = 1234
      expect(() => { secGroup.generateGroupIds(peerAddrList) }).to.throw('Invalid peer node address input type')
    })

    it('input contains duplicate addresses', () => {
      let secGroup = new SecjsGroup(config)
      let peerAddrList = ['aaaa', 'aaaa']
      expect(() => { secGroup.generateGroupIds(peerAddrList) }).to.throw('Input contains duplicate addresses')
    })

    it('invalid peerAddrList address value', () => {
      let secGroup = new SecjsGroup(config)
      let peerAddrList = ['aaa', 'bbbb', 'cccc']
      expect(() => { secGroup.generateGroupIds(peerAddrList) }).to.throw('Invalid peer node address')
    })
  })

  describe('getGroupId (accAddr) function test', () => {
    let secGroup = new SecjsGroup(config)
    let peerAddrList = ['aaaa', 'bbbb']
    secGroup.generateGroupIds(peerAddrList)
    secGroup.accGroupIdDht = secGroup.generatedPeerGroupId

    it('functionality correctness test', () => {
      expect(secGroup.getGroupId('aaaa')).to.be.within(1, 10)
      expect(secGroup.getGroupId('bbbb')).to.be.within(1, 10)
      expect(secGroup.getGroupId('cccc')).to.be.null
    })

    it('invalid accAddr input test', () => {
      expect(() => { secGroup.getGroupId('123') }).to.throw('Invalid account address')
      expect(() => { secGroup.getGroupId(['aaaa']) }).to.throw('Invalid account address')
    })
  })

  describe('setGroupId (accAddr, groupId) function test', () => {
    let secGroup = new SecjsGroup(config)

    it('functionality correctness test', () => {
      secGroup.setGroupId('aaaa', 1)
      expect(secGroup.getGroupId('aaaa')).to.equal(1)
    })

    it('invalid input test', () => {
      expect(() => { secGroup.setGroupId('123', 1) }).to.throw('Invalid account address')
      expect(() => { secGroup.setGroupId(['aaaa'], 1) }).to.throw('Invalid account address')

      expect(() => { secGroup.setGroupId('aaaa', 11) }).to.throw('Invalid group Id, out of range')
      expect(() => { secGroup.setGroupId('aaaa', [1]) }).to.throw('Invalid group Id, out of range')
    })
  })
})
