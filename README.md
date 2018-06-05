# 这个库实现：

1. 在节点群落生成时，为每个DHT中的节点生成一个随机数（目前规定有10个节点群落，分别为1到10，节点分配到的随机数范围也为1到10之间的整数）
2. 可以获取DHT中每个节点应在的节点群落编号
3. 统计从其它节点获取的节点分配数
4. 计算DHT中每个节点应在的节点群落

# 可能的方法有：

```
Array[String]: GroupIDgenerator()
String: getGroupID(nodeKey)
Boolean: setGroupIDs(...groupIDs) or setGroupIDs(...groupIDs, callback)
Boolean: _calcGroupIDs()
```