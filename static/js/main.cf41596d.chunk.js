(this["webpackJsonpivan-projects"]=this["webpackJsonpivan-projects"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){},351:function(e,t,c){"use strict";c.r(t);var a=c(3),n=(c(0),c(94)),i=c.n(n),r=(c(103),c(104),c(16)),s=c(39),o=c(28),d=[{id:"c",category:"MERN Stack",title:"Tienda de Garage",pointOfInterest:80,backgroundColor:"#814A0E"},{id:"f",category:"HBS",title:"Spotify Search",pointOfInterest:120,backgroundColdr:"#959684"},{id:"a",category:"Node JS",title:"Space Challenge",pointOfInterest:260,backgroundColor:"#5DBCD2"},{id:"g",category:"Ruby On Rails",title:"Desolate Castle",pointOfInterest:200,backgroundColor:"#8F986D"}];function l(e){var t=e.id;if("ivan-projects"===t)return null;var c=d.find((function(e){return e.id===t})),n=c.category,i=c.title;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.c.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.15}},transition:{duration:.2,delay:.15},style:{pointerEvents:"auto"},className:"overlay",children:Object(a.jsx)(o.b,{to:"/"})}),Object(a.jsx)("div",{className:"card-content-container open",children:Object(a.jsxs)(r.c.div,{className:"card-content",layoutId:"card-container-".concat(t),children:[Object(a.jsx)(r.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(t),children:Object(a.jsx)("img",{className:"card-image",src:"images/".concat(t,".jpg"),alt:""})}),Object(a.jsxs)(r.c.div,{className:"title-container",layoutId:"title-container-".concat(t),children:[Object(a.jsx)("span",{className:"category",children:n}),Object(a.jsx)("h2",{children:i})]}),Object(a.jsx)(r.c.div,{className:"content-container",animate:!0,children:Object(a.jsx)(s.LoremIpsum,{p:6,avgWordsPerSentence:6,avgSentencesPerParagraph:4})})]})})]})}var j=c(55);function b(e){var t=e.id,c=e.title,n=e.category,i=e.theme;return Object(a.jsxs)("li",{className:"card ".concat(i),children:[Object(a.jsx)("div",{className:"card-content-container",children:Object(a.jsxs)(r.c.div,{className:"card-content",layoutId:"card-container-".concat(t),children:[Object(a.jsx)(r.c.div,{className:"card-image-container",layoutId:"card-image-container-".concat(t),children:Object(a.jsx)("img",{className:"card-image",src:"images/".concat(t,".jpg"),alt:"no images found"})}),Object(a.jsxs)(r.c.div,{className:"title-container",layoutId:"title-container-".concat(t),children:[Object(a.jsx)("span",{className:"category",children:n}),Object(a.jsx)("h2",{children:c})]})]})}),Object(a.jsx)(o.b,{to:t,className:"card-open-link"})]})}function m(e){var t=e.selectedId;return Object(a.jsx)("ul",{className:"card-list",children:d.map((function(e){return Object(a.jsx)(b,Object(j.a)(Object(j.a)({},e),{},{isSelected:e.id===t}),e.id)}))})}var h=function(){var e=new Date,t=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate();return Object(a.jsxs)("header",{children:[Object(a.jsx)("span",{className:"date",children:t}),Object(a.jsx)("h1",{children:"Ivan's"}),Object(a.jsx)("div",{className:"avatar",children:Object(a.jsx)(s.Avatar,{})})]})},p=c(96),u=c(7);function O(e){var t=e.match.params.id;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(m,{selectedId:t}),Object(a.jsx)(r.a,{children:t&&Object(a.jsx)(l,{id:t},"item")})]})}var g={color:"#111",fontFamily:"Helvetica Neue",fontSize:" 50px",fontWeight:"bold",letterSpacing:"-1px",lineHeight:1},x={background:"linear-gradient(180deg, #f08, #d0e)"},v={width:"100vw",height:"35vh",padding:"0",margin:"0",display:"flex",justifyContent:"center",alignItems:"center",background:"linear-gradient(180deg, #f08, #d0e)"},y=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)("div",{style:v,children:Object(a.jsx)(p.Frame,{width:250,style:x,animate:{scale:[1,2,2,1,1],rotate:[0,0,270,270,0],borderRadius:["20%","20%","50%","50%","20%"]},children:Object(a.jsx)("p",{style:g,children:" Projects"})})}),Object(a.jsx)("br",{}),Object(a.jsxs)("div",{className:"projects",children:[Object(a.jsx)("p",{children:"Hi"}),Object(a.jsx)("p",{children:"My name is Ivan"}),Object(a.jsx)("p",{children:"I'm a Web Developer"}),Object(a.jsx)("p",{children:"Here you can see my projects"}),Object(a.jsx)("p",{children:"Contact me"}),Object(a.jsx)("p",{children:"\u2026and invite me a beer \ud83d\ude0e \ud83c\udf7a"})]}),Object(a.jsx)("div",{className:"container",children:Object(a.jsx)(r.b,{type:"crossfade",children:Object(a.jsx)(o.a,{children:Object(a.jsx)(u.a,{path:["/:id","/"],component:O})})})}),Object(a.jsx)("div",{className:"contact"}),Object(a.jsx)("p",{children:"Contact"})]})},f=c(97),N=c.n(f),I={particles:{number:{value:50,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#000000"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},k=function(){return Object(a.jsxs)("div",{className:"App",style:{position:"relative",overflow:"hidden"},children:[Object(a.jsx)("div",{style:{position:"absolute"},children:Object(a.jsx)(N.a,{height:"100vh",width:"100vw",params:I})}),Object(a.jsx)(y,{})]})};i.a.render(Object(a.jsx)(k,{}),document.getElementById("root"));t.default=k}},[[351,1,2]]]);
//# sourceMappingURL=main.cf41596d.chunk.js.map