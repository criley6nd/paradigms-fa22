public class Student{

    private String name;
    private String  grades [];

    /**
     * Parameterized constructor
     */
    public Student(String name, String [] grades){
        this.name = name;
        this.grades = grades;
    }

    /**
     * Computes the student's GPA
     * @return
     */
    public float computeGPA(){
        float result = 0;
        for(String grade: grades){
            switch(grade){
                case "A": result += 4; break;
                case "A-": result += 3.667; break;
                case "B+": result += 3.333; break;
                case "B": result += 3; break;
                case "B-": result += 2.667; break;
                case "C+": result += 2.333; break;
                case "C": result += 2; break;
                case "D": result += 1; break;
            }
        }

        return result/grades.length;
    }

	// "getter" method
	public String getName(){
		return this.name;
	}

}


