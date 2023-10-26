package for_pratice;

public class Dog extends Animal{
	String breed;
	
	public Dog(String animalType, String name, int age) {
		super("강아지", name, age);
		this.breed = "무슨 종인지 모름";
	}
	public Dog( String name, int age,String breed) {
		super("강아지", name, age);
		this.breed = breed;
	}
	@Override
	public String makeSound() {
		return "멍멍";
	}
	public String waggingTail() {
		return "강아지는 반가울때 꼬리를 흔들어요";
	}
}
