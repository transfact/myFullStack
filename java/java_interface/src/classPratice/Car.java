package classPratice;

public class Car extends Vehicle {

	public Car(double maxSpeed, String name) {
		super(maxSpeed, name);
		// TODO Auto-generated constructor stub
	}

	@Override
	void move() {
		System.out.println(getName()+": 도로따라 이동중, 최대속력 : "+getMaxSpeed());
	}

	@Override
	public void Fly() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public boolean isFly() {
		// TODO Auto-generated method stub
		return false;
	}

}
