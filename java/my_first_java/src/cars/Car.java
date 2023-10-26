package cars;

import java.util.ArrayList;

import for_pratice.Person;

public class Car {
	private String name;
	protected int speed;
	private ArrayList<Person> people;
	
	public Car(String name, int speed, ArrayList<Person> people) {
		this.name = name;
		this.speed = speed;
		this.people = people;
	}
	public Car(String name, int speed, Person person) {
		this.name = name;
		this.speed = speed;
		this.people =new ArrayList<Person>();
		this.people.add(person) ;
	}
	public int getSpeed() {
		return speed;
	}
	public void setSpeed(int speed) {
		this.speed = speed;
	}
	public String getName() {
		return name;
	}
	public ArrayList<Person> getPeople() {
		return people;
	}
	
	



}
