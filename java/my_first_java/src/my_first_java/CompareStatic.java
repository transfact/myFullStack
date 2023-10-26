package my_first_java;

public class CompareStatic {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		WithoutStatic a1= new WithoutStatic("lee");
		WithoutStatic a2= new WithoutStatic("gi");

		System.out.println("lee: "+a1.getRegistered());
		System.out.println("gi: "+a2.getRegistered());
		System.out.println("with static");
		WithStatic b1= new WithStatic("lee");
		WithStatic b2= new WithStatic("gi");
		System.out.println("lee: "+b1.getRegistered());
		System.out.println("gi: "+b2.getRegistered());
		
		//static method는 객체를 안만들고 접근 가능.
		System.out.println(MathUtil.getCircleArea(5.1));
	}

}

class MathUtil {
	private static double PI =3.14;
	public static double getCircleArea(double rad) {
		return PI * rad * rad;
	}

}

class WithoutStatic {
	private int registered=0;
	private String name ;	
	public WithoutStatic(String name) {
		this.name=name;
		registered++;
	}

	public int getRegistered() {
		return registered;
	}
}


class WithStatic {
	//static은 보통 공유해서 값을 쓸대 사용한다고, 보통 상수라는데..
	
	private static int registered=0;
	private String name ;	
	public WithStatic(String name) {
		this.name=name;
		registered++;
	}	
	public int getRegistered() {
		return registered;
	}
	
}

