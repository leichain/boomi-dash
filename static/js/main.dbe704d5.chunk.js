(this["webpackJsonpnft-market-demo"]=this["webpackJsonpnft-market-demo"]||[]).push([[0],{209:function(e,t,c){},211:function(e,t,c){},212:function(e,t,c){},214:function(e,t,c){},239:function(e,t,c){},262:function(e,t,c){},264:function(e,t,c){},265:function(e,t,c){},266:function(e,t,c){},267:function(e,t,c){},390:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),o=c(13),i=c.n(o),r=(c(209),c(11)),s=c(7),l=c.n(s),d=c(26),u=c(4),j=(c(211),c(27)),b=c(6),m=(c(212),c(1)),h=function(e){var t=e.options,c=e.onChange,a=e.id;return Object(m.jsx)("select",{className:"select",onChange:c,children:t.map((function(e,t){return Object(m.jsx)("option",{selected:a==e.value?"selected":"",value:e.value,children:e.name},t)}))})},O=c(9),v=(c(214),c(394)),_={TEMPLATE:{collection_address:"0xF3402D09BfF30252872ec60A00305E3fD082A701",block_chain_id:"137",title:"Boomi Dashboard",timeseries_chart:!0,banner_picture:"https://lh3.googleusercontent.com/bPeLPTAvISHbkLLE6HxCvq9qfyxN7md6gPH5xQpv7filGYg9w6HGxMI3chAGnwrvTIu1f7hGQcN8gjA2N8aOC2Wrkl9GGPtncTNG=w600"},FILTER_OPTIONS:[{name:"Ethereum",value:1},{name:"Polygon",value:137},{name:"Avalanche",value:43114}],GRAPH_OPTIONS:[{name:"7 Days",value:7},{name:"1 Month",value:30},{name:"3 Month",value:90},{name:"1 Year",value:365},{name:"All time",value:0}]},p=function(e){var t=e.data,c=e.onClick,n=e.color,o=(e.load,Object(a.useState)({key:"",direction:""})),i=Object(u.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)(null),d=Object(u.a)(l,2),j=d[0],b=d[1],h=Object(a.useRef)();Object(a.useEffect)((function(){void 0!==h.current&&h.current.scrollIntoView({behavior:"smooth"})})),Object(a.useEffect)((function(){b(p())}),[r]);var p=function(){var e=Object(O.a)(t);return e.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),e},x=function(e){var t="ascending";r.key===e&&"ascending"===r.direction&&(t="descending"),s({key:e,direction:t})},f=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(m.jsxs)("table",{className:"table",children:[Object(m.jsxs)("tr",{className:"title-row",children:[Object(m.jsx)("th",{className:"collection-name",children:Object(m.jsxs)("div",{className:"tableHeader-collection",children:["Collection",Object(m.jsx)(v.a,{icon:"collection_name"===r.key&&"descending"===r.direction?"chevron-down":"collection_name"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("collection_name")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["Market Cap",Object(m.jsx)(v.a,{icon:"market_cap_quote"===r.key&&"descending"===r.direction?"chevron-down":"market_cap_quote"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("market_cap_quote")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["24hr Volume",Object(m.jsx)(v.a,{icon:"volume_quote_24h"===r.key&&"descending"===r.direction?"chevron-down":"volume_quote_24h"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["Avg Price",Object(m.jsx)(v.a,{icon:"avg_volume_quote_24h"===r.key&&"descending"===r.direction?"chevron-down":"avg_volume_quote_24h"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("avg_volume_quote_24h")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Transaction",Object(m.jsx)(v.a,{icon:"transaction_count_alltime"===r.key&&"descending"===r.direction?"chevron-down":"transaction_count_alltime"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("transaction_count_alltime")}})]})}),Object(m.jsx)("th",{className:"align-right",children:Object(m.jsxs)("div",{className:"tableHeader",children:["# Wallets",Object(m.jsx)(v.a,{icon:"unique_wallet_purchase_count_alltime"===r.key&&"descending"===r.direction?"chevron-down":"unique_wallet_purchase_count_alltime"===r.key&&"ascending"===r.direction?"chevron-up":"expand-all",size:16,intent:"primary",color:"#FF4C8B",className:"icon",onClick:function(){x("unique_wallet_purchase_count_alltime")}})]})})]}),j&&j.map((function(e,t){return""==e.collection_name&&console.log(),Object(m.jsx)(m.Fragment,{children:e.collection_address===_.TEMPLATE.collection_address?Object(m.jsxs)("tr",{ref:h,className:"active",style:{backgroundColor:n},onClick:function(){c(e.collection_address)},children:[Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data-active",children:e.market_cap_quote?f.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.volume_quote_24h?f.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.avg_volume_quote_24h?f.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data-active",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data-active",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t):Object(m.jsxs)("tr",{className:"data-row",onClick:function(){c(e.collection_address)},children:[Object(m.jsx)("td",{className:"collection-name",style:{fontWeight:"600"},children:""!==e.collection_name?e.collection_name:e.collection_address}),Object(m.jsx)("td",{className:"table-data",children:e.market_cap_quote?f.format(e.market_cap_quote).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.volume_quote_24h?f.format(e.volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.avg_volume_quote_24h?f.format(e.avg_volume_quote_24h).split(".")[0]:0}),Object(m.jsx)("td",{className:"table-data",children:e.transaction_count_alltime?e.transaction_count_alltime.toLocaleString():0}),Object(m.jsx)("td",{className:"table-data",children:e.unique_wallet_purchase_count_alltime?e.unique_wallet_purchase_count_alltime.toLocaleString():0})]},t)})}))]})},x=(c(239),c.p+"static/media/Covalent-Background_5.cc7bc02b.jpg"),f=function(e){var t=e.head,c=e.subhead,a=e.img,n=e.color,o=Object(b.f)();return Object(m.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(a||x,")")},children:Object(m.jsxs)("div",{className:"banner-section",onClick:function(){o.push("/")},children:[Object(m.jsx)("div",{className:"banner-logo"}),Object(m.jsxs)("div",{className:"banner-header",children:[Object(m.jsx)("h3",{style:{color:n?"white":"#FF4C8B"},children:c}),Object(m.jsxs)("div",{className:"banner-title",children:[Object(m.jsx)("h1",{children:t}),Object(m.jsx)("div",{className:"tag",style:{backgroundColor:n},children:"Beta"})]})]})]})})};f.defaultProps={head:"Head",subhead:"SubHead",img:x};var g=f,k=(c.p,c.p+"static/media/covalent-logo-loop_dark_v2.d4efb9c1.gif"),y=c(21),N=c.n(y),T=c(39);c(262);function E(e){var t=e.light,c=(e.dark,e.vibrant),n=Object(b.f)(),o=Object(a.useState)(_.TEMPLATE.block_chain_id),i=Object(u.a)(o,2),r=i[0],s=i[1],j=Object(a.useState)([]),O=Object(u.a)(j,2),x=O[0],f=O[1],y=Object(a.useState)(!0),E=Object(u.a)(y,2),C=E[0],S=E[1];Object({NODE_ENV:"production",PUBLIC_URL:"/boomi-dash",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API;Object(T.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(a.useEffect)((function(){P(r)}),[r]);var P=function(){var e=Object(d.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S(!0),e.prev=1,e.next=4,N.a.get("https://api.covalenthq.com/v1/".concat(t,"/nft_market/?&key=ckey_docs"));case 4:c=e.sent,console.log(c.data.data.items),f(c.data.data.items),S(!1),e.next=12;break;case 10:e.prev=10,e.t0=e.catch(1);case 12:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:c}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){n.goBack()},children:[Object(m.jsx)(v.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsxs)("div",{className:"content",children:[Object(m.jsx)("div",{className:"select-chain",children:Object(m.jsx)(h,{options:_.FILTER_OPTIONS,onChange:function(e){s(e.target.value)},id:_.TEMPLATE.block_chain_id})}),C?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsx)(p,{onClick:function(e){e!==_.TEMPLATE.collection_address?n.push("/collection/".concat(e,"/").concat(r)):n.goBack()},data:x,load:C,color:c})]})]})]})}var C=c(3),S=(c.p,c(263),c(141)),P=(c(264),function(e){var t={responsive:!0,maintainAspectRatio:!1,plugins:{legend:{position:"top",labels:{color:"white",font:{size:14},margin:"20px"}}},scales:{A:{title:"USD",type:"linear",position:"left",ticks:{color:"#FF4C8B",callback:function(e,t,c){return parseInt(e)>=1e3?"$"+e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):"$"+e}}},B:{type:"linear",position:"right",ticks:{color:"#00D8D5",max:1,min:0}},x:{ticks:{color:"white"}}}},c={datasets:[{label:"Floor Price Quote 7 Days USD ($) ",yAxisID:"A",data:e.quote,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.5)"},{label:"Floor Price ETH 7 Days",yAxisID:"B",data:e.wei,borderColor:"rgb(\t0\t,216,\t213)",backgroundColor:"rgba(\t0,\t216\t,213, 0.5)"}]};return Object(m.jsx)(S.a,{options:t,data:c})}),A=(c(265),c(88)),F=c.n(A);function w(e){var t,c,n,o,i,r,s,j,p=e.light,x=e.vibrant,f=(e.dark,Object(a.useState)([])),y=Object(u.a)(f,2),E=y[0],S=y[1],A=Object(a.useState)([]),w=Object(u.a)(A,2),L=w[0],q=w[1],D=Object(a.useState)([]),B=Object(u.a)(D,2),M=B[0],H=B[1],I=Object(a.useState)(!0),R=Object(u.a)(I,2),U=R[0],z=R[1],V=Object(a.useState)(!0),W=Object(u.a)(V,2),G=W[0],Y=W[1],K=Object(a.useState)([]),J=Object(u.a)(K,2),Q=J[0],$=J[1],X=Object(a.useState)(!1),Z=Object(u.a)(X,2),ee=Z[0],te=Z[1],ce=Object(b.f)(),ae=F()().format("YYYY-MM-DD"),ne=Object(b.g)(),oe=ne.address,ie=ne.id,re=ie||_.TEMPLATE.block_chain_id,se=oe||_.TEMPLATE.collection_address;Object(T.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}});var le=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});Object({NODE_ENV:"production",PUBLIC_URL:"/boomi-dash",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API;Object(a.useEffect)((function(){ue(),je()}),[]);var de=function(){var e=Object(d.a)(l.a.mark((function e(t){var c,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),te(!1),q([]),H([]),c=F()().subtract(t,"days").format("YYYY-MM-DD"),a=t>0?"https://api.covalenthq.com/v1/".concat(re,"/nft_market/collection/").concat(se,"/?from=").concat(c,"&to=").concat(ae,"&key=ckey_docs"):"https://api.covalenthq.com/v1/".concat(re,"/nft_market/collection/").concat(se,"/?to=").concat(ae,"&key=ckey_docs"),e.prev=6,e.next=9,N.a.get(a);case 9:n=e.sent,q(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_quote_7d}})).reverse()),H(n.data.data.items.map((function(e){return{x:e.opening_date,y:e.floor_price_wei_7d/Math.pow(10,18)}})).reverse()),te(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(6),te(!0);case 18:Y(!1);case 19:case"end":return e.stop()}}),e,null,[[6,15]])})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("https://api.covalenthq.com/v1/".concat(re,"/nft_market/collection/").concat(se,"/?&key=ckey_docs"));case 3:t=e.sent,$(Object(O.a)(t.data.data.items)),""===_.TEMPLATE.title||oe||(_.TEMPLATE.title="".concat(""!==t.data.data.items[0].collection_name?t.data.data.items[0].collection_name:_.TEMPLATE.title," Dashboard")),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:_.TEMPLATE.timeseries_chart&&de(7);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),je=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,a,n,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=[],e.prev=1,e.next=4,N.a.get("https://api.covalenthq.com/v1/".concat(re,"/tokens/").concat(se,"/nft_token_ids/?quote-currency=USD&format=JSON&page-size=5&key=ckey_docs"));case 4:t=e.sent,a=Object(C.a)(t.data.data.items),e.prev=6,a.s();case 8:if((n=a.n()).done){e.next=21;break}return o=n.value,e.prev=10,e.next=13,N.a.get("https://api.covalenthq.com/v1/".concat(re,"/tokens/").concat(se,"/nft_metadata/").concat(o.token_id,"/?quote-currency=USD&format=JSON&key=ckey_docs"));case 13:i=e.sent,c.push(null!=i.data.data.items[0].nft_data?i.data.data.items[0].nft_data[0]:{external_data:{image:""}}),e.next=19;break;case 17:e.prev=17,e.t0=e.catch(10);case 19:e.next=8;break;case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(6),a.e(e.t1);case 26:return e.prev=26,a.f(),e.finish(26);case 29:S([].concat(c)),z(!1),e.next=35;break;case 33:e.prev=33,e.t2=e.catch(1);case 35:case"end":return e.stop()}}),e,null,[[1,33],[6,23,26,29],[10,17]])})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:x}),Object(m.jsxs)("div",{className:"main",children:[oe?Object(m.jsxs)("div",{className:"back",style:{color:p||"#FF4C8B"},onClick:function(){ce.goBack()},children:[Object(m.jsx)(v.a,{icon:"chevron-left",size:24,intent:"primary",color:p||"#FF4C8B",className:"icon"}),"Back"]}):Object(m.jsxs)("div",{className:"global",style:{color:p||"#FF4C8B"},onClick:function(){ce.push("/global")},children:["Global View",Object(m.jsx)(v.a,{icon:"chevron-right",size:24,intent:"primary",color:p||"#FF4C8B",className:"icon"})]}),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"info",children:[Object(m.jsx)("div",{className:"image",children:U?Object(m.jsx)("img",{src:k}):Object(m.jsx)("img",{className:"collection-img",onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("collection-img")},src:null===(t=E[0])||void 0===t||null===(c=t.external_data)||void 0===c?void 0:c.image})}),Object(m.jsx)("div",{className:"details",children:Object(m.jsxs)("div",{className:"title-cont",children:[Object(m.jsx)("h1",{style:{color:p},children:"Collection Address "}),Object(m.jsxs)("h3",{onClick:function(){1==re?window.open("https://etherscan.io/address/".concat(se),"_blank"):137==re?window.open("https://polygonscan.com/address/".concat(se),"_blank"):window.open("https://snowtrace.io/address/".concat(se),"_blank")},children:[se," ",Object(m.jsx)(v.a,{icon:"share",size:15,intent:"primary",color:p||"#FF4C8B",className:"share"})]}),Object(m.jsxs)("table",{className:"collection-table",children:[Object(m.jsxs)("tr",{className:"title-row",style:{color:p},children:[Object(m.jsx)("td",{children:"Ticker Symbol"}),Object(m.jsx)("td",{children:"24hr Volume"}),Object(m.jsx)("td",{children:"24hr Sold Count"})]}),Object(m.jsxs)("tr",{className:"data-row",children:[Object(m.jsx)("td",{children:(null===(n=Q[0])||void 0===n?void 0:n.collection_ticker_symbol)?null===(o=Q[0])||void 0===o?void 0:o.collection_ticker_symbol:0}),Object(m.jsxs)("td",{children:[" ",(null===(i=Q[0])||void 0===i?void 0:i.volume_quote_day)?le.format(null===(r=Q[0])||void 0===r?void 0:r.volume_quote_day).split(".")[0]:0]}),Object(m.jsx)("td",{children:(null===(s=Q[0])||void 0===s?void 0:s.unique_token_ids_sold_count_day)?null===(j=Q[0])||void 0===j?void 0:j.unique_token_ids_sold_count_day:0})]})]})]})})]})}),_.TEMPLATE.timeseries_chart&&Object(m.jsxs)("div",{className:"graph-cont",children:[G&&Object(m.jsx)("div",{className:"graph-loader",children:Object(m.jsx)("img",{src:k})}),ee&&Object(m.jsx)("div",{className:"graph-err",children:"No data available between these dates"}),Object(m.jsxs)("div",{className:"graph-header",children:[Object(m.jsx)("h2",{children:"Floor Price "}),Object(m.jsx)(h,{options:_.GRAPH_OPTIONS,onChange:function(e){de(e.target.value)}})]}),Object(m.jsx)("div",{className:"graph",children:Object(m.jsx)(P,{quote:L,wei:M})})]}),Object(m.jsxs)("div",{className:"bottom-section",children:[Object(m.jsx)("h1",{children:"NFT Preview (First 5)"}),U?Object(m.jsx)("div",{className:"collection-load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsx)("div",{className:"collection-display",children:E&&E.map((function(e,t){var c,a;return Object(m.jsxs)("div",{className:"nft",children:[Object(m.jsx)("img",{onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("collection-img")},className:"collection-img",src:null===e||void 0===e||null===(c=e.external_data)||void 0===c?void 0:c.image,onClick:function(){ce.push("/nft/".concat(se,"/").concat(e.token_id,"/").concat(re))}},t),null===e||void 0===e||null===(a=e.external_data)||void 0===a?void 0:a.name]},t)}))})]})]})]})})}c(266);var L=function(e){var t,c,a,n,o=e.data,i=e.color;return Object(m.jsxs)("div",{className:"nft-cont",children:[Object(m.jsx)("div",{className:"img-container",children:Object(m.jsx)("img",{onError:function(e){e.target.classList.add("error-image"),e.target.classList.remove("nft-img")},className:"nft-img",src:null===o||void 0===o||null===(t=o.external_data)||void 0===t?void 0:t.image})}),Object(m.jsxs)("div",{className:"nft-details",style:{backgroundColor:i},children:[Object(m.jsx)("h1",{children:null===o||void 0===o||null===(c=o.external_data)||void 0===c?void 0:c.name}),Object(m.jsxs)("h2",{children:["Token ID : ",null===o||void 0===o?void 0:o.token_id]}),Object(m.jsx)("p",{children:null===o||void 0===o||null===(a=o.external_data)||void 0===a?void 0:a.description}),Object(m.jsx)("table",{className:"nft-table",children:(null===o||void 0===o||null===(n=o.external_data)||void 0===n?void 0:n.attributes)?Object(m.jsx)(m.Fragment,{children:o.external_data.attributes.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[" ",e.trait_type," "]}),Object(m.jsxs)("td",{children:[" ",e.value," "]})]},t)}))}):null})]})]})};c(267);function q(e){var t=e.light,c=e.dark,n=e.vibrant,o=Object(b.g)(),i=o.address,r=o.id,s=o.chainId,j=Object(a.useState)({}),h=Object(u.a)(j,2),O=h[0],p=h[1],x=Object(a.useState)(!0),f=Object(u.a)(x,2),y=f[0],E=f[1],C=(Object({NODE_ENV:"production",PUBLIC_URL:"/boomi-dash",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_COVALENT_API,Object(b.f)());Object(T.a)(N.a,{retries:3,retryDelay:function(e){return console.log("retry attempt: ".concat(e)),2e3*e},retryCondition:function(e){return 503===e.response.status}}),Object(a.useEffect)((function(){S()}),[]);var S=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://api.covalenthq.com/v1/".concat(s,"/tokens/").concat(i,"/nft_metadata/").concat(r,"/?quote-currency=USD&format=JSON&key=ckey_docs"));case 2:t=e.sent,p(null!==t.data.data.items[0].nft_data?t.data.data.items[0].nft_data[0]:{external_data:{image:""}}),E(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:y?Object(m.jsx)("div",{className:"load",children:Object(m.jsx)("img",{src:k})}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(g,{img:""!==_.TEMPLATE.banner_picture?_.TEMPLATE.banner_picture:null,head:_.TEMPLATE.title,subhead:"Code Template",color:n}),Object(m.jsxs)("div",{className:"main",children:[Object(m.jsxs)("div",{className:"back",style:{color:t||"#FF4C8B"},onClick:function(){C.goBack()},children:[Object(m.jsx)(v.a,{icon:"chevron-left",size:24,intent:"primary",color:t||"#FF4C8B",className:"icon"}),"Back"]}),Object(m.jsx)(L,{data:O,color:c})]})]})})}var D=c.p+"static/media/logo.00ecc9d5.svg",B=c(140);c.p;var M=function(){Object(a.useEffect)((function(){""!==_.TEMPLATE.banner_picture&&N()}),[]);var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),s=i[0],h=i[1],O=Object(a.useState)(""),v=Object(u.a)(O,2),p=v[0],x=v[1],f=Object(a.useState)(""),g=Object(u.a)(f,2),k=g[0],y=g[1],N=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.from(_.TEMPLATE.banner_picture).getPalette();case 2:return t=e.sent,console.log(t),n(t.DarkMuted.getHex()),x(t.LightVibrant.getHex()),h(t.Vibrant.getHex()),y(t.DarkVibrant.getHex()),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"App",style:{backgroundColor:"".concat(c)},children:[Object(m.jsx)(j.a,{children:Object(m.jsx)(j.b,{basename:"/",children:Object(m.jsxs)(b.c,{children:[Object(m.jsx)(b.a,{path:"/nft/:address/:id/:chainId",render:function(e){return Object(m.jsx)(q,Object(r.a)(Object(r.a)({},e),{},{light:p,vibrant:s,dark:c}))}}),Object(m.jsx)(b.a,{path:"/collection/:address/:id",render:function(e){return Object(m.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{light:p,vibrant:s,dark:k}))}}),Object(m.jsx)(b.a,{path:"/global",render:function(e){return Object(m.jsx)(E,Object(r.a)(Object(r.a)({},e),{},{light:p,vibrant:s,dark:k}))}}),Object(m.jsx)(b.a,{path:"/",render:function(e){return Object(m.jsx)(w,Object(r.a)(Object(r.a)({},e),{},{light:p,vibrant:s,dark:k}))}})]})})}),Object(m.jsx)("div",{className:"logo",children:Object(m.jsx)("img",{src:D})})]})};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))}},[[390,1,2]]]);
//# sourceMappingURL=main.dbe704d5.chunk.js.map