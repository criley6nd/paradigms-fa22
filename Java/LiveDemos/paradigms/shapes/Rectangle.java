package paradigms.shapes;
public class Rectangle extends OrthogonalShape{
	
	public Rectangle(double b, double h){
		super(b,h);
	}
	@Override
	public double calculateArea() {
		return this.base * this.height;
	}

	public String toString(){
		return "Rectangle. base="+base+ "height="+this.height;  
	}
}