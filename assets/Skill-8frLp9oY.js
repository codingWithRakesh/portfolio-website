import{u as c,c as a,j as s,L as t,F as x}from"./index-C5657q5A.js";import{L as o}from"./index-DGF-7asG.js";const p=({data:e})=>{const[[m,i]]=c(),n=a(),l=r=>{i(20),setTimeout(()=>{i(100)},20),window.scrollTo({top:0,behavior:"smooth"}),r.preventDefault(),n(`/${e.name}`)};return e.iconOut?s.jsxs(t,{onClick:l,to:`/${e.name}`,className:"skillBox boxShadows",children:[e.isCertified&&s.jsx("div",{className:"isisCertified",children:s.jsx(x,{})}),e.iconOut&&s.jsx("span",{className:"goOutSide",children:s.jsx(o,{})}),s.jsx("span",{children:e.icon}),s.jsx("p",{children:e.name})]}):s.jsxs("div",{className:"skillBox boxShadows",children:[e.iconOut&&s.jsx("span",{className:"goOutSide",children:s.jsx(o,{})}),s.jsx("span",{children:e.icon}),s.jsx("p",{children:e.name})]})};export{p as S};