function openNav() {
    document.getElementById("panel").style.width = "250px";
    setTimeout(function(){ 
    document.getElementById("closebtn").style.display="block";
    }, 300);
    document.getElementById("panel").style.transition="0.5s";
  }
  
  function closeNav() {
    document.getElementById("panel").style.width = "0";
    document.getElementById("closebtn").style.display="none";
    document.getElementById("panel").style.transition="0.5s";
  }