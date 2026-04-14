// Condicion: Mostrar el botón solo cuando el usuario ha bajado 300px
window.addEventListener("scroll", function () {
  var btn = document.getElementById("btn-top")
  if (window.scrollY > 300) {
    btn.classList.add("visible")
  } else {
    btn.classList.remove("visible")
  }
})

// Al hacer clic debe subir suavemente al inicio
document.getElementById("btn-top").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" })
})
