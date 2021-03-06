import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;

//public long GenerateId(){
//        int randomId = 0;
//        Random rand = new Random();
//        for (int j=0;j < 10;j++)
//        {
//        randomId = rand.nextLong();
//        }
//        return randomId;
//        }

public class HelloServlet extends HttpServlet {
    public static void main(String[] args) {
        System.out.println(randomNum());
    }
  public static long randomNum(){
              Long randomId = 0L;
        Random rand = new Random();
        for (int j=0;j < 7;j++)
        {
        randomId = rand.nextLong();
        }
        if(randomId<0){
            randomId=(-1)*randomId;
        }
        return randomId;
  }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();

        String html="<!DOCTYPE html>\n" +
                "<html>\n" +
                "<head>\n" +
                "    <meta charset='utf-8'>\n" +
                "    <meta http-equiv='X-UA-Compatible' content='IE=edge'>\n" +
                "    <title>Page Title</title>\n" +
                "    <meta name='viewport' content='width=device-width, initial-scale=1'>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <form method='post'>\n" +
                "       <label>Name:</label>\n" +
                "       <input type=\"text\" name=\"name\" Required/><br/><br/>\n" +
                "       <label>Email Address: </label>\n" +
                "       <input type=\"email\" name=\"email\" Required/><br/><br/>\n" +
                "       <label>Problem:</label>\n" +
                "       <input type=\"text\" name=\"Problem\" Required/><br/><br/>\n" +
                "      Problem Description:<br/>\n" +
                "       <textarea name=\"desc\" rows=\"8\" cols=\"30\">\n" +
                "       </textarea><br/>\n" +
                "       <input type='submit'  />\n" +
                "    </form>\n" +
                "</body>\n" +
                "</html>";
        out.print(html);
    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter out = resp.getWriter();
        String email= getServletContext().getInitParameter("AdministratorEmail");
        Long ticket=randomNum();
        String reply="Thank you  <strong>"+ req.getParameter("name")+"</strong>  for contacting us! <br/>"+
                "You should receive reply from us with in 24 hrs in your email address "+req.getParameter("email")+"<br/>"+
                "Let us know in our support email "+ email +" if you don’t receive reply within 24 hrs.<br/>"+
                "Please be sure to attach your reference no: ["+ticket+"] in your email. <br/>";
        out.print("<html><head><title>Test</title></head><body>");
        out.print("<p>"+ reply +"</p>");
        out.print("</body></html>");

    }
}
