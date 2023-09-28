function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("input_box");
  filter = input.value.toUpperCase();
  table = document.getElementById("store_table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
          } else {
              tr[i].style.display = "none";
          }
      }
  }
}

// 監聽輸入框的input事件
var inputBox = document.getElementById("input_box");
inputBox.addEventListener("input", myFunction);



function show_menu_items(){
    document.getElementById("show_menu_overlay").style.display="block";
}

function off_menu_overlay(){
    document.getElementById("show_menu_overlay").style.display="none";
}  