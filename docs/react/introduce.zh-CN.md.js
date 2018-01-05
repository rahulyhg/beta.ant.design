webpackJsonp([105],{1797:function(t,n){t.exports={content:["article",{},["h2","\u7279\u6027"],["ul",["li",["p","\u63d0\u70bc\u81ea\u4f01\u4e1a\u7ea7\u4e2d\u540e\u53f0\u4ea7\u54c1\u7684\u4ea4\u4e92\u8bed\u8a00\u548c\u89c6\u89c9\u98ce\u683c\u3002"]],["li",["p","\u5f00\u7bb1\u5373\u7528\u7684\u9ad8\u8d28\u91cf React \u7ec4\u4ef6\u3002"]],["li",["p","\u4f7f\u7528 TypeScript \u6784\u5efa\uff0c\u63d0\u4f9b\u5b8c\u6574\u7684\u7c7b\u578b\u5b9a\u4e49\u6587\u4ef6\u3002"]],["li",["p","\u57fa\u4e8e npm + webpack + babel \u7684\u5de5\u4f5c\u6d41\uff0c\u652f\u6301 ES2015 \u548c TypeScript\u3002"]]],["h2","\u652f\u6301\u73af\u5883"],["ul",["li",["p","\u73b0\u4ee3\u6d4f\u89c8\u5668\u548c IE9 \u53ca\u4ee5\u4e0a\uff08\u9700\u8981 ",["a",{title:null,href:"https://ant.design/docs/react/getting-started-cn#\u517c\u5bb9\u6027"},"polyfills"],"\uff09\u3002"]],["li",["p","\u652f\u6301\u670d\u52a1\u7aef\u6e32\u67d3\u3002"]],["li",["p",["a",{title:null,href:"http://electron.atom.io/"},"Electron"]]]],["h2","\u7248\u672c"],["ul",["li",["p","\u7a33\u5b9a\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://img.shields.io/npm/v/antd.svg?style=flat-square",alt:"npm package"}]]]],["li",["p","\u9884\u89c8\u7248\uff1a",["a",{title:null,href:"https://www.npmjs.org/package/antd"},["img",{title:null,src:"https://img.shields.io/npm/v/antd/next.svg?style=flat-square",alt:"npm (next)"}]]]]],["p","\u4f60\u53ef\u4ee5\u8ba2\u9605\uff1a",["a",{title:null,href:"https://github.com/ant-design/ant-design/releases.atom"},"https://github.com/ant-design/ant-design/releases.atom"]," \u6765\u83b7\u5f97\u7a33\u5b9a\u7248\u53d1\u5e03\u7684\u901a\u77e5\u3002"],["h2","\u5b89\u88c5"],["h3","\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5"],["p",["strong","\u6211\u4eec\u63a8\u8350\u4f7f\u7528 npm \u6216 yarn \u7684\u65b9\u5f0f\u8fdb\u884c\u5f00\u53d1"],"\uff0c\u4e0d\u4ec5\u53ef\u5728\u5f00\u53d1\u73af\u5883\u8f7b\u677e\u8c03\u8bd5\uff0c\u4e5f\u53ef\u653e\u5fc3\u5730\u5728\u751f\u4ea7\u73af\u5883\u6253\u5305\u90e8\u7f72\u4f7f\u7528\uff0c\u4eab\u53d7\u6574\u4e2a\u751f\u6001\u5708\u548c\u5de5\u5177\u94fe\u5e26\u6765\u7684\u8bf8\u591a\u597d\u5904\u3002"],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> <span class="token function">install</span> antd --save'},["code","$ npm install antd --save"]],["pre",{lang:"bash",highlighted:"$ yarn add antd"},["code","$ yarn add antd"]],["p","\u5982\u679c\u4f60\u7684\u7f51\u7edc\u73af\u5883\u4e0d\u4f73\uff0c\u63a8\u8350\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/cnpm/cnpm"},"cnpm"],"\u3002"],["h3","\u6d4f\u89c8\u5668\u5f15\u5165"],["p","\u5728\u6d4f\u89c8\u5668\u4e2d\u4f7f\u7528 ",["code","script"]," \u548c ",["code","link"]," \u6807\u7b7e\u76f4\u63a5\u5f15\u5165\u6587\u4ef6\uff0c\u5e76\u4f7f\u7528\u5168\u5c40\u53d8\u91cf ",["code","antd"],"\u3002"],["p","\u6211\u4eec\u5728 npm \u53d1\u5e03\u5305\u5185\u7684 ",["code","antd/dist"]," \u76ee\u5f55\u4e0b\u63d0\u4f9b\u4e86 ",["code","antd.js"]," ",["code","antd.css"]," \u4ee5\u53ca ",["code","antd.min.js"]," ",["code","antd.min.css"],"\u3002\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",["a",{title:null,href:"https://cdnjs.com/libraries/antd"},["img",{title:null,src:"https://img.shields.io/cdnjs/v/antd.svg?style=flat-square",alt:"CDNJS"}]],"\n \u6216 ",["a",{title:null,href:"https://unpkg.com/antd/dist/"},"UNPKG"]," \u8fdb\u884c\u4e0b\u8f7d\u3002"],["blockquote",["p",["strong","\u5f3a\u70c8\u4e0d\u63a8\u8350\u4f7f\u7528\u5df2\u6784\u5efa\u6587\u4ef6"],"\uff0c\u8fd9\u6837\u65e0\u6cd5\u6309\u9700\u52a0\u8f7d\uff0c\u800c\u4e14\u96be\u4ee5\u83b7\u5f97\u5e95\u5c42\u4f9d\u8d56\u6a21\u5757\u7684 bug \u5feb\u901f\u4fee\u590d\u652f\u6301\u3002"],["p","\u6ce8\u610f\uff1a3.0 \u4e4b\u540e\u5f15\u5165 antd.js \u524d\u4f60\u9700\u8981\u81ea\u884c\u5f15\u5165 ",["a",{title:null,href:"http://momentjs.com/"},"moment"],"\u3002"]],["h2","\u793a\u4f8b"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { DatePicker } from 'antd';\nReactDOM.render(<DatePicker />, mountNode);"]],["p","\u5f15\u5165\u6837\u5f0f\uff1a"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token string">\'antd/dist/antd.css\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// or \'antd/dist/antd.less\'</span>'},["code","import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'"]],["h3","\u6309\u9700\u52a0\u8f7d"],["p","\u4e0b\u9762\u4e24\u79cd\u65b9\u5f0f\u90fd\u53ef\u4ee5\u53ea\u52a0\u8f7d\u7528\u5230\u7684\u7ec4\u4ef6\u3002"],["ul",["li",["p","\u4f7f\u7528 ",["a",{title:null,href:"https://github.com/ant-design/babel-plugin-import"},"babel-plugin-import"],"\uff08\u63a8\u8350\uff09\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// .babelrc or babel-loader option</span>\n<span class="token punctuation">{</span>\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd"</span><span class="token punctuation">,</span> <span class="token string">"libraryDirectory"</span><span class="token punctuation">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token string">"css"</span> <span class="token punctuation">}</span><span class="token punctuation">]</span> <span class="token comment" spellcheck="true">// `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'// .babelrc or babel-loader option\n{\n  "plugins": [\n    ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` \u4f1a\u52a0\u8f7d less \u6587\u4ef6\n  ]\n}']],["blockquote",["p","\u6ce8\u610f\uff1awebpack 1 \u65e0\u9700\u8bbe\u7f6e ",["code","libraryDirectory"],"\u3002"]],["p"," \u7136\u540e\u53ea\u9700\u4ece antd \u5f15\u5165\u6a21\u5757\u5373\u53ef\uff0c\u65e0\u9700\u5355\u72ec\u5f15\u5165\u6837\u5f0f\u3002\u7b49\u540c\u4e8e\u4e0b\u9762\u624b\u52a8\u5f15\u5165\u7684\u65b9\u5f0f\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token comment" spellcheck="true">// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> DatePicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>'},["code","// babel-plugin-import \u4f1a\u5e2e\u52a9\u4f60\u52a0\u8f7d JS \u548c CSS\nimport { DatePicker } from 'antd';"]]],["li",["p","\u624b\u52a8\u5f15\u5165"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">\'antd/lib/date-picker\'</span><span class="token punctuation">;</span>  <span class="token comment" spellcheck="true">// \u52a0\u8f7d JS</span>\n<span class="token keyword">import</span> <span class="token string">\'antd/lib/date-picker/style/css\'</span><span class="token punctuation">;</span>        <span class="token comment" spellcheck="true">// \u52a0\u8f7d CSS</span>\n<span class="token comment" spellcheck="true">// import \'antd/lib/date-picker/style\';         // \u52a0\u8f7d LESS</span>'},["code","import DatePicker from 'antd/lib/date-picker';  // \u52a0\u8f7d JS\nimport 'antd/lib/date-picker/style/css';        // \u52a0\u8f7d CSS\n// import 'antd/lib/date-picker/style';         // \u52a0\u8f7d LESS"]]]],["h2","\u94fe\u63a5"],["ul",["li",["p",["a",{title:null,href:"http://ant.design/"},"\u9996\u9875"]]],["li",["p",["a",{title:null,href:"/docs/react/introduce"},"\u7ec4\u4ef6\u5e93"]]],["li",["p",["a",{title:null,href:"http://pro.ant.design/"},"Ant Design Pro"]]],["li",["p",["a",{title:null,href:"/changelog"},"\u66f4\u65b0\u65e5\u5fd7"]]],["li",["p",["a",{title:null,href:"http://scaffold.ant.design"},"\u811a\u624b\u67b6\u5e02\u573a"]]],["li",["p",["a",{title:null,href:"http://react-component.github.io/"},"React \u5e95\u5c42\u57fa\u7840\u7ec4\u4ef6"]]],["li",["p",["a",{title:null,href:"http://mobile.ant.design"},"\u79fb\u52a8\u7aef\u7ec4\u4ef6"]]],["li",["p",["a",{title:null,href:"https://motion.ant.design"},"\u52a8\u6548"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/Ant-Design-%E8%AE%BE%E8%AE%A1%E5%9F%BA%E7%A1%80%E7%AE%80%E7%89%88"},"\u8bbe\u8ba1\u89c4\u8303\u901f\u67e5\u624b\u518c"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/Development"},"\u5f00\u53d1\u8005\u8bf4\u660e"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/%E8%BD%AE%E5%80%BC%E8%A7%84%E5%88%99%E5%92%8C%E7%89%88%E6%9C%AC%E5%8F%91%E5%B8%83%E6%B5%81%E7%A8%8B"},"\u7248\u672c\u53d1\u5e03\u89c4\u5219"]]],["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/wiki/FAQ"},"\u5e38\u89c1\u95ee\u9898"]]],["li",["p",["a",{title:null,href:"https://u.ant.design/codesandbox-repro"},"CodeSandbox \u6a21\u677f"]," for bug reports"]],["li",["p",["a",{title:null,href:"https://github.com/websemantics/awesome-ant-design"},"Awesome Ant Design"]]],["li",["p",["a",{title:null,href:"/docs/react/customize-theme"},"\u5b9a\u5236\u4e3b\u9898"]]]],["h2","\u8c01\u5728\u4f7f\u7528"],["ul",["li",["p",["a",{title:null,href:"http://www.antfin.com/"},"\u8682\u8681\u91d1\u670d"]]],["li",["p",["a",{title:null,href:"http://www.alibaba.com/"},"\u963f\u91cc\u5df4\u5df4"]]],["li",["p",["a",{title:null,href:"http://www.tencent.com"},"\u817e\u8baf"]]],["li",["p",["a",{title:null,href:"http://www.baidu.com"},"\u767e\u5ea6"]]],["li",["p",["a",{title:null,href:"http://www.koubei.com/"},"\u53e3\u7891"]]],["li",["p",["a",{title:null,href:"http://www.meituan.com"},"\u7f8e\u56e2"]]],["li",["p",["a",{title:null,href:"http://www.xiaojukeji.com/"},"\u6ef4\u6ef4"]]],["li",["p",["a",{title:null,href:"https://www.ele.me/"},"\u997f\u4e86\u4e48"]]]],["blockquote",["p","\u5982\u679c\u4f60\u7684\u516c\u53f8\u548c\u4ea7\u54c1\u4f7f\u7528\u4e86 Ant Design\uff0c\u6b22\u8fce\u5230 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/issues/477"},"\u8fd9\u91cc"]," \u7559\u8a00\u3002"]],["h2","\u5982\u4f55\u8d21\u732e"],["p","\u5728\u4efb\u4f55\u5f62\u5f0f\u7684\u53c2\u4e0e\u524d\uff0c\u8bf7\u5148\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/.github/CONTRIBUTING.md"},"\u8d21\u732e\u8005\u6587\u6863"],"\u3002\u5982\u679c\u4f60\u5e0c\u671b\u53c2\u4e0e\u8d21\u732e\uff0c\u6b22\u8fce ",["a",{title:null,href:"https://github.com/ant-design/ant-design/pulls"},"Pull Request"],"\uff0c\u6216\u7ed9\u6211\u4eec ",["a",{title:null,href:"http://new-issue.ant.design/"},"\u62a5\u544a Bug"],"\u3002"],["blockquote",["p","\u5f3a\u70c8\u63a8\u8350\u9605\u8bfb ",["a",{title:null,href:"https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way"},"\u300a\u63d0\u95ee\u7684\u667a\u6167\u300b"],"\u3001",["a",{title:null,href:"https://github.com/seajs/seajs/issues/545"},"\u300a\u5982\u4f55\u5411\u5f00\u6e90\u793e\u533a\u63d0\u95ee\u9898\u300b"]," \u548c ",["a",{title:null,href:"http://www.chiark.greenend.org.uk/%7Esgtatham/bugs-cn.html"},"\u300a\u5982\u4f55\u6709\u6548\u5730\u62a5\u544a Bug\u300b"],"\u3001",["a",{title:null,href:"https://zhuanlan.zhihu.com/p/25795393"},"\u300a\u5982\u4f55\u5411\u5f00\u6e90\u9879\u76ee\u63d0\u4ea4\u65e0\u6cd5\u89e3\u7b54\u7684\u95ee\u9898\u300b"],"\uff0c\u66f4\u597d\u7684\u95ee\u9898\u66f4\u5bb9\u6613\u83b7\u5f97\u5e2e\u52a9\u3002"]],["h2","\u793e\u533a\u4e92\u52a9"],["p","\u5982\u679c\u60a8\u5728\u4f7f\u7528\u7684\u8fc7\u7a0b\u4e2d\u78b0\u5230\u95ee\u9898\uff0c\u53ef\u4ee5\u901a\u8fc7\u4e0b\u9762\u51e0\u4e2a\u9014\u5f84\u5bfb\u6c42\u5e2e\u52a9\uff0c\u540c\u65f6\u6211\u4eec\u4e5f\u9f13\u52b1\u8d44\u6df1\u7528\u6237\u901a\u8fc7\u4e0b\u9762\u7684\u9014\u5f84\u7ed9\u65b0\u4eba\u63d0\u4f9b\u5e2e\u52a9\u3002"],["p","\u901a\u8fc7 Stack Overflow \u6216\u8005 Segment Fault \u63d0\u95ee\u65f6\uff0c\u5efa\u8bae\u52a0\u4e0a ",["code","antd"]," \u6807\u7b7e\u3002"],["ol",["li",["p",["a",{title:null,href:"http://stackoverflow.com/questions/tagged/antd"},["img",{alt:"Stack Overflow",src:"https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.svg?v=2bb144720a66",width:"140"}]],"\uff08English\uff09"]],["li",["p",["a",{title:null,href:"https://segmentfault.com/t/antd"},["img",{alt:"Segment Fault",src:"http://static.segmentfault.com/global/img/logo.svg",width:"100"}]],"\uff08\u4e2d\u6587\uff09"]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"},["img",{title:null,src:"https://badges.gitter.im/ant-design/ant-design-english.svg",alt:"Gitter"}]]," (English)"]],["li",["p",["a",{title:null,href:"https://gitter.im/ant-design/ant-design?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"},["img",{title:null,src:"https://badges.gitter.im/Join%20Chat.svg",alt:"Join the chat at https://gitter.im/ant-design/ant-design"}]],"\uff08\u4e2d\u6587\uff09"]]]],meta:{order:0,title:"Ant Design of React",filename:"docs/react/introduce.zh-CN.md"},description:["section",["p","\u8fd9\u91cc\u662f Ant Design \u7684 React \u5b9e\u73b0\uff0c\u5f00\u53d1\u548c\u670d\u52a1\u4e8e\u4f01\u4e1a\u7ea7\u540e\u53f0\u4ea7\u54c1\u3002"],["div",{class:"pic-plus"},["img",{width:"150",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"}],["span","+"],["img",{width:"160",src:"https://t.alipayobjects.com/images/rmsweb/T16xRhXkxbXXXXXXXX.svg"}]],["style","\n.pic-plus > * {\n  display: inline-block !important;\n  vertical-align: middle;\n}\n.pic-plus span {\n  font-size: 30px;\n  color: #aaa;\n  margin: 0 20px;\n}\n"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u7279\u6027",title:"\u7279\u6027"},"\u7279\u6027"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u652f\u6301\u73af\u5883",title:"\u652f\u6301\u73af\u5883"},"\u652f\u6301\u73af\u5883"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u7248\u672c",title:"\u7248\u672c"},"\u7248\u672c"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b89\u88c5",title:"\u5b89\u88c5"},"\u5b89\u88c5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793a\u4f8b",title:"\u793a\u4f8b"},"\u793a\u4f8b"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u94fe\u63a5",title:"\u94fe\u63a5"},"\u94fe\u63a5"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u8c01\u5728\u4f7f\u7528",title:"\u8c01\u5728\u4f7f\u7528"},"\u8c01\u5728\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5982\u4f55\u8d21\u732e",title:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u793e\u533a\u4e92\u52a9",title:"\u793e\u533a\u4e92\u52a9"},"\u793e\u533a\u4e92\u52a9"]]]}}});