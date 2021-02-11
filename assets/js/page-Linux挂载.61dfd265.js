(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{877:function(v,_,t){"use strict";t.r(_);var d=t(1),e=Object(d.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"linux-挂载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-挂载"}},[v._v("#")]),v._v(" Linux 挂载")]),v._v(" "),t("p",[v._v("前面讲过，Linux 系统中“一切皆文件”，所有文件都放置在以根目录为树根的树形目录结构中。在 Linux 看来，任何硬件设备也都是文件，它们各有自己的一套文件系统(文件目录结构)。")]),v._v(" "),t("p",[v._v("因此产生的问题是，当在 Linux 系统中使用这些硬件设备时，只有将 Linux 本身的文件目录与硬件设备的文件目录合二为一，硬件设备才能为我们所用。合二为一的过程称为“挂载”。")]),v._v(" "),t("p",[v._v("如果不挂载，通过 Linux 系统中的图形界面系统可以查看找到硬件设备，但命令行方式无法找到。")]),v._v(" "),t("p",[v._v("挂载，指的就是将设备文件中的顶级目录连接到 Linux 根目录下的某一目录(最好是空目录)，访问此目录就等同于访问设备文件。")]),v._v(" "),t("p",[v._v("纠正一个误区，并不是根目录下任何一个目录都可以作为挂载点，由于挂载操作会使得原有目录中文件被隐藏，因此根目录以及系统原有目录都不要作为挂载点，会造成系统异常甚至崩溃，挂载点最好是新建的空目录。")]),v._v(" "),t("p",[v._v("举个例子，我们想通过命令行访问某个 U 盘中的数据，我们要在根目录下新建一个目录 "),t("code",[v._v("/sdb-u")]),v._v("，通过挂载命令将 U 盘文件系统挂载到此目录，")]),v._v(" "),t("p",[v._v("前面讲过，根目录下的 "),t("code",[v._v("/dev/")]),v._v(" 目录文件负责所有的硬件设备文件，事实上，当 U 盘插入 Linux 后，系统也确实会给 U 盘分配一个目录文件(比如 sdb1)，就位于 "),t("code",[v._v("/dev/")]),v._v(" 目录下 ("),t("code",[v._v("/dev/sdb1")]),v._v(")，但无法通过 "),t("code",[v._v("/dev/sdb1/")]),v._v(" 直接访问 U 盘数据，访问此目录只会提供给您此设备的一些基本信息(比如容量)。")]),v._v(" "),t("p",[v._v("总之，Linux 系统使用任何硬件设备，都必须将设备文件与已有目录文件进行挂载。")]),v._v(" "),t("h2",{attrs:{id:"linux-硬件设备文件名称"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-硬件设备文件名称"}},[v._v("#")]),v._v(" Linux 硬件设备文件名称")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("硬件设备")]),v._v(" "),t("th",[v._v("文件名称")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("IDE 设备")]),v._v(" "),t("td",[t("code",[v._v("/dev/hd\\[a-d]")]),v._v("，现在的 IDE 设备已经很少见了，因此一般的硬盘设备会以 "),t("code",[v._v("/dev/sd")]),v._v(" 开头。")])]),v._v(" "),t("tr",[t("td",[v._v("SCSI / SATA / U 盘")]),v._v(" "),t("td",[t("code",[v._v("/dev/sd\\[a-p]")]),v._v("，一台主机可以有多块硬盘，因此系统采用 a~p 代表 16 块不同的硬盘。")])]),v._v(" "),t("tr",[t("td",[v._v("软驱")]),v._v(" "),t("td",[t("code",[v._v("/dev/fd\\[0-1]")])])]),v._v(" "),t("tr",[t("td",[v._v("打印机")]),v._v(" "),t("td",[t("code",[v._v("/dev/lp\\[0-15]")])])]),v._v(" "),t("tr",[t("td",[v._v("光驱")]),v._v(" "),t("td",[t("code",[v._v("/dev/cdrom")])])]),v._v(" "),t("tr",[t("td",[v._v("鼠标")]),v._v(" "),t("td",[t("code",[v._v("/dev/mouse")])])]),v._v(" "),t("tr",[t("td",[v._v("磁带机")]),v._v(" "),t("td",[t("code",[v._v("/dev/st0")]),v._v(" 或 "),t("code",[v._v("/dev/ht0")])])])])])])}),[],!1,null,null,null);_.default=e.exports}}]);