import{j as t,a as n,F as T}from"./jsx-runtime-ad672792.js";import{r as o}from"./index-f1f749bf.js";import{ah as $,cs as L,cY as P,cr as F,b7 as U,cA as O,cZ as j,ao as q}from"./SynapseContext-70b7e112.js";import{d as A}from"./dayjs.min-e0adaab4.js";import{U as K}from"./UserCard-7bcbf1f7.js";import{h as z}from"./SynapseConstants-5e10e7ad.js";import{I as _}from"./IconSvg-44530777.js";import{S as G}from"./SkeletonTable-9b2b1327.js";import{P as B}from"./getEndpoint-5374ab4d.js";import{f as H}from"./DateFormatter-e0eb8bfc.js";import{R as Y}from"./Row-264af41d.js";import{C as E}from"./Col-1f1afacc.js";import{S as Z}from"./Skeleton-cff63b1c.js";import{T as g}from"./Typography-f5dd8748.js";import{s as J}from"./NoSearchResults-79eea014.js";import{d as Q}from"./ToastMessage-306d2a68.js";import{B as W}from"./Button-7d415009.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./SvgIcon-93d86b25.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8837a0b3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./Box-2e3c1244.js";import"./extendSxProp-a6801df0.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-a2b6e27b.js";import"./useForkRef-dd8a6e5c.js";import"./Clear-a9f76abf.js";import"./useTheme-c4678cf9.js";import"./isHostComponent-fa76b8d9.js";import"./Alert-84d62a08.js";import"./hook-c05d8d9f.js";import"./createWithBsPrefix-e09f51dd.js";import"./divWithClassName-1aeead00.js";import"./index-4d501b15.js";import"./Overlay-77639877.js";import"./contains-33365353.js";import"./usePopperMarginModifiers-95563bac.js";import"./hasClass-ec9efd32.js";import"./useWaitForDOMRef-54076dc2.js";import"./times-8834340a.js";import"./_baseTimes-8cccc40f.js";import"./toInteger-a84bf156.js";import"./isSymbol-7c514724.js";import"./utc-8a3e1a17.js";import"./FullWidthAlert-d2f0fc35.js";import"./removeClass-164fd327.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";const b=async r=>(await fetch(r,{method:"GET",headers:{Accept:"*/*","Access-Control-Request-Headers":"authorization","Content-Type":"text/plain; charset=utf-8"}})).text(),x=r=>{const{threadId:p,replyId:c}=r,{accessToken:a}=$(),[s,l]=o.useState(),[h,f]=o.useState(""),[i,d]=o.useState(),[S,I]=o.useState(),[y,v]=o.useState(!1),N=async()=>{let u;const e=await L(p,a);if(v(!0),c){const m=await P(c,a);u=await F(m.messageKey,a),I(await U(a,m.createdBy)),d(m)}else I(await U(a,e.createdBy)),u=await O(e.messageKey,a);f(await b(u.messageUrl)),l(e),v(!1)};return o.useEffect(()=>{N()},[]),t("div",{className:"search-result-container",children:n(Y,{children:[t(E,{xs:1,children:y?t(Z,{variant:"circular",width:"40px",height:"40px"}):c?t(_,{icon:"replyTwoTone"}):t(_,{icon:"chatTwoTone"})}),t(E,{xs:11,children:y?t(G,{numCols:1,numRows:4}):n(T,{children:[t(g,{variant:"headline3",children:t("a",{className:"link",href:((u,e,m)=>{let k=`${B.PORTAL}#!Synapse:${e}/discussion/threadId=${u}`;return m&&(k+=`&replyId=${m}`),k})(s==null?void 0:s.id,s==null?void 0:s.projectId,i==null?void 0:i.id),children:s==null?void 0:s.title})}),t("div",{className:"truncated",children:t(g,{variant:"body1",children:h})}),n("div",{className:"search-result-footer",children:[c?"Reply":"Thread"," by"," ",t(K,{size:z,ownerId:S==null?void 0:S.ownerId})," ",H(A(i==null?void 0:i.createdOn))]})]})})]})})};try{b.displayName="getMessage",b.__docgenInfo={description:"",displayName:"getMessage",props:{}}}catch{}try{x.displayName="DiscussionSearchResult",x.__docgenInfo={description:"",displayName:"DiscussionSearchResult",props:{threadId:{defaultValue:null,description:"",name:"threadId",required:!0,type:{name:"string"}},replyId:{defaultValue:null,description:"",name:"replyId",required:!1,type:{name:"string"}}}}}catch{}const w=r=>{const{onSearchResultsVisible:p}=r,{accessToken:c}=$(),[a,s]=o.useState(""),[l,h]=o.useState(),[f,i]=o.useState(),[d,S]=o.useState(),[I,y]=o.useState(!1),v=async()=>{p&&p(!0);try{h(void 0),y(!1);const e=await j({searchString:a,nextPageToken:void 0},r.forumId,c);e.matches.length==0&&y(!0),h(e),i(e.matches)}catch(e){Q(e.reason,"danger")}},N=()=>{p&&p(!1),s(""),h(void 0),y(!1),i(void 0)};o.useEffect(()=>{(async()=>{if(r.projectId){const m=await q(c,r.projectId);S(m)}})()},[c,r.projectId]);const C=()=>n("div",{className:"text-center",children:[J,t(g,{variant:"body1",children:"No results with this query"}),t(g,{variant:"body1Italic",children:"Search the full text of posts, replies, and titles"})]}),u=async()=>{const e=await j({searchString:a,nextPageToken:l==null?void 0:l.nextPageToken},r.forumId,c);h(e),f&&i([...f,...e.matches])};return n("div",{className:"bootstrap-4-backport ForumSearch",children:[n("div",{children:[t("span",{className:"SearchIcon",children:t(_,{icon:"search"})}),t("input",{role:"textbox",type:"search",className:`SearchBar  ${l?"SearchBarResult":""}`,placeholder:"Search discussions",value:a,onChange:e=>{s(e.target.value)},onKeyDown:e=>{e.key==="Enter"&&v()}}),a&&t("button",{className:"ClearSearchIcon",onClick:()=>{N()},children:t(_,{icon:"clear"})})]}),I&&n(T,{children:[r.projectId&&n(g,{variant:"body1Italic",className:"NoResultsText",children:['No results for "',a,'" in ',d==null?void 0:d.name]}),t(C,{})]}),f&&n(T,{children:[r.projectId&&!I&&n(g,{variant:"body1Italic",className:"ResultsText",children:['Results for "',a,'" in ',d==null?void 0:d.name]}),f.map(e=>t("div",{children:t(x,{threadId:e.threadId,replyId:e.replyId})},`${e.forumId}-${e.threadId}-${e.replyId}`))]}),(l==null?void 0:l.nextPageToken)&&t("div",{className:"text-center",children:t(W,{variant:"primary",onClick:()=>{u()},children:"Load more"})})]})};try{w.displayName="ForumSearch",w.__docgenInfo={description:"",displayName:"ForumSearch",props:{forumId:{defaultValue:null,description:"",name:"forumId",required:!0,type:{name:"string"}},projectId:{defaultValue:null,description:"",name:"projectId",required:!1,type:{name:"string"}},onSearchResultsVisible:{defaultValue:null,description:"",name:"onSearchResultsVisible",required:!1,type:{name:"((visible: boolean) => void)"}}}}}catch{}const rt={title:"Synapse/ForumSearch",component:w},R={args:{forumId:"1032",onSearchResultsVisible:r=>alert(`Is visible? ${r}`)}};var D,M,V;R.parameters={...R.parameters,docs:{...(D=R.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    forumId: '1032',
    onSearchResultsVisible: visible => alert(\`Is visible? \${visible}\`)
  }
}`,...(V=(M=R.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const at=["Demo"];export{R as Demo,at as __namedExportsOrder,rt as default};
//# sourceMappingURL=ForumSearch.stories-d268c82c.js.map
