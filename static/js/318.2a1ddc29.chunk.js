"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[318],{7318:function(e,n,t){t.r(n),t.d(n,{default:function(){return J}});var r,a=t(7762),c=t(9439),i=t(2791),o=t(4420),s=t(3634),l=t(3553),u=function(e){return e.contacts.filter},d=function(e){return e.contacts.contacts},x=function(e){return e.contacts.isLoading},m=function(e){return e.contacts.error},h=(0,l.P1)([d,u],(function(e,n){return e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase().trim())}))})),p=t(697),f=t(890),Z=t(2164),b=t(4294),v=t(2419),j=t(168),y=t(225),g=y.Z.form(r||(r=(0,j.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),w=t(184);function C(){var e=(0,i.useState)(""),n=(0,c.Z)(e,2),t=n[0],r=n[1],l=(0,i.useState)(""),u=(0,c.Z)(l,2),x=u[0],m=u[1],h=(0,o.I0)(),j=(0,o.v9)(d);function y(e){switch(e.currentTarget.name){case"name":r(e.currentTarget.value);break;case"number":m(e.currentTarget.value);break;default:return}}return(0,w.jsx)(p.Z,{sx:{flexGrow:1,maxWidth:752,width:"inherit"},children:(0,w.jsxs)(g,{onSubmit:function(e){e.preventDefault();var n,c=[],i=(0,a.Z)(j);try{for(i.s();!(n=i.n()).done;){var o=n.value;c.push(o.name)}}catch(l){i.e(l)}finally{i.f()}c.includes(t)?alert("".concat(t," is already in contacts list")):(h((0,s.el)({name:t,number:x})),r(""),m(""))},children:[(0,w.jsx)(f.Z,{variant:"body",component:"lable",color:"primary.contrastText",children:"Name"}),(0,w.jsx)(Z.Z,{label:"name",variant:"outlined",autoComplete:"off",type:"text",name:"name",value:t,onChange:y,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,w.jsx)(f.Z,{variant:"body",component:"lable",color:"primary.contrastText",children:"Number"}),(0,w.jsx)(Z.Z,{label:"number",variant:"outlined",type:"tel",name:"number",value:x,onChange:y,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,w.jsx)("label",{children:(0,w.jsx)(b.Z,{variant:"contained",startIcon:(0,w.jsx)(v.Z,{}),type:"submit",children:"Add contact"})})]})})}var k,A,T,_=t(1889),z=t(493),I=t(3400),N=t(653),P=t(3044),q=t(6259),G=t(7247),L=t(4852),S=(0,y.Z)(L.ZP)(k||(k=(0,j.Z)(["\n  :hover {\n    background-color: #90a955;\n    border-radius: 8px;\n  }\n"]))),W=function(){var e=(0,o.v9)(h),n=(0,o.v9)(x),t=(0,o.v9)(m),r=(0,o.I0)();return(0,i.useEffect)((function(){r((0,s.yF)())}),[r]),(0,w.jsx)(p.Z,{sx:{flexGrow:1,maxWidth:752,width:"inherit"},children:(0,w.jsxs)(_.ZP,{children:[(0,w.jsxs)(f.Z,{variant:"h4",component:"h2",children:[" ","My contacts"]}),n&&!t&&(0,w.jsx)("b",{children:"Request in progress..."}),(0,w.jsx)(z.Z,{children:e.length>0?e.map((function(e){return(0,w.jsxs)(S,{secondaryAction:(0,w.jsx)(I.Z,{edge:"end","aria-label":"delete",onClick:function(){return r((0,s._f)(e.id))},children:(0,w.jsx)(G.Z,{})}),children:[(0,w.jsx)(N.Z,{children:(0,w.jsx)(P.Z,{})}),(0,w.jsx)(q.Z,{primary:(0,w.jsxs)(f.Z,{component:"p",variant:"h6",children:[e.name,": ",e.number]})})]},e.id)})):"No contact here yet"})]})})},F=(0,y.Z)(p.Z)(A||(A=(0,j.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"]))),M=t(1538),B=function(){var e=(0,o.v9)(u),n=(0,o.I0)();return(0,w.jsxs)(F,{sx:{flexGrow:1,maxWidth:752},children:[(0,w.jsx)(f.Z,{variant:"body",component:"lable",color:"primary.contrastText"}),(0,w.jsx)(Z.Z,{label:"find your contact",variant:"outlined",type:"text",value:e,onChange:function(e){n((0,M.xO)(e.currentTarget.value))}})]})},D=t(1614),E=(0,y.Z)(D.Z)(T||(T=(0,j.Z)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]))),J=function(){return(0,w.jsxs)(E,{sx:{mt:{xs:"5px",sm:"20px"}},children:[(0,w.jsx)(C,{}),(0,w.jsx)(B,{}),(0,w.jsx)(W,{})]})}}}]);
//# sourceMappingURL=318.2a1ddc29.chunk.js.map