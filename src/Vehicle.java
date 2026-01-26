
import java.util.ArrayList;
import java.util.Random;

abstract public class Vehicle {
    protected String id;
    private String name;
    private float currentFuel;
    private int carryingCap;
    private float fuelCap;
    private Port currentPort;
    private int numCons;
    private ArrayList<Container> containers ;

    public Vehicle(String name, float currentFuel, int carryingCap, float fuelCap, Port currentPort,
                   ArrayList<Container> containers) {
        this.name = name;
        this.currentFuel = currentFuel;
        this.carryingCap = carryingCap;
        this.fuelCap = fuelCap;
        this.currentPort = currentPort;
        this.containers = new ArrayList<>(containers);

    }
    //check the container's type
    public abstract boolean canCarried(Container container);

    //boolean shows true for successful load, false for unsuccessful
    public boolean loadContainer(Container container) {
        if (canCarried(container)&& !containers.contains(container)) {
            containers.add(container);
            this.numCons = containers.size();
            return true;
        }else {
            return false;
        }
    }

    public abstract String genID();

    //boolean shows true for successful unload, false for unsuccessful
    public boolean unloadContainer(Container container) {
            if (containers.remove(container)) {
                this.numCons = containers.size();
                return true;
            }
            return false;
    }

    public ArrayList<Container> getContainers() {
        return containers;
    }

    public void setCurrentPort(Port port) {
        this.currentPort = port;
    }

}
