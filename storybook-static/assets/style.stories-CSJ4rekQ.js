const o={position:"fixed",top:"0",width:"100vw",height:"100vh",overflowY:"hidden",zIndex:"10"},r={position:"absolute",height:"100%",width:"100%",backgroundColor:"#333333d3"},e={position:"absolute",top:"-10px",right:"-10px",width:"30px",height:"30px",cursor:"pointer",transition:"transform 0.5s",transform:"scale(1)","&:hover":{transform:"scale(1.2)"}},n={position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",borderRadius:"10px 0 10px 10px",border:"1px solid black",width:"70%",display:"flex",alignItems:"center",padding:"15px",zIndex:"10"},f={overlayModal:r,modalContainer:o,modalCloseButton:e,modal:n};var t,a,s;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  position: "fixed",
  top: "0",
  width: "100vw",
  height: "100vh",
  overflowY: "hidden",
  zIndex: "10"
}`,...(s=(a=o.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  position: "absolute",
  height: "100%",
  width: "100%",
  backgroundColor: "#333333d3"
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  position: "absolute",
  top: "-10px",
  right: "-10px",
  width: "30px",
  height: "30px",
  cursor: "pointer",
  transition: "transform 0.5s",
  transform: "scale(1)",
  "&:hover": {
    transform: "scale(1.2)"
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var h,x,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  borderRadius: "10px 0 10px 10px",
  border: "1px solid black",
  width: "70%",
  display: "flex",
  alignItems: "center",
  padding: "15px",
  zIndex: "10"
}`,...(u=(x=n.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const g=["modalContainer","overlayModal","modalCloseButton","modal"];export{g as __namedExportsOrder,f as default,n as modal,e as modalCloseButton,o as modalContainer,r as overlayModal};
