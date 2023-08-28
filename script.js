document.getElementById("hitung-button").addEventListener("click", function() {
    var nama = document.getElementById("nama").value;
    var mataKuliah = document.getElementById("mata-kuliah").value;
    var gradeValue = document.getElementById("grade").value;
    var nilai = 0;
  
    switch (gradeValue) {
      case "A":
        nilai = 4.00;
        break;
      case "B":
        nilai = 3.00;
        break;
      case "C":
        nilai = 2.00;
        break;
      case "D":
        nilai = 1.00;
        break;
      case "E":
        nilai = 0;
        break;
    }
  
    var hasil = (nama, mataKuliah, gradeValue, nilai).toFixed(2);
    var hasilRow = `<tr><td>${nama}</td><td>${mataKuliah}</td><td>${gradeValue}</td><td>${hasil}</td></tr>`;
    document.getElementById("hasil-body").innerHTML = hasilRow;
  

    document.getElementById("hasil-table").classList.remove("hidden");
  });
  