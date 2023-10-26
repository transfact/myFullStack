package java_interface;

interface Constants{
	double PI = 3.14;
	public final int MAX_VALUE=100;
	//final Class는 상속할 수 없다.
	//method 사용 : override 불가
	// 변수에서 사용 : 변경불가. 상수.
	//매개변수에서 사용 -> 매개변수값 변경불능.
	
}
class ConstantsEx implements Constants{
	void display() {
		System.out.println("MAX VALUE : "+ MAX_VALUE);

		System.out.println("PI : "+ PI);
	}
}

public class InterMain3 {
	public static void main(String[] args) {
		ConstantsEx obj = new ConstantsEx();
		obj.display();
	}

}
