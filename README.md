## vite-vue3-react-svelte-todo
### preview

vue3: https://vite-vue3-todo.netlify.app

react: https://vite-react-todo.netlify.app

svelte: https://vite-svelte-todo.netlify.app
### quick start 
```
cd vite-vue3-react-svelte-todo && yarn 

```

vue3:
```
yarn vue3-dev
```

react:
```
yarn react-dev
```

svelte:
```
yarn svelte-dev
```
## Vite 会成为2021年最受欢迎的前端工具吗？ 

![1.png](https://i.loli.net/2021/02/05/ZAnfoHDNy35eMm7.png)

### 说在前面
测试不同的前端构建工具一直以来是笔者的一个奇怪的嗜好，因为说实话,`webpack` 真的太难用了。上手成本高、插件鱼龙混杂、最难受的就是启动`dev`太慢，这些都是它的缺点。直到`vite`出现，笔者才原来前端开发可以如此丝滑。
### `Vite`是什么？

来自流行的 `Vue.js` 框架的祖师爷 `Evan You` 的一个新的前端构建工具。它由两个主要部分组成:
- 一个通过`native ES modules`提供源文件的开发服务器，具有丰富的内置特性和快得惊人的热模块替换(`HMR`)。
- 将代码与 `Rollup` 捆绑在一起，输出用于生产的高度优化的构建包。


最近在在各种平台（`Twitter`、`GayHub`、`掘金`、`知乎`等平台）都看见了`vite`，特别是 Evan You 本人，其更新速度，简直令人咋舌。同时他几乎每天都在`Twitter`上面推广`vite`，基于这些原因，真的很难让笔者不去尝试`vite`。

### 目的
上面说了，笔者一直在寻找最好用的构建工具，其实笔者的要求真的很简单：

- 它一定要够快（不会随着项目增大而变慢）
- 它必须支持 `Typescript`
- 它必须支持现在主流的前端框架（包括`vue`、`react`等）
- 它必须支持`HMR`（热模块替换）
- 它必须支持 `tree shaking`
- 它必须支持各种 `CSS` 工具
- 它支持导入 `SVG`，`PNG`，`JSON` 和其他我们想要导入的东西
- 它支持`SSR`（服务端渲染）

讲道理，其实这些要求不算过分吧。

有了这些需求清单，我们继续往下面看，看看`vite`是否能满足我们这些要求。


### 测试`Vite`
为了测试`vite`,笔者创建了一个简单的`Todo App`。它的功能很简单，我们可以在`待办页面`输入我们的待办事项，点击该项待办事项，即可以标注它已经完成，同时我们可以在`已完成页面`查看我们已经完成了哪些待办事项。

![todo-list.png](https://i.loli.net/2021/02/05/2fpyEGuFUt9sADT.png)

刚刚上面说了，我们想要知道vite对于现在各种前端框架的支持程度，所以我决定分别使用`vue3`、`react`、`svelte`来实现我们的`Todo App`。同时值得一提的是，虽然这篇文章是我为了测试`vite`而专门写的，但是通过这篇文章，你能够从头到尾的学会，如何将`vite`与`vue3`、`react`、`svelte`结合起来使用。

但是你可能会好奇，为什么我这里同时也要尝试将`vite` 和 `svelte`结合起来？因为`svelte` 这个前端框架新秀成为了2020最受欢迎的前端框架，所以我想一并尝试一下。

![fornt-end.png](https://i.loli.net/2021/02/05/8O7rWpJExD1QbBz.png)

`svelte`的优点这里笔者不作过多介绍。至于`svelte`为什么会火，可以看看这篇文章：[都快2020年，你还没听说过SvelteJS?](https://zhuanlan.zhihu.com/p/97825481)   

说了这么多，让我们一起开始吧！

哦对了，在开始之前，我们还得有个准备。既然我们分别测试了`vue3`、`react`、`svelte`，那我们也同时对他们做一个比较吧。我会从以下两个维度来进行比较：
- 开发体验
- 构建包的体积

> 其中开发体验包括对于`typescript`的支持、`状态管理`、`路由管理`等。

基于这个目的，我们得保持一定的公平性，意思是我们在进行功能实现时，尽可能少的借助框架本身之外的工具。比如我们在实现`状态管理`时，我们尽量使用框架本身自带的功能来实现。

好了，带着这两个目的，我们一起操作起来吧！
#### vue3

为了将三个`Todo App`都放在一个工程下面，我们采用了 [`lerna`](https://github.com/lerna/lerna) 来管理我们的三个`Todo App`。

```bash
# install lerna and init project
$ npm install lerna -g
$ mkdir vite-vue3-react-svelte-todo && cd vite-vue3-react-svelte-todo
$ lerna init
```

接着我们进入`packages`下面新建我们的`vue3-todo App`。由于vite本身是由vue的作者实现的，所以毋庸置疑，`vite`+`vue3`肯定是有`template`的:

```bash
$ cd packages
$ yarn create @vitejs/app vue3-todo --template vue-ts
```