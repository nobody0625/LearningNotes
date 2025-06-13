## 参数类型，可选参数，默认参数和返回值

* 参数类型 `:`
* 可选参数 `?`：参数可省略，未传时为 `undefined`
* 默认参数 `=`：参数可省略，未传时使用默认值
* 剩余参数 `...`：剩余参数语法允许我们将一个不确定数量的参数作为一个数组传入
* 返回值类型 `:`

> 参数不能同时设置为可选和默认

```ts
function add(x: number, y?: number, z: number = 1): number {
    return x + y + z;
}
console.log(add(1, 2) // 4
console.log(add(1, undefined, 2)) // NaN

function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie")); // Joseph Samuel Lucas MacKinzie
```