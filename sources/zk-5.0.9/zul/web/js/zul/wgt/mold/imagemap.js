function(c){var d=this.uuid,b=d+"-map";c.push("<span",this.domAttrs_({content:1}),'><a href="',this._doneURI(),"?",d,'" target="zk_hfr_"><img id="',d,'-real"',this.contentAttrs_(),'/></a><map name="',b,'" id="',b,'">');for(var a=this.firstChild;a;a=a.nextSibling){a.redraw(c)}c.push("</map></span>")};