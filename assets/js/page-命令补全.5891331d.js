(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{865:function(s,a,e){"use strict";e.r(a);var t=e(1),l=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[s._v("文件名(或者目录名)是执行 Linux 命令中最常见的参数，例如前面介绍的 "),e("code",[s._v("cd")]),s._v("、"),e("code",[s._v("mkdir")]),s._v("、"),e("code",[s._v("cp")]),s._v(" 等命令，都涉及到了文件名。然而对初学者来说，输入完整的文件名感觉很麻烦，尤其面临文件名(目录名)特别长的时候。")]),s._v(" "),e("p",[s._v("考虑到这种情况，Shell (Bash) 提供了一种称为“命令行自动补全”的功能，即在输入文件名的时候，只需要输入该文件名的前几个字符，然后按 Tab 键，Shell 就可以自动将文件名补全。")]),s._v(" "),e("p",[s._v("举个例子，在 "),e("code",[s._v("/etc")]),s._v(" 目录下，执行如下命令:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost ~]# cd /etc\n[root@localhost etc]# cd fs <-- 按一次 Tab 键\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v('当按下 Tab 键时，您会发现 Shell 自动将 "fs" 补全成了 "fatab"，这是因为当前 '),e("code",[s._v("/etc")]),s._v(' 目录中只有 fstab 是以 "fs" 开头，因此 Shell 可以确定这里想要输入的文件名称为 fstab。')]),s._v(" "),e("p",[s._v("那么，如果当前目录中含有多个以指定字符(或字符串)开头的目录或文件，Shell 还可以成功辨认吗? 答案是否定的，但它会以列表的形式给出所有以指定字符或字符串开头的文件或目录，供用户选择。")]),s._v(" "),e("p",[s._v("例如，还是在 "),e("code",[s._v("/etc")]),s._v(" 目录下，执行如下命令:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost etc]# cd b <-- 连续按两次 Tab 键\nbash_completion.d/      blkid/          bonobo-activation/\nbashrc                  bluetooth\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v('可以看到，当按一次 Tab 键时，Shell 没有任何反映，原因就是当前目录下以 "b" 为开头的文件或目录有多个(2 个以上)，仅凭一个字符 "b" 无法精准判断出具体指的是哪个文件。而当再一次按下 Tab 键时，Shell 会列表的形式显示给用户当前目录下所有以 "b" 开头的文件或目录。')]),s._v(" "),e("p",[s._v("事实上，Shell 提供的命令行补全功能不仅适用于补全文件名，也同样适用于所有 Linux 命令。举个例子，当输入 "),e("code",[s._v("ca")]),s._v(' 并连续按下 2 次 Tab 键时，Shell 会罗列出所有以 "ca" 开头的 Linux 命令，如下所示:')]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost etc]# ca <--连续按两次 Tab 键\ncacertdir_rehash    cache_restore       capsh       catchsegv\ncache_check         cal                 captoinfo\ncache_dump          caller              case\ncache_repair        canberra-gtk-play   cat\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("另外，Shell 还有一套被称作通配符的转用符号，这些通配符可以搜索并匹配文件名的一部分，从而大大简化了文件名的输入。")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("*")]),s._v(": 匹配任意数量的字符。")]),s._v(" "),e("li",[e("code",[s._v("?")]),s._v(": 匹配任意一个字符。")]),s._v(" "),e("li",[e("code",[s._v("[]")]),s._v(": 匹配括号内的任意一个字符，甚至 "),e("code",[s._v("[]")]),s._v(" 中还可以包含用 "),e("code",[s._v("-")]),s._v("(短横线)连接的字符或数字，表示一定范围内的字符或数字。")])]),s._v(" "),e("p",[s._v("为了学习这些通配符的用法，首先需要建立一个空目录(如 test)，并在该目录中创建一些文件(供测试用)，执行命令如下:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost etc]# makdir test\n[root@localhost etc]# cd test\n[root@localhost test]# touch apple banana grape grapefruit watermelon\n[root@localhost test]# ls\napple banana grape grapefruit watermelon\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("在此基础上，继续执行如下命令:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost test]# ls a* <--匹配所有以 a 字符开头的文件名\napple\n[root@localhost test]# ls g*t <--匹配所有以 g 字符开头，以 t 字符结尾的文件名\ngrapefruit\n[root@localhost test]# ls *e* <--匹配所有包含 e 字符的文件名\napple grape grapefruit watermelon\n[root@localhost test]# ls *n* <--匹配所有包含 n 字符的文件名\nbanana watermelon\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("结合以上实例，因为 "),e("code",[s._v("*")]),s._v(" 可以匹配任何数量的字符，因此可以一一实现实例中标注的功能。")]),s._v(" "),e("p",[s._v("接下来，列举一下使用 ? 匹配文件名的示例:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost test]# ls ????e\napple grape\n[root@localhost test]# ls g???e*\ngrape grapefruit\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("因为 1 个 ? 只能匹配 1 个任意字符，因此该示例中第一个例子表示的是匹配任意包含 5 个字符但以 e 结尾的文件(apple 和 grape)，第二例子表示匹配任何以 g 开头且第 5 个字符为 e 的文件(grape 和 grapefruit)。")]),s._v(" "),e("p",[s._v("最后，列举一些使用括号 "),e("code",[s._v("[]")]),s._v(" 匹配文件名的示例:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost test]# ls [abw]*\napple banana watermelon\n[root@localhost test]# ls [agw]*[ne]\napple grape watermelon\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("此示例中，第一个例子表示匹配任何以 a、b 或 w 开头的文件；第二个例子中表示匹配任何以 a、g、w 开头，以 n 或 e 结尾的文件名。")]),s._v(" "),e("p",[s._v("不仅如此，"),e("code",[s._v("[]")]),s._v(" 中还可以通过 -(短横线)表示一定范围内的任意字符(或数字)，例如:")]),s._v(" "),e("div",{staticClass:"language-shell-session line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell-session"}},[e("code",[e("span",{pre:!0,attrs:{class:"token output"}},[s._v("[root@localhost test]# ls [a-g]*\napple banana grape grapefruit\n")])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("其中，"),e("code",[s._v("[a-g]*")]),s._v(" 表示匹配以字母 a 到 g 之间任何一个字母开头的文件名。")])])}),[],!1,null,null,null);a.default=l.exports}}]);