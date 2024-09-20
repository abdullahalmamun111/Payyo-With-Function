

//   <button id="nonExistingButton">Click Me</button> 
  <script>
    document.getElementById("nonExistentButton").addEventListener("click", function() {
      alert("Clicked")
    });
  </script>