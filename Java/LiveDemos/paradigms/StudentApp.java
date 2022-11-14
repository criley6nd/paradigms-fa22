package paradigms;
import paradigms.classes.Student;

public class StudentApp{

	// main method (program's entrypoint)
	public static void main (String [] args){
		// creates an instance of the Student class
		Student s = new Student("Mark", new String[] {"A", "B", "C"});
		// computes GPA
		float gpa = s.computeGPA();

		
		
		// TODO: printing the students' name and GPA
		System.out.println(s.getName() + ". gpa = "  + gpa);
	}
}