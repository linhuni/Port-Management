
import java.util.ArrayList;

public class tankerTruck extends Truck {


    public tankerTruck(String name, float currentFuel, int carryingCap, float fuelCap, Port currentPort, ArrayList<Container> containers) {
        super(name, currentFuel, carryingCap, fuelCap, currentPort, containers);

    }

    @Override
    //check the container is liquid
    public boolean canCarried(Container container) {
        return container instanceof liquidContainer;
    }

}
