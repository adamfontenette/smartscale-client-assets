(function(){
var SRC='https://cdn.jsdelivr.net/gh/adamfontenette/smartscale-client-assets@main/jack/home.html';
function inject(html){
 try{
  var wrap=document.createElement('div');wrap.innerHTML=html;
  var frag=document.createDocumentFragment();while(wrap.firstChild){frag.appendChild(wrap.firstChild);}
  Array.prototype.forEach.call(document.body.children,function(el){if(!/^(SCRIPT|STYLE|LINK|NOSCRIPT)$/.test(el.tagName)){el.style.setProperty('display','none','important');}});
  document.body.insertBefore(frag,document.body.firstChild);
  document.body.style.setProperty('background','#060D1C','important');document.body.style.margin='0';
  document.documentElement.style.setProperty('background','#060D1C','important');
  document.title='The Jack of Insurance | Lionel Jack — Protection You Understand. Retirement You Keep.';
 }catch(e){console.error('jack-home inject',e);}
}
function run(){
 document.documentElement.style.setProperty('background','#060D1C','important');
 fetch(SRC+'?v='+Math.floor(Date.now()/3600000),{cache:'no-store'}).then(function(r){return r.text();}).then(inject).catch(function(e){console.error('jack-home fetch',e);});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',run);}else{run();}
})();
