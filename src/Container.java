import java.util.Random;

abstract public class Container {
    protected String id;
    private String type;
    private double weight;

    public Container(String type, double weight) {
        this.type = type;
        this.weight = weight;
        this.id = genID();
    }
    public String genID(){
        Random rand = new Random();
        int number = 1000 + rand.nextInt(9000);
        return "c-"+number;
    };

}
