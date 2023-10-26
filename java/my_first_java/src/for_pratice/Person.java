package for_pratice;

public class Person {
	private String name;
	private int age;
	
	public Person(String name ,int age) {
		super();
		this.name= name;
		this.age= age;
	}



	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		String p = super.toString();
		return  p+" \nPerson / name : "+ this.name +" / age : "+this.age;
	}
	//오버로딩
	public String toString(int a ) {
		return  a+" \nPerson / name : "+ this.name +" / age : "+this.age;
	}
}
