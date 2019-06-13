<%--
  Created by IntelliJ IDEA.
  model.User: Bishwas
  Date: 6/12/2019
  Time: 2:10 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>Login Form</title>
  </head>
  <body>
  <fieldset style="width: 600px; margin: auto;">
  <legend>Login</legend>
  <div>
    <%

      Cookie[] cookies=request.getCookies();
      String userName = "", password = "",rememberVal="";
      if (cookies != null) {
        for (Cookie cookie : cookies) {
          if(cookie.getName().equals("uname")) {
            userName = cookie.getValue();
          }
          if(cookie.getName().equals("remember")){
            rememberVal = cookie.getValue();
          }
        }
      }

    %>
    <label style="font-weight: bold;"><%=request.getSession().getAttribute("msg") != null ? request.getSession().getAttribute("msg") : ""%></label>
   <label style="font-weight: bold;"><%=request.getAttribute("msg") != null ? request.getAttribute("msg") : ""%></label>
    <% request.getSession().setAttribute("msg","");%>
    <form name="loginForm" method="post"
          action="login">
      <p>
        <label>Username</label> <input type="text" name="uname"
                                       autocomplete="off" value="<%=userName%>" />
      </p>
      <p>
        <label>Password</label> <input type="password" name="upass"
                                       autocomplete="off" value="<%=password%>" />
      </p>

      <p>
        <label>Remember</label>
        <input type="checkbox" name="remember"
               value="1"
                <%= "1".equals(rememberVal.trim()) ? "checked='checked'" : "" %> />

      </p>
      <p>
        <input type="submit" name="login" value="Login" />
      </p>
    </form>
  </div>
  </fieldset>

  </body>
</html>
