package my_first_java;
import java.util.InputMismatchException;
import java.util.Scanner;

public class MyExceptions {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		// 0으로 나눔
		try {
			int num1=1;
			int num2=0;
			System.out.println(num1+" / "+num2+ " = " + (num1/num2));
		}catch(ArithmeticException e ) {
			System.out.println(e);
			System.out.println("0으로 나눔");
		}finally {
			System.out.println("h1");
		}
		
		//인덱스 밖으로 벗어나는 에러
		int[] intArray = {1,2,3,4};
		try {
			for(int i=0; i<5;i++) {
				System.out.println(intArray[i]);
			}
		}catch(ArrayIndexOutOfBoundsException e ) {
			System.out.println(e);
			System.out.println("배열을 벗어남");
		}
		
		Scanner s = new Scanner(System.in);
		System.out.println("정수입력필요");
		int num=-1;
		try {
			num=s.nextInt();
		}catch(InputMismatchException e) {
			System.out.println("정수가 입력되지 않았습니다. "+ e );
		}
		System.out.println(num);
		s.close();
//		즉, Exception 클래스는 다시 RuntimeException(런타임 에러를 다룸)과 그 외의 자식 클래스 그룹(컴파일 에러를 다룸)으로 나뉘게 된다.
//
//		Exception 및 하위 클래스 : 사용자의 실수와 같은 외적인 요인에 의해 발생하는 컴파일시 발생하는 예외
//		존재하지 않는 파일의 이름을 입력 (FileNotFoundException) => 컴파일러가 체크해줄수 있음.
//		실수로 클래스의 이름을 잘못 기재 (ClassNotFoundException)
//		입력한 데이터 형식이 잘못된 경우 (DataFormatException) 
//		RuntimeException 클래스 : 프로그래머의 실수로 발생하는 예외
//		배열의 범위를 벗어남 (IndexOutOfBoundsException)
//		값이 null인 참조 변수의 멤버를 호출 (NullPointerException)
//		클래스 간의 형 변환을 잘못함 (ClassCastException)
//		정수를 0으로 나누는 산술 오류 (ArithmeticException)
		System.out.println("");
			for(int i=0; i<5;i++) {
				try {
				System.out.println(intArray[i]);
				}		catch(ArrayIndexOutOfBoundsException e ) {
					System.out.println(e);
					System.out.println("인덱스를 벗어남");
				}
			}

		
		
	}

}
