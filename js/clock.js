window.listTimeZone = function () {
  var tz = moment.tz.guess();
  var all = moment.tz.names();
  all.forEach((element) => {
    if (
      [
        tz,
        "Europe/London",
        "Europe/Moscow",
        "Europe/Warsaw",
        "Europe/Madrid",
        "Europe/Lisbon",
        "America/New_York",
        "America/Vancouver",
        "America/Toronto",
        "America/Ojinaga",
        "Asia/Tokyo",
        "Asia/Singapore",
        "Australia/Perth",
        "Australia/Adelaide",
        "Australia/Sydney",
        "Pacific/Auckland",
      ].includes(element)
    ) {
      var dateTime = moment().tz(element).format("DD-MMMM hh:mm A");
      const [date, ...time] = dateTime.split(" ");
      $("#example tbody").append(
        "<tr><td><h3>" +
          element.split("/")[1].replace("_", " ") +
          "<h3></td><td><h2>" +
          time.join(" ") +
          "</h2><h4>" +
          date +
          "</h4></td></tr>"
      );
    }
  });
};

window.convertTableToArrayObject = function () {
  var tableData = [];
  var table = $("#example").DataTable();
  var data = table.rows().data();
  for (var i = 0; i < data.length; i++) {
    tableData.push(data[i]);
  }

  /* copy text */
  navigator.clipboard.writeText(JSON.stringify(tableData));

  var x = document.getElementById("message");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);

  return;
};
