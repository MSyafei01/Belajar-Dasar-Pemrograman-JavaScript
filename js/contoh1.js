// script.js
document.addEventListener("DOMContentLoaded", function () {
  const tanggal = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  document.getElementById("tanggal").textContent =
    "Tanggal hari ini: " + tanggal.toLocaleDateString("id-ID", options);
});
