package datastructures.pets;
import java.util.HashSet;
import java.util.Set;

abstract class Pet{
	String name;
	Pet(String name){
		this.name = name;
	}
	public abstract void speak();
}

class Cat extends Pet {
	Cat(String name){
		super(name);
	}
	@Override
	public void speak() {
		System.out.println("meow");
	}
}
class Dog extends Pet {
	Dog(String name){
		super(name);
	}
	@Override
	public void speak() {
		System.out.println("au");
	}
}

public class InvariantExample {

	public static void main(String[] args){
		// Using <? Super Cat> we can assigned to it any sets of Cat, Pet, or Objects 
		// i.e., any set that is a supertype of Cat.
		Set<? super Cat> s1 = new HashSet<Object>();
		Set<? super Cat> s2 = new HashSet<Pet>();
		Set<? super Cat> s3 = new HashSet<Cat>();
		Cat cat = new Cat("Poofy");
		s1.add(cat); // can add a Cat object because the collection is <Object>
					 // Object is a grandparent of the Cat type
		s2.add(cat); // can add a Cat object because the collection is <Pet>
					 // Pet is a parent of the Cat Type
		s3.add(cat); // can add a Cat object because the collection is <Cat>

		// Declaring a data structure using <? extends Pet> 
		// makes it possible to assign to it any DS 
		// that is a subtype of Pet
		/* Set<? extends Pet> s1 = new HashSet<Object>(); // NOT ALLOWED */
		Set<? extends Pet> s4 = new HashSet<Cat>();
		Set<? extends Pet> s5 = new HashSet<Dog>();


	}
}