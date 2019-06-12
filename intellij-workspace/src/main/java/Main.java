import java.util.Random;
public class Main {
    public static void main(String[] args) {
        System.out.println(randomNum());
    }
    public static long randomNum(){
        Long randomId = 0L;
        Random rand = new Random();
        for (int j=0;j < 10;j++)
        {
            randomId = rand.nextLong();
        }
        return randomId;
    }
}
