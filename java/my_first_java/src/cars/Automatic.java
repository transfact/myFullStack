package cars;

import java.util.ArrayList;

import for_pratice.Person;

public class Automatic extends Car {
	String gear;
	public Automatic(String name, int speed, ArrayList<Person> people) {
		super(name, speed, people);
		gear="P";
	}
	public Automatic(String name, int speed, Person person) {
		super(name, speed, person);
		gear="P";
	}
	
	public String gearStatus(String s) {
		if(gear.equals("P")) {
			return "정지";
		}else {
			return "움직이는 기어";
		}
	}

}
