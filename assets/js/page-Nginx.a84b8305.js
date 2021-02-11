(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{894:function(s,a,t){"use strict";t.r(a);var n=t(1),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("Nginx 是一个高性能的 HTTP 和反向代理服务器，也是一个 IMAP / POP3 / SMTP 代理服务器。其特点是占有内存少，并发能力强，稳定性高，并且 Nginx 也拥有友好灵活的配置。")]),s._v(" "),t("h2",{attrs:{id:"启动-停止和重新加载配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动-停止和重新加载配置"}},[s._v("#")]),s._v(" 启动，停止和重新加载配置")]),s._v(" "),t("p",[s._v("要启动 nginx，请运行可执行文件。一旦启动 nginx，就可以通过使用 "),t("code",[s._v("-s")]),s._v(" 参数调用可执行文件来对其进行控制。使用以下语法:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nginx -s signal\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("其中 "),t("code",[s._v("signal")]),s._v(" 可能是以下之一:")]),s._v(" "),t("ul",[t("li",[s._v("stop - 快速关机")]),s._v(" "),t("li",[s._v("quit — 正常关机")]),s._v(" "),t("li",[s._v("reload — 重新加载配置文件")]),s._v(" "),t("li",[s._v("reopen — 重新打开日志文件")])]),s._v(" "),t("h2",{attrs:{id:"配置文件的结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件的结构"}},[s._v("#")]),s._v(" 配置文件的结构")]),s._v(" "),t("p",[s._v("Nginx 由受配置文件中指定的指令控制的模块组成。指令分为简单指令和块指令。一个简单的指令由名称和参数组成，这些名称和参数之间用空格分隔，并以分号("),t("code",[s._v(";")]),s._v(")结尾。块指令的结构与简单指令的结构相同，但是它不以分号结尾，而是带有一组用括号 ("),t("code",[s._v("{")]),s._v(" 和 "),t("code",[s._v("}")]),s._v(") 括起来的附加指令。如果一个块指令在括号内可以有其他指令，则称为 context (例如: "),t("code",[s._v("events")]),s._v(", "),t("code",[s._v("http")]),s._v(", "),t("code",[s._v("server")]),s._v(" 和 "),t("code",[s._v("location")]),s._v(")。")]),s._v(" "),t("p",[s._v("放置在任何 context 外部的配置文件中的指令都被视为在 main context 中。"),t("code",[s._v("events")]),s._v(" 和 "),t("code",[s._v("http")]),s._v(" 指令位于 "),t("code",[s._v("main")]),s._v(" context 中，"),t("code",[s._v("server")]),s._v(" 位于 "),t("code",[s._v("http")]),s._v(" 中, 并且 "),t("code",[s._v("location")]),s._v(" 在 "),t("code",[s._v("server")]),s._v(" 中")]),s._v(" "),t("p",[t("code",[s._v("#")]),s._v(" 号后的其余行被视为注释。")]),s._v(" "),t("h2",{attrs:{id:"提供静态内容"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提供静态内容"}},[s._v("#")]),s._v(" 提供静态内容")]),s._v(" "),t("p",[s._v("Web 服务器的一项重要任务是分发文件(例如图像或静态 HTML 页面)。您将实现一个示例，其中将根据请求从不同的本地目录提供文件: "),t("code",[s._v("/data/www")]),s._v(" (可能包含 HTML 文件)和 "),t("code",[s._v("/data/images")]),s._v("(包含图像)。这将需要编辑配置文件，并在带有两个位置块的 http 块内设置服务器块。")]),s._v(" "),t("p",[s._v("首先，创建 "),t("code",[s._v("/data/www")]),s._v(" 目录，并将包含任何文本内容的 "),t("code",[s._v("index.html")]),s._v(" 文件放入其中，并创建 "),t("code",[s._v("/data/images")]),s._v(" 目录并将一些图像放入其中。")]),s._v(" "),t("p",[s._v("接下来，打开配置文件。默认配置文件已经包含了服务器块的几个示例，大部分已被注释掉。现在，注释掉所有这些块并启动一个新的服务器块:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("通常，配置文件可以包括几个服务器块，这些服务器块通过它们侦听的端口和服务器名称来区分。一旦 nginx 决定了哪个服务器处理请求，它就会根据服务器块内定义的 location 指令的参数测试请求标头中指定的 URI。")]),s._v(" "),t("p",[s._v("将以下位置块添加到服务器块:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("与请求中的 URI 相比，此位置块指定 “"),t("code",[s._v("/")]),s._v("” 前缀。对于匹配的请求，URI 将被添加到 root 指令中指定的路径，即 "),t("code",[s._v("/data/www")]),s._v("，以形成本地文件系统上所请求文件的路径。如果有多个匹配的位置块，nginx 将选择前缀最长的位置块。上面的位置块提供了最短的前缀，长度为 1，因此，只有在所有其他位置块均未提供匹配项时，才会使用该块。")]),s._v(" "),t("p",[s._v("接下来，添加第二个位置块:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("这将匹配以 "),t("code",[s._v("/images/")]),s._v(" 开头的请求(位置 "),t("code",[s._v("/")]),s._v(" 也匹配此类请求，但前缀较短)。")]),s._v(" "),t("p",[s._v("服务器块的最终配置应如下所示:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("www"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("这已经是服务器的工作配置，可以在标准端口 "),t("code",[s._v("80")]),s._v(" 上侦听，并且可以在本地计算机上的 "),t("code",[s._v("http://localhost/")]),s._v(" 上访问。响应以 "),t("code",[s._v("/images/")]),s._v(" 开头的 URI 请求，服务器将从 "),t("code",[s._v("/data/images")]),s._v(" 目录中发送文件。例如，为响应 "),t("code",[s._v("http://localhost/images/example.png")]),s._v(" 请求，nginx 将发送文件 "),t("code",[s._v("/data/images/example.png")]),s._v("。如果该文件不存在，nginx 将发送一个注明 404 错误的响应。URI 不以 "),t("code",[s._v("/images/")]),s._v(" 开头的请求将被映射到 "),t("code",[s._v("/data/www")]),s._v(" 目录。例如，nginx 会响应 "),t("code",[s._v("http://localhost/some/example.html")]),s._v(" 请求发送 "),t("code",[s._v("/data/www/some/example.html")]),s._v(" 文件。")]),s._v(" "),t("p",[s._v("要应用新配置，请启动 nginx (如果尚未启动)，或通过执行以下命令向 nginx 的主进程发送 "),t("code",[s._v("reload")]),s._v(" 信号:")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("nginx -s reload\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("如果某些东西无法按预期工作，则可以尝试在目录 "),t("code",[s._v("/usr/local/nginx/logs")]),s._v(" 或目录 "),t("code",[s._v("/var/log/nginx")]),s._v(" 中的 access.log 和 error.log 文件中找出原因。。")]),s._v(" "),t("h2",{attrs:{id:"设置简单的代理服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置简单的代理服务器"}},[s._v("#")]),s._v(" 设置简单的代理服务器")]),s._v(" "),t("p",[s._v("Nginx 的一种常用用法是将其设置为代理服务器，这意味着服务器可以接收请求，将请求传递给代理服务器，从请求中检索响应并将它们发送给客户端。")]),s._v(" "),t("p",[s._v("我们将配置一个基本的代理服务器，该服务器为图像请求和本地目录中的文件提供服务，并将所有其他请求发送到代理服务器。在此示例中，两个服务器都将在单个 nginx 实例上定义。")]),s._v(" "),t("p",[s._v("首先，通过向 nginx 的配置文件中添加另一个 "),t("code",[s._v("server")]),s._v(" 块来定义代理服务器，其内容如下:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("listen")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("up1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("这将是一个简单的服务器，它在端口 8080 上侦听 (以前，自从使用标准端口 80 以来，未指定 listen 指令) 并将所有请求映射到本地文件系统的 "),t("code",[s._v("/data/up1")]),s._v(" 目录中。创建此目录，并将 "),t("code",[s._v("index.html")]),s._v(" 文件放入其中。请注意，根指令位于服务器上下文中。当选择用于服务请求的位置块不包括自己的根指令时，将使用这种根指令。")]),s._v(" "),t("p",[s._v("接下来，使用上一部分中的服务器配置并对其进行修改以使其成为代理服务器配置。在第一个位置块中，将 "),t("code",[s._v("proxy_pass")]),s._v(" 指令与参数中指定的代理服务器的协议，名称和端口放在一起 (在本例中为 "),t("code",[s._v("http://localhost:8080")]),s._v(" ):")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("我们将修改第二个 location 块，该位置块当前将带有 "),t("code",[s._v("/images/")]),s._v(" 前缀的请求映射到 "),t("code",[s._v("/data/images")]),s._v(" 目录下的文件，以使其与具有典型文件扩展名的图像的请求相匹配。修改后的位置块如下所示:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("该参数是一个正则表达式，它匹配以 "),t("code",[s._v(".gif")]),s._v("，"),t("code",[s._v(".jpg")]),s._v(" 或 "),t("code",[s._v(".png")]),s._v(" 结尾的所有 URI。正则表达式应以 "),t("code",[s._v("~")]),s._v(" 开头。相应的请求将被映射到 "),t("code",[s._v("/ data/images")]),s._v(" 目录。")]),s._v(" "),t("p",[s._v("当 nginx 选择一个 "),t("code",[s._v("location")]),s._v(" 块来服务请求时，它首先检查指定前缀的 "),t("code",[s._v("location")]),s._v(" 指令，记住带有最长前缀的 "),t("code",[s._v("location")]),s._v("，然后检查正则表达式。如果存在与正则表达式匹配的内容，nginx 会选择该 “"),t("code",[s._v("location")]),s._v("”，否则，它将选择之前记住的位置。")]),s._v(" "),t("p",[s._v("代理服务器的最终配置如下所示:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("proxy_pass")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("http")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("该服务器将过滤以 "),t("code",[s._v(".gif")]),s._v("，"),t("code",[s._v(".jpg")]),s._v(" 或 "),t("code",[s._v(".png")]),s._v(" 结尾的请求，并将它们映射到目录 "),t("code",[s._v("/data/images")]),s._v("(通过将 URI 添加到根指令的参数)，并将所有其他请求传递给上面配置的代理服务器。")]),s._v(" "),t("p",[s._v("要应用新配置，请按照前面几节的说明将重载信号发送到 nginx。")]),s._v(" "),t("p",[s._v("还有许多其他指令可用于进一步配置代理连接。")]),s._v(" "),t("h2",{attrs:{id:"设置-fastcgi-代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-fastcgi-代理"}},[s._v("#")]),s._v(" 设置 FastCGI 代理")]),s._v(" "),t("p",[s._v("Nginx 可用于将请求路由到 FastCGI 服务器，该服务器运行使用各种框架和编程语言 (例如 PHP) 构建的应用程序。")]),s._v(" "),t("p",[s._v("与 FastCGI 服务器一起使用的最基本的 Nginx 配置包括使用 "),t("code",[s._v("fastcgi_pass")]),s._v(" 指令而不是 "),t("code",[s._v("proxy_pass")]),s._v(" 指令和 "),t("code",[s._v("fastcgi_param")]),s._v(" 指令来设置传递给 FastCGI 服务器的参数。假设 FastCGI 服务器可以在 "),t("code",[s._v("localhost:9000")]),s._v(" 上访问。以上一节中的代理配置为基础，用 "),t("code",[s._v("fastcgi_pass")]),s._v(" 指令替换 "),t("code",[s._v("proxy_pass")]),s._v(" 指令，并将参数更改为 "),t("code",[s._v("localhost:9000")]),s._v("。在 PHP 中， "),t("code",[s._v("SCRIPT_FILENAME")]),s._v(" 参数用于确定脚本名称，而 "),t("code",[s._v("QUERY_STRING")]),s._v(" 参数用于传递请求参数。配置的结果为:")]),s._v(" "),t("div",{staticClass:"language-nginx line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-nginx"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("server")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_pass")]),s._v("  localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v(" SCRIPT_FILENAME "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$document_root")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$fastcgi_script_name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fastcgi_param")]),s._v(" QUERY_STRING    "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$query_string")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("location")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("~")]),s._v(" \\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpg"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("root")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("images"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("这将设置一个服务器，该服务器将通过 FastCGI 协议将除静态图像请求以外的所有请求路由到运行在 "),t("code",[s._v("localhost:9000")]),s._v(" 上的代理服务器。")]),s._v(" "),t("h2",{attrs:{id:"官方文档"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#官方文档"}},[s._v("#")]),s._v(" 官方文档")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://docs.nginx.com/nginx/admin-guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击此处"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);