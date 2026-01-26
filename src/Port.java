import java.util.ArrayList;
import java.util.Random;

public class Port {
    private String id;
    private String name;
    private double latitude;
    private double longitude;
    private int stroringCap;
    private boolean landing;

    private ArrayList<Container> containers ; //Port only shows the vehicles in port, add vehicle, delete vehicle

    private ArrayList<Vehicle> vehiclesAtPort;
    private ArrayList<Trip> trips ;


    public Port( String name, double latitude, double longitude, int stroringCap, boolean landing) {
        this.id = genID();
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.stroringCap = stroringCap;
        this.landing = landing;
        this.containers = new ArrayList<>();
        this.trips = new ArrayList<>();
        this.vehiclesAtPort = new ArrayList<>();
    }

    public String genID(){
        Random rand = new Random();
        int number = 1000 + rand.nextInt(9000);
        return "p-"+number;
    }

    //Check landing ability

    public void setLanding(boolean landing) {
        this.landing = landing;
    }

    public boolean isLanding() {
        return landing;
    }

    //Calculaate distance
        public static double distanceKm(
                double lat1, double lon1,
                double lat2, double lon2) {

            final double R = 6371; // km

            double dLat = Math.toRadians(lat2 - lat1);
            double dLon = Math.toRadians(lon2 - lon1);

            double rLat1 = Math.toRadians(lat1);
            double rLat2 = Math.toRadians(lat2);

            double a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
                    + Math.cos(rLat1) * Math.cos(rLat2)
                    * Math.sin(dLon / 2) * Math.sin(dLon / 2);

            double c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            return R * c;
        }

    public int getCurrentVehicleCount() {
        return vehiclesAtPort.size();
    }

    public String getName() {
        return name;
    }

    public ArrayList<Container> getContainers() {
        return containers;
    }

    public String getId() {
        return id;
    }
}
