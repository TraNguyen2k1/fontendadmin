function hienThiTatCa() {
  // const params = {
  //   maSKU: "aaaa",
  //   tenNhom: "dau hong",
  //   tenNhaSanXuat: "Công ty Cổ phần Dược Hậu Giang",
  //   tenDonVi: "Chai",
  //   tenBietDuoc: "aaaaa",
  //   soDangKy: "324565",
  //   hoatChat: "sssss",
  //   donGia: 20000,
  //   giaBan: 20000,
  //   hanSuDung: 12,
  // };

  // const queryString = new URLSearchParams(params).toString();

  // fetch(`https://backend-flame-nine.vercel.app/qlnt/thuoc/?${queryString}`)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     const tableBody = document.getElementById("table-body");
  //     tableBody.innerHTML = "";

  //     for (let i = 0; i < data.length; i++) {
  //       const row = document.createElement("tr");

  //       const maSKUCell = document.createElement("td");
  //       maSKUCell.innerText = data[i].maSKU;
  //       row.appendChild(maSKUCell);

  //       const maNhomCell = document.createElement("td");
  //       maNhomCell.innerText = data[i].tenNhom;
  //       row.appendChild(maNhomCell);

  //       const maNhaSanXuatCell = document.createElement("td");
  //       maNhaSanXuatCell.innerText = data[i].tenNhaSanXuat;
  //       row.appendChild(maNhaSanXuatCell);

  //       const maDonViCell = document.createElement("td");
  //       maDonViCell.innerText = data[i].tenDonVi;
  //       row.appendChild(maDonViCell);

  //       const tenBietDuocCell = document.createElement("td");
  //       tenBietDuocCell.innerText = data[i].tenBietDuoc;
  //       row.appendChild(tenBietDuocCell);

  //       const soDangKyCell = document.createElement("td");
  //       soDangKyCell.innerText = data[i].soDangKy;
  //       row.appendChild(soDangKyCell);

  //       const hoatChatCell = document.createElement("td");
  //       hoatChatCell.innerText = data[i].hoatChat;
  //       row.appendChild(hoatChatCell);

  //       const donGiaCell = document.createElement("td");
  //       donGiaCell.innerText = data[i].donGia;
  //       row.appendChild(donGiaCell);

  //       const giaBanCell = document.createElement("td");
  //       giaBanCell.innerText = data[i].giaBan;
  //       row.appendChild(giaBanCell);

  //       const hanSuDungCell = document.createElement("td");
  //       hanSuDungCell.innerText = data[i].hanSuDung;
  //       row.appendChild(hanSuDungCell);
  //       tableBody.appendChild(row);
  //       if ($.fn.DataTable.isDataTable("#example")) {
  //         // Nếu đã khởi tạo rồi thì hủy DataTable
  //         $("#example").DataTable().destroy();
  //       } else {


  //         $("#example").DataTable().destroy();
  //         // Khởi tạo DataTables sau khi Ajax hoàn tất
  //         $("#example").DataTable({
         
  //           select: true,
  //           editable: true,
  //           dom: "Bfrtip",
  //           buttons: [
  //             {
  //               extend: "copyHtml5",
  //               exportOptions: {
  //                 columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //               },
  //             },
  //             {
  //               extend: "csvHtml5",
  //               exportOptions: {
  //                 columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //               },
  //             },
  //             {
  //               extend: "excelHtml5",
  //               exportOptions: {
  //                 columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //               },
  //             },
  //             {
  //               extend: "pdfHtml5",
  //               exportOptions: {
  //                 columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //               },
  //             },
  //             {
  //               extend: "print",
  //               exportOptions: {
  //                 columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  //               },
  //             },
  //           ],
  //           data: data,
  //           columns: [
  //             { data: "maSKU" },
  //             { data: "tenNhom" },
  //             { data: "tenNhaSanXuat" },
  //             { data: "tenDonVi" },
  //             { data: "tenBietDuoc" },
  //             { data: "soDangKy" },
  //             { data: "hoatChat" },
  //             { data: "donGia" },
  //             { data: "giaBan" },
  //             { data: "hanSuDung" },
  //           ],
  //           columnDefs: [
  //             {
  //               targets: "_all",
  //               defaultContent: "-",
  //             },
  //           ],
  //           language: {
  //             emptyTable: "Không có dữ liệu trong danh sách",
  //             zeroRecords: "Không tìm thấy dữ liệu",
  //             info: "Hiển thị _START_ đến _END_ của _TOTAL_ dòng",
  //             infoEmpty: "Hiển thị 0 đến 0 của 0 bản ghi",
  //             infoFiltered: "(lọc từ _MAX_ tổng số bản ghi)",
  //             search: "",
  //             lengthMenu: "Hiển thị _MENU_ dòng",
  //             paginate: {
  //               first: "Đầu tiên",
  //               last: "Cuối cùng",
  //               next: "Tiếp theo",
  //               previous: "Trước đó",
  //             },
  //           },
  //           // ẩn đi tùy chọn "Hiển thị x dòng"
  //           lengthMenu: [8],
  //           pageLength: 8,
      
            
  //         });
  //       }
  //     }


  //   })
  //   .catch((error) => console.log(error));


    $(document).ready(function () {
      $("#example").DataTable({
        ajax: {
          url: "https://backend-flame-nine.vercel.app/qlnt/thuoc/",
          dataSrc: "",
        },
        columns: [
          { data: "maSKU" },
              { data: "tenNhom" },
              { data: "tenNhaSanXuat" },
              { data: "tenDonVi" },
              { data: "tenBietDuoc" },
              { data: "soDangKy" },
              { data: "hoatChat" },
              { data: "donGia" },
              { data: "giaBan" },
              { data: "hanSuDung" },
        ],
        dom: "Bfrtip",
        style: {
          width: "100%",
        },
        buttons: [
          {
            extend: "copyHtml5",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          },
          {
            extend: "excelHtml5",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          },
          {
            extend: "pdfHtml5",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          },
          {
            extend: "print",
            exportOptions: {
              columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          },
        ],
        "language": {
          "emptyTable": "Không có dữ liệu trong danh sách",
          "zeroRecords": "Không tìm thấy dữ liệu",
          "info": "Hiển thị _START_ đến _END_ của _TOTAL_ dòng",
          "infoEmpty": "Hiển thị 0 đến 0 của 0 bản ghi",
          "infoFiltered": "(lọc từ _MAX_ tổng số bản ghi)",
          "search": "",
          "lengthMenu": "Hiển thị _MENU_ dòng",
          "paginate": {
            "first": "Đầu tiên",
            "last": "Cuối cùng",
            "next": "Tiếp theo",
            "previous": "Trước đó"
          }
        },
        "lengthMenu": [8],
        "pageLength": 10, // ẩn đi tùy chọn "Hiển thị x dòng"
      });
    });
}

function timTenThuoc() {
  // Lấy giá trị từ thẻ input
  const value = document.getElementById("tim").value;
  console.log(value);
  // Gọi API để lấy dữ liệu
  fetch("https://backend-flame-nine.vercel.app/qlnt/thuoc/findThuoc", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tenBietDuoc: value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("tabTim");
      // Xóa toàn bộ nội dung trong thẻ tbody
      tableBody.innerHTML = "";
      // Tạo các dòng mới trong bảng
      console.log(data);
      if (data.length == 0) {
        var row = document.createElement("tr");
        const td = document.createElement("td");
        td.innerText = "KHÔNG TÌM THẤY";
        td.setAttribute("colspan", "10");
        td.style.fontSize = "22px";
        td.style.color = "red";
        td.style.textAlign = "center";
        row.appendChild(td);
        tableBody.appendChild(row);
      } else {
        for (let i = 0; i < data.length; i++) {
          console.log(data.length);
          var row = document.createElement("tr");

          const maSKUCell = document.createElement("td");
          maSKUCell.innerText = data[i].maSKU;
          row.appendChild(maSKUCell);

          const maNhomCell = document.createElement("td");
          maNhomCell.innerText = data[i].maNhom;
          row.appendChild(maNhomCell);

          const maNhaSanXuatCell = document.createElement("td");
          maNhaSanXuatCell.innerText = data[i].maNhaSanXuat;
          row.appendChild(maNhaSanXuatCell);

          const maDonViCell = document.createElement("td");
          maDonViCell.innerText = data[i].maDonVi;
          row.appendChild(maDonViCell);

          const hoatChatCell = document.createElement("td");
          hoatChatCell.innerText = data[i].hoatChat;
          row.appendChild(hoatChatCell);

          const tenBietDuocCell = document.createElement("td");
          tenBietDuocCell.innerText = data[i].tenBietDuoc;
          row.appendChild(tenBietDuocCell);

          const soDangKyCell = document.createElement("td");
          soDangKyCell.innerText = data[i].soDangKy;
          row.appendChild(soDangKyCell);

          const donGiaCell = document.createElement("td");
          donGiaCell.innerText = data[i].donGia;
          row.appendChild(donGiaCell);

          const giaBanCell = document.createElement("td");
          giaBanCell.innerText = data[i].giaBan;
          row.appendChild(giaBanCell);

          const hanSuDungCell = document.createElement("td");
          hanSuDungCell.innerText = data[i].hanSuDung;
          row.appendChild(hanSuDungCell);

          tableBody.appendChild(row);
        }
      }
    })
    .catch((error) => {
      // Xử lý lỗi nếu có
      console.log(error);
    });
}


