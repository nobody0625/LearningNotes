## type 类型别名

- type 为现有类型或复杂类型组合创建新名称
- 重复声明 type 会报错
- type 通过 & 来实现类型的扩展

```ts
// 1. 定义联合类型 Id
type Id = string | number;
let id: Id = 1;
id = "a";

// 2. 定义 Point 对象类型
type Point = {
  x: number;
  y: number;
};
const p2: Point = {
  x: 1,
  y: 1,
};

// 3. 定义函数类型 SetPoint
type SetPoint = (x: number, y: number) => void;
const fn: SetPoint = () => {}; // 空实现，但类型正确
fn(1, 2);

// 4. type 通过 & 来实现类型的扩展
type myType = {
  name: string;
  age: number;
};
type myType1 = {
  class: string;
};
type newType = myType & myType1;
const newObj: newType = {
  name: "ls",
  age: 20,
  class: "1",
};
```

## interface 接口

- 接口用来定义一个类结构
- 重复声明 interface 会合并
- 接口中所有的成员都不能有实际的值
- 接口无法被实例化，只能被实现 `implements`
- 一个实现接口的类，必须实现接口内所描述的所有成员
- 接口允许继承多个接口来拓展自己，继承的各个接口使用逗号 `,` 分隔

```ts
interface myInterface {
  name: string;
  age: number;
  run(): boolean;
}
class person implements myInterface {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  run(): boolean {
    return true;
  }
}

interface IParent1 {
  v1: number;
}
interface IParent2 {
  v2: number;
}
interface Child extends IParent1, IParent2 {}
let Iobj: Child = { v1: 12, v2: 23 };
console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2); // value 1: 12 value 2: 23
```

## type 和 interface 的区别

- type 不会创建新的类型，它只是对已有类型的直接引用，而 interface 是定义了一个新的接口类型
- type 能够表示非对象类型，而 interface 则只能表示对象类型
- interface 通过 extends 继承其他接口，type 通过 & 实现类型的扩展
- 重复声明 interface 会合并，重复声明 type 报错
