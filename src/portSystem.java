import java.util.ArrayList;
import java.util.Scanner;

public class portSystem {
    private ArrayList<Account> accounts = new ArrayList<>();
    private ArrayList<Port> ports = new ArrayList<>();
    private ArrayList<Container> containers = new ArrayList<>();
    private ArrayList<Vehicle> vehicles = new ArrayList<>();
    private Account currentUser;


    public Account SignIn(){
        Scanner scanner = new Scanner(System.in);
        //set and check username
        System.out.println("Enter username: ");
        String username = scanner.nextLine();
        for (Account acc: accounts) {
            if(acc.getUsername().equals(username)){
                System.out.println("User name is existing");
                return null;
            }
        }
        //set and check password
        System.out.println("Enter password: ");
        String password = scanner.nextLine();
        Account account = new Account(username);
        if(!account.setPassword(password)){
            System.out.println("password is invalid");
            return null;
        }
        account.setAccountRole(AccountRole.MANAGER);
        System.out.println("Account created successfully!");
        accounts.add(account);
        return account;

    }

    public Account Login(){
        Scanner scanner = new Scanner(System.in);

        System.out.print("Username: ");
        String username = scanner.nextLine();

        System.out.print("Password: ");
        String password = scanner.nextLine();

        for (Account acc: accounts) {
            if(acc.getPassword().equals(password) && acc.getUsername().equals(username)){
                System.out.println("Successfully log in");
                return acc;
            }
        }
        System.out.println("Invalid username or password.");
        return null;
    }

    public void viewProfile(String username){
        for (Account acc: accounts) {
            if(acc.getUsername().equals(username)){
                System.out.println(acc);
            }
        }
    }
    public void showMenu(Account user) {
        System.out.println("=== MENU ===");

        if (user.getAccountRole() == AccountRole.ADMIN) {
            System.out.println("A. CRUD");
            System.out.println("1. Ports CRUD");
            System.out.println("2. Vehicles CRUD");
            System.out.println("3. Containers CRUD");
            System.out.println("4. Managers CRUD");

            System.out.println("B. Operations");
            System.out.println("5. Load container to vehicle");
            System.out.println("6. Unload container from vehicle");
            System.out.println("7. Check canMoveToPort");
            System.out.println("8. Move vehicle to port");
            System.out.println("9. Refuel vehicle");

            System.out.println("C. Statistics");
            System.out.println("10. Fuel used in a day");
            System.out.println("11. Total weight by container type");
            System.out.println("12. List all ships in a port");
            System.out.println("13. List all trips in a day");
            System.out.println("14. List trips from day A to day B");
        } else if (user.getAccountRole() == AccountRole.MANAGER) {
            System.out.println("1. Containers CRUD");
            System.out.println("2. Load/Unload container (if allowed)");
            System.out.println("0. Logout");
        }

        System.out.println("0. Logout");
    }

    public static void main(String[] args) {
        portSystem portSystem = new portSystem();
        portSystem.accounts.add(new Account("admin"));
        portSystem.accounts.add(new Account("manager"));
    }

}



