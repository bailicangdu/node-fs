# node-fs

基于 node + typescript 搭建的文件/图片管理系统

# 技术栈

node + typescript + mongodb + GraphicsMagick(图片管理)

# 初衷

最近随着开源项目越来越多，就会产生一些重复的工作，比如图片管理，[node-elm](https://github.com/bailicangdu/node-elm)项目已经有一套图片管理系统，但是和项目耦合比较深，功能比较少，不利扩展，灵活性较低。

于是打算写一套文件管理系统，为多个项目提供统一的静态文件处理，提供更加丰富的功能和API，甚至于以后项目的迁移更加方便。

# typescript
js 是一种动态弱类型语言，其类型可以随意转换的特质非常灵活，但也同样非常危险。ts提供较严格的类型检查和语法检查，可以降低项目在开发阶段的所产生的不必要的错误，并且可以很好的兼容esnext
