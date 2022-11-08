public class Student{
    private String name;
    private String [] grades;

    //need to specify that the constructor is public
    public Student(String name, String [] grades){ //don't specify return type because it is a constructor
        this.name = name;
        this.grades = grades;
    }
}