(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[192],{234:function(e,t,l){"use strict";l.r(t);var a=l(544),i={name:"PublicFilesEditor",components:{Modal:l.n(a).a,EditorWrapper:function(){return Promise.all([l.e(0),l.e(195),l.e(187)]).then(l.bind(null,235))}},props:{fileId:{type:Number,default:null},relativePath:{type:String,default:null},active:{type:Boolean,default:!1},shareToken:{type:String,default:null},mimeType:{type:String,default:null}},computed:{fileName:function(){return this.relativePath.substring(this.relativePath.lastIndexOf("/")+1)}},methods:{close:function(){this.active=!1}}},n=l(58),r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.active?l("Modal",{attrs:{title:e.fileName},on:{close:e.close}},[l("EditorWrapper",{attrs:{"file-id":e.fileId,"relative-path":e.relativePath,active:e.active,"share-token":e.shareToken,mime:e.mimeType}})],1):e._e()}),[],!1,null,null,null);t.default=r.exports}}]);
//# sourceMappingURL=files-modal.js.map?v=e993961578f4ebc3e686