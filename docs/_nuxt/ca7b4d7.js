(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{663:function(t,e,r){var content=r(666);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("7a71dfcc",content,!0,{sourceMap:!1})},664:function(t,e,r){"use strict";r.r(e);var c=r(1),o=r(90);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var l={props:["tags"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["linkTo"]))},d=(r(665),r(36)),f=r(39),v=r.n(f),m=r(678),O=r(651),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.tags?r("div",t._l(t.tags,(function(e){return r("v-chip",{key:e.sys.id,staticClass:"ma-1",attrs:{to:t.linkTo("tags",e),color:e.fields.color,label:"",small:"",link:"","text-color":"white"}},[r("div",{staticClass:"storoke"},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-label ")]),t._v("\n      "+t._s(e.fields.name)+"\n    ")],1)])})),1):t._e()}),[],!1,null,"7e11dc48",null);e.default=component.exports;v()(component,{VChip:m.a,VIcon:O.a})},665:function(t,e,r){"use strict";r(663)},666:function(t,e,r){(e=r(15)(!1)).push([t.i,".tags[data-v-7e11dc48]{margin-right:10px}.storoke[data-v-7e11dc48]{color:#fff}",""]),t.exports=e},670:function(t,e,r){var content=r(680);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(16).default)("72cd877c",content,!0,{sourceMap:!1})},679:function(t,e,r){"use strict";r(670)},680:function(t,e,r){(e=r(15)(!1)).push([t.i,".wrap[data-v-598ca70c]{position:relative}.icatch-title[data-v-598ca70c]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0;padding:20px;width:80%;text-align:center}.date[data-v-598ca70c],.icatch-title[data-v-598ca70c]{background-color:hsla(0,0%,100%,.8);border-radius:5px}.date[data-v-598ca70c]{padding:5px 10px}.tags[data-v-598ca70c]{margin:0 0 0 auto}.title-box[data-v-598ca70c]{position:absolute;left:10px;bottom:10px;background-color:#fff}.head-img[data-v-598ca70c]{-o-object-fit:cover;object-fit:cover;width:100%;max-height:300px}.content[data-v-598ca70c]{padding:20px 50px}li[data-v-598ca70c]{color:red}",""]),t.exports=e},692:function(t,e,r){"use strict";r.r(e);r(133),r(45),r(67);var c=r(11),o=r(1),n=(r(228),r(90));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={components:{Tag:r(664).default},props:[],computed:d(d({},Object(n.b)(["setEyeCatch","linkTo"])),{},{addbreads:function(){return[{icon:"mdi-folder-outline",text:this.category.fields.name,to:this.linkTo("categories",this.category)}]}}),transition:"slide-right",asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,o,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.params,c=t.payload,o=t.store,n=t.error,e.t0=c,e.t0){e.next=6;break}return e.next=5,o.state.posts.find((function(t){return t.fields.slug===r.slug}));case 5:e.t0=e.sent;case 6:if(!(l=e.t0)){e.next=11;break}return e.abrupt("return",{currentPost:l,category:l.fields.category});case 11:return e.abrupt("return",n({statusCode:400}));case 12:case"end":return e.stop()}}),e)})))()}},v=(r(679),r(36)),m=r(39),O=r.n(m),h=r(657),y=r(696),j=r(651),w=r(658),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentPost?r("div",[r("breadcrumbs",{attrs:{"add-items":t.addbreads}}),t._v(" "),r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"wrap"},[r("img",{staticClass:"head-img",attrs:{src:t.setEyeCatch(t.currentPost).url,alt:t.setEyeCatch(t.currentPost).title}}),t._v(" "),r("div",{staticClass:"icatch-title"},[r("h1",[t._v(t._s(t.currentPost.fields.title))])]),t._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{"no-gutters":""}},[r("v-col",{attrs:{cols:12,xl:4,lg:4,md:12,sm:12}},[r("div",{staticClass:"date"},[r("v-icon",{attrs:{left:""}},[t._v(" mdi-calendar-clock ")]),t._v("\n                "+t._s(t.$format_date(t.currentPost.fields.publishDate))+"\n              ")],1)]),t._v(" "),r("v-col",{attrs:{cols:12,xl:8,lg:8,md:12,sm:12}},[r("div",{staticClass:"tags"},[r("Tag",{attrs:{tags:t.currentPost.fields.tags}})],1)])],1)],1),t._v(" "),r("div",{staticClass:"categories"})],1),t._v(" "),r("div",{staticClass:"sns_share"}),t._v(" "),r("div",{staticClass:"content"},[r("div",{domProps:{innerHTML:t._s(t.$md.render(t.currentPost.fields.body))}})])])],1),t._v(" "),r("v-row",[r("v-col")],1)],1):r("div",[r("h1",[t._v("Page NotFound")])])}),[],!1,null,"598ca70c",null);e.default=component.exports;O()(component,{Breadcrumbs:r(180).default,Tag:r(664).default}),O()(component,{VCol:h.a,VContainer:y.a,VIcon:j.a,VRow:w.a})}}]);