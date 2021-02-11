(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{486:function(_,v,a){_.exports=a.p+"assets/img/java-01.c359f8fb.png"},487:function(_,v,a){_.exports=a.p+"assets/img/java-02.0cde0b82.png"},698:function(_,v,a){"use strict";a.r(v);var t=a(1),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[_._v("#")]),_._v(" 问题：")]),_._v(" "),t("p",[_._v("35.并行和并发有什么区别?")]),_._v(" "),t("p",[_._v("36.线程和进程的区别?")]),_._v(" "),t("p",[_._v("37.守护线程是什么?")]),_._v(" "),t("p",[_._v("38.创建线程有哪几种方式?")]),_._v(" "),t("p",[_._v("39.说一下runnable和callable有什么区别?")]),_._v(" "),t("p",[_._v("40.线程有哪些状态?")]),_._v(" "),t("p",[_._v("41.sleep()和wait()有什么区别?")]),_._v(" "),t("p",[_._v("42.notify()和 notifyAll)有什么区别?")]),_._v(" "),t("p",[_._v("43.线程的run()和start()有什么区别?")]),_._v(" "),t("p",[_._v("44.创建线程池有哪几种方式?")]),_._v(" "),t("p",[_._v("45.线程池都有哪些状态?")]),_._v(" "),t("p",[_._v("46.线程池中 submit()和execute()方法有什么区别?")]),_._v(" "),t("p",[_._v("47.在java程序中怎么保证多线程的运行安全?")]),_._v(" "),t("p",[_._v("48.多线程锁的升级原理是什么?")]),_._v(" "),t("p",[_._v("49.什么是死锁?")]),_._v(" "),t("p",[_._v("50.怎么防止死锁?")]),_._v(" "),t("p",[_._v("51.ThreadLocal是什么?有哪些使用场景?")]),_._v(" "),t("p",[_._v("52.说一下synchronized底层实现原理?")]),_._v(" "),t("p",[_._v("53.synchronized和volatile 的区别是什么?")]),_._v(" "),t("p",[_._v("54.synchronized和Lock有什么区别?")]),_._v(" "),t("p",[_._v("55.synchronized和ReentrantLock区别是什么?")]),_._v(" "),t("p",[_._v("56.说一下atomic 的原理?")]),_._v(" "),t("h3",{attrs:{id:"答案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#答案"}},[_._v("#")]),_._v(" 答案：")]),_._v(" "),t("h3",{attrs:{id:"_35-并行和并发有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_35-并行和并发有什么区别"}},[_._v("#")]),_._v(" 35.并行和并发有什么区别?")]),_._v(" "),t("ul",[t("li",[_._v("并行是指两个或者多个事件在同一时刻发生；而并发是指两个或多个事件在同一时间间隔发生。")]),_._v(" "),t("li",[_._v("并行是在不同实体上的多个事件，并发是在同一实体上的多个事件。")]),_._v(" "),t("li",[_._v("在一台处理器上“同时”处理多个任务；在多台处理器上同时处理多个任务。如hadoop分布式集群。")])]),_._v(" "),t("p",[_._v("所以并发编程的目标是充分的利用处理器的每一个核，以达到最高的处理性能。")]),_._v(" "),t("h3",{attrs:{id:"_36-线程和进程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_36-线程和进程的区别"}},[_._v("#")]),_._v(" 36.线程和进程的区别?")]),_._v(" "),t("p",[_._v("简而言之，进程是程序运行和资源分配的基本单位，一个程序至少有一个进程，一个进程至少有一个线程。")]),_._v(" "),t("p",[_._v("进程在执行过程中拥有独立的内存单元，而多个线程共享内存资源，减少切换次数，从而效率更高。")]),_._v(" "),t("p",[_._v("线程是进程的一个实体，是cpu调度和分派的基本单位，是比程序更小的能独立运行的基本单位。")]),_._v(" "),t("p",[_._v("同一进程中的多个线程之间可以并发执行。")]),_._v(" "),t("h3",{attrs:{id:"_37-守护线程是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_37-守护线程是什么"}},[_._v("#")]),_._v(" 37.守护线程是什么?")]),_._v(" "),t("p",[_._v("守护线程（即daemon thread），是个服务线程，准确地来说就是服务其他的线程。")]),_._v(" "),t("h3",{attrs:{id:"_38-创建线程有哪几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_38-创建线程有哪几种方式"}},[_._v("#")]),_._v(" 38.创建线程有哪几种方式?")]),_._v(" "),t("p",[_._v("①. 继承Thread类创建线程类")]),_._v(" "),t("ul",[t("li",[_._v("定义Thread类的子类，并重写该类的run方法，该run方法的方法体就代表了线程要完成的任务。因此把run()方法称为执行体。")]),_._v(" "),t("li",[_._v("创建Thread子类的实例，即创建了线程对象。")]),_._v(" "),t("li",[_._v("调用线程对象的start()方法来启动该线程。")])]),_._v(" "),t("p",[_._v("②. 通过Runnable接口创建线程类")]),_._v(" "),t("ul",[t("li",[_._v("定义runnable接口的实现类，并重写该接口的run()方法，该run()方法的方法体同样是该线程的线程执行体。")]),_._v(" "),t("li",[_._v("创建 Runnable实现类的实例，并依此实例作为Thread的target来创建Thread对象，该Thread对象才是真正的线程对象。")]),_._v(" "),t("li",[_._v("调用线程对象的start()方法来启动该线程。")])]),_._v(" "),t("p",[_._v("③. 通过Callable和Future创建线程")]),_._v(" "),t("ul",[t("li",[_._v("创建Callable接口的实现类，并实现call()方法，该call()方法将作为线程执行体，并且有返回值。")]),_._v(" "),t("li",[_._v("创建Callable实现类的实例，使用FutureTask类来包装Callable对象，该FutureTask对象封装了该Callable对象的call()方法的返回值。")]),_._v(" "),t("li",[_._v("使用FutureTask对象作为Thread对象的target创建并启动新线程。")]),_._v(" "),t("li",[_._v("调用FutureTask对象的get()方法来获得子线程执行结束后的返回值。")])]),_._v(" "),t("h3",{attrs:{id:"_39-说一下runnable和callable有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_39-说一下runnable和callable有什么区别"}},[_._v("#")]),_._v(" 39.说一下runnable和callable有什么区别?")]),_._v(" "),t("p",[_._v("有点深的问题了，也看出一个Java程序员学习知识的广度。")]),_._v(" "),t("ul",[t("li",[_._v("Runnable接口中的run()方法的返回值是void，它做的事情只是纯粹地去执行run()方法中的代码而已；")]),_._v(" "),t("li",[_._v("Callable接口中的call()方法是有返回值的，是一个泛型，和Future、FutureTask配合可以用来"),t("strong",[_._v("获取异步执行的结果")]),_._v("。")])]),_._v(" "),t("h3",{attrs:{id:"_40-线程有哪些状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_40-线程有哪些状态"}},[_._v("#")]),_._v(" 40.线程有哪些状态?")]),_._v(" "),t("p",[_._v("线程通常都有五种状态，创建、就绪、运行、阻塞和死亡。")]),_._v(" "),t("ul",[t("li",[_._v("创建状态。在生成线程对象，并没有调用该对象的start方法，这是线程处于创建状态。")]),_._v(" "),t("li",[_._v("就绪状态。当调用了线程对象的start方法之后，该线程就进入了就绪状态，但是此时线程调度程序还没有把该线程设置为当前线程，此时处于就绪状态。在线程运行之后，从等待或者睡眠中回来之后，也会处于就绪状态。")]),_._v(" "),t("li",[_._v("运行状态。线程调度程序将处于就绪状态的线程设置为当前线程，此时线程就进入了运行状态，开始运行run函数当中的代码。")]),_._v(" "),t("li",[_._v("阻塞状态。线程正在运行的时候，被暂停，通常是为了等待某个时间的发生(比如说某项资源就绪)之后再继续运行。sleep,suspend，wait等方法都可以导致线程阻塞。")]),_._v(" "),t("li",[_._v("死亡状态。如果一个线程的run方法执行结束或者调用stop方法后，该线程就会死亡。对于已经死亡的线程，无法再使用start方法令其进入就绪")])]),_._v(" "),t("h3",{attrs:{id:"_41-sleep-和wait-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_41-sleep-和wait-有什么区别"}},[_._v("#")]),_._v(" 41.sleep()和wait()有什么区别?")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("sleep()：方法是线程类（Thread）的静态方法，让调用线程进入睡眠状态，让出执行机会给其他线程，等到休眠时间结束后，线程进入就绪状态和其他线程一起竞争cpu的执行时间。")])]),_._v(" "),t("li",[t("p",[_._v("因为sleep() 是static静态的方法，他不能改变对象的机锁，当一个synchronized块中调用了sleep() 方法，线程虽然进入休眠，但是对象的机锁没有被释放，其他线程依然无法访问这个对象。")])]),_._v(" "),t("li",[t("p",[_._v("wait()：wait()是Object类的方法，当一个线程执行到wait方法时，它就进入到一个和该对象相关的等待池，同时释放对象的机锁，使得其他线程能够访问，可以通过notify，notifyAll方法来唤醒等待的线程")])])]),_._v(" "),t("h3",{attrs:{id:"_42-notify-和-notifyall-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_42-notify-和-notifyall-有什么区别"}},[_._v("#")]),_._v(" 42.notify()和 notifyAll)有什么区别?")]),_._v(" "),t("ul",[t("li",[_._v("如果线程调用了对象的 wait()方法，那么线程便会处于该对象的等待池中，等待池中的线程不会去竞争该对象的锁。")]),_._v(" "),t("li",[_._v("当有线程调用了对象的 notifyAll()方法（唤醒所有 wait 线程）或 notify()方法（只随机唤醒一个 wait 线程），被唤醒的的线程便会进入该对象的锁池中，锁池中的线程会去竞争该对象锁。也就是说，调用了notify后只要一个线程会由等待池进入锁池，而notifyAll会将该对象等待池内的所有线程移动到锁池中，等待锁竞争。")]),_._v(" "),t("li",[_._v("优先级高的线程竞争到对象锁的概率大，假若某线程没有竞争到该对象锁，它还会留在锁池中，唯有线程再次调用 wait()方法，它才会重新回到等待池中。而竞争到对象锁的线程则继续往下执行，直到执行完了 synchronized 代码块，它会释放掉该对象锁，这时锁池中的线程会继续竞争该对象锁。")])]),_._v(" "),t("h3",{attrs:{id:"_43-线程的run-和start-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_43-线程的run-和start-有什么区别"}},[_._v("#")]),_._v(" 43.线程的run()和start()有什么区别?")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("每个线程都是通过某个特定Thread对象所对应的方法run()来完成其操作的，方法run()称为线程体。通过调用Thread类的start()方法来启动一个线程。")])]),_._v(" "),t("li",[t("p",[_._v("start()方法来启动一个线程，真正实现了多线程运行。这时无需等待run方法体代码执行完毕，可以直接继续执行下面的代码； 这时此线程是处于就绪状态， 并没有运行。 然后通过此Thread类调用方法run()来完成其运行状态， 这里方法run()称为线程体，它包含了要执行的这个线程的内容， run方法运行结束， 此线程终止。然后CPU再调度其它线程。")])]),_._v(" "),t("li",[t("p",[_._v("run()方法是在本线程里的，只是线程里的一个函数,而不是多线程的。 如果直接调用run(),其实就相当于是调用了一个普通函数而已，直接待用run()方法必须等待run()方法执行完毕才能执行下面的代码，所以执行路径还是只有一条，根本就没有线程的特征，所以在多线程执行时要使用start()方法而不是run()方法。")])])]),_._v(" "),t("h3",{attrs:{id:"_44-创建线程池有哪几种方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_44-创建线程池有哪几种方式"}},[_._v("#")]),_._v(" 44.创建线程池有哪几种方式?")]),_._v(" "),t("p",[t("strong",[_._v("①. newFixedThreadPool(int nThreads)")])]),_._v(" "),t("p",[_._v("创建一个固定长度的线程池，每当提交一个任务就创建一个线程，直到达到线程池的最大数量，这时线程规模将不再变化，当线程发生未预期的错误而结束时，线程池会补充一个新的线程。")]),_._v(" "),t("p",[t("strong",[_._v("②. newCachedThreadPool()")])]),_._v(" "),t("p",[_._v("创建一个可缓存的线程池，如果线程池的规模超过了处理需求，将自动回收空闲线程，而当需求增加时，则可以自动添加新线程，线程池的规模不存在任何限制。")]),_._v(" "),t("p",[t("strong",[_._v("③. newSingleThreadExecutor()")])]),_._v(" "),t("p",[_._v("这是一个单线程的Executor，它创建单个工作线程来执行任务，如果这个线程异常结束，会创建一个新的来替代它；它的特点是能确保依照任务在队列中的顺序来串行执行。")]),_._v(" "),t("p",[t("strong",[_._v("④. newScheduledThreadPool(int corePoolSize)")])]),_._v(" "),t("p",[_._v("创建了一个固定长度的线程池，而且以延迟或定时的方式来执行任务，类似于Timer。")]),_._v(" "),t("h3",{attrs:{id:"_45-线程池都有哪些状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_45-线程池都有哪些状态"}},[_._v("#")]),_._v(" 45.线程池都有哪些状态?")]),_._v(" "),t("p",[_._v("线程池有5种状态：Running、ShutDown、Stop、Tidying、Terminated。")]),_._v(" "),t("p",[_._v("线程池各个状态切换框架图：")]),_._v(" "),t("p",[t("img",{attrs:{src:a(486),alt:""}})]),_._v(" "),t("h3",{attrs:{id:"_46-线程池中-submit-和execute-方法有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_46-线程池中-submit-和execute-方法有什么区别"}},[_._v("#")]),_._v(" 46.线程池中 submit()和execute()方法有什么区别?")]),_._v(" "),t("ul",[t("li",[_._v("接收的参数不一样")]),_._v(" "),t("li",[_._v("submit有返回值，而execute没有")]),_._v(" "),t("li",[_._v("submit方便Exception处理")])]),_._v(" "),t("h3",{attrs:{id:"_47-在java程序中怎么保证多线程的运行安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_47-在java程序中怎么保证多线程的运行安全"}},[_._v("#")]),_._v(" 47.在java程序中怎么保证多线程的运行安全?")]),_._v(" "),t("p",[_._v("线程安全在三个方面体现：")]),_._v(" "),t("ul",[t("li",[_._v("原子性：提供互斥访问，同一时刻只能有一个线程对数据进行操作，（atomic,synchronized）；")]),_._v(" "),t("li",[_._v("可见性：一个线程对主内存的修改可以及时地被其他线程看到，（synchronized,volatile）；")]),_._v(" "),t("li",[_._v("有序性：一个线程观察其他线程中的指令执行顺序，由于指令重排序，该观察结果一般杂乱无序，（happens-before原则）。")])]),_._v(" "),t("h3",{attrs:{id:"_48-多线程锁的升级原理是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_48-多线程锁的升级原理是什么"}},[_._v("#")]),_._v(" 48.多线程锁的升级原理是什么?")]),_._v(" "),t("p",[_._v("在Java中，锁共有4种状态，级别从低到高依次为：无状态锁，偏向锁，轻量级锁和重量级锁状态，这几个状态会随着竞争情况逐渐升")]),_._v(" "),t("p",[_._v("级。锁可以升级但不能降级。")]),_._v(" "),t("p",[_._v("锁升级的图示过程：")]),_._v(" "),t("p",[t("img",{attrs:{src:a(487),alt:""}})]),_._v(" "),t("h3",{attrs:{id:"_49-什么是死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_49-什么是死锁"}},[_._v("#")]),_._v(" 49.什么是死锁?")]),_._v(" "),t("p",[_._v("死锁是指两个或两个以上的进程在执行过程中，由于竞争资源或者由于彼此通信而造成的一种阻塞的现象，若无外力作用，它们都将无")]),_._v(" "),t("p",[_._v("法推进下去。此时称系统处于死锁状态或系统产生了死锁，这些永远在互相等待的进程称为死锁进程。是操作系统层面的一个错误，是")]),_._v(" "),t("p",[_._v("进程死锁的简称，最早在 1965 年由 Dijkstra 在研究银行家算法时提出的，它是计算机操作系统乃至整个并发程序设计领域最难处理的")]),_._v(" "),t("p",[_._v("问题之一。")]),_._v(" "),t("h3",{attrs:{id:"_50-怎么防止死锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_50-怎么防止死锁"}},[_._v("#")]),_._v(" 50.怎么防止死锁?")]),_._v(" "),t("p",[_._v("死锁的四个必要条件：")]),_._v(" "),t("ul",[t("li",[_._v("**互斥条件：**进程对所分配到的资源不允许其他进程进行访问，若其他进程访问该资源，只能等待，直至占有该资源的进程使用完成后释放该资源")]),_._v(" "),t("li",[_._v("**请求和保持条件：**进程获得一定的资源之后，又对其他资源发出请求，但是该资源可能被其他进程占有，此事请求阻塞，但又对自己获得的资源保持不放")]),_._v(" "),t("li",[_._v("**不可剥夺条件：**是指进程已获得的资源，在未完成使用之前，不可被剥夺，只能在使用完后自己释放")]),_._v(" "),t("li",[_._v("**环路等待条件：**是指进程发生死锁后，若干进程之间形成一种头尾相接的循环等待资源关系")])]),_._v(" "),t("p",[_._v("这四个条件是死锁的必要条件，只要系统发生死锁，这些条件必然成立，而只要上述条件之 一不满足，就不会发生死锁。")]),_._v(" "),t("p",[_._v("理解了死锁的原因，尤其是产生死锁的四个必要条件，就可以最大可能地避免、预防和 解除死锁。")]),_._v(" "),t("p",[_._v("所以，在系统设计、进程调度等方面注意如何不让这四个必要条件成立，如何确 定资源的合理分配算法，避免进程永久占据系统资源。")]),_._v(" "),t("p",[_._v("此外，也要防止进程在处于等待状态的情况下占用资源。因此，对资源的分配要给予合理的规划。")]),_._v(" "),t("h3",{attrs:{id:"_51-threadlocal是什么-有哪些使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_51-threadlocal是什么-有哪些使用场景"}},[_._v("#")]),_._v(" 51.ThreadLocal是什么?有哪些使用场景?")]),_._v(" "),t("p",[_._v("线程局部变量是局限于线程内部的变量，属于线程自身所有，不在多个线程间共享。Java提供ThreadLocal类来支持线程局部变量，是")]),_._v(" "),t("p",[_._v("一种实现线程安全的方式。但是在管理环境下（如 web 服务器）使用线程局部变量的时候要特别小心，在这种情况下，工作线程的生")]),_._v(" "),t("p",[_._v("命周期比任何应用变量的生命周期都要长。任何线程局部变量一旦在工作完成后没有释放，Java 应用就存在内存泄露的风险。")]),_._v(" "),t("h3",{attrs:{id:"_52-说一下synchronized底层实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_52-说一下synchronized底层实现原理"}},[_._v("#")]),_._v(" 52.说一下synchronized底层实现原理?")]),_._v(" "),t("p",[_._v("synchronized可以保证方法或者代码块在运行时，同一时刻只有一个方法可以进入到临界区，同时它还可以保证共享变量的内存可见性。")]),_._v(" "),t("p",[_._v("Java中每一个对象都可以作为锁，这是synchronized实现同步的基础：")]),_._v(" "),t("ul",[t("li",[_._v("普通同步方法，锁是当前实例对象")]),_._v(" "),t("li",[_._v("静态同步方法，锁是当前类的class对象")]),_._v(" "),t("li",[_._v("同步方法块，锁是括号里面的对象")])]),_._v(" "),t("h3",{attrs:{id:"_53-synchronized和volatile-的区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_53-synchronized和volatile-的区别是什么"}},[_._v("#")]),_._v(" 53.synchronized和volatile 的区别是什么?")]),_._v(" "),t("ul",[t("li",[_._v("volatile本质是在告诉jvm当前变量在寄存器（工作内存）中的值是不确定的，需要从主存中读取； synchronized则是锁定当前变量，只有当前线程可以访问该变量，其他线程被阻塞住。")]),_._v(" "),t("li",[_._v("volatile仅能使用在变量级别；synchronized则可以使用在变量、方法、和类级别的。")]),_._v(" "),t("li",[_._v("volatile仅能实现变量的修改可见性，不能保证原子性；而synchronized则可以保证变量的修改可见性和原子性。")]),_._v(" "),t("li",[_._v("volatile不会造成线程的阻塞；synchronized可能会造成线程的阻塞。")]),_._v(" "),t("li",[_._v("volatile标记的变量不会被编译器优化；synchronized标记的变量可以被编译器优化。")])]),_._v(" "),t("h3",{attrs:{id:"_54-synchronized和lock有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_54-synchronized和lock有什么区别"}},[_._v("#")]),_._v(" 54.synchronized和Lock有什么区别?")]),_._v(" "),t("ul",[t("li",[_._v("首先synchronized是java内置关键字，在jvm层面，Lock是个java类；")]),_._v(" "),t("li",[_._v("synchronized无法判断是否获取锁的状态，Lock可以判断是否获取到锁；")]),_._v(" "),t("li",[_._v("synchronized会自动释放锁(a 线程执行完同步代码会释放锁 ；b 线程执行过程中发生异常会释放锁)，Lock需在finally中手工释放锁（unlock()方法释放锁），否则容易造成线程死锁；")]),_._v(" "),t("li",[_._v("用synchronized关键字的两个线程1和线程2，如果当前线程1获得锁，线程2线程等待。如果线程1阻塞，线程2则会一直等待下去，而Lock锁就不一定会等待下去，如果尝试获取不到锁，线程可以不用一直等待就结束了；")]),_._v(" "),t("li",[_._v("synchronized的锁可重入、不可中断、非公平，而Lock锁可重入、可判断、可公平（两者皆可）；")]),_._v(" "),t("li",[_._v("Lock锁适合大量同步的代码的同步问题，synchronized锁适合代码少量的同步问题。")])]),_._v(" "),t("h3",{attrs:{id:"_55-synchronized和reentrantlock区别是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_55-synchronized和reentrantlock区别是什么"}},[_._v("#")]),_._v(" 55.synchronized和ReentrantLock区别是什么?")]),_._v(" "),t("p",[_._v("synchronized是和if、else、for、while一样的关键字，ReentrantLock是类，这是二者的本质区别。既然ReentrantLock是类，那么它")]),_._v(" "),t("p",[_._v("就提供了比synchronized更多更灵活的特性，可以被继承、可以有方法、可以有各种各样的类变量，ReentrantLock比synchronized的")]),_._v(" "),t("p",[_._v("扩展性体现在几点上：")]),_._v(" "),t("ul",[t("li",[_._v("ReentrantLock可以对获取锁的等待时间进行设置，这样就避免了死锁")]),_._v(" "),t("li",[_._v("ReentrantLock可以获取各种锁的信息")]),_._v(" "),t("li",[_._v("ReentrantLock可以灵活地实现多路通知")])]),_._v(" "),t("p",[_._v("另外，二者的锁机制其实也是不一样的:ReentrantLock底层调用的是Unsafe的park方法加锁，synchronized操作的应该是对象头中mark word。")]),_._v(" "),t("h3",{attrs:{id:"_56-说一下atomic-的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_56-说一下atomic-的原理"}},[_._v("#")]),_._v(" 56.说一下atomic 的原理?")]),_._v(" "),t("p",[_._v("Atomic包中的类基本的特性就是在多线程环境下，当有多个线程同时对单个（包括基本类型及引用类型）变量进行操作时，具有排他")]),_._v(" "),t("p",[_._v("性，即当多个线程同时对该变量的值进行更新时，仅有一个线程能成功，而未成功的线程可以像自旋锁一样，继续尝试，一直等到执行")]),_._v(" "),t("p",[_._v("成功。")]),_._v(" "),t("p",[_._v("Atomic系列的类中的核心方法都会调用unsafe类中的几个本地方法。我们需要先知道一个东西就是Unsafe类，全名为：")]),_._v(" "),t("p",[_._v("sun.misc.Unsafe，这个类包含了大量的对C代码的操作，包括很多直接内存分配以及原子操作的调用，而它之所以标记为非安全的，是")]),_._v(" "),t("p",[_._v("告诉你这个里面大量的方法调用都会存在安全隐患，需要小心使用，否则会导致严重的后果，例如在通过unsafe分配内存的时候，如果")]),_._v(" "),t("p",[_._v("自己指定某些区域可能会导致一些类似C++一样的指针越界到其他进程的问题。")])])}),[],!1,null,null,null);v.default=r.exports}}]);