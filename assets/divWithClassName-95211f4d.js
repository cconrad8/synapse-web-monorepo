import{_ as c}from"./extends-98964cd2.js";import{_ as E}from"./objectWithoutPropertiesLoose-4f48578a.js";import{c as m}from"./Button-7d415009.js";import{R as o,r as w}from"./index-f1f749bf.js";import{E as C,a as T,T as x}from"./Transition-550b3899.js";import{o as g,l as N}from"./createWithBsPrefix-e09f51dd.js";import{p as d}from"./index-4d501b15.js";function P(t){var e=g(t);return e&&e.defaultView||window}function R(t,e){return P(t).getComputedStyle(t,e)}var D=/([A-Z])/g;function $(t){return t.replace(D,"-$1").toLowerCase()}var F=/^ms-/;function l(t){return $(t).replace(F,"-ms-")}var L=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function O(t){return!!(t&&L.test(t))}function h(t,e){var r="",a="";if(typeof e=="string")return t.style.getPropertyValue(l(e))||R(t).getPropertyValue(l(e));Object.keys(e).forEach(function(n){var s=e[n];!s&&s!==0?t.style.removeProperty(l(n)):O(n)?a+=n+"("+s+") ":r+=l(n)+": "+s+";"}),a&&(r+="transform: "+a+";"),t.style.cssText+=";"+r}function S(t,e,r,a){if(r===void 0&&(r=!1),a===void 0&&(a=!0),t){var n=document.createEvent("HTMLEvents");n.initEvent(e,r,a),t.dispatchEvent(n)}}function k(t){var e=h(t,"transitionDuration")||"",r=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*r}function B(t,e,r){r===void 0&&(r=5);var a=!1,n=setTimeout(function(){a||S(t,"transitionend",!0)},e+r),s=N(t,"transitionend",function(){a=!0},{once:!0});return function(){clearTimeout(n),s()}}function b(t,e,r,a){r==null&&(r=k(t)||0);var n=B(t,r,a),s=N(t,"transitionend",e);return function(){n(),s()}}function v(t,e){var r=h(t,e)||"",a=r.indexOf("ms")===-1?1e3:1;return parseFloat(r)*a}function V(t,e){var r=v(t,"transitionDuration"),a=v(t,"transitionDelay"),n=b(t,function(s){s.target===t&&(n(),e(s))},r+a)}function W(t){t.offsetHeight}var j=["className","children"],u,H={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},X=(u={},u[C]="show",u[T]="show",u),p=o.forwardRef(function(t,e){var r=t.className,a=t.children,n=E(t,j),s=w.useCallback(function(i){W(i),n.onEnter&&n.onEnter(i)},[n]);return o.createElement(x,c({ref:e,addEndListener:V},n,{onEnter:s}),function(i,y){return o.cloneElement(a,c({},y,{className:m("fade",r,a.props.className,X[i])}))})});p.defaultProps=H;p.displayName="Fade";const J=p;var Y=["label","onClick","className"],Z={label:d.string.isRequired,onClick:d.func},_={label:"Close"},f=o.forwardRef(function(t,e){var r=t.label,a=t.onClick,n=t.className,s=E(t,Y);return o.createElement("button",c({ref:e,type:"button",className:m("close",n),onClick:a},s),o.createElement("span",{"aria-hidden":"true"},"×"),o.createElement("span",{className:"sr-only"},r))});f.displayName="CloseButton";f.propTypes=Z;f.defaultProps=_;const K=f,Q=function(t){return o.forwardRef(function(e,r){return o.createElement("div",c({},e,{ref:r,className:m(e.className,t)}))})};export{K as C,J as F,V as a,W as b,Q as d,h as s,b as t};
//# sourceMappingURL=divWithClassName-95211f4d.js.map
