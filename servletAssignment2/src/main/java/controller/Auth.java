package controller;

import model.User;
import model.UserList;

public class Auth {
    public static boolean authenticate(String userName, String password) {
        User userData=new User("bishwas","bishwas1");
        UserList userList=new UserList();
        userList.addUsers(userData);
        for(User u:userList.getUsernames()){
             if(u.getName().equals(userName)&& u.getPassword().equals(password)){
                 return  true;
             }
        }
        return false;
    }
}
