
import java.util.ArrayList;
import java.util.Random;

abstract public class Truck extends Vehicle{

    public Truck(String name, float currentFuel, int carryingCap, float fuelCap, Port currentPort, ArrayList<Container> containers) {
        super(name, currentFuel, carryingCap, fuelCap, currentPort, containers);
        this.id = genID();
    }

    public String genID(){
         Random rand = new Random();
         int number = 1000 + rand.nextInt(9000);
         return "t-"+number;
     }
}

