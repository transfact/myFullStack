package oop;

public class Student extends Person {
	private String major;
	public Student(String name, int age,String major) {
		//하위 클래스에 상위 클래스 호출시 사용
		super(name, age);
		this.major=major;
	}
	
	@Override
	public String toString() {
		return "Student / super : "+ super.toString() + " , major "+this.major;
		
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

}
