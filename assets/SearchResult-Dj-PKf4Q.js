import{r as a,U as p,u as S,f as P,g as w,a as k,d as h,j as s}from"./index-DwPbqkZO.js";import{P as $}from"./ProjectCom-DxMB4XYZ.js";import{S as E}from"./Skill-DlxQDDNz.js";import{C as L}from"./CertificateCom-DSA_Wjk2.js";import"./index-B1y112Tx.js";const M=()=>{const[[f]]=a.useContext(p),[[,c]]=S(),[[o,u]]=P(),[d]=w(),i=d.get("q")||"",[[,m]]=k();a.useEffect(()=>{m("")},[m]),a.useEffect(()=>{c(20),setTimeout(()=>{c(100)},200)},[c]),a.useEffect(()=>{i&&u(i.toLowerCase())},[i,u]);const l=a.useMemo(()=>{const e=h.skills.filter(t=>t.name.toLowerCase().includes(o));return e.length>0?e:[]},[o]),r=a.useMemo(()=>{const e=h.projects.filter(t=>t.name.toLowerCase().includes(o));return e.length>0?e:[]},[o]),n=a.useMemo(()=>{const e=h.certificates.filter(t=>t.name.toLowerCase().includes(o));return e.length>0?e:[]},[o]),g=l.length+r.length+n.length,j=l.length>0&&r.length===0&&n.length===0,x=r.length>0&&l.length===0&&n.length===0,C=n.length>0&&l.length===0&&r.length===0;return s.jsxs("div",{className:`mainContainer searchResult ${f?"mainContainerSmall":""}`,children:[s.jsx("div",{className:"titleSearch",children:j?`Skills results (${l.length})`:x?`Project results (${r.length})`:C?`Certificate results (${n.length})`:`All results (${g})`}),s.jsxs("div",{className:`showSearchResult ${l.length===1&&g===1?"colum1":""}`,children:[s.jsx("div",{className:"forSkill",children:l.length>0&&s.jsx(s.Fragment,{children:l.map((e,t)=>s.jsx(E,{data:e},t))})}),r.length>0&&s.jsx(s.Fragment,{children:r.map((e,t)=>s.jsx($,{data:e,classProject:"width100"},t))}),n.length>0&&s.jsx(s.Fragment,{children:n.map((e,t)=>s.jsx(L,{data:e},t))})]})]})};export{M as default};