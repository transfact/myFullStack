package classPratice;

public class Airplane extends Vehicle {

	public Airplane(double maxSpeed, String name) {
		super(maxSpeed, name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void Fly() {
		System.out.println(getName()+": 고도 10000피트에서 운행");
		
	}

	@Override
	void move() {
		System.out.println("최대속력"+getMaxSpeed()+"으로 하늘을 달리다");
		
	}

	@Override
	public boolean isFly() {
		// TODO Auto-generated method stub
		return true;
	}

}
