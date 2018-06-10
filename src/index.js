const ranGen = require('./secjs-random-generate')

class SECGroup {
  constructor (config) {
    this.accAddrLength = config.accAddrLength // 128
    this.groupIdRange = {
      'min': 1,
      'max': 10
    }

    this.accGroupIdDht = {
      // 'account address': group ID
    }

    this.accGroupIdStaDht = {
      // 'account address': {
      //    'group ID': statistic value
      // }, ...
    }
  }

  generateGroupId () {
    let length = this.groupIdRange['max'] - this.groupIdRange['min']
    let result = ranGen.randomGenerate('number', length)

    return (result + this.groupIdRange['min'])
  }

  getGroupId (accAddr) {
    if (!this._accAddrValidate(accAddr)) {
      throw new Error('Invalid account address')
    }

    if (this.accGroupIdDht[accAddr] === undefined) {
      return null
    }

    return this.accGroupIdDht[accAddr]
  }

  setGroupId (accAddr, groupId) {
    if (!this._accAddrValidate(accAddr)) {
      throw new Error('Invalid account address')
    }

    if (!this._groupIdValidate(groupId)) {
      throw new Error('Invalid group Id, out of range')
    }

    this.accGroupIdDht[accAddr] = groupId
  }

  updateStaDhtFromPeer (peerAccGroupIdDht) {
    Object.keys(peerAccGroupIdDht).forEach(function (accAddr) {
      if (this.accGroupIdStaDht[accAddr] === undefined) {
        this.accGroupIdStaDht[accAddr] = peerAccGroupIdDht[accAddr]
      } else {
        Object.keys(peerAccGroupIdDht[accAddr]).forEach(function (groupId) {
          if (this.accGroupIdStaDht[accAddr][groupId] === undefined) {
            this.accGroupIdStaDht[accAddr][groupId] = peerAccGroupIdDht[accAddr][groupId]
          } else {
            this.accGroupIdStaDht[accAddr][groupId] += peerAccGroupIdDht[accAddr][groupId]
          }
        })
      }
    })
  }

  setGroupIdDht () {
    Object.keys(this.accGroupIdStaDht).forEach(function (accAddr) {
      let result = Object.keys(this.accGroupIdStaDht[accAddr]).forEach(function (groupId) {
        let maxGroupId = 0
        if (this.accGroupIdStaDht[accAddr][groupId] > maxGroupId) {
          maxGroupId = this.accGroupIdStaDht[accAddr][groupId]
        }
      })

      if (result !== 0) {
        this.accGroupIdDht[accAddr] = result
      }
    })
  }

  _accAddrValidate (accAddr) {
    if (typeof accAddr !== 'string') {
      return false
    }

    if (accAddr.length !== this.accAddrLength) {
      return false
    }

    return true
  }

  _groupIdValidate (groupId) {
    if ((groupId > this.groupIdRange['max']) || (groupId < this.groupIdRange['min'])) {
      return false
    }

    return true
  }
}

module.exports = SECGroup
