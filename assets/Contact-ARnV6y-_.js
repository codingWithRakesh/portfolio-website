import{G as l,r as s,U as p,u as x,j as e}from"./index-QsB6Lxp8.js";const i="/assets/contact-BzP4h_mx.gif";function h(t){return l({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"2",x2:"11",y2:"13"},child:[]},{tag:"polygon",attr:{points:"22 2 15 22 11 13 2 9 22 2"},child:[]}]})(t)}function f(t){return l({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zm204.336-636.352L415.935 626.944l-135.28-135.28c-12.496-12.496-32.752-12.496-45.264 0-12.496 12.496-12.496 32.752 0 45.248l158.384 158.4c12.496 12.48 32.752 12.48 45.264 0 1.44-1.44 2.673-3.009 3.793-4.64l318.784-320.753c12.48-12.496 12.48-32.752 0-45.263-12.512-12.496-32.768-12.496-45.28 0z"},child:[]}]})(t)}const b=()=>{const[[t]]=s.useContext(p),[[g,r]]=x();s.useEffect(()=>{r(20),setTimeout(()=>{r(100)},20)},[r]);const[o,n]=s.useState(!1),a=s.useRef(null),u="https://script.google.com/macros/s/AKfycbyXZOwoKIQ_Dm1qLrXOcp1qC8205nP0bRVWGMHNFa45hztL7QHPxDOT1unsYKJFNrRg/exec",m=d=>{d.preventDefault(),fetch(u,{method:"POST",body:new FormData(a.current)}).then(c=>{n(!0),setTimeout(()=>{n(!1)},1e3),a.current.reset()}).catch(c=>console.error("Error!",c.message))};return e.jsxs("div",{className:`mainContainer contact ${t?"mainContainerSmall":""}`,children:[e.jsx("div",{className:"showGIF",children:e.jsx("img",{src:i,alt:i})}),e.jsxs("form",{className:"inputContact boxShadows",action:"#",ref:a,name:"submit-to-google-sheet",onSubmit:m,children:[e.jsx("input",{type:"text",placeholder:"Name",className:"firstRow",name:"Name",required:!0}),e.jsx("input",{type:"email",placeholder:"Email",className:"firstRow",name:"Email",required:!0}),e.jsx("input",{type:"text",placeholder:"Subject",className:"firstRow",name:"Subject",required:!0}),e.jsx("textarea",{placeholder:"Message...",className:"lastRow",name:"Message",required:!0}),e.jsxs("button",{type:"submit",className:"button-60 contactButton",children:[o?"Submited":"Submit",o?e.jsx(f,{}):e.jsx(h,{})]})]})]})};export{b as default};