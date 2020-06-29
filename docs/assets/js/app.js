
    function myFunction() {
      var x = document.getElementById("myContenedor-nav");
      if (x.className === "contenedor-nav__menu") {
        x.className += " responsive";
      } else {
        x.className = "contenedor-nav__menu";
      }
    }