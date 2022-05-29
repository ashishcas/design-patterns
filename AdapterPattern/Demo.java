import Adapters.SquarePegAdapter;
import Round.RoundHole;
import Round.RoundPeg;
import Square.SquarePeg;

public class Demo {

    public static  void main(String[] args){
        double radius = 5;
        RoundHole hole = new RoundHole(5);
        RoundPeg rpeg = new RoundPeg(radius);

        if (hole.fits(rpeg)) {
            System.out.println("Round peg r5 fits round hole r5.");
        }

        SquarePeg smallPeg = new SquarePeg(2);
        SquarePeg largePeg = new SquarePeg(20);

        SquarePegAdapter smallSqPegAdapter = new SquarePegAdapter(smallPeg);
        SquarePegAdapter largeSqPegAdapter = new SquarePegAdapter(largePeg);

        if(hole.fits(smallSqPegAdapter)){
            System.out.println("Square peg w2 fits round hole r5.");
        }

        if (!hole.fits(largeSqPegAdapter)) {
            System.out.println("Square peg w20 does not fit into round hole r5.");
        }

    }
}