// Lấy modal
var modal = document.getElementById("myModal");

// Lấy nút đóng modal
var span = document.getElementsByClassName("close")[0];

// Mở modal khi nhấn vào button
function openModal() {
  modal.style.display = "block";
}
if (span) {
  // Đóng modal khi nhấn vào nút đóng
span.onclick = function () {
  modal.style.display = "none";
};
}

// Đóng modal khi nhấn vào bất kỳ đâu bên ngoài modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function showContent(id) {
  // Lấy các phần tử nội dung và menu
  var content = document.getElementsByClassName("content");
  var menu = document
    .getElementsByClassName("menu")[0]
    .getElementsByTagName("a");

  // Ẩn tất cả các phần tử nội dung
  for (var i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }

  // Hiển thị phần tử nội dung tương ứng với mục được chọn
  document.getElementById("content" + id).style.display = "block";

  // Đổi màu sắc của mục được chọn
  for (var i = 0; i < menu.length; i++) {
    menu[i].classList.remove("active");
  }
  menu[id - 1].classList.add("active");
}

const tableContainer = document.querySelector(".table-container");
const toggleButton = document.querySelector(".toggle-button");
if(toggleButton){
  toggleButton.addEventListener("click", function () {
    tableContainer.classList.toggle("show");
  });
}


