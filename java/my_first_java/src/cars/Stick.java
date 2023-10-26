package cars;

import java.util.ArrayList;

import for_pratice.Person;

public class Stick extends Car {
	int gear;
	public Stick(String name, int speed, ArrayList<Person> people) {
		super(name, speed, people);
		gear=1;
	}
	public Stick(String name, int speed, Person person) {
		super(name, speed, person);
		gear=1;
	}
	
	public String gearHigh() {
		if(speed<=gear*25) {
			gear+=1;
			return "기어를 "+gear+"로 높입니다";
		}else {
			return "기어를 높일 수 없습니다";
		}
	}
	public String gearLow() {
		gear-=1;
		return "기어를 "+gear+"로 낮춥니다";
	}
}
