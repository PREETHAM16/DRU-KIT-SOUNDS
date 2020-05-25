for (var i=0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click",function() {


  var bt= this.innerHTML;
  makesound(bt);
  anim(bt);
});
}
document.addEventListener("keypress",function(event){
  makesound(event.key);
  anim(event.key);
});
function makesound(key){
  switch(key){
    case "w" :
    var audio=new Audio("tom-1.mp3");
        audio.play();
        break;
        case "w" :
    var audio=new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a" :
    var audio=new Audio("tom-2.mp3");
          audio.play();
          break;
          case "s" :
    var audio=new Audio("tom-3.mp3");
          audio.play();
          break;
                    case "d" :
              var audio=new Audio("tom-4.mp3");
                        audio.play();
                        break;
                        case "j" :
                    var audio=new Audio("crash.mp3");
                            audio.play();
                            break;
                            case "k" :
                        var audio=new Audio("kick-bass.mp3");
                                audio.play();
                                break;
                                case "l" :
                            var audio=new Audio("snare.mp3");
                                    audio.play();
                                    break;
                                  }
      }
function anim(ck){
  var actbtn =document.querySelector("."+ck);
  actbtn.classList.add("pressed");
  setTimeout(function(){
    actbtn.classList.remove("pressed");
  },100);
}
