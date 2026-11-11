"use strict";var c=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var d=c(function(g,s){
var l=require('@stdlib/ndarray-base-numel-dimension/dist'),u=require('@stdlib/ndarray-base-stride/dist'),v=require('@stdlib/ndarray-base-offset/dist'),n=require('@stdlib/ndarray-base-data-buffer/dist'),o=require('@stdlib/blas-ext-base-zaxpby/dist').ndarray,q=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function p(e){var r,t,a,i;return a=e[0],i=e[1],r=q(e[2]),t=q(e[3]),o(l(a,0),r,n(a),u(a,0),v(a),t,n(i),u(i,0),v(i)),i}s.exports=p
});var x=d();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
