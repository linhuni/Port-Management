import java.util.ArrayList;

public class Admin extends Account{
    protected ArrayList<Port> ports = new ArrayList<>();
    public Admin(String username) {
        super(username);
        this.ports = new ArrayList<>();

    }
}
