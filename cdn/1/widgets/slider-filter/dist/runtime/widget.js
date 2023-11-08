System.register(["jimu-core","jimu-ui","calcite-components"],(function(e,t){var a={},s={},n={};return{setters:[function(e){a.DataSourceComponent=e.DataSourceComponent,a.DataSourceManager=e.DataSourceManager,a.React=e.React,a.jsx=e.jsx},function(e){s.Button=e.Button,s.defaultMessages=e.defaultMessages,s.hooks=e.hooks},function(e){n.CalciteSlider=e.CalciteSlider}],execute:function(){e((()=>{var e={145:e=>{"use strict";e.exports=n},891:e=>{"use strict";e.exports=a},726:e=>{"use strict";e.exports=s}},t={};function i(a){var s=t[a];if(void 0!==s)return s.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var a in t)i.o(t,a)&&!i.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.p="";var r={};return i.p=window.jimuConfig.baseUrl,(()=>{"use strict";i.r(r),i.d(r,{__set_webpack_public_path__:()=>c,default:()=>u});var e=i(891),t=i(726);const a={_widgetLabel:"Slider Filter",printPlaceholder:"Select or switch to a webmap to enable slider filter.",chooseMapTip:"Please select a map with 2D data.",chooseWeightType:"Please select whether to use AND or OR.",SetWeights:"Use the sliders to set the minimum visible values."};var s=i(145);const{useState:n,useEffect:l,useMemo:o}=e.React,u=i=>{const{id:r,config:u,useMapWidgetIds:c,useDataSources:d}=i,g=t.hooks.useTranslate(a,t.defaultMessages),p=o((()=>e.DataSourceManager.getInstance()),[]),[m,f]=n(!1),[x,h]=n(null);l((()=>(d&&1===d.length&&d[0].fields&&d[0].fields.length>0&&f(!0),()=>{f(!1)})),[d]),l((()=>{if(m){const e=u.fields.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t.name]:t.min})),{});h(e)}return()=>{h(null)}}),[m,u]);const j=e=>t=>{((e,t)=>{const a=u.fields.reduce(((a,s)=>Object.assign(Object.assign({},a),{[s.name]:s.name===e?t:x[s.name]})),{}),s=p.getDataSource(d[0].dataSourceId),n={where:u.fields.reduce(((e,t,s)=>0===s?e:e.concat(" ",u.logicOp," ",t.name," >= ",a[t.name].toString())),u.fields[0].name.concat(" >= ",a[u.fields[0].name].toString()))};s.updateQueryParams(n,c[0]),h(a)})(e,+t.target.value)};return m?(0,e.jsx)("div",{className:"widget-use-feature-layer",style:{width:"100%",height:"100%",maxHeight:"800px",overflow:"auto"}},(0,e.jsx)("div",{style:{textAlign:"center",paddingLeft:"5px",paddingRight:"5px"}},(0,e.jsx)("h3",null,g("Slider Filter")),(0,e.jsx)("div",null,g("Set the value for each filter field using the slider."))),(0,e.jsx)("div",{style:{paddingTop:"10px"}},(0,e.jsx)(e.DataSourceComponent,{useDataSource:d[0],widgetId:r},u.fields.map((t=>(0,e.jsx)("div",null,(0,e.jsx)("div",{style:{textAlign:"left",paddingLeft:"5px"}},(0,e.jsx)("h5",null,t.label)),(0,e.jsx)(s.CalciteSlider,{value:x?x[t.name]:t.min,onCalciteSliderChange:j(t.name),min:t.min,max:t.max,step:(t.max-t.min)/100}),(0,e.jsx)("div",{style:{textAlign:"right",paddingRight:"5px",display:"flex",flexDirection:"row-reverse"}},(0,e.jsx)("span",null,(0,e.jsx)("input",{style:{flex:"1 0 30px",textAlign:"right"},value:x?x[t.name]:t.min,onChange:j(t.name)})),(0,e.jsx)("span",null,g("Minimum: ")))))),(0,e.jsx)(t.Button,{className:"w-100",title:"reset-button",disabled:!m,onClick:()=>{const e=u.fields.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t.name]:t.min})),{});p.getDataSource(d[0].dataSourceId).updateQueryParams({where:""},c[0]),h(e)}},g("Reset"))))):(0,e.jsx)("h3",null,g("Please configure the data source and select fields."))};function c(e){i.p=e}})(),r})())}}}));