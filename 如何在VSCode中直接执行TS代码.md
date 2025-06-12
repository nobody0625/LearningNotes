# 如何在VSCode中直接执行TS代码

## 下载 Code Runner 插件

## 执行指令下载 TypeScript 包和 ts-node 模块

```shell
npm install -g typescript
npm install -g ts-node
```
上述指令的安装地址都是当前使用的Nodejs包内

## 在ts文件同目录下创建 tsconfig.json 文件
tsconfig.json 文件文件内容为空也没关系

ts-node 在处理 TypeScript 文件时的行为差异：

* 当 tsconfig.json 文件存在时（即使内容被注释）：

    * ts-node 识别到这是一个 TypeScript 项目,采用默认的 TypeScript 编译配置,允许更灵活的模块系统处理

* 当 tsconfig.json 文件不存在时：
    * ts-node 会回退到严格的默认行为,默认使用 CommonJS 模块系统
