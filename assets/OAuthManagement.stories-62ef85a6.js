import{a as i,j as e,F as ie}from"./jsx-runtime-ad672792.js";import{r as n}from"./index-f1f749bf.js";import{f as ae}from"./DateFormatter-9ce678b6.js";import{d as oe}from"./dayjs.min-e0adaab4.js";import{ah as I,d1 as Se,bt as z,d2 as ve,d3 as be,d4 as we,d5 as Ae,d6 as _e}from"./SynapseContext-c58a2137.js";import{u as Y}from"./useMutation-45220459.js";import{u as ke}from"./useInfiniteQuery-4013630d.js";import{d as T}from"./ToastMessage-306d2a68.js";import{H as ne,I as G}from"./IconSvg-87f26736.js";import{W as ue}from"./WarningModal-cab5ead1.js";import{S as Te}from"./LoadingScreen-ded2c742.js";import{u as Ie}from"./useDebouncedEffect-601ad775.js";import"./getEndpoint-5374ab4d.js";import{M as h}from"./Modal-6ffa84ac.js";import{T as D}from"./Typography-f5dd8748.js";import{R as F}from"./Row-264af41d.js";import{C}from"./Col-1f1afacc.js";import{F as l}from"./Form-4a4de212.js";import{a as se}from"./Clear-a9f76abf.js";import{B as g}from"./Button-7d415009.js";import{A as Ne}from"./Alert-84d62a08.js";import{C as Oe}from"./CopyToClipboardInput-62e168ae.js";import{T as Me}from"./Table-6b0350f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./utc-8a3e1a17.js";import"./inheritsLoose-d541526f.js";import"./setPrototypeOf-0bb37fbe.js";import"./isArray-5e3f9107.js";import"./index-96c5f47c.js";import"./extends-98964cd2.js";import"./SynapseConstants-9d1f6e44.js";import"./SvgIcon-93d86b25.js";import"./objectWithoutPropertiesLoose-4f48578a.js";import"./styled-8837a0b3.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-3d5299f2.js";import"./Box-2e3c1244.js";import"./extendSxProp-a6801df0.js";import"./Button-e0234af7.js";import"./ButtonBase-26873d31.js";import"./emotion-react.browser.esm-a8a50fc7.js";import"./assertThisInitialized-081f9914.js";import"./TransitionGroupContext-a2b6e27b.js";import"./useForkRef-dd8a6e5c.js";import"./useTheme-c4678cf9.js";import"./mutation-a025f1f3.js";import"./infiniteQueryBehavior-bddd0411.js";import"./FullWidthAlert-d2f0fc35.js";import"./divWithClassName-1aeead00.js";import"./createWithBsPrefix-e09f51dd.js";import"./index-4d501b15.js";import"./removeClass-164fd327.js";import"./hasClass-ec9efd32.js";import"./uniqueId-4d05949d.js";import"./toString-cc90cb98.js";import"./isSymbol-7c514724.js";import"./contains-33365353.js";import"./useWillUnmount-7fb15b8a.js";import"./usePrevious-9f30f8c7.js";import"./useWaitForDOMRef-54076dc2.js";import"./FormLabel-897d2462.js";import"./FormGroup-08e5002f.js";import"./isHostComponent-fa76b8d9.js";import"./hook-c05d8d9f.js";import"./IconCopy-4d77a0f7.js";function xe(a){const{accessToken:u,keyFactory:m}=I();return ke(m.getMyOAuthClientsQueryKey(),async t=>await Se(u,t.pageParam),{...a,getNextPageParam:t=>t.nextPageToken})}function Ee(a){const u=z(),{accessToken:m,keyFactory:t}=I();return Y(s=>ve(s,m),{...a,onSuccess:async(s,p,f)=>{await u.invalidateQueries(t.getMyOAuthClientsQueryKey()),a!=null&&a.onSuccess&&await a.onSuccess(s,p,f)}})}function Re(a){const u=z(),{accessToken:m,keyFactory:t}=I();return Y(s=>be(s,m),{...a,onSuccess:async(s,p,f)=>{await u.invalidateQueries(t.getMyOAuthClientsQueryKey()),a!=null&&a.onSuccess&&await a.onSuccess(s,p,f)}})}function Be(a){const u=z(),{accessToken:m,keyFactory:t}=I();return Y(s=>we(s,m),{...a,onSuccess:async(s,p,f)=>{await u.invalidateQueries(t.getMyOAuthClientsQueryKey()),a!=null&&a.onSuccess&&await a.onSuccess(s,p,f)}})}const qe=500,W=({isShowingModal:a=!1,isEdit:u,onClose:m,client:t,setIsShowingConfirmModal:s,isShowingConfirmModal:p,setIsShowingModal:f})=>{const{accessToken:v}=I(),[N,O]=n.useState(""),[o,S]=n.useState([{uri:""}]),[b,w]=n.useState(),[A,M]=n.useState(),[_,y]=n.useState(),[x,E]=n.useState(),[V,P]=n.useState(!1),[Q,U]=n.useState(!1),[c,me]=n.useState(),[L,k]=n.useState(),he="Are you absolutely sure?",pe="Editing this detail will render your client invalid and will require you to resubmit verification. This action cannot be undone.",K="Click Add URI to add more Redirect URIs",R=n.useMemo(()=>({client_id:t==null?void 0:t.client_id,client_name:N,redirect_uris:(o==null?void 0:o.map(r=>r.uri))??[""],policy_uri:b,client_uri:A,sector_identifier_uri:_??"",tos_uri:x,etag:t==null?void 0:t.etag}),[t==null?void 0:t.client_id,t==null?void 0:t.etag,N,A,b,o,_,x]);n.useEffect(()=>{O((t==null?void 0:t.client_name)??""),S((t==null?void 0:t.redirect_uris.map(r=>({uri:r})))??[{uri:""}]),w((t==null?void 0:t.policy_uri)??""),M((t==null?void 0:t.client_uri)??""),y((t==null?void 0:t.sector_identifier_uri)??void 0),E((t==null?void 0:t.tos_uri)??"")},[a,t]),Ie(()=>{v&&Ae(R,v).then(r=>{P(r.reverificationRequired)})},[v,R],qe);const B=()=>{O(""),S([{uri:""}]),w(""),M(""),y(""),E(""),m()},$=()=>{s(!1),U(!1)},{mutate:fe}=Be({onSuccess:()=>{T("Successfully created","success"),k(void 0),B()},onError:r=>{k(r)}}),{mutate:Z,isLoading:J}=Re({onSuccess:()=>{T("Successfully saved","success"),k(void 0),B()},onError:r=>{k(r),f(!0)}}),{mutate:ge}=Ee({onSuccess:()=>{T("Successfully deleted","success"),B()},onError:r=>{T(r.reason,"danger")}}),ye=()=>{try{v&&(me(R),V===!0?s(!0):u?Z(R):fe(R))}catch(r){T(r.reason,"danger")}},X=()=>{o&&S([...o,{uri:""}])},ee=r=>{if(o){const d=[...o];d.splice(r,1),S(d)}},te=(r,d)=>{if(o){const{name:q,value:Ce}=r.target,re=[...o];re[d][q]=Ce,S(re)}};return i("div",{className:"bootstrap-4-backport",children:[i(h,{show:a&&!p,animation:!1,backdrop:"static",onHide:()=>{B(),k(void 0)},size:"lg",className:"OAuthDialog bootstrap-4-backport",children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:u?"Client Details":"Create New OAuth Client"})}),i(h.Body,{children:[J&&e("div",{className:"SRC-center-text",children:e(Te,{size:40})}),!J&&i(ie,{children:[e(D,{variant:"body1",children:"To protect you and your users, your consent screen and application will need to be verified by Sage Bionetworks. Before your consent screen and application are verified by Sage Bionetworks, you can still test your application with limitations."}),u&&i(D,{style:{marginTop:"16px"},variant:"label",children:["Client ID: ",t==null?void 0:t.client_id]}),i(F,{children:[e(C,{lg:6,md:6,sm:12,xs:12,children:i(l.Group,{className:"required",children:[e(l.Label,{htmlFor:"clientName",children:"Client Name"}),e(l.Control,{required:!0,onChange:r=>O(r.target.value),placeholder:"Client Name",type:"text",value:N,id:"clientName"})]})}),i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{className:"required",htmlFor:"clientUri",children:"Client Homepage"}),e(l.Control,{onChange:r=>M(r.target.value),placeholder:"https://",type:"text",value:A,id:"clientUri"})]})]}),e(F,{children:!u&&i(ie,{children:[e(C,{lg:6,md:6,sm:12,xs:12,children:i(l.Group,{className:"required",children:[e(l.Label,{htmlFor:"redirect-uri-0",children:"Redirect URI(s)"}),e(se,{title:K,placement:"top",children:e(ne,{className:"HelpButton"})}),o==null?void 0:o.map((r,d)=>i("div",{children:[e(l.Control,{name:"uri",required:!0,id:`redirect-uri-${d}`,onChange:q=>te(q,d),value:r.uri,placeholder:"https://",type:"text"}),o.length>1&&e("button",{onClick:()=>ee(d),children:e(G,{icon:"delete",sx:{color:"error.main"}})}),o.length-1===d&&e(g,{onClick:X,disabled:r.uri.length===0,children:"Add URI"})]},d))]})}),i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{children:"Sector Identifier URI"}),e(l.Control,{onChange:r=>y(r.target.value),placeholder:"https://",type:"text"})]})]})}),i(F,{children:[i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{children:"Link to Privacy Policy"}),e(l.Control,{onChange:r=>w(r.target.value),placeholder:"https://",type:"text",value:b})]}),i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{children:"Links to Terms of Service"}),e(l.Control,{onChange:r=>E(r.target.value),placeholder:"https://",type:"text",value:x})]})]}),u&&i("div",{className:"danger",children:[e(D,{style:{marginTop:"8px"},color:"error",variant:"headline3",children:"DANGER ZONE"}),e(D,{variant:"smallText1",children:"Editing the following information will render your client invalid and will require you to create it again and resubmit verification if needed."}),i(F,{children:[i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{htmlFor:"redirect-uri-0",children:"Redirect URI(s)"}),e(se,{title:K,placement:"top",children:e(ne,{className:"HelpButton"})}),o==null?void 0:o.map((r,d)=>i("div",{children:[e(l.Control,{id:`redirect-uri-${d}`,required:!0,name:"uri",onChange:q=>te(q,d),value:r.uri,placeholder:"https://",type:"text"}),o.length>1&&e("button",{onClick:()=>ee(d),children:e(G,{icon:"delete",sx:{color:"error.main"}})}),o.length-1===d&&e(g,{onClick:X,disabled:r.uri.length===0,children:"Add Uri"})]},d))]}),i(C,{lg:6,md:6,sm:12,xs:12,children:[e(l.Label,{children:"Sector Identifier URI"}),e(l.Control,{onChange:r=>y(r.target.value),placeholder:"https://",type:"text",value:_})]})]}),i("button",{className:"delete-button",onClick:()=>{U(!0),s(!0)},children:[e(G,{icon:"delete",sx:{color:"error.main"}}),"DELETE CLIENT"]})]})]})]}),L&&e(Ne,{variant:"danger",children:L==null?void 0:L.reason}),i(h.Footer,{children:[e(g,{variant:"default",onClick:()=>{B(),k(void 0)},children:"CANCEL"}),e(g,{variant:"primary",onClick:ye,children:"Save"})]})]}),e(ue,{show:p,title:he,modalBody:pe,onCancel:$,onConfirm:()=>{Q?ge(t==null?void 0:t.client_id):Z(c),$()},confirmButtonVariant:"danger",confirmButtonText:"Yes, Continue"})]})};try{W.displayName="CreateOAuthModal",W.__docgenInfo={description:"",displayName:"CreateOAuthModal",props:{isShowingModal:{defaultValue:{value:"false"},description:"",name:"isShowingModal",required:!1,type:{name:"boolean"}},isEdit:{defaultValue:null,description:"",name:"isEdit",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},setIsShowingConfirmModal:{defaultValue:null,description:"",name:"setIsShowingConfirmModal",required:!0,type:{name:"(a: boolean) => void"}},isShowingConfirmModal:{defaultValue:null,description:"",name:"isShowingConfirmModal",required:!0,type:{name:"boolean"}},client:{defaultValue:null,description:"",name:"client",required:!1,type:{name:"OAuthClient"}},setIsShowingModal:{defaultValue:null,description:"",name:"setIsShowingModal",required:!0,type:{name:"(a: boolean) => void"}}}}}catch{}const j=()=>{const{accessToken:a}=I(),[u,m]=n.useState(!1),[t,s]=n.useState(!1),[p,f]=n.useState(),[v,N]=n.useState(!1),[O,o]=n.useState(!1),[S,b]=n.useState(!1),[w,A]=n.useState(),[M,_]=n.useState(!1),{data:y,hasNextPage:x,fetchNextPage:E}=xe(),V=(y==null?void 0:y.pages.flatMap(c=>c.results))??[],P="Are you absolutely sure?",Q="If you have an existing secret, generating a new secret will make your application invalid after generation. This action cannot be undone.",U=async()=>{o(!1);try{const c=await _e(a,p==null?void 0:p.client_id);f(void 0),b(!0),A(c.client_secret)}catch(c){T(c.reason,"danger")}};return i("div",{className:"bootstrap-4-backport OAuthEditor",children:[e(g,{onClick:()=>{m(!0),s(!1)},style:{float:"right"},children:"Create New Client"}),i(Me,{striped:!0,children:[e("thead",{children:i("tr",{children:[e("th",{children:"Created"}),e("th",{children:"Modified"}),e("th",{children:"ID"}),e("th",{children:"Client"}),e("th",{children:"Verified"}),e("th",{children:"App Secret"}),e("th",{children:"Actions"})]})}),e("tbody",{children:V.map(c=>i("tr",{children:[e("td",{children:ae(oe(c.createdOn))}),e("td",{children:ae(oe(c.modifiedOn))}),e("td",{children:c.client_id}),e("td",{children:c.client_name}),e("td",{children:c.verified?"Yes":e(g,{variant:"outline",size:"sm",onClick:()=>_(!0),children:"SUBMIT VERIFICATION"})}),e("td",{children:e(g,{variant:"outline",onClick:()=>{f(c),o(!0)},size:"sm",children:"GENERATE SECRET"})}),e("td",{children:e(g,{variant:"outline",onClick:()=>{f(c),s(!0),m(!0)},size:"sm",children:"EDIT"})})]},c.client_id))})]}),x&&e("div",{className:"text-center",children:e(g,{variant:"primary",onClick:()=>{E()},children:"Load more"})}),e(W,{onClose:()=>{m(!1)},isShowingModal:u,client:t?p:void 0,isEdit:t,setIsShowingConfirmModal:N,isShowingConfirmModal:v,setIsShowingModal:m}),i(h,{show:M,animation:!1,backdrop:"static",className:"bootstrap-4-backport",onHide:()=>_(!1),children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:"Submit Verification"})}),i(h.Body,{children:[i("p",{children:["In order to verify an OAuth client please submit a request to the"," ",e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://sagebionetworks.jira.com/servicedesk/customer/portal/9",children:"Synapse Service Desk."})]}),e("b",{children:"Please list the following items in your request:"}),i("ul",{children:[e("li",{children:"Your name"}),i("li",{children:["The ID of the client to be verified ",e("br",{})]}),e("li",{children:"A description of your application"})]})]}),e(h.Footer,{})]}),e(ue,{show:O,className:"bootstrap-4-backport",title:P,modalBody:Q,onCancel:()=>{o(!1),f(void 0)},onConfirm:U,confirmButtonVariant:"danger",confirmButtonText:"Yes, Continue"}),w&&i(h,{show:S,animation:!1,backdrop:"static",className:"bootstrap-4-backport",onHide:()=>{b(!1),A(void 0)},children:[e(h.Header,{closeButton:!0,children:e(h.Title,{children:"App Secret"})}),i(h.Body,{children:[i("p",{children:[e("b",{children:"This secret will not be able to be retrieved again."})," If needed, in order to generate a new secret select Generate from the Client List."]}),e(Oe,{value:w,inputWidth:"350px"})]})]})]})};try{j.displayName="OAuthManagement",j.__docgenInfo={description:"",displayName:"OAuthManagement",props:{}}}catch{}const jt={title:"Synapse/OAuthManagement",component:j},H={};var le,ce,de;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:"{}",...(de=(ce=H.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};const zt=["OAuthManagementDemo"];export{H as OAuthManagementDemo,zt as __namedExportsOrder,jt as default};
//# sourceMappingURL=OAuthManagement.stories-62ef85a6.js.map
