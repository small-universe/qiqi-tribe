(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{487:function(_,v,a){_.exports=a.p+"assets/img/java-11.b862b13e.png"},559:function(_,v,a){"use strict";a.r(v);var t=a(1),s=Object(t.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[_._v("#")]),_._v(" 问题：")]),_._v(" "),t("p",[_._v("164.数据库的三范式是什么?")]),_._v(" "),t("p",[_._v("165.一张自增表里面总共有17条数据，删除了最后⒉条数据，重启 MySQL数据库，又插入了一条数据，此时id是几?")]),_._v(" "),t("p",[_._v("166.如何获取当前数据库版本?")]),_._v(" "),t("p",[_._v("167.说一下ACID是什么?")]),_._v(" "),t("p",[_._v("168.char和varchar 的区别是什么?")]),_._v(" "),t("p",[_._v("169.float和double的区别是什么?")]),_._v(" "),t("p",[_._v("170.MySQL 的内连接、左连接、右连接有什么区别?")]),_._v(" "),t("p",[_._v("171.MySQL索引是怎么实现的?")]),_._v(" "),t("p",[_._v("172.怎么验证 MySQL的索引是否满足需求?")]),_._v(" "),t("p",[_._v("173.说一下数据库的事务隔离?")]),_._v(" "),t("p",[_._v("174.说一下MySQL常用的引擎?")]),_._v(" "),t("p",[_._v("175.说一下MySQL的行锁和表锁?")]),_._v(" "),t("p",[_._v("176.说一下乐观锁和悲观锁?")]),_._v(" "),t("p",[_._v("177.MySQL问题排查都有哪些手段?")]),_._v(" "),t("p",[_._v("178.如何做MySQL的性能优化?")]),_._v(" "),t("h2",{attrs:{id:"答案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#答案"}},[_._v("#")]),_._v(" 答案:")]),_._v(" "),t("h3",{attrs:{id:"_164-数据库的三范式是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_164-数据库的三范式是什么"}},[_._v("#")]),_._v(" 164.数据库的三范式是什么?")]),_._v(" "),t("ul",[t("li",[_._v("第一范式：强调的是列的原子性，即数据库表的每一列都是不可分割的原子数据项。")]),_._v(" "),t("li",[_._v("第二范式：要求实体的属性完全依赖于主关键字。所谓完全依赖是指不能存在仅依赖主关键字一部分的属性。")]),_._v(" "),t("li",[_._v("第三范式：任何非主属性不依赖于其它非主属性。")])]),_._v(" "),t("h3",{attrs:{id:"_165-一张自增表里面总共有17条数据-删除了最后2-条数据-重启-mysql数据库-又插入了一条数据-此时id是几"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_165-一张自增表里面总共有17条数据-删除了最后2-条数据-重启-mysql数据库-又插入了一条数据-此时id是几"}},[_._v("#")]),_._v(" 165.一张自增表里面总共有17条数据，删除了最后⒉条数据，重启 MySQL数据库，又插入了一条数据，此时id是几?")]),_._v(" "),t("ul",[t("li",[_._v("表类型如果是 MyISAM ，那 id 就是 18。")]),_._v(" "),t("li",[_._v("表类型如果是 InnoDB，那 id 就是 15。")])]),_._v(" "),t("p",[_._v("InnoDB 表只会把自增主键的最大 id 记录在内存中，所以重启之后会导致最大 id 丢失。")]),_._v(" "),t("h3",{attrs:{id:"_166-如何获取当前数据库版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_166-如何获取当前数据库版本"}},[_._v("#")]),_._v(" 166.如何获取当前数据库版本?")]),_._v(" "),t("p",[_._v("使用 select version() 获取当前 MySQL 数据库版本。")]),_._v(" "),t("h3",{attrs:{id:"_167-说一下acid是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_167-说一下acid是什么"}},[_._v("#")]),_._v(" 167.说一下ACID是什么?")]),_._v(" "),t("ul",[t("li",[_._v("Atomicity（原子性）：一个事务（transaction）中的所有操作，或者全部完成，或者全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被恢复（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。即，事务不可分割、不可约简。")]),_._v(" "),t("li",[_._v("Consistency（一致性）：在事务开始之前和事务结束以后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设约束、触发器、级联回滚等。")]),_._v(" "),t("li",[_._v("Isolation（隔离性）：数据库允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（read committed）、可重复读（repeatable read）和串行化（Serializable）。")]),_._v(" "),t("li",[_._v("Durability（持久性）：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")])]),_._v(" "),t("h3",{attrs:{id:"_168-char和varchar-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_168-char和varchar-的区别是什么"}},[_._v("#")]),_._v(" 168.char和varchar 的区别是什么?")]),_._v(" "),t("p",[_._v('char(n) ：固定长度类型，比如订阅 char(10)，当你输入"abc"三个字符的时候，它们占的空间还是 10 个字节，其他 7 个是空字节。')]),_._v(" "),t("p",[_._v("char 优点：效率高；缺点：占用空间；适用场景：存储密码的 md5 值，固定长度的，使用 char 非常合适。")]),_._v(" "),t("p",[_._v("varchar(n) ：可变长度，存储的值是每个值占用的字节再加上一个用来记录其长度的字节的长度。")]),_._v(" "),t("p",[_._v("所以，从空间上考虑 varchar 比较合适；从效率上考虑 char 比较合适，二者使用需要权衡。")]),_._v(" "),t("h3",{attrs:{id:"_169-float和double的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_169-float和double的区别是什么"}},[_._v("#")]),_._v(" 169.float和double的区别是什么?")]),_._v(" "),t("p",[t("strong",[_._v("1、变量类型不同")])]),_._v(" "),t("p",[_._v("float属于单精度型浮点数据。")]),_._v(" "),t("p",[_._v("double属于双精度型浮点数据。")]),_._v(" "),t("p",[t("img",{attrs:{src:a(487),alt:""}})]),_._v(" "),t("p",[_._v("一个浮点数由三部分组成：符号位S、指数部分E（阶码）以及尾数部分M。")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("单精度浮点数(float)总共用32位来表示浮点数，其中尾数用23位存储，加上小数点前有一位隐藏的1(IEEE754规约数表示法)，2^(23+1) = 16777216。因为 10^7 < 16777216 < 10^8，所以说单精度浮点数的有效位数是7位。考虑到第7位可能的四舍五入问题，所以单精度最少有6位有效数字（最小尺寸）。")])]),_._v(" "),t("li",[t("p",[_._v("同样地：双精度浮点数(double)总共用64位来表示浮点数，其中尾数用52位存储，   2^(52+1) = 9007199254740992，10^16 < 9007199254740992 < 10^17，所以双精度的有效位数是16位。同样四舍五入，最少15位。")])])]),_._v(" "),t("p",[t("strong",[_._v("2、指数范围不同")])]),_._v(" "),t("p",[_._v("float的指数范围为-127~128。")]),_._v(" "),t("p",[_._v("double而double的指数范围为-1023~1024")]),_._v(" "),t("p",[t("strong",[_._v("3、表达式指数位不同")])]),_._v(" "),t("p",[_._v("float的表达式为1bit（符号位）+8bits（指数位）+23bits（尾数位）")]),_._v(" "),t("p",[_._v("double的表达式为1bit（符号位）+ 11bits（指数位）+ 52bits（尾数位）")]),_._v(" "),t("p",[t("strong",[_._v("4、占用内存空间不同")])]),_._v(" "),t("p",[_._v("float占4个字节（32位）内存空间，其数值范围为3.4E-38～3.4E+38。")]),_._v(" "),t("p",[_._v("double占8 个字节（64位）内存空间，其数值范围为1.7E-308～1.7E+308。")]),_._v(" "),t("p",[t("strong",[_._v("5、有效位数不同")])]),_._v(" "),t("p",[_._v("单精度浮点数的有效位数是7位。")]),_._v(" "),t("p",[_._v("双精度浮点数的有效位数是16位。")]),_._v(" "),t("p",[_._v("单精度最少有6位有效数字（最小尺寸）。")]),_._v(" "),t("p",[_._v("双精度的有效位数最少15位")]),_._v(" "),t("h3",{attrs:{id:"_170-mysql-的内连接、左连接、右连接有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_170-mysql-的内连接、左连接、右连接有什么区别"}},[_._v("#")]),_._v(" 170.MySQL 的内连接、左连接、右连接有什么区别?")]),_._v(" "),t("p",[_._v("内连接关键字：inner join；左连接：left join；右连接：right join。")]),_._v(" "),t("p",[_._v("内连接是把匹配的关联数据显示出来；左连接是左边的表全部显示出来，右边的表显示出符合条件的数据；右连接正好相反。")]),_._v(" "),t("h3",{attrs:{id:"_171-mysql索引是怎么实现的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_171-mysql索引是怎么实现的"}},[_._v("#")]),_._v(" 171.MySQL索引是怎么实现的?")]),_._v(" "),t("p",[_._v("索引是满足某种特定查找算法的数据结构，而这些数据结构会以某种方式指向数据，从而实现高效查找数据。")]),_._v(" "),t("p",[_._v("具体来说 MySQL 中的索引，不同的数据引擎实现有所不同，但目前主流的数据库引擎的索引都是 B+ 树实现的，B+ 树的搜索效率，可")]),_._v(" "),t("p",[_._v("以到达二分法的性能，找到数据区域之后就找到了完整的数据结构了，所以性能也是更好的。")]),_._v(" "),t("h3",{attrs:{id:"_172-怎么验证-mysql的索引是否满足需求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_172-怎么验证-mysql的索引是否满足需求"}},[_._v("#")]),_._v(" 172.怎么验证 MySQL的索引是否满足需求?")]),_._v(" "),t("p",[_._v("使用 explain 查看 SQL 是如何执行查询语句的，从而分析你的索引是否满足需求。")]),_._v(" "),t("p",[_._v("explain 语法：explain select * from table where type=1。")]),_._v(" "),t("h3",{attrs:{id:"_173-说一下数据库的事务隔离"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_173-说一下数据库的事务隔离"}},[_._v("#")]),_._v(" 173.说一下数据库的事务隔离?")]),_._v(" "),t("p",[_._v("MySQL 的事务隔离是在 MySQL. ini 配置文件里添加的，在文件的最后添加：transaction-isolation = REPEATABLE-READ")]),_._v(" "),t("p",[_._v("可用的配置值：READ-UNCOMMITTED、READ-COMMITTED、REPEATABLE-READ、SERIALIZABLE。")]),_._v(" "),t("ul",[t("li",[_._v("READ-UNCOMMITTED：未提交读，最低隔离级别、事务未提交前，就可被其他事务读取（会出现幻读、脏读、不可重复读）。")]),_._v(" "),t("li",[_._v("READ-COMMITTED：提交读，一个事务提交后才能被其他事务读取到（会造成幻读、不可重复读）。")]),_._v(" "),t("li",[_._v("REPEATABLE-READ：可重复读，默认级别，保证多次读取同一个数据时，其值都和事务开始时候的内容是一致，禁止读取到别的事务未提交的数据（会造成幻读）。")]),_._v(" "),t("li",[_._v("SERIALIZABLE：序列化，代价最高最可靠的隔离级别，该隔离级别能防止脏读、不可重复读、幻读。")])]),_._v(" "),t("p",[_._v("**脏读 ：**表示一个事务能够读取另一个事务中还未提交的数据。比如，某个事务尝试插入记录 A，此时该事务还未提交，然后另一个事")]),_._v(" "),t("p",[_._v("务尝试读取到了记录 A。")]),_._v(" "),t("p",[_._v("**不可重复读 ：**是指在一个事务内，多次读同一数据。")]),_._v(" "),t("p",[_._v("**幻读 ：**指同一个事务内多次查询返回的结果集不一样。比如同一个事务 A 第一次查询时候有 n 条记录，但是第二次同等条件下查询却")]),_._v(" "),t("p",[_._v("有 n+1 条记录，这就好像产生了幻觉。发生幻读的原因也是另外一个事务新增或者删除或者修改了第一个事务结果集里面的数据，同一")]),_._v(" "),t("p",[_._v("个记录的数据内容被修改了，所有数据行的记录就变多或者变少了。")]),_._v(" "),t("h3",{attrs:{id:"_174-说一下mysql常用的引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_174-说一下mysql常用的引擎"}},[_._v("#")]),_._v(" 174.说一下MySQL常用的引擎?")]),_._v(" "),t("p",[_._v("InnoDB 引擎：InnoDB 引擎提供了对数据库 ACID 事务的支持，并且还提供了行级锁和外键的约束，它的设计的目标就是处理大数据容量的数据库系统。MySQL 运行的时候，InnoDB 会在内存中建立缓冲池，用于缓冲数据和索引。但是该引擎是不支持全文搜索，同时启动也比较的慢，它是不"),t("strong",[_._v("会保存表的行数")]),_._v("的，所以当进行 select count(*) from table 指令的时候，"),t("strong",[_._v("需要进行扫描全表")]),_._v("。由于"),t("strong",[_._v("锁的粒度小，写操作是不会锁定全表的,所以在并发度较高的场景下使用会提升效率的。")])]),_._v(" "),t("p",[_._v("MyIASM 引擎：MySQL 的默认引擎，但不提供事务的支持，也不支持行级锁和外键。因此当执行插入和更新语句时，即执行写操作的时候需要锁定这个表，所以会导致效率会降低。不过和 InnoDB 不同的是，MyIASM 引擎是"),t("strong",[_._v("保存了表的行数")]),_._v("，于是当进行 select count(*) from table 语句时，可以直接的读取已经保存的值而"),t("strong",[_._v("不需要进行扫描全表")]),_._v("。所以，如果"),t("strong",[_._v("表的读操作远远多于写操作时，并且不需要事务的支持的，可以将 MyIASM 作为数据库引擎的首选。")])]),_._v(" "),t("h3",{attrs:{id:"_175-说一下mysql的行锁和表锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_175-说一下mysql的行锁和表锁"}},[_._v("#")]),_._v(" 175.说一下MySQL的行锁和表锁?")]),_._v(" "),t("p",[_._v("MyISAM 只支持表锁，InnoDB 支持表锁和行锁，默认为行锁。")]),_._v(" "),t("ul",[t("li",[_._v("表级锁：开销小，加锁快，不会出现死锁。锁粒度大，发生锁冲突的概率最高，并发量最低。")]),_._v(" "),t("li",[_._v("行级锁：开销大，加锁慢，会出现死锁。锁粒度小，发生锁冲突的概率小，并发度最高。")])]),_._v(" "),t("h3",{attrs:{id:"_176-说一下乐观锁和悲观锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_176-说一下乐观锁和悲观锁"}},[_._v("#")]),_._v(" 176.说一下乐观锁和悲观锁?")]),_._v(" "),t("ul",[t("li",[_._v("乐观锁：每次去拿数据的时候都认为别人不会修改，所以不会上锁，但是在提交更新的时候会判断一下在此期间别人有没有去更新这个数据。")]),_._v(" "),t("li",[_._v("悲观锁：每次去拿数据的时候都认为别人会修改，所以每次在拿数据的时候都会上锁，这样别人想拿这个数据就会阻止，直到这个锁被释放。")])]),_._v(" "),t("p",[_._v("数据库的乐观锁需要自己实现，在表里面添加一个 version 字段，每次修改成功值加 1，这样每次修改的时候先对比一下，自己拥有的")]),_._v(" "),t("p",[_._v("version 和数据库现在的 version 是否一致，如果不一致就不修改，这样就实现了乐观锁。")]),_._v(" "),t("h3",{attrs:{id:"_177-mysql问题排查都有哪些手段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_177-mysql问题排查都有哪些手段"}},[_._v("#")]),_._v(" 177.MySQL问题排查都有哪些手段?")]),_._v(" "),t("ul",[t("li",[_._v("使用 show processlist 命令查看当前所有连接信息。")]),_._v(" "),t("li",[_._v("使用 explain 命令查询 SQL 语句执行计划。")]),_._v(" "),t("li",[_._v("开启慢查询日志，查看慢查询的 SQL。")])]),_._v(" "),t("h3",{attrs:{id:"_178-如何做mysql的性能优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_178-如何做mysql的性能优化"}},[_._v("#")]),_._v(" 178.如何做MySQL的性能优化?")]),_._v(" "),t("ul",[t("li",[_._v("为搜索字段创建索引。")]),_._v(" "),t("li",[_._v("避免使用 select *，列出需要查询的字段。")]),_._v(" "),t("li",[_._v("垂直分割分表。")]),_._v(" "),t("li",[_._v("选择正确的存储引擎。")])])])}),[],!1,null,null,null);v.default=s.exports}}]);