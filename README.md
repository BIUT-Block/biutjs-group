<a name="SECGroup"></a>

## SECGroup
**Kind**: global class  

* [SECGroup](#SECGroup)
    * [new SECGroup(config)](#new_SECGroup_new)
    * [.generateGroupId()](#SECGroup+generateGroupId) 鈬?<code>Number</code>
    * [.generateGroupIds(peerAddrList)](#SECGroup+generateGroupIds) 鈬?<code>None</code>
    * [.getGroupId(accAddr)](#SECGroup+getGroupId) 鈬?<code>Number</code>
    * [.getGeneratedPeerGroupId()](#SECGroup+getGeneratedPeerGroupId) 鈬?<code>Object</code>
    * [.getGroupIdDht()](#SECGroup+getGroupIdDht) 鈬?<code>Object</code>
    * [.getGroupIdStatisticsDht()](#SECGroup+getGroupIdStatisticsDht) 鈬?<code>Object</code>
    * [.setGroupId(accAddr, groupId)](#SECGroup+setGroupId) 鈬?<code>None</code>
    * [.updateStatisticsDht(peerAccGroupIdDht)](#SECGroup+updateStatisticsDht) 鈬?<code>None</code>
    * [.setGroupIdDht()](#SECGroup+setGroupIdDht) 鈬?<code>None</code>
    * [.storeGroupIdTableToFile(file, content)](#SECGroup+storeGroupIdTableToFile) 鈬?<code>None</code>
    * [._accAddrValidate(accAddr)](#SECGroup+_accAddrValidate) 鈬?<code>Boolean</code>
    * [._groupIdValidate(groupId)](#SECGroup+_groupIdValidate) 鈬?<code>Boolean</code>

<a name="new_SECGroup_new"></a>

### new SECGroup(config)

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | JSON format configurations for initialization |

<a name="SECGroup+generateGroupId"></a>

### secGroup.generateGroupId() 鈬?<code>Number</code>
Generate a group id

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  
<a name="SECGroup+generateGroupIds"></a>

### secGroup.generateGroupIds(peerAddrList) 鈬?<code>None</code>
This function generates group ids for all the peer nodes

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| peerAddrList | <code>Array</code> | Peer nodes' address list |

<a name="SECGroup+getGroupId"></a>

### secGroup.getGroupId(accAddr) 鈬?<code>Number</code>
This function returns the group ID for a specific address

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| accAddr | <code>String</code> | Account address |

<a name="SECGroup+getGeneratedPeerGroupId"></a>

### secGroup.getGeneratedPeerGroupId() 鈬?<code>Object</code>
This function returns a table which contains peer nodes' group IDs generated by current node

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  
<a name="SECGroup+getGroupIdDht"></a>

### secGroup.getGroupIdDht() 鈬?<code>Object</code>
This function returns a table which contains all the nodes' located group ID

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  
<a name="SECGroup+getGroupIdStatisticsDht"></a>

### secGroup.getGroupIdStatisticsDht() 鈬?<code>Object</code>
This function returns a table, the content of which lists the frequency of each group ID generated by its peer nodes

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  
<a name="SECGroup+setGroupId"></a>

### secGroup.setGroupId(accAddr, groupId) 鈬?<code>None</code>
This function sets the group ID for a specific address

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| accAddr | <code>String</code> | Account address |
| groupId | <code>Number</code> | Group ID value which will be set to the corresponding account address |

<a name="SECGroup+updateStatisticsDht"></a>

### secGroup.updateStatisticsDht(peerAccGroupIdDht) 鈬?<code>None</code>
This function updates the table which stores the frequency of each group ID generated by its peer nodes

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| peerAccGroupIdDht | <code>Object</code> | Other peer nodes generated group ID table |

<a name="SECGroup+setGroupIdDht"></a>

### secGroup.setGroupIdDht() 鈬?<code>None</code>
This function finally determined the located group IDs for each nodes (unchangable during this working period).

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  
<a name="SECGroup+storeGroupIdTableToFile"></a>

### secGroup.storeGroupIdTableToFile(file, content) 鈬?<code>None</code>
This function appends the group ID statistics table into a JSON file

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| file | <code>String</code> | The json file path and name |
| content | <code>Object</code> | Data to be written, default data is this.accGroupIdDht |

<a name="SECGroup+_accAddrValidate"></a>

### secGroup._accAddrValidate(accAddr) 鈬?<code>Boolean</code>
Validate the account address is legal

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| accAddr | <code>String</code> | Account address |

<a name="SECGroup+_groupIdValidate"></a>

### secGroup._groupIdValidate(groupId) 鈬?<code>Boolean</code>
Validate the group ID value is legal

**Kind**: instance method of [<code>SECGroup</code>](#SECGroup)  

| Param | Type | Description |
| --- | --- | --- |
| groupId | <code>Number</code> | Group ID value |

