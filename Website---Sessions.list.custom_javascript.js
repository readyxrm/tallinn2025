/*
$(document).ready(function (){
    $(".entitylist.entity-grid").on("loaded", function () {
        $(this).children(".view-grid").find("tr").each(function (){
            var durationCell = $(this).find("td[data-attribute='docs_duration']");
            var durationValue = parseFloat(durationCell.text());
            if (durationValue > 50) {
                $(this).css("background-color", "#ffcccc"); // Highlight the row with a light red background
            }
        });
    });
});
*/