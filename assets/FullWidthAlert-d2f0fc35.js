import{j as e,a as s,F as z}from"./jsx-runtime-ad672792.js";import{r as T}from"./index-f1f749bf.js";import{A as N}from"./Alert-84d62a08.js";import{T as m}from"./Typography-f5dd8748.js";import{c as u,C as b,a as w,b as A}from"./Clear-a9f76abf.js";import{B}from"./Button-7d415009.js";const x=u([e("path",{d:"M12 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm1 13h-2v-2h2v2zm0-4h-2V7h2v6z",opacity:".3"},"0"),e("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"},"1")],"ErrorTwoTone"),S=u([e("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm4 10.59L14.59 16 12 13.41 9.41 16 8 14.59 10.59 12 8 9.41 9.41 8 12 10.59 14.59 8 16 9.41 13.41 12 16 14.59z",opacity:".3"},"0"),e("path",{d:"M14.59 8 12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"HighlightOffTwoTone"),V=u([e("path",{d:"M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 13h-2v-6h2v6zm0-8h-2V7h2v2z",opacity:".3"},"0"),e("path",{d:"M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"},"1")],"InfoTwoTone");function D(a){switch(a){case"warning":return e(x,{className:"text-warning",fontSize:"large"});case"info":return e(V,{className:"text-info",fontSize:"large"});case"danger":return e(S,{className:"text-danger",fontSize:"large"});case"success":return e(A,{className:"text-success",fontSize:"large"});default:return e(z,{})}}function f(a){const{config:t,variant:r,className:i}=a;return t&&("onClick"in t||"href"in t)?e(w,{title:t.tooltipText??"",enterNextDelay:300,children:e("span",{className:i,"data-tip-disable":!1,children:e(B,{variant:r,size:"sm",disabled:t.isDisabled,onClick:n=>{"onClick"in t?(n.preventDefault(),t.onClick(n)):"href"in t&&(n.preventDefault(),window.open(t.href,"_blank","noopener"))},children:t.text})})}):null}function p(a){const{title:t,description:r,primaryButtonConfig:i,secondaryButtonConfig:n,show:h,onClose:o,autoCloseAfterDelayInSeconds:c,variant:l="info",transition:g,isGlobal:C=!0}=a,y=D(l);T.useEffect(()=>{let d;return o&&c&&(d=setTimeout(o,c*1e3)),()=>{d&&clearTimeout(d)}},[o,c]);const v=l?`alert-${l}`:"";return e(N,{variant:l,show:h,dismissible:!1,transition:g,className:`FullWidthAlert bootstrap-4-backport ${C?"global":""} ${v}`,children:s("div",{className:`gridContainer ${o?"hasCloseButton":""}`,children:[e("span",{className:"iconArea",children:y}),s("span",{className:"mainContent",children:[s("span",{className:"messageArea",children:[e(m,{variant:"smallText2",children:t}),t&&r&&e("div",{className:"SRC-marginBottomTen"}),e(m,{variant:"smallText1",children:r})]}),s("span",{className:"buttonArea",children:[n&&e(f,{className:"secondaryButton",config:n,variant:"tertiary"}),i&&e(f,{className:"primaryButton",config:i,variant:"sds-primary"})]})]}),o&&e("button",{className:"closeAlert",onClick:o,children:e(b,{fontSize:"large"})})]})})}try{p.displayName="FullWidthAlert",p.__docgenInfo={description:`Nav bar item, displayed when files have been added to the Download Cart.
This must be configured with the URL of a page dedicated to showing the Download Cart.`,displayName:"FullWidthAlert",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!1,type:{name:"ReactNode"}},primaryButtonConfig:{defaultValue:null,description:"",name:"primaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},secondaryButtonConfig:{defaultValue:null,description:"",name:"secondaryButtonConfig",required:!1,type:{name:"AlertButtonConfig"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},autoCloseAfterDelayInSeconds:{defaultValue:null,description:"",name:"autoCloseAfterDelayInSeconds",required:!1,type:{name:"number"}},isGlobal:{defaultValue:null,description:"",name:"isGlobal",required:!1,type:{name:"boolean"}}}}}catch{}export{p as F,V as I};
//# sourceMappingURL=FullWidthAlert-d2f0fc35.js.map
