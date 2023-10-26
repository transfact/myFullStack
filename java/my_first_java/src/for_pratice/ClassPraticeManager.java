package for_pratice;

public class ClassPraticeManager {

	public static void main(String[] args) {
		Animal a = new Animal("원숭이","원빨강",20);
		Cat c = new Cat("냥이",5,555);
		Dog d = new Dog("또또",6,"말티즈");
	System.out.println(a.makeSound());
	System.out.println(	c.makeSound());
	System.out.println(d.makeSound());
	System.out.println(c.getAltitude());
			
	System.out.println(d.waggingTail());
	
	


	}

}
