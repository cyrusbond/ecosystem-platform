"use strict";(self.webpackChunkfirefox_ecosystem_platform=self.webpackChunkfirefox_ecosystem_platform||[]).push([[70],{50070:(t,e,i)=>{i.r(e),i.d(e,{diagram:()=>D});var r=i(61011),c=i(59373),n=(i(27484),i(17967),i(27856),function(){var t=function(t,e,i,r){for(i=i||{},r=t.length;r--;i[t[r]]=e);return i},e=[1,4],i=[1,7],r=[1,5],c=[1,9],n=[1,6],s=[2,6],a=[1,16],o=[6,8,14,20,22,24,25,27,29,32,37,40,50,55],l=[8,14,20,22,24,25,27,29,32,37,40],h=[8,13,14,20,22,24,25,27,29,32,37,40],m=[1,26],u=[6,8,14,50,55],y=[8,14,55],p=[1,53],g=[1,52],b=[8,14,30,33,35,38,55],d=[1,67],f=[1,68],k=[1,69],_=[8,14,33,35,42,55],$={trace:function(){},yy:{},symbols_:{error:2,start:3,eol:4,directive:5,GG:6,document:7,EOF:8,":":9,DIR:10,options:11,body:12,OPT:13,NL:14,line:15,statement:16,commitStatement:17,mergeStatement:18,cherryPickStatement:19,acc_title:20,acc_title_value:21,acc_descr:22,acc_descr_value:23,acc_descr_multiline_value:24,section:25,branchStatement:26,CHECKOUT:27,ref:28,BRANCH:29,ORDER:30,NUM:31,CHERRY_PICK:32,COMMIT_ID:33,STR:34,COMMIT_TAG:35,EMPTYSTR:36,MERGE:37,COMMIT_TYPE:38,commitType:39,COMMIT:40,commit_arg:41,COMMIT_MSG:42,NORMAL:43,REVERSE:44,HIGHLIGHT:45,openDirective:46,typeDirective:47,closeDirective:48,argDirective:49,open_directive:50,type_directive:51,arg_directive:52,close_directive:53,ID:54,";":55,$accept:0,$end:1},terminals_:{2:"error",6:"GG",8:"EOF",9:":",10:"DIR",13:"OPT",14:"NL",20:"acc_title",21:"acc_title_value",22:"acc_descr",23:"acc_descr_value",24:"acc_descr_multiline_value",25:"section",27:"CHECKOUT",29:"BRANCH",30:"ORDER",31:"NUM",32:"CHERRY_PICK",33:"COMMIT_ID",34:"STR",35:"COMMIT_TAG",36:"EMPTYSTR",37:"MERGE",38:"COMMIT_TYPE",40:"COMMIT",42:"COMMIT_MSG",43:"NORMAL",44:"REVERSE",45:"HIGHLIGHT",50:"open_directive",51:"type_directive",52:"arg_directive",53:"close_directive",54:"ID",55:";"},productions_:[0,[3,2],[3,2],[3,3],[3,4],[3,5],[7,0],[7,2],[11,2],[11,1],[12,0],[12,2],[15,2],[15,1],[16,1],[16,1],[16,1],[16,2],[16,2],[16,1],[16,1],[16,1],[16,2],[26,2],[26,4],[19,3],[19,5],[19,5],[19,5],[19,5],[18,2],[18,4],[18,4],[18,4],[18,6],[18,6],[18,6],[18,6],[18,6],[18,6],[18,8],[18,8],[18,8],[18,8],[18,8],[18,8],[17,2],[17,3],[17,3],[17,5],[17,5],[17,3],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,3],[17,5],[17,5],[17,5],[17,5],[17,5],[17,5],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,7],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[17,9],[41,0],[41,1],[39,1],[39,1],[39,1],[5,3],[5,5],[46,1],[47,1],[49,1],[48,1],[28,1],[28,1],[4,1],[4,1],[4,1]],performAction:function(t,e,i,r,c,n,s){var a=n.length-1;switch(c){case 3:return n[a];case 4:return n[a-1];case 5:return r.setDirection(n[a-3]),n[a-1];case 7:r.setOptions(n[a-1]),this.$=n[a];break;case 8:n[a-1]+=n[a],this.$=n[a-1];break;case 10:this.$=[];break;case 11:n[a-1].push(n[a]),this.$=n[a-1];break;case 12:this.$=n[a-1];break;case 17:this.$=n[a].trim(),r.setAccTitle(this.$);break;case 18:case 19:this.$=n[a].trim(),r.setAccDescription(this.$);break;case 20:r.addSection(n[a].substr(8)),this.$=n[a].substr(8);break;case 22:r.checkout(n[a]);break;case 23:r.branch(n[a]);break;case 24:r.branch(n[a-2],n[a]);break;case 25:r.cherryPick(n[a],"",void 0);break;case 26:r.cherryPick(n[a-2],"",n[a]);break;case 27:case 29:r.cherryPick(n[a-2],"","");break;case 28:r.cherryPick(n[a],"",n[a-2]);break;case 30:r.merge(n[a],"","","");break;case 31:r.merge(n[a-2],n[a],"","");break;case 32:r.merge(n[a-2],"",n[a],"");break;case 33:r.merge(n[a-2],"","",n[a]);break;case 34:r.merge(n[a-4],n[a],"",n[a-2]);break;case 35:r.merge(n[a-4],"",n[a],n[a-2]);break;case 36:r.merge(n[a-4],"",n[a-2],n[a]);break;case 37:r.merge(n[a-4],n[a-2],n[a],"");break;case 38:r.merge(n[a-4],n[a-2],"",n[a]);break;case 39:r.merge(n[a-4],n[a],n[a-2],"");break;case 40:r.merge(n[a-6],n[a-4],n[a-2],n[a]);break;case 41:r.merge(n[a-6],n[a],n[a-4],n[a-2]);break;case 42:r.merge(n[a-6],n[a-4],n[a],n[a-2]);break;case 43:r.merge(n[a-6],n[a-2],n[a-4],n[a]);break;case 44:r.merge(n[a-6],n[a],n[a-2],n[a-4]);break;case 45:r.merge(n[a-6],n[a-2],n[a],n[a-4]);break;case 46:r.commit(n[a]);break;case 47:r.commit("","",r.commitType.NORMAL,n[a]);break;case 48:r.commit("","",n[a],"");break;case 49:r.commit("","",n[a],n[a-2]);break;case 50:r.commit("","",n[a-2],n[a]);break;case 51:r.commit("",n[a],r.commitType.NORMAL,"");break;case 52:r.commit("",n[a-2],r.commitType.NORMAL,n[a]);break;case 53:r.commit("",n[a],r.commitType.NORMAL,n[a-2]);break;case 54:r.commit("",n[a-2],n[a],"");break;case 55:r.commit("",n[a],n[a-2],"");break;case 56:r.commit("",n[a-4],n[a-2],n[a]);break;case 57:r.commit("",n[a-4],n[a],n[a-2]);break;case 58:r.commit("",n[a-2],n[a-4],n[a]);break;case 59:r.commit("",n[a],n[a-4],n[a-2]);break;case 60:r.commit("",n[a],n[a-2],n[a-4]);break;case 61:r.commit("",n[a-2],n[a],n[a-4]);break;case 62:r.commit(n[a],"",r.commitType.NORMAL,"");break;case 63:r.commit(n[a],"",r.commitType.NORMAL,n[a-2]);break;case 64:r.commit(n[a-2],"",r.commitType.NORMAL,n[a]);break;case 65:r.commit(n[a-2],"",n[a],"");break;case 66:r.commit(n[a],"",n[a-2],"");break;case 67:r.commit(n[a],n[a-2],r.commitType.NORMAL,"");break;case 68:r.commit(n[a-2],n[a],r.commitType.NORMAL,"");break;case 69:r.commit(n[a-4],"",n[a-2],n[a]);break;case 70:r.commit(n[a-4],"",n[a],n[a-2]);break;case 71:r.commit(n[a-2],"",n[a-4],n[a]);break;case 72:r.commit(n[a],"",n[a-4],n[a-2]);break;case 73:r.commit(n[a],"",n[a-2],n[a-4]);break;case 74:r.commit(n[a-2],"",n[a],n[a-4]);break;case 75:r.commit(n[a-4],n[a],n[a-2],"");break;case 76:r.commit(n[a-4],n[a-2],n[a],"");break;case 77:r.commit(n[a-2],n[a],n[a-4],"");break;case 78:r.commit(n[a],n[a-2],n[a-4],"");break;case 79:r.commit(n[a],n[a-4],n[a-2],"");break;case 80:r.commit(n[a-2],n[a-4],n[a],"");break;case 81:r.commit(n[a-4],n[a],r.commitType.NORMAL,n[a-2]);break;case 82:r.commit(n[a-4],n[a-2],r.commitType.NORMAL,n[a]);break;case 83:r.commit(n[a-2],n[a],r.commitType.NORMAL,n[a-4]);break;case 84:r.commit(n[a],n[a-2],r.commitType.NORMAL,n[a-4]);break;case 85:r.commit(n[a],n[a-4],r.commitType.NORMAL,n[a-2]);break;case 86:r.commit(n[a-2],n[a-4],r.commitType.NORMAL,n[a]);break;case 87:r.commit(n[a-6],n[a-4],n[a-2],n[a]);break;case 88:r.commit(n[a-6],n[a-4],n[a],n[a-2]);break;case 89:r.commit(n[a-6],n[a-2],n[a-4],n[a]);break;case 90:r.commit(n[a-6],n[a],n[a-4],n[a-2]);break;case 91:r.commit(n[a-6],n[a-2],n[a],n[a-4]);break;case 92:r.commit(n[a-6],n[a],n[a-2],n[a-4]);break;case 93:r.commit(n[a-4],n[a-6],n[a-2],n[a]);break;case 94:r.commit(n[a-4],n[a-6],n[a],n[a-2]);break;case 95:r.commit(n[a-2],n[a-6],n[a-4],n[a]);break;case 96:r.commit(n[a],n[a-6],n[a-4],n[a-2]);break;case 97:r.commit(n[a-2],n[a-6],n[a],n[a-4]);break;case 98:r.commit(n[a],n[a-6],n[a-2],n[a-4]);break;case 99:r.commit(n[a],n[a-4],n[a-2],n[a-6]);break;case 100:r.commit(n[a-2],n[a-4],n[a],n[a-6]);break;case 101:r.commit(n[a],n[a-2],n[a-4],n[a-6]);break;case 102:r.commit(n[a-2],n[a],n[a-4],n[a-6]);break;case 103:r.commit(n[a-4],n[a-2],n[a],n[a-6]);break;case 104:r.commit(n[a-4],n[a],n[a-2],n[a-6]);break;case 105:r.commit(n[a-2],n[a-4],n[a-6],n[a]);break;case 106:r.commit(n[a],n[a-4],n[a-6],n[a-2]);break;case 107:r.commit(n[a-2],n[a],n[a-6],n[a-4]);break;case 108:r.commit(n[a],n[a-2],n[a-6],n[a-4]);break;case 109:r.commit(n[a-4],n[a-2],n[a-6],n[a]);break;case 110:r.commit(n[a-4],n[a],n[a-6],n[a-2]);break;case 111:this.$="";break;case 112:this.$=n[a];break;case 113:this.$=r.commitType.NORMAL;break;case 114:this.$=r.commitType.REVERSE;break;case 115:this.$=r.commitType.HIGHLIGHT;break;case 118:r.parseDirective("%%{","open_directive");break;case 119:r.parseDirective(n[a],"type_directive");break;case 120:n[a]=n[a].trim().replace(/'/g,'"'),r.parseDirective(n[a],"arg_directive");break;case 121:r.parseDirective("}%%","close_directive","gitGraph")}},table:[{3:1,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:n},{1:[3]},{3:10,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:n},{3:11,4:2,5:3,6:e,8:i,14:r,46:8,50:c,55:n},{7:12,8:s,9:[1,13],10:[1,14],11:15,14:a},t(o,[2,124]),t(o,[2,125]),t(o,[2,126]),{47:17,51:[1,18]},{51:[2,118]},{1:[2,1]},{1:[2,2]},{8:[1,19]},{7:20,8:s,11:15,14:a},{9:[1,21]},t(l,[2,10],{12:22,13:[1,23]}),t(h,[2,9]),{9:[1,25],48:24,53:m},t([9,53],[2,119]),{1:[2,3]},{8:[1,27]},{7:28,8:s,11:15,14:a},{8:[2,7],14:[1,31],15:29,16:30,17:32,18:33,19:34,20:[1,35],22:[1,36],24:[1,37],25:[1,38],26:39,27:[1,40],29:[1,44],32:[1,43],37:[1,42],40:[1,41]},t(h,[2,8]),t(u,[2,116]),{49:45,52:[1,46]},t(u,[2,121]),{1:[2,4]},{8:[1,47]},t(l,[2,11]),{4:48,8:i,14:r,55:n},t(l,[2,13]),t(y,[2,14]),t(y,[2,15]),t(y,[2,16]),{21:[1,49]},{23:[1,50]},t(y,[2,19]),t(y,[2,20]),t(y,[2,21]),{28:51,34:p,54:g},t(y,[2,111],{41:54,33:[1,57],34:[1,59],35:[1,55],38:[1,56],42:[1,58]}),{28:60,34:p,54:g},{33:[1,61],35:[1,62]},{28:63,34:p,54:g},{48:64,53:m},{53:[2,120]},{1:[2,5]},t(l,[2,12]),t(y,[2,17]),t(y,[2,18]),t(y,[2,22]),t(b,[2,122]),t(b,[2,123]),t(y,[2,46]),{34:[1,65]},{39:66,43:d,44:f,45:k},{34:[1,70]},{34:[1,71]},t(y,[2,112]),t(y,[2,30],{33:[1,72],35:[1,74],38:[1,73]}),{34:[1,75]},{34:[1,76],36:[1,77]},t(y,[2,23],{30:[1,78]}),t(u,[2,117]),t(y,[2,47],{33:[1,80],38:[1,79],42:[1,81]}),t(y,[2,48],{33:[1,83],35:[1,82],42:[1,84]}),t(_,[2,113]),t(_,[2,114]),t(_,[2,115]),t(y,[2,51],{35:[1,85],38:[1,86],42:[1,87]}),t(y,[2,62],{33:[1,90],35:[1,88],38:[1,89]}),{34:[1,91]},{39:92,43:d,44:f,45:k},{34:[1,93]},t(y,[2,25],{35:[1,94]}),{33:[1,95]},{33:[1,96]},{31:[1,97]},{39:98,43:d,44:f,45:k},{34:[1,99]},{34:[1,100]},{34:[1,101]},{34:[1,102]},{34:[1,103]},{34:[1,104]},{39:105,43:d,44:f,45:k},{34:[1,106]},{34:[1,107]},{39:108,43:d,44:f,45:k},{34:[1,109]},t(y,[2,31],{35:[1,111],38:[1,110]}),t(y,[2,32],{33:[1,113],35:[1,112]}),t(y,[2,33],{33:[1,114],38:[1,115]}),{34:[1,116],36:[1,117]},{34:[1,118]},{34:[1,119]},t(y,[2,24]),t(y,[2,49],{33:[1,120],42:[1,121]}),t(y,[2,53],{38:[1,122],42:[1,123]}),t(y,[2,63],{33:[1,125],38:[1,124]}),t(y,[2,50],{33:[1,126],42:[1,127]}),t(y,[2,55],{35:[1,128],42:[1,129]}),t(y,[2,66],{33:[1,131],35:[1,130]}),t(y,[2,52],{38:[1,132],42:[1,133]}),t(y,[2,54],{35:[1,134],42:[1,135]}),t(y,[2,67],{35:[1,137],38:[1,136]}),t(y,[2,64],{33:[1,139],38:[1,138]}),t(y,[2,65],{33:[1,141],35:[1,140]}),t(y,[2,68],{35:[1,143],38:[1,142]}),{39:144,43:d,44:f,45:k},{34:[1,145]},{34:[1,146]},{34:[1,147]},{34:[1,148]},{39:149,43:d,44:f,45:k},t(y,[2,26]),t(y,[2,27]),t(y,[2,28]),t(y,[2,29]),{34:[1,150]},{34:[1,151]},{39:152,43:d,44:f,45:k},{34:[1,153]},{39:154,43:d,44:f,45:k},{34:[1,155]},{34:[1,156]},{34:[1,157]},{34:[1,158]},{34:[1,159]},{34:[1,160]},{34:[1,161]},{39:162,43:d,44:f,45:k},{34:[1,163]},{34:[1,164]},{34:[1,165]},{39:166,43:d,44:f,45:k},{34:[1,167]},{39:168,43:d,44:f,45:k},{34:[1,169]},{34:[1,170]},{34:[1,171]},{39:172,43:d,44:f,45:k},{34:[1,173]},t(y,[2,37],{35:[1,174]}),t(y,[2,38],{38:[1,175]}),t(y,[2,36],{33:[1,176]}),t(y,[2,39],{35:[1,177]}),t(y,[2,34],{38:[1,178]}),t(y,[2,35],{33:[1,179]}),t(y,[2,60],{42:[1,180]}),t(y,[2,73],{33:[1,181]}),t(y,[2,61],{42:[1,182]}),t(y,[2,84],{38:[1,183]}),t(y,[2,74],{33:[1,184]}),t(y,[2,83],{38:[1,185]}),t(y,[2,59],{42:[1,186]}),t(y,[2,72],{33:[1,187]}),t(y,[2,58],{42:[1,188]}),t(y,[2,78],{35:[1,189]}),t(y,[2,71],{33:[1,190]}),t(y,[2,77],{35:[1,191]}),t(y,[2,57],{42:[1,192]}),t(y,[2,85],{38:[1,193]}),t(y,[2,56],{42:[1,194]}),t(y,[2,79],{35:[1,195]}),t(y,[2,80],{35:[1,196]}),t(y,[2,86],{38:[1,197]}),t(y,[2,70],{33:[1,198]}),t(y,[2,81],{38:[1,199]}),t(y,[2,69],{33:[1,200]}),t(y,[2,75],{35:[1,201]}),t(y,[2,76],{35:[1,202]}),t(y,[2,82],{38:[1,203]}),{34:[1,204]},{39:205,43:d,44:f,45:k},{34:[1,206]},{34:[1,207]},{39:208,43:d,44:f,45:k},{34:[1,209]},{34:[1,210]},{34:[1,211]},{34:[1,212]},{39:213,43:d,44:f,45:k},{34:[1,214]},{39:215,43:d,44:f,45:k},{34:[1,216]},{34:[1,217]},{34:[1,218]},{34:[1,219]},{34:[1,220]},{34:[1,221]},{34:[1,222]},{39:223,43:d,44:f,45:k},{34:[1,224]},{34:[1,225]},{34:[1,226]},{39:227,43:d,44:f,45:k},{34:[1,228]},{39:229,43:d,44:f,45:k},{34:[1,230]},{34:[1,231]},{34:[1,232]},{39:233,43:d,44:f,45:k},t(y,[2,40]),t(y,[2,42]),t(y,[2,41]),t(y,[2,43]),t(y,[2,45]),t(y,[2,44]),t(y,[2,101]),t(y,[2,102]),t(y,[2,99]),t(y,[2,100]),t(y,[2,104]),t(y,[2,103]),t(y,[2,108]),t(y,[2,107]),t(y,[2,106]),t(y,[2,105]),t(y,[2,110]),t(y,[2,109]),t(y,[2,98]),t(y,[2,97]),t(y,[2,96]),t(y,[2,95]),t(y,[2,93]),t(y,[2,94]),t(y,[2,92]),t(y,[2,91]),t(y,[2,90]),t(y,[2,89]),t(y,[2,87]),t(y,[2,88])],defaultActions:{9:[2,118],10:[2,1],11:[2,2],19:[2,3],27:[2,4],46:[2,120],47:[2,5]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],r=[],c=[null],n=[],s=this.table,a="",o=0,l=0,h=2,m=1,u=n.slice.call(arguments,1),y=Object.create(this.lexer),p={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(p.yy[g]=this.yy[g]);y.setInput(t,p.yy),p.yy.lexer=y,p.yy.parser=this,void 0===y.yylloc&&(y.yylloc={});var b=y.yylloc;n.push(b);var d=y.options&&y.options.ranges;function f(){var t;return"number"!=typeof(t=r.pop()||y.lex()||m)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof p.yy.parseError?this.parseError=p.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,_,$,x,v,w,E,T,L={};;){if(_=i[i.length-1],this.defaultActions[_]?$=this.defaultActions[_]:(null==k&&(k=f()),$=s[_]&&s[_][k]),void 0===$||!$.length||!$[0]){var M="";for(v in T=[],s[_])this.terminals_[v]&&v>h&&T.push("'"+this.terminals_[v]+"'");M=y.showPosition?"Parse error on line "+(o+1)+":\n"+y.showPosition()+"\nExpecting "+T.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(o+1)+": Unexpected "+(k==m?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(M,{text:y.match,token:this.terminals_[k]||k,line:y.yylineno,loc:b,expected:T})}if($[0]instanceof Array&&$.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+k);switch($[0]){case 1:i.push(k),c.push(y.yytext),n.push(y.yylloc),i.push($[1]),k=null,l=y.yyleng,a=y.yytext,o=y.yylineno,b=y.yylloc;break;case 2:if(w=this.productions_[$[1]][1],L.$=c[c.length-w],L._$={first_line:n[n.length-(w||1)].first_line,last_line:n[n.length-1].last_line,first_column:n[n.length-(w||1)].first_column,last_column:n[n.length-1].last_column},d&&(L._$.range=[n[n.length-(w||1)].range[0],n[n.length-1].range[1]]),void 0!==(x=this.performAction.apply(L,[a,l,o,p.yy,$[1],c,n].concat(u))))return x;w&&(i=i.slice(0,-1*w*2),c=c.slice(0,-1*w),n=n.slice(0,-1*w)),i.push(this.productions_[$[1]][0]),c.push(L.$),n.push(L._$),E=s[i[i.length-2]][i[i.length-1]],i.push(E);break;case 3:return!0}}return!0}},x={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var c=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===r.length?this.yylloc.first_column:0)+r[r.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[c[0],c[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,r,c;if(this.options.backtrack_lexer&&(c={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(c.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var n in c)this[n]=c[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var c=this._currentRules(),n=0;n<c.length;n++)if((i=this._input.match(this.rules[c[n]]))&&(!e||i[0].length>e[0].length)){if(e=i,r=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,c[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,c[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,r){switch(i){case 0:return this.begin("open_directive"),50;case 1:return this.begin("type_directive"),51;case 2:return this.popState(),this.begin("arg_directive"),9;case 3:return this.popState(),this.popState(),53;case 4:return 52;case 5:return this.begin("acc_title"),20;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),22;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:case 34:case 38:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:return 14;case 13:case 14:break;case 15:return 6;case 16:return 40;case 17:return 33;case 18:return 38;case 19:return 42;case 20:return 43;case 21:return 44;case 22:return 45;case 23:return 35;case 24:return 29;case 25:return 30;case 26:return 37;case 27:return 32;case 28:return 27;case 29:case 30:return 10;case 31:return 9;case 32:return"CARET";case 33:this.begin("options");break;case 35:return 13;case 36:return 36;case 37:this.begin("string");break;case 39:return 34;case 40:return 31;case 41:return 54;case 42:return 8}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:gitGraph\b)/i,/^(?:commit(?=\s|$))/i,/^(?:id:)/i,/^(?:type:)/i,/^(?:msg:)/i,/^(?:NORMAL\b)/i,/^(?:REVERSE\b)/i,/^(?:HIGHLIGHT\b)/i,/^(?:tag:)/i,/^(?:branch(?=\s|$))/i,/^(?:order:)/i,/^(?:merge(?=\s|$))/i,/^(?:cherry-pick(?=\s|$))/i,/^(?:checkout(?=\s|$))/i,/^(?:LR\b)/i,/^(?:BT\b)/i,/^(?::)/i,/^(?:\^)/i,/^(?:options\r?\n)/i,/^(?:[ \r\n\t]+end\b)/i,/^(?:[\s\S]+(?=[ \r\n\t]+end))/i,/^(?:["]["])/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[0-9]+(?=\s|$))/i,/^(?:\w([-\./\w]*[-\w])?)/i,/^(?:$)/i,/^(?:\s+)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},options:{rules:[34,35],inclusive:!1},string:{rules:[38,39],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,36,37,40,41,42,43],inclusive:!0}}};function v(){this.yy={}}return $.lexer=x,v.prototype=$,$.Parser=v,new v}());n.parser=n;const s=n;let a=(0,r.c)().gitGraph.mainBranchName,o=(0,r.c)().gitGraph.mainBranchOrder,l={},h=null,m={};m[a]={name:a,order:o};let u={};u[a]=h;let y=a,p="LR",g=0;function b(){return(0,r.y)({length:7})}let d={};const f=function(t){if(t=r.e.sanitizeText(t,(0,r.c)()),void 0===u[t]){let e=new Error('Trying to checkout branch which is not yet created. (Help try using "branch '+t+'")');throw e.hash={text:"checkout "+t,token:"checkout "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"branch '+t+'"']},e}{y=t;const e=u[y];h=l[e]}};function k(t,e,i){const r=t.indexOf(e);-1===r?t.push(i):t.splice(r,1,i)}function _(t){const e=t.reduce(((t,e)=>t.seq>e.seq?t:e),t[0]);let i="";t.forEach((function(t){i+=t===e?"\t*":"\t|"}));const c=[i,e.id,e.seq];for(let r in u)u[r]===e.id&&c.push(r);if(r.l.debug(c.join(" ")),e.parents&&2==e.parents.length){const i=l[e.parents[0]];k(t,e,i),t.push(l[e.parents[1]])}else{if(0==e.parents.length)return;{const i=l[e.parents];k(t,e,i)}}_(t=function(t,e){const i=Object.create(null);return t.reduce(((t,r)=>{const c=e(r);return i[c]||(i[c]=!0,t.push(r)),t}),[])}(t,(t=>t.id)))}const $=function(){const t=Object.keys(l).map((function(t){return l[t]}));return t.forEach((function(t){r.l.debug(t.id)})),t.sort(((t,e)=>t.seq-e.seq)),t},x={NORMAL:0,REVERSE:1,HIGHLIGHT:2,MERGE:3,CHERRY_PICK:4},v={parseDirective:function(t,e,i){r.m.parseDirective(this,t,e,i)},getConfig:()=>(0,r.c)().gitGraph,setDirection:function(t){p=t},setOptions:function(t){r.l.debug("options str",t),t=(t=t&&t.trim())||"{}";try{d=JSON.parse(t)}catch(e){r.l.error("error while parsing gitGraph options",e.message)}},getOptions:function(){return d},commit:function(t,e,i,c){r.l.debug("Entering commit:",t,e,i,c),e=r.e.sanitizeText(e,(0,r.c)()),t=r.e.sanitizeText(t,(0,r.c)()),c=r.e.sanitizeText(c,(0,r.c)());const n={id:e||g+"-"+b(),message:t,seq:g++,type:i||x.NORMAL,tag:c||"",parents:null==h?[]:[h.id],branch:y};h=n,l[n.id]=n,u[y]=n.id,r.l.debug("in pushCommit "+n.id)},branch:function(t,e){if(t=r.e.sanitizeText(t,(0,r.c)()),void 0!==u[t]){let e=new Error('Trying to create an existing branch. (Help: Either use a new name if you want create a new branch or try using "checkout '+t+'")');throw e.hash={text:"branch "+t,token:"branch "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"checkout '+t+'"']},e}u[t]=null!=h?h.id:null,m[t]={name:t,order:e?parseInt(e,10):null},f(t),r.l.debug("in createBranch")},merge:function(t,e,i,c){t=r.e.sanitizeText(t,(0,r.c)()),e=r.e.sanitizeText(e,(0,r.c)());const n=l[u[y]],s=l[u[t]];if(y===t){let e=new Error('Incorrect usage of "merge". Cannot merge a branch to itself');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(void 0===n||!n){let e=new Error('Incorrect usage of "merge". Current branch ('+y+")has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["commit"]},e}if(void 0===u[t]){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") does not exist");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch "+t]},e}if(void 0===s||!s){let e=new Error('Incorrect usage of "merge". Branch to be merged ('+t+") has no commits");throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:['"commit"']},e}if(n===s){let e=new Error('Incorrect usage of "merge". Both branches have same head');throw e.hash={text:"merge "+t,token:"merge "+t,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["branch abc"]},e}if(e&&void 0!==l[e]){let r=new Error('Incorrect usage of "merge". Commit with id:'+e+" already exists, use different custom Id");throw r.hash={text:"merge "+t+e+i+c,token:"merge "+t+e+i+c,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["merge "+t+" "+e+"_UNIQUE "+i+" "+c]},r}const a={id:e||g+"-"+b(),message:"merged branch "+t+" into "+y,seq:g++,parents:[null==h?null:h.id,u[t]],branch:y,type:x.MERGE,customType:i,customId:!!e,tag:c||""};h=a,l[a.id]=a,u[y]=a.id,r.l.debug(u),r.l.debug("in mergeBranch")},cherryPick:function(t,e,i){if(r.l.debug("Entering cherryPick:",t,e,i),t=r.e.sanitizeText(t,(0,r.c)()),e=r.e.sanitizeText(e,(0,r.c)()),i=r.e.sanitizeText(i,(0,r.c)()),!t||void 0===l[t]){let i=new Error('Incorrect usage of "cherryPick". Source commit id should exist and provided');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}let c=l[t],n=c.branch;if(c.type===x.MERGE){let i=new Error('Incorrect usage of "cherryPick". Source commit should not be a merge commit');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}if(!e||void 0===l[e]){if(n===y){let i=new Error('Incorrect usage of "cherryPick". Source commit is already on current branch');throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}const s=l[u[y]];if(void 0===s||!s){let i=new Error('Incorrect usage of "cherry-pick". Current branch ('+y+")has no commits");throw i.hash={text:"cherryPick "+t+" "+e,token:"cherryPick "+t+" "+e,line:"1",loc:{first_line:1,last_line:1,first_column:1,last_column:1},expected:["cherry-pick abc"]},i}const a={id:g+"-"+b(),message:"cherry-picked "+c+" into "+y,seq:g++,parents:[null==h?null:h.id,c.id],branch:y,type:x.CHERRY_PICK,tag:i??"cherry-pick:"+c.id};h=a,l[a.id]=a,u[y]=a.id,r.l.debug(u),r.l.debug("in cherryPick")}},checkout:f,prettyPrint:function(){r.l.debug(l);_([$()[0]])},clear:function(){l={},h=null;let t=(0,r.c)().gitGraph.mainBranchName,e=(0,r.c)().gitGraph.mainBranchOrder;u={},u[t]=null,m={},m[t]={name:t,order:e},y=t,g=0,(0,r.v)()},getBranchesAsObjArray:function(){return Object.values(m).map(((t,e)=>null!==t.order?t:{...t,order:parseFloat(`0.${e}`,10)})).sort(((t,e)=>t.order-e.order)).map((({name:t})=>({name:t})))},getBranches:function(){return u},getCommits:function(){return l},getCommitsArray:$,getCurrentBranch:function(){return y},getDirection:function(){return p},getHead:function(){return h},setAccTitle:r.s,getAccTitle:r.g,getAccDescription:r.a,setAccDescription:r.b,setDiagramTitle:r.r,getDiagramTitle:r.t,commitType:x};let w={};const E=0,T=1,L=2,M=3,I=4;let A={},O={},R=[],C=0;const S=(t,e,i)=>{const c=(0,r.z)().gitGraph,n=t.append("g").attr("class","commit-bullets"),s=t.append("g").attr("class","commit-labels");let a=0;Object.keys(e).sort(((t,i)=>e[t].seq-e[i].seq)).forEach((t=>{const r=e[t],o=A[r.branch].pos,l=a+10;if(i){let t,e=void 0!==r.customType&&""!==r.customType?r.customType:r.type;switch(e){case E:t="commit-normal";break;case T:t="commit-reverse";break;case L:t="commit-highlight";break;case M:t="commit-merge";break;case I:t="commit-cherry-pick";break;default:t="commit-normal"}if(e===L){const e=n.append("rect");e.attr("x",l-10),e.attr("y",o-10),e.attr("height",20),e.attr("width",20),e.attr("class",`commit ${r.id} commit-highlight${A[r.branch].index%8} ${t}-outer`),n.append("rect").attr("x",l-6).attr("y",o-6).attr("height",12).attr("width",12).attr("class",`commit ${r.id} commit${A[r.branch].index%8} ${t}-inner`)}else if(e===I)n.append("circle").attr("cx",l).attr("cy",o).attr("r",10).attr("class",`commit ${r.id} ${t}`),n.append("circle").attr("cx",l-3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${t}`),n.append("circle").attr("cx",l+3).attr("cy",o+2).attr("r",2.75).attr("fill","#fff").attr("class",`commit ${r.id} ${t}`),n.append("line").attr("x1",l+3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${t}`),n.append("line").attr("x1",l-3).attr("y1",o+1).attr("x2",l).attr("y2",o-5).attr("stroke","#fff").attr("class",`commit ${r.id} ${t}`);else{const i=n.append("circle");if(i.attr("cx",l),i.attr("cy",o),i.attr("r",r.type===M?9:10),i.attr("class",`commit ${r.id} commit${A[r.branch].index%8}`),e===M){const e=n.append("circle");e.attr("cx",l),e.attr("cy",o),e.attr("r",6),e.attr("class",`commit ${t} ${r.id} commit${A[r.branch].index%8}`)}if(e===T){n.append("path").attr("d",`M ${l-5},${o-5}L${l+5},${o+5}M${l-5},${o+5}L${l+5},${o-5}`).attr("class",`commit ${t} ${r.id} commit${A[r.branch].index%8}`)}}}if(O[r.id]={x:a+10,y:o},i){const t=4,e=2;if(r.type!==I&&(r.customId&&r.type===M||r.type!==M)&&c.showCommitLabel){const t=s.append("g"),i=t.insert("rect").attr("class","commit-label-bkg"),n=t.append("text").attr("x",a).attr("y",o+25).attr("class","commit-label").text(r.id);let l=n.node().getBBox();if(i.attr("x",a+10-l.width/2-e).attr("y",o+13.5).attr("width",l.width+2*e).attr("height",l.height+2*e),n.attr("x",a+10-l.width/2),c.rotateCommitLabel){let e=-7.5-(l.width+10)/25*9.5,i=10+l.width/25*8.5;t.attr("transform","translate("+e+", "+i+") rotate(-45, "+a+", "+o+")")}}if(r.tag){const i=s.insert("polygon"),c=s.append("circle"),n=s.append("text").attr("y",o-16).attr("class","tag-label").text(r.tag);let l=n.node().getBBox();n.attr("x",a+10-l.width/2);const h=l.height/2,m=o-19.2;i.attr("class","tag-label-bkg").attr("points",`\n          ${a-l.width/2-t/2},${m+e}\n          ${a-l.width/2-t/2},${m-e}\n          ${a+10-l.width/2-t},${m-h-e}\n          ${a+10+l.width/2+t},${m-h-e}\n          ${a+10+l.width/2+t},${m+h+e}\n          ${a+10-l.width/2-t},${m+h+e}`),c.attr("cx",a-l.width/2+t/2).attr("cy",m).attr("r",1.5).attr("class","tag-hole")}}a+=50,a>C&&(C=a)}))},P=(t,e,i=0)=>{const r=t+Math.abs(t-e)/2;if(i>5)return r;if(R.every((t=>Math.abs(t-r)>=10)))return R.push(r),r;const c=Math.abs(t-e);return P(t,e-c/5,i+1)},N=(t,e,i,r)=>{const c=O[e.id],n=O[i.id],s=((t,e,i)=>Object.keys(i).filter((r=>i[r].branch===e.branch&&i[r].seq>t.seq&&i[r].seq<e.seq)).length>0)(e,i,r);let a,o="",l="",h=0,m=0,u=A[i.branch].index;if(s){o="A 10 10, 0, 0, 0,",l="A 10 10, 0, 0, 1,",h=10,m=10,u=A[i.branch].index;const t=c.y<n.y?P(c.y,n.y):P(n.y,c.y);a=c.y<n.y?`M ${c.x} ${c.y} L ${c.x} ${t-h} ${o} ${c.x+m} ${t} L ${n.x-h} ${t} ${l} ${n.x} ${t+m} L ${n.x} ${n.y}`:`M ${c.x} ${c.y} L ${c.x} ${t+h} ${l} ${c.x+m} ${t} L ${n.x-h} ${t} ${o} ${n.x} ${t-m} L ${n.x} ${n.y}`}else c.y<n.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=A[i.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${n.y-h} ${o} ${c.x+m} ${n.y} L ${n.x} ${n.y}`),c.y>n.y&&(o="A 20 20, 0, 0, 0,",h=20,m=20,u=A[e.branch].index,a=`M ${c.x} ${c.y} L ${n.x-h} ${c.y} ${o} ${n.x} ${c.y-m} L ${n.x} ${n.y}`),c.y===n.y&&(u=A[e.branch].index,a=`M ${c.x} ${c.y} L ${c.x} ${n.y-h} ${o} ${c.x+m} ${n.y} L ${n.x} ${n.y}`);t.append("path").attr("d",a).attr("class","arrow arrow"+u%8)},G=(t,e)=>{const i=(0,r.z)().gitGraph,c=t.append("g");e.forEach(((t,e)=>{const r=e%8,n=A[t.name].pos,s=c.append("line");s.attr("x1",0),s.attr("y1",n),s.attr("x2",C),s.attr("y2",n),s.attr("class","branch branch"+r),R.push(n);const a=(t=>{const e=document.createElementNS("http://www.w3.org/2000/svg","text");let i=[];i="string"==typeof t?t.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(t)?t:[];for(const r of i){const t=document.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","0"),t.setAttribute("class","row"),t.textContent=r.trim(),e.appendChild(t)}return e})(t.name),o=c.insert("rect"),l=c.insert("g").attr("class","branchLabel").insert("g").attr("class","label branch-label"+r);l.node().appendChild(a);let h=a.getBBox();o.attr("class","branchLabelBkg label"+r).attr("rx",4).attr("ry",4).attr("x",-h.width-4-(!0===i.rotateCommitLabel?30:0)).attr("y",-h.height/2+8).attr("width",h.width+18).attr("height",h.height+4),l.attr("transform","translate("+(-h.width-14-(!0===i.rotateCommitLabel?30:0))+", "+(n-h.height/2-1)+")"),o.attr("transform","translate(-19, "+(n-h.height/2)+")")}))},D={parser:s,db:v,renderer:{draw:function(t,e,i,n){A={},O={},w={},C=0,R=[];const s=(0,r.z)(),a=s.gitGraph;r.l.debug("in gitgraph renderer",t+"\n","id:",e,i),w=n.db.getCommits();const o=n.db.getBranchesAsObjArray();let l=0;o.forEach(((t,e)=>{A[t.name]={pos:l,index:e},l+=50+(a.rotateCommitLabel?40:0)}));const h=(0,c.Ys)(`[id="${e}"]`);S(h,w,!1),a.showBranches&&G(h,o),((t,e)=>{const i=t.append("g").attr("class","commit-arrows");Object.keys(e).forEach((t=>{const r=e[t];r.parents&&r.parents.length>0&&r.parents.forEach((t=>{N(i,e[t],r,e)}))}))})(h,w),S(h,w,!0),r.u.insertTitle(h,"gitTitleText",a.titleTopMargin,n.db.getDiagramTitle()),(0,r.A)(void 0,h,a.diagramPadding,a.useMaxWidth??s.useMaxWidth)}},styles:t=>`\n  .commit-id,\n  .commit-msg,\n  .branch-label {\n    fill: lightgrey;\n    color: lightgrey;\n    font-family: 'trebuchet ms', verdana, arial, sans-serif;\n    font-family: var(--mermaid-font-family);\n  }\n  ${[0,1,2,3,4,5,6,7].map((e=>`\n        .branch-label${e} { fill: ${t["gitBranchLabel"+e]}; }\n        .commit${e} { stroke: ${t["git"+e]}; fill: ${t["git"+e]}; }\n        .commit-highlight${e} { stroke: ${t["gitInv"+e]}; fill: ${t["gitInv"+e]}; }\n        .label${e}  { fill: ${t["git"+e]}; }\n        .arrow${e} { stroke: ${t["git"+e]}; }\n        `)).join("\n")}\n\n  .branch {\n    stroke-width: 1;\n    stroke: ${t.lineColor};\n    stroke-dasharray: 2;\n  }\n  .commit-label { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelColor};}\n  .commit-label-bkg { font-size: ${t.commitLabelFontSize}; fill: ${t.commitLabelBackground}; opacity: 0.5; }\n  .tag-label { font-size: ${t.tagLabelFontSize}; fill: ${t.tagLabelColor};}\n  .tag-label-bkg { fill: ${t.tagLabelBackground}; stroke: ${t.tagLabelBorder}; }\n  .tag-hole { fill: ${t.textColor}; }\n\n  .commit-merge {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n  .commit-reverse {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n    stroke-width: 3;\n  }\n  .commit-highlight-outer {\n  }\n  .commit-highlight-inner {\n    stroke: ${t.primaryColor};\n    fill: ${t.primaryColor};\n  }\n\n  .arrow { stroke-width: 8; stroke-linecap: round; fill: none}\n  .gitTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }\n`}}}]);