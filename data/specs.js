var deviceSpecs = [{
  "code": "B",
  "text": "烧录设备"
}, {
  "code": "A",
  "text": "老化设备"
}, {
  "code": "P",
  "text": "包装设备"
}, {
  "code": "T",
  "text": "测试设备"
}, {
  "code": "BP",
  "text": "条码打印设备"
}, {
  "code": "BS",
  "text": "条码扫描设备"
}, {
  "code": "MT",
  "text": "MES终端设备"
}, {
  "code": "MS",
  "text": "移动货架"
}];

var workerSpecs = [{
  "code": "M",
  "text": "专家"
}, {
  "code": "S",
  "text": "资深"
}, {
  "code": "N",
  "text": "普通"
}, {
  "code": "T",
  "text": "实习"
}];

var specs = {
  device: deviceSpecs,
  worker: workerSpecs
};

module.exports = specs;
