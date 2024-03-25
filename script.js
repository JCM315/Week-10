var form = $("form");

form.on("submit", function(event) {
    event.preventDefault();

    var name = $("#name");
    var age = $("#age");
    var hobby = $("#hobby");

    var nameValue = name.val();
    var ageValue = age.val();
    var hobbyValue = hobby.val();

    var tbody = $("tbody");

    tbody.append("<tr></tr>");

    var lastTr = $("tr:last");

    lastTr.html("<td>" + nameValue + "</td>" + "<td>" + ageValue + "</td>" + "<td>" + hobbyValue + "</td>");

    form[0].reset();
});
