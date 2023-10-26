package java_interface;

interface Move {
	void moveForward() ;
	void backForward();
}

interface Power{
	void powerOn();
	void powerOff();
}

interface Car extends Move,Power  {
	void ChangeGear(int gear);
	
}

class Suv implements Car{

	@Override
	public void moveForward() {
		// TODO Auto-generated method stub
		System.out.println("앞으로");
	}

	@Override
	public void backForward() {
		System.out.println("뒤로 ");
		
	}

	@Override
	public void powerOn() {
		System.out.println("파워ON");
		
	}

	@Override
	public void powerOff() {
		System.out.println("파워OFF");
		
	}

	@Override
	public void ChangeGear(int gear) {
		System.out.println("기어변경");
		
	}
	
}


public class InterMain2 {
	public static void main(String[] args) {
		// TODO Auto-generated method stub{
		
		Suv s = new Suv();
		s.powerOn();
		s.ChangeGear(5);
		s.powerOff();
	
	}
}
