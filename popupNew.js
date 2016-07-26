$(window).load(function () {
  // if no cookie
  if ($.cookie('alert') != "true") {
    $("#reModalMask").show();
    $("#botao").click(function () {
      $("#reModalMask").slideUp("slow");
      // set the cookie for 1 hours
      var date = new Date();
      date.setTime(date.getTime() + 1 * 60 * 60 * 1000);
      $.cookie('alert', "true", {
        expires: date
      });
    });
  }
});