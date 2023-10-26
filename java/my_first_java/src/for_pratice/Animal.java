package for_pratice;

public class Animal {
	private String animalType;
	private String name;
	private int age;
	
	
	public Animal(String animalType, String name, int age) {
		this.animalType = animalType;
		this.name = name;
		this.age = age;
	}
	
	public String getSleep() {
		return "동물은 잠을 자요";
	}
	
	public String makeSound() {
		return "동물은 소리를 내요";
	}
}
