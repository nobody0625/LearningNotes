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

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie")); // Joseph Samuel Lucas MacKinzie
 
