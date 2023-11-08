"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[2264,7182],{7182:(e,t,n)=>{var s;n.d(t,{Hy:()=>h,OF:()=>c,TD:()=>m,Tu:()=>f,VO:()=>d,aV:()=>a,kq:()=>u,rH:()=>s}),function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.UnexpectedToken="UnexpectedToken",e.Unrecognised="Unrecognised",e.UnrecognisedType="UnrecognisedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference"}(s||(s={}));const r={[s.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[s.LogicError]:"Logic error - {reason}",[s.NeverReach]:"Encountered unreachable logic",[s.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[s.ModuleAccessorMustBeString]:"Module accessor must be a string",[s.ModuleExportNotFound]:"Module has no export with provided identifier",[s.ModulesNotSupported]:"Current profile does not support modules",[s.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[s.FunctionNotFound]:"Function not found",[s.FieldNotFound]:"Key not found - {key}",[s.CircularModules]:"Circular module dependencies are not allowed",[s.Cancelled]:"Execution cancelled",[s.UnsupportedHashType]:"Type not supported in hash function",[s.IllegalResult]:"Value is not a supported return type",[s.PortalRequired]:"Portal is required",[s.InvalidParameter]:"Invalid parameter",[s.WrongNumberOfParameters]:"Call with wrong number of parameters",[s.Unrecognised]:"Unrecognised code structure",[s.UnrecognisedType]:"Unrecognised type",[s.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[s.BooleanConditionRequired]:"Conditions must use booleans",[s.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[s.NoFunctionInArray]:"Arrays cannot contain functions.",[s.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[s.KeyAccessorMustBeString]:"Accessor must be a string",[s.KeyMustBeString]:"Object keys must be a string",[s.Immutable]:"Object is immutable",[s.UnexpectedToken]:"Unexpected token",[s.MemberOfNull]:"Cannot access property of null object",[s.MaximumCallDepth]:"Exceeded maximum function depth",[s.OutOfBounds]:"Out of bounds",[s.InvalidIdentifier]:"Identifier not recognised",[s.CallNonFunction]:"Expression is not a function",[s.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[s.AssignModuleFunction]:"Cannot assign function to module variable",[s.UnsupportedUnaryOperator]:"Unsupported unary operator",[s.UnsupportedOperator]:"Unsupported operator",[s.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[s.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&"};class i extends Error{constructor(...e){super(...e)}}class o extends i{constructor(e,t){super(l(t)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,o),t&&t.loc&&(this.loc=t.loc)}}class a extends Error{constructor(e,t,n,s){super("Execution error - "+l(n)+h(r[t],s)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,a),n&&n.loc&&(this.loc=n.loc)}}function l(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class c extends Error{constructor(e,t,n,s){super("Compilation error - "+l(n)+h(r[t],s)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,c),n&&n.loc&&(this.loc=n.loc)}}class u extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,u)}}function h(e,t){try{if(!t)return e;for(const n in t){let s=t[n];s||(s=""),e=e.replace("{"+n+"}",t[n])}}catch(e){}return e}function d(e,t,n){return"esri.arcade.arcadeexecutionerror"===n.declaredRootClass||"esri.arcade.arcadecompilationerror"===n.declaredRootClass?null===n.loc&&t&&t.loc?new o(n,{cause:n}):n:("esri.arcade.featureset.support.featureseterror"===n.declaredRootClass||"esri.arcade.featureset.support.sqlerror"===n.declaredRootClass||n.declaredRootClass,t&&t.loc?new o(n,{cause:n}):n)}var m;!function(e){e.UnrecognisedUri="UnrecognisedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(m||(m={}));const p={[m.UnrecognisedUri]:"Unrecognised uri - {uri}",[m.UnsupportedUriProtocol]:"Unrecognised uri protocol"};class f extends Error{constructor(e,t){super(h(p[e],t)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,f)}}},26488:(e,t,n)=>{n.d(t,{Q:()=>a});var s=n(7753),r=n(61681),i=n(17135),o=n(80657);class a{constructor(e=9,t){this._compareMinX=h,this._compareMinY=d,this._toBBox=e=>e,this._maxEntries=Math.max(4,e||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),t&&("function"==typeof t?this._toBBox=t:this._initFormat(t)),this.clear()}destroy(){this.clear(),I.prune(),M.prune(),b.prune(),B.prune()}all(e){this._all(this._data,e)}search(e,t){let n=this._data;const s=this._toBBox;if(x(e,n))for(I.clear();n;){for(let r=0,i=n.children.length;r<i;r++){const i=n.children[r],o=n.leaf?s(i):i;x(e,o)&&(n.leaf?t(i):g(e,o)?this._all(i,t):I.push(i))}n=I.pop()}}collides(e){let t=this._data;const n=this._toBBox;if(!x(e,t))return!1;for(I.clear();t;){for(let s=0,r=t.children.length;s<r;s++){const r=t.children[s],i=t.leaf?n(r):r;if(x(e,i)){if(t.leaf||g(e,i))return!0;I.push(r)}}t=I.pop()}return!1}load(e){if(!e.length)return this;if(e.length<this._minEntries){for(let t=0,n=e.length;t<n;t++)this.insert(e[t]);return this}let t=this._build(e.slice(0,e.length),0,e.length-1,0);if(this._data.children.length)if(this._data.height===t.height)this._splitRoot(this._data,t);else{if(this._data.height<t.height){const e=this._data;this._data=t,t=e}this._insert(t,this._data.height-t.height-1,!0)}else this._data=t;return this}insert(e){return e&&this._insert(e,this._data.height-1),this}clear(){return this._data=new E([]),this}remove(e){if(!e)return this;let t,n=this._data,i=null,o=0,a=!1;const l=this._toBBox(e);for(b.clear(),B.clear();n||b.length>0;){if(n||(n=(0,r.j0)(b.pop()),i=b.data[b.length-1],o=B.pop()??0,a=!0),n.leaf&&(t=(0,s.cq)(n.children,e,n.children.length,n.indexHint),-1!==t))return n.children.splice(t,1),b.push(n),this._condense(b),this;a||n.leaf||!g(n,l)?i?(o++,n=i.children[o],a=!1):n=null:(b.push(n),B.push(o),o=0,i=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(e){return this._data=e,this}_all(e,t){let n=e;for(M.clear();n;){if(!0===n.leaf)for(const e of n.children)t(e);else M.pushArray(n.children);n=M.pop()??null}}_build(e,t,n,s){const r=n-t+1;let i=this._maxEntries;if(r<=i){const s=new E(e.slice(t,n+1));return l(s,this._toBBox),s}s||(s=Math.ceil(Math.log(r)/Math.log(i)),i=Math.ceil(r/i**(s-1)));const o=new S([]);o.height=s;const a=Math.ceil(r/i),c=a*Math.ceil(Math.sqrt(i));y(e,t,n,c,this._compareMinX);for(let r=t;r<=n;r+=c){const t=Math.min(r+c-1,n);y(e,r,t,a,this._compareMinY);for(let n=r;n<=t;n+=a){const r=Math.min(n+a-1,t);o.children.push(this._build(e,n,r,s-1))}}return l(o,this._toBBox),o}_chooseSubtree(e,t,n,s){for(;s.push(t),!0!==t.leaf&&s.length-1!==n;){let n,s=1/0,r=1/0;for(let i=0,o=t.children.length;i<o;i++){const o=t.children[i],a=m(o),l=f(e,o)-a;l<r?(r=l,s=a<s?a:s,n=o):l===r&&a<s&&(s=a,n=o)}t=n||t.children[0]}return t}_insert(e,t,n){const s=this._toBBox,r=n?e:s(e);b.clear();const i=this._chooseSubtree(r,this._data,t,b);for(i.children.push(e),u(i,r);t>=0&&b.data[t].children.length>this._maxEntries;)this._split(b,t),t--;this._adjustParentBBoxes(r,b,t)}_split(e,t){const n=e.data[t],s=n.children.length,r=this._minEntries;this._chooseSplitAxis(n,r,s);const i=this._chooseSplitIndex(n,r,s);if(!i)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const o=n.children.splice(i,n.children.length-i),a=n.leaf?new E(o):new S(o);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),t?e.data[t-1].children.push(a):this._splitRoot(n,a)}_splitRoot(e,t){this._data=new S([e,t]),this._data.height=e.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(e,t,n){let s,r,i;s=r=1/0;for(let o=t;o<=n-t;o++){const t=c(e,0,o,this._toBBox),a=c(e,o,n,this._toBBox),l=_(t,a),u=m(t)+m(a);l<s?(s=l,i=o,r=u<r?u:r):l===s&&u<r&&(r=u,i=o)}return i}_chooseSplitAxis(e,t,n){const s=e.leaf?this._compareMinX:h,r=e.leaf?this._compareMinY:d;this._allDistMargin(e,t,n,s)<this._allDistMargin(e,t,n,r)&&e.children.sort(s)}_allDistMargin(e,t,n,s){e.children.sort(s);const r=this._toBBox,i=c(e,0,t,r),o=c(e,n-t,n,r);let a=p(i)+p(o);for(let s=t;s<n-t;s++){const t=e.children[s];u(i,e.leaf?r(t):t),a+=p(i)}for(let s=n-t-1;s>=t;s--){const t=e.children[s];u(o,e.leaf?r(t):t),a+=p(o)}return a}_adjustParentBBoxes(e,t,n){for(let s=n;s>=0;s--)u(t.data[s],e)}_condense(e){for(let t=e.length-1;t>=0;t--){const n=e.data[t];if(0===n.children.length)if(t>0){const r=e.data[t-1],i=r.children;i.splice((0,s.cq)(i,n,i.length,r.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(e){const t=["return a"," - b",";"];this._compareMinX=new Function("a","b",t.join(e[0])),this._compareMinY=new Function("a","b",t.join(e[1])),this._toBBox=new Function("a","return {minX: a"+e[0]+", minY: a"+e[1]+", maxX: a"+e[2]+", maxY: a"+e[3]+"};")}}function l(e,t){c(e,0,e.children.length,t,e)}function c(e,t,n,s,r){r||(r=new E([])),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(let i,o=t;o<n;o++)i=e.children[o],u(r,e.leaf?s(i):i);return r}function u(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function h(e,t){return e.minX-t.minX}function d(e,t){return e.minY-t.minY}function m(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function p(e){return e.maxX-e.minX+(e.maxY-e.minY)}function f(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function _(e,t){const n=Math.max(e.minX,t.minX),s=Math.max(e.minY,t.minY),r=Math.min(e.maxX,t.maxX),i=Math.min(e.maxY,t.maxY);return Math.max(0,r-n)*Math.max(0,i-s)}function g(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function x(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function y(e,t,n,s,i){const a=[t,n];for(;a.length;){const t=(0,r.j0)(a.pop()),n=(0,r.j0)(a.pop());if(t-n<=s)continue;const l=n+Math.ceil((t-n)/s/2)*s;(0,o.q)(e,l,n,t,i),a.push(n,l,l,t)}}const I=new i.Z,M=new i.Z,b=new i.Z,B=new i.Z({deallocator:void 0});class N{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends N{constructor(){super(...arguments),this.height=1,this.indexHint=new s.SO}}class E extends v{constructor(e){super(),this.children=e,this.leaf=!0}}class S extends v{constructor(e){super(),this.children=e,this.leaf=!1}}},61107:(e,t,n)=>{n.d(t,{N:()=>s});const s={convertToGEGeometry:function(e,t){return null==t?null:e.convertJSONToGeometry(t)},exportPoint:function(e,t,n){const s=new r(e.getPointX(t),e.getPointY(t),n),i=e.hasZ(t),o=e.hasM(t);return i&&(s.z=e.getPointZ(t)),o&&(s.m=e.getPointM(t)),s},exportPolygon:function(e,t,n){return new i(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportPolyline:function(e,t,n){return new o(e.exportPaths(t),n,e.hasZ(t),e.hasM(t))},exportMultipoint:function(e,t,n){return new a(e.exportPoints(t),n,e.hasZ(t),e.hasM(t))},exportExtent:function(e,t,n){const s=e.hasZ(t),r=e.hasM(t),i=new l(e.getXMin(t),e.getYMin(t),e.getXMax(t),e.getYMax(t),n);if(s){const n=e.getZExtent(t);i.zmin=n.vmin,i.zmax=n.vmax}if(r){const n=e.getMExtent(t);i.mmin=n.vmin,i.mmax=n.vmax}return i}};class r{constructor(e,t,n){this.x=e,this.y=t,this.spatialReference=n,this.z=void 0,this.m=void 0}}class i{constructor(e,t,n,s){this.rings=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class o{constructor(e,t,n,s){this.paths=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class a{constructor(e,t,n,s){this.points=e,this.spatialReference=t,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),s&&(this.hasM=s)}}class l{constructor(e,t,n,s,r){this.xmin=e,this.ymin=t,this.xmax=n,this.ymax=s,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}},33480:(e,t,n)=>{function s(e,t){return e?t?4:3:t?3:2}function r(e,t,n,r,a){if(null==t||!t.lengths.length)return null;const l="upperLeft"===a?.originPosition?-1:1;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const c=e.coords,u=[],h=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:m}=t,p=s(n,r);let f=0;for(const e of d){const t=i(h,m,f,e,n,r,l);t&&u.push(t),f+=e*p}if(u.sort(((e,t)=>{let s=l*e[2]-l*t[2];return 0===s&&n&&(s=e[4]-t[4]),s})),u.length){let e=6*u[0][2];c[0]=u[0][0]/e,c[1]=u[0][1]/e,n&&(e=6*u[0][4],c[2]=0!==e?u[0][3]/e:0),(c[0]<h[0]||c[0]>h[1]||c[1]<h[2]||c[1]>h[3]||n&&(c[2]<h[4]||c[2]>h[5]))&&(c.length=0)}if(!c.length){const e=t.lengths[0]?o(m,0,d[0],n,r):null;if(!e)return null;c[0]=e[0],c[1]=e[1],n&&e.length>2&&(c[2]=e[2])}return e}function i(e,t,n,r,i,o,a=1){const l=s(i,o);let c=n,u=n+l,h=0,d=0,m=0,p=0,f=0;for(let n=0,s=r-1;n<s;n++,c+=l,u+=l){const n=t[c],s=t[c+1],r=t[c+2],o=t[u],a=t[u+1],l=t[u+2];let _=n*a-o*s;p+=_,h+=(n+o)*_,d+=(s+a)*_,i&&(_=n*l-o*r,m+=(r+l)*_,f+=_),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),s<e[2]&&(e[2]=s),s>e[3]&&(e[3]=s),i&&(r<e[4]&&(e[4]=r),r>e[5]&&(e[5]=r))}if(p*a>0&&(p*=-1),f*a>0&&(f*=-1),!p)return null;const _=[h,d,.5*p];return i&&(_[3]=m,_[4]=.5*f),_}function o(e,t,n,r,i){const o=s(r,i);let h=t,d=t+o,m=0,p=0,f=0,_=0;for(let t=0,s=n-1;t<s;t++,h+=o,d+=o){const t=e[h],n=e[h+1],s=e[h+2],i=e[d],o=e[d+1],g=e[d+2],x=r?l(t,n,s,i,o,g):a(t,n,i,o);if(x)if(m+=x,r){const e=u(t,n,s,i,o,g);p+=x*e[0],f+=x*e[1],_+=x*e[2]}else{const e=c(t,n,i,o);p+=x*e[0],f+=x*e[1]}}return m>0?r?[p/m,f/m,_/m]:[p/m,f/m]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function a(e,t,n,s){const r=n-e,i=s-t;return Math.sqrt(r*r+i*i)}function l(e,t,n,s,r,i){const o=s-e,a=r-t,l=i-n;return Math.sqrt(o*o+a*a+l*l)}function c(e,t,n,s){return[e+.5*(n-e),t+.5*(s-t)]}function u(e,t,n,s,r,i){return[e+.5*(s-e),t+.5*(r-t),n+.5*(i-n)]}n.d(t,{Y:()=>r})},117:(e,t,n)=>{n.d(t,{H:()=>a});var s=n(39994),r=n(26488),i=n(24568);const o={minX:0,minY:0,maxX:0,maxY:0};class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new r.Q(9,(0,s.Z)("esri-csp-restrictions")?e=>({minX:e[0],minY:e[1],maxX:e[2],maxY:e[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const e=new Array(this._idByBounds.size);let t=0;this._idByBounds.forEach(((n,s)=>{e[t++]=s})),this._indexInvalid=!1,this._index.clear(),this._index.load(e)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((e=>this._idByBounds.has(e)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const e=(0,i.cS)();for(const t of this._boundsById.values())t&&(e[0]=Math.min(t[0],e[0]),e[1]=Math.min(t[1],e[1]),e[2]=Math.max(t[2],e[2]),e[3]=Math.max(t[3],e[3]));return e}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(e){const t=this._boundsById.get(e);this._boundsById.delete(e),t&&(this._idByBounds.delete(t),this._indexInvalid||this._index.remove(t))}forEachInBounds(e,t){this._loadIndex(),function(e,t,n){(function(e){o.minX=e[0],o.minY=e[1],o.maxX=e[2],o.maxY=e[3]})(t),e.search(o,n)}(this._index,e,(e=>t(this._idByBounds.get(e))))}get(e){return this._boundsById.get(e)}has(e){return this._boundsById.has(e)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(e,t){if(!this._indexInvalid){const t=this._boundsById.get(e);t&&(this._index.remove(t),this._idByBounds.delete(t))}this._boundsById.set(e,t),t&&(this._idByBounds.set(t,e),this._indexInvalid||(this._boundsToLoad.push(t),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},4811:(e,t,n)=>{n.d(t,{Z:()=>_});var s=n(70375),r=n(31355),i=n(13802),o=n(37116),a=n(24568),l=n(12065),c=n(117),u=n(33480),h=n(59958),d=n(15540);const m={getObjectId:e=>e.objectId,getAttributes:e=>e.attributes,getAttribute:(e,t)=>e.attributes[t],cloneWithGeometry:(e,t)=>new h.u_(t,e.attributes,null,e.objectId),getGeometry:e=>e.geometry,getCentroid:(e,t)=>(null==e.centroid&&(e.centroid=(0,u.Y)(new d.Z,e.geometry,t.hasZ,t.hasM)),e.centroid)};var p=n(34398);const f=(0,o.Ue)();class _{constructor(e){this.geometryInfo=e,this._boundsStore=new c.H,this._featuresById=new Map,this._markedIds=new Set,this.events=new r.Z,this.featureAdapter=m}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach((t=>{null!=t.geometry&&t.geometry.coords&&(e+=t.geometry.coords.length)})),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(null==this.fullBounds)return null;const[t,n,s,r]=this.fullBounds;return{xmin:t,ymin:n,xmax:s,ymax:r,spatialReference:(0,p.S2)(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const e=this._featuresById.get(t);e&&this._remove(e)}this._emitChanged()}forEachBounds(e,t){for(const n of e){const e=this._boundsStore.get(n.objectId);e&&t((0,o.JR)(f,e))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach((t=>e(t)))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,(e=>{t(this._featuresById.get(e))}))}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach(((t,n)=>{this._markedIds.has(n)||(e=!0,this._remove(t))})),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(null==t)return void i.Z.getLogger("esri.layers.graphics.data.FeatureStore").error(new s.Z("featurestore:invalid-feature","feature id is missing",{feature:e}));const n=this._featuresById.get(t);let r;if(this._markedIds.add(t),n?(e.displayId=n.displayId,r=this._boundsStore.get(t),this._boundsStore.delete(t)):null!=this.onFeatureAdd&&this.onFeatureAdd(e),null==e.geometry||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);r=(0,l.$)(null!=r?r:(0,a.Ue)(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),null!=r&&this._boundsStore.set(t,r),this._featuresById.set(t,e)}_remove(e){null!=this.onFeatureRemove&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}},66069:(e,t,n)=>{n.d(t,{_W:()=>d,iV:()=>f,oj:()=>g});var s=n(7753),r=n(92376),i=n(61107),o=n(35925),a=n(39536);const l=[0,0];function c(e,t){if(!t)return null;if("x"in t){const n={x:0,y:0};return[n.x,n.y]=e(t.x,t.y,l),null!=t.z&&(n.z=t.z),null!=t.m&&(n.m=t.m),n}if("xmin"in t){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=e(t.xmin,t.ymin,l),[n.xmax,n.ymax]=e(t.xmax,t.ymax,l),t.hasZ&&(n.zmin=t.zmin,n.zmax=t.zmax,n.hasZ=!0),t.hasM&&(n.mmin=t.mmin,n.mmax=t.mmax,n.hasM=!0),n}return"rings"in t?{rings:u(t.rings,e),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:u(t.paths,e),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:h(t.points,e),hasM:t.hasM,hasZ:t.hasZ}:null}function u(e,t){const n=[];for(const s of e)n.push(h(s,t));return n}function h(e,t){const n=[];for(const s of e){const e=t(s[0],s[1],[0,0]);n.push(e),s.length>2&&e.push(s[2]),s.length>3&&e.push(s[3])}return n}async function d(e,t){if(!e||!t)return;const n=Array.isArray(e)?e.map((e=>null!=e.geometry?e.geometry.spatialReference:null)).filter(s.pC):[e];await(0,r.initializeProjection)(n.map((e=>({source:e,dest:t}))))}const m=c.bind(null,a.hG),p=c.bind(null,a.R6);function f(e,t,n,s){if(!e)return e;if(n||(n=t,t=e.spatialReference),!(0,o.JY)(t)||!(0,o.JY)(n)||(0,o.fS)(t,n))return e;if((0,a.Q8)(t,n)){const t=(0,o.sS)(n)?m(e):p(e);return t.spatialReference=n,t}return(0,r.projectMany)(i.N,[e],t,n,null,s)[0]}const _=new class{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(e,t,n){if(!e||!e.length||!t||!n||(0,o.fS)(t,n))return e;const s={geometries:e,inSpatialReference:t,outSpatialReference:n,resolve:null};return this._jobs.push(s),new Promise((e=>{s.resolve=e,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const e=this._jobs.shift();if(!e)return;const{geometries:t,inSpatialReference:n,outSpatialReference:s,resolve:l}=e;(0,a.Q8)(n,s)?(0,o.sS)(s)?l(t.map(m)):l(t.map(p)):l((0,r.projectMany)(i.N,t,n,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}};function g(e,t,n){return _.push(e,t,n)}}}]);