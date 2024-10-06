import{m as S}from"./vue-zoomable-uAJrrTSY.js";import{f as Z,g as u,_ as w,o as s,c as r,d as t,h as a,v as o,i as d,j as P,a as V,w as y,k,t as z,b as D,F as U}from"./app-C74g5s3T.js";const F=Z({__name:"ReactivityDemo",setup(N,{expose:e}){e();const m=u(.5),l=u({x:0,y:0}),c=u("html"),b=u("#zoomable-content");function i(n){}let v=u(!0),p=u(!0),g=u(!0),f=u(!0),E=u(!0),h=u(!0),q=u(!1),C=u(!0);const x={zoom:m,pan:l,slotContentType:c,selector:b,showEvent:i,get zoomEnabled(){return v},set zoomEnabled(n){v=n},get panEnabled(){return p},set panEnabled(n){p=n},get dblClickEnabled(){return g},set dblClickEnabled(n){g=n},get touchEnabled(){return f},set touchEnabled(n){f=n},get mouseWheelZoomEnabled(){return E},set mouseWheelZoomEnabled(n){E=n},get visible(){return h},set visible(n){h=n},get documentFlow(){return q},set documentFlow(n){q=n},get enableControlButton(){return C},set enableControlButton(n){C=n},get VueZoomable(){return S}};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}}),B={class:"controls"},I={key:0},j={key:0,class:"mysvg"},M={key:1},A={key:2};function W(N,e,m,l,c,b){return s(),r(U,null,[t("form",B,[t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[0]||(e[0]=i=>l.zoomEnabled=i)},null,512),[[o,l.zoomEnabled]]),e[16]||(e[16]=t("label",null,"zoomEnabled",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[1]||(e[1]=i=>l.dblClickEnabled=i)},null,512),[[o,l.dblClickEnabled]]),e[17]||(e[17]=t("label",null,"dblClickEnabled",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[2]||(e[2]=i=>l.touchEnabled=i)},null,512),[[o,l.touchEnabled]]),e[18]||(e[18]=t("label",null,"touchEnabled",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[3]||(e[3]=i=>l.mouseWheelZoomEnabled=i)},null,512),[[o,l.mouseWheelZoomEnabled]]),e[19]||(e[19]=t("label",null,"mouseWheelZoomEnabled",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[4]||(e[4]=i=>l.visible=i)},null,512),[[o,l.visible]]),e[20]||(e[20]=t("label",null,"Slot Content",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[5]||(e[5]=i=>l.documentFlow=i)},null,512),[[o,l.documentFlow]]),e[21]||(e[21]=t("label",null,"DocumentFlow",-1))]),t("div",null,[a(t("input",{type:"checkbox","onUpdate:modelValue":e[6]||(e[6]=i=>l.enableControlButton=i)},null,512),[[o,l.enableControlButton]]),e[22]||(e[22]=t("label",null,"Control Button Enabled",-1))]),t("div",null,[e[23]||(e[23]=t("label",null,"Pan X",-1)),a(t("input",{type:"number","onUpdate:modelValue":e[7]||(e[7]=i=>l.pan.x=i)},null,512),[[d,l.pan.x]])]),t("div",null,[e[24]||(e[24]=t("label",null,"Pan Y",-1)),a(t("input",{type:"number","onUpdate:modelValue":e[8]||(e[8]=i=>l.pan.y=i)},null,512),[[d,l.pan.y]])]),t("div",null,[e[25]||(e[25]=t("label",null,"Zoom",-1)),a(t("input",{type:"number","onUpdate:modelValue":e[9]||(e[9]=i=>l.zoom=i)},null,512),[[d,l.zoom]])]),t("div",null,[e[27]||(e[27]=t("label",null,"Slot Content Type",-1)),a(t("select",{"onUpdate:modelValue":e[10]||(e[10]=i=>l.slotContentType=i)},e[26]||(e[26]=[t("option",{value:"html"},"HTML",-1),t("option",{value:"svg"},"SVG",-1)]),512),[[P,l.slotContentType]])]),t("div",null,[e[28]||(e[28]=t("label",null,"Selector",-1)),a(t("input",{type:"text","onUpdate:modelValue":e[11]||(e[11]=i=>l.selector=i)},null,512),[[d,l.selector]])])]),l.slotContentType==="svg"?(s(),r("div",I,[V(l.VueZoomable,{style:{width:"500px",height:"500px",border:"1px solid black"},selector:l.selector,zoomEnabled:l.zoomEnabled,panEnabled:l.panEnabled,initialPanX:100,initialPanY:120,initialZoom:1.5,svgChild:!0,dblClickEnabled:l.dblClickEnabled,wheelEnabled:l.mouseWheelZoomEnabled,touchEnabled:l.touchEnabled,minZoom:.3,maxZoom:2,dblClickZoomStep:.4,wheelZoomStep:.01,pan:l.pan,"onUpdate:pan":e[12]||(e[12]=i=>l.pan=i),zoom:l.zoom,"onUpdate:zoom":e[13]||(e[13]=i=>l.zoom=i),enableControlButton:l.enableControlButton,onZoom:l.showEvent,onPanned:l.showEvent},{default:y(()=>[l.visible?(s(),r("svg",j,e[29]||(e[29]=[t("g",{id:"zoomable-content"},[t("circle",{x:"10",y:"10",r:"50"})],-1)]))):k("",!0)]),_:1},8,["selector","zoomEnabled","panEnabled","dblClickEnabled","wheelEnabled","touchEnabled","pan","zoom","enableControlButton"])])):(s(),r("div",M,[V(l.VueZoomable,{style:{width:"500px",height:"500px",border:"1px solid black"},selector:l.selector,zoomEnabled:l.zoomEnabled,panEnabled:l.panEnabled,initialPanX:100,initialPanY:120,initialZoom:1.5,dblClickEnabled:l.dblClickEnabled,wheelEnabled:l.mouseWheelZoomEnabled,touchEnabled:l.touchEnabled,minZoom:.3,maxZoom:2,dblClickZoomStep:.4,wheelZoomStep:.01,pan:l.pan,"onUpdate:pan":e[14]||(e[14]=i=>l.pan=i),zoom:l.zoom,"onUpdate:zoom":e[15]||(e[15]=i=>l.zoom=i),enableControlButton:l.enableControlButton,onZoom:l.showEvent,onPanned:l.showEvent},{default:y(()=>e[30]||(e[30]=[t("div",{id:"zoomable-content"},[t("div",null,[t("div"),t("div")]),t("div",null,[t("div"),t("div")])],-1)])),_:1},8,["selector","zoomEnabled","panEnabled","dblClickEnabled","wheelEnabled","touchEnabled","pan","zoom","enableControlButton"])])),t("div",null," zoom: "+z(l.zoom),1),t("div",null," pan: "+z(l.pan),1),l.documentFlow?(s(),r("section",A,e[31]||(e[31]=[D("<h1>Chapter 1</h1><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices mi, nec cursus justo. Ut efficitur, dui nec consectetur consequat, lorem elit tincidunt metus, vel ultrices elit velit ac lectus. Proin in eros non nisi venenatis bibendum. Integer nec neque sit amet velit varius tempus. Integer viverra ligula nec nunc egestas, non ullamcorper mauris venenatis. Nullam sit amet pharetra odio, eget ultrices enim. Aenean non nisl auctor, vulputate quam sit amet, tincidunt lectus. Duis vitae elit sed justo tincidunt sodales id ac est. Vivamus eu orci dapibus, hendrerit nulla in, vehicula libero. </p><p> Sed pulvinar bibendum metus, quis lacinia urna varius non. Duis eget velit quam. Vestibulum consectetur vehicula facilisis. Nunc egestas et enim ut facilisis. In volutpat augue eget risus faucibus malesuada. Ut et quam elit. Fusce quis tincidunt elit. Nullam gravida justo ut feugiat mollis. </p><h2>Section 1.1</h2><p> Vivamus maximus scelerisque ligula, vel fringilla odio consectetur nec. Duis eleifend, erat quis maximus ultrices, elit arcu congue nibh, nec elementum eros purus nec nulla. Fusce aliquet lacus id ligula rhoncus, in sodales lectus fringilla. Maecenas et purus et erat pulvinar interdum vel sit amet quam. Vestibulum facilisis turpis nec metus congue posuere. </p><h2>Section 1.2</h2><p> Nulla vehicula lectus felis, in feugiat massa dignissim id. Vivamus eget magna ac eros viverra mattis ac sit amet nulla. Pellentesque venenatis risus ut ex suscipit, in auctor nulla consequat. Proin rhoncus semper risus, a dapibus turpis luctus a. Nullam nec tincidunt sapien. Vivamus gravida ultricies lacus, in eleifend nunc cursus ut. In hac habitasse platea dictumst. Duis ut purus nec sapien convallis pellentesque vel eu erat. </p><h1>Chapter 2</h1><p> Phasellus blandit velit at eros efficitur, in mollis dui feugiat. Fusce euismod mauris nec varius volutpat. Quisque dapibus augue et ex ultricies, ac vestibulum dolor facilisis. Sed mattis est sed ipsum feugiat, ut blandit nunc tristique. Aliquam et volutpat nulla, vel ullamcorper purus. Proin condimentum lacus ac congue varius. Maecenas a cursus elit. Nulla facilisi. Integer eu quam eget arcu laoreet vehicula. </p><h2>Section 2.1</h2><p> Nunc rhoncus, risus nec euismod porttitor, urna nisi accumsan turpis, vitae euismod turpis arcu eget velit. Nulla a elit vel enim accumsan egestas. Nulla facilisi. Duis nec magna risus. Etiam euismod hendrerit dolor. Integer vel est vitae purus auctor vehicula. Vivamus feugiat felis id tortor hendrerit blandit. Nullam nec tortor eu neque tincidunt mollis. Aenean tincidunt sit amet lacus eu suscipit. Fusce vitae nulla ultrices, convallis odio non, accumsan justo. </p><h2>Section 2.2</h2><p> Aenean in nibh eget velit aliquet iaculis. Donec et purus ut lectus hendrerit efficitur. Maecenas vulputate justo nec enim ullamcorper luctus. Integer varius nisi eu massa iaculis, vel auctor erat blandit. Nulla facilisi. Praesent eget bibendum lectus. Donec dignissim velit id nisl feugiat, a vestibulum felis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p><h1>Chapter 1</h1><p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non ultrices mi, nec cursus justo. Ut efficitur, dui nec consectetur consequat, lorem elit tincidunt metus, vel ultrices elit velit ac lectus. Proin in eros non nisi venenatis bibendum. Integer nec neque sit amet velit varius tempus. Integer viverra ligula nec nunc egestas, non ullamcorper mauris venenatis. Nullam sit amet pharetra odio, eget ultrices enim. Aenean non nisl auctor, vulputate quam sit amet, tincidunt lectus. Duis vitae elit sed justo tincidunt sodales id ac est. Vivamus eu orci dapibus, hendrerit nulla in, vehicula libero. </p><p> Sed pulvinar bibendum metus, quis lacinia urna varius non. Duis eget velit quam. Vestibulum consectetur vehicula facilisis. Nunc egestas et enim ut facilisis. In volutpat augue eget risus faucibus malesuada. Ut et quam elit. Fusce quis tincidunt elit. Nullam gravida justo ut feugiat mollis. </p><h2>Section 1.1</h2><p> Vivamus maximus scelerisque ligula, vel fringilla odio consectetur nec. Duis eleifend, erat quis maximus ultrices, elit arcu congue nibh, nec elementum eros purus nec nulla. Fusce aliquet lacus id ligula rhoncus, in sodales lectus fringilla. Maecenas et purus et erat pulvinar interdum vel sit amet quam. Vestibulum facilisis turpis nec metus congue posuere. </p><h2>Section 1.2</h2><p> Nulla vehicula lectus felis, in feugiat massa dignissim id. Vivamus eget magna ac eros viverra mattis ac sit amet nulla. Pellentesque venenatis risus ut ex suscipit, in auctor nulla consequat. Proin rhoncus semper risus, a dapibus turpis luctus a. Nullam nec tincidunt sapien. Vivamus gravida ultricies lacus, in eleifend nunc cursus ut. In hac habitasse platea dictumst. Duis ut purus nec sapien convallis pellentesque vel eu erat. </p><h1>Chapter 2</h1><p> Phasellus blandit velit at eros efficitur, in mollis dui feugiat. Fusce euismod mauris nec varius volutpat. Quisque dapibus augue et ex ultricies, ac vestibulum dolor facilisis. Sed mattis est sed ipsum feugiat, ut blandit nunc tristique. Aliquam et volutpat nulla, vel ullamcorper purus. Proin condimentum lacus ac congue varius. Maecenas a cursus elit. Nulla facilisi. Integer eu quam eget arcu laoreet vehicula. </p><h2>Section 2.1</h2><p> Nunc rhoncus, risus nec euismod porttitor, urna nisi accumsan turpis, vitae euismod turpis arcu eget velit. Nulla a elit vel enim accumsan egestas. Nulla facilisi. Duis nec magna risus. Etiam euismod hendrerit dolor. Integer vel est vitae purus auctor vehicula. Vivamus feugiat felis id tortor hendrerit blandit. Nullam nec tortor eu neque tincidunt mollis. Aenean tincidunt sit amet lacus eu suscipit. Fusce vitae nulla ultrices, convallis odio non, accumsan justo. </p><h2>Section 2.2</h2><p> Aenean in nibh eget velit aliquet iaculis. Donec et purus ut lectus hendrerit efficitur. Maecenas vulputate justo nec enim ullamcorper luctus. Integer varius nisi eu massa iaculis, vel auctor erat blandit. Nulla facilisi. Praesent eget bibendum lectus. Donec dignissim velit id nisl feugiat, a vestibulum felis consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>",26)]))):k("",!0)],64)}const R=w(F,[["render",W],["__file","ReactivityDemo.vue"]]);export{R as default};