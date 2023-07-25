function hienForm() {
    var form = document.getElementById("hienForm");
    if (form.style.display === "none") {
      form.style.display = "block";
    } else if(form.style.display === "block") {
      form.style.display = "none";
    }
     
  }
function logout(){
    if (confirm("Bạn có chắc chắn muốn đăng xuất ?")) {
      sessionStorage.clear();
      window.location.href ="/frontend/manager_pharmacy/dangnhap.html";
  } else {
    location.reload();
  }
  }