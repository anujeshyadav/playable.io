(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[98],{1836:function(e,t){!function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document){var e=/\n(?!$)/g,t=Prism.plugins.lineNumbers={getLine:function(e,t){if("PRE"===e.tagName&&e.classList.contains("line-numbers")){var n=e.querySelector(".line-numbers-rows");if(n){var a=parseInt(e.getAttribute("data-start"),10)||1,l=a+(n.children.length-1);t<a&&(t=a),t>l&&(t=l);var r=t-a;return n.children[r]}}},resize:function(e){a([e])},assumeViewportIndependence:!0},n=void 0;window.addEventListener("resize",(function(){t.assumeViewportIndependence&&n===window.innerWidth||(n=window.innerWidth,a(Array.prototype.slice.call(document.querySelectorAll("pre.line-numbers"))))})),Prism.hooks.add("complete",(function(t){if(t.code){var n=t.element,l=n.parentNode;if(l&&/pre/i.test(l.nodeName)&&!n.querySelector(".line-numbers-rows")&&Prism.util.isActive(n,"line-numbers")){n.classList.remove("line-numbers"),l.classList.add("line-numbers");var r,i=t.code.match(e),c=i?i.length+1:1,o=new Array(c+1).join("<span></span>");(r=document.createElement("span")).setAttribute("aria-hidden","true"),r.className="line-numbers-rows",r.innerHTML=o,l.hasAttribute("data-start")&&(l.style.counterReset="linenumber "+(parseInt(l.getAttribute("data-start"),10)-1)),t.element.appendChild(r),a([l]),Prism.hooks.run("line-numbers",t)}}})),Prism.hooks.add("line-numbers",(function(e){e.plugins=e.plugins||{},e.plugins.lineNumbers=!0}))}function a(t){if(0!=(t=t.filter((function(e){var t=function(e){if(!e)return null;return window.getComputedStyle?getComputedStyle(e):e.currentStyle||null}(e)["white-space"];return"pre-wrap"===t||"pre-line"===t}))).length){var n=t.map((function(t){var n=t.querySelector("code"),a=t.querySelector(".line-numbers-rows");if(n&&a){var l=t.querySelector(".line-numbers-sizer"),r=n.textContent.split(e);l||((l=document.createElement("span")).className="line-numbers-sizer",n.appendChild(l)),l.innerHTML="0",l.style.display="block";var i=l.getBoundingClientRect().height;return l.innerHTML="",{element:t,lines:r,lineHeights:[],oneLinerHeight:i,sizer:l}}})).filter(Boolean);n.forEach((function(e){var t=e.sizer,n=e.lines,a=e.lineHeights,l=e.oneLinerHeight;a[n.length-1]=void 0,n.forEach((function(e,n){if(e&&e.length>1){var r=t.appendChild(document.createElement("span"));r.style.display="block",r.textContent=e}else a[n]=l}))})),n.forEach((function(e){for(var t=e.sizer,n=e.lineHeights,a=0,l=0;l<n.length;l++)void 0===n[l]&&(n[l]=t.children[a++].getBoundingClientRect().height)})),n.forEach((function(e){var t=e.sizer,n=e.element.querySelector(".line-numbers-rows");t.style.display="none",t.innerHTML="",e.lineHeights.forEach((function(e,t){n.children[t].style.height=e+"px"}))}))}}}()},1837:function(e,t,n){},1838:function(e,t){!function(){if("undefined"!==typeof Prism&&"undefined"!==typeof document&&document.querySelector){var e=function(){var e;return function(){if("undefined"===typeof e){var t=document.createElement("div");t.style.fontSize="13px",t.style.lineHeight="1.5",t.style.padding="0",t.style.border="0",t.innerHTML="&nbsp;<br />&nbsp;",document.body.appendChild(t),e=38===t.offsetHeight,document.body.removeChild(t)}return e}}(),t=!0,n=0;Prism.hooks.add("before-sanity-check",(function(e){var t=e.element.parentElement;if(i(t)){var n=0;a(".line-highlight",t).forEach((function(e){n+=e.textContent.length,e.parentNode.removeChild(e)})),n&&/^(?: \n)+$/.test(e.code.slice(-n))&&(e.code=e.code.slice(0,-n))}})),Prism.hooks.add("complete",(function e(t){var a=t.element.parentElement;if(i(a)){clearTimeout(n);var r=Prism.plugins.lineNumbers,s=t.plugins&&t.plugins.lineNumbers;if(l(a,"line-numbers")&&r&&!s)Prism.hooks.add("line-numbers",e);else c(a)(),n=setTimeout(o,1)}})),window.addEventListener("hashchange",o),window.addEventListener("resize",(function(){a("pre").filter(i).map((function(e){return c(e)})).forEach(r)}))}function a(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))}function l(e,t){return e.classList.contains(t)}function r(e){e()}function i(e){return!(!e||!/pre/i.test(e.nodeName))&&(!!e.hasAttribute("data-line")||!(!e.id||!Prism.util.isActive(e,"linkable-line-numbers")))}function c(n,i,c){var o=(i="string"===typeof i?i:n.getAttribute("data-line")||"").replace(/\s+/g,"").split(",").filter(Boolean),s=+n.getAttribute("data-line-offset")||0,u=(e()?parseInt:parseFloat)(getComputedStyle(n).lineHeight),m=Prism.util.isActive(n,"line-numbers"),d=n.querySelector("code"),p=m?n:d||n,h=[],g=d&&p!=d?function(e,t){var n=getComputedStyle(e),a=getComputedStyle(t);function l(e){return+e.substr(0,e.length-2)}return t.offsetTop+l(a.borderTopWidth)+l(a.paddingTop)-l(n.paddingTop)}(n,d):0;o.forEach((function(e){var t=e.split("-"),a=+t[0],l=+t[1]||a,r=n.querySelector('.line-highlight[data-range="'+e+'"]')||document.createElement("div");if(h.push((function(){r.setAttribute("aria-hidden","true"),r.setAttribute("data-range",e),r.className=(c||"")+" line-highlight"})),m&&Prism.plugins.lineNumbers){var i=Prism.plugins.lineNumbers.getLine(n,a),o=Prism.plugins.lineNumbers.getLine(n,l);if(i){var d=i.offsetTop+g+"px";h.push((function(){r.style.top=d}))}if(o){var f=o.offsetTop-i.offsetTop+o.offsetHeight+"px";h.push((function(){r.style.height=f}))}}else h.push((function(){r.setAttribute("data-start",String(a)),l>a&&r.setAttribute("data-end",String(l)),r.style.top=(a-s-1)*u+g+"px",r.textContent=new Array(l-a+2).join(" \n")}));h.push((function(){r.style.width=n.scrollWidth+"px"})),h.push((function(){p.appendChild(r)}))}));var f=n.id;if(m&&Prism.util.isActive(n,"linkable-line-numbers")&&f){l(n,"linkable-line-numbers")||h.push((function(){n.classList.add("linkable-line-numbers")}));var E=parseInt(n.getAttribute("data-start")||"1");a(".line-numbers-rows > span",n).forEach((function(e,n){var a=n+E;e.onclick=function(){var e=f+"."+a;t=!1,location.hash=e,setTimeout((function(){t=!0}),1)}}))}return function(){h.forEach(r)}}function o(){var e=location.hash.slice(1);a(".temporary.line-highlight").forEach((function(e){e.parentNode.removeChild(e)}));var n=(e.match(/\.([\d,-]+)$/)||[,""])[1];if(n&&!document.getElementById(e)){var l=e.slice(0,e.lastIndexOf(".")),r=document.getElementById(l);if(r)r.hasAttribute("data-line")||r.setAttribute("data-line",""),c(r,n,"temporary ")(),t&&document.querySelector(".temporary.line-highlight").scrollIntoView()}}}()},1839:function(e,t,n){},2200:function(e,t,n){"use strict";n.r(t);var a=n(14),l=n(15),r=n(17),i=n(16),c=n(1),o=n.n(c),s=n(1401),u=n(1402),m=n(808),d=n(1403),p=n(1404),h=n(1405),g=n(1406),f=n(810),E=n.n(f),b=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Basic Usage")),o.a.createElement(g.a,null,o.a.createElement("p",null,"First You will need to import prism."),o.a.createElement("p",null,"Prism does its best to encourage good authoring practices. Therefore, it only works with",o.a.createElement("code",null,"&ltcode&gt"),"elements, since marking up code without a"," ",o.a.createElement("code",null,"&ltcode&gt "),"element is semantically invalid.",o.a.createElement("a",{href:"http://www.w3.org/TR/html5/text-level-semantics.html#the-code-element",target:"_blank",rel:"noopener noreferrer"},"According to the HTML5 spec"),", the recommended way to define a code language is a"," ",o.a.createElement("code",null,"language-xxxx"),"class, which is what Prism uses. To make things easier however, Prism assumes that this language definition is inherited. Therefore, if multiple ",o.a.createElement("code",null,"&ltcode&gt "),"elements have the same language, you can add the",o.a.createElement("code",null,"language-xxxx"),"class on one of their common ancestors. This way, you can also define a document-wide default language, by adding a ",o.a.createElement("code",null,"language-xxxx"),"class on the",o.a.createElement("code",null,"&ltbody&gt "),"or ",o.a.createElement("code",null,"&lthtml&gt"),"element."," "),o.a.createElement("p",null,"If you want to opt-out of highlighting for a"," ",o.a.createElement("code",null,"&ltcode&gt"),"element that is a descendant of an element with a declared code language, you can add the class ",o.a.createElement("code",null,"language-none"),"to it (or any non-existing language, really)."),o.a.createElement("p",null,"The"," ",o.a.createElement("a",{href:"https://www.w3.org/TR/html5/grouping-content.html#the-pre-element",target:"_blank",rel:"noopener noreferrer"},"recommended way to mark up a code block"),"(both for semantics and for Prism) is a ",o.a.createElement("code",null,"&ltpre&gt"),"element with a ",o.a.createElement("code",null,"&ltcode&gt"),"element inside, like so:"),o.a.createElement("p",null,"code:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    p {\n        color: red\n      }\n  </code>\n</pre>\n  ')),o.a.createElement("p",{className:"my-1"},"Output"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\np {\n  color: red\n}\n                ")),o.a.createElement("p",{className:"mt-1"},"If you use that pattern, the ",o.a.createElement("code",null,"&ltpre&gt"),"will automatically get the ",o.a.createElement("code",null,"language-xxxx"),"class (if it doesn't already have it) and will be styled as a code block.")))}}]),n}(o.a.Component),y=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Examples")),o.a.createElement(g.a,null,o.a.createElement("h5",{className:"font-weight-600"},"HTML Markup"),o.a.createElement("p",null,"Use the following code to use HTML syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-html">\n    HTML CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<Media>\n  <Media left href="#">\n    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />\n  </Media>\n  <Media body>\n    <Media heading>\n      Media heading\n    </Media>\n    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.\n  </Media>\n</Media>\n\n      ')),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"CSS Markup"),o.a.createElement("p",null,"Use the following code to use CSS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-css">\n    CSS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-css"},"\na:active {\n  outline: 0\n}\n\na:hover {\n  outline: 0\n}\n\nabbr[title] {\n  border-bottom: 1px dotted\n}\n\nb, strong {\n  font-weight: bold\n}\n\ndfn {\n  font-style: italic\n}\n\nh1 {\n  font-size: 2em\n  margin: 0.67em 0\n}\n          ")),o.a.createElement("h5",{className:"font-weight-600 mt-2"},"JS Markup"),o.a.createElement("p",null,"Use the following code to use JS syntax highlighter."),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre>\n  <code class="language-js">\n    JS CODE ...\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-javascript"},"\ncomponentDidMount() {\n  this.setState({\n    item : true\n  })\n}\n              "))))}}]),n}(o.a.Component),v=(n(1836),n(1837),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Line Numbers")),o.a.createElement(g.a,null,o.a.createElement("p",null,"Line number at the beginning of code lines."),o.a.createElement("p",null,"Obviously, this is supposed to work only for code blocks (",o.a.createElement("code",null,"&ltpre&gt &ltcode&gt"),") and not for inline code. Add class line-numbers to your desired ",o.a.createElement("code",null,"&ltpre&gt")," and line-numbers plugin will take care."),o.a.createElement("p",null,"Optional: You can specify the data-start (Number) attribute on the"," ",o.a.createElement("code",null,"&ltpre&gt")," element. It will shift the line counter."),o.a.createElement("p",null,"usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre class="line-numbers">\n  <code class="language-javascript">\n   Code here...\n  </code>\n</pre>\n    ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{className:"line-numbers"},o.a.createElement("code",{className:"language-javascript"}," componentDidMount = () => {\n    if (typeof self==='undefined' || !self.Prism || !self.document) {\n      return\n    }\n  }"))))}}]),n}(o.a.Component)),w=(n(1838),n(1839),function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement(p.a,null,o.a.createElement(h.a,null,"Line Highlight")),o.a.createElement(g.a,null,o.a.createElement("p",null,"Highlights specific lines and/or line ranges."),o.a.createElement("p",null,"You specify the lines to be highlighted through the"," ",o.a.createElement("em",null,"data-line")," attribute on the",o.a.createElement("code",null,"&ltpre&gt ")," element, in the following simple format:"),o.a.createElement("ul",null,o.a.createElement("li",null,"A single number refers to the line with that number"),o.a.createElement("li",null,"Ranges are denoted by two numbers, separated with a hyphen (-)"),o.a.createElement("li",null,"Multiple line numbers or ranges are separated by commas."),o.a.createElement("li",null,"Whitespace is allowed anywhere and will be stripped off.")),o.a.createElement("p",null,"Usage:"),o.a.createElement("pre",null,o.a.createElement("code",{className:"language-markup"},'\n<pre data-line="2, 4, 8-10">\n  <code class="language-css">\n    Your Code\n  </code>\n</pre>\n            ')),o.a.createElement("p",{className:"my-1"},"Output:"),o.a.createElement("pre",{"data-line":"2, 4, 8-10"},o.a.createElement("code",{className:"language-css"},"\npre.line-numbers {\n  position: relative\n  padding-left: 3.8em\n  counter-reset: linenumber\n}\n\npre.line-numbers > code {\n  position: relative\n}\n  "))))}}]),n}(o.a.Component)),k=function(e){Object(r.a)(n,e);var t=Object(i.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){E.a.highlightAll()}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{breadCrumbTitle:"Syntax Highlighter",breadCrumbParent:"Content",breadCrumbActive:"Syntax Highlighter"}),o.a.createElement(s.a,null,o.a.createElement(u.a,{sm:"12"},o.a.createElement(b,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(y,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(v,null)),o.a.createElement(u.a,{sm:"12"},o.a.createElement(w,null))))}}]),n}(o.a.Component);t.default=k}}]);
//# sourceMappingURL=98.9def69b4.chunk.js.map