package controller;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import java.io.IOException;

public class Logout extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        HttpSession httpSession = req.getSession();
        httpSession.invalidate();
        req.getSession().setAttribute("msg", "You have successfully logged out.");
        resp.sendRedirect(req.getContextPath()+"/index.jsp");
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

    }
}
