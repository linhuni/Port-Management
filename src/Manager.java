import java.util.ArrayList;

public class Manager extends Account{
    protected Port port;

    public Manager(String username, Port port) {
        super(username);
        this.port = port;
    }

    public Manager(String username) {
        super(username);


    }
}
