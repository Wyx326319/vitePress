import{_ as a,c as e,o as t,a4 as i}from"./chunks/framework.CUUm20XC.js";const b=JSON.parse('{"title":"Javascript","description":"","frontmatter":{},"headers":[],"relativePath":"essay/web/javascript.md","filePath":"essay/web/javascript.md"}'),s={name:"essay/web/javascript.md"},p=i(`<h1 id="javascript" tabindex="-1">Javascript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;Javascript&quot;">​</a></h1><h2 id="_1-js由哪三部分组成" tabindex="-1">1.JS由哪三部分组成？ <a class="header-anchor" href="#_1-js由哪三部分组成" aria-label="Permalink to &quot;1.JS由哪三部分组成？&quot;">​</a></h2><p>ECMAScript：JS的核心内容，描述了语言的基础语法，比如var,for，数据类型（数组、字符串），</p><p>文档对象模型（DOM）：DOM把整个HTML页面规划为元素构成的文档</p><p>浏览器对象模型（BOM）：对浏览器窗口进行访问和操作</p><h2 id="_2-js有哪些内置对象" tabindex="-1">2.JS有哪些内置对象？ <a class="header-anchor" href="#_2-js有哪些内置对象" aria-label="Permalink to &quot;2.JS有哪些内置对象？&quot;">​</a></h2><p>String Boolean Number Array Object Function Math Date RegExp...</p><p>Math</p><p>abs() sqrt() max() min()</p><p>Data</p><p>new Data() getYear()</p><p>Array</p><p>String</p><p>concat() length slice() split()</p><h2 id="_3-操作数组的方法有哪些" tabindex="-1">3.操作数组的方法有哪些？ <a class="header-anchor" href="#_3-操作数组的方法有哪些" aria-label="Permalink to &quot;3.操作数组的方法有哪些？&quot;">​</a></h2><p>push() pop() sort() splice() unshift() shift() reverse() concat() join() map() filter()</p><p>ervery() some() reduce() isArray() findIndex()</p><p>哪些方法会改变原数组？</p><p>push() pop() unshift() shift() sort() reverse() splice()</p><h2 id="_4-js对数据类的检测方式有哪些" tabindex="-1">4.JS对数据类的检测方式有哪些？ <a class="header-anchor" href="#_4-js对数据类的检测方式有哪些" aria-label="Permalink to &quot;4.JS对数据类的检测方式有哪些？&quot;">​</a></h2><p>typeof()</p><p>instanceof()</p><p>constructor</p><p>Object.prototype.toString.call()</p><h2 id="_5-说一下闭包-闭包有什么特点" tabindex="-1">5.说一下闭包，闭包有什么特点？ <a class="header-anchor" href="#_5-说一下闭包-闭包有什么特点" aria-label="Permalink to &quot;5.说一下闭包，闭包有什么特点？&quot;">​</a></h2><p>什么是闭包？函数嵌套函数，内部函数被外部函数返回并保存下来时，就会产生闭包</p><p>特点：可以重复利用变量，并且这个变量不会污染全局的一种机制；这个变量是一直保存再内存中，不会被垃圾回收机制回收</p><p>缺点：闭包较多的时候，会消耗内存，导致页面的性能下降，在IE浏览器中才会导致内存泄漏</p><p>使用场景：防抖，节流，函数嵌套函数避免全局污染的时候</p><h2 id="_6-前端的内存泄漏怎么理解" tabindex="-1">6.前端的内存泄漏怎么理解？ <a class="header-anchor" href="#_6-前端的内存泄漏怎么理解" aria-label="Permalink to &quot;6.前端的内存泄漏怎么理解？&quot;">​</a></h2><p>JS里已经分配内存地址的对象，但是由于长时间没有释放或者没办法清除，造成长期占用内存的现象，会让内存资源大幅浪费，最终导致运行速度慢，甚至崩溃的情况。</p><p>垃圾回收机制</p><p>因素：一些为生命直接赋值的变量；一些未清空的定时器；过度的闭包；一些引用元素没有被清除。</p><h2 id="_7-事件委托是什么" tabindex="-1">7.事件委托是什么？ <a class="header-anchor" href="#_7-事件委托是什么" aria-label="Permalink to &quot;7.事件委托是什么？&quot;">​</a></h2><p>又叫事件代理，原理就是利用了事件冒泡的机制来实现，也就是说把子元素的事件绑定到了父元素的身上</p><p>如果子元素组织了事件冒泡，那么委托也就不成立</p><p>组织事件冒泡：event.stopPropagation()</p><p>addEventListener(&#39;click&#39;,函数名，true/false) 默认是false（事件冒泡），true（事件捕获）</p><p>好处：提高性能，减少事件的绑定，也就减少了内存的占用。</p><h2 id="_8-基本数据类型和引用数据类型的区别" tabindex="-1">8.基本数据类型和引用数据类型的区别？ <a class="header-anchor" href="#_8-基本数据类型和引用数据类型的区别" aria-label="Permalink to &quot;8.基本数据类型和引用数据类型的区别？&quot;">​</a></h2><p>基本数据类型：String Number Boolean undefined null</p><p>基本数据类型保存在栈内存当中，保存的就是一个具体的值</p><p>引用数据类型（复杂数据类型）：Object Function Array</p><p>保存在堆内存当中，声明一个引用类型的变量，它保存的是引用类型数据的地址</p><p>假如声明两个引用类型同时指向了一个地址的时候，修改其中一个那么另外一个也会改变</p><h2 id="_9-说一下原型链。" tabindex="-1">9.说一下原型链。 <a class="header-anchor" href="#_9-说一下原型链。" aria-label="Permalink to &quot;9.说一下原型链。&quot;">​</a></h2><p>原型就是一个普通对象，它是为构造函数的实例共享属性和方法；所有实例中引用的原型都是同一个对象</p><p>使用prototype可以把方法挂在原型上，内存值保存一份</p><p>proto可以理解为指针，实例对象中的属性，指向了构造函数的原型（prototype）</p><h2 id="_10-new操作符具体做了什么" tabindex="-1">10.new操作符具体做了什么？ <a class="header-anchor" href="#_10-new操作符具体做了什么" aria-label="Permalink to &quot;10.new操作符具体做了什么？&quot;">​</a></h2><p>1.先创建一个空对象</p><p>2.把空对象和构造函数通过原型链进行链接</p><p>3.把构造函数的this绑定到新的空对象身上</p><p>4.根据构建函数返回的类型判断，如果是值类型，则返回对象，如果是引用类型，就要返回这个引用类型</p><h2 id="_11-js是如何实现继承的" tabindex="-1">11.JS是如何实现继承的？ <a class="header-anchor" href="#_11-js是如何实现继承的" aria-label="Permalink to &quot;11.JS是如何实现继承的？&quot;">​</a></h2><p>1.原型链继承</p><p>2.借用构造函数继承</p><p>3.组合式继承</p><p>4.ES6的class类继承</p><h2 id="_12-js的设计原理是什么" tabindex="-1">12.JS的设计原理是什么？ <a class="header-anchor" href="#_12-js的设计原理是什么" aria-label="Permalink to &quot;12.JS的设计原理是什么？&quot;">​</a></h2><p>JS引擎 运行上下文 调用栈 事件循环 回调</p><h2 id="_13-js中关于this指向的问题" tabindex="-1">13.JS中关于this指向的问题 <a class="header-anchor" href="#_13-js中关于this指向的问题" aria-label="Permalink to &quot;13.JS中关于this指向的问题&quot;">​</a></h2><ol><li>全局对象中的this指向</li></ol><p>指向的是window</p><ol start="2"><li>全局作用域或者普通函数中的this</li></ol><p>指向全局window</p><ol start="3"><li>this永远指向最后调用它的那个对象</li></ol><p>在不是箭头函数的情况下</p><ol start="4"><li><p>new 关键词改变了this的指向</p></li><li><p>apply,call,bind</p></li></ol><p>可以改变this指向，不是箭头函数</p><ol start="6"><li>箭头函数中的this</li></ol><p>它的指向在定义的时候就已经确定了</p><p>箭头函数它没有this,看外层是否有函数，有就是外层函数的this，没有就是window</p><ol start="7"><li>匿名函数中的this</li></ol><p>永远指向了window,匿名函数的执行环境具有全局性，因此this指向window</p><h2 id="_14-script标签里的async和defer有什么区别" tabindex="-1">14.script标签里的async和defer有什么区别？ <a class="header-anchor" href="#_14-script标签里的async和defer有什么区别" aria-label="Permalink to &quot;14.script标签里的async和defer有什么区别？&quot;">​</a></h2><p>当没有async和defer这两个属性的时候，</p><p>浏览器会立刻加载并执行指定的脚本</p><p>有async</p><p>加载和渲染后面元素的过程将和script的加载和执行并行进行（异步）</p><p>有defer</p><p>加载和渲染后面元素的过程将和script的加载并行进行（异步），但是它的执行事件要等</p><p>所有元素解析完成之后才会执行</p><h2 id="_15-settimeout最小执行时间是多少" tabindex="-1">15.setTimeout最小执行时间是多少？ <a class="header-anchor" href="#_15-settimeout最小执行时间是多少" aria-label="Permalink to &quot;15.setTimeout最小执行时间是多少？&quot;">​</a></h2><p>HTML5规定的内容：</p><p>setTimeout最小执行时间是4ms</p><p>setInterval最小执行时间是10ms</p><h2 id="_16-es6和es5有什么区别" tabindex="-1">16.ES6和ES5有什么区别？ <a class="header-anchor" href="#_16-es6和es5有什么区别" aria-label="Permalink to &quot;16.ES6和ES5有什么区别？&quot;">​</a></h2><p>JS的组成：ECMAScript BOM DOM</p><p>ES5:ECMAScript5,2009年ECMAScript的第五次修订，ECMAScript2009</p><p>ES6:ECMAScript6,2015年ECMAScript的第六次修订，ECMAScript2015，是JS的下一个版本标准</p><h2 id="_17-es6的新特性有哪些" tabindex="-1">17.ES6的新特性有哪些？ <a class="header-anchor" href="#_17-es6的新特性有哪些" aria-label="Permalink to &quot;17.ES6的新特性有哪些？&quot;">​</a></h2><p>1.新增块级作用域（let,const）</p><p>不存在变量提升</p><p>存在暂时性死区的问题</p><p>块级作用域的内容</p><p>不能在同一个作用域内重复声明</p><p>2.新增了定义类的语法糖（class）</p><p>3.新增了一种基本数据类型（symbol）</p><p>4.新增了解构赋值</p><p>从数组或者对象中取值，然后给变量赋值</p><p>5.新增了函数参数的默认值</p><p>6.给数组新增了API</p><p>7.对象和数组新增了扩展运算符</p><p>8.Promise</p><p>解决回调地狱的问题。</p><p>自身有all,reject,resolve,race方法</p><p>原型上有then,catch</p><p>把异步操作队列化</p><p>三种状态：pending初始状态,fulfilled操作成功,rejected操作失败</p><p>状态：pending -&gt; fulfilled;pending -&gt; rejected 一旦发生，状态就会凝固，不会再变</p><p>async await</p><pre><code>同步代码做异步的操作，两者必须搭配使用

async表明函数内有异步操作，调用函数会返回promise

await是组成async的表达式，结果是取决于它等待的内容，如果是promise那就是promise的结果，如果是普通函数就进行链式调用

await后的promise如果是reject状态，那么整个async函数都会中断，后面的代码不执行
</code></pre><p>9.新增了模块化（import,export） 10.新增了set和map数据结构 set就是不重复 map的key的类型不受限制 11.新增了generator 12.新增了箭头函数 不能作为构造函数使用，不能用new 箭头函数就没有原型 箭头函数没有arguments 箭头函数不能用call,apply,bind去改变this的执行 this指向外层第一个函数的this</p><h2 id="_18-call-aply-bind三者有什么区别" tabindex="-1">18.call,aply,bind三者有什么区别？ <a class="header-anchor" href="#_18-call-aply-bind三者有什么区别" aria-label="Permalink to &quot;18.call,aply,bind三者有什么区别？&quot;">​</a></h2><p>都是改变this指向和函数的调用，call和apply的功能类似，只是传参的方法不同 call方法传的是一个参数列表 apply传递的是一个数组 bind传参后不会立刻执行，会返回一个改变了this指向的函数，这个函数还是可以传参的，bind()() call方法的性能要比apply好一些，所以call用的更多一点</p><h2 id="_19-用递归的时候有没有遇到什么问题" tabindex="-1">19.用递归的时候有没有遇到什么问题？ <a class="header-anchor" href="#_19-用递归的时候有没有遇到什么问题" aria-label="Permalink to &quot;19.用递归的时候有没有遇到什么问题？&quot;">​</a></h2><p>如果一个函数内可以调用函数本身，那么这个就是递归函数 函数内部调用自己 特别注意：写递归必须要有退出条件return</p><h2 id="_20-如何实现一个深拷贝" tabindex="-1">20.如何实现一个深拷贝？ <a class="header-anchor" href="#_20-如何实现一个深拷贝" aria-label="Permalink to &quot;20.如何实现一个深拷贝？&quot;">​</a></h2><p>深拷贝就是完全拷贝一份新的对象，会在堆内存中开辟新的空间，拷贝的对象被修改后，原对象不受影响 主要针对的是引用数据类型 1.扩展运算符 2.JSON.parse(JSON.stringify()) 3.利用递归函数实现</p><h2 id="_21-说一下事件循环。" tabindex="-1">21.说一下事件循环。 <a class="header-anchor" href="#_21-说一下事件循环。" aria-label="Permalink to &quot;21.说一下事件循环。&quot;">​</a></h2><p>JS是一个单线程的脚本语言 主线程 执行栈 任务队列 宏任务 微任务 主线程先执行同步任务，然后才去执行任务队列里的任务，如果在执行宏任务之前有微任务，那么要先执行微任务 全部执行完之后等待主线程的调用，调用完之后再去任务队列中查看是否有异步任务，这样一个循环往复的过程就是事件循环！</p><h2 id="_22-ajax是什么-怎么实现的" tabindex="-1">22.ajax是什么？怎么实现的？ <a class="header-anchor" href="#_22-ajax是什么-怎么实现的" aria-label="Permalink to &quot;22.ajax是什么？怎么实现的？&quot;">​</a></h2><p>创建交互式网页应用的网页开发技术 在不重新加载整个网页的前提下，与服务器交换数据并更新部分内容 通过XmlHttpRequest对象向服务器发送异步请求，然后从服务器拿到数据，最后通过JS操作DOM更新页面 1.创建XmlHttpRequest对象 xmh 2.通过xmh对象里的open()方法和服务器建立连接 3.构建请求所需的数据，并通过xmh对象的send()发送给服务器 4.通过xmh对象的onreadystate chansge事件监听服务器和你的通信状态 5.接收并处理服务器响应的数据结果 6.把处理的数据更新到HTML页面上</p><h2 id="_23-get和post有什么区别" tabindex="-1">23.get和post有什么区别？ <a class="header-anchor" href="#_23-get和post有什么区别" aria-label="Permalink to &quot;23.get和post有什么区别？&quot;">​</a></h2><p>1.get一般是获取数据，post一般是提交数据 2.get参数会放在url上，所以安全性比较差，post是放在body中 3.get请求刷新服务器或退回是没有影响的，post请求退回时会重新提交数据 4.get请求时会被缓存,post请求不会被缓存 5.get请求会被保存在浏览器历史记录中,post不会 6.get请求只能进行url编码，post请求支持很多种</p><h2 id="_24-promise的内部原理是什么-它的优缺点是什么" tabindex="-1">24.promise的内部原理是什么？它的优缺点是什么？ <a class="header-anchor" href="#_24-promise的内部原理是什么-它的优缺点是什么" aria-label="Permalink to &quot;24.promise的内部原理是什么？它的优缺点是什么？&quot;">​</a></h2><p>Promise对象，封装了一个异步操作并且还可以获取成功或失败的结果 Promise主要就是解决回调地狱的问题，之前如果异步任务比较多，同时他们之间有相互依赖的关系， 就只能使用回调函数处理，这样就容易形成回调地狱，代码的可读性差，可维护性也很差 有三种状态：pending初始状态 fulfilled成功状态 rejected失败状态 状态改变只会有两种情况， pending -&gt; fulfilled; pending -&gt; rejected 一旦发生，状态就会凝固，不会再变 首先就是我们无法取消promise，一旦创建它就会立即执行，不能中途取消 如果不设置回调，promise内部抛出的测u哦呜就无法反馈到外面 若当前处于pending状态时，无法得知目前在哪个阶段。 原理： 构造一个Promise实例，实例需要传递函数的参数，这个函数有两个形参，分别都是函数类型，一个是resolve一个是reject promise上还有then方法，这个方法就是来指定状态改变时的确定操作，resolve是执行第一个函数，reject是执行第二个函数</p><h2 id="_25-promise和async-await的区别是什么" tabindex="-1">25.promise和async await的区别是什么？ <a class="header-anchor" href="#_25-promise和async-await的区别是什么" aria-label="Permalink to &quot;25.promise和async await的区别是什么？&quot;">​</a></h2><p>1.都是处理异步请求的方式 2.promise是ES6，async await 是ES7的语法 3.async await是基于promise实现的，他和promise都是非阻塞性的 优缺点： 1.promise是返回对象我们要用then，catch方法去处理和捕获异常，并且书写方式是链式，容易造成代码重叠，不好维护，async await 是通过tra catch进行捕获异常 2.async await最大的优点就是能让代码看起来像同步一样，只要遇到await就会立刻返回结果，然后再执行后面的操作 promise.then()的方式返回，会出现请求还没返回，就执行了后面的操作</p><h2 id="_26-浏览器的存储方式有哪些" tabindex="-1">26.浏览器的存储方式有哪些？ <a class="header-anchor" href="#_26-浏览器的存储方式有哪些" aria-label="Permalink to &quot;26.浏览器的存储方式有哪些？&quot;">​</a></h2><p>1.cookies H5标准前的本地存储方式 兼容性好，请求头自带cookie 存储量小，资源浪费，使用麻烦（封装） 2.localstorage H5加入的以键值对为标准的方式 操作方便，永久存储，兼容性较好 保存值的类型被限定，浏览器在隐私模式下不可读取，不能被爬虫 3.sessionstorage 当前页面关闭后就会立刻清理，会话级别的存储方式 4.indexedDB H5标准的存储方式，，他是以键值对进行存储，可以快速读取，适合WEB场景</p><h2 id="_27-token存在sessionstorage还是loaclstorage" tabindex="-1">27.token存在sessionstorage还是loaclstorage？ <a class="header-anchor" href="#_27-token存在sessionstorage还是loaclstorage" aria-label="Permalink to &quot;27.token存在sessionstorage还是loaclstorage？&quot;">​</a></h2><p>token：验证身份的令牌，一般就是用户通过账号密码登录后，服务端把这些凭证通过加密等一系列操作后得到的字符串 1.存loaclstorage里，后期每次请求接口都需要把它当作一个字段传给后台 2.存cookie中，会自动发送，缺点就是不能跨域 如果存在localstorage中，容易被XSS攻击，但是如果做好了对应的措施，那么是利大于弊 如果存在cookie中会有CSRF攻击</p><h2 id="_28-token的登录流程。" tabindex="-1">28.token的登录流程。 <a class="header-anchor" href="#_28-token的登录流程。" aria-label="Permalink to &quot;28.token的登录流程。&quot;">​</a></h2><p>1.客户端用账号密码请求登录 2.服务端收到请求后，需要去验证账号密码 3.验证成功之后，服务端会签发一个token，把这个token发送给客户端 4.客户端收到token后保存起来，可以放在cookie也可以是localstorage 5.客户端每次向服务端发送请求资源的时候，都需要携带这个token 6.服务端收到请求，接着去验证客户端里的token，验证成功才会返回客户端请求的数据</p><h2 id="_29-页面渲染的过程是怎样的" tabindex="-1">29.页面渲染的过程是怎样的？ <a class="header-anchor" href="#_29-页面渲染的过程是怎样的" aria-label="Permalink to &quot;29.页面渲染的过程是怎样的？&quot;">​</a></h2><p>DNS解析 建立TCP连接 发送HTTP请求 服务器处理请求 渲染页面 浏览器会获取HTML和CSS的资源，然后把HTML解析成DOM树 再把CSS解析成CSSOM 把DOM和CSSOM合并为渲染树 布局 把渲染树的每个节点渲染到屏幕上（绘制） 断开TCP连接</p><h2 id="_30-dom树和渲染树有什么区别" tabindex="-1">30.DOM树和渲染树有什么区别？ <a class="header-anchor" href="#_30-dom树和渲染树有什么区别" aria-label="Permalink to &quot;30.DOM树和渲染树有什么区别？&quot;">​</a></h2><p>DOM树是和HTML标签一一对应的，包括head和隐藏元素 渲染树是不包含head和隐藏元素</p><h2 id="_31-精灵图和base64的区别是什么" tabindex="-1">31.精灵图和base64的区别是什么？ <a class="header-anchor" href="#_31-精灵图和base64的区别是什么" aria-label="Permalink to &quot;31.精灵图和base64的区别是什么？&quot;">​</a></h2><p>精灵图：把多张小图整合到一张大图上，利用定位的一些属性把小图显示在页面上，当访问页面可以减少请求，提高加载速度 base64：传输8Bit字节代码的编码方式，把原本二进制形式转为64个字符的单位，最后组成字符串 base64是会和html css一起下载到浏览器中，减少请求，减少跨域问题，但是一些低版本不支持，若base64体积比原图片大，不利于css的加载。</p><h2 id="_32-svg格式了解多少" tabindex="-1">32.svg格式了解多少？ <a class="header-anchor" href="#_32-svg格式了解多少" aria-label="Permalink to &quot;32.svg格式了解多少？&quot;">​</a></h2><p>基于XML语法格式的图像格式，可缩放矢量图，其他图像是基于像素的，SVG是属于对图像形状的描述，本质是文本文件，体积小，并且不管放大多少倍都不会失真</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">1.SVG可直接插入页面中，成为DOM一部分，然后用JS或CSS进行操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">svg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">2.SVG可作为文件被引入</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">img</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;pic.svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">3.SVG可以转为base64引入页面</span></span></code></pre></div><h2 id="_33-了解过jwt吗" tabindex="-1">33.了解过JWT吗？ <a class="header-anchor" href="#_33-了解过jwt吗" aria-label="Permalink to &quot;33.了解过JWT吗？&quot;">​</a></h2><p>JSON Web Token 通过JSON形式作为在web应用中的令牌，可以在各方之间安全的把信息作为JSON对象传输 信息传输、授权 JWT的认证流程 1.前端把账号密码发送给后端的接口 2.后端核对账号密码成功后，把用户id等其他信息作为JWT 负载，把它和头部分别进行base64编码拼接后签名，形成一个JWT（token）。 3.前端每日请求时都会把JWT放在HTTP请求头的Authorization字段内 4.后端检查是否存在，如果存在就验证JWT的有效性（签名是否正确，token是否过期） 5.验证通过后后端使用JWT中包含的用户信息进行其他的操作，并返回对应结果 简洁、包含性、因为Token是JSON加密的形式保存在客户端，所以JWT是跨语言的，原则上是任何web形式都支持。</p><h2 id="_34-npm的底层环境是什么" tabindex="-1">34.npm的底层环境是什么？ <a class="header-anchor" href="#_34-npm的底层环境是什么" aria-label="Permalink to &quot;34.npm的底层环境是什么？&quot;">​</a></h2><p>node package manager,node的包管理和分发工具，已经成为分发node模块的标准，是JS的运行环境 npm的组成：网站、注册表、命令行工具</p><h2 id="_35-http协议规定的协议头和请求头有什么" tabindex="-1">35.HTTP协议规定的协议头和请求头有什么？ <a class="header-anchor" href="#_35-http协议规定的协议头和请求头有什么" aria-label="Permalink to &quot;35.HTTP协议规定的协议头和请求头有什么？&quot;">​</a></h2><p>1.请求头信息： Accept:浏览器告诉服务器所支持的数据类型 Host:浏览器告诉服务器我想访问服务器的哪台主机 Referer:浏览器告诉服务器我是从哪里来的（防盗链） User-Agent:浏览器类型、版本信息 Date:浏览器告诉服务器我是什么时候访问的 Connection:连接方式 Cookie X-Request-With:请求方式 2.响应头信息： Location:这个就是告诉浏览器你要去找谁 Server:告诉浏览器服务器的类型 Content-Type:告诉浏览器返回的数据类型 Refresh:控制了的定时刷新</p><h2 id="_36-说一下浏览器的缓存策略。" tabindex="-1">36.说一下浏览器的缓存策略。 <a class="header-anchor" href="#_36-说一下浏览器的缓存策略。" aria-label="Permalink to &quot;36.说一下浏览器的缓存策略。&quot;">​</a></h2><p>强缓存（本地缓存）、协商缓存（弱缓存） 强缓：不发起请求，直接使用缓存里的内容，浏览器把JS，CSS，image等存到内存中，下次用户访问直接从内存中取，提高性能 协缓：需要像后台发请求，通过判断来决定是否使用协商缓存，如果请求内容没有变化，则返回304，浏览器就用缓存里的内容 强缓存的触发： HTTP1.0:时间戳响应标头 HTTP1.1:Cache-Control响应标头 协商缓存触发： HTTP1.0:请求头：if-modified-since 响应头：last-modified HTTP1.1:请求头：if-none-match 响应头：Etag</p><h2 id="_37-说一下什么是-同源策略" tabindex="-1">37.说一下什么是“同源策略”？ <a class="header-anchor" href="#_37-说一下什么是-同源策略" aria-label="Permalink to &quot;37.说一下什么是“同源策略”？&quot;">​</a></h2><p>http:// www. aaa.com:8080/index/vue.js 协议 子域名 主域名 端口号 资源 同源策略是浏览器的核心，如果没有这个策略就会遭受网络攻击 主要指的就是协议+域名+端口号三者一致，若其中一个不一样则不是同源，会产生跨域 三个允许跨域加载资源的标签：img link script 跨域是可以发送请求，后端也会正常返回结果，只不过这个结果被浏览器拦截了！ JSONP CORS websocket 反向代理</p><h2 id="_38-防抖和节流是什么" tabindex="-1">38.防抖和节流是什么？ <a class="header-anchor" href="#_38-防抖和节流是什么" aria-label="Permalink to &quot;38.防抖和节流是什么？&quot;">​</a></h2><p>都是应对页面中频繁触发事件的优化方案 防抖:避免事件重复触发 使用场景:1.频繁和服务端交互 2.输入框的自动保存事件 节流:把频繁触发的事件减少,每隔一段时间执行 使用场景:scroll事件</p><h2 id="_39-解释一下什么是json" tabindex="-1">39.解释一下什么是json？ <a class="header-anchor" href="#_39-解释一下什么是json" aria-label="Permalink to &quot;39.解释一下什么是json？&quot;">​</a></h2><p>JSON是一种纯字符串形式的数据，它本身不提供任何方法，适合在网络中进行传输 JSON数据存储在.json文件中，也可以把JSON数据以字符串的形式保存在数据库、Cookise中 JS提供了JSON.parse() JSON.stringify() 什么时候使用json：定义接口；序列化；生成token；配置文件package.json</p><h2 id="_40-当数据没有请求过来的时候-该怎么做" tabindex="-1">40.当数据没有请求过来的时候，该怎么做？ <a class="header-anchor" href="#_40-当数据没有请求过来的时候-该怎么做" aria-label="Permalink to &quot;40.当数据没有请求过来的时候，该怎么做？&quot;">​</a></h2><p>可以在渲染数据的地方给一些默认的值 if判断语句</p><h2 id="_41-有没有做过无感登录" tabindex="-1">41.有没有做过无感登录？ <a class="header-anchor" href="#_41-有没有做过无感登录" aria-label="Permalink to &quot;41.有没有做过无感登录？&quot;">​</a></h2><p>1.在相应其中拦截，判断token返回过期后，调用刷新token的接口 2.后端返回过期时间，前端判断token的过期时间，去调用刷新token的接口 3.写定时器，定时刷新token接口 流程： 1.登录成功后保存token 和 refresh_token 2.在响应拦截器中对401状态码引入刷新token的api方法调用 3.替换保存本地新的token 4.把错误对象里的token替换 5.再次发送未完成的请求 6.如果refresh_token过期了，判断是否过期，过期了就清楚所有token重新登录</p><h2 id="_42-大文件上传是怎么做的" tabindex="-1">42.大文件上传是怎么做的？ <a class="header-anchor" href="#_42-大文件上传是怎么做的" aria-label="Permalink to &quot;42.大文件上传是怎么做的？&quot;">​</a></h2><p>分片上传： 1.把需要上传的文件按照一定的规则，分割成相同大小的数据块 2.初始化一个分片上传任务，返回本次分片上传的唯一标识 3.按照一定的规则把各个数据块上传 4.发送完成后，服务端会判断数据上传的完整性，如果完整，那么就会把数据库合并成原始文件 断点续传： 服务端返回，从哪里开始 浏览器自己处理</p>`,165),r=[p];function o(n,l,h,c,d,k){return t(),e("div",null,r)}const m=a(s,[["render",o]]);export{b as __pageData,m as default};
