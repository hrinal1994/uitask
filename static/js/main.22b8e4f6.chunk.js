(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),s=a.n(i),l=a(5),r=a.n(l),c=(a(15),a(3)),d=a(6),o=a(7),h=a(9),p=a(8),m=(a(4),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={classForHighlight:!1,leftGreen:50,leftBlue:50,rightGreen:50,rightBlue:50,capablityDetails:[{capName:"Capablity name 01",value:50,rank:1},{capName:"Capablity name 02",value:67,rank:2},{capName:"Capablity name 03",value:53,rank:3},{capName:"Capablity name 04",value:20,rank:4},{capName:"Capablity name 05",value:90,rank:5},{capName:"Capablity name 06",value:3,rank:6},{capName:"Capablity name 07",value:50,rank:7},{capName:"Capablity name 08",value:80,rank:8},{capName:"Capablity name 09",value:85,rank:9},{capName:"Capablity name 10",value:30,rank:10}]},e.leftSlider=function(t){var a=t.target.value,n=100-a;e.setState({leftGreen:a,leftBlue:n})},e.rightSlider=function(t){var a=t.target.value,n=100-a;e.setState({rightGreen:a,rightBlue:n})},e.closeNav=function(){document.getElementById("mySidepanel").style.width="0px"},e.openNav=function(){document.getElementById("mySidepanel").style.width="275px"},e.closeNavRgt=function(){document.getElementById("mySidepanel1").style.width="0px"},e.openNavRgt=function(){document.getElementById("mySidepanel1").style.width="275px"},e.rangeChange=function(){for(var t=Object(c.a)(e.state.capablityDetails),a=0;a<t.length;a++)t[a].value=document.getElementsByClassName("slider")[a].value;t.sort((function(e,t){return t.value-e.value})),console.log(t),t.map((function(e,t){return e.rank=t+1}));var n=Object(c.a)(e.state.capablityDetails);n.forEach((function(e,a){t.forEach((function(e,i){n[a].capName==t[i].capName&&(n[a].rank=t[i].rank)}))})),console.log(n),e.setState({capablityDetails:n})},e.highlight=function(t){console.log(t.target.innerHTML),1!=t.target.innerHTML&&2!=t.target.innerHTML&&3!=t.target.innerHTML||e.setState({classForHighlight:"highlight"})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state.capablityDetails.map((function(t,a){return 1==t.rank||2==t.rank||3==t.rank?Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"highlight",children:t.capName}),Object(n.jsx)("td",{colSpan:"3",children:Object(n.jsx)("input",{className:"commonRange",onChange:e.rangeChange,type:"range",min:"1",max:"100",class:"slider"})}),Object(n.jsx)("td",{className:"highlight",value:t.rank,onClick:function(t){return e.highlight(t)},children:t.rank})]},a):Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t.capName}),Object(n.jsx)("td",{colSpan:"3",children:Object(n.jsx)("input",{className:"commonRange",onChange:e.rangeChange,type:"range",min:"1",max:"100",class:"slider"})}),Object(n.jsx)("td",{value:t.rank,onClick:function(t){return e.highlight(t)},children:t.rank})]},a)}));return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Current Vs Desired Capabilities"}),Object(n.jsxs)("table",{border:"1",className:"mainTable",children:[Object(n.jsxs)("tr",{className:"head",children:[Object(n.jsx)("td",{children:" Capablity Name "}),Object(n.jsx)("td",{children:" Not Supported "}),Object(n.jsx)("td",{children:" Partially Supported "}),Object(n.jsx)("td",{children:" Fully Supported "}),Object(n.jsx)("td",{children:" Rank "})]}),t]}),Object(n.jsxs)("div",{className:"replica",children:[Object(n.jsx)("div",{className:"upper"}),Object(n.jsx)("div",{className:"lower"}),Object(n.jsxs)("div",{className:"outer",children:[Object(n.jsxs)("span",{id:"leftPer",children:[" ",this.state.leftGreen,"%"]})," ",Object(n.jsxs)("span",{id:"rightPer",children:[this.state.rightGreen,"%"]}),Object(n.jsxs)("span",{id:"leftPer1",children:[this.state.leftBlue,"%"]})," ",Object(n.jsxs)("span",{id:"rightPer1",children:[this.state.rightBlue,"%"]}),Object(n.jsxs)("div",{className:"circle",children:[Object(n.jsx)("p",{className:"catSpell1",children:"Category 01"}),Object(n.jsx)("p",{className:"catSpell2",children:"Category 02"}),Object(n.jsx)("p",{}),Object(n.jsx)("input",{id:"leftSlider",onChange:function(t){return e.leftSlider(t)},type:"range",min:"1",max:"100",class:"range vertical-lowest-first"}),Object(n.jsx)("input",{id:"rightSlider",onChange:function(t){return e.rightSlider(t)},type:"range",min:"1",max:"100",class:"range rightRange  vertical-lowest-first"})]}),Object(n.jsxs)("div",{className:"title",children:[Object(n.jsx)("span",{id:"cat1",children:"Current State"}),Object(n.jsx)("span",{id:"cat2",children:"Future State"})]}),Object(n.jsx)("div",{})]})]}),Object(n.jsxs)("div",{class:"base",children:[Object(n.jsx)("p",{className:"category1",children:"Category 01"}),Object(n.jsx)("p",{className:"category2",children:"Category 02"}),Object(n.jsxs)("div",{id:"mySidepanel",className:"sidepanel",children:[Object(n.jsx)("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.closeNav,children:"\xd7"}),"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."]}),Object(n.jsxs)("div",{id:"mySidepanel1",className:"sidepanel1",children:[Object(n.jsx)("a",{href:"javascript:void(0)",className:"closebtn1",onClick:this.closeNavRgt,children:"\xd7"}),"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. "]}),Object(n.jsx)("div",{onClick:this.openNav,className:"base1",children:Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "})}),Object(n.jsx)("div",{onClick:this.openNavRgt,className:"base2",children:Object(n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled "})})]})]})}}]),a}(i.Component));var u=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(m,{})})},j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,s=t.getLCP,l=t.getTTFB;a(e),n(e),i(e),s(e),l(e)}))};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(u,{})}),document.getElementById("root")),j()},4:function(e,t,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.22b8e4f6.chunk.js.map