(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[25],{715:function(e,t,a){},765:function(e,t,a){"use strict";a.r(t);var r=a(67),o=a(68),n=a(70),i=a(69),s=a(1),l=a.n(s),p=a(14),c=a(42),d=(a(708),a(709),a(715),a(710)),m=a.n(d),u=(a(738),a(100)),f=function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var o;return Object(r.a)(this,a),(o=t.call(this,e)).componentDidMount=function(){o.editor=m.a.init({container:"#gjs",fromElement:!0,width:"auto",noticeOnUnload:!1,storageManager:{id:"gjs-",type:"local",autosave:!1,autoload:!1,stepsBeforeSave:0,storeComponents:!0,storeStyles:!1,storeHtml:!1,storeCss:!1},assetManager:{upload:"".concat("http://masters-lps.com:3008/api/","storage/upload"),uploadFile:function(e){var t=e.dataTransfer?e.dataTransfer.files:e.target.files;console.log(t);var a=new FormData;a.append("file",t[0]),u.a.post("".concat("http://masters-lps.com:3008/api/","storage/upload"),a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){console.log(e),o.editor.AssetManager.add(e.data)})).catch((function(e){console.error(e)}))}},panels:{defaults:[{id:"panel-devices",el:".panel__devices",buttons:[{id:"device-desktop",command:"set-device-desktop",active:!0,togglable:!1},{id:"device-mobile",command:"set-device-mobile",togglable:!1}]}]},mediaCondition:"min-width",deviceManager:{devices:[{name:"Mobile",width:"320",widthMedia:""},{name:"Desktop",width:"",widthMedia:"1024"}]},plugins:["grapesjs-parser-postcss","gjs-preset-newsletter","gjs-preset-webpage"],pluginsOpts:{"grapesjs-lory-slider":{sliderBlock:{category:"Extra"}},"grapesjs-tabs":{tabsBlock:{category:"Extra"}},"grapesjs-typed":{block:{category:"Extra",content:{type:"typed","type-speed":40,strings:["Text row one","Text row two","Text row three"]}}},"gjs-preset-webpage":{modalImportTitle:"Import Template",modalImportLabel:'<div style="margin-bottom: 10px; font-size: 13px;">Paste here your HTML/CSS and click Import</div>',modalImportContent:function(e){return e.getHtml()+"<style>"+e.getCss()+"</style>"},filestackOpts:null,aviaryOpts:!1,blocksBasicOpts:{flexGrid:1},customStyleManager:[{name:"General",buildProps:["float","display","position","top","right","left","bottom"],properties:[{name:"Alignment",property:"float",type:"radio",defaults:"none",list:[{value:"none",className:"fa fa-times"},{value:"left",className:"fa fa-align-left"},{value:"right",className:"fa fa-align-right"}]},{property:"position",type:"select"}]},{name:"Dimension",open:!1,buildProps:["width","flex-width","height","max-width","min-height","margin","padding"],properties:[{id:"flex-width",type:"integer",name:"Width",units:["px","%"],property:"flex-basis",toRequire:1},{property:"margin",properties:[{name:"Top",property:"margin-top"},{name:"Right",property:"margin-right"},{name:"Bottom",property:"margin-bottom"},{name:"Left",property:"margin-left"}]},{property:"padding",properties:[{name:"Top",property:"padding-top"},{name:"Right",property:"padding-right"},{name:"Bottom",property:"padding-bottom"},{name:"Left",property:"padding-left"}]}]},{name:"Typography",open:!1,buildProps:["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","text-decoration","text-shadow"],properties:[{name:"Font",property:"font-family"},{name:"Weight",property:"font-weight"},{name:"Font color",property:"color"},{property:"text-align",type:"radio",defaults:"left",list:[{value:"left",name:"Left",className:"fa fa-align-left"},{value:"center",name:"Center",className:"fa fa-align-center"},{value:"right",name:"Right",className:"fa fa-align-right"},{value:"justify",name:"Justify",className:"fa fa-align-justify"}]},{property:"text-decoration",type:"radio",defaults:"none",list:[{value:"none",name:"None",className:"fa fa-times"},{value:"underline",name:"underline",className:"fa fa-underline"},{value:"line-through",name:"Line-through",className:"fa fa-strikethrough"}]},{property:"text-shadow",properties:[{name:"X position",property:"text-shadow-h"},{name:"Y position",property:"text-shadow-v"},{name:"Blur",property:"text-shadow-blur"},{name:"Color",property:"text-shadow-color"}]}]},{name:"Decorations",open:!1,buildProps:["opacity","border-radius","border","box-shadow","background-bg"],properties:[{type:"slider",property:"opacity",defaults:1,step:.01,max:1,min:0},{property:"border-radius",properties:[{name:"Top",property:"border-top-left-radius"},{name:"Right",property:"border-top-right-radius"},{name:"Bottom",property:"border-bottom-left-radius"},{name:"Left",property:"border-bottom-right-radius"}]},{property:"box-shadow",properties:[{name:"X position",property:"box-shadow-h"},{name:"Y position",property:"box-shadow-v"},{name:"Blur",property:"box-shadow-blur"},{name:"Spread",property:"box-shadow-spread"},{name:"Color",property:"box-shadow-color"},{name:"Shadow type",property:"box-shadow-type"}]},{id:"background-bg",property:"background",type:"bg"}]},{name:"Extra",open:!1,buildProps:["transition","perspective","transform"],properties:[{property:"transition",properties:[{name:"Property",property:"transition-property"},{name:"Duration",property:"transition-duration"},{name:"Easing",property:"transition-timing-function"}]},{property:"transform",properties:[{name:"Rotate X",property:"transform-rotate-x"},{name:"Rotate Y",property:"transform-rotate-y"},{name:"Rotate Z",property:"transform-rotate-z"},{name:"Scale X",property:"transform-scale-x"},{name:"Scale Y",property:"transform-scale-y"},{name:"Scale Z",property:"transform-scale-z"}]}]},{name:"Flex",open:!1,properties:[{name:"Flex Container",property:"display",type:"select",defaults:"block",list:[{value:"block",name:"Disable"},{value:"flex",name:"Enable"}]},{name:"Flex Parent",property:"label-parent-flex",type:"integer"},{name:"Direction",property:"flex-direction",type:"radio",defaults:"row",list:[{value:"row",name:"Row",className:"icons-flex icon-dir-row",title:"Row"},{value:"row-reverse",name:"Row reverse",className:"icons-flex icon-dir-row-rev",title:"Row reverse"},{value:"column",name:"Column",title:"Column",className:"icons-flex icon-dir-col"},{value:"column-reverse",name:"Column reverse",title:"Column reverse",className:"icons-flex icon-dir-col-rev"}]},{name:"Justify",property:"justify-content",type:"radio",defaults:"flex-start",list:[{value:"flex-start",className:"icons-flex icon-just-start",title:"Start"},{value:"flex-end",title:"End",className:"icons-flex icon-just-end"},{value:"space-between",title:"Space between",className:"icons-flex icon-just-sp-bet"},{value:"space-around",title:"Space around",className:"icons-flex icon-just-sp-ar"},{value:"center",title:"Center",className:"icons-flex icon-just-sp-cent"}]},{name:"Align",property:"align-items",type:"radio",defaults:"center",list:[{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]},{name:"Flex Children",property:"label-parent-flex",type:"integer"},{name:"Order",property:"order",type:"integer",defaults:0,min:0},{name:"Flex",property:"flex",type:"composite",properties:[{name:"Grow",property:"flex-grow",type:"integer",defaults:0,min:0},{name:"Shrink",property:"flex-shrink",type:"integer",defaults:0,min:0},{name:"Basis",property:"flex-basis",type:"integer",units:["px","%",""],unit:"",defaults:"auto"}]},{name:"Align",property:"align-self",type:"radio",defaults:"auto",list:[{value:"auto",name:"Auto"},{value:"flex-start",title:"Start",className:"icons-flex icon-al-start"},{value:"flex-end",title:"End",className:"icons-flex icon-al-end"},{value:"stretch",title:"Stretch",className:"icons-flex icon-al-str"},{value:"center",title:"Center",className:"icons-flex icon-al-center"}]}]}]}}}),o.editor.Commands.add("set-device-desktop",{run:function(e){return e.setDevice("Desktop")}}),o.editor.Commands.add("set-device-mobile",{run:function(e){return e.setDevice("Mobile")}}),o.editor.Commands.add("set-device-tablet",{run:function(e){return e.setDevice("Tablet")}}),o.editor.on("asset:upload:response",(function(e){console.log(e),o.editor.AssetManager.add(e)})),o.pageId&&u.a.get("admin/page/pages?id=".concat(o.pageId)).then((function(e){console.log(o.editor),o.setState({page:e.data[0],title:e.data[0].title}),o.editor.setComponents(e.data[0].html),o.editor.setStyle(e.data[0].css)}))},o.state={title:""},console.log(e),o.pageId=e.match.params._id,console.log(o.pageId),o}return Object(o.a)(a,[{key:"onSave",value:function(){var e=this,t=this.state,a=t.title,r=t.page;u.a.post("admin/page/add-page",{id:r?r.id:null,html:this.editor.runCommand("gjs-get-inlined-html"),css:this.editor.getCss(),title:a}).then((function(t){console.log(t),e.props.history.push("/dashboard")})).catch((function(e){return console.error(e)}))}},{key:"onTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.vb,null,l.a.createElement(p.u,null,l.a.createElement(p.n,null,"Add New Page"),l.a.createElement(p.k,null,l.a.createElement("input",{type:"text",value:this.state.title,className:"input",placeholder:"Title ",onChange:function(t){return e.onTitleChange(t)}}),l.a.createElement(p.f,{type:"submit",size:"sm",color:"primary",onClick:function(){e.onSave()}},l.a.createElement(c.a,{name:"cil-scrubber"})," Save"),l.a.createElement("div",{id:"gjs"})))))}}]),a}(s.Component);t.default=f}}]);
//# sourceMappingURL=25.265be318.chunk.js.map