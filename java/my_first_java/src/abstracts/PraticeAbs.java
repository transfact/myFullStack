package abstracts;

abstract class Student {
	private String name;
	private String school;
	private int sid;
	
	public Student(String name, String school, int sid) {
		this.name = name;
		this.school = school;
		this.sid = sid;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	abstract public String todo();
}


class Kim extends Student{
	public Kim(String name, String school, int sid) {
		super(name,school,sid);
		System.out.println(name+school+sid);
	}
	@Override
	public String todo() {
		// TODO Auto-generated method stub
		return "점심은 김가네 김밥";
	}
	
}

class Baek extends Student{
	public Baek(String name, String school, int sid) {
		super(name,school,sid);
//		System.out.println(name+school+sid);
	}
	@Override
	public String todo() {
		// TODO Auto-generated method stub
		return "점심은 백종원 피자";
	}
	
}

public class PraticeAbs {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Baek b = new Baek("Lee","kon",2017);
		Kim k = new Kim("Lee","kon",2017);
		System.out.println(b.todo());
		System.out.println(k.todo());
		
	}

}
