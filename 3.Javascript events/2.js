<script type="text/javascript">
  function validateForm() {
    var a = document.forms["Form"]["answer_a"].value;
    var b = document.forms["Form"]["answer_b"].value;
    var c = document.forms["Form"]["answer_c"].value;
    var d = document.forms["Form"]["answer_d"].value;
    if (a == null || a == "", b == null || b == "", c == null || c == "", d == null || d == "") {
      alert("Please Fill All Required Field");
      return false;
    }
  }
</script>

<form method="post" name="Form" onsubmit="return validateForm()" action="">
  <textarea cols="30" rows="2" name="answer_a" id="a"></textarea>
  <textarea cols="30" rows="2" name="answer_b" id="b"></textarea>
  <textarea cols="30" rows="2" name="answer_c" id="c"></textarea>
  <textarea cols="30" rows="2" name="answer_d" id="d"></textarea>
</form>