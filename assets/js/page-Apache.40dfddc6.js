(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{745:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Apache 是世界使用排名第一的 Web 服务器软件。它可以运行在几乎所有广泛使用的计算机平台上，由于其跨平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩充，将 Perl/Python 等解释器编译到服务器中。")]),s._v(" "),a("h2",{attrs:{id:"apache-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-是什么"}},[s._v("#")]),s._v(" Apache 是什么")]),s._v(" "),a("p",[s._v("Apache HTTP Server (简称 Apache )是 Apache 软件基金会的一个开放源码的网页服务器，可以在大多数计算机操作系统中运行，由于其多平台和安全性被广泛使用，是最流行的 Web 服务器端软件之一。它快速、可靠并且可通过简单的 API 扩展，将 Perl/Python 等解释器编译到服务器中。")]),s._v(" "),a("p",[s._v("Apache HTTP 服务器是一个模块化的服务器，源于 NCSAhttpd 服务器，经过多次修改，成为世界使用排名第一的 Web 服务器软件。\n它可以运行在几乎所有广泛使用的计算机平台上。")]),s._v(" "),a("h2",{attrs:{id:"apache-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-模块"}},[s._v("#")]),s._v(" Apache 模块")]),s._v(" "),a("p",[s._v("Apache 通过引入各种模块来完成不同的功能。")]),s._v(" "),a("h2",{attrs:{id:"apache-官方文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-官方文档"}},[s._v("#")]),s._v(" Apache 官方文档")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://httpd.apache.org/docs/2.4/zh-cn/",target:"_blank",rel:"noopener noreferrer"}},[s._v("文档地址"),a("OutboundLink")],1)])]),s._v(" "),a("h2",{attrs:{id:"apache-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache-配置"}},[s._v("#")]),s._v(" Apache 配置")]),s._v(" "),a("p",[s._v("Apache 通过 conf 文件夹下的 httpd.conf 来配置。")]),s._v(" "),a("div",{staticClass:"language-apacheconf line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-apacheconf"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处填入 Apache 的路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Define")]),s._v(" SRVROOT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"U:/Apache"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerRoot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Listen")]),s._v(" 127.0.0.1:80\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Listen")]),s._v(" 127.0.0.1:443\n\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" auth_basic_module modules/mod_auth_basic.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" authz_core_module modules/mod_authz_core.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" deflate_module modules/mod_deflate.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" dir_module modules/mod_dir.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" env_module modules/mod_env.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" isapi_module modules/mod_isapi.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" log_config_module modules/mod_log_config.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" mime_module modules/mod_mime.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" negotiation_module modules/mod_negotiation.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" proxy_http2_module modules/mod_proxy_http2.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" ratelimit_module modules/mod_ratelimit.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" rewrite_module modules/mod_rewrite.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" setenvif_module modules/mod_setenvif.so\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" ssl_module modules/mod_ssl.so\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处填入 PHP 的 ssh 组件路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u:/php/libssh2.dll"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处填入 PHP 的 Apache 组件路径")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LoadModule")]),s._v(" php7_module "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u:/PHP/php7apache2_4.dll"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 此处填入 PHP 的路径")]),s._v("\nPHPIniDir "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u:/PHP"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" unixd_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("User")]),s._v(" daemon\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Group")]),s._v(" daemon\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAdmin")]),s._v(" zhangbowang1998@gmail.com\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerName")]),s._v(" localhost\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" /")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" none\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Require")]),s._v(" all denied\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DocumentRoot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/htdocs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/htdocs"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" FollowSymLinks\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" All\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Require")]),s._v(" all granted\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" dir_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DirectoryIndex")]),s._v(" index.html index.php\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Files")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('".ht*"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Require")]),s._v(" all denied\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Files")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ErrorLog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/error.log"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogLevel")]),s._v(" info\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" log_config_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogFormat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%t")]),s._v(' \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%r")]),s._v('\\" %>s '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%b")]),s._v(' \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%{Referer}")]),s._v('i\\" \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%{User-Agent}")]),s._v('i\\""')]),s._v(" combined\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogFormat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%t")]),s._v(' \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%r")]),s._v('\\" %>s '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%b")]),s._v('"')]),s._v(" common\n  "),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" logio_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("LogFormat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%l")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%u")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%t")]),s._v(' \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%r")]),s._v('\\" %>s '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%b")]),s._v(' \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%{Referer}")]),s._v('i\\" \\"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%{User-Agent}")]),s._v('i\\" '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%I")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("%O")]),s._v('"')]),s._v(" combinedio\n  "),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("CustomLog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/access.log"')]),s._v(" common\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" alias_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ScriptAlias")]),s._v(" /cgi-bin/ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/cgi-bin/"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/cgi-bin"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AllowOverride")]),s._v(" None\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Options")]),s._v(" None\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Require")]),s._v(" all granted\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("Directory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" headers_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("RequestHeader")]),s._v(" unset Proxy early\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" mime_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("TypesConfig")]),s._v(" conf/mime.types\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AddHandler")]),s._v(" application/x-httpd-php .php\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AddType")]),s._v(" application/x-compress .Z\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AddType")]),s._v(" application/x-gzip .gz .tgz\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("AddType")]),s._v(" application/x-httpd-php .php .html\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" proxy_html_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("Include")]),s._v(" conf/extra/proxy-html.conf\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" ssl_module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLRandomSeed")]),s._v(" startup builtin\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("SSLRandomSeed")]),s._v(" connect builtin\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("IfModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAdmin")]),s._v(" zhangbowang1998@gmail.com\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerName")]),s._v(" nenu.com\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAlias")]),s._v(" innenu\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DocumentRoot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/htdocs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("VirtualHost")]),a("span",{pre:!0,attrs:{class:"token directive-block-parameter attr-value"}},[s._v(" *"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("443")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAdmin")]),s._v(" zhangbowang1998@gmail.com\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerName")]),s._v(" mrhope.com\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("ServerAlias")]),s._v(" mrhope\n  "),a("span",{pre:!0,attrs:{class:"token directive-inline property"}},[s._v("DocumentRoot")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SRVROOT}")]),s._v('/htdocs"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token directive-block tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("VirtualHost")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br"),a("span",{staticClass:"line-number"},[s._v("72")]),a("br"),a("span",{staticClass:"line-number"},[s._v("73")]),a("br"),a("span",{staticClass:"line-number"},[s._v("74")]),a("br"),a("span",{staticClass:"line-number"},[s._v("75")]),a("br"),a("span",{staticClass:"line-number"},[s._v("76")]),a("br"),a("span",{staticClass:"line-number"},[s._v("77")]),a("br"),a("span",{staticClass:"line-number"},[s._v("78")]),a("br"),a("span",{staticClass:"line-number"},[s._v("79")]),a("br"),a("span",{staticClass:"line-number"},[s._v("80")]),a("br"),a("span",{staticClass:"line-number"},[s._v("81")]),a("br"),a("span",{staticClass:"line-number"},[s._v("82")]),a("br"),a("span",{staticClass:"line-number"},[s._v("83")]),a("br"),a("span",{staticClass:"line-number"},[s._v("84")]),a("br"),a("span",{staticClass:"line-number"},[s._v("85")]),a("br"),a("span",{staticClass:"line-number"},[s._v("86")]),a("br"),a("span",{staticClass:"line-number"},[s._v("87")]),a("br"),a("span",{staticClass:"line-number"},[s._v("88")]),a("br"),a("span",{staticClass:"line-number"},[s._v("89")]),a("br"),a("span",{staticClass:"line-number"},[s._v("90")]),a("br"),a("span",{staticClass:"line-number"},[s._v("91")]),a("br"),a("span",{staticClass:"line-number"},[s._v("92")]),a("br"),a("span",{staticClass:"line-number"},[s._v("93")]),a("br"),a("span",{staticClass:"line-number"},[s._v("94")]),a("br"),a("span",{staticClass:"line-number"},[s._v("95")]),a("br"),a("span",{staticClass:"line-number"},[s._v("96")]),a("br"),a("span",{staticClass:"line-number"},[s._v("97")]),a("br"),a("span",{staticClass:"line-number"},[s._v("98")]),a("br"),a("span",{staticClass:"line-number"},[s._v("99")]),a("br"),a("span",{staticClass:"line-number"},[s._v("100")]),a("br"),a("span",{staticClass:"line-number"},[s._v("101")]),a("br"),a("span",{staticClass:"line-number"},[s._v("102")]),a("br"),a("span",{staticClass:"line-number"},[s._v("103")]),a("br"),a("span",{staticClass:"line-number"},[s._v("104")]),a("br"),a("span",{staticClass:"line-number"},[s._v("105")]),a("br"),a("span",{staticClass:"line-number"},[s._v("106")]),a("br"),a("span",{staticClass:"line-number"},[s._v("107")]),a("br"),a("span",{staticClass:"line-number"},[s._v("108")]),a("br"),a("span",{staticClass:"line-number"},[s._v("109")]),a("br"),a("span",{staticClass:"line-number"},[s._v("110")]),a("br")])]),a("ul",[a("li",[a("h3",{attrs:{id:"serverroot"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverroot"}},[s._v("#")]),s._v(" ServerRoot")]),s._v(" "),a("p",[s._v("指定服务器的根目录")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"listen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#listen"}},[s._v("#")]),s._v(" Listen")]),s._v(" "),a("p",[s._v("指定服务器监听的 IP 与 port")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"loadmodule"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loadmodule"}},[s._v("#")]),s._v(" LoadModule")]),s._v(" "),a("p",[s._v("加载指定的模块来使服务器调用")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"phpinidir"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#phpinidir"}},[s._v("#")]),s._v(" PHPIniDir")]),s._v(" "),a("p",[s._v("指定 PHP 目录")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"unixd-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unixd-module"}},[s._v("#")]),s._v(" unixd_module")]),s._v(" "),a("p",[s._v("分配用户权限")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"serveradmin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serveradmin"}},[s._v("#")]),s._v(" ServerAdmin")]),s._v(" "),a("p",[s._v("服务器管理员")])]),s._v(" "),a("li",[a("h3",{attrs:{id:"servername"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#servername"}},[s._v("#")]),s._v(" ServerName")]),s._v(" "),a("p",[s._v("服务器名称")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);