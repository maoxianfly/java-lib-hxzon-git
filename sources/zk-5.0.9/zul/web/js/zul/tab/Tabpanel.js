zul.tab.Tabpanel=zk.$extends(zul.Widget,{getTabbox:function(){return this.parent?this.parent.parent:null},isVisible:function(){return this.$supers("isVisible",arguments)&&this.isSelected()},getZclass:function(){if(this._zclass!=null){return this._zclass}var b=this.getTabbox();if(!b){return"z-tabpanel"}var a=b.getMold();return"z-tabpanel"+(a=="default"?(b.isVertical()?"-ver":""):"-"+a)},getLinkedTab:function(){var b=this.getTabbox();if(!b){return null}var a=b.getTabs();return a?a.getChildAt(this.getIndex()):null},getIndex:function(){return this.getChildIndex()},isSelected:function(){var a=this.getLinkedTab();return a&&a.isSelected()},_changeSel:function(a){if(a){var b=this.$n("cave");if(b&&!b.style.height&&(a=a.$n("cave"))){b.style.height=a.style.height}}},_sel:function(a,e){var c=this.getTabbox().inAccordionMold();if(c&&e){var f=this.$n("cave");zk(f)[a?"slideDown":"slideUp"](this)}else{var b=jq(c?this.$n("cave"):this.$n()),d=b.zk.isVisible();if(a){if(!d){b.show();zUtl.fireShown(this)}}else{if(d){zWatch.fireDown("onHide",this);b.hide()}}}},_fixPanelHgh:function(){var a=this.getTabbox();var i=a.$n(),c=i.style.height;if(c&&c!="auto"){if(!a.inAccordionMold()){var b=this.$n(),j=a.isHorizontal();c=j?zk(b.parentNode).vflexHeight():b.parentNode.clientHeight;if(zk.ie8){c-=1}zk(b).setOffsetHeight(c);if(zk.ie6_&&j){var k=this.$n("cave").style,f=k.zoom;k.zoom=1;k.zoom=f}}else{var b=this.$n(),c=zk(i).revisedHeight(i.offsetHeight);c=zk(b.parentNode).revisedHeight(c);if(zk.opera){var h;if((h=i.parentNode)&&i.style.height=="100%"){c=zk(h).revisedHeight(h.offsetHeight)}}for(var d=b.parentNode.firstChild;d;d=d.nextSibling){if(d!=b){c-=d.offsetHeight}}c-=b.firstChild.offsetHeight;c=zk(b=b.lastChild).revisedHeight(c);if(zk.ie8){c-=1}var g=this.getCaveNode(),k=g.style;k.height=jq.px0(c)}}},domClass_:function(){var a=this.$supers("domClass_",arguments);if(this.getTabbox().inAccordionMold()){a+=" "+this.getZclass()+"-cnt"}return a},onSize:function(){var a=this.getTabbox();if(a.inAccordionMold()&&!zk(this.$n("cave")).isVisible()){return}this._fixPanelHgh();if(zk.ie&&!zk.ie8){zk(a.$n()).redoCSS()}},setVflex:function(a){if(a!="min"){a=false}this.$super(zul.tab.Tabpanel,"setVflex",a)},setHflex:function(a){if(a!="min"){a=false}this.$super(zul.tab.Tabpanel,"setHflex",a)},bind_:function(){this.$supers(zul.tab.Tabpanel,"bind_",arguments);zWatch.listen({onSize:this})},unbind_:function(){zWatch.unlisten({onSize:this});this.$supers(zul.tab.Tabpanel,"unbind_",arguments)}});