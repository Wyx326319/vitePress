import{_ as e,c as a,o as p,a4 as t}from"./chunks/framework.CUUm20XC.js";const h=JSON.parse('{"title":"webpack","description":"","frontmatter":{},"headers":[],"relativePath":"essay/web/webpack.md","filePath":"essay/web/webpack.md"}'),c={name:"essay/web/webpack.md"},r=t('<h1 id="webpack" tabindex="-1">webpack <a class="header-anchor" href="#webpack" aria-label="Permalink to &quot;webpack&quot;">​</a></h1><h2 id="_1-webpack打包和不打包的区别" tabindex="-1">1.webpack打包和不打包的区别？ <a class="header-anchor" href="#_1-webpack打包和不打包的区别" aria-label="Permalink to &quot;1.webpack打包和不打包的区别？&quot;">​</a></h2><p>1.运行效率</p><p>2.对基础的支持不够</p><h2 id="_2-webpack是怎么打包的-babel是做什么的" tabindex="-1">2.webpack是怎么打包的，babel是做什么的？ <a class="header-anchor" href="#_2-webpack是怎么打包的-babel是做什么的" aria-label="Permalink to &quot;2.webpack是怎么打包的，babel是做什么的？&quot;">​</a></h2><p>webpack会把js css image看作一个模块，用import/require引入</p><p>找到入口文件，通过入口文件找到关联的依赖文件，把他们打包到一起</p><p>把bundle文件，拆分成多个小的文件，异步按需加载所需要的文件</p><p>如果一个被多个文件引用，打包时只会生成一个文件</p><p>如果引用的文件没有调用，不会打包，如果引入的变量和方法没有调用也不会打包</p><p>对于多个入口文件，加入引入了相同的代码，可以用插件把他抽离到公共文件中</p>',11),b=[r];function s(o,_,i,n,l,d){return p(),a("div",null,b)}const w=e(c,[["render",s]]);export{h as __pageData,w as default};