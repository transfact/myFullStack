package my_first_java;

public class MethodOverload {
	public static int add(int a,int b) {
		return a+ b;
	}
	public static double add (double a, double b) {
		return a+b;
	}
	public static int add ( int a, int b ,int c) {
		return a+b+c;
	}
	public static int add (int a, int b, int c, int ... restInt) {
		
		int sum=0;
		for(int k : restInt) {
			sum+=k;
		}
		System.out.println(sum);
		return a+b+c+sum;
		
	}
	public static void main(String[] args) {
		add(1,2,3,4,5,6,7,8,9);
	}
}
