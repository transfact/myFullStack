package for_pratice;

public class Cat extends Animal
{
	int altitude;
	public Cat(String animalType, String name, int age) {
		super("고양이", name, age);
		altitude=99999;
	}
	
	public Cat(String name, int age,int altitude) {
		super("고양이", name, age);
		this.altitude=altitude;
	}

	@Override
	public String makeSound() {
		return "야옹";
	}
	public String getAltitude() {
		return "고양이는 높은 곳을 좋아해요. 지금 고도 "+altitude+"에 있네요";
	}
}
