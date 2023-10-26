package java_interface;

interface Controller{
	void powerOn();
	void powerOff();	
	default void display() {
		System.out.println("display anything");
	}
}

class TV implements Controller{
	@Override
	public void powerOn() {
		System.out.println("TV on");
		
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("TV off");
	}
}

class Computer implements Controller{
	@Override
	public void powerOn() {
		System.out.println("Computer on");
		
	}

	@Override
	public void powerOff() {
		// TODO Auto-generated method stub
		System.out.println("Computer off");
	}
}
public class InterMain {
	public static void main(String[] args) {
		// TODO Auto-generated method stub{
		TV tv= new TV();
		Computer com =new Computer();
		tv.powerOn();
		tv.powerOff();
	
	}
}
