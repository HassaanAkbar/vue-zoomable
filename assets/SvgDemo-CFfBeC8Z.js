import{m as s}from"./vue-zoomable-uAJrrTSY.js";import{f as p,g as i,_ as d,o as c,c as _,a as f,w as u,d as n,t as m}from"./app-C74g5s3T.js";const g=p({__name:"SvgDemo",setup(l,{expose:e}){e();const r=i(1),o=i({x:100,y:100}),t={zoom:r,pan:o,get VueZoomable(){return s}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function v(l,e,r,o,t,x){return c(),_("div",null,[f(o.VueZoomable,{style:{width:"500px",height:"500px",border:"1px solid black"},selector:"#container1",initialPanX:100,initialPanY:120,initialZoom:1.5,svgChild:!0,minZoom:.3,maxZoom:2,dblClickZoomStep:.4,wheelZoomStep:.01,pan:o.pan,"onUpdate:pan":e[0]||(e[0]=a=>o.pan=a),zoom:o.zoom,"onUpdate:zoom":e[1]||(e[1]=a=>o.zoom=a)},{default:u(()=>e[2]||(e[2]=[n("svg",{class:"mysvg"},[n("g",{id:"container1"},[n("circle",{x:"10",y:"10",r:"50"})])],-1)])),_:1},8,["pan","zoom"]),n("div",null," zoom: "+m(o.zoom),1),n("div",null," pan: "+m(o.pan),1)])}const b=d(g,[["render",v],["__file","SvgDemo.vue"]]);export{b as default};
