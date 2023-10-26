package my_first_java;

public class CarContainer {
	public static void main(String[] args) {
		Car kia = new Car();
		Car bmw = new Car();
		
		bmw.start();
		kia.start();
		
//		bmw.setSpeed(90);
//		kia.setSpeed(120);
	
//		bmw.start();
//		kia.start();
		
		int bmwSpeed = bmw.getSpeed();
		bmwSpeed +=100;
		bmw.setSpeed(bmwSpeed);
		
		int kiaSpeed = kia.getSpeed();
		kiaSpeed +=80;
		kia.setSpeed(kiaSpeed);
		
		System.out.println("kia 자동차 현재 속도 : "+kia.getSpeed()+"km/h");
		System.out.println("bmw 자동차 현재 속도 : "+bmw.getSpeed()+"km/h");
		
		bmw.changeSpeed(12);

		System.out.println("bmw 자동차 현재 속도 : "+bmw.getSpeed()+"km/h");
	}
	
	
}
