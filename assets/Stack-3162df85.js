import{_ as v}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as f}from"./extends-98964cd2.js";import{r as u}from"./index-f1f749bf.js";import{s as k,e as h,D as m,F as p,G as j,H as V,I as x,J as b}from"./styled-42ab246b.js";import{j as P}from"./jsx-runtime-670450c2.js";import{e as B}from"./extendSxProp-63b32eb6.js";const D=["component","direction","spacing","divider","children"];function R(e,o){const t=u.Children.toArray(e).filter(Boolean);return t.reduce((i,c,s)=>(i.push(c),s<t.length-1&&i.push(u.cloneElement(o,{key:`separator-${s}`})),i),[])}const S=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],_=({ownerState:e,theme:o})=>{let t=f({display:"flex",flexDirection:"column"},m({theme:o},p({values:e.direction,breakpoints:o.breakpoints.values}),i=>({flexDirection:i})));if(e.spacing){const i=j(o),c=Object.keys(o.breakpoints.values).reduce((n,r)=>((typeof e.spacing=="object"&&e.spacing[r]!=null||typeof e.direction=="object"&&e.direction[r]!=null)&&(n[r]=!0),n),{}),s=p({values:e.direction,base:c}),a=p({values:e.spacing,base:c});typeof s=="object"&&Object.keys(s).forEach((n,r,l)=>{if(!s[n]){const g=r>0?s[l[r-1]]:"column";s[n]=g}}),t=V(t,m({theme:o},a,(n,r)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${S(r?s[r]:e.direction)}`]:b(i,n)}})))}return t=x(o.breakpoints,t),t},F=k("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>[o.root]})(_),E=u.forwardRef(function(o,t){const i=h({props:o,name:"MuiStack"}),c=B(i),{component:s="div",direction:a="column",spacing:d=0,divider:n,children:r}=c,l=v(c,D);return P(F,f({as:s,ownerState:{direction:a,spacing:d},ref:t},l,{children:n?R(r,n):r}))}),M=E;export{M as S};
//# sourceMappingURL=Stack-3162df85.js.map
