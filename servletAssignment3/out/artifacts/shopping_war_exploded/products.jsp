<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE HTML>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">

    <title>My shopping site</title>
    <script type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript" src="resources/js/script.js"></script>
    <link rel="stylesheet" type="text/css" href="resources/css/bootstrap.min.css">
</head>
<body>
<table class="table table-bordered container">
    <thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Remarks</th>
    </tr>
    </thead>
        <tbody>
        <form method="post" action="${pageContext.request.contextPath}/cart">
            <c:forEach items="${products}" var="product">
                <tr>
                    <td></td>
                    <td><c:out value="${product.id}" /></td>
                    <td><c:out value="${product.name}" /></td>
                    <td><c:out value="${product.price}" /></td>
                    <td>
                     <input type="hidden" name="product_id" value="${product.id}"/>
<%--                        <a href="/cart">Cart</a>--%>
                      <input class="btn-info" type="submit" value="cart"/>
                    </td>
                </tr>
            </c:forEach>

        </form>

        </tbody>
</table>

</body>
</html>
