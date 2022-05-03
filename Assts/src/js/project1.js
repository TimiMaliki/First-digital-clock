 function digitalClock(){
     var date = new Date();
     var hr  = date.getHours();
     var min = date.getMinutes();
     var sec = date.getSeconds();
     var Period = "a.m";
     if( hr == 0){
        hr = 12;
    }
        if( hr > 12){
          hr = hr - 12;
          Period = "p.m";
        }
       hr = (hr < 10) ? "0" + hr : hr;
       min = (min < 10) ? "0" + min : min;
       sec = (sec < 10) ? "0" + sec : sec ;

     var time = hr + ":" + min + ":" + sec + "" + Period; 
     document.getElementById('Digital_clock').innerText = time;
     document.getElementById('Digital_clock').textContent= time;
  
     setTimeout(digitalClock,1000);
     }
digitalClock();
 