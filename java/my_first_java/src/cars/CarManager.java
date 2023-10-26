package cars;

import for_pratice.Person;

public class CarManager {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Person p1 = new Person("Lee",25);
		Person p2 = new Person("Jin",23);
		Car bicycle = new Car("자전거",5,p1);
		
		Stick tractor =new Stick("트랙터",20,p1);
		System.out.println(tractor.gearHigh());
	}

}
