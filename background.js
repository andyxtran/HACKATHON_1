let diva = document.querySelectorAll("#items");
let divb = document.querySelectorAll("#contents");
let divc = document.querySelectorAll("#guide-content");
let divd = document.querySelectorAll(".circle-clipper left style-scope paper-spinner")
let dive = document.querySelectorAll(".circle-clipper right style-scope paper-spinner")
let divf = document.querySelectorAll("#click-target")
let divg = document.querySelectorAll("#masthead-ad")
let divh = document.querySelectorAll("#secondary") 
let divi = document.querySelectorAll("#secondary-inner")
let divj = document.querySelectorAll("#dismissable")
let divk = document.querySelectorAll("#player-ads")
let divl = document.querySelectorAll("#primary")
let divm = document.querySelectorAll("#related", "style=display: null")
let divn = document.querySelectorAll("#info-contents")
let divo = document.querySelectorAll("#google_image_div")
let divp = document.querySelectorAll("#continuations")
let divq = document.querySelectorAll("script") 
let divr = document.querySelectorAll("#button") 

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for(var i = this.length - 1; i >= 0; i--) {
      if(this[i] && this[i].parentElement) {
          this[i].parentElement.removeChild(this[i]);
      }
  }
}

diva.remove();
divb.remove();
divc.remove();
divd.remove();
dive.remove();
divf.remove();
divg.remove();
divh.remove();
divi.remove();
divj.remove();
divk.remove();
divl.remove();
divm.remove();
divn.remove();
divo.remove();
divp.remove();
divq.remove();
divr.remove();

document.querySelectorAll('#container')[0].setAttribute("style", "height: 80em");
document.querySelectorAll('#search-input')[0].setAttribute("style", "line-height: 5em");
document.querySelectorAll('#logo-icon-container')[0].setAttribute("style", "position: absolute; top: 30%; right: 43%; width: 250px; height: 100px");

let search = document.querySelectorAll('#search-icon-legacy');
for (let i = 0; i < search.length; i++) {
  search[i].addEventListener('click', function() {
  document.querySelectorAll('#container')[0].setAttribute("style", "height: 56px");
  document.querySelectorAll('#search-input')[0].setAttribute("style", "line-height: 3em");
  document.querySelectorAll('#logo-icon-container')[0].setAttribute("style", "position: relative; top: 0%; right: 0%; width:80px; height: 24px");
  });
}