package dao;

import model.Shopping;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShoppingDAO {
    Map<Integer, Shopping> productsDb = new HashMap<>();
    {
        productsDb.put(1,new Shopping(1,"product1","120"));
        productsDb.put(2,new Shopping(2,"product2","220"));
        productsDb.put(3,new Shopping(3,"product3","330"));
    }
public void addProduct(Shopping shopping){
        productsDb.put(shopping.getId(),shopping);

}
public void deleteProduct(int productId){
         productsDb.remove(productId);
}

public void updateProduct(Shopping shopping){
         productsDb.put(shopping.getId(),shopping);
}
public List<Shopping>  getProducts(){
        return new ArrayList<>(productsDb.values());
}
public Shopping getProductById(int id){
        return productsDb.get(id);
}
public int generateId(){
        return productsDb.size()+1;
}







}
