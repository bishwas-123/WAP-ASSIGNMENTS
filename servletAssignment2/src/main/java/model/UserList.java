package model;

import model.User;

import java.util.ArrayList;

public class UserList {

    private ArrayList<User> usernames;
    public UserList(){
        usernames=new ArrayList<>();
    }
    public void addUsers(User user){
        usernames.add(user);
    }
    public ArrayList<User> getUsernames(){
        return usernames;
    }
}
