
import java.util.ArrayList;

public class reeferTruck extends Truck {


    public reeferTruck(String name, float currentFuel, int carryingCap, float fuelCap, Port currentPort, ArrayList<Container> containers) {
        super(name, currentFuel, carryingCap, fuelCap, currentPort, containers);
        this.id = genID();
    }

    @Override
    public boolean canCarried(Container container) {
        return container instanceof refrigerated;
    }
}
