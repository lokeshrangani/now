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

      $("#timeZoneData").append(
        "<div class='col-md-4 text-center divBorder'><p>" +
        element.split("/")[0] + "/" + element.split("/")[1].replace("_", " ") +
        "</p><p>" +
        time.join(" ") +
        " - " +
        date +
        "</p></div>"
      );
    }
  });
};