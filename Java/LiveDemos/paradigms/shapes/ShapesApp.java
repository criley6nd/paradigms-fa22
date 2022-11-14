package paradigms.shapes;
public class ShapesApp {
	public static void main(String[] args) {
		// an array of shapes, why does it work?
		Shape [] shapes = 	new Shape[]{
			new Rectangle(2,3),
			new Circle(4),
			new Triangle(4,5)
		};

		// alternative array iteration syntax
		for(Shape s: shapes){
			System.out.println(s.calculateArea());
			// TODO: check runtime type
			if(s instanceof Circle)
				System.out.println(" It is a circle!");

			// TODO: print the object (toString())
			System.out.println(s);
		}

	}
}