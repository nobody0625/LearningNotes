## 泛型 \<T>

### 泛型定义

泛型（Generics）是一种编程语言特性，允许在定义函数、类、接口等时使用占位符来表示类型，而不是具体的类型，等到使用时再指定类型以实现灵活的类型检查

```ts
// 1. 泛型函数
function print(arg: string): string {
  return arg;
}
function print(arg: number): number {
  return arg;
}

function print<T>(arg: T): T {
  return arg;
}

// 2. 泛型接口
interface Pair<T, U> {
  first: T;
  second: U;
}

let pair: Pair<string, number> = { first: "hello", second: 42 };
console.log(pair); // { first: 'hello', second: 42 }

interface IValue {
  <T>(arg: T): T;
}

let printFn: IValue = (arg) => arg;

// 3. 泛型类
class Box<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let stringBox = new Box<string>("TypeScript");
console.log(stringBox.getValue()); // TypeScript
```

### 泛型约束 extends

用于限制泛型的类型范围，必须至少满足条件

```ts
interface Lengthwise {
  length: number;
}

// T 必须实现 Lengthwise 接口
function logLength<T extends Lengthwise>(arg: T): void {
  console.log(arg.length);
}

logLength("hello"); // 5
logLength(42); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
```

### 泛型默认值 =

当 ​​ 无法推断类型 ​​ 或 ​​ 未显式指定类型 ​​ 时，T 为默认类型

泛型默认值是一个 ​​ 后备机制 ​​，不是强制约束

```ts
function defaultValue<T = string>(arg: T): T {
  return arg;
}

let result1 = defaultValue("hello"); // 推断为 string 类型
let result2 = defaultValue(42); // 推断为 number 类型
```

## 泛型推断

### 一般推断顺序

泛型的类型推断遵循以下顺序:

显式指定类型 > 上下文推断（例如：传入的参数的类型）> 默认类型

### 条件类型

条件类型的一般性表达式：`SomeType` extends `OtherType` ? `TrueType` : `FalseType`;

含义：当 extends 左边的类型可以赋值给右边的类型（左边的类型是右边类型的子类型）时，表达式的值为 `TrueType`，否则为 `FalseType`

```ts
interface Father {
  blood: "0";
}

interface Mather {
  blood: "X";
}

type Son<T> = T extends Father ? Father : Mather;

type boy = Son<{}>; // Mather
type girl = Son<{ blood: "0" }>; // Father
```

### infer 推断

`infer` 关键字以声明方式引入一个新泛型类型变量，这个变量的值取决于传入的泛型 T

```ts
// 例1
type Foo<T> = T extends { t: infer Test } ? Test : string;

type One = Foo<number>; // string
type Two = Foo<{ t: boolean }>; // boolean
type Three = Foo<{ a: number; t: () => void }>; // () => void

// 例2
interface Customer {
  name: string;
  moneyPaid: number;
}

type custFuncType = (cust: Customer) => string;

type inferType<T> = T extends (params: infer P) => any ? P : T;

type inferResultType = inferType<custFuncType>; // Customer
```

> 新泛型类型变量只能在 true 的分支可以使用

## 泛型工具与手写实现

### Partial\<T>

作用：将对象类型的全部属性变成可选

```ts
type Animal = {
  name: string;
  age: number;
  eat: () => number;
};

//把对象类型的全部属性变成可选
type PartialAnimal = Partial<Animal>;

// 实现Partial
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
```

### Required\<T>

作用：将对象的全部属性变成必选

```ts
type Animal = {
  name?: string;
  age: number;
  eat?: () => number;
};

//把对象的全部属性变成必选
type RequiredAnimal = Required<Animal>;

// 实现Required
type MyRequired<T> = { [P in keyof T]-?: T[P] }; // - 为去除， -? 即去除可选
```

### Record\<K,T>

作用：

- 声明一个对象的 key 和 value 类型
- 将一个联合类型的值映射到另一个类型上

```ts
// 声明一个对象的key和value类型
const obj: Record<string, string> = {
  name: "zhangsan",
  tag: "打工人",
  data: "str",
};

// 将一个联合类型的值映射到另一个类型上
type Animal = "dog" | "cat" | "fish";

type AnimalInfo = Record<Animal, { name: string; age: number }>;

const animals: AnimalInfo = {
  dog: { name: "dogName", age: 2 },
  cat: { name: "catName", age: 3 },
  fish: { name: "fishName", age: 5 },
};

// 实现Record
type MyRecord<K extends keyof any, T> = {
  [key in K]: T;
};
```

### Pick\<T,K>

作用：将对象类型中对应键的类型提取出来

```ts
const bird: Pick<Animal, "name" | "age"> = { name: "bird", age: 1 };

// 测试信息类型
interface User {
  account: string;
  avatar: string;
  id: string;
  mobile: string;
  token: string;
}

// 使用Pick泛型工具： 抽取 id 和 token
type PickUserTest = Pick<User, "id" | "token" | "account">;

// 实现Pick
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
```

### Omit\<T,K>

作用：从对象类型中排出指定的属性类型，得到剩余的属性类型

```ts
type Animal = {
  name: string;
  age: number;
  eat: () => void;
};

// 去除对象类型T中包含K 的键值对
const OmitAnimal: Omit<Animal, "name" | "age"> = {
  eat: () => {
    console.log("eat");
  },
};

interface User {
  account: string;
  avatar: string;
  id: string;
  mobile: string;
  token: string;
}

type OmitUserTest = Omit<User, "token" | "mobile">;
```

### ReturnType\<T>

作用：获取函数返回的类型

```ts
function foo(x: string | number) {
  return x;
}

// 获取函数返回的类型
type FooType = ReturnType<typeof foo>; // string | number

// 实现ReturnType
type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;
```

## 例题

1. 函数声明的返回值类型与实现的返回值类型不一致

```ts
type User = {
  id: number;
  kind: string;
};
function makeCustomer<T extends User>(u: T): T {
  return {
    // return 报错
    id: u.id,
    kind: "customer",
  };
}

makeCustomer({ id: 1, kind: "adin", name: "jack" });

// Type '{ id: number; kind: string; name: string; }' is not assignable to type 'T'.
//  'T' could be instantiated with an arbitrary type which could be unrelated to '{ id: number; kind: string; name: string; }'.
```

```
泛型 T 是 User 的子类，它至少包含成员 id 和 kind，而函数实现的返回值类型为 { id: number, kind: string }，两者并不匹配。return处的报错与后续的函数调用无关，即使将函数调用注释掉也不会改变报错提示
```

```ts
//法一：使用展开运算符...确保类型匹配
type User = {
  id: number;
  kind: string;
};
function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
  };
}

//法二：使用类型断言强制类型一致
type User = {
  id: number;
  kind: string;
};
function makeCustomer<T extends User>(u: T): T {
  return {
    id: u.id,
    kind: "customer",
  } as T;
}
```
