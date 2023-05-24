import{a as y,j as r,F as j}from"./jsx-runtime-095bf462.js";import{r as v}from"./index-8db94870.js";import{u as Ie,b1 as Fe,f as Le,cb as De,bL as Be,S as _e}from"./SynapseClient-1c560649.js";import{a as Me}from"./useDataAccessSubmission-dc463642.js";import{u as Ee}from"./useDownloadList-854d930b.js";import"./EntityTypeUtils-0c8e25ad.js";import"./getEndpoint-ac94413e.js";import{C as Ae}from"./CreateProjectModal-7ccecdba.js";import{I as Y}from"./IconSvg-d5f86620.js";import{U as He}from"./UserCard-828a61e8.js";import{_ as z}from"./objectWithoutPropertiesLoose-4f48578a.js";import{_ as C}from"./extends-98964cd2.js";import{e as ae,g as ie,s as A,o as R,f as se,i as _,j as le,F as xe,k as U}from"./styled-8ebe2b7d.js";import{u as Te}from"./useTheme-df5273c4.js";import{M as Ve}from"./Modal-b5857980.js";import{P as je}from"./Paper-ca64eb44.js";import{T as ze,r as We,g as ue}from"./utils-8d96ae5c.js";import{u as Oe}from"./useForkRef-2674f3de.js";import{d as Ge,o as we}from"./ownerWindow-698471fc.js";import{L as fe,a as me}from"./MenuList-3617d530.js";import{u as he,T as Ne}from"./Tooltip-fcb4b0de.js";import{F as ge}from"./Form-2769eaa7.js";import{B as Ue}from"./ButtonBase-92b85091.js";import{u as Ze}from"./useEnhancedEffect-c45cae33.js";const Ye=e=>{const t=v.useRef({});return v.useEffect(()=>{t.current=e}),t.current},ke=Ye;function qe(e){const{badgeContent:t,invisible:o=!1,max:n=99,showZero:a=!1}=e,f=ke({badgeContent:t,max:n});let c=o;o===!1&&t===0&&!a&&(c=!0);const{badgeContent:d,max:u=n}=c?f:e,s=d&&Number(d)>u?`${u}+`:d;return{badgeContent:d,invisible:c,max:u,displayValue:s}}function Xe(e){return ie("MuiBadge",e)}const Je=ae("MuiBadge",["root","badge","dot","standard","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","invisible","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"]),B=Je,Ke=["anchorOrigin","className","classes","component","components","componentsProps","children","overlap","color","invisible","max","badgeContent","slots","slotProps","showZero","variant"],te=10,re=4,Qe=e=>{const{color:t,anchorOrigin:o,invisible:n,overlap:a,variant:f,classes:c={}}=e,d={root:["root"],badge:["badge",f,n&&"invisible",`anchorOrigin${R(o.vertical)}${R(o.horizontal)}`,`anchorOrigin${R(o.vertical)}${R(o.horizontal)}${R(a)}`,`overlap${R(a)}`,t!=="default"&&`color${R(t)}`]};return le(d,Xe,c)},et=A("span",{name:"MuiBadge",slot:"Root",overridesResolver:(e,t)=>t.root})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),tt=A("span",{name:"MuiBadge",slot:"Badge",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.badge,t[o.variant],t[`anchorOrigin${R(o.anchorOrigin.vertical)}${R(o.anchorOrigin.horizontal)}${R(o.overlap)}`],o.color!=="default"&&t[`color${R(o.color)}`],o.invisible&&t.invisible]}})(({theme:e,ownerState:t})=>C({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:e.typography.fontFamily,fontWeight:e.typography.fontWeightMedium,fontSize:e.typography.pxToRem(12),minWidth:te*2,lineHeight:1,padding:"0 6px",height:te*2,borderRadius:te,zIndex:1,transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.enteringScreen})},t.color!=="default"&&{backgroundColor:(e.vars||e).palette[t.color].main,color:(e.vars||e).palette[t.color].contrastText},t.variant==="dot"&&{borderRadius:re,height:re*2,minWidth:re*2,padding:0},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular"&&{top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="rectangular"&&{bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular"&&{top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="rectangular"&&{bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular"&&{top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="right"&&t.overlap==="circular"&&{bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(50%, 50%)"}},t.anchorOrigin.vertical==="top"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular"&&{top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, -50%)"}},t.anchorOrigin.vertical==="bottom"&&t.anchorOrigin.horizontal==="left"&&t.overlap==="circular"&&{bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%",[`&.${B.invisible}`]:{transform:"scale(0) translate(-50%, 50%)"}},t.invisible&&{transition:e.transitions.create("transform",{easing:e.transitions.easing.easeInOut,duration:e.transitions.duration.leavingScreen})})),rt=v.forwardRef(function(t,o){var n,a,f,c,d,u;const s=se({props:t,name:"MuiBadge"}),{anchorOrigin:b={vertical:"top",horizontal:"right"},className:I,component:T,components:k={},componentsProps:m={},children:i,overlap:$="rectangular",color:P="default",invisible:N=!1,max:x=99,badgeContent:F,slots:h,slotProps:p,showZero:O=!1,variant:g="standard"}=s,S=z(s,Ke),{badgeContent:L,invisible:M,max:E,displayValue:q}=qe({max:x,invisible:N,badgeContent:F,showZero:O}),X=ke({anchorOrigin:b,color:P,overlap:$,variant:g,badgeContent:F}),W=M||L==null&&g!=="dot",{color:J=P,overlap:G=$,anchorOrigin:l=b,variant:w=g}=W?X:s,H=w!=="dot"?q:void 0,K=C({},s,{badgeContent:L,invisible:W,max:E,displayValue:H,showZero:O,anchorOrigin:l,color:J,overlap:G,variant:w}),ce=Qe(K),de=(n=(a=h==null?void 0:h.root)!=null?a:k.Root)!=null?n:et,pe=(f=(c=h==null?void 0:h.badge)!=null?c:k.Badge)!=null?f:tt,Q=(d=p==null?void 0:p.root)!=null?d:m.root,ee=(u=p==null?void 0:p.badge)!=null?u:m.badge,Se=he({elementType:de,externalSlotProps:Q,externalForwardedProps:S,additionalProps:{ref:o,as:T},ownerState:K,className:_(Q==null?void 0:Q.className,ce.root,I)}),Pe=he({elementType:pe,externalSlotProps:ee,ownerState:K,className:_(ce.badge,ee==null?void 0:ee.className)});return y(de,C({},Se,{children:[i,r(pe,C({},Pe,{children:H}))]}))}),ot=rt,nt=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function at(e,t,o){const n=t.getBoundingClientRect(),a=o&&o.getBoundingClientRect(),f=we(t);let c;if(t.fakeTransform)c=t.fakeTransform;else{const s=f.getComputedStyle(t);c=s.getPropertyValue("-webkit-transform")||s.getPropertyValue("transform")}let d=0,u=0;if(c&&c!=="none"&&typeof c=="string"){const s=c.split("(")[1].split(")")[0].split(",");d=parseInt(s[4],10),u=parseInt(s[5],10)}return e==="left"?a?`translateX(${a.right+d-n.left}px)`:`translateX(${f.innerWidth+d-n.left}px)`:e==="right"?a?`translateX(-${n.right-a.left-d}px)`:`translateX(-${n.left+n.width-d}px)`:e==="up"?a?`translateY(${a.bottom+u-n.top}px)`:`translateY(${f.innerHeight+u-n.top}px)`:a?`translateY(-${n.top-a.top+n.height-u}px)`:`translateY(-${n.top+n.height-u}px)`}function it(e){return typeof e=="function"?e():e}function Z(e,t,o){const n=it(o),a=at(e,t,n);a&&(t.style.webkitTransform=a,t.style.transform=a)}const st=v.forwardRef(function(t,o){const n=Te(),a={enter:n.transitions.easing.easeOut,exit:n.transitions.easing.sharp},f={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:c,appear:d=!0,children:u,container:s,direction:b="down",easing:I=a,in:T,onEnter:k,onEntered:m,onEntering:i,onExit:$,onExited:P,onExiting:N,style:x,timeout:F=f,TransitionComponent:h=ze}=t,p=z(t,nt),O=v.useRef(null),g=Oe(u.ref,O,o),S=l=>w=>{l&&(w===void 0?l(O.current):l(O.current,w))},L=S((l,w)=>{Z(b,l,s),We(l),k&&k(l,w)}),M=S((l,w)=>{const H=ue({timeout:F,style:x,easing:I},{mode:"enter"});l.style.webkitTransition=n.transitions.create("-webkit-transform",C({},H)),l.style.transition=n.transitions.create("transform",C({},H)),l.style.webkitTransform="none",l.style.transform="none",i&&i(l,w)}),E=S(m),q=S(N),X=S(l=>{const w=ue({timeout:F,style:x,easing:I},{mode:"exit"});l.style.webkitTransition=n.transitions.create("-webkit-transform",w),l.style.transition=n.transitions.create("transform",w),Z(b,l,s),$&&$(l)}),W=S(l=>{l.style.webkitTransition="",l.style.transition="",P&&P(l)}),J=l=>{c&&c(O.current,l)},G=v.useCallback(()=>{O.current&&Z(b,O.current,s)},[b,s]);return v.useEffect(()=>{if(T||b==="down"||b==="right")return;const l=Ge(()=>{O.current&&Z(b,O.current,s)}),w=we(O.current);return w.addEventListener("resize",l),()=>{l.clear(),w.removeEventListener("resize",l)}},[b,T,s]),v.useEffect(()=>{T||G()},[T,G]),r(h,C({nodeRef:O,onEnter:L,onEntered:E,onEntering:M,onExit:X,onExited:W,onExiting:q,addEndListener:J,appear:d,in:T,timeout:F},p,{children:(l,w)=>v.cloneElement(u,C({ref:g,style:C({visibility:l==="exited"&&!T?"hidden":void 0},x,u.props.style)},w))}))}),lt=st;function ct(e){return ie("MuiDrawer",e)}ae("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const dt=["BackdropProps"],pt=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],Re=(e,t)=>{const{ownerState:o}=e;return[t.root,(o.variant==="permanent"||o.variant==="persistent")&&t.docked,t.modal]},ut=e=>{const{classes:t,anchor:o,variant:n}=e,a={root:["root"],docked:[(n==="permanent"||n==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${R(o)}`,n!=="temporary"&&`paperAnchorDocked${R(o)}`]};return le(a,ct,t)},ft=A(Ve,{name:"MuiDrawer",slot:"Root",overridesResolver:Re})(({theme:e})=>({zIndex:(e.vars||e).zIndex.drawer})),Ce=A("div",{shouldForwardProp:xe,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:Re})({flex:"0 0 auto"}),mt=A(je,{name:"MuiDrawer",slot:"Paper",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.paper,t[`paperAnchor${R(o.anchor)}`],o.variant!=="temporary"&&t[`paperAnchorDocked${R(o.anchor)}`]]}})(({theme:e,ownerState:t})=>C({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(e.vars||e).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},t.anchor==="left"&&{left:0},t.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="right"&&{right:0},t.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},t.anchor==="left"&&t.variant!=="temporary"&&{borderRight:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="top"&&t.variant!=="temporary"&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="right"&&t.variant!=="temporary"&&{borderLeft:`1px solid ${(e.vars||e).palette.divider}`},t.anchor==="bottom"&&t.variant!=="temporary"&&{borderTop:`1px solid ${(e.vars||e).palette.divider}`})),$e={left:"right",right:"left",top:"down",bottom:"up"};function ht(e){return["left","right"].indexOf(e)!==-1}function gt(e,t){return e.direction==="rtl"&&ht(t)?$e[t]:t}const Ct=v.forwardRef(function(t,o){const n=se({props:t,name:"MuiDrawer"}),a=Te(),f={enter:a.transitions.duration.enteringScreen,exit:a.transitions.duration.leavingScreen},{anchor:c="left",BackdropProps:d,children:u,className:s,elevation:b=16,hideBackdrop:I=!1,ModalProps:{BackdropProps:T}={},onClose:k,open:m=!1,PaperProps:i={},SlideProps:$,TransitionComponent:P=lt,transitionDuration:N=f,variant:x="temporary"}=n,F=z(n.ModalProps,dt),h=z(n,pt),p=v.useRef(!1);v.useEffect(()=>{p.current=!0},[]);const O=gt(a,c),S=C({},n,{anchor:c,elevation:b,open:m,variant:x},h),L=ut(S),M=r(mt,C({elevation:x==="temporary"?b:0,square:!0},i,{className:_(L.paper,i.className),ownerState:S,children:u}));if(x==="permanent")return r(Ce,C({className:_(L.root,L.docked,s),ownerState:S,ref:o},h,{children:M}));const E=r(P,C({in:m,direction:$e[O],timeout:N,appear:p.current},$,{children:M}));return x==="persistent"?r(Ce,C({className:_(L.root,L.docked,s),ownerState:S,ref:o},h,{children:E})):r(ft,C({BackdropProps:C({},d,T,{transitionDuration:N}),className:_(L.root,L.modal,s),open:m,ownerState:S,onClose:k,hideBackdrop:I,ref:o},h,F,{children:E}))}),ve=Ct;function vt(e){return ie("MuiListItemButton",e)}const yt=ae("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),V=yt,bt=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],xt=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},Tt=e=>{const{alignItems:t,classes:o,dense:n,disabled:a,disableGutters:f,divider:c,selected:d}=e,s=le({root:["root",n&&"dense",!f&&"gutters",c&&"divider",a&&"disabled",t==="flex-start"&&"alignItemsFlexStart",d&&"selected"]},vt,o);return C({},o,s)},Ot=A(Ue,{shouldForwardProp:e=>xe(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:xt})(({theme:e,ownerState:t})=>C({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${V.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:U(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${V.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:U(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${V.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:U(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:U(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${V.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${V.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),wt=v.forwardRef(function(t,o){const n=se({props:t,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:f=!1,component:c="div",children:d,dense:u=!1,disableGutters:s=!1,divider:b=!1,focusVisibleClassName:I,selected:T=!1,className:k}=n,m=z(n,bt),i=v.useContext(fe),$=v.useMemo(()=>({dense:u||i.dense||!1,alignItems:a,disableGutters:s}),[a,i.dense,u,s]),P=v.useRef(null);Ze(()=>{f&&P.current&&P.current.focus()},[f]);const N=C({},n,{alignItems:a,dense:$.dense,disableGutters:s,divider:b,selected:T}),x=Tt(N),F=Oe(P,o);return r(fe.Provider,{value:$,children:r(Ot,C({ref:F,href:m.href||m.to,component:(m.href||m.to)&&c==="div"?"button":c,focusVisibleClassName:_(x.focusVisible,I),ownerState:N,className:_(x.root,k)},m,{classes:x,children:d}))})}),Nt=wt,oe=e=>y("svg",{...e,width:"30",height:"33",viewBox:"0 0 30 33",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M7.80432 14.0604L20.8862 6.64159",stroke:"#F8F9FA"}),r("path",{d:"M25.2369 8.80366L25.2369 23.9155",stroke:"#F8F9FA"}),r("path",{d:"M7.62979 19.3677L20.5417 26.9974",stroke:"#F8F9FA"}),r("circle",{cx:"24.65",cy:"4.69524",r:"4.19524",stroke:"#F8F9FA"}),r("circle",{cx:"24.65",cy:"28.1713",r:"4.19524",stroke:"#F8F9FA"}),r("circle",{cx:"4.69524",cy:"16.4335",r:"4.19524",stroke:"#F8F9FA"})]});try{oe.displayName="SynapseIconWhite",oe.__docgenInfo={description:"",displayName:"SynapseIconWhite",props:{}}}catch{}const ne=e=>y("svg",{width:"109",height:"15",viewBox:"0 0 109 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r("path",{d:"M9.31503 2.91881C9.25595 3.01716 9.19032 3.09255 9.11809 3.145C9.05246 3.19089 8.97039 3.21384 8.87192 3.21384C8.76031 3.21384 8.62906 3.15812 8.47806 3.04666C8.32706 2.9352 8.13672 2.81392 7.90695 2.68279C7.68377 2.54511 7.41131 2.42055 7.08967 2.30909C6.77457 2.19763 6.39055 2.14191 5.9376 2.14191C5.51091 2.14191 5.13346 2.20091 4.80523 2.31892C4.48357 2.43038 4.21114 2.58445 3.98795 2.78113C3.77132 2.97782 3.60721 3.21056 3.49561 3.47937C3.38402 3.74161 3.32822 4.0268 3.32822 4.33495C3.32822 4.72832 3.42341 5.05613 3.61378 5.31837C3.81071 5.57406 4.06673 5.79371 4.38182 5.97727C4.70348 6.16082 5.06453 6.32146 5.46496 6.45914C5.87197 6.59028 6.28554 6.72796 6.70565 6.87218C7.13236 7.0164 7.54592 7.18034 7.94633 7.36389C8.35335 7.54091 8.71438 7.7671 9.02948 8.04246C9.35112 8.31782 9.60713 8.65548 9.79752 9.05539C9.99445 9.4553 10.0929 9.94701 10.0929 10.5305C10.0929 11.1468 9.98791 11.727 9.77783 12.2712C9.56775 12.8088 9.25925 13.2776 8.85223 13.6775C8.45182 14.0774 7.95618 14.3921 7.36538 14.6216C6.78112 14.8511 6.11484 14.9658 5.36649 14.9658C4.44746 14.9658 3.61378 14.8019 2.86542 14.4741C2.11707 14.1397 1.47704 13.6906 0.945312 13.1268L1.49673 12.222C1.54925 12.1499 1.61161 12.0909 1.68382 12.045C1.76259 11.9925 1.84793 11.9663 1.93983 11.9663C2.02517 11.9663 2.12036 12.0024 2.22539 12.0745C2.33698 12.14 2.46171 12.2253 2.59956 12.3302C2.73742 12.4351 2.89496 12.5498 3.0722 12.6744C3.24945 12.7989 3.44966 12.9137 3.67286 13.0186C3.90261 13.1235 4.16191 13.212 4.45075 13.2841C4.73959 13.3497 5.06453 13.3825 5.42557 13.3825C5.87852 13.3825 6.28224 13.3202 6.63672 13.1956C6.9912 13.0711 7.2899 12.8973 7.53277 12.6744C7.78224 12.4449 7.97258 12.1728 8.10388 11.8581C8.23519 11.5435 8.30082 11.1927 8.30082 10.8059C8.30082 10.3797 8.20235 10.0323 8.00542 9.76345C7.81503 9.48809 7.56231 9.25861 7.24722 9.07505C6.93212 8.8915 6.57109 8.7374 6.16408 8.61284C5.75708 8.4817 5.34352 8.35061 4.92339 8.21947C4.50326 8.0818 4.0897 7.92445 3.6827 7.74743C3.2757 7.57041 2.91466 7.34093 2.59956 7.05903C2.28447 6.77713 2.02845 6.42635 1.83152 6.00677C1.64115 5.5806 1.54596 5.05613 1.54596 4.43329C1.54596 3.93502 1.64115 3.45314 1.83152 2.98765C2.02845 2.52216 2.31073 2.10913 2.67834 1.74854C3.05251 1.38795 3.50875 1.09948 4.04703 0.883124C4.59189 0.66677 5.21551 0.558594 5.91791 0.558594C6.70565 0.558594 7.42116 0.68316 8.06449 0.932294C8.71438 1.18143 9.28549 1.54202 9.77783 2.01406L9.31503 2.91881Z",fill:"#F8F9FA"}),r("path",{d:"M21.9847 9.19294V14.8083H20.0745V9.19294L14.9049 0.71582H16.5789C16.7496 0.71582 16.8841 0.758435 16.9826 0.843666C17.0811 0.922339 17.1664 1.02724 17.2386 1.15836L20.4683 6.63604C20.5865 6.86552 20.6948 7.08187 20.7933 7.2851C20.8917 7.48178 20.9771 7.68176 21.0493 7.88499C21.1215 7.68176 21.2035 7.48178 21.2955 7.2851C21.3874 7.08187 21.4891 6.86552 21.6007 6.63604L24.8206 1.15836C24.8797 1.04691 24.9617 0.945286 25.0668 0.853499C25.1718 0.761713 25.3064 0.71582 25.4705 0.71582H27.1543L21.9847 9.19294Z",fill:"#F8F9FA"}),r("path",{d:"M43.6078 0.71582V14.8083H42.6527C42.5017 14.8083 42.3737 14.7821 42.2687 14.7296C42.1702 14.6772 42.0717 14.5886 41.9733 14.4641L33.8104 3.84311C33.8235 4.00701 33.8333 4.16764 33.8399 4.32499C33.8465 4.48234 33.8497 4.62985 33.8497 4.76753V14.8083H32.1758V0.71582H33.1605C33.2458 0.71582 33.318 0.722376 33.3771 0.735489C33.4361 0.742045 33.4887 0.758435 33.5346 0.784659C33.5806 0.804328 33.6265 0.83711 33.6725 0.883003C33.7184 0.92234 33.7677 0.974788 33.8202 1.04035L41.9831 11.6515C41.97 11.481 41.9569 11.3171 41.9438 11.1598C41.9372 10.9959 41.9339 10.8418 41.9339 10.6976V0.71582H43.6078Z",fill:"#F8F9FA"}),r("path",{d:"M58.4023 9.57648L56.1868 3.84311C56.1208 3.67265 56.0519 3.47596 55.98 3.25306C55.9076 3.02359 55.8387 2.78101 55.7732 2.52532C55.6354 3.05637 55.4941 3.49891 55.3498 3.85295L53.1343 9.57648H58.4023ZM62.3804 14.8083H60.9034C60.7325 14.8083 60.5947 14.7657 60.4898 14.6805C60.3844 14.5952 60.3057 14.4871 60.2535 14.3559L58.934 10.9533H52.6026L51.2831 14.3559C51.2437 14.4739 51.1679 14.5788 51.0566 14.6706C50.9449 14.7624 50.807 14.8083 50.6431 14.8083H49.1661L54.8083 0.71582H56.7382L62.3804 14.8083Z",fill:"#F8F9FA"}),r("path",{d:"M72.5866 8.02267C73.1317 8.02267 73.6107 7.95053 74.0243 7.80631C74.4442 7.66209 74.7958 7.46212 75.0779 7.20642C75.3669 6.94419 75.5835 6.63274 75.7277 6.27217C75.872 5.9116 75.9444 5.51493 75.9444 5.08223C75.9444 4.18403 75.6652 3.48252 75.1074 2.9777C74.556 2.47287 73.7156 2.22046 72.5866 2.22046H70.3219V8.02267H72.5866ZM72.5866 0.71582C73.4793 0.71582 74.2542 0.820719 74.9105 1.03052C75.5736 1.23376 76.1216 1.52551 76.5549 1.90576C76.9881 2.28602 77.3096 2.74495 77.5198 3.28256C77.7365 3.82016 77.8448 4.42005 77.8448 5.08223C77.8448 5.73783 77.7301 6.33772 77.5002 6.88189C77.2702 7.42607 76.9325 7.89482 76.4859 8.28819C76.0463 8.68156 75.4978 8.98972 74.8415 9.21261C74.1917 9.42896 73.4399 9.53714 72.5866 9.53714H70.3219V14.8083H68.4215V0.71582H72.5866Z",fill:"#F8F9FA"}),r("path",{d:"M92.1441 2.91881C92.085 3.01716 92.0195 3.09255 91.9472 3.145C91.8817 3.19089 91.7995 3.21384 91.701 3.21384C91.5897 3.21384 91.4583 3.15812 91.3071 3.04666C91.1565 2.9352 90.9659 2.81392 90.736 2.68279C90.513 2.54511 90.2407 2.42055 89.9187 2.30909C89.6036 2.19763 89.2196 2.14191 88.7667 2.14191C88.3403 2.14191 87.9627 2.20091 87.6343 2.31892C87.3128 2.43038 87.0405 2.58445 86.817 2.78113C86.6004 2.97782 86.4364 3.21056 86.3247 3.47937C86.2134 3.74161 86.1573 4.0268 86.1573 4.33495C86.1573 4.72832 86.2528 5.05613 86.4428 5.31837C86.6398 5.57406 86.8958 5.79371 87.2109 5.97727C87.5329 6.16082 87.8938 6.32146 88.294 6.45914C88.7012 6.59028 89.1148 6.72796 89.5347 6.87218C89.9616 7.0164 90.3751 7.18034 90.7754 7.36389C91.1826 7.54091 91.5434 7.7671 91.8585 8.04246C92.1805 8.31782 92.4365 8.65548 92.6266 9.05539C92.8235 9.4553 92.922 9.94701 92.922 10.5305C92.922 11.1468 92.8171 11.727 92.6069 12.2712C92.3972 12.8088 92.0885 13.2776 91.6813 13.6775C91.281 14.0774 90.7852 14.3921 90.1944 14.6216C89.6105 14.8511 88.9439 14.9658 88.1956 14.9658C87.2769 14.9658 86.4428 14.8019 85.6945 14.4741C84.9461 14.1397 84.3061 13.6906 83.7744 13.1268L84.3258 12.222C84.3785 12.1499 84.441 12.0909 84.5129 12.045C84.5917 11.9925 84.6773 11.9663 84.7689 11.9663C84.8546 11.9663 84.9496 12.0024 85.0545 12.0745C85.1662 12.14 85.2908 12.2253 85.4286 12.3302C85.5665 12.4351 85.724 12.5498 85.9013 12.6744C86.0785 12.7989 86.2789 12.9137 86.5019 13.0186C86.7319 13.1235 86.9913 13.212 87.2798 13.2841C87.5688 13.3497 87.8938 13.3825 88.2546 13.3825C88.7076 13.3825 89.1113 13.3202 89.4658 13.1956C89.8203 13.0711 90.1191 12.8973 90.3618 12.6744C90.6115 12.4449 90.802 12.1728 90.9329 11.8581C91.0644 11.5435 91.1299 11.1927 91.1299 10.8059C91.1299 10.3797 91.0314 10.0323 90.8345 9.76345C90.6444 9.48809 90.3914 9.25861 90.0763 9.07505C89.7612 8.8915 89.4003 8.7374 88.9931 8.61284C88.5865 8.4817 88.1729 8.35061 87.7525 8.21947C87.3325 8.0818 86.9189 7.92445 86.5118 7.74743C86.1051 7.57041 85.7437 7.34093 85.4286 7.05903C85.1135 6.77713 84.8575 6.42635 84.6606 6.00677C84.4705 5.5806 84.375 5.05613 84.375 4.43329C84.375 3.93502 84.4705 3.45314 84.6606 2.98765C84.8575 2.52216 85.1401 2.10913 85.5074 1.74854C85.8816 1.38795 86.338 1.09948 86.8761 0.883124C87.4211 0.66677 88.0449 0.558594 88.747 0.558594C89.5347 0.558594 90.2506 0.68316 90.8936 0.932294C91.5435 1.18143 92.1146 1.54202 92.6069 2.01406L92.1441 2.91881Z",fill:"#F8F9FA"}),r("path",{d:"M108.999 13.2545L108.989 14.8083H100.295V0.71582H108.989V2.26963H102.205V6.95073H107.699V8.44554H102.205V13.2545H108.999Z",fill:"#F8F9FA"})]});try{ne.displayName="SynapseLogoName",ne.__docgenInfo={description:"",displayName:"SynapseLogoName",props:{}}}catch{}const ye={queryTerm:[],booleanQuery:[{key:"node_type",value:"project"}],facetOptions:[{name:"EntityType",maxResultCount:300,sortType:"COUNT"},{name:"Consortium",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedOn",maxResultCount:300,sortType:"COUNT"},{name:"ModifiedBy",maxResultCount:300,sortType:"COUNT"},{name:"CreatedOn",maxResultCount:300,sortType:"COUNT"},{name:"Tissue",maxResultCount:300,sortType:"COUNT"},{name:"CreatedBy",maxResultCount:300,sortType:"COUNT"}],start:0,size:30},D=e=>{const{tooltip:t,iconName:o,onClickOpenNavMenu:n,onClickGoToUrl:a,additionalChildren:f,badgeContent:c,isCurrentlySelectedItem:d=!1,handleDrawerClose:u,handleDrawerOpen:s}=e,T=r(Ne,{title:t,placement:"right",children:r(Nt,{onClick:d||a?u:()=>{s(n)},className:"SRC-whiteText",selected:d,children:r(ot,{badgeContent:c,color:"secondary",children:o?y(j,{children:[r(Y,{icon:o})," ",f," "]}):f})},o)});return a?r("a",{href:a,rel:"noopener noreferrer",className:"SRC-whiteText",children:T}):T},be=({initIsOpen:e=!1,signoutCallback:t})=>{const[o,n]=v.useState(e),[a,f]=v.useState(),[c,d]=v.useState(""),[u,s]=v.useState(""),[b,I]=v.useState(!1),{accessToken:T}=Ie(),k=!!T,{data:m}=Fe(),i=k&&m?m.userProfile:void 0,{data:$}=Ee({enabled:k}),P=$==null?void 0:$.totalNumberOfFiles,{data:N}=Me({submissionState:Le.SUBMITTED,sort:[{field:De.CREATED_ON,direction:Be.DESC}]},{enabled:m==null?void 0:m.isARReviewer});let x=(N==null?void 0:N.pages[0].results.length)??0;N!=null&&N.pages[0].nextPageToken&&(x=`${x}+`);const F=async()=>{t?t():(await _e.signOut(),window.location.reload())},h=g=>{n(!0),f(g)},p=()=>{n(!1),f(void 0)},O=g=>{ye.queryTerm=g.split(/[ ,]+/),window.location.href=`/#!Search:${encodeURI(JSON.stringify(ye))}`};return y("div",{className:"SynapseNavDrawer",children:[y(ve,{variant:"permanent",className:`SynapseNavDrawerMenu ${o?"tempDrawerOpen":""}`,children:[r("div",{onClick:p,children:r("a",{className:"synapseIcon",rel:"noopener noreferrer",href:"/#!Home:0",children:r(oe,{})})}),y(me,{children:[k&&i&&y(j,{children:[r(D,{tooltip:"Projects",iconName:"dashboard",onClickOpenNavMenu:0,isCurrentlySelectedItem:a==0,handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Favorites",iconName:"favTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/favorites`,handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Teams",iconName:"peopleTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/teams`,handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Challenges",iconName:"challengesTwoTone",onClickGoToUrl:`/#!Profile:${i.ownerId}/challenges`,handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Download Cart",iconName:"download",onClickGoToUrl:"/#!DownloadCart:0",badgeContent:P,handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Trash Can",iconName:"delete",onClickGoToUrl:"/#!Trash:0",handleDrawerClose:p,handleDrawerOpen:h}),(m==null?void 0:m.isARReviewer)&&r(D,{tooltip:"Data Access Management",iconName:"accessManagement",onClickGoToUrl:"/#!DataAccessManagement:default/Submissions",badgeContent:x,handleDrawerClose:p,handleDrawerOpen:h})]}),r(D,{tooltip:"Search",iconName:"search",onClickGoToUrl:"/#!Search:",handleDrawerClose:p,handleDrawerOpen:h})]}),r("div",{className:"filler"}),y(me,{children:[k&&i&&r(D,{tooltip:"Your Account",onClickOpenNavMenu:6,additionalChildren:r(He,{userProfile:i,size:"AVATAR",avatarSize:"SMALL"}),isCurrentlySelectedItem:a==6,handleDrawerClose:p,handleDrawerOpen:h}),!k&&r(D,{tooltip:"Sign in",iconName:"login",onClickGoToUrl:"/#!LoginPlace:0",handleDrawerClose:p,handleDrawerOpen:h}),r(D,{tooltip:"Help",iconName:"helpOutlined",onClickOpenNavMenu:7,isCurrentlySelectedItem:a==7,handleDrawerClose:p,handleDrawerOpen:h})]})]}),y(ve,{variant:"temporary",open:o,className:"SynapseNavContentDrawer",onClose:p,children:[r("div",{className:"synapseLogoNameContainer",children:r(ne,{})}),y("div",{className:"navContentContainer",children:[a==0&&y(j,{children:[r("div",{className:"header projectHeader",children:"Projects"}),r(Ne,{title:"Create a New Project",placement:"right",children:r("a",{className:"createProjectLink",onClick:()=>{I(!0),p()},children:r(Y,{icon:"addCircleOutline"})})}),y("div",{className:"searchInputWithIcon",children:[r(Y,{icon:"searchOutlined"}),r(ge.Control,{type:"search",placeholder:"Search All Projects",value:c,onChange:g=>{d(g.target.value)},onKeyDown:g=>{g.key==="Enter"&&g.target.value!==""&&(d(""),p(),O(g.target.value))}})]}),y("div",{className:"linkList",onClick:p,children:[r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/all`,rel:"noopener noreferrer",children:"All"}),r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/created_by_me`,rel:"noopener noreferrer",children:"Created By Me"}),r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/favorites`,rel:"noopener noreferrer",children:"Favorite Projects"}),r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/shared_directly_with_me`,rel:"noopener noreferrer",children:"Shared With Me"}),r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/projects/all_my_team_projects`,rel:"noopener noreferrer",children:"Team Projects"})]})]}),a==6&&y(j,{children:[y("div",{className:"header",children:["Welcome Back,",r("br",{}),i==null?void 0:i.userName,"!"]}),y("div",{className:"linkList",onClick:p,children:[r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/profile`,rel:"noopener noreferrer",children:"View Profile"}),r("a",{className:"SRC-whiteText",href:`/#!Profile:${i==null?void 0:i.ownerId}/settings`,rel:"noopener noreferrer",children:"Account Settings"}),r("a",{className:"SRC-whiteText",onClick:()=>{F()},rel:"noopener noreferrer",children:"Sign Out"})]})]}),a==7&&y(j,{children:[r("div",{className:"header",children:"Help"}),y("div",{className:"searchInputWithIcon",children:[r(Y,{icon:"searchOutlined"}),r(ge.Control,{type:"search",placeholder:"Search Synapse Documentation",value:u,onChange:g=>{s(g.target.value)},onKeyDown:g=>{g.key==="Enter"&&g.target.value!==""&&(window.open(`https://help.synapse.org/search.html?max=10&s=docs&q=${encodeURI(g.target.value)}`),s(""),p())}})]}),y("div",{className:"linkList",onClick:p,children:[r("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/Getting-Started.2055471150.html",rel:"noopener noreferrer",target:"_blank",children:"Getting Started"}),r("a",{className:"SRC-whiteText",href:"https://help.synapse.org/docs/",rel:"noopener noreferrer",target:"_blank",children:"Synapse Documentation"}),r("a",{className:"SRC-whiteText",href:"#!SynapseForum:default",rel:"noopener noreferrer",children:"Help Forum"}),r("a",{className:"SRC-whiteText",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",rel:"noopener noreferrer",target:"_blank",children:"Contact Us"})]})]})]})]}),r(Ae,{onClose:()=>I(!1),isShowingModal:b})]})};try{be.displayName="SynapseNavDrawer",be.__docgenInfo={description:"Displays the Synapse navigational drawer on the left side of the page.  Has links to various areas if logged in.",displayName:"SynapseNavDrawer",props:{initIsOpen:{defaultValue:{value:"false"},description:"",name:"initIsOpen",required:!1,type:{name:"boolean"}},signoutCallback:{defaultValue:null,description:"",name:"signoutCallback",required:!1,type:{name:"(() => void)"}}}}}catch{}export{be as S};
//# sourceMappingURL=SynapseNavDrawer-aaf9ba0b.js.map
