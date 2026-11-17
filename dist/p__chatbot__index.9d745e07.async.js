"use strict";(self.webpackChunk_melt_js_tpl_react_admin_antd_pro=self.webpackChunk_melt_js_tpl_react_admin_antd_pro||[]).push([[5742],{75813:(function(Me,N,t){t.r(N),t.d(N,{default:function(){return ge}});var w=t(62553),J=t.n(w),Q=t(59604),R=t.n(Q),Y=t(97970),g=t.n(Y),Z=t(44126),$=t(83113),q=t(22597),_=t(72940),ee=t(78266),te=t(6130),ne=t(17039),ae=t(41914),re=t(44685),A=t(65681),s=t(7378),se=t(63731),le=t(46376),S,oe=(S=void 0)!==null&&S!==void 0?S:"https://api.x.ant.design/api/big_model_glm-4.5-flash",ie=function(){return new se.A({request:(0,le.Ay)(oe,{manual:!0,params:{model:"glm-4.5-flash",stream:!0}})})},ue=t(39967),o=t.n(ue),de=t(73404),O,E,L,F,B,K,z,G,U=(0,de.rU)(function(c){var a=c.css,e=c.token;return{layout:a(O||(O=o()([`
    display: flex;
    flex: 1;
    overflow: hidden;
  `]))),sidebar:a(E||(E=o()([`
    width: 260px;
    background: `,`;
    border-right: 1px solid `,`;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `])),e.colorBgContainer,e.colorBorderSecondary),main:a(L||(L=o()([`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    min-width: 0;
    background: `,`;
  `])),e.colorBgContainer),messages:a(F||(F=o()([`
    flex: 1;
    overflow-y: auto;
    padding: `,`px;
    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
      width: 100%;
    }
  `])),e.paddingMD),footer:a(B||(B=o()([`
    padding: `,`px;
    border-top: 1px solid `,`;
    display: flex;
    justify-content: center;
  `])),e.paddingMD,e.colorBorderSecondary),footerCenter:a(K||(K=o()([`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: `,`px;
    gap: 32px;
    margin-top: -10%;
  `])),e.paddingLG),welcomeTitle:a(z||(z=o()([`
    font-size: 32px;
    font-weight: 600;
    color: `,`;
    text-align: center;
  `])),e.colorText),cursor:a(G||(G=o()([`
    animation: chatbot-blink 0.8s step-end infinite;

    @keyframes chatbot-blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  `])))}}),n=t(86106),k="\u{1F916} \u4F60\u597D\uFF0C\u6709\u4EC0\u4E48\u53EF\u4EE5\u5E2E\u4F60\uFF1F",ce=function(){var a=U(),e=a.styles,m=(0,s.useState)(0),i=g()(m,2),u=i[0],v=i[1],D=u>=k.length;return(0,s.useEffect)(function(){var h=setInterval(function(){v(function(p){return p>=k.length?(clearInterval(h),p):p+1})},80);return function(){return clearInterval(h)}},[]),(0,n.jsxs)(n.Fragment,{children:[k.slice(0,u),!D&&(0,n.jsx)("span",{className:e.cursor,children:"|"})]})},ve=function(a){var e=a.content,m=a.role;if(m!=="assistant")return{role:"user",content:e};var i=e.trimStart(),u=i.match(/^<think>([\s\S]*?)<\/think>([\s\S]*)$/);if(u)return{role:"assistant",thinkContent:u[1],content:u[2].trimStart()};var v=i.match(/^<think>([\s\S]*)$/);return v?{role:"assistant",thinkContent:v[1],content:""}:{role:"assistant",content:e}},fe={hasNextChunk:!0,enableAnimation:!0},he={hasNextChunk:!1,enableAnimation:!0},me={user:{placement:"end",avatar:(0,n.jsx)(A.Avatar,{icon:(0,n.jsx)(Z.A,{})})},ai:{placement:"start",avatar:(0,n.jsx)(A.Avatar,{style:{background:"transparent",fontSize:22,display:"flex",alignItems:"center",justifyContent:"center"},children:"\u{1F916}"}),typing:{effect:"typing",step:2,interval:20},contentRender:function(a,e){if(!(e!=null&&e.loading||!a))return(0,n.jsx)(ae.A,{streaming:(e==null?void 0:e.status)==="updating"?fe:he,children:a})}}},pe=function(){var a=U(),e=a.styles,m=(0,s.useRef)(0),i=(0,s.useCallback)(function(){return"conv-".concat(++m.current)},[]),u=(0,s.useState)([{key:"default",label:"\u{1F4AC} \u65B0\u5BF9\u8BDD",group:"\u4ECA\u5929",isDraft:!0},{key:"preset-1",label:"\u{1F9E9} Ant Design \u7684 Form \u8868\u5355\u5982\u4F55\u505A\u8054\u52A8\u6821\u9A8C\uFF1F",group:"\u4ECA\u5929"},{key:"preset-2",label:"\u{1F4CB} ProTable \u5982\u4F55\u81EA\u5B9A\u4E49\u5DE5\u5177\u680F\u6309\u94AE\uFF1F",group:"\u4ECA\u5929"},{key:"preset-3",label:"\u{1F3A8} \u5982\u4F55\u7528 antd-style \u5B9E\u73B0\u6697\u8272\u4E3B\u9898\u5207\u6362\uFF1F",group:"\u6628\u5929"},{key:"preset-4",label:"\u{1F5C2}\uFE0F ProLayout \u4FA7\u8FB9\u83DC\u5355\u5982\u4F55\u52A8\u6001\u751F\u6210\uFF1F",group:"\u6628\u5929"},{key:"preset-5",label:"\u{1F4CA} Ant Design Charts \u6298\u7EBF\u56FE\u6570\u636E\u683C\u5F0F",group:"\u6628\u5929"},{key:"preset-6",label:"\u{1F680} Ant Design Pro \u5982\u4F55\u63A5\u5165\u540E\u7AEF\u6743\u9650\u7CFB\u7EDF\uFF1F",group:"\u66F4\u65E9"},{key:"preset-7",label:"\u{1F50D} ProForm \u4E2D Select \u8FDC\u7A0B\u641C\u7D22\u600E\u4E48\u5B9E\u73B0\uFF1F",group:"\u66F4\u65E9"},{key:"preset-8",label:"\u2699\uFE0F Ant Design Token \u5B9A\u5236\u4E3B\u9898\u6700\u4F73\u5B9E\u8DF5",group:"\u66F4\u65E9"}]),v=g()(u,2),D=v[0],h=v[1],p=(0,s.useState)("default"),V=g()(p,2),y=V[0],x=V[1],ye=(0,s.useState)(""),W=g()(ye,2),xe=W[0],X=W[1],Ce=(0,s.useMemo)(function(){return ie()},[]),C=(0,re.A)({provider:Ce,conversationKey:y,parser:ve,requestPlaceholder:{role:"assistant",content:""}}),je=C.onRequest,be=C.abort,Ae=C.isRequesting,T=C.parsedMessages,Se=function(r){X(""),h(function(d){return d.map(function(l){return l.key===y&&l.isDraft?R()(R()({},l),{},{label:r.slice(0,20),isDraft:!1}):l})}),je({messages:[{role:"user",content:r}]})},ke=function(){var r=i();h(function(d){return[{key:r,label:"\u65B0\u5BF9\u8BDD",group:"\u4ECA\u5929",isDraft:!0}].concat(J()(d))}),x(r)},De=(0,s.useMemo)(function(){return T.map(function(f){var r=f.message,d=r.role==="assistant",l=r.role==="assistant"?r.thinkContent:void 0,j={key:f.id,role:d?"ai":"user",content:r.content,loading:d&&f.status==="loading",status:f.status};return d&&l&&(j.header=(0,n.jsx)(q.A,{children:l})),j})},[T]),I=T.length>0;return(0,n.jsx)($.LN,{ghost:!0,childrenContentStyle:{paddingBlock:0,height:"calc(100vh - 160px)",display:"flex",flexDirection:"column",overflow:"hidden"},children:(0,n.jsx)(A.Card,{variant:"borderless",style:{height:"100%",display:"flex",flexDirection:"column",overflow:"hidden"},styles:{body:{flex:1,padding:0,overflow:"hidden",display:"flex",flexDirection:"column"}},children:(0,n.jsx)(_.Ay,{children:(0,n.jsxs)("div",{className:e.layout,children:[(0,n.jsx)("div",{className:e.sidebar,children:(0,n.jsx)(ee.A,{items:D,activeKey:y,onActiveChange:x,groupable:!0,menu:function(r){return{items:[{key:"delete",label:"\u5220\u9664",danger:!0}],onClick:function(l){var j=l.key;j==="delete"&&h(function(Te){var b=Te.filter(function(Ie){return Ie.key!==r.key});if(b.length===0){var H=i();b.push({key:H,label:"\u{1F4AC} \u65B0\u5BF9\u8BDD",group:"\u4ECA\u5929",isDraft:!0}),x(H)}else if(y===r.key){var M,P;x((M=(P=b[0])===null||P===void 0?void 0:P.key)!==null&&M!==void 0?M:"")}return b})}}},creation:{onClick:ke,label:"\u65B0\u5EFA\u5BF9\u8BDD"}})}),(0,n.jsxs)("div",{className:e.main,children:[I&&(0,n.jsx)("div",{className:e.messages,children:(0,n.jsx)(te.A.List,{items:De,role:me,autoScroll:!0,styles:{root:{maxWidth:940}}})}),(0,n.jsxs)("div",{className:I?e.footer:e.footerCenter,children:[!I&&(0,n.jsx)("div",{className:e.welcomeTitle,children:(0,n.jsx)(ce,{})}),(0,n.jsx)(ne.A,{value:xe,onChange:X,loading:Ae,onSubmit:Se,onCancel:be,placeholder:"\u8F93\u5165\u6D88\u606F\uFF0C\u6309 Enter \u53D1\u9001...",autoSize:{minRows:4,maxRows:8},style:{maxWidth:940,width:"100%"},styles:{input:{paddingBlock:0}}})]})]})]})})})})},ge=pe})}]);
