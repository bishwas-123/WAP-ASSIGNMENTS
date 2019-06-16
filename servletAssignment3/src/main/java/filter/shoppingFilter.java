package filter;


import java.io.IOException;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class shoppingFilter implements Filter {
    @Override
   public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws ServletException, IOException {
       HttpServletRequest request = (HttpServletRequest) req;
        HttpServletResponse response = (HttpServletResponse) res;
        //HttpSession session = request.getSession(false);
        String loginURI = request.getContextPath() + "/index.jsp";
       // String welcomeURI=request.getContextPath() + "/welcome.jsp";
        boolean loggedIn = request.getSession().getAttribute("user") != null;
        boolean loginRequest = request.getRequestURI().equals(loginURI);
       // boolean welcome=request.getRequestURI().equals(welcomeURI);

        if (loggedIn || loginRequest) {
          //  request.setAttribute("msg", "You have to Login First.");
            chain.doFilter(request, response);
        }
        else {
            request.getSession().setAttribute("msg", "You have to Login First.");
         response.sendRedirect(loginURI);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void destroy() {
    }
}
