function limpiarEstadosExpirados() {
  var hoy = new Date().toISOString().slice(0, 10);
  document.querySelectorAll(".estado[data-hasta]").forEach(function (el) {
    if (hoy > el.getAttribute("data-hasta")) el.remove();
  });
}

document.addEventListener("DOMContentLoaded", limpiarEstadosExpirados);
if (typeof document$ !== "undefined") {
  document$.subscribe(limpiarEstadosExpirados);
}
