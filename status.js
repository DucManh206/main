//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/karma.zapto.org/25565";

$.getJSON(url, function (r) {
  //data is the JSON string
  if (r.error) {
    $("#rest").html("Server Offline");
    return false;
  }
  var pl = "";
  if (r.players.sample.length > 0) {
    pl = "<br>Owner : Syor ( DucManh )";
  }
  $("#rest").html(
    r.description.replace(/§(.+?)/gi, "") +
      "<br><b>Players Online:</b> " +
      r.players.online +
      pl
  );
  $("#favicon").attr("src", r.favicon);
});
