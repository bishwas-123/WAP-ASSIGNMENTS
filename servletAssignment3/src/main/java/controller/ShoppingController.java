package controller;
import dao.ShoppingDAO;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@WebServlet({"/shopping",""})
public class ShoppingController extends HttpServlet {
    private ShoppingDAO shoppingDAO;
  //  Gson mapper=new Gson();
    @Override
    public void init() throws ServletException {
        shoppingDAO=new ShoppingDAO();
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.setAttribute("products",shoppingDAO.getProducts());
        RequestDispatcher view = req.getRequestDispatcher("/products.jsp");
        view.forward(req, resp);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        super.doPost(req, resp);
    }
}
