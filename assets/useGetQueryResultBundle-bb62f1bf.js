import{r as d}from"./index-f1f749bf.js";import{a9 as y,ab as f,ca as R,cb as b,cc as k,au as E}from"./SynapseContext-c04df192.js";import{u as M}from"./useInfiniteQuery-dd582a54.js";import{n as p,i}from"./SynapseConstants-41b9b1f3.js";const c={staleTime:1e3*60*30};function G(e,r){const{accessToken:a,keyFactory:s}=y();return f(s.getEntityTableQueryResultQueryKey(e,!1),()=>R(e,a),{...c,...r})}function T(e,r,a){const{accessToken:s,keyFactory:u}=y();return f(u.getEntityTableQueryResultWithAsyncStatusQueryKey(e,!1),()=>k(e,s,a),{...c,...r})}function S(e,r,a){const s=e.partMask&i,u={...e,partMask:s},t=s>0?r==null?void 0:r.enabled:!1;return T(u,{...r,enabled:t},a)}function P(e,r,a){const s=e.partMask&~i,u={...e,query:{...e.query,offset:void 0,limit:void 0,sort:void 0},partMask:s},t=s>0?r==null?void 0:r.enabled:!1;return T(u,{...r,enabled:t},a)}function A(e,r,a){const s=S(e,r,a),u=P(e,r,a);return d.useMemo(()=>s.status==="error"?s:u.status==="error"?u:s.status==="loading"?s:u.status==="loading"?u:s.status==="idle"?b({},s,u):b({},u,s),[s,u])}function _(e,r,a){const{accessToken:s,keyFactory:u}=y();return M(u.getEntityTableQueryResultQueryKey(e,!0),t=>{const n=t.pageParam?parseInt(t.pageParam):0;return k({...e,query:{...e.query,offset:n},partMask:n!==0?e.partMask&i:e.partMask},s,a)},{...c,...r,select:t=>{const n=t==null?void 0:t.pages[0];if(n.responseBody)for(let o=0;o<t.pages.length;o++){const l=t.pages[o];l.responseBody!=null&&(t.pages[o].responseBody={...n.responseBody,queryResult:l.responseBody.queryResult})}return t},getPreviousPageParam:t=>{if(t.jobState!=="COMPLETE")return;const n=t.requestBody;if(n.query.offset==null||n.query.offset===0)return;const o=n.query.limit??p;return Math.max(n.query.offset-o,0)},getNextPageParam:(t,n)=>{var g,m;if(t.jobState!=="COMPLETE")return;const o=t.requestBody,l=o.query.limit??p,Q=(g=n[0].responseBody)==null?void 0:g.queryCount;if(!(Q!=null&&(o.query.offset??0)+l>=Q))return((m=t.responseBody.queryResult)==null?void 0:m.queryResults.rows.length)===l?(o.query.offset??0)+l:void 0}})}function w(e,r){const{accessToken:a,keyFactory:s}=y();return f(s.getFullTableQueryResultQueryKey(e),()=>E(e,a),{...c,...r})}export{_ as a,A as b,w as c,G as u};
//# sourceMappingURL=useGetQueryResultBundle-bb62f1bf.js.map
