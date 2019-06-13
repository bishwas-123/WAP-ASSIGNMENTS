<%--
  Created by IntelliJ IDEA.
  model.User: Bishwas
  Date: 6/12/2019
  Time: 3:26 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<p>
    Welcome,
    <%=session.getAttribute("user")%>
    ! You have successfully logged in. Thank you. &nbsp; &nbsp;<a
        href="logout">Logout</a>
</p>
</body>
</html>
