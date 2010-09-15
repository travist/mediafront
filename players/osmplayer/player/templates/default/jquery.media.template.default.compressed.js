/**
 *  Copyright (c) 2010 Alethia Inc,
 *  http://www.alethia-inc.com
 *  Developed by Travis Tidwell | travist at alethia-inc.com 
 *
 *  License:  GPL version 3.
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *  
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.

 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
(function(a){jQuery.media=jQuery.media?jQuery.media:{};jQuery.media.defaults=jQuery.extend(jQuery.media.defaults,{prefix:"",controllerOnly:false});jQuery.media.templates=jQuery.extend({},{"default":function(b,c){return new (function(d,e){e=jQuery.media.utils.getSettings(e);var f=this;this.windowWidth=0;this.windowHeight=0;this.playerWidth=0;this.playerHeight=0;this.nodeWidth=0;this.nodeHeight=0;this.playlistWidth=0;this.playlistHeight=0;this.menuWidth=0;this.menuHeight=0;this.controlHeight=0;this.pagerHeight=0;this.scrollTop=0;this.scrollLeft=0;a(window).bind("resize",function(){var j=a(window).width();var i=a(window).height();var h=j-f.windowWidth;var g=i-f.windowHeight;f.windowWidth=j;f.windowHeight=i;if(d&&d.fullScreen){f.onFullScreenResize(h,g);}});a(window).bind("scroll",function(){if(d&&d.fullScreen){f.onFullScreenScroll();}});this.mediaDisplay=null;this.logo=null;this.controlBar=null;this.pager=null;this.player=null;this.titleLinks=null;this.prevState={};this.mouseTimeout=null;this.playlistShown=true;this.initialize=function(h){var n=2;this.mediaDisplay=d.node?(d.node.player?d.node.player.media:null):null;this.controlBar=d.node?(d.node.player?d.node.player.controller:null):null;this.titleLinks=d.titleBar?d.titleBar.titleLinks:null;this.pager=d.playlist?d.playlist.pager:null;this.player=d.node?d.node.player:null;this.logo=this.player?this.player.logo:null;var o=d.display.position();this.pagerHeight=this.pager?this.pager.display.height():0;this.controlHeight=this.controlBar?this.controlBar.display.height():0;this.menuWidth=d.menu?d.menu.display.width():0;this.menuHeight=d.menu?d.menu.display.height():0;this.windowWidth=a(window).width();this.windowHeight=a(window).height();if(d.dialog){this.playerWidth=d.dialog.width();this.playerHeight=d.dialog.height()-o.top;}this.playlistWidth=d.playlist?d.playlist.width:0;this.playlistHeight=d.playlist?d.playlist.height:0;var k=h.vertical?this.playlistWidth:this.playerWidth;var g=h.vertical?this.playerHeight:this.playlistHeight;g-=this.pagerHeight;this.resizePlaylist(k-this.playlistWidth,g-this.playlistHeight);this.nodeWidth=d.node?d.node.width:0;this.nodeHeight=d.node?d.node.height:0;k=h.vertical?(this.playerWidth-this.playlistWidth-1):(this.playerWidth);g=h.vertical?this.playerHeight:(this.playerHeight-this.playlistHeight-this.pagerHeight-this.controlHeight-2*n);g-=this.controlHeight;if(this.controlBar){this.controlBar.allowResize=false;}this.resizeNode(k-this.nodeWidth,g-this.nodeHeight);if(this.controlBar){this.controlBar.allowResize=true;this.controlBar.onResize(this.nodeWidth-this.controlBar.display.width(),0);this.controlBar.display.css({marginTop:(this.nodeHeight+1),width:this.nodeWidth});}if(!h.disablePlaylist&&d.playlist&&!h.vertical){var p=d.playlist.scrollRegion;var l=p.elementHeight;this.playlistHeight+=2*(this.pagerHeight+n);d.playlist.scrollRegion.scrollWrapper.css({"float":"left",width:this.playerWidth});d.playlist.display.css({"float":"left",width:this.playerWidth});p.display.css({width:this.playerWidth});p.scrollWrapper.css({width:this.playerWidth});if(d.node){d.playlist.display.css({marginTop:2*n+this.nodeHeight+this.controlHeight});d.node.display.css({marginRight:0});}}if(d.node&&!d.playlist){d.node.display.css({marginRight:0});if(this.controlBar){this.controlBar.onResize(this.playerWidth-this.nodeWidth,0);}}var j=d.node?d.node.display.find("#"+h.prefix+"medianodevoter").width():null;if(this.controlBar&&!j){var m=this.controlBar.display.find("#"+h.prefix+"mediacontrolright");var i=m.width();var k=0;m.children().each(function(){k+=a(this).outerWidth(true);});m.css("width",k);this.controlBar.display.find("#"+h.prefix+"mediacontrolcenter").css("marginRight",k);this.controlBar.onResize((i-k),0);}if(!d.node){if(h.vertical){d.dialog.css("width",this.playlistWidth);}else{d.dialog.css("height",o.top+this.playlistHeight-2*n);}}if(this.controlBar&&h.controllerOnly){this.mediaDisplay.display.css({position:"absolute",zIndex:1000,marginLeft:-100000});d.dialog.css({height:(this.controlHeight+o.top)});this.controlBar.display.css({marginTop:0});this.controlBar.display.removeClass(h.prefix+"ui-corner-bottom");this.controlBar.display.addClass(h.prefix+"ui-corner-all");}if(d.playlist&&d.node&&!h.showPlaylist){this.showPlaylist(false);d.playlist.pager.display.hide();d.playlist.busy.hide();d.playlist.display.css("width","0px");}if(this.mediaDisplay){this.mediaDisplay.display.bind("click",function(){if(d.fullScreen){f.onFullScreenMouse();}});}};this.resizeNode=function(h,g){this.nodeWidth+=h;this.nodeHeight+=g;if(d.node){d.node.onResize(h,g);}this.resizeOverlays();};this.resizeOverlays=function(){this.setCSS({menu:{marginTop:((this.nodeHeight-this.menuHeight)/2)+"px",marginLeft:((this.nodeWidth-this.menuWidth)/2)+"px"}});};this.resizePlaylist=function(h,g){this.playlistWidth+=h;this.playlistHeight+=g;if(d.playlist){d.playlist.onResize(h,g);}};this.getSettings=function(){return{};};this.onMenu=function(g){if(d.menu){if(g){d.menu.display.show("normal");}else{d.menu.display.hide("normal");}}};this.onMaximize=function(h){var i=h?"-="+this.playlistWidth+"px":"+="+this.playlistWidth+"px";var g=h?"-="+this.playlistHeight+"px":"+="+this.playlistHeight+"px";var j=e.vertical?{width:i}:{height:g};if(h){d.playlist.pager.display.hide();d.playlist.busy.hide();}else{this.showPlaylist(true);}d.playlist.display.animate(j,250,"linear",function(){if(h){f.showPlaylist(false);}else{d.playlist.refresh();d.playlist.pager.display.show();if(d.playlist.busyVisible){d.playlist.busy.show();}}});};this.showPlaylist=function(i){if(i!=this.playlistShown){this.playlistShown=i;var h=e.vertical?(i?-this.playlistWidth:this.playlistWidth):0;var g=e.vertical?0:(i?-this.playlistHeight:this.playlistHeight);if(i){if(e.vertical){d.node.display.css({marginRight:this.playlistWidth+2});}d.playlist.display.show();}else{if(e.vertical){d.node.display.css({marginRight:0});}d.playlist.display.hide();}this.resizeNode(h,g);if(this.controlBar){this.controlBar.display.css({marginTop:this.nodeHeight,width:this.nodeWidth});}}};this.setCSS=function(g){if(g.titleLinks&&this.titleLinks){this.titleLinks.css(g.titleLinks);}if(g.controlBar&&this.controlBar){this.controlBar.display.css(g.controlBar);}if(g.display&&this.mediaDisplay){this.mediaDisplay.display.css(g.display);}if(g.busy&&this.player&&this.player.busy){this.player.busy.css(g.busy);}if(g.play&&this.player&&this.player.play){this.player.play.css(g.play);}if(g.preview&&this.player&&this.player.preview){this.player.preview.display.css(g.preview);}if(g.menu&&d.menu){d.menu.display.css(g.menu);}if(g.logo&&this.logo){this.logo.display.css(g.logo);}};this.onFullScreenMouse=function(){if(this.player){this.player.showController(true);}if(this.titleLinks){this.titleLinks.show();}clearTimeout(this.mouseTimeout);this.mouseTimeout=setTimeout(function(){if(f.player){f.player.showController(false,"slow");}if(f.titleLinks){f.titleLinks.hide("slow");}},4000);};this.onFullScreenResize=function(h,g){this.resizeNode((this.windowWidth-this.nodeWidth),(this.windowHeight-this.nodeHeight));var k=this.controlBar?{marginTop:parseInt(this.controlBar.display.css("marginTop"),10)+g,marginLeft:parseInt(this.controlBar.display.css("marginLeft"),10)+(h/2)}:null;var j=this.titleLinks?{marginLeft:parseInt(this.titleLinks.css("marginLeft"),10)+h}:null;var i=d.menu?{marginTop:parseInt(d.menu.display.css("marginTop"),10)+(g/2),marginLeft:parseInt(d.menu.display.css("marginLeft"),10)+(h/2)}:null;this.setCSS({controlBar:k,titleLinks:j,menu:i});};this.onFullScreenScroll=function(){var g=a(window).scrollTop()-1;var o=a(window).scrollLeft()-1;var l=o-this.scrollLeft;var k=g-this.scrollTop;this.scrollTop=g;this.scrollleft=o;var m=this.mediaDisplay?{marginTop:parseInt(this.mediaDisplay.display.css("marginTop"),10)+k,marginLeft:parseInt(this.mediaDisplay.display.css("marginLeft"),10)+l}:null;var i=this.controlBar?{marginTop:parseInt(this.controlBar.display.css("marginTop"),10)+k,marginLeft:parseInt(this.controlBar.display.css("marginLeft"),10)+l}:null;var j=this.titleLinks?{marginTop:parseInt(this.titleLinks.css("marginTop"),10)+k,marginLeft:parseInt(this.titleLinks.css("marginLeft"),10)+l}:null;var h=d.menu?{marginTop:parseInt(d.menu.display.css("marginTop"),10)+k,marginLeft:parseInt(d.menu.display.css("marginLeft"),10)+l}:null;var n=this.logo?{marginTop:parseInt(this.logo.display.css("marginTop"),10)+k,marginLeft:parseInt(this.logo.display.css("marginLeft"),10)+l}:null;this.setCSS({display:m,controlBar:i,titleLinks:j,menu:h,busy:m,play:m,logo:n});};this.onFullScreen=function(l){if(l){var p=this.mediaDisplay?{marginTop:this.mediaDisplay.display.css("marginTop"),marginLeft:this.mediaDisplay.display.css("marginLeft")}:null;var h=this.controlBar?{position:this.controlBar.display.css("position"),marginTop:this.controlBar.display.css("marginTop"),marginLeft:this.controlBar.display.css("marginLeft")}:null;var i=this.titleLinks?{position:this.titleLinks.css("position"),marginTop:this.titleLinks.css("marginTop"),marginLeft:this.titleLinks.css("marginLeft")}:null;var g=d.menu?{marginTop:d.menu.display.css("marginTop"),marginLeft:d.menu.display.css("marginLeft")}:null;var n=(this.player&&this.player.busy)?{marginTop:this.player.busy.css("marginTop"),marginLeft:this.player.busy.css("marginLeft")}:null;var q=(this.player&&this.player.play)?{marginTop:this.player.play.css("marginTop"),marginLeft:this.player.play.css("marginLeft")}:null;var k=(this.player&&this.player.preview)?{marginTop:this.player.preview.display.css("marginTop"),marginLeft:this.player.preview.display.css("marginLeft")}:null;this.prevState={display:p,controlBar:h,titleLinks:i,menu:g,busy:n,play:q,preview:k,nodeWidth:this.nodeWidth,nodeHeight:this.nodeHeight};if(this.controlBar){this.controlBar.allowResize=false;this.controlBar.display.removeClass(e.prefix+"ui-corner-bottom");this.controlBar.display.addClass(e.prefix+"ui-corner-all");}a(window).bind("mousemove",function(){f.onFullScreenMouse();});this.onFullScreenMouse();if(this.player){this.player.showPlayerController(true);}if(d.playlist){d.playlist.busy.hide();}this.setCSS({titleLinks:{position:"absolute"},controlBar:{position:"absolute"}});this.scrollTop=a(window).scrollTop()-1;this.scrollLeft=a(window).scrollLeft()-1;if(this.mediaDisplay){var o=this.mediaDisplay.display.offset();p={marginTop:(this.scrollTop-o.top),marginLeft:(this.scrollLeft-o.left)};}if(this.controlBar){var j=this.controlBar.display.offset();h={marginTop:(this.scrollTop-j.top+this.nodeHeight)+(0.95*(this.windowHeight-this.controlHeight)),marginLeft:(this.scrollLeft-j.left)+((this.windowWidth-this.nodeWidth)/2)};}if(this.titleLinks){var r=this.titleLinks.offset();i={marginTop:(this.scrollTop-r.top+5),marginLeft:((this.scrollLeft-r.left)+this.windowWidth-this.titleLinks.width()-5)};}this.setCSS({display:p,controlBar:h,titleLinks:i,busy:p,play:p,preview:p},true);this.onFullScreenResize(0,0);if(d.menu){var m=d.menu.display.offset();d.menu.display.css({marginTop:(p.marginTop+(this.scrollTop-m.top)+((this.windowHeight-this.menuHeight)/2)),marginLeft:(p.marginLeft+(this.scrollLeft-m.left)+((this.windowWidth-this.menuWidth)/2))});}}else{clearTimeout(this.mouseTimeout);a(window).unbind("mousemove");if(this.titleLinks){this.titleLinks.show();}if(this.player){this.player.showPlayerController(false);}if(d.playlist&&d.playlist.busyVisible){d.playlist.busy.show();}this.setCSS(this.prevState);this.resizeNode((this.prevState.nodeWidth-this.windowWidth),(this.prevState.nodeHeight-this.windowHeight));if(this.controlBar){this.controlBar.allowResize=true;this.controlBar.display.removeClass(e.prefix+"ui-corner-all");this.controlBar.display.addClass(e.prefix+"ui-corner-bottom");}}};this.onMediaUpdate=function(g){};this.onControlUpdate=function(g){};this.onResize=function(h,g){this.playerWidth+=h;this.playerHeight+=g;this.resizeNode(h,0);};this.setField=function(g){if(g.fieldType=="cck_text"){var h=g.node[g.fieldName];if(h){a(g.field).empty().html(h["0"].value);}}return true;};this.onNodeLoad=function(g){};this.onPlaylistLoad=function(g){};this.onMenuOver=function(g){};this.onMenuOut=function(g){};this.onMenuSelect=function(i,h,g){if(g){h.show("normal");i.addClass(e.prefix+"ui-tabs-selected "+e.prefix+"ui-state-active");}else{h.hide("normal");i.removeClass(e.prefix+"ui-tabs-selected "+e.prefix+"ui-state-active");}};this.onLinkOver=function(g){g.addClass(e.prefix+"ui-state-hover");};this.onLinkOut=function(g){g.removeClass(e.prefix+"ui-state-hover");};this.onLinkSelect=function(h,g){if(g){a(h.display).addClass(e.prefix+"active");}else{a(h.display).removeClass(e.prefix+"active");}};this.onTeaserLoad=function(g){};this.onTeaserOver=function(g){a(g.node.display).addClass(e.prefix+"ui-state-hover");};this.onTeaserOut=function(g){a(g.node.display).removeClass(e.prefix+"ui-state-hover");};this.onTeaserSelect=function(g,h){if(h){a(g.node.display).addClass(e.prefix+"ui-state-hover");}else{a(g.node.display).removeClass(e.prefix+"ui-state-hover");}};this.onTeaserActivate=function(g,h){if(h){a(g.node.display).addClass(e.prefix+"ui-state-active");}else{a(g.node.display).removeClass(e.prefix+"ui-state-active");}};this.updateVote=function(l,m,k){var h=0;var j=l.votes.length;while(j--){var g=l.votes[j];g.display.removeClass(k?(e.prefix+"ui-state-highlight"):(e.prefix+"ui-state-active"));g.display.removeClass(k?"":(e.prefix+"ui-state-active"));if(m>=g.vote){g.display.addClass(k?(e.prefix+"ui-state-highlight"):(e.prefix+"ui-state-active"));}h=g.vote;}};this.formatTime=false;})(b,c);}},jQuery.media.templates);})(jQuery);