public class StudentApp{
	public static void main (String [] args){
		Student s = new Student("Mark", new String[] {"A", "B", "C"});

		float gpa = s.computeGPA();

		System.out.println(gpa);
	}
}