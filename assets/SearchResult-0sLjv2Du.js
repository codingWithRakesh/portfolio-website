import{r,U as C,u as S,f as w,g as P,a as R,d as h,j as t}from"./index-Cw3CtEDu.js";import{P as k}from"./ProjectCom-C5n-MnJv.js";import{S as E}from"./Skill-f43XWNQg.js";import{C as $}from"./CertificateCom-Dm360KMP.js";import"./index-CMtxMWXq.js";const M=()=>{const[[g]]=r.useContext(C),[[,c]]=S(),[[a,u]]=w(),[d]=P(),i=d.get("q")||"",[[,m]]=R();r.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),r.useEffect(()=>{m("")},[m]),r.useEffect(()=>{c(20),setTimeout(()=>{c(100)},200)},[c]),r.useEffect(()=>{i&&u(i.toLowerCase())},[i,u]);const l=r.useMemo(()=>{const e=h.skills.filter(s=>s.name.toLowerCase().includes(a));return e.length>0?e:[]},[a]),o=r.useMemo(()=>{const e=h.projects.filter(s=>s.name.toLowerCase().includes(a));return e.length>0?e:[]},[a]),n=r.useMemo(()=>{const e=h.certificates.filter(s=>s.name.toLowerCase().includes(a));return e.length>0?e:[]},[a]),f=l.length+o.length+n.length,j=l.length>0&&o.length===0&&n.length===0,p=o.length>0&&l.length===0&&n.length===0,x=n.length>0&&l.length===0&&o.length===0;return t.jsxs("div",{className:`mainContainer searchResult ${g?"mainContainerSmall":""}`,children:[t.jsx("div",{className:"titleSearch",children:j?`Skills Results (${l.length})`:p?`Project Results (${o.length})`:x?`Certificate Results (${n.length})`:`All Results (${f})`}),t.jsxs("div",{className:`showSearchResult ${l.length===1&&f===1?"colum1":""}`,children:[l.length>0&&t.jsx("div",{className:"forSkill",children:l.map((e,s)=>t.jsx(E,{data:e},s))}),o.length>0&&t.jsx(t.Fragment,{children:o.map((e,s)=>t.jsx(k,{data:e,classProject:"width100"},s))}),n.length>0&&t.jsx(t.Fragment,{children:n.map((e,s)=>t.jsx($,{data:e},s))})]})]})};export{M as default};