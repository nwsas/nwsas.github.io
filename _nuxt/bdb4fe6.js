(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3],{300:function(t,e,r){},302:function(t,e,r){"use strict";r(300)},309:function(t,e,r){},322:function(t,e,r){"use strict";r.r(e);r(214),r(68);var n=r(310),l={name:"NwsLogo",props:{width:{type:Number,default:400},inverted:{type:Boolean,default:!1},animate:{type:Boolean,default:!1}},mounted:function(){!0===this.animate?(setTimeout((function(){Object(n.a)({targets:"svg circle",easing:"easeOutElastic",elasticity:900,duration:2e3,r:function(t){return t.getAttribute("data-r")},delay:n.a.stagger(200)})}),750),setTimeout((function(){Object(n.a)({targets:"svg .footer",easing:"cubicBezier(0.230, 1, 0.885, 0.975)",duration:1e3,translateX:[function(t){return t.getAttribute("data-x")},function(t){return t.getAttribute("data-x")}],translateY:[100,function(t){return t.getAttribute("data-y")}]})}),2e3)):(Object(n.a)({targets:"svg circle",duration:0,r:function(t){return t.getAttribute("data-r")}}),Object(n.a)({targets:"svg .footer",duration:0,translateX:function(t){return t.getAttribute("data-x")},translateY:function(t){return t.getAttribute("data-y")}}))}},c=(r(302),r(83)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{ref:"svg",style:{width:t.width+"px"},attrs:{viewBox:"0 0 400 132"}},[r("g",{attrs:{transform:"translate(2 4)"}},[r("g",{attrs:{fill:"#fff"}},[r("circle",{attrs:{cx:"8.5",cy:"8.5",r:"0","data-r":"8.5",transform:"translate(0 23)"}}),r("circle",{attrs:{cx:"17",cy:"17",r:"0","data-r":"17",transform:"translate(31 0)"}}),r("circle",{attrs:{cx:"25.5",cy:"25.5",r:"0","data-r":"25.5",transform:"translate(14 44)"}})]),r("g",{attrs:{fill:"#fff"}},[r("path",{staticClass:"footer",attrs:{d:"M12.087-13.089H10.509V-2.665h-.129L3.137-13.089H1.585V.154h1.6v-10.4h.129L10.535.154h1.552ZM29.2-6.467c0-4.19-2.457-6.8-5.846-6.8s-5.846,2.612-5.846,6.8,2.457,6.8,5.846,6.8S29.2-2.277,29.2-6.467Zm-1.552,0c0,3.44-1.888,5.3-4.294,5.3s-4.294-1.862-4.294-5.3,1.888-5.3,4.294-5.3S27.647-9.907,27.647-6.467ZM34.62.154h1.6V-5.019h2.9c.116,0,.226,0,.336-.006L42.251.154h1.862l-2.994-5.47A3.607,3.607,0,0,0,43.6-9.028c0-2.341-1.4-4.061-4.5-4.061H34.62Zm1.6-6.622v-5.2h2.819c2.147,0,2.975,1.048,2.975,2.638s-.828,2.561-2.949,2.561ZM51.4.154h1.655L55.975-10.4h.1L59,.154h1.655l3.621-13.243h-1.63L59.88-2.3h-.129L56.932-13.089H55.121L52.3-2.3h-.129L49.4-13.089h-1.63Zm17.6,0h8.1V-1.268H70.6v-4.5h5.975V-7.192H70.6v-4.475h6.389v-1.423H69Zm22.673-9.1h1.655A5.314,5.314,0,0,0,87.9-13.27c-3.395,0-5.794,2.612-5.794,6.8s2.38,6.8,5.9,6.8a5.115,5.115,0,0,0,5.406-5.38V-6.467H88.363v1.423h3.492A3.686,3.686,0,0,1,88-1.165c-2.457,0-4.345-1.862-4.345-5.3s1.888-5.3,4.242-5.3A3.774,3.774,0,0,1,91.674-8.95Zm8.81-4.138h-1.6V.154h1.6ZM106.965.154,108.3-3.6h5.354l1.332,3.75h1.681L111.8-13.089h-1.655L105.284.154ZM108.8-5.019l2.121-5.975h.1l2.121,5.975Zm23.165-8.07h-1.578V-2.665h-.129l-7.242-10.424h-1.552V.154h1.6v-10.4h.129l7.216,10.4h1.552ZM148.164.154h1.655L152.742-10.4h.1L155.768.154h1.655l3.621-13.243h-1.63L156.647-2.3h-.129L153.7-13.089h-1.811L149.069-2.3h-.129l-2.768-10.786h-1.63Zm17.6,0h8.1V-1.268h-6.492v-4.5h5.975V-7.192h-5.975v-4.475h6.389v-1.423h-7.992Zm13.621,0h4.785c3.13,0,4.423-1.526,4.423-3.518a3.1,3.1,0,0,0-2.664-3.311V-6.8a2.646,2.646,0,0,0,2.147-2.768c0-1.94-1.293-3.518-4.061-3.518h-4.63Zm1.6-1.423v-4.6h3.259a2.6,2.6,0,0,1,2.819,2.509c0,1.164-.8,2.1-2.9,2.1Zm0-6v-4.4h3.026c1.759,0,2.535.931,2.535,2.1a2.367,2.367,0,0,1-2.587,2.3Zm28.069-2.509h1.552c-.071-2-1.914-3.492-4.475-3.492-2.535,0-4.526,1.474-4.526,3.7,0,1.785,1.293,2.845,3.362,3.44l1.63.466c1.4.388,2.638.879,2.638,2.2,0,1.448-1.4,2.405-3.233,2.405-1.578,0-2.975-.7-3.1-2.2h-1.655c.155,2.173,1.914,3.647,4.759,3.647,3.052,0,4.785-1.681,4.785-3.828,0-2.483-2.354-3.285-3.725-3.647l-1.345-.362c-.983-.259-2.561-.776-2.561-2.2,0-1.267,1.164-2.2,2.923-2.2C207.69-11.847,208.905-11.084,209.061-9.778Zm7.1,9.932h8.1V-1.268h-6.492v-4.5h5.975V-7.192h-5.975v-4.475h6.389v-1.423h-7.992Zm13.621,0h1.6V-5.019h2.9c.116,0,.226,0,.336-.006l2.793,5.18h1.862l-2.994-5.47a3.607,3.607,0,0,0,2.477-3.712c0-2.341-1.4-4.061-4.5-4.061h-4.475Zm1.6-6.622v-5.2h2.819c2.147,0,2.975,1.048,2.975,2.638s-.828,2.561-2.949,2.561Zm13-6.622h-1.681L247.569.154h1.655l4.863-13.243h-1.681L248.474-1.941h-.155Zm16.1,0h-1.6V.154h1.6Zm16.6,4.138a5.161,5.161,0,0,0-5.328-4.319c-3.388,0-5.846,2.612-5.846,6.8s2.457,6.8,5.846,6.8a5.161,5.161,0,0,0,5.328-4.319h-1.6a3.6,3.6,0,0,1-3.725,2.819c-2.405,0-4.294-1.862-4.294-5.3s1.888-5.3,4.294-5.3a3.6,3.6,0,0,1,3.725,2.819ZM282.4.154h8.1V-1.268h-6.492v-4.5h5.975V-7.192h-5.975v-4.475H290.4v-1.423H282.4Zm20.863-9.932h1.552c-.071-2-1.914-3.492-4.475-3.492-2.535,0-4.526,1.474-4.526,3.7,0,1.785,1.293,2.845,3.363,3.44l1.629.466c1.4.388,2.638.879,2.638,2.2,0,1.448-1.4,2.405-3.233,2.405-1.578,0-2.974-.7-3.1-2.2h-1.655c.155,2.173,1.914,3.647,4.759,3.647C303.267.387,305-1.294,305-3.441c0-2.483-2.354-3.285-3.725-3.647L299.93-7.45c-.983-.259-2.561-.776-2.561-2.2,0-1.267,1.164-2.2,2.923-2.2C301.9-11.847,303.112-11.084,303.267-9.778Z",transform:"translate(92 100)","data-x":"92","data-y":"127"}}),r("rect",{attrs:{width:"304",height:"25",fill:"#092447",transform:"translate(93 80)"}})]),r("g",{attrs:{fill:"#fff"}},[r("path",{attrs:{d:"M86.236-92.364H63.776v53.648H63L26.358-92.364H6.99V.748H29.5V-52.991h.591L67.14.748h19.1Z",transform:"translate(87 92)"}}),r("path",{attrs:{d:"M29.352.748H50.993L67.77-55.719H68.5L85.274.748H106.96l27.052-93.112H109.188L95.094-31.213h-.773L78.272-92.364H57.995L41.946-31.35h-.773L27.124-92.364H2.255Z",transform:"translate(181 92)"}}),r("path",{attrs:{d:"M57.342-64.438h21.55C78.71-81.851,64.843-93.626,43.2-93.626c-21.278,0-36.6,11.594-36.463,28.916-.045,14.14,9.866,22.1,25.96,25.779l9.729,2.273c10.23,2.364,14.822,5.138,14.912,10.366-.091,5.683-5.41,9.639-14.458,9.639-9.957,0-16.5-4.637-17-13.594H4.33C4.6-8.471,19.742,1.941,43.156,1.941c23.187,0,36.917-10.5,37.008-28.188-.091-14.867-10.139-23.96-28.506-28.006l-8-1.819C35.2-57.891,29.835-60.71,30.017-66.257c.045-5.092,4.41-8.775,13.139-8.775C51.931-75.031,56.75-71.076,57.342-64.438Z",transform:"translate(317 94)"}})])])])}),[],!1,null,"421a54ba",null);e.default=component.exports},326:function(t,e,r){"use strict";r(309)},349:function(t,e,r){"use strict";r.r(e);var n={name:"IndexPage",head:function(){return{title:"Norwegian Web Services"}}},l=(r(326),r(83)),c=r(122),h=r.n(c),o=r(348),d=r(351),m=r(325),v=r(350),f=r(307),L=r(323),V=r(301),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-page"},[r("div",{staticClass:"logo"},[r("nws-logo",{staticClass:"ma-12",attrs:{animate:"",width:400}}),r("v-icon",{attrs:{color:"white",size:"60"}},[t._v("mdi-arrow-down-drop-circle-outline")])],1),r("v-container",{staticClass:"pa-0"},[r("v-card",{staticClass:"rounded-xl ma-12 pa-6"},[r("div",{staticClass:"text-h4"},[t._v("Vi bygger der behovene finnes!")]),r("div",{staticClass:"text-body-1 my-6"},[t._v("Norwegian Web Services AS eksisterer for å bygge små og middels store nettbaserte tjenester der behov oppstår.\nEn passiv inntektsmodell, ofte i form av abonnementsløsninger, skaper maksimal verdi til minimalt vedlikehold.")]),r("div",{staticClass:"text-body-1 mb-6"},[t._v("Vi er et litet team på tre personer med nødvendig spisskompetanse innen utvikling og markedsføring. Tjenester\nvar har produsert og som er live i dag er "),r("a",{attrs:{href:"https://www.xn--reservertsk-pgb.no/",target:"_new"}},[t._v("reservertsøk.no")]),t._v(".")]),r("v-list-item",{staticClass:"px-0",attrs:{"two-line":""}},[r("v-list-item-avatar",{staticClass:"my-0 rounded-xl",attrs:{size:"60",tile:""}},[r("v-img",{attrs:{src:"img/pontus_aurdal.jpg","lazy-src":"https://app.iotnite.com/img/placeholder.jpg",alt:"Pontus Aurdal",contain:""}})],1),r("v-list-item-content",{staticClass:"pa-0"},[r("v-list-item-title",[t._v("Pontus Edvard Aurdal")]),r("v-list-item-subtitle",[t._v("Daglig leder")])],1)],1)],1)],1)],1)}),[],!1,null,"061ef3ba",null);e.default=component.exports;h()(component,{NwsLogo:r(322).default}),h()(component,{VCard:o.a,VContainer:d.a,VIcon:m.a,VImg:v.a,VListItem:f.a,VListItemAvatar:L.a,VListItemContent:V.a,VListItemSubtitle:V.b,VListItemTitle:V.c})}}]);