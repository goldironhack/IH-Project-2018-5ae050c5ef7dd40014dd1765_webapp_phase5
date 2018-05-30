 window.myname = function(results){
          for (var i = 0; i < results.data.length; i++) {
            var arr =  results.data[i];        
        var strll = arr[9]
        console.log(strll)
           var n1 = strll.substr(7,18)
           var n2 = strll.substr(25,18)
           n2 = n2.replace(")","")        
           var namell =[n1,n2];
            }
          }

      window.mycrime = function(results){
          for (var i = 0; i < results.data.length; i++) {
            var crr1=  results.data[i][31];
            var crr2=  results.data[i][32];      
        function crrCheck(crr){
            var newCrr = [];
          for(var i=0;i<crr.length;i++){
            var temp=crr[i];
            var count=0;
            for(var j=0;j<crr.length;j++){
              if(crr[j]==temp){
                count++;
                arr[j]=-1;
              }
            }
            if(temp != -1){
             var subcrr = [temp,count] 
              newCrr.push(subcrr)
            }
          }
          return newCrr;
        }    
        }
      }
      window.myhouse = function(results){
          for (var i = 0; i < results.data.length; i++) {
            var hrr =  results.data[i];
        var hrr1= hrr[15];
        var hrr2= hrr[25];
        var hrr3= hrr[26];
        var hrr4= hrr[31]+hrr[32]+hrr[33];
        var hrr5= hrr[34]+hrr[35];
        var hrr6= hrr[36];
        }
       }

      function initMap() {
        var uluru = {lat: 40.7291, lng: -73.9965};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 20,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }