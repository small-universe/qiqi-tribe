(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{613:function(a,t,s){a.exports=s.p+"assets/img/java-03.77f99bf2.png"},614:function(a,t,s){a.exports=s.p+"assets/img/java-04.ad82199d.png"},721:function(a,t,s){"use strict";s.r(t);var r=s(1),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h2",{attrs:{id:"问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题：")]),a._v(" "),r("p",[a._v("18.java容器都有哪些?")]),a._v(" "),r("p",[a._v("19.Collection和Collections有什么区别?")]),a._v(" "),r("p",[a._v("20.List、Set、Map 之间的区别是什么?")]),a._v(" "),r("p",[a._v("21.HashMap和Hashtable有什么区别?")]),a._v(" "),r("p",[a._v("22.如何决定使用HashMap还是TreeMap?")]),a._v(" "),r("p",[a._v("23.说一下HashMap 的实现原理?")]),a._v(" "),r("p",[a._v("24.说一下 HashSet 的实现原理?")]),a._v(" "),r("p",[a._v("25.ArrayList和LinkedList的区别是什么?")]),a._v(" "),r("p",[a._v("26.如何实现数组和List 之间的转换?")]),a._v(" "),r("p",[a._v("27.ArrayList和Vector 的区别是什么?")]),a._v(" "),r("p",[a._v("28.Array和ArrayList有何区别?")]),a._v(" "),r("p",[a._v("29.在 Queue 中 poll()和remove()有什么区别?")]),a._v(" "),r("p",[a._v("30.哪些集合类是线程安全的?")]),a._v(" "),r("p",[a._v("31.迭代器lterator 是什么?")]),a._v(" "),r("p",[a._v("32.lterator怎么使用?有什么特点?")]),a._v(" "),r("p",[a._v("33.lterator和Listlterator有什么区别?")]),a._v(" "),r("p",[a._v("34.怎么确保一个集合不能被修改？")]),a._v(" "),r("h2",{attrs:{id:"答案"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#答案"}},[a._v("#")]),a._v(" 答案：")]),a._v(" "),r("h3",{attrs:{id:"_18-java容器都有哪些"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_18-java容器都有哪些"}},[a._v("#")]),a._v(" 18.java容器都有哪些?")]),a._v(" "),r("p",[r("img",{attrs:{src:s(613),alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_19-collection和collections有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_19-collection和collections有什么区别"}},[a._v("#")]),a._v(" 19.Collection和Collections有什么区别?")]),a._v(" "),r("ul",[r("li",[a._v("java.util.Collection 是一个集合接口（集合类的一个顶级接口）。它提供了对集合对象进行基本操作的通用接口方法。Collection接口在Java 类库中有很多具体的实现。Collection接口的意义是为各种具体的集合提供了最大化的统一操作方式，其直接继承接口有List与Set。")]),a._v(" "),r("li",[a._v("Collections则是集合类的一个工具类/帮助类，其中提供了一系列静态方法，用于对集合中元素进行排序、搜索以及线程安全等各种操作。")])]),a._v(" "),r("h3",{attrs:{id:"_20-list、set、map-之间的区别是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_20-list、set、map-之间的区别是什么"}},[a._v("#")]),a._v(" 20.List、Set、Map 之间的区别是什么?")]),a._v(" "),r("img",{staticStyle:{zoom:"80%"},attrs:{src:s(614)}}),a._v(" "),r("h3",{attrs:{id:"_21-hashmap和hashtable有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_21-hashmap和hashtable有什么区别"}},[a._v("#")]),a._v(" 21.HashMap和Hashtable有什么区别?")]),a._v(" "),r("ul",[r("li",[a._v("hashMap去掉了Hashtable 的contains方法，但是加上了containsValue（）和containsKey（）方法。")]),a._v(" "),r("li",[a._v("Hashtable同步的，而HashMap是非同步的，效率上比Hashtable要高。")]),a._v(" "),r("li",[a._v("hashMap允许空键值，而Hashtable不允许。")])]),a._v(" "),r("h3",{attrs:{id:"_22-如何决定使用hashmap还是treemap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_22-如何决定使用hashmap还是treemap"}},[a._v("#")]),a._v(" 22.如何决定使用HashMap还是TreeMap?")]),a._v(" "),r("p",[a._v("对于在Map中插入、删除和定位元素这类操作，HashMap是最好的选择。")]),a._v(" "),r("p",[a._v("然而，假如你需要对一个有序的key集合进行遍历，TreeMap是更好的选择。基于你的collection的大小，也许向HashMap中添加元素")]),a._v(" "),r("p",[a._v("会更快，将map换为TreeMap进行有序key的遍历。")]),a._v(" "),r("h3",{attrs:{id:"_23-说一下hashmap-的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_23-说一下hashmap-的实现原理"}},[a._v("#")]),a._v(" 23.说一下HashMap 的实现原理?")]),a._v(" "),r("p",[r("strong",[a._v("HashMap概述：")]),a._v(" HashMap是基于哈希表的Map接口的非同步实现。此实现提供所有可选的映射操作，并允许使用null值和null键。此类不保证映射的顺序，特别是它不保证该顺序恒久不变。")]),a._v(" "),r("p",[r("strong",[a._v("HashMap的数据结构：")]),a._v(" 在java编程语言中，最基本的结构就是两种，一个是数组，另外一个是模拟指针（引用），所有的数据结构都可以用这两个基本结构来构造的，HashMap也不例外。HashMap实际上是一个“链表散列”的数据结构，即数组和链表的结合体。")]),a._v(" "),r("p",[a._v("当我们往HashMap中put元素时,首先根据key的hashcode重新计算hash值,根据hash值得到这个元素在数组中的位置(下标),如果该数组在该位置上已经存放了其他元素,那么在这个位置上的元素将以链表的形式存放,新加入的放在链头,最先加入的放入链尾.如果数组中该位置没有元素,就直接将该元素放到数组的该位置上。")]),a._v(" "),r("p",[a._v("需要注意Jdk 1.8中对HashMap的实现做了优化,当链表中的节点数据超过"),r("strong",[a._v("八个")]),a._v("之后,该链表会转为"),r("strong",[a._v("红黑树")]),a._v("来提高查询效率,从原来的O(n)到O(logn)")]),a._v(" "),r("h3",{attrs:{id:"_24-说一下-hashset-的实现原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_24-说一下-hashset-的实现原理"}},[a._v("#")]),a._v(" 24.说一下 HashSet 的实现原理?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("HashSet底层由HashMap实现")])]),a._v(" "),r("li",[r("p",[a._v("HashSet的值存放于HashMap的key上")])]),a._v(" "),r("li",[r("p",[a._v("HashMap的value统一为PRESENT")])])]),a._v(" "),r("h3",{attrs:{id:"_25-arraylist和linkedlist的区别是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_25-arraylist和linkedlist的区别是什么"}},[a._v("#")]),a._v(" 25.ArrayList和LinkedList的区别是什么?")]),a._v(" "),r("p",[a._v("最明显的区别是 ArrrayList底层的数据结构是数组，支持随机访问，而 LinkedList 的底层数据结构是双向循环链表，不支持随机访问。")]),a._v(" "),r("p",[a._v("使用下标访问一个元素，ArrayList 的时间复杂度是 O(1)，而 LinkedList 是 O(n)。")]),a._v(" "),r("h3",{attrs:{id:"_26-如何实现数组和list-之间的转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_26-如何实现数组和list-之间的转换"}},[a._v("#")]),a._v(" 26.如何实现数组和List 之间的转换?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("List转换成为数组：调用ArrayList的toArray方法。")])]),a._v(" "),r("li",[r("p",[a._v("数组转换成为List：调用Arrays的asList方法。")])])]),a._v(" "),r("h3",{attrs:{id:"_27-arraylist和vector-的区别是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_27-arraylist和vector-的区别是什么"}},[a._v("#")]),a._v(" 27.ArrayList和Vector 的区别是什么?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Vector是同步的，而ArrayList不是。然而，如果你寻求在迭代的时候对列表进行改变，你应该使用CopyOnWriteArrayList。")])]),a._v(" "),r("li",[r("p",[a._v("ArrayList比Vector快，Vecto它因为有同步，不会过载。 ArrayList在多线程情况下可能会出现ConcurrentModificationException。")])]),a._v(" "),r("li",[r("p",[a._v("ArrayList更加通用，因为我们可以使用Collections工具类轻易地获取同步列表和只读列表。")])])]),a._v(" "),r("h3",{attrs:{id:"_28-array和arraylist有何区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_28-array和arraylist有何区别"}},[a._v("#")]),a._v(" 28.Array和ArrayList有何区别?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Array可以容纳基本类型和对象，而ArrayList只能容纳对象。")])]),a._v(" "),r("li",[r("p",[a._v("Array是指定大小的，而ArrayList大小是固定的。")])]),a._v(" "),r("li",[r("p",[a._v("Array没有提供ArrayList那么多功能，比如addAll、removeAll和iterator等。")])])]),a._v(" "),r("h3",{attrs:{id:"_29-在-queue-中-poll-和remove-有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_29-在-queue-中-poll-和remove-有什么区别"}},[a._v("#")]),a._v(" 29.在 Queue 中 poll()和remove()有什么区别?")]),a._v(" "),r("p",[a._v("poll() 和 remove() 都是从队列中取出一个元素，但是 poll() 在获取元素失败的时候会返回空，但是 remove() 失败的时候会抛出异常。")]),a._v(" "),r("h3",{attrs:{id:"_30-哪些集合类是线程安全的"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_30-哪些集合类是线程安全的"}},[a._v("#")]),a._v(" 30.哪些集合类是线程安全的?")]),a._v(" "),r("ul",[r("li",[r("p",[a._v("Vector：就比ArrayList多了个同步化机制（线程安全），因为效率较低，现在已经不太建议使用。在web应用中，特别是前台页面，往往效率（页面响应速度）是优先考虑的。")])]),a._v(" "),r("li",[r("p",[a._v("statck：堆栈类，先进后出。")])]),a._v(" "),r("li",[r("p",[a._v("Hashtable：就比HashMap多了个线程安全。")])]),a._v(" "),r("li",[r("p",[a._v("Enumeration：枚举，相当于迭代器。")])])]),a._v(" "),r("h3",{attrs:{id:"_31-迭代器lterator-是什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_31-迭代器lterator-是什么"}},[a._v("#")]),a._v(" 31.迭代器lterator 是什么?")]),a._v(" "),r("p",[a._v("迭代器是一种设计模式，它是一个对象，它可以遍历并选择序列中的对象，而开发人员不需要了解该序列的底层结构。迭代器通常被称")]),a._v(" "),r("p",[a._v("为“轻量级”对象，因为创建它的代价小。")]),a._v(" "),r("h3",{attrs:{id:"_32-lterator怎么使用-有什么特点"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_32-lterator怎么使用-有什么特点"}},[a._v("#")]),a._v(" 32.lterator怎么使用?有什么特点?")]),a._v(" "),r("p",[a._v("Java中的Iterator功能比较简单，并且只能单向移动：")]),a._v(" "),r("p",[a._v("(1) 使用方法iterator()要求容器返回一个Iterator。第一次调用Iterator的next()方法时，它返回序列的第一个元素。注意：iterator()方法是java.lang.Iterable接口,被Collection继承。")]),a._v(" "),r("p",[a._v("(2) 使用next()获得序列中的下一个元素。")]),a._v(" "),r("p",[a._v("(3) 使用hasNext()检查序列中是否还有元素。")]),a._v(" "),r("p",[a._v("(4) 使用remove()将迭代器新返回的元素删除。")]),a._v(" "),r("p",[a._v("Iterator是Java迭代器最简单的实现，为List设计的ListIterator具有更多的功能，它可以从两个方向遍历List，也可以从List中插入和删除元素。")]),a._v(" "),r("h3",{attrs:{id:"_33-lterator和listlterator有什么区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_33-lterator和listlterator有什么区别"}},[a._v("#")]),a._v(" 33.lterator和Listlterator有什么区别?")]),a._v(" "),r("ul",[r("li",[a._v("Iterator可用来遍历Set和List集合，但是ListIterator只能用来遍历List。")]),a._v(" "),r("li",[a._v("Iterator对集合只能是前向遍历，ListIterator既可以前向也可以后向。")]),a._v(" "),r("li",[a._v("ListIterator实现了Iterator接口，并包含其他的功能，比如：增加元素，替换元素，获取前一个和后一个元素的索引，等等。")])]),a._v(" "),r("h3",{attrs:{id:"_34-怎么确保一个集合不能被修改"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_34-怎么确保一个集合不能被修改"}},[a._v("#")]),a._v(" 34.怎么确保一个集合不能被修改？")]),a._v(" "),r("p",[a._v("可以使用 Collections. unmodifiableCollection(Collection c) 方法来创建一个只读集合，这样改变集合的任何操作都会抛出 Java. lang.")]),a._v(" "),r("p",[a._v("UnsupportedOperationException 异常。")]),a._v(" "),r("p",[a._v("示例代码如下：")]),a._v(" "),r("div",{staticClass:"language-java line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("List")]),r("span",{pre:!0,attrs:{class:"token generics"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" list "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ArrayList")]),r("span",{pre:!0,attrs:{class:"token generics"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nlist"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"A"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collection")]),r("span",{pre:!0,attrs:{class:"token generics"}},[r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" unmlist "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Collections")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("unmodifiableCollection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\nunmlist"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[a._v('"B"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 运行时此行报错")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" out"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("list"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[a._v("size")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br"),r("span",{staticClass:"line-number"},[a._v("5")]),r("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);