(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(7),r=a.n(o),s=a(1),c=a(2),l=a(4),m=a(3),u=a(5),h=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"uk-card uk-card-hover uk-card-body uk-margin-right uk-margin-left uk-margin-bottom uk-animation-scale-up ",onClick:function(t){return e.props.onClick(e.props.master,t,e.props.id)}},i.a.createElement("img",{src:this.props.src,width:"100px",height:"100px",alt:this.props.name,className:"uk-img "}))}}]),t}(n.Component),p=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"uk-child-width-1-5@s uk-grid-match uk-grid uk-grid-large uk-grid "},this.props.children)}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"uk-card uk-card-hover uk-card-body uk-margin-right uk-margin-left uk-margin-bottom "},i.a.createElement("h3",{className:"uk-card-title"},"You've clicked ",this.props.operator," poisons without dying!"),i.a.createElement("h5",null,"High Score: ",1===this.props.game?null:this.props.highScore))}}]),t}(n.Component),d=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"uk-padding-large uk-text-center uk-background-muted ",style:{backgroundColor:"red"}},i.a.createElement("h1",null,"GAME OVER!"),i.a.createElement("h3",null,"You finished the game with ",this.props.total," poisons picked. "),i.a.createElement("h3",null,"The current high score is"," ",this.props.total>this.props.highScore?this.props.total:this.props.highScore,"."," "),i.a.createElement("button",{className:"uk-button uk-button-default",onClick:function(t){return e.props.onClick(e.props)}},"Start Over"))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).shuffleDeck=function(e,t,n){t.preventDefault();var i=e.find(function(e){return e.id===n});if(i.clicked)a.setState({gameOver:!a.state.gameOver});else{i.clicked=!i.clicked,a.setState({total:a.state.total+1,highScore:a.state.total+1>a.state.highScore?a.state.total+1:a.state.highScore});for(var o,r,s=e.length;0!==s;)r=Math.floor(Math.random()*s),o=e[s-=1],e[s]=e[r],e[r]=o;a.setState({panels:e})}},a.handleGameOver=function(e){var t=[];e.panels.forEach(function(e){e.clicked=!1,t.push(e)}),a.setState({highScore:e.total>e.highScore?e.total:e.highScore,total:0,game:a.state.game+1,gameOver:!1,panels:t})},a.state={total:0,game:1,highScore:null,gameOver:!1,panels:[{id:0,name:"poison1",clicked:!1,image:"images/poison1.svg"},{id:1,name:"poison2",clicked:!1,image:"images/poison2.svg"},{id:2,name:"poison3",clicked:!1,image:"images/poison3.svg"},{id:3,name:"poison4",clicked:!1,image:"images/poison4.svg"},{id:4,name:"poison5",clicked:!1,image:"images/poison5.svg"},{id:5,name:"poison6",clicked:!1,image:"images/poison6.svg"},{id:6,name:"poison7",clicked:!1,image:"images/poison7.svg"},{id:7,name:"poison8",clicked:!1,image:"images/poison8.svg"},{id:8,name:"poison9",clicked:!1,image:"images/poison9.svg"},{id:9,name:"poison10",clicked:!1,image:"images/poison10.svg"},{id:10,name:"poison11",clicked:!1,image:"images/poison11.svg"},{id:11,name:"poison12",clicked:!1,image:"images/poison12.svg"}]},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.panels.map(function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{key:t.id,master:e.state.panels,clicked:t.clicked,id:t.id,name:t.name,onClick:e.shuffleDeck,src:t.image}))}),a=i.a.createElement(i.a.Fragment,null,i.a.createElement(d,Object.assign({},this.state,{onClick:this.handleGameOver})));return i.a.createElement("div",{className:"uk-container"},i.a.createElement("div",{className:"uk-section uk-section-secondary uk-light"},i.a.createElement("h1",{className:" uk-text-bold uk-text-center uk-text-4.0rem"},"Pick Your Poison"),i.a.createElement("h3",{className:"uk-text-center"},"But don't pick the same one twice or"," ",i.a.createElement("span",{className:" uk-text-uppercase uk-text-danger"},"you're dead!")," ")),i.a.createElement(g,{operator:this.state.total,game:this.state.game,highScore:this.state.highScore}),this.state.gameOver?i.a.createElement(i.a.Fragment,null,a):i.a.createElement(p,null,t))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(14)}},[[8,2,1]]]);
//# sourceMappingURL=main.8f279e8d.chunk.js.map