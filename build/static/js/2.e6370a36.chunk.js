webpackJsonp([2],{317:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(64),i=t(447),o=t(460),a=function(e){return{headLineList:e.headLineList}},l=function(e){return{getHeadLineList:function(){return e(o.a())}}};n.default=Object(r.b)(a,l)(i.a)},447:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t(5),l=t.n(a),A=t(114),c=t.n(A),s=t(448),j=t(452),d=t(455),m=t(458),p=(t.n(m),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),P=function(e){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.shouldComponentUpdate=c.a.shouldComponentUpdate.bind(t),t}return o(n,e),p(n,[{key:"componentDidMount",value:function(){0===this.props.headLineList.length&&this.props.getHeadLineList()}},{key:"render",value:function(){var e=this.props.headLineList;return l.a.createElement("div",{className:"head-line-list"},l.a.createElement(s.a,null),e.length>0?e.map(function(e,n){return e.good?l.a.createElement(j.a,{key:n,href:e.url,pic:e.headPic,provider:e.providerName,category:e.categoryName,title:e.title}):l.a.createElement(d.a,{key:n,pic:e.headPic,href:e.url,provider:e.providerName,category:e.categoryName,title:e.title})}):null)}}]),n}(a.Component);n.a=P},448:function(e,n,t){"use strict";var r=t(5),i=t.n(r),o=t(63),a=t(449),l=(t.n(a),function(e){var n=e.history;return i.a.createElement("div",{className:"head-line-header"},i.a.createElement("span",{onClick:function(){return n.push("/")}},i.a.createElement("i",{className:"icon-chevron-left"})),i.a.createElement("i",{className:"head-line-logo"}))});n.a=Object(o.e)(l)},449:function(e,n,t){var r=t(450);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(314)(r,i);r.locals&&(e.exports=r.locals)},450:function(e,n,t){n=e.exports=t(313)(!0),n.push([e.i,".head-line-header{display:-ms-flexbox;display:flex;position:fixed;top:0;z-index:99999;-ms-flex-align:center;align-items:center;width:100%;height:1.333333rem;border-bottom:1px solid #eee;background-color:#fff}.hairlines .head-line-header{border-bottom:.5px solid #eee}.head-line-header span{position:relative;top:.04rem;margin-left:.613333rem;font-size:.533333rem;color:#f63}.head-line-header .head-line-logo{display:inline-block;width:2.32rem;height:.533333rem;margin-left:2.933333rem;background-image:url("+t(451)+");background-repeat:no-repeat;background-size:cover}","",{version:3,sources:["C:/Users/lf/Desktop/workspaces/dianping/react-demo-dianp/src/components/HeadLine/Header/style.css"],names:[],mappings:"AAAA,kBACE,oBAAqB,AACrB,aAAc,AACd,eAAgB,AAChB,MAAO,AACP,cAAe,AACf,sBAAuB,AACvB,mBAAoB,AACpB,WAAY,AACZ,mBAAoB,AACpB,6BAA8B,AAC9B,qBAAuB,CAGxB,AAED,6BACE,6BAAgC,CACjC,AAED,uBACE,kBAAmB,AACnB,WAAa,AACb,uBAAyB,AACzB,qBAAuB,AACvB,UAAyB,CAC1B,AAED,kCACE,qBAAsB,AACtB,cAAe,AACf,kBAAoB,AACpB,wBAAyB,AAEzB,+CAA2D,AAC3D,4BAA6B,AAC7B,qBAAuB,CACxB",file:"style.css",sourcesContent:[".head-line-header {\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  top: 0;\n  z-index: 99999;\n  -ms-flex-align: center;\n  align-items: center;\n  width: 100%;\n  height: 1.333333rem;\n  border-bottom: 1px solid #eee;\n  background-color: #fff;\n  /*rgb(233, 32, 61);*/\n  /*color: orange;*/\n}\n\n.hairlines .head-line-header {\n  border-bottom: 0.5px solid #eee;\n}\n\n.head-line-header span {\n  position: relative;\n  top: 0.04rem;\n  margin-left: 0.613333rem;\n  font-size: 0.533333rem;\n  color: rgb(255, 102, 51);\n}\n\n.head-line-header .head-line-logo {\n  display: inline-block;\n  width: 2.32rem;\n  height: 0.533333rem;\n  margin-left: 2.933333rem;\n  /*margin: 0 auto;*/\n  background-image: url(../../../assets/images/titlebar.png);\n  background-repeat: no-repeat;\n  background-size: cover;\n}"],sourceRoot:""}])},451:function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAoCAMAAABQOzEZAAADbGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjhEQkI4NkZFNUFCMDExRTZBNzE3RDE2NTc3RjdEQjcwIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkFEMUY5RDNCNjg1QjExRTZBQzFGRDQyM0RBNUJENkJGIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkFEMUY5RDNBNjg1QjExRTZBQzFGRDQyM0RBNUJENkJGIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDlFRDNCMDc2MzU2MTFFNjlFMjJERURBQzU2QTE1RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDlFRDNCMDg2MzU2MTFFNjlFMjJERURBQzU2QTE1RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/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"},452:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t(5),l=t.n(a),A=t(114),c=t.n(A),s=t(453),j=(t.n(s),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),d=function(e){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.shouldComponentUpdate=c.a.shouldComponentUpdate.bind(t),t}return o(n,e),j(n,[{key:"render",value:function(){var e=this.props,n=e.pic,t=e.provider,r=e.category,i=e.title,o=e.href;return l.a.createElement("a",{className:"head-line-item",href:o},l.a.createElement("img",{src:n,alt:i}),l.a.createElement("h1",{className:"title"},i),l.a.createElement("div",{className:"tag"},l.a.createElement("span",{className:"category"},r),l.a.createElement("span",{className:"provider"},t)))}}]),n}(a.Component);n.a=d},453:function(e,n,t){var r=t(454);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(314)(r,i);r.locals&&(e.exports=r.locals)},454:function(e,n,t){n=e.exports=t(313)(!0),n.push([e.i,".head-line-item{display:block;width:100%;padding:.4rem .4rem .2rem;margin-bottom:.266667rem;background-color:#fff}.head-line-item img{display:block;width:9.2rem;height:3.306667rem;-o-object-fit:cover;object-fit:cover}.head-line-item .title{margin:.266667rem 0 .133333rem;width:9.2rem;font-size:.426667rem;color:#000}.head-line-item .tag{display:-ms-flexbox;display:flex;height:.64rem;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.head-line-item .category{display:inline-block;padding:0 .08rem;border:1px solid #d2a156;border-radius:.08rem;color:#d2a156;font-size:.293333rem}.hairlines .head-line-item .category{border:.5px solid #d2a156}.head-line-item .provider{color:#777;font-size:.32rem}","",{version:3,sources:["C:/Users/lf/Desktop/workspaces/dianping/react-demo-dianp/src/components/HeadLine/Item/style.css"],names:[],mappings:"AAAA,gBACE,cAAe,AACf,WAAY,AACZ,0BAA8B,AAC9B,yBAA2B,AAC3B,qBAAuB,CACxB,AAED,oBACE,cAAe,AACf,aAAc,AACd,mBAAoB,AACpB,oBAAqB,AACrB,gBAAkB,CACnB,AAED,uBACE,+BAAkC,AAClC,aAAc,AACd,qBAAuB,AACvB,UAAY,CACb,AAED,qBACE,oBAAqB,AACrB,aAAc,AACd,cAAgB,AAChB,sBAAuB,AACvB,mBAAoB,AACpB,sBAAuB,AACvB,6BAA+B,CAChC,AAED,0BACE,qBAAsB,AACtB,iBAAmB,AACnB,yBAA0B,AAC1B,qBAAuB,AACvB,cAAe,AACf,oBAAuB,CACxB,AAED,qCACE,yBAA4B,CAC7B,AAED,0BACE,WAAY,AACZ,gBAAmB,CACpB",file:"style.css",sourcesContent:[".head-line-item {\n  display: block;\n  width: 100%;\n  padding: 0.4rem 0.4rem 0.2rem;\n  margin-bottom: 0.266667rem;\n  background-color: #fff;\n}\n\n.head-line-item img {\n  display: block;\n  width: 9.2rem;\n  height: 3.306667rem;\n  -o-object-fit: cover;\n  object-fit: cover;\n}\n\n.head-line-item .title {\n  margin: 0.266667rem 0 0.133333rem;\n  width: 9.2rem;\n  font-size: 0.426667rem;\n  color: #000;\n}\n\n.head-line-item .tag {\n  display: -ms-flexbox;\n  display: flex;\n  height: 0.64rem;\n  -ms-flex-align: center;\n  align-items: center;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n}\n\n.head-line-item .category {\n  display: inline-block;\n  padding: 0 0.08rem;\n  border: 1px solid #d2a156;\n  border-radius: 0.08rem;\n  color: #d2a156;\n  font-size: 0.293333rem;\n}\n\n.hairlines .head-line-item .category {\n  border: 0.5px solid #d2a156;\n}\n\n.head-line-item .provider {\n  color: #777;\n  font-size: 0.32rem;\n}"],sourceRoot:""}])},455:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function i(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}function o(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}var a=t(5),l=t.n(a),A=t(114),c=t.n(A),s=t(456),j=(t.n(s),function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}()),d=function(e){function n(e){r(this,n);var t=i(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.shouldComponentUpdate=c.a.shouldComponentUpdate.bind(t),t}return o(n,e),j(n,[{key:"render",value:function(){var e=this.props,n=e.pic,t=e.provider,r=e.category,i=e.title,o=e.href;return l.a.createElement("a",{className:"head-line-item1",href:o},l.a.createElement("div",{className:"left"},l.a.createElement("div",null,l.a.createElement("h1",{className:"title"},i),l.a.createElement("span",{className:"provider"},t)),l.a.createElement("p",{className:"category"},r)),l.a.createElement("img",{src:n,alt:i}))}}]),n}(a.Component);n.a=d},456:function(e,n,t){var r=t(457);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(314)(r,i);r.locals&&(e.exports=r.locals)},457:function(e,n,t){n=e.exports=t(313)(!0),n.push([e.i,".head-line-item1{padding:.4rem;background-color:#fff;margin-bottom:.266667rem;color:#000}.head-line-item1,.head-line-item1 .left{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.head-line-item1 .left{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;width:5.946667rem}.head-line-item1 .title{position:relative;font-size:.426667rem;line-height:.533333rem;max-height:1.6rem}.head-line-item1 img{width:2.8rem;height:2.8rem}.head-line-item1 .category{display:inline-block;padding:0 .08rem;border:1px solid #d2a156;border-radius:.08rem;color:#d2a156;font-size:.293333rem}.hairlines .head-line-item1 .category{border:.5px solid #d2a156}","",{version:3,sources:["C:/Users/lf/Desktop/workspaces/dianping/react-demo-dianp/src/components/HeadLine/Item1/style.css"],names:[],mappings:"AAAA,iBAKE,cAAgB,AAChB,sBAAuB,AACvB,yBAA2B,AAC3B,UAAY,CACb,AAED,wCAVE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,6BAA+B,CAiBhC,AAVD,uBAGE,0BAA2B,AAC3B,sBAAuB,AAGvB,qBAAsB,AACtB,uBAAwB,AACxB,iBAAmB,CACpB,AAED,wBACE,kBAAmB,AACnB,qBAAuB,AACvB,uBAAyB,AACzB,iBAAmB,CAMpB,AAkBD,qBACE,aAAc,AACd,aAAe,CAChB,AAED,2BACE,qBAAsB,AACtB,iBAAmB,AACnB,yBAA0B,AAC1B,qBAAuB,AACvB,cAAe,AACf,oBAAuB,CACxB,AAED,sCACE,yBAA4B,CAC7B",file:"style.css",sourcesContent:['.head-line-item1 {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  padding: 0.4rem;\n  background-color: #fff;\n  margin-bottom: 0.266667rem;\n  color: #000;\n}\n\n.head-line-item1 .left {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -ms-flex-pack: justify;\n  justify-content: space-between;\n  -ms-flex-align: start;\n  align-items: flex-start;\n  width: 5.946667rem;\n}\n\n.head-line-item1 .title {\n  position: relative;\n  font-size: 0.426667rem;\n  line-height: 0.533333rem;\n  max-height: 1.6rem;\n  /*display: flex;*/\n  /*flex-direction: column;*/\n  /*-webkit-line-clamp: 3;*/\n  /*overflow: hidden;*/\n  /*text-overflow: ellipsis;*/\n}\n\n/*.head-line-item1 .title::after {*/\n\n/*content: "...";*/\n\n/*position: absolute;*/\n\n/*bottom: 0;*/\n\n/*right: 0;*/\n\n/*padding-left: 40px;*/\n\n/*background: linear-gradient(to right, transparent, #fff 55%);*/\n\n/*}*/\n\n.head-line-item1 img {\n  width: 2.8rem;\n  height: 2.8rem;\n}\n\n.head-line-item1 .category {\n  display: inline-block;\n  padding: 0 0.08rem;\n  border: 1px solid #d2a156;\n  border-radius: 0.08rem;\n  color: #d2a156;\n  font-size: 0.293333rem;\n}\n\n.hairlines .head-line-item1 .category {\n  border: 0.5px solid #d2a156;\n}'],sourceRoot:""}])},458:function(e,n,t){var r=t(459);"string"===typeof r&&(r=[[e.i,r,""]]);var i={};i.transform=void 0;t(314)(r,i);r.locals&&(e.exports=r.locals)},459:function(e,n,t){n=e.exports=t(313)(!0),n.push([e.i,".head-line-list{margin-top:1.333333rem}","",{version:3,sources:["C:/Users/lf/Desktop/workspaces/dianping/react-demo-dianp/src/components/HeadLine/style.css"],names:[],mappings:"AAAA,gBACE,sBAAwB,CACzB",file:"style.css",sourcesContent:[".head-line-list {\n  margin-top: 1.333333rem;\n}"],sourceRoot:""}])},460:function(e,n,t){"use strict";function r(e){return function(){var n=e.apply(this,arguments);return new Promise(function(e,t){function r(i,o){try{var a=n[i](o),l=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(l).then(function(e){r("next",e)},function(e){r("throw",e)});e(l)}return r("next")})}}t.d(n,"a",function(){return m});var i=t(65),o=t.n(i),a=t(121),l=t(117),A=t.n(l),c=t(118),s=this,j=function(){return{type:a.b}},d=function(e){return{type:a.a,list:e}},m=function(){return function(){var e=r(o.a.mark(function e(n){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n(j()),e.prev=1,e.next=4,A()(c.a+"/assets/json/headline.json");case 4:t=e.sent,r=t.data.headlines,n(d(r)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}},e,s,[[1,9]])}));return function(n){return e.apply(this,arguments)}}()}}});
//# sourceMappingURL=2.e6370a36.chunk.js.map