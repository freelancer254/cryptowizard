(function(t){function e(e){for(var r,s,c=e[0],o=e[1],i=e[2],_=0,d=[];_<c.length;_++)s=c[_],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);u&&u(e);while(d.length)d.shift()();return l.push.apply(l,i||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,c=1;c<a.length;c++){var o=a[c];0!==n[o]&&(r=!1)}r&&(l.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},n={app:0},l=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("45a9"),n=a.n(r);n.a},1022:function(t,e,a){"use strict";var r=a("bfd8"),n=a.n(r);n.a},"45a9":function(t,e,a){},"4bc9":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("786c"),a("68aa"),a("9393"),a("09d7");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),t.geckoResponse?a("Coins",{attrs:{coinData:t.coinData}}):t._e(),a("hr"),t.lbtcResponse?a("LocalMarkets",{attrs:{localData:t.localData}}):t._e(),a("hr"),a("section",[a("b-container",[a("b-row",[t.LBTCBuyData.length?a("LBTCBuy",{attrs:{LBTCBuy:t.LBTCBuyData}}):t._e(),t.paxfulBuyData.length?a("PaxfulBuy",{attrs:{paxfulBuy:t.paxfulBuyData}}):t._e()],1)],1)],1),a("hr"),a("section",[a("b-container",[a("b-row",[t.LBTCSellData.length?a("LBTCSell",{attrs:{LBTCSell:t.LBTCSellData}}):t._e(),t.paxfulSellData.length?a("PaxfulSell",{attrs:{paxfulSell:t.paxfulSellData}}):t._e()],1)],1)],1),a("hr"),a("NewsBanner"),a("hr"),t.articleNews.length?a("News",{attrs:{articleNews:t.articleNews}}):t._e(),a("hr"),a("Footer")],1)},l=[],s=(a("d3b7"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-secondary navbar-expand-md"},[a("div",{staticClass:"container-fluid"},[a("a",{staticClass:"navbar-brand text-success",staticStyle:{"font-size":"30px","background-size":"auto"},attrs:{href:"#"}},[t._v("CryptoWizard")])])])}],o=a("0c7c"),i={},u=Object(o["a"])(i,s,c,!1,null,null,null),_=u.exports,d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"header-tag":"header"},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"mb-0"},[t._v("Bitcoin "),a("i",{staticClass:"fab fa-bitcoin"}),t._v(" "),a("span",[t._v(" updated: "),a("strong",[t._v(t._s(t._f("timeDifference")(t.coinData.bitcoin.last_updated_at))+" mins")]),t._v(" ago")])])]},proxy:!0},{key:"footer",fn:function(){return[a("em",[t._v("Showing prices in "),a("strong",[t._v("USD")])])]},proxy:!0}])},[a("b-card-text",[a("div",[a("b-table",{attrs:{striped:"",hover:"",items:t.BTCitems}})],1)])],1),a("b-card",{attrs:{"header-tag":"header"},scopedSlots:t._u([{key:"header",fn:function(){return[a("h6",{staticClass:"mb-0"},[t._v("Ethereum "),a("i",{staticClass:"fab fa-ethereum"}),t._v(" "),a("span",[t._v(" updated: "),a("strong",[t._v(t._s(t._f("timeDifference")(t.coinData.ethereum.last_updated_at))+" mins")]),t._v(" ago")])])]},proxy:!0},{key:"footer",fn:function(){return[a("em",[t._v("Showing prices in "),a("strong",[t._v("USD")])])]},proxy:!0}])},[a("b-card-text",[a("div",[a("b-table",{attrs:{striped:"",hover:"",items:t.ETHitems}})],1)])],1)],1)],1)},p=[],f=(a("b680"),{data:function(){return{BTCitems:[{price:this.coinData.bitcoin.usd,change_24h:this.coinData.bitcoin.usd_24h_change.toFixed(2)+"%",_cellVariants:{change_24h:this.changeChecker(this.coinData.bitcoin.usd_24h_change)}}],ETHitems:[{price:this.coinData.ethereum.usd,change_24h:this.coinData.ethereum.usd_24h_change.toFixed(2)+"%",_cellVariants:{change_24h:this.changeChecker(this.coinData.ethereum.usd_24h_change)}}]}},props:{coinData:Object},methods:{changeChecker:function(t){return t<0?"danger":"success"}},filters:{readable:function(t){return t.toLocaleString()},timeDifference:function(t){var e=Math.floor((Date.now()/1e3-t)/60);return e<0?0:e}}}),h=f,m=(a("1022"),Object(o["a"])(h,d,p,!1,null,"4a9b07d1",null)),v=m.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("h6",{staticClass:"display-4 text-center border-primary align-content-center align-self-center",staticStyle:{padding:"4px"}},[t._v("Local Markets")]),a("p",{staticClass:"text-center"},[t._v("A comprehensive comparison to get you the best deal on the two most popular peer to peer markets. We might receive a commission when you use the links provided.")]),a("p",[t._v("Market Price is "),a("strong",[t._v(" 1 BTC "),a("i",{staticClass:"fab fa-bitcoin"}),t._v(" : "+t._s(t.localData.currency)+" "+t._s(t._f("readable")(t.localData.data)))])])])])},y=[],g={props:{localData:Object},filters:{readable:function(t){return parseFloat(t).toLocaleString()}}},B=g,C=Object(o["a"])(B,b,y,!1,null,null,null),S=C.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col",attrs:{sm:"6"}},[a("div",[a("fieldset",[t._m(0),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[t._m(1),a("tbody",[a("tr",[a("td",[t._v(t._s(t.LBTCBuy[0].data.online_provider)+": "),a("strong",[t._v(" "+t._s(t.LBTCBuy[0].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCBuy[0].data.currency)+" "+t._s(t._f("readable")(t.LBTCBuy[0].data.temp_price)))]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCBuy[0].data.temp_price_usd,t.LBTCBuy[t.LBTCBuy.length-1].data))+"%")])]),a("tr",[a("td",[t._v(t._s(t.LBTCBuy[1].data.online_provider)+": "),a("strong",[t._v(t._s(t.LBTCBuy[1].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCBuy[1].data.currency)+" "+t._s(t._f("readable")(t.LBTCBuy[1].data.temp_price)))]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCBuy[1].data.temp_price_usd,t.LBTCBuy[t.LBTCBuy.length-1].data))+"%")])]),a("tr",[a("td",[t._v(t._s(t.LBTCBuy[2].data.online_provider)+": "),a("strong",[t._v(t._s(t.LBTCBuy[2].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCBuy[2].data.currency)+" "+t._s(t._f("readable")(t.LBTCBuy[2].data.temp_price))+" ")]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCBuy[2].data.temp_price_usd,t.LBTCBuy[t.LBTCBuy.length-1].data))+"%")])])])])])])]),a("hr"),t._m(2),a("hr")])])])},L=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://localbitcoins.com/?ch=15s53",target:"blank"}},[a("legend",{staticStyle:{color:"orange"}},[t._v("Buy From Localbitcoins.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Payment Method")]),a("th",[t._v("Selling Price")]),a("th",[t._v("Premium")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{href:"https://localbitcoins.com/?ch=15s53",target:"blank"}},[a("button",{staticClass:"btn btn-dark btn-sm",staticStyle:{color:"orange"},attrs:{type:"button"}},[t._v("Buy From Localbitcoins")])])}],T={props:{LBTCBuy:Array},filters:{readable:function(t){return parseFloat(t).toLocaleString()},getPremium:function(t,e){return((parseFloat(t)-parseFloat(e))/parseFloat(e)*100).toFixed(2)}}},w=T,D=Object(o["a"])(w,x,L,!1,null,null,null),k=D.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{sm:"6"}},[a("div",[a("fieldset",[a("a",{attrs:{href:"https://paxful.com/?r=EoYLDeZZmY1",target:"blank"}},[a("legend",{staticStyle:{color:"purple"}},[t._v("Buy From Paxful.com")])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("Payment Method")]),a("th",[t._v("Selling Price")]),a("th",[t._v("Premium")])])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.paxfulBuy[0].payment_method_name))]),a("td",[t._v(t._s(t.paxfulBuy[0].currency_code)+" "+t._s(t._f("readable")(t.paxfulBuy[0].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulBuy[0].margin)+"%")])]),a("tr",[a("td",[t._v(t._s(t.paxfulBuy[1].payment_method_name))]),a("td",[t._v(t._s(t.paxfulBuy[1].currency_code)+" "+t._s(t._f("readable")(t.paxfulBuy[1].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulBuy[1].margin)+"%")])]),a("tr",[a("td",[t._v(t._s(t.paxfulBuy[2].payment_method_name))]),a("td",[t._v(t._s(t.paxfulBuy[2].currency_code)+" "+t._s(t._f("readable")(t.paxfulBuy[2].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulBuy[2].margin)+"%")])]),a("tr")])])])])]),a("hr"),a("a",{attrs:{href:"https://paxful.com/?r=EoYLDeZZmY1",target:"blank"}},[a("button",{staticClass:"btn btn-dark btn-sm",attrs:{type:"button"}},[t._v("Buy From Paxful")])]),a("hr")])])])},j=[],E={props:{paxfulBuy:Array},filters:{readable:function(t){return parseFloat(t).toLocaleString()}}},O=E,F=Object(o["a"])(O,P,j,!1,null,null,null),N=F.exports,$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{sm:"6"}},[a("div",[a("fieldset",[a("a",{attrs:{href:"https://localbitcoins.com/?ch=15s53",target:"blank"}},[a("legend",{staticStyle:{color:"orange"}},[t._v("Sell On Localbitcoins.com")])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("Payment Method")]),a("th",[t._v("Buying Price")]),a("th",[t._v("Premium")])])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.LBTCSell[0].data.online_provider)+": "),a("strong",[t._v(t._s(t.LBTCSell[0].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCSell[0].data.currency)+" "+t._s(t._f("readable")(t.LBTCSell[0].data.temp_price)))]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCSell[0].data.temp_price_usd,t.LBTCSell[t.LBTCSell.length-1].data))+"%")])]),a("tr",[a("td",[t._v(t._s(t.LBTCSell[1].data.online_provider)+": "),a("strong",[t._v(t._s(t.LBTCSell[1].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCSell[1].data.currency)+" "+t._s(t._f("readable")(t.LBTCSell[1].data.temp_price)))]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCSell[1].data.temp_price_usd,t.LBTCSell[t.LBTCSell.length-1].data))+"%")])]),a("tr",[a("td",[t._v(t._s(t.LBTCSell[2].data.online_provider)+": "),a("strong",[t._v(t._s(t.LBTCSell[2].data.bank_name))])]),a("td",[t._v(t._s(t.LBTCSell[2].data.currency)+" "+t._s(t._f("readable")(t.LBTCSell[2].data.temp_price)))]),a("td",[t._v(t._s(t._f("getPremium")(t.LBTCSell[2].data.temp_price_usd,t.LBTCSell[t.LBTCSell.length-1].data))+"%")])]),a("tr")])])])])]),a("hr"),a("a",{attrs:{href:"https://localbitcoins.com/?ch=15s53",target:"blank"}},[a("button",{staticClass:"btn btn-dark btn-sm",staticStyle:{color:"orange"},attrs:{type:"button"}},[t._v("Sell On Localbitcoins")])]),a("hr")])])])},A=[],M={props:{LBTCSell:Array},filters:{readable:function(t){return parseFloat(t).toLocaleString()},getPremium:function(t,e){return((parseFloat(t)-parseFloat(e))/parseFloat(e)*100).toFixed(2)}}},R=M,Y=Object(o["a"])(R,$,A,!1,null,null,null),Z=Y.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-col",{attrs:{sm:"6"}},[a("div",[a("fieldset",[a("a",{attrs:{href:"https://paxful.com/?r=EoYLDeZZmY1",target:"blank"}},[a("legend",{staticStyle:{color:"purple"}},[t._v("Sell On Paxful.com")])]),a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[t._v("Payment Method")]),a("th",[t._v("Buying Price")]),a("th",[t._v("Premium")])])]),a("tbody",[a("tr",[a("td",[t._v(t._s(t.paxfulSell[0].payment_method_name))]),a("td",[t._v(t._s(t.paxfulSell[0].currency_code)+" "+t._s(t._f("readable")(t.paxfulSell[0].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulSell[0].margin)+"%")])]),a("tr",[a("td",[t._v(t._s(t.paxfulSell[1].payment_method_name))]),a("td",[t._v(t._s(t.paxfulSell[1].currency_code)+" "+t._s(t._f("readable")(t.paxfulSell[1].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulSell[1].margin)+"%")])]),a("tr",[a("td",[t._v(t._s(t.paxfulSell[2].payment_method_name))]),a("td",[t._v(t._s(t.paxfulSell[2].currency_code)+" "+t._s(t._f("readable")(t.paxfulSell[2].fiat_price_per_btc)))]),a("td",[t._v(t._s(t.paxfulSell[2].margin)+"%")])]),a("tr")])])])])]),a("hr"),a("a",{attrs:{href:"https://paxful.com/?r=EoYLDeZZmY1",target:"blank"}},[a("button",{staticClass:"btn btn-dark btn-sm",attrs:{type:"button"}},[t._v("Sell On Paxful")])]),a("hr")])])])},z=[],H={props:{paxfulSell:Array},filters:{readable:function(t){return parseFloat(t).toLocaleString()}}},J=H,V=Object(o["a"])(J,U,z,!1,null,null,null),W=V.exports,G=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("div",{staticClass:"container"},[a("h6",{staticClass:"display-4 text-center border-primary align-content-center align-self-center",staticStyle:{padding:"4px"}},[t._v("Crypto News")])])])}],I={},K=Object(o["a"])(I,G,q,!1,null,null,null),Q=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",[a("b-row",[a("b-col",{attrs:{sm:"4"}},[a("div",[a("a",{attrs:{href:t.BASE_URL+t.articleNews[0].slug,target:"blank"}},[a("h4",[t._v(t._s(t.articleNews[0].title))])]),a("p",[t._v(t._s(t.articleNews[0].preview))])])]),a("b-col",{attrs:{sm:"4"}},[a("div",[a("a",{attrs:{href:t.BASE_URL+t.articleNews[1].slug,target:"blank"}},[a("h4",[t._v(t._s(t.articleNews[1].title))])]),a("p",[t._v(t._s(t.articleNews[1].preview))])])]),a("b-col",{attrs:{sm:"4"}},[a("div",[a("a",{attrs:{href:t.BASE_URL+t.articleNews[2].slug,target:"blank"}},[a("h4",[t._v(t._s(t.articleNews[2].title))])]),a("p",[t._v(t._s(t.articleNews[2].preview))])])])],1)],1)},tt=[],et={props:{articleNews:Array},data:function(){return{BASE_URL:"https://www.robacoin.com/blog/article/"}}},at=et,rt=Object(o["a"])(at,X,tt,!1,null,null,null),nt=rt.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer-dark"},[a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("p",{staticClass:"copyright"},[a("span",[t._v("Github: "),a("a",{attrs:{href:"https://github.com/freelancer254",target:"blank"}},[t._v("freelancer254")])]),t._v(" | "),a("span",[t._v("Twitter:"),a("a",{attrs:{href:"https://github.com/freelancer254",target:"blank"}},[t._v("CoinRoba")])]),t._v(" | "),a("span",[t._v("Email: "),a("a",{attrs:{href:"mailto:robertmutua@youth4tech.com",target:"blank"}},[t._v("robertmutua@youth4tech.com")])])])])]),a("p",{staticClass:"copyright"},[t._v("Copyright cryptowizard © 2020")])])])])}],ct={},ot=ct,it=(a("fb6f"),Object(o["a"])(ot,lt,st,!1,null,"75bae85e",null)),ut=it.exports,_t={name:"App",data:function(){return{coinData:{},geckoResponse:!1,lbtcResponse:!1,articleNews:[],currencyData:{},localData:null,LBTCBuyData:[],paxfulBuyData:[],LBTCSellData:[],paxfulSellData:[]}},components:{Header:_,Coins:v,LocalMarkets:S,LBTCBuy:k,PaxfulBuy:N,LBTCSell:Z,PaxfulSell:W,NewsBanner:Q,News:nt,Footer:ut},mounted:function(){var t=this;this.$loading(!0),fetch("https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum&vs_currencies=USD&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true",{method:"get"}).then((function(t){return t.json()})).then((function(e){t.coinData=e,t.geckoResponse=!0,t.$loading(!1),t.getcurrencyData(),t.getArticles()}))},methods:{getArticles:function(){var t=this;fetch("https://www.robacoin.com/api/cryptonews/?format=json",{method:"get"}).then((function(t){return t.json()})).then((function(e){t.articleNews=e}))},getcurrencyData:function(){var t=this;fetch("https://www.robacoin.com/api/ip/?format=json",{method:"get"}).then((function(t){return t.json()})).then((function(e){t.currencyData=e,t.getlocalData(t.currencyData.geoplugin_currencyCode)}))},getlocalData:function(t){var e=this,a="https://www.robacoin.com/api/localprice/"+t+"/?format=json";fetch(a,{method:"get"}).then((function(t){return t.json()})).then((function(a){e.localData=a,e.lbtcResponse=!0,e.getLBTCBuy(t)}))},getLBTCBuy:function(t){var e=this,a="https://www.robacoin.com/api/lbtcbuy/"+t+"/?format=json";fetch(a,{method:"get"}).then((function(t){return t.json()})).then((function(a){e.LBTCBuyData=a,e.getPaxfulBuy(t)}))},getPaxfulBuy:function(t){var e=this,a="https://www.robacoin.com/api/paxfulbuy/"+t+"/?format=json";fetch(a,{method:"get"}).then((function(t){return t.json()})).then((function(a){e.paxfulBuyData=a,e.getLBTCSell(t)}))},getLBTCSell:function(t){var e=this,a="https://www.robacoin.com/api/lbtcsell/"+t+"/?format=json";fetch(a,{method:"get"}).then((function(t){return t.json()})).then((function(a){e.LBTCSellData=a,e.getPaxfulSell(t)}))},getPaxfulSell:function(t){var e=this,a="https://www.robacoin.com/api/paxfulsell/"+t+"/?format=json";fetch(a,{method:"get"}).then((function(t){return t.json()})).then((function(t){e.paxfulSellData=t}))}}},dt=_t,pt=(a("034f"),Object(o["a"])(dt,n,l,!1,null,null,null)),ft=pt.exports,ht=a("aee4"),mt=a("e15fb");a("b6ad"),a("6210");r["default"].config.productionTip=!1,r["default"].use(mt["a"]),r["default"].use(ht["a"]),new r["default"]({render:function(t){return t(ft)}}).$mount("#app")},bfd8:function(t,e,a){},fb6f:function(t,e,a){"use strict";var r=a("4bc9"),n=a.n(r);n.a}});
//# sourceMappingURL=app.9699430a.js.map