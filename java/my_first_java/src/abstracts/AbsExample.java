package abstracts;

abstract class Animal{
	//추상 method
	abstract public void sound();
	
	public void sleep() {
		System.out.println("zzz...");
	}
}

class Chicken extends Animal{

	@Override
	public void sound() {
		// TODO Auto-generated method stub
		System.out.println("ㄲㄲ댁");
		
	}
	
}
public class AbsExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//추상클래스는 인터페이스 불가
		Chicken chick = new Chicken();
		chick.sound();
		chick.sleep();

	}

}
