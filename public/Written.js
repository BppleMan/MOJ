webpackJsonp([18],{319:function(t,a,e){var s=e(320);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(20)("5ab0995e",s,!0,{})},320:function(t,a,e){(t.exports=e(7)(!1)).push([t.i,"",""])},321:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"written",data:function(){return{title:"Written",problemTypeText:{select:"选择题",judge:"判断题",codeFill:"程序填空"},hint:"提交前请保存作答！",buttonText:{save:"保存答案",submit:"提交答案"},selectList:[],judgeList:[{note:"j1",title:"判断题1",score:"5",data:""},{note:"j2",title:"判断题2",score:"10",data:""}],codeFillList:[{note:"c1",title:'#include<iostream>\nusing namespace std;\nint main(){\n    int a,b,c;\n    while(~scanf("%d%d%d",&a,&b,&c)){\n        printf("%d\\n",a+b+c);\n        1:___;\n        2:___;\n        3:___;\n    }\n}',score:"5",data:[{codeFillData:""},{codeFillData:""},{codeFillData:""}]}],writtenData:{selectData:[],judgeData:[],codeFillData:[]},checkUp:{select:0,judge:0,codeFill:0,codeFillTotal:0},e_id:this.$route.params.id}},methods:{save:function(){for(var t in this.writtenData={selectData:[],judgeData:[],codeFillData:[]},this.checkUp={select:0,judge:0,codeFill:0,codeFillTotal:0},this.selectList){var a={num:this.selectList[t].note,data:this.selectList[t].data};""!=a.data&&this.checkUp.select++,this.writtenData.selectData.push(a)}for(var e in this.judgeList){var s={num:e,data:this.judgeList[e].data};""!=s.data&&this.checkUp.judge++,this.writtenData.judgeData.push(s)}for(var i in this.codeFillList){var n={num:i,data:this.codeFillList[i].data};for(var l in n.data)""!=n.data[l].codeFillData&&this.checkUp.codeFill++,this.checkUp.codeFillTotal++;this.writtenData.codeFillData.push(n)}this.$toastr.s("保存成功！"),$("#checkUp").modal()},submit:function(){this.$toastr.s("提交成功！"),console.log(this.writtenData)},load:function(){var t=this;axios.post("/exam/written/"+this.e_id+"/show").then(function(a){a.data.forEach(function(a){if(1==a.type){var e=[],s=a.content.length;a.content.forEach(function(t,i){e.push({key:(i+a.fake)%s,value:t})}),e.sort(function(){return.5-Math.random()});var i={note:a.id,title:a.title,content:e,score:a.score,data:""};t.selectList.push(i)}})}),this.selectList.sort(function(){return.5-Math.random()})}},mounted:function(){this.load(),this.$emit("examHintMsg","提交前请保存作答！")}}},322:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("span",{staticClass:"h1"},[t._v(t._s(t.title))])]),t._v(" "),e("div",{staticClass:"card-body text-left"},[e("div",{staticClass:"form-group"},[e("h2",[t._v(t._s(t.problemTypeText.select))]),t._v(" "),e("ol",t._l(t.selectList,function(a){return e("li",[e("span",[t._v(t._s(a.title))]),e("span",{staticClass:"text-danger"},[t._v(" (分数:"+t._s(a.score)+")")]),t._v(" "),e("ul",t._l(a.content,function(s){return e("li",{staticClass:"form-inline"},[e("div",{staticClass:"input-group col"},[e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data,expression:"item.data"}],attrs:{id:a.note+"-"+s.key,type:"radio",name:a.note},domProps:{value:s.key,checked:t._q(a.data,s.key)},on:{change:function(e){t.$set(a,"data",s.key)}}})])]),t._v(" "),e("label",{staticClass:"form-control col",staticStyle:{height:"auto"},attrs:{for:a.note+"-"+s.key}},[t._v(t._s(s.value))])])])})),t._v(" "),e("br")])}))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"form-group"},[e("h2",[t._v(t._s(t.problemTypeText.judge))]),t._v(" "),e("ol",t._l(t.judgeList,function(a){return e("li",[e("span",[t._v(t._s(a.title))]),e("span",{staticClass:"text-danger"},[t._v(" (分数:"+t._s(a.score)+")")]),t._v(" "),e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data,expression:"item.data"}],attrs:{type:"radio",name:a.note,value:"1"},domProps:{checked:t._q(a.data,"1")},on:{change:function(e){t.$set(a,"data","1")}}})])]),t._v(" "),e("div",{staticClass:"form-control col-5 col-sm-3"},[t._v("true")])]),t._v(" "),e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.data,expression:"item.data"}],attrs:{type:"radio",name:a.note,value:"0"},domProps:{checked:t._q(a.data,"0")},on:{change:function(e){t.$set(a,"data","0")}}})])]),t._v(" "),e("div",{staticClass:"form-control col-5 col-sm-3"},[t._v("false")])]),t._v(" "),e("br")])}))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"form-group"},[e("h2",[t._v(t._s(t.problemTypeText.codeFill))]),t._v(" "),e("ol",t._l(t.codeFillList,function(a){return e("li",[e("span",[e("pre",[t._v(t._s(a.title))])]),e("span",{staticClass:"text-danger"},[t._v(" (分数:"+t._s(a.score)+")")]),t._v(" "),t._l(a.data,function(s,i){return e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[t._v(t._s(i+1))])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:a.data[i].codeFillData,expression:"item.data[index].codeFillData"}],staticClass:"form-control col-sm-8",attrs:{type:"text"},domProps:{value:a.data[i].codeFillData},on:{input:function(e){e.target.composing||t.$set(a.data[i],"codeFillData",e.target.value)}}})])}),t._v(" "),e("br")],2)}))])]),t._v(" "),e("div",{staticClass:"card-footer"},[e("button",{staticClass:"btn btn-success",on:{click:t.save}},[t._v(t._s(t.buttonText.save))]),t._v(" "),e("button",{staticClass:"btn btn-primary",on:{click:t.submit}},[t._v(t._s(t.buttonText.submit))])])]),t._v(" "),e("div",{staticClass:"modal fade",attrs:{id:"checkUp",role:"dialog","aria-labelledby":"checkUp","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm",staticStyle:{top:"20%"}},[e("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),e("div",{staticClass:"modal-body"},[e("div",[e("span",{staticClass:"text-success"},[t._v("选择题总数:"+t._s(t.selectList.length))]),t._v(" "),e("span",[t._v(" 完成题数:"+t._s(t.checkUp.select))])]),t._v(" "),e("hr"),t._v(" "),e("div",[e("span",{staticClass:"text-success"},[t._v("判断题总数:"+t._s(t.selectList.length))]),t._v(" "),e("span",[t._v(" 完成题数:"+t._s(t.checkUp.judge))])]),t._v(" "),e("hr"),t._v(" "),e("div",[e("span",{staticClass:"text-success"},[t._v("程序填空题总数:"+t._s(t.checkUp.codeFillTotal))]),t._v(" "),e("span",[t._v(" 完成题数:"+t._s(t.checkUp.codeFill))])])]),t._v(" "),t._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-header"},[a("span",{staticClass:"modal-title"},[this._v("系统消息")]),this._v(" "),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[this._v("×")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-default",attrs:{type:"button","data-dismiss":"modal"}},[this._v("关闭")])])}]}},362:function(t,a,e){var s=e(3)(e(321),e(322),!1,function(t){e(319)},"data-v-2e6e09dc",null);t.exports=s.exports}});