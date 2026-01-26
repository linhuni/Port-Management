import java.util.ArrayList;
import java.util.Date;
import java.util.Vector;
import java.time.LocalDateTime;



//Trip allows vehicle to go to port
public class Trip {
    private ArrayList<Vehicle> vehicles;
    private LocalDateTime departureTime;
    private LocalDateTime arrivalTime;
    private String portDepart;
    private String portArrival;
    private TripStatus status;



    //Move one vehicle from this port to that port
    public void excecuteTrip(Port from, Port to, Vehicle vehicle) {
        if (!from.isLanding() || !to.isLanding()) {
            return;
        }
            vehicles.add(vehicle);
            switch (status) {
                case PLANNED:
                    break;

                case ONGOING:
                    vehicle.setCurrentPort(null);
                    break;

                case COMPLETED:
                    vehicle.setCurrentPort(to);
                    this.arrivalTime = LocalDateTime.now();
                    break;

                default:
                    throw new IllegalStateException("Unknown status: " + status);
            }


        }
    }



