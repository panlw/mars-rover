var procs = [{
  "id": "EASM-HMI-BURN",
  "name": "烧录"
}, {
  "id": "EASM-HMI-ASM",
  "name": "组装"
}, {
  "id": "EASM-HMI-AGING",
  "name": "老化"
}, {
  "id": "EASM-HMI-TEST",
  "name": "测试"
}, {
  "id": "EASM-HMI-PACK",
  "name": "包装"
}];

var items = [{
  "id": "1001",
  "ctg": "MBD",
  "code": "MBD-A1",
  "name": "A1型主板",
  "main": 1,
  "from": "I",
  "unit": "p",
  "misc": "USB2"
}, {
  "id": "1002",
  "ctg": "MBD",
  "code": "MBD-A2",
  "name": "A2型主板",
  "main": 1,
  "from": "I",
  "unit": "p",
  "misc": "USB2/WiFi"
}, {
  "id": "1003",
  "ctg": "MBD",
  "code": "MBD-A3",
  "name": "A3型主板",
  "main": 1,
  "from": "A",
  "unit": "p",
  "misc": "USB3/WiFi"
}, {
  "id": "2001",
  "ctg": "SCN",
  "code": "SCN-A1",
  "name": "A1型屏幕",
  "main": 1,
  "from": "ZENITH",
  "unit": "p",
  "misc": "8寸"
}, {
  "id": "2002",
  "ctg": "SCN",
  "code": "SCN-A2",
  "name": "A2型屏幕",
  "main": 1,
  "from": "A",
  "unit": "p",
  "misc": "8寸/触摸"
}, {
  "id": "2003",
  "ctg": "SCN",
  "code": "SCN-B1",
  "name": "B1型屏幕",
  "main": 1,
  "from": "H",
  "unit": "p",
  "misc": "10寸/触摸"
}, {
  "id": "3001",
  "ctg": "BBD",
  "code": "BBD-A1",
  "name": "A1型背板",
  "main": 1,
  "from": "L",
  "unit": "p",
  "misc": "8寸"
}, {
  "id": "3002",
  "ctg": "BBD",
  "code": "BBD-A2",
  "name": "A2型背板",
  "main": 1,
  "from": "L",
  "unit": "p",
  "misc": "10寸"
}, {
  "id": "4001",
  "ctg": "BOX",
  "code": "BOX-A1",
  "name": "A1型包装箱",
  "main": 1,
  "from": "Z",
  "unit": "p",
  "misc": "40x40x20"
}, {
  "id": "4002",
  "ctg": "BOX",
  "code": "BOX-A2",
  "name": "A2型包装箱",
  "main": 1,
  "from": "Z",
  "unit": "p",
  "misc": "50x50x30"
}]

var deviceSpecs = [{
  "code": "B",
  "text": "烧录设备"
}, {
  "code": "A",
  "text": "老化设备"
}];

var workerSpecs = [{
  "code": "S",
  "text": "资深"
}];

var data = {
  procs: procs,
  items: items,
  specs: {
    device: deviceSpecs,
    worker: workerSpecs
  }
};

module.exports = data;
