<!DOCTYPE html>
<html>
<body>

<h1>The Element Object</h1>
<h2>The addEventListener() Method</h2>

<p>Attach a click event to a button:</p>

<button id="myBtn">Date</button>
<button id="myBtn1">time</button>

<p id="demo"></p>

<script>
const element = document.getElementById("myBtn");
element.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World";
});
</script>

</body>
</html>