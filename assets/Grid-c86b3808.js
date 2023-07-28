import{a as _,g as K,s as O,e as T,_ as I,f as L,v as S,t as k,h as D}from"./styled-96220216.js";import{_ as x}from"./emotion-use-insertion-effect-with-fallbacks.browser.esm-4abd396b.js";import{r as b}from"./index-8db94870.js";import{u as U}from"./useTheme-a5fe342b.js";import{j as N}from"./jsx-runtime-095bf462.js";import{e as Z}from"./extendSxProp-d749f662.js";const A=b.createContext(),z=A;function F(e){return _("MuiGrid",e)}const q=[0,1,2,3,4,5,6,7,8,9,10],H=["column-reverse","column","row-reverse","row"],J=["nowrap","wrap-reverse","wrap"],g=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],Q=K("MuiGrid",["root","container","item","zeroMinWidth",...q.map(e=>`spacing-xs-${e}`),...H.map(e=>`direction-xs-${e}`),...J.map(e=>`wrap-xs-${e}`),...g.map(e=>`grid-xs-${e}`),...g.map(e=>`grid-sm-${e}`),...g.map(e=>`grid-md-${e}`),...g.map(e=>`grid-lg-${e}`),...g.map(e=>`grid-xl-${e}`)]),$=Q,X=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function m(e){const r=parseFloat(e);return`${r}${String(e).replace(String(r),"")||"px"}`}function Y({theme:e,ownerState:r}){let i;return e.breakpoints.keys.reduce((t,n)=>{let o={};if(r[n]&&(i=r[n]),!i)return t;if(i===!0)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if(i==="auto")o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const a=S({values:r.columns,breakpoints:e.breakpoints.values}),u=typeof a=="object"?a[n]:a;if(u==null)return t;const p=`${Math.round(i/u*1e8)/1e6}%`;let c={};if(r.container&&r.item&&r.columnSpacing!==0){const s=e.spacing(r.columnSpacing);if(s!=="0px"){const l=`calc(${p} + ${m(s)})`;c={flexBasis:l,maxWidth:l}}}o=x({flexBasis:p,flexGrow:0,maxWidth:p},c)}return e.breakpoints.values[n]===0?Object.assign(t,o):t[e.breakpoints.up(n)]=o,t},{})}function ee({theme:e,ownerState:r}){const i=S({values:r.direction,breakpoints:e.breakpoints.values});return k({theme:e},i,t=>{const n={flexDirection:t};return t.indexOf("column")===0&&(n[`& > .${$.item}`]={maxWidth:"none"}),n})}function B({breakpoints:e,values:r}){let i="";Object.keys(r).forEach(n=>{i===""&&r[n]!==0&&(i=n)});const t=Object.keys(e).sort((n,o)=>e[n]-e[o]);return t.slice(0,t.indexOf(i))}function re({theme:e,ownerState:r}){const{container:i,rowSpacing:t}=r;let n={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{marginTop:`-${m(s)}`,[`& > .${$.item}`]:{paddingTop:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{marginTop:0,[`& > .${$.item}`]:{paddingTop:0}}})}return n}function ne({theme:e,ownerState:r}){const{container:i,columnSpacing:t}=r;let n={};if(i&&t!==0){const o=S({values:t,breakpoints:e.breakpoints.values});let a;typeof o=="object"&&(a=B({breakpoints:e.breakpoints.values,values:o})),n=k({theme:e},o,(u,p)=>{var c;const s=e.spacing(u);return s!=="0px"?{width:`calc(100% + ${m(s)})`,marginLeft:`-${m(s)}`,[`& > .${$.item}`]:{paddingLeft:m(s)}}:(c=a)!=null&&c.includes(p)?{}:{width:"100%",marginLeft:0,[`& > .${$.item}`]:{paddingLeft:0}}})}return n}function te(e,r,i={}){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[i[`spacing-xs-${String(e)}`]];const t=[];return r.forEach(n=>{const o=e[n];Number(o)>0&&t.push(i[`spacing-${n}-${String(o)}`])}),t}const ie=O("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:i}=e,{container:t,direction:n,item:o,spacing:a,wrap:u,zeroMinWidth:p,breakpoints:c}=i;let s=[];t&&(s=te(a,c,r));const l=[];return c.forEach(f=>{const d=i[f];d&&l.push(r[`grid-${f}-${String(d)}`])}),[r.root,t&&r.container,o&&r.item,p&&r.zeroMinWidth,...s,n!=="row"&&r[`direction-xs-${String(n)}`],u!=="wrap"&&r[`wrap-xs-${String(u)}`],...l]}})(({ownerState:e})=>x({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},e.wrap!=="wrap"&&{flexWrap:e.wrap}),ee,re,ne,Y);function oe(e,r){if(!e||e<=0)return[];if(typeof e=="string"&&!Number.isNaN(Number(e))||typeof e=="number")return[`spacing-xs-${String(e)}`];const i=[];return r.forEach(t=>{const n=e[t];if(Number(n)>0){const o=`spacing-${t}-${String(n)}`;i.push(o)}}),i}const se=e=>{const{classes:r,container:i,direction:t,item:n,spacing:o,wrap:a,zeroMinWidth:u,breakpoints:p}=e;let c=[];i&&(c=oe(o,p));const s=[];p.forEach(f=>{const d=e[f];d&&s.push(`grid-${f}-${String(d)}`)});const l={root:["root",i&&"container",n&&"item",u&&"zeroMinWidth",...c,t!=="row"&&`direction-xs-${String(t)}`,a!=="wrap"&&`wrap-xs-${String(a)}`,...s]};return D(l,F,r)},ae=b.forwardRef(function(r,i){const t=T({props:r,name:"MuiGrid"}),{breakpoints:n}=U(),o=Z(t),{className:a,columns:u,columnSpacing:p,component:c="div",container:s=!1,direction:l="row",item:f=!1,rowSpacing:d,spacing:v=0,wrap:M="wrap",zeroMinWidth:V=!1}=o,w=I(o,X),P=d||v,j=p||v,E=b.useContext(z),G=s?u||12:E,W={},y=x({},w);n.keys.forEach(h=>{w[h]!=null&&(W[h]=w[h],delete y[h])});const C=x({},o,{columns:G,container:s,direction:l,item:f,rowSpacing:P,columnSpacing:j,wrap:M,zeroMinWidth:V,spacing:v},W,{breakpoints:n.keys}),R=se(C);return N(z.Provider,{value:G,children:N(ie,x({ownerState:C,className:L(R.root,a),as:c,ref:i},y))})}),me=ae;export{me as G};
//# sourceMappingURL=Grid-c86b3808.js.map
