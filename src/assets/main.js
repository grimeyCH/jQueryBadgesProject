$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2327346.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
      for (var index = 0; index < response.courses.completed.length; index++) {
        var element = response.courses.completed[index];
        var newDiv = $( "<div class='course'></div>" );
        var text = $( "<h3>" + element.title + "</h3>");
        var badge = $( "<img src='" + element.badge + "'/>")
        var link = $( "<a href='" + element.url + "' target='_blank class='btn btn-primary'>See Course</a>");
        newDiv.append(text);
        newDiv.append(badge);
        newDiv.append(link);
        $( "#badges" ).append(newDiv);
      }
    }
  });
});
