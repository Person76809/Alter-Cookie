javascript:(function() {
  var cookies = document.cookie.split("; ");
  for (var c = 0; c < cookies.length; c++) {
    var cookieName = cookies[c].split("=")[0];
    var cookieValue = cookies[c].split("=")[1];
    
    // Alter the cookie value or any other modifications as desired
    // For example, changing the value to "modified" for all cookies
    document.cookie = cookieName + "=modified; path=/; expires=Thu, 01 Jan 2030 00:00:00 UTC";
  }
  alert("Cookies altered!");
})();
