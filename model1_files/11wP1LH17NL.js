(function(u,z,Q){u.execute(function(){function r(b,a,c){z.clientLogger&&(c.ap=b,c.ac=a)}function d(b){(function(a){function b(c){a(c.elem).find(".loading_ind").show();c.metrics&&(c.ajaxStart=new Date,a(c.elem).find(".loading_ind:first").fromScreenBottom(function(){c.loadBarTime=new Date},0));try{a.ajax({url:c.url,type:"GET",timeout:c.timeout,retryLimit:c.retry,tryCount:0,cache:c.cache,success:function(b,d,e){a(c.elem).html(b);c.metrics&&(b=(new Date).getTime(),r("lazyload",c.name,{at:b-c.ajaxStart.getTime(),
s:!0,tc:this.tryCount,tt:c.type,lt:c.loadBarTime?b-c.loadBarTime.getTime():0}))},error:function(b,d){this.tryCount++;if(this.tryCount<this.retryLimit)a.ajax(this);else if(a(c.elem).find(".loading_ind").hide(),a(c.elem).find(".failed_load").show(),c.metrics){var e=(new Date).getTime();r("lazyload",c.name,{at:e-c.ajaxStart.getTime(),s:!1,tc:this.tryCount,tt:c.type,lt:c.loadBarTime?e-c.loadBarTime.getTime():0,xs:b.status,ae:d.toString().substr(0,100)})}}})}catch(d){c.metrics&&r("lazyload",c.name,{s:!1,
tt:c.type,ae:d.toString().substr(0,100)})}}a.fn.lazyLoadContent=function(d){d.url&&this.each(function(){var h={elem:this,trigger:["scroll"],threshold:400,metrics:!1,name:"lazy",retry:3,timeout:1E4,cache:!0};a.extend(h,d);var g=!1;z.ue||(h.metrics=!1);for(var k=0;k<h.trigger.length;k++)if("scroll"===h.trigger[k])a(this).fromScreenBottom(function(a,d){g||(g=!0,h.type=d,b(h))},h.threshold);else if("oncf"===h.trigger[k])if(e&&l)u.when("cf").execute(function(){g||(g=!0,h.type="oncf",b(h))});else z.amznJQ.onCompletion("amznJQ.criticalFeature",
function(){g||(g=!0,h.type="oncf",b(h))})})};a.fn.fromScreenBottom=function(b,c){b&&(c||(c=0),this.each(function(){var d=this,e=function(l){var q=a(z).scrollTop()+a(z).height();if(a(d).offset().top-q<c){q="ready";l&&l.type&&(q=l.type);try{b(d,q)}catch(r){}a(z).unbind("scroll",e)}};a(z).bind("scroll",e);e()}))}})(b)}var e="object"===typeof u&&"function"===typeof u.when,l;e?u.when("jQuery").execute(function(b){d(b)}):d(z.jQuery);e?u.when("isLazyLoadWeblabEnabled").execute(function(b){(l=b)?u.register("lazyLoadLib"):
z.amznJQ.declareAvailable("lazyLoadLib")}):z.amznJQ.declareAvailable("lazyLoadLib")})})(function(){var u=window.AmazonUIPageJS||window.P,z=u._namespace||u.attributeErrors;return z?z("DetailPageLazyLoadLibAssets"):u}(),window);