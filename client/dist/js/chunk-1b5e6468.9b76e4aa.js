(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b5e6468"],{4911:function(t,e,o){},"88a9":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"notice-setting"},[o("el-row",{staticClass:"dashboard",attrs:{gutter:10}},[o("el-col",{attrs:{xs:24,sm:12,md:12,lg:4,xl:4}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{style:t.styles.dataItem,on:{click:function(e){t.MailDialogFormVisible=!0}}},[o("i",{staticClass:"iconfont icon-mail",style:t.styles.dataItemImg}),o("div",{style:t.styles.dataItemUnit},[o("div",{style:t.styles.unitAmount},[t._v("邮件")]),o("div",{style:t.styles.unitFooter},[t._v("状态："),o("span",{style:t.smtp_server.enabled?"color:#52c41a":"color:#f5222d"},[t._v(t._s(t.smtp_server.enabled?"开启":"关闭"))])])])])])],1),t._l(t.webhooks,function(e){return o("el-col",{attrs:{xs:24,sm:12,md:12,lg:4,xl:4}},[o("el-card",{attrs:{shadow:"hover"}},[o("i",{staticClass:"iconfont icon-trash",staticStyle:{float:"right",color:"#868898"},on:{click:function(o){return t.delWebHookSetting(e.webhook)}}}),o("div",{style:t.styles.dataItem,on:{click:function(o){t.WebHookDialogFormVisible=!0,t.webhook_setting=e}}},[e.webhook.indexOf("dingtalk")>-1?o("i",{staticClass:"iconfont icon-dingtalk",style:t.styles.dataItemImg}):t._e(),e.webhook.indexOf("weixin")>-1?o("i",{staticClass:"iconfont icon-wechat-fill",style:t.styles.dataItemImg}):t._e(),o("div",{style:t.styles.dataItemUnit},[e.webhook.indexOf("dingtalk")>-1?o("div",{style:t.styles.unitAmount},[t._v("钉钉")]):t._e(),e.webhook.indexOf("weixin")>-1?o("div",{style:t.styles.unitAmount},[t._v("企业微信")]):t._e(),o("div",{style:t.styles.unitFooter},[t._v(t._s(e.webhook.split("=")[1].slice(0,8)))]),o("div",{style:t.styles.unitFooter},[t._v("状态："),o("span",{style:e.enabled?"color:#52c41a":"color:#f5222d"},[t._v(t._s(e.enabled?"开启":"关闭")+"\n                        ")])])])])])],1)}),o("el-col",{attrs:{xs:24,sm:12,md:12,lg:4,xl:4}},[o("el-card",{attrs:{shadow:"hover"}},[o("div",{style:t.styles.dataItem,on:{click:function(e){t.WebHookDialogFormVisible=!0,t.webhook_setting={}}}},[o("i",{staticClass:"iconfont icon-plus",style:t.styles.dataItemImg}),o("div",{style:t.styles.dataItemUnit},[o("div",{style:t.styles.unitAmountSmall},[t._v("添加钉钉/微信告警")]),o("div",{style:t.styles.unitFooter},[t._v("oapi.dingtalk.com qyapi.weixin.qq.com")])])])])],1)],2),o("el-dialog",{attrs:{title:"SMTP Server",visible:t.MailDialogFormVisible,width:t.mobileClient?"80%":"50%"},on:{"update:visible":function(e){t.MailDialogFormVisible=e}},model:{value:t.MailDialogFormVisible,callback:function(e){t.MailDialogFormVisible=e},expression:"MailDialogFormVisible"}},[o("el-form",{attrs:{model:t.smtp_server}},[o("el-form-item",{attrs:{label:"服务器地址"}},[o("el-input",{attrs:{"auto-complete":"on"},model:{value:t.smtp_server.host,callback:function(e){t.$set(t.smtp_server,"host",e)},expression:"smtp_server.host"}})],1),o("el-form-item",{attrs:{label:"服务器端口"}},[o("el-input-number",{attrs:{size:"small","controls-position":"right",max:65535,min:1,step:1},model:{value:t.smtp_server.port,callback:function(e){t.$set(t.smtp_server,"port",e)},expression:"smtp_server.port"}})],1),o("el-form-item",{attrs:{label:"发件人"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.smtp_server.from,callback:function(e){t.$set(t.smtp_server,"from",e)},expression:"smtp_server.from"}})],1),o("el-form-item",{attrs:{label:"TLS加密"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.smtp_server.tls,callback:function(e){t.$set(t.smtp_server,"tls",e)},expression:"smtp_server.tls"}})],1),o("el-form-item",{attrs:{label:"用户名"}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:t.smtp_server.username,callback:function(e){t.$set(t.smtp_server,"username",e)},expression:"smtp_server.username"}})],1),o("el-form-item",{attrs:{label:"密码"}},[o("el-input",{attrs:{"auto-complete":"off",type:"password"},model:{value:t.smtp_server.password,callback:function(e){t.$set(t.smtp_server,"password",e)},expression:"smtp_server.password"}})],1),o("el-form-item",{attrs:{label:"监控平台地址"}},[o("el-input",{attrs:{placeholder:t.origin},model:{value:t.smtp_server.domain,callback:function(e){t.$set(t.smtp_server,"domain",e)},expression:"smtp_server.domain"}})],1),o("el-form-item",{attrs:{label:"开启通知"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.smtp_server.enabled,callback:function(e){t.$set(t.smtp_server,"enabled",e)},expression:"smtp_server.enabled"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"mini",round:""},on:{click:function(e){t.MailDialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:t.setSMTPServer}},[t._v("确 定")])],1)],1),o("el-dialog",{attrs:{visible:t.WebHookDialogFormVisible,width:t.mobileClient?"80%":"50%"},on:{"update:visible":function(e){t.WebHookDialogFormVisible=e}},model:{value:t.WebHookDialogFormVisible,callback:function(e){t.WebHookDialogFormVisible=e},expression:"WebHookDialogFormVisible"}},[o("div",{style:t.styles.unitAmountSmall,attrs:{slot:"title"},slot:"title"},[t._v("\n            webhook 配置\n            目前支持 钉钉/企业微信\n        ")]),o("el-form",{attrs:{model:t.webhook_setting}},[o("el-form-item",{attrs:{label:"webhook"}},[o("el-input",{attrs:{placeholder:"https://oapi.dingtalk.com/robot/send?access_token=xxx 或 https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=xxx"},model:{value:t.webhook_setting.webhook,callback:function(e){t.$set(t.webhook_setting,"webhook",e)},expression:"webhook_setting.webhook"}})],1),o("el-form-item",{attrs:{label:"监控平台地址"}},[o("el-input",{attrs:{placeholder:t.origin},model:{value:t.webhook_setting.domain,callback:function(e){t.$set(t.webhook_setting,"domain",e)},expression:"webhook_setting.domain"}})],1),o("el-form-item",{attrs:{label:"开启通知"}},[o("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.webhook_setting.enabled,callback:function(e){t.$set(t.webhook_setting,"enabled",e)},expression:"webhook_setting.enabled"}})],1),o("el-form-item",{attrs:{label:"测试"}},[o("el-button",{attrs:{size:"mini",round:"",disabled:!t.webhook_setting.hasOwnProperty("webhook")},on:{click:t.testWebHookSetting}},[t._v("发送一条测试消息\n                ")])],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{size:"mini",round:""},on:{click:function(e){t.WebHookDialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{size:"mini",type:"primary",round:""},on:{click:t.setWebHookSetting}},[t._v("确 定")])],1)],1),t.smtp_server.enabled?o("div",[o("el-input",{staticClass:"input-new-mail",attrs:{size:"mini",placeholder:"邮箱格式：username@domain.com"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleInputNoticeConfirm(e)}},model:{value:t.inputValue,callback:function(e){t.inputValue=e},expression:"inputValue"}}),o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.handleInputNoticeConfirm}},[t._v("添加")]),o("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"","tooltip-effect":"dark",data:t.mails}},[o("el-table-column",{attrs:{prop:"mail",label:"邮箱"}}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",type:"danger",round:""},on:{click:function(o){return t.handleDeleteNotice(e.row)}}},[t._v("删除\n                    ")])]}}],null,!1,1341244012)})],1)],1):t._e()],1)},i=[],a=(o("0857"),{dataItem:{display:"flex",flexBasis:"50%",alignItems:"center"},dataItemImg:{color:"#1890ff",width:"30px",marginTop:"auto",marginBottom:"auto",fontSize:"50px",marginRight:"30px"},dataItemUnit:{height:"50px",display:"flex",flexBasis:"50%",flexDirection:"column",justifyContent:"space-between"},unitTitle:{color:"#666",fontSize:"12px"},unitAmount:{color:"#333",fontSize:"24px"},unitAmountSmall:{color:"#999",fontSize:"14px"},unitFooter:{color:"#999",fontSize:"12px"}}),n={data:function(){return{styles:a,origin:window.location.origin,inputValue:"",popoverVisible:!1,MailDialogFormVisible:!1,WebHookDialogFormVisible:!1,mails:[],formLabelWidth:"200",smtp_server:{},webhook_setting:{domain:window.location.origin},webhooks:[]}},computed:{mobileClient:function(){return document.documentElement.clientWidth<document.documentElement.clientHeight}},methods:{handleInputNoticeConfirm:function(){var t=this;this.inputValue&&this.axios.post(this.api.settingNotice,{mail:this.inputValue}).then(function(e){t.$message.success(e.data.msg),t.mails=e.data.result}).catch(function(e){t.$message.error(e.toString())}),this.inputValue=""},handleDeleteNotice:function(t){var e=this;this.axios.delete(this.api.settingNotice,{params:{mail:t.mail}}).then(function(t){e.$message.success(t.data.msg),e.mails=t.data.result}).catch(function(t){e.$message.error(t.toString())})},fetchNoticeMails:function(){var t=this;this.axios.get(this.api.settingNotice).then(function(e){t.mails=e.data.result}).catch(function(e){t.$message.error(e.toString())})},getSMTPServer:function(){var t=this;this.axios.get(this.api.settingMail).then(function(e){e.data.result&&(t.smtp_server=e.data.result)}).catch(function(e){t.$message.error(e.toString())})},getWebHookSetting:function(){var t=this;this.axios.get(this.api.settingWebHook).then(function(e){t.webhooks=e.data.result}).catch(function(e){t.$message.error(e.toString())})},delWebHookSetting:function(t){var e=this;this.axios.delete(this.api.settingWebHook,{params:{webhook:t}}).then(function(t){404===t.data.status?e.$message.error(t.data.msg):(e.$message.success(t.data.msg),e.getWebHookSetting())}).catch(function(t){e.$message.error(t.toString())})},setWebHookSetting:function(){var t=this;this.axios.post(this.api.settingWebHook,this.webhook_setting).then(function(e){400===e.data.status?t.$message.error(e.data.msg):(t.$message.success(e.data.msg),t.WebHookDialogFormVisible=!1,t.getWebHookSetting())}).catch(function(e){t.$message.error(e.toString())})},testWebHookSetting:function(){var t=this;this.webhook_setting.test=!0,this.axios.post(this.api.settingWebHook,this.webhook_setting).then(function(e){201===e.data.status?t.$message.success(e.data.msg):t.$message.error(e.data.msg),t.webhook_setting.test=!1}).catch(function(e){t.$message.error(e.toString()),t.webhook_setting.test=!1})},setSMTPServer:function(){var t=this;this.axios.post(this.api.settingMail,this.smtp_server).then(function(e){t.$message.success(e.data.msg),t.MailDialogFormVisible=!1}).catch(function(e){t.$message.error(e.toString())})}},mounted:function(){this.getWebHookSetting(),this.getSMTPServer(),this.fetchNoticeMails()}},l=n,r=(o("df92"),o("c5f8"),o("17cc")),c=Object(r["a"])(l,s,i,!1,null,"0e42e278",null);e["default"]=c.exports},c5f8:function(t,e,o){"use strict";var s=o("f705"),i=o.n(s);i.a},df92:function(t,e,o){"use strict";var s=o("4911"),i=o.n(s);i.a},f705:function(t,e,o){}}]);