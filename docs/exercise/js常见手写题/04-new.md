---
title: 实现new
order: 4
---

- 创建一个新的对象`obj`

- 将对象与构建函数通过原型链连接起来
- 将构建函数中的`this`绑定到新建的对象`obj`上，用构造函数内部的方法修改空对象
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.say = function () {
  console.log(this.name);
};
function myNew(func, ...args) {
  const obj = {};
  obj.__proto__ = func.prototype;
  let result = func.apply(obj, args);
  return result instanceof Object ? result : obj;
}
let p = myNew(Person, 'zfy', '22');
console.log(p);
p.say();
```
