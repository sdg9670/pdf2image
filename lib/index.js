"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();require("babel-polyfill"),require("gm-base64");var _gm=require("gm"),_gm2=_interopRequireDefault(_gm),_path=require("path"),_path2=_interopRequireDefault(_path),_fsExtra=require("fs-extra"),_fsExtra2=_interopRequireDefault(_fsExtra),_bluebird=require("bluebird"),_bluebird2=_interopRequireDefault(_bluebird);function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new _bluebird2.default(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):_bluebird2.default.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var PDF2Pic=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,a),this.options=_extends({},a.defaultOptions,b)}return _createClass(a,[{key:"identify",value:function(a,b){var c=(0,_gm2.default)(a);return new _bluebird2.default(function(a,d){b?c.identify(b,function(b,c){return b?d(b):a(c)}):c.identify(function(b,c){return b?d(b):a(c)})})}},{key:"graphicMagickBaseCommand",value:function(a,b){var c=this.options,d=c.density,e=c.size,f=c.quality,g=c.compression;return(0,_gm2.default)(a,b).density(d,d).resize(e).quality(f).compress(g)}},{key:"writeImage",value:function(a,b,c,d){var e=this;return new _bluebird2.default(function(f,g){e.graphicMagickBaseCommand(a,c).write(b,function(a){return a?g(a):f({name:_path2.default.basename(b),size:_fsExtra2.default.statSync(b).size/1e3,path:b,page:d})})})}},{key:"toBase64",value:function(a,b,c){var d=this,e=this.options.format;return new _bluebird2.default(function(f,g){d.graphicMagickBaseCommand(a,b).toBase64(e,function(a,b){return a?g(a):f({base64:b,page:c})})})}},{key:"convert",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.isValidPDF(b),this.fileExists(b),c=_path2.default.basename(b,_path2.default.extname(_path2.default.basename(b))),this.getOption("savedir")?this.setOption("savedir",this.getOption("savedir")+_path2.default.sep):this.setOption("savedir",c+_path2.default.sep),_fsExtra2.default.mkdirsSync(this.getOption("savedir")),this.getOption("savename")||this.setOption("savename",c),a.next=8,this.getPageCount(b);case 8:if(d=a.sent,!(e>d)){a.next=11;break}throw new Error("Cannot convert non-existent page");case 11:return a.next=13,this.toImage(b,e);case 13:return a.abrupt("return",a.sent);case 14:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"convertToBase64",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return this.isValidPDF(b),this.fileExists(b),c=_path2.default.basename(b,_path2.default.extname(_path2.default.basename(b))),this.getOption("savedir")?this.setOption("savedir",this.getOption("savedir")+_path2.default.sep):this.setOption("savedir",c+_path2.default.sep),_fsExtra2.default.mkdirsSync(this.getOption("savedir")),this.getOption("savename")||this.setOption("savename",c),a.next=8,this.getPageCount(b);case 8:if(d=a.sent,!(e>d)){a.next=11;break}throw new Error("Cannot convert non-existent page");case 11:return a.next=13,this.streamToBase64(b,e,!0);case 13:return a.abrupt("return",a.sent);case 14:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"convertToBase64Bulk",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e=this,f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=[],d=Array.isArray(f)?f:[1],-1!==f){a.next=8;break}return a.next=5,this.getPage(b);case 5:a.t0=a.sent,a.next=9;break;case 8:a.t0=d;case 9:return f=a.t0,f=f.map(function(a){return e.convertToBase64(b,a)}),a.next=13,_bluebird2.default.all(f);case 13:return c=a.sent,a.abrupt("return",c);case 15:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"convertBulk",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e=this,f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:-1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(c=[],d=Array.isArray(f)?f:[1],-1!==f){a.next=8;break}return a.next=5,this.getPage(b);case 5:a.t0=a.sent,a.next=9;break;case 8:a.t0=d;case 9:return f=a.t0,f=f.map(function(a){return e.convert(b,a)}),a.next=13,_bluebird2.default.all(f);case 13:return c=a.sent,a.abrupt("return",c);case 15:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getPageCount",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.getPage(b).length;case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getPage",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,this.identify(b,"%p ");case 2:return c=a.sent,a.abrupt("return",c.split(" "));case 4:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"toImage",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e,f,g,h,i,j=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=this.getOption(),d=c.savedir,e=c.savename,f=c.format,g=_fsExtra2.default.createReadStream(b),h=""+d.replace(/\/*$/,"/")+e+"_"+j+"."+f,i=this.getFilePath(g)+"["+(j-1)+"]",a.next=6,this.writeImage(g,h,i,j);case 6:return a.abrupt("return",a.sent);case 7:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"streamToBase64",value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b){var c,d,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:1;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return c=_fsExtra2.default.createReadStream(b),d=this.getFilePath(c)+"["+(e-1)+"]",a.next=4,this.toBase64(c,d,e);case 4:return a.abrupt("return",a.sent);case 5:case"end":return a.stop();}},a,this)}));return function(){return a.apply(this,arguments)}}()},{key:"getFilePath",value:function(a){if(!a)throw new Error("Invalid Stream");return a.path}},{key:"isValidPDF",value:function(a){if(".pdf"!==_path2.default.extname(_path2.default.basename(a)))throw new Error("File supplied is not a valid PDF");return!0}},{key:"fileExists",value:function(a){if(!_fsExtra2.default.existsSync(a))throw new Error("File supplied cannot be found");return!0}},{key:"getOption",value:function(a){return a?this.options[a]:this.options}},{key:"setOption",value:function(a,b){return this.options[a]=b,this}}]),a}();PDF2Pic.defaultOptions={quality:0,format:"png",size:"768x512",density:72,savedir:"./",savename:"untitled",compression:"jpeg"},exports.default=PDF2Pic;