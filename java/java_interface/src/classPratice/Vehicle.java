package classPratice;

public abstract class Vehicle  implements Flyable {
	private double maxSpeed;
	private String name;
	
	public Vehicle(double maxSpeed, String name) {
		this.maxSpeed=maxSpeed;
		this.name=name;
	}
	
	abstract void move();

	public double getMaxSpeed() {
		return maxSpeed;
	}

	public void setMaxSpeed(double maxSpeed) {
		this.maxSpeed = maxSpeed;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
