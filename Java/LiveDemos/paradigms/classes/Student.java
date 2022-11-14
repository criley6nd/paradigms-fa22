package paradigms.classes;

public class Student{	
	private String name;
	private String [] grades;

	public Student(String name, String [] grades){
		this.name = name;
		this.grades = grades;
	}
	public String getName(){
		return name;
	}

	/**
     * Computes the student's GPA
     * A  = 4 / A- =3.667 
     * B+ = 3.333 / B = 3 / B- = 2.667
     * C+ = 2.333 / C = 2 / C- = 1.667
     * D = 1 / F = 0
     */
    public float  computeGPA(){
		float sum = 0;
    	for(int i = 0; i < this.grades.length ; i++){
			String letter = this.grades[i];
			if(letter.equals("A")) sum+= 4;
			if(letter.equals("A-")) sum+= 3.667;
			if(letter.equals("B+")) sum+= 3.333;
			if(letter.equals("B")) sum+= 3;
			if(letter.equals("B-")) sum+= 2.667;
			if(letter.equals("C+")) sum+= 2.333;
			if(letter.equals("C")) sum+= 2;
			if(letter.equals("C-")) sum+= 1.667;
			if(letter.equals("D")) sum+= 1;
		}

    	return sum/grades.length;
    }
}