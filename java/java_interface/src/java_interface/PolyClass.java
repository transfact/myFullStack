package java_interface;


//다형성 하나의 인터페이스나 클래스를 여러방식으로 동작하게 하는 것
class Animal {
	public void sound() {
		System.out.println("동물 울음 소리");
	}
}


class Dog extends Animal{
	public void sound() {
		System.out.println("멍멍");
	}
}

class Cat extends Animal{
	public void sound() {
		System.out.println("야옹");
	}
}


abstract class Shape{
	abstract double area();
}

class Circle extends Shape{
	private double radious;
	public Circle(double r) {
		this.radious=r;
	}
	@Override
	double area() {
		// TODO Auto-generated method stub
		return Math.PI * this.radious * this.radious;
	}
}

class Rect extends Shape{
	private double w;
	private double h;
	
	public Rect(double w, double h) {
		this.w= w;
		this.h=h;	
	}
	
	@Override
	double area() {
		// TODO Auto-generated method stub
		return w*h;
	}	
}


interface Flyable {
	void fly();
}
class Bird implements Flyable{

	@Override
	public void fly() {
		System.out.println("새가 난다.");
	}
	
}
public class PolyClass {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Dog dog = new Dog();
		Cat cat = new Cat();
		//다형성
		Animal d2 = new Dog();
		Animal c2 = new Dog();
		d2.sound();
		
		Shape s1= new Circle(3.3);
		Shape s2 = new Rect(3,7.1);
		System.out.println(s1.area()+ " / "+s2.area());
		
		Flyable f1 = new Bird();
		f1.fly();
		
		Shape[] s3 = {s1,s2};
		for (Shape s : s3) {
			System.out.println(s.area());
		}
	}

}
