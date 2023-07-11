export function formatDate(date) {
  var fecha = new Date(date);
  var dia = ("0" + fecha.getDate()).slice(-2);
  var mes = fecha.toLocaleString("default", { month: "short" });
  return `${dia} ${mes.toLowerCase()}`;
}

export function formatTime(date) {
  var fecha = new Date(date);

  var hora = ("0" + fecha.getHours()).slice(-2);
  var minutos = ("0" + fecha.getMinutes()).slice(-2);

  return `${hora}:${minutos}`;
}
