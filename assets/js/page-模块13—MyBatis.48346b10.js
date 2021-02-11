(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{708:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题：")]),t._v(" "),a("p",[t._v("125.MyBatis 中#{和$0的区别是什么?")]),t._v(" "),a("p",[t._v("126.MyBatis有几种分页方式?")]),t._v(" "),a("p",[t._v("127.RowBounds是一次性查询全部结果吗?为什么?")]),t._v(" "),a("p",[t._v("128.MyBatis逻辑分页和物理分页的区别是什么?")]),t._v(" "),a("p",[t._v("129.MyBatis 是否支持延迟加载?延迟加载的原理是什么?")]),t._v(" "),a("p",[t._v("130.说一下MyBatis的一级缓存和二级缓存?")]),t._v(" "),a("p",[t._v("131.MyBatis 和 hibernate的区别有哪些?")]),t._v(" "),a("p",[t._v("132.MyBatis有哪些执行器(Executor) ?")]),t._v(" "),a("p",[t._v("133.MyBatis分页插件的实现原理是什么?")]),t._v(" "),a("p",[t._v("134.MyBatis 如何编写一个自定义插件?")]),t._v(" "),a("h2",{attrs:{id:"答案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#答案"}},[t._v("#")]),t._v(" 答案：")]),t._v(" "),a("h3",{attrs:{id:"_125-mybatis-中-和-的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_125-mybatis-中-和-的区别是什么"}},[t._v("#")]),t._v(" 125.MyBatis 中#{}和${}的区别是什么?")]),t._v(" "),a("ul",[a("li",[t._v("#{}是预编译处理，${}是字符串替换；")]),t._v(" "),a("li",[t._v("MyBatis在处理#{}时，会将sql中的#{}替换为?号，调用PreparedStatement的set方法来赋值；")]),t._v(" "),a("li",[t._v("MyBatis在处理"),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[a("semantics",[a("mrow",[a("mrow"),a("mtext",[t._v("时，就是把")])],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("{}时，就是把")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"base"},[a("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),a("span",{staticClass:"mord"}),a("span",{staticClass:"mord cjk_fallback"},[t._v("时")]),a("span",{staticClass:"mord cjk_fallback"},[t._v("，")]),a("span",{staticClass:"mord cjk_fallback"},[t._v("就")]),a("span",{staticClass:"mord cjk_fallback"},[t._v("是")]),a("span",{staticClass:"mord cjk_fallback"},[t._v("把")])])])]),t._v("{}替换成变量的值；")]),t._v(" "),a("li",[t._v("使用**#{}可以有效的防止SQL注入**，提高系统安全性。")])]),t._v(" "),a("h3",{attrs:{id:"_126-mybatis有几种分页方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_126-mybatis有几种分页方式"}},[t._v("#")]),t._v(" 126.MyBatis有几种分页方式?")]),t._v(" "),a("ol",[a("li",[t._v("数组分页")]),t._v(" "),a("li",[t._v("sql分页")]),t._v(" "),a("li",[t._v("拦截器分页")]),t._v(" "),a("li",[t._v("RowBounds分页")])]),t._v(" "),a("h3",{attrs:{id:"_127-rowbounds是一次性查询全部结果吗-为什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_127-rowbounds是一次性查询全部结果吗-为什么"}},[t._v("#")]),t._v(" 127.RowBounds是一次性查询全部结果吗?为什么?")]),t._v(" "),a("p",[t._v("RowBounds 表面是在“所有”数据中检索数据，其实并非是一次性查询出所有数据，因为 MyBatis 是对 jdbc 的封装，在 jdbc 驱动中有")]),t._v(" "),a("p",[t._v("一个 Fetch Size 的配置，它规定了每次最多从数据库查询多少条数据，假如你要查询更多数据，它会在你执行 next()的时候，去查询更")]),t._v(" "),a("p",[t._v("多的数据。就好比你去自动取款机取 10000 元，但取款机每次最多能取 2500 元，所以你要取 4 次才能把钱取完。只是对于 jdbc 来")]),t._v(" "),a("p",[t._v("说，当你调用 next()的时候会自动帮你完成查询工作。这样做的好处可以有效的防止内存溢出。")]),t._v(" "),a("p",[t._v("Fetch Size 官方相关文档：http://t. cn/EfSE2g3")]),t._v(" "),a("h3",{attrs:{id:"_128-mybatis逻辑分页和物理分页的区别是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_128-mybatis逻辑分页和物理分页的区别是什么"}},[t._v("#")]),t._v(" 128.MyBatis逻辑分页和物理分页的区别是什么?")]),t._v(" "),a("ul",[a("li",[t._v("物理分页速度上并不一定快于逻辑分页，逻辑分页速度上也并不一定快于物理分页。")]),t._v(" "),a("li",[t._v("物理分页总是优于逻辑分页：没有必要将属于数据库端的压力加诸到应用端来，就算速度上存在优势,然而其它性能上的优点足以弥补这个缺点。")])]),t._v(" "),a("h3",{attrs:{id:"_129-mybatis-是否支持延迟加载-延迟加载的原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_129-mybatis-是否支持延迟加载-延迟加载的原理是什么"}},[t._v("#")]),t._v(" 129.MyBatis 是否支持延迟加载?延迟加载的原理是什么?")]),t._v(" "),a("p",[t._v("MyBatis仅支持association关联对象和collection关联集合对象的延迟加载，association指的就是一对一，collection指的就是一对多查")]),t._v(" "),a("p",[t._v("询。在MyBatis配置文件中，可以配置是否启用延迟加载lazyLoadingEnabled=true|false。")]),t._v(" "),a("p",[t._v("它的"),a("strong",[t._v("原理是：")])]),t._v(" "),a("ol",[a("li",[t._v("使用"),a("strong",[t._v("CGLIB")]),t._v("创建目标对象的"),a("strong",[t._v("代理对象")]),t._v("，当调用目标方法时，进入拦截器方法，比如调用a.getB().getName()，")]),t._v(" "),a("li",[t._v("拦截器invoke()方法发现a.getB()是null值，那么就会单独发送事先保存好的查询关联B对象的sql，把B查询上来，然后调用a.setB(b)，于是a的对象b属性就有值了，")]),t._v(" "),a("li",[t._v("接着完成a.getB().getName()方法的调用。这就是延迟加载的基本原理。")])]),t._v(" "),a("p",[t._v("当然了，不光是MyBatis，几乎所有的包括Hibernate，支持延迟加载的原理都是一样的。")]),t._v(" "),a("h3",{attrs:{id:"_130-说一下mybatis的一级缓存和二级缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_130-说一下mybatis的一级缓存和二级缓存"}},[t._v("#")]),t._v(" 130.说一下MyBatis的一级缓存和二级缓存?")]),t._v(" "),a("p",[a("strong",[t._v("一级缓存:")]),t._v(" 基于 PerpetualCache 的 HashMap 本地缓存，其存储作用域为 Session，当 Session flush 或 close 之后，该 Session 中的所有 Cache 就将清空，默认打开一级缓存。")]),t._v(" "),a("p",[t._v("二级缓存与一级缓存其机制相同，默认也是采用 PerpetualCache，HashMap 存储，不同在于其存储作用域为 Mapper(Namespace)，并且可自定义存储源，如 Ehcache。默认不打开二级缓存，要开启二级缓存，使用二级缓存属性类需要实现Serializable序列化接口(可用来保存对象的状态),可在它的映射文件中配置"),a("cache"),t._v(" ；")],1),t._v(" "),a("p",[t._v("对于缓存数据更新机制，当某一个作用域(一级缓存 Session/二级缓存Namespaces)的进行了C/U/D 操作后，默认该作用域下所有 select 中的缓存将被 clear。")]),t._v(" "),a("h3",{attrs:{id:"_131-mybatis-和-hibernate的区别有哪些"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_131-mybatis-和-hibernate的区别有哪些"}},[t._v("#")]),t._v(" 131.MyBatis 和 Hibernate的区别有哪些?")]),t._v(" "),a("p",[t._v("（1）Mybatis和hibernate不同，它不完全是一个ORM框架，因为MyBatis需要程序员自己编写Sql语句。")]),t._v(" "),a("p",[t._v("（2）Mybatis直接编写原生态sql，可以严格控制sql执行性能，灵活度高，非常适合对关系数据模型要求不高的软件开发，因为这类软")]),t._v(" "),a("p",[t._v("件需求变化频繁，一但需求变化要求迅速输出成果。但是灵活的前提是mybatis无法做到数据库无关性，如果需要实现支持多种数据库")]),t._v(" "),a("p",[t._v("的软件，则需要自定义多套sql映射文件，工作量大。")]),t._v(" "),a("p",[t._v("（3）Hibernate对象/关系映射能力强，数据库无关性好，对于关系模型要求高的软件，如果用Hibernate开发可以节省很多代码，提高")]),t._v(" "),a("p",[t._v("效率。")]),t._v(" "),a("h3",{attrs:{id:"_132-mybatis有哪些执行器-executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_132-mybatis有哪些执行器-executor"}},[t._v("#")]),t._v(" 132.MyBatis有哪些执行器(Executor) ?")]),t._v(" "),a("p",[a("strong",[t._v("Mybatis有三种基本的执行器（Executor）：")])]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("SimpleExecutor")]),t._v("：每执行一次update或select，就开启一个Statement对象，用完立刻关闭Statement对象。")]),t._v(" "),a("li",[a("strong",[t._v("ReuseExecutor")]),t._v("：执行update或select，以sql作为key查找Statement对象，存在就使用，不存在就创建，用完后，不关闭Statement对象，而是放置于Map内，供下一次使用。简言之，就是重复使用Statement对象。")]),t._v(" "),a("li",[a("strong",[t._v("BatchExecutor")]),t._v("：执行update（没有select，JDBC批处理不支持select），将所有sql都添加到批处理中（addBatch()），等待统一执行（executeBatch()），它缓存了多个Statement对象，每个Statement对象都是addBatch()完毕后，等待逐一执行executeBatch()批处理。与JDBC批处理相同。")])]),t._v(" "),a("h3",{attrs:{id:"_133-mybatis分页插件的实现原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_133-mybatis分页插件的实现原理是什么"}},[t._v("#")]),t._v(" 133.MyBatis分页插件的实现原理是什么?")]),t._v(" "),a("p",[t._v("分页插件的基本原理是使用Mybatis提供的插件接口，实现自定义插件，在插件的拦截方法内拦截待执行的sql，然后重写sql，根据")]),t._v(" "),a("p",[t._v("dialect方言，添加对应的物理分页语句和物理分页参数。")]),t._v(" "),a("h3",{attrs:{id:"_134-mybatis-如何编写一个自定义插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_134-mybatis-如何编写一个自定义插件"}},[t._v("#")]),t._v(" 134.MyBatis 如何编写一个自定义插件?")]),t._v(" "),a("p",[t._v("转自：blog.csdn.net/qq_30051265/article/details/80266434")]),t._v(" "),a("p",[t._v("Mybatis自定义插件针对MyBatis四大对象（Executor、StatementHandler 、ParameterHandler 、ResultSetHandler ）进行拦截，具体拦截方式为：")]),t._v(" "),a("ul",[a("li",[t._v("Executor：拦截执行器的方法(log记录)")]),t._v(" "),a("li",[t._v("StatementHandler ：拦截Sql语法构建的处理")]),t._v(" "),a("li",[t._v("ParameterHandler ：拦截参数的处理")]),t._v(" "),a("li",[t._v("ResultSetHandler ：拦截结果集的处理")])]),t._v(" "),a("p",[t._v("Mybatis自定义插件必须实现Interceptor接口：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interceptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("intercept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Invocation")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Properties")]),t._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("intercept方法：拦截器具体处理逻辑方法")]),t._v(" "),a("p",[t._v("plugin方法：根据签名signatureMap生成动态代理对象")]),t._v(" "),a("p",[t._v("setProperties方法：设置Properties属性")]),t._v(" "),a("p",[t._v("自定义插件demo：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ExamplePlugin.java")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Intercepts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Signature")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Executor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MappedStatement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ExamplePlugin")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Interceptor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("intercept")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Invocation")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" target "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTarget")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//被代理对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMethod")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代理方法")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getArgs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//方法参数")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something ...... 方法拦截前执行代码块")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" invocation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("proceed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something .......方法拦截后执行代码块")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Plugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("wrap")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setProperties")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Properties")]),t._v(" properties"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br")])]),a("p",[t._v("一个@Intercepts可以配置多个@Signature，@Signature中的参数定义如下：")]),t._v(" "),a("ul",[a("li",[t._v("type：表示拦截的类，这里是Executor的实现类；")]),t._v(" "),a("li",[t._v("method：表示拦截的方法，这里是拦截Executor的update方法；")]),t._v(" "),a("li",[t._v("args：表示方法参数。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);