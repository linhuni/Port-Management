

import java.util.ArrayList;

public class basicTruck extends Truck{


    public basicTruck(String name, float currentFuel, int carryingCap, float fuelCap, Port currentPort, ArrayList<Container> containers) {
        super(name, currentFuel, carryingCap, fuelCap, currentPort, containers);
    }

    @Override
    // Check container is open-side or open-top or dry storage
    public boolean canCarried(Container container) {
        return container instanceof dryStorage
                || container instanceof openSide
                || container instanceof openTop;
    }

}
