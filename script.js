function bukaSurat() {
    var passwordBenar = "23"; // GANTI PASSWORD DI SINI
    var input = document.getElementById("password").value;
    var pesan = document.getElementById("pesan");

    if (input === passwordBenar) {
        document.getElementById("login").style.display = "none";
        document.getElementById("isiSurat").style.display = "block";
    } else {
        pesan.innerHTML = "Password salah 🤍";
    }
}
