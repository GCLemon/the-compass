(()=>{"use strict";var e={2:(e,r,n)=>{var a=n(963),t=n(252),i=(0,t._)("h1",null,"The Compass チェスマップジェネレータ",-1),o=(0,t._)("div",null," このページは、華麗なる怪盗TRPG PHANTOMISM シナリオ「The Compass」の2回目で使用するチェスマップを自動生成するものです。 下のボタンをクリックすると、チェスマップ情報を含んだXMLファイルがダウンロードされます。 ダウンロードされたXMLファイルをUdonariumの画面にドラッグ&ドロップすると、チェスマップを表示することができます。 ",-1),u=(0,t._)("div",null," PHANTOMISMの著作権は全て「miRa」「つきのふね」に帰属します。 ",-1);function d(e,r,n,a,d,c){return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,o,(0,t._)("div",null,[(0,t._)("input",{type:"button",value:"チェスマップを生成",onClick:r[0]||(r[0]=function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return e.loadXml&&e.loadXml.apply(e,r)})})]),u],64)}var c=n(655),f=n(996),l=n.n(f);function s(e,r,n){var a=new(l());while(1){for(var t=new Array(e-4),i=0;i<e-4;++i)t[i]=new Array(r).fill(!1);for(var o,u=function(n){var i=Math.floor(a.random_incl()*r),u=Math.floor(a.random_incl()*(e-4));return 2<=t[u].reduce((function(e,r,n,a){return e+(r?1:0)}),0)||2<=t.reduce((function(e,r,n,a){return e+(r[i]?1:0)}),0)?(--n,o=n,"continue"):(t[u][i]=!0,void(o=n))},d=0;d<n;++d)u(d),d=o;if(t.reduce((function(e,r,n,a){return r.map((function(r,n,a){return r||e[n]}))})).reduce((function(e,r,n,a){return e&&r}),!0)&&t.map((function(e,r,n){return e.reduce((function(e,r,n,a){return e||r}))})).reduce((function(e,r,n,a){return e&&r}),!0)){t.unshift(new Array(r).fill(!1)),t.unshift(new Array(r).fill(!1)),t.push(new Array(r).fill(!1)),t.push(new Array(r).fill(!1));for(var c=!1,f=0;f<r;++f){for(i=0;i<e;++i){var s=0;if(s+=f-1<0||r<=f-1||t[i][f-1]?1:0,s+=f+1<0||r<=f+1||t[i][f+1]?1:0,s+=i-1<0||e<=i-1||t[i-1][f]?1:0,s+=i+1<0||e<=i+1||t[i+1][f]?1:0,c=s>=3,c)break}if(c)break}if(!c){var m=new Array;for(f=0;f<r-1;++f)for(i=0;i<e-1;++i)t[i+0][f+0]||t[i+0][f+1]||t[i+1][f+0]||t[i+1][f+1]||m.push([i+0,f+0,i+0,f+1,i+1,f+0,i+1,f+1]);var p=new Array,h=m.shift();h&&p.push(h);var v=function(){var e=p.shift();if(e){var r=function(e,r){for(var n=0;n<e.length;++n)if(e[n]!=r[n])return!1;return!0},n=e.map((function(e,r,n){return r%2==0?e-1:e})),a=m.findIndex((function(e,a,t){return r(e,n)}));-1!=a&&(p.push(n),m.splice(a,1));var t=e.map((function(e,r,n){return r%2==0?e+1:e})),i=m.findIndex((function(e,n,a){return r(e,t)}));-1!=i&&(p.push(t),m.splice(i,1));var o=e.map((function(e,r,n){return r%2==1?e-1:e})),u=m.findIndex((function(e,n,a){return r(e,o)}));-1!=u&&(p.push(o),m.splice(u,1));var d=e.map((function(e,r,n){return r%2==1?e+1:e})),c=m.findIndex((function(e,n,a){return r(e,d)}));-1!=c&&(p.push(d),m.splice(c,1))}};while(p.length>0)v();if(!(m.length>0))return t}}}}function m(e){for(var r='<?xml version="1.0" encoding="UTF-8"?><game-table name="チェス - 2" width="18" height="40" gridSize="50" imageIdentifier="d3e2ee12ee48f73e8d02da3d1d910850dcf19cd2051c4729473984f9c608a601" backgroundImageIdentifier="135be99407c465c3b297d0b332a85a2d99937f856baa339dae89b82e3386c5ef" backgroundFilterType="black" selected="true" gridType="0" gridColor="#0000006e" girdSize="50">',n=0;n<e.length;++n)for(var a=0;a<e[n].length;++a)e[n][a]&&(r+='<terrain location.name="table" location.x="'.concat(100*(a+1),'" location.y="').concat(100*(n+1),'" posZ="0" isLocked="true" mode="3" rotate="0"><data name="terrain"><data name="image"><data type="image" name="imageIdentifier"></data><data type="image" name="wall">./assets/images/tex.jpg</data><data type="image" name="floor">./assets/images/tex.jpg</data></data><data name="common"><data name="name">地形</data><data name="width">2</data><data name="height">2</data><data name="depth">2</data></data><data name="detail"></data></data></terrain>'));return r+="</game-table>",r}const p=(0,t.aZ)({methods:{loadXml:function(){return(0,c.mG)(this,void 0,void 0,(function(){var e,r,n,a,t;return(0,c.Jh)(this,(function(i){return e=s(18,7,15),r=m(e),n=new Blob([r],{type:"text/xml"}),a=URL.createObjectURL(n),t=document.createElement("a"),document.body.appendChild(t),t.download="chess-map.xml",t.href=a,t.click(),t.remove(),URL.revokeObjectURL(a),[2]}))}))}}});var h=n(744);const v=(0,h.Z)(p,[["render",d]]),g=v;(0,a.ri)(g).mount("#app")}},r={};function n(a){var t=r[a];if(void 0!==t)return t.exports;var i=r[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(r,a,t,i)=>{if(!a){var o=1/0;for(f=0;f<e.length;f++){for(var[a,t,i]=e[f],u=!0,d=0;d<a.length;d++)(!1&i||o>=i)&&Object.keys(n.O).every((e=>n.O[e](a[d])))?a.splice(d--,1):(u=!1,i<o&&(o=i));if(u){e.splice(f--,1);var c=t();void 0!==c&&(r=c)}}return r}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[a,t,i]}})(),(()=>{n.n=e=>{var r=e&&e.__esModule?()=>e["default"]:()=>e;return n.d(r,{a:r}),r}})(),(()=>{n.d=(e,r)=>{for(var a in r)n.o(r,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})}})(),(()=>{n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r)})(),(()=>{var e={143:0};n.O.j=r=>0===e[r];var r=(r,a)=>{var t,i,[o,u,d]=a,c=0;if(o.some((r=>0!==e[r]))){for(t in u)n.o(u,t)&&(n.m[t]=u[t]);if(d)var f=d(n)}for(r&&r(a);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},a=self["webpackChunkthe_compass"]=self["webpackChunkthe_compass"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})();var a=n.O(void 0,[998],(()=>n(2)));a=n.O(a)})();
//# sourceMappingURL=app.f7df3fd1.js.map