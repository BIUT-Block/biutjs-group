const SecjsGroup = require('../src/index')
const expect = require('chai').expect

describe('SecjsGroup', () => {
  let config = {'accAddrLength' : 32}
  const secGroup = new SecjsGroup(config)

  describe('generateGroupId() function test', () => {
    it('generated group ID is within the defined range', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('generateGroupIds(peerAddrList) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('getGroupId(accAddr) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('setGroupId(accAddr, groupId) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('updateStatisticsDht(peerAccGroupIdDht) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('setGroupIdDht() function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('storeGroupIdTableToFile(file, content) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('_accAddrValidate(accAddr) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })

  describe('_groupIdValidate(groupId) function test', () => {
    it('', () => {
      expect(() => {}).to.not.throw()
    })
  })
})
