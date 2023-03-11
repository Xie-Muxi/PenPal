# PenPal

## 运行前端

### 所需环境

#### Node16

[下载Node16.19.1](https://nodejs.org/download/release/v16.19.1/)

#### vue-cli

```shell
npm install -g vue-cli # 安装Vue脚手架
```

### 安装 pnpm

在 Linux 或 macOS 下：

```shell
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

在 Windows 下（使用 PowerShell）：

```shell
Invoke-WebRequest 'https://get.pnpm.io/v6.16.js' -UseBasicParsing -o pnpm.js; node pnpm.js add --global pnpm; Remove-Item pnpm.js
```

#### Node Module

```shell
cd PenPal-Vite
pnpm i # 安装所需依赖
```

#### 启动前端

```
npm run dev 
```

checkma_xh
