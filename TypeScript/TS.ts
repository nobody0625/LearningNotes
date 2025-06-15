// console.log("hello,world!");

// let list: number[] = [1, "hello", 3];

// let person: [string, number] = ["Alice", 25, 1]; //Type '[string, number, number]' is not assignable to type '[string, number]'.Source has 3 element(s) but target allows only 2.

// let a: [string, number] = [2, 25]; //Type 'number' is not assignable to type 'string'.

// enum Color {
//   Red,
//   Green,
//   Blue,
// }

// let favoriteColor: Color = Color.Green;
// console.log(favoriteColor); // 1

// console.log(Color.Red); // 0
// console.log(Color[1]); // Green
// console.log(Color.Blue); // 2

// enum Color1 {
//   Red,
//   Green = 2,
//   Yellow = 100,
//   Blue,
// }

// console.log(Color1.Red); // 0
// console.log(Color1.Blue); // 101

// enum Direction {
//   Up = "UP",
//   Down, //Enum member must have initializer.
//   Left = 1,
// }

// function logMessage(message: string): void {
//   console.log(message);
// }
// logMessage("Hello, TypeScript!"); //Hello, TypeScript!

// let x: void = 1; //Type 'number' is not assignable to type 'void'.

// let randomValue: any = 42;
// randomValue = "hello";
// console.log(randomValue); // hello

// let randomValue1: number = 42;
// randomValue1 = "hello"; //Type 'string' is not assignable to type 'number'.

// function throwError(message: string): never {
//   throw new Error(message);
// }

// let x: number;
// x = 1;
// x = undefined;
// x = null;
// console.log(x); // null

// let x: null;
// x = never; //Type 'never' is not assignable to type 'null'.

// let someValue: any = "this is a string";
// const strLength: number = someValue!.length;

// function add(x: number, y?: number, z: number = 1): number {
//     return x + y + z;
// }
// console.log(add(1, undefined, 2)) // NaN

// function buildName(firstName: string, ...restOfName: string[]) {
//     return firstName + " " + restOfName.join(" ");
// }
// console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie")); // Joseph Samuel Lucas MacKinzie

// // 2. 定义 Point 对象类型
// type Point = {
//   x: number;
//   y: number;
// }

// // 3. 创建 Point 类型的对象 p2
// const p2: Point = {
//   X: 1,  // 错误：属性 "X" 不存在于类型 "Point" 中
//   y: 1,
// }

// interface IParent1 {
//   v1: number;
// }
// interface IParent2 {
//   v2: number;
// }
// interface Child extends IParent1, IParent2 {}
// let Iobj: Child = { v1: 12, v2: 23 };
// console.log("value 1: " + Iobj.v1 + " value 2: " + Iobj.v2); // value 1: 12 value 2: 23

// interface Lengthwise {
//     length: number;
// }

// function logLength<T extends Lengthwise>(arg: T): void {
//     console.log(arg.length);
// }

// logLength("hello"); // 5
// logLength(42); // Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.

// 基本语法
// function defaultValue<T = string>(arg: T): T {
//     return arg;
// }

// // 使用带默认值的泛型函数
// let result1 = defaultValue("hello"); // 推断为 string 类型
// let result2 = defaultValue(42);      // 推断为 number 类型

// type User = {
//   id: number;
//   kind: string;
// };
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     kind: "customer",
//   };
// }

// makeCustomer({ id: 1, kind: "adin", name: "jack" });

// type A = keyof any

// interface Father {
//     blood: '0',
// }

// interface Mather {
//     blood: 'X',
// }

// type Son<T> = T extends Father ? Father : Mather;

// type boy = Son<{}>; // Mather
// type girl = Son<{blood: '0'}>; // Father

// type Foo<T> = T extends {t: infer Test} ? Test : string;

// type One = Foo<number>; // string
// type Two = Foo<{t: boolean}> // boolean
// type Three = Foo<{a: number, t: () => void}> // () => void

// type Animal = {
//     name: string;
//     age: number;
//     eat: () => number;
// }

// //把对象类型的全部属性变成可选
// type PartialAnimal = Partial<Animal>;


// // 实现Partial
// type MyPartial<T> = {
//     [P in keyof T]?: T[P]
// }

// type Animal = {
//     name?: string;
//     age: number;
//     eat?: () => number;
// }

// //把对象的全部属性变成必选
// type RequiredAnimal = Required<Animal>;

// type Required<T> = { [P in keyof T]-?: T[P] };

// // 声明一个对象的key和value类型
// const obj: Record<string, string> = {name: 'zhangsan', tag: '打工人', data: 'str'};

// // 将一个联合类型的值映射到另一个类型上
// type Animal = 'dog' | 'cat' | 'fish';

// type AnimalInfo = Record<Animal, { name: string; age: number }>;

// const animals: AnimalInfo = {
//   dog: { name: 'dogName', age: 2 },
//   cat: { name: 'catName', age: 3 },
//   fish: { name: 'fishName', age: 5 },
// };

// // 实现Record
// type MyRecord<K extends keyof any, T> = {
//     [key in K]: T;
// }

// // 测试信息类型
// interface User {
//     account: string
//     avatar: string
//     id: string
//     mobile: string
//     token: string
//   }
 
// // 使用Pick泛型工具： 抽取 id 和 token
// type PickUserTest = Pick<User, 'id' | 'token' | 'account'>



// // 实现Pick
// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// type Animal = {
//     name: string;
//     age: number;
//     eat: () => void;
// }

// // 去除对象类型T中包含K 的键值对
// const OmitAnimal: Omit<Animal, 'name' | 'age'> = {eat: ()=>{console.log('eat')}};

// interface User {
//     account: string
//     avatar: string
//     id: string
//     mobile: string
//     token: string
//   }

// type OmitUserTest = Omit<User, 'token' | 'mobile'>

// function foo(x: string | number) {
//     return x;
// }

// // 获取函数返回的类型
// type FooType = ReturnType<typeof foo>; // string | number

// // 实现ReturnType
// type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

// let x: number;
// console.log(x);

