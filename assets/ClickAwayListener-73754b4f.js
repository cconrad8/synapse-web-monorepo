import{r as n}from"./index-8db94870.js";import{j as C}from"./jsx-runtime-095bf462.js";import{u as T}from"./useForkRef-2674f3de.js";import{u as g}from"./useEventCallback-65e61675.js";import{o as h}from"./ownerDocument-613eb639.js";function v(o){return o.substring(2).toLowerCase()}function w(o,s){return s.documentElement.clientWidth<o.clientX||s.documentElement.clientHeight<o.clientY}function H(o){const{children:s,disableReactTree:R=!1,mouseEvent:u="onClick",onClickAway:L,touchEvent:i="onTouchEnd"}=o,f=n.useRef(!1),c=n.useRef(null),l=n.useRef(!1),d=n.useRef(!1);n.useEffect(()=>(setTimeout(()=>{l.current=!0},0),()=>{l.current=!1}),[]);const k=T(s.ref,c),a=g(e=>{const t=d.current;d.current=!1;const r=h(c.current);if(!l.current||!c.current||"clientX"in e&&w(e,r))return;if(f.current){f.current=!1;return}let E;e.composedPath?E=e.composedPath().indexOf(c.current)>-1:E=!r.documentElement.contains(e.target)||c.current.contains(e.target),!E&&(R||!t)&&L(e)}),p=e=>t=>{d.current=!0;const r=s.props[e];r&&r(t)},m={ref:k};return i!==!1&&(m[i]=p(i)),n.useEffect(()=>{if(i!==!1){const e=v(i),t=h(c.current),r=()=>{f.current=!0};return t.addEventListener(e,a),t.addEventListener("touchmove",r),()=>{t.removeEventListener(e,a),t.removeEventListener("touchmove",r)}}},[a,i]),u!==!1&&(m[u]=p(u)),n.useEffect(()=>{if(u!==!1){const e=v(u),t=h(c.current);return t.addEventListener(e,a),()=>{t.removeEventListener(e,a)}}},[a,u]),C(n.Fragment,{children:n.cloneElement(s,m)})}export{H as C};
//# sourceMappingURL=ClickAwayListener-73754b4f.js.map
