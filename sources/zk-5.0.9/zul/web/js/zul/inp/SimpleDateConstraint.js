zul.inp.SimpleDateConstraint=zk.$extends(zul.inp.SimpleConstraint,{$init:function(b,c){this.$super("$init",b);this._localizedSymbols=c._localizedSymbols},format:"yyyyMMdd",parseConstraint_:function(b){if(b.startsWith("between")){var a=b.indexOf("and",7);if(a<0&&zk.debugJS){zk.error("Unknown constraint: "+b)}this._beg=new zk.fmt.Calendar(null,this._localizedSymbols).parseDate(b.substring(7,a),this.format);this._end=new zk.fmt.Calendar(null,this._localizedSymbols).parseDate(b.substring(a+3),this.format);if(this._beg.getTime()>this._end.getTime()){var c=this._beg;this._beg=this._end;this._end=c}this._beg.setHours(0,0,0,0);this._end.setHours(0,0,0,0);return}else{if(b.startsWith("before")){this._end=new zk.fmt.Calendar(null,this._localizedSymbols).parseDate(b.substring(6),this.format);this._end.setHours(0,0,0,0);return}else{if(b.startsWith("after")){this._beg=new zk.fmt.Calendar(null,this._localizedSymbols).parseDate(b.substring(5),this.format);this._beg.setHours(0,0,0,0);return}}}return this.$supers("parseConstraint_",arguments)},validate:function(c,b){if(jq.type(b)=="date"){var a=new Date(b.getFullYear(),b.getMonth(),b.getDate());if(this._beg!=null&&this._beg.getTime()>a.getTime()){return this.outOfRangeValue()}if(this._end!=null&&this._end.getTime()<a.getTime()){return this.outOfRangeValue()}}return this.$supers("validate",arguments)},outOfRangeValue:function(){return msgzul.OUT_OF_RANGE+": "+(this._beg!=null?this._end!=null?new zk.fmt.Calendar(null,this._localizedSymbols).formatDate(this._beg,this.format)+" ~ "+new zk.fmt.Calendar().formatDate(this._end,this.format):">= "+new zk.fmt.Calendar().formatDate(this._beg,this.format):"<= "+new zk.fmt.Calendar().formatDate(this._end,this.format))}});