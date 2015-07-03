define("firechat/adapters/application",["exports","firechat/config/environment","firebase","emberfire/adapters/firebase"],function(e,t,a,r){"use strict";e["default"]=r["default"].extend({firebase:new a["default"](t["default"].firebase)})}),define("firechat/app",["exports","ember","ember/resolver","ember/load-initializers","firechat/config/environment"],function(e,t,a,r,n){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:n["default"].modulePrefix,podModulePrefix:n["default"].podModulePrefix,Resolver:a["default"]}),r["default"](i,n["default"].modulePrefix),e["default"]=i}),define("firechat/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("firechat/controllers/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].ArrayController.extend({sortProperties:["timestamp"],sortAscending:!1,username:prompt("Please choose a username"),color:Please.make_color(),actions:{sendMessage:function(){if(this.get("body")){var e=this.store.createRecord("message",{username:this.get("username"),body:this.get("body"),color:this.get("color"),timestamp:(new Date).getTime()});e.save(),this.set("body",""),setTimeout(function(){$(".messages").scrollTop($(".messages")[0].scrollHeight)},10)}}}})}),define("firechat/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("firechat/helpers/format-date",["exports","ember"],function(e,t){"use strict";function a(e){return moment(e[0].get("timestamp")).format("MMMM Do, h:mm a")}e.formatDate=a,e["default"]=t["default"].HTMLBars.makeBoundHelper(a)}),define("firechat/initializers/app-version",["exports","firechat/config/environment","ember"],function(e,t,a){"use strict";var r=a["default"].String.classify,n=!1;e["default"]={name:"App Version",initialize:function(e,i){if(!n){var d=r(i.toString());a["default"].libraries.register(d,t["default"].APP.version),n=!0}}}}),define("firechat/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){"use strict";e["default"]=t["default"]}),define("firechat/initializers/export-application-global",["exports","ember","firechat/config/environment"],function(e,t,a){"use strict";function r(e,r){var n=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[n]&&(window[n]=r)}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("firechat/models/message",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].Model.extend({username:t["default"].attr("string"),body:t["default"].attr("string"),color:t["default"].attr("string"),timestamp:t["default"].attr("number")})}),define("firechat/router",["exports","ember","firechat/config/environment"],function(e,t,a){"use strict";var r=t["default"].Router.extend({location:a["default"].locationType});r.map(function(){}),e["default"]=r}),define("firechat/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.find("message")}})}),define("firechat/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.content;r.detectNamespace(a);var d;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(d=this.build(r),this.hasRendered?this.cachedFragment=d:this.hasRendered=!0),this.cachedFragment&&(d=r.cloneNode(this.cachedFragment,!0))):d=this.build(r);var s=r.createMorphAt(d,0,0,a);return r.insertBoundary(d,0),i(t,s,e,"outlet"),d}}}())}),define("firechat/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("      ");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","message");var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","username");var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode(":");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n        ");e.appendChild(a,r);var r=e.createElement("span");e.setAttribute(r,"class","date");var n=e.createComment("");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n      ");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(e,t,a){var r=t.dom,n=t.hooks,i=n.get,d=n.concat,s=n.attribute,o=n.content,c=n.inline;r.detectNamespace(a);var l;t.useFragmentCache&&r.canClone?(null===this.cachedFragment&&(l=this.build(r),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=r.cloneNode(this.cachedFragment,!0))):l=this.build(r);var u=r.childAt(l,[1]),f=r.childAt(u,[1]),m=r.createMorphAt(f,0,0),h=r.createAttrMorph(f,"style"),p=r.createMorphAt(u,3,3),v=r.createMorphAt(r.childAt(u,[5]),0,0);return s(t,h,f,"style",d(t,["color: ",i(t,e,"message.color")])),o(t,m,e,"message.username"),o(t,p,e,"message.body"),c(t,v,e,"format-date",[i(t,e,"message")],{}),l}}}();return{isHTMLBars:!0,revision:"Ember@1.12.0",blockParams:0,cachedFragment:null,hasRendered:!1,build:function(e){var t=e.createDocumentFragment(),a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","chatbox");var r=e.createTextNode("\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","messages");var n=e.createTextNode("\n");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","new-message");var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createComment("");e.appendChild(r,n);var n=e.createTextNode("\n    ");e.appendChild(r,n);var n=e.createElement("button"),i=e.createTextNode("Send");e.appendChild(n,i),e.appendChild(r,n);var n=e.createTextNode("\n  ");e.appendChild(r,n),e.appendChild(a,r);var r=e.createTextNode("\n");e.appendChild(a,r),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},render:function(t,a,r){var n=a.dom,i=a.hooks,d=i.get,s=i.inline,o=i.block,c=i.element;n.detectNamespace(r);var l;a.useFragmentCache&&n.canClone?(null===this.cachedFragment&&(l=this.build(n),this.hasRendered?this.cachedFragment=l:this.hasRendered=!0),this.cachedFragment&&(l=n.cloneNode(this.cachedFragment,!0))):l=this.build(n);var u=n.childAt(l,[2]),f=n.childAt(u,[3]),m=n.childAt(f,[3]),h=n.createMorphAt(l,0,0,r),p=n.createMorphAt(n.childAt(u,[1]),1,1),v=n.createMorphAt(f,1,1);return n.insertBoundary(l,0),s(a,h,t,"input",[],{value:d(a,t,"username"),placeholder:"Username",type:"hidden"}),o(a,p,t,"each",[d(a,t,"model")],{keyword:"message"},e,null),s(a,v,t,"textarea",[],{value:d(a,t,"body"),placeholder:"Type your message here..."}),c(a,m,t,"action",["sendMessage"],{}),l}}}())}),define("firechat/views/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].View.extend({keyPress:function(e){var t=this.get("controller");"Enter"===e.key&&(t.send("sendMessage"),e.preventDefault())},didInsertElement:function(){$(".messages").scrollTop($(".messages")[0].scrollHeight)}})}),define("firechat/config/environment",["ember"],function(e){var t="firechat";try{var a=t+"/config/environment",r=e["default"].$('meta[name="'+a+'"]').attr("content"),n=JSON.parse(unescape(r));return{"default":n}}catch(i){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("firechat/tests/test-helper"):require("firechat/app")["default"].create({name:"firechat",version:"0.0.0.311b68ab"});