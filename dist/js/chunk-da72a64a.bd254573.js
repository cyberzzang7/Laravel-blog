(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da72a64a"],{1681:function(t,e,n){},d236:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-text-field",{attrs:{placeholder:"제목을 입력해 주세요"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}}),n("v-textarea",{attrs:{placeholder:"내용을 입력해 주세요",rows:"3","max-rows":"6"},model:{value:t.context,callback:function(e){t.context=e},expression:"context"}}),n("v-btn",{on:{click:function(e){t.updateMode?t.updateContent():t.uploadContent()}}},[t._v("저장")]),n("v-btn",{on:{click:t.cancle}},[t._v("취소")])],1)},o=[],i=(n("4de4"),n("a9e3"),n("d5c7")),u={name:"Create",data:function(){return{subject:"",context:"",userId:1,createdAt:"2019-04-17 11:32:42",updatedAt:null,updateObject:null,updateMode:this.$route.params.contentId>0}},created:function(){if(this.$route.params.contentId>0){var t=Number(this.$route.params.contentId);this.updateObject=i["a"].Content.filter((function(e){return e.content_id===t}))[0],this.subject=this.updateObject.title,this.context=this.updateObject.context}},methods:{uploadContent:function(){var t=i["a"].Content.sort((function(t,e){return e.content_id-t.content_id})),e=t[0].content_id+1;i["a"].Content.push({content_id:e,user_id:this.userId,title:this.subject,context:this.context,created_at:this.createdAt,updated_at:null}),this.$router.push({path:"/board"})},updateContent:function(){this.updateObject.title=this.subject,this.updateObject.context=this.context,this.$router.push({path:"/board"})},cancle:function(){this.$router.push({path:"/board"})}}},c=u,s=n("2877"),r=n("6544"),d=n.n(r),l=n("8336"),h=n("8654"),p=n("5530"),_=(n("1681"),n("58df")),m=Object(_["a"])(h["a"]),f=m.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return Object(p["a"])({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},h["a"].options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=h["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){h["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),x=Object(s["a"])(c,a,o,!1,null,null,null);e["default"]=x.exports;d()(x,{VBtn:l["a"],VTextField:h["a"],VTextarea:f})},d5c7:function(t,e,n){"use strict";e["a"]={User:[{user_id:1,name:"lelana",created_at:"2018-09-11 11:42:11"},{user_id:2,name:"아이린",created_at:"2018-09-11 11:42:11"},{user_id:3,name:"조이",created_at:"2018-09-11 11:42:11"}],Content:[{content_id:1,user_id:1,title:"개린이 르라나의 강의 알람표",context:"아직 미정입니다.",created_at:"2019-01-01 13:11:42",updated_at:null},{content_id:2,user_id:3,title:"레드벨벳 많이 사랑해 주세요^^",context:"화이팅!",created_at:"2019-01-02 13:11:42",updated_at:null},{content_id:3,user_id:2,title:"생일 축하해주신 여러분 감사합니다!",context:"^^",created_at:"2019-03-29 13:11:42",updated_at:null}],Comment:[{comment_id:1,user_id:1,content_id:3,context:"생일 축하해요!",created_at:"2019-03-29 14:11:11",updated_at:null},{comment_id:2,user_id:3,content_id:3,context:"주현언니 생일 축하해요!",created_at:"2019-03-29 16:11:11",updated_at:null},{comment_id:3,user_id:2,content_id:1,context:"강의 잘 보고 있습니다 ^^",created_at:"2019-03-29 14:11:11",updated_at:null}],SubComment:[{subcomment_id:1,comment_id:3,user_id:1,context:"오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!",created_at:"2019-03-29 16:22:11",updated_at:null}]}}}]);
//# sourceMappingURL=chunk-da72a64a.bd254573.js.map