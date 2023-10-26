package oop;

public class Overriding {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Person p = new Person("길동",29);
		
		System.out.println(p.toString());
		
		Student s = new Student("몽룡",19,"컴공");
		System.out.println(s.toString());
		
		Person p2 =(Person) s;
		System.out.println("p2: "+p2.toString());
		
		System.out.println(	((Student) p2).toString());
		System.out.println(s.getAge());
		
	
		
	}

}
