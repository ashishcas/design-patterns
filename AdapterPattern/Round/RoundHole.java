

public class RoundHole {
    private double radius;

    public RoundHole(double radius){
        this.radius = radius;
    }

    public  double getRadius(){
        return  radius;
    }

    public  boolean fits(RoundPeg peg){
        boolean result;
        result = (this.getRadius() >= getRadius());
        return  result;
    }
    
}
