<%--
  Created by IntelliJ IDEA.
  User: nastyabeggin
  Date: 27.10.2022
  Time: 10:14 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>lab2</title>
    <script src="./js/Validator.js"></script>
    <script src="./js/Updater.js"></script>
    <script src="./js/ValueGetter.js"></script>
    <script src="./js/ClearTable.js"></script>
    <script src="./js/xButton.js"></script>
    <script src="./js/GraphHandler.js"></script>
</head>
<body>
<table id="result_table">
    <tbody>
    <tr class="results">
        <th>X</th>
        <th>Y</th>
        <th>R</th>
        <th>Timezone</th>
        <th>Script time</th>
        <th>HIT RESULT</th>
    </tr>
    <%--@elvariable id="shots" type="java.util.LinkedList"--%>
    <tr class="results">
        <td>${shots.getLast().getX().toString().format("%.2f", shots.getLast().getX()).replaceAll(",",".")}</td>
        <td>${shots.getLast().getY().toString().format("%.2f", shots.getLast().getY()).replaceAll(",",".")}</td>
        <td>${shots.getLast().getR().toString().format("%.2f", shots.getLast().getR()).replaceAll(",",".")}</td>
        <td>${shots.getLast().getTime().toString()}</td>
        <td>${shots.getLast().getScriptTime().toString()}</td>
        <td>${shots.getLast().getStatus().toString()}</td>
    </tr>
    <tr>
        <td colspan="6" style="text-align: center">
            <button onClick="window.location.replace('./index.jsp');" type="reset" onclick="">Main page</button>
        </td>
    </tr>
    </tbody>
</table>

</body>
</html>
