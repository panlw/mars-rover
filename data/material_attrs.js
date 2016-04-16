var categories = [{
  "code": "MBD",
  "text": "主板"
}, {
  "code": "SCN",
  "text": "屏幕"
}, {
  "code": "BBD",
  "text": "背板"
}, {
  "code": "BOX",
  "text": "包装箱"
}];

var suppliers = [{
  "code": "Z",
  "text": "Zenith"
}, {
  "code": "I",
  "text": "IBM"
}, {
  "code": "A",
  "text": "Apple"
}, {
  "code": "H",
  "text": "Huawei"
}, {
  "code": "L",
  "text": "Lenovo"
}];

var attrs = [{
  code: "categories",
  name: "分类",
  data: categories
}, {
  code: "suppliers",
  name: "供应商",
  data: suppliers
}];

module.exports = attrs;
