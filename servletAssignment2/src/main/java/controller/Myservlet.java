package controller;

import controller.Auth;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;

public class Myservlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
//        super.doPost(req, resp);



        String userName = req.getParameter("uname");
        String pass = req.getParameter("upass");

        if (!userName.trim().isEmpty() && !pass.trim().isEmpty()) {
            boolean success = Auth.authenticate(userName.trim(), pass.trim());
            if (success) {


                if (req.getParameter("remember") != null) {

                    Cookie user = new Cookie("uname", userName.trim());
                    user.setMaxAge(60*60*24*30);
                    resp.addCookie(user);

                    String remember = req.getParameter("remember");
                    Cookie rem = new Cookie("remember", remember);
                    rem.setMaxAge(60*60*24*30);
                    resp.addCookie(rem);

                }

               else{
                    Cookie user = new Cookie("uname", null);
                    user.setMaxAge(0);
                    resp.addCookie(user);
                   Cookie rem = new Cookie("remember", null);
                   rem.setMaxAge(0);
                   resp.addCookie(rem);
               }

                HttpSession httpSession = req.getSession();
                httpSession.setAttribute("user", userName.trim());
                RequestDispatcher requestDispatcher = req.getRequestDispatcher("/welcome.jsp");
                requestDispatcher.forward(req, resp);
            }
            else{
                //mismatch
                req.getSession().setAttribute("msg", "Authentication failure. Incorrect Credentials !");
                resp.sendRedirect(req.getContextPath()+"/index.jsp");

            }

        }
        else{
            req.getSession().setAttribute("msg", "Username and Password are required fields.");
            resp.sendRedirect(req.getContextPath()+"/index.jsp");

        }
    }
}
