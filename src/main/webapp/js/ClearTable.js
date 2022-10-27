function clearTable() {
    $.ajax({
        type: "POST",
        url: "controller-servlet",
        async: false,
        success: function () {
        },
        error: function (xhr, textStatus, err) {
            alert("readyState: " + xhr.readyState + "\n" +
                "responseText: " + xhr.responseText + "\n" +
                "status: " + xhr.status + "\n" +
                "text status: " + textStatus + "\n" +
                "error: " + err);
        }
    })
    $('#table').html(`<tr>
            <th>X</th>
            <th>Y</th>
            <th>R</th>
            <th>Текущее время</th>
            <th>Время работы скрипта (мс)</th>
            <th>Результат</th>
            </tr>`);
}
