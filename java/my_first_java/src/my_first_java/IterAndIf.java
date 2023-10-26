package my_first_java;
import java.util.Scanner;
public class IterAndIf {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] intArray = {1,2,3,4,5,6,7,8,9};
		for(int i : intArray) {
			if(i % 3 ==0) {
				System.out.println("입력한 수가 3의 배수 입니다.");
			}else {
				System.out.println("3의 배수가 아닙니다");
			}
		}
		
		Scanner s = new Scanner(System.in);
		System.out.print("수를 입력해주세요");
		int newInt = s.nextInt();
		if(newInt % 3 ==0) {
			System.out.println("입력한 수가 3의 배수 입니다.");
		}else {
			System.out.println("3의 배수가 아닙니다");
		}
		switch(newInt % 3 ) {
		case 0:
			System.out.println("3의배수입니다");
			break;
		default :
			System.out.println("3의 배수가 아닙니다.");
			break;
		}
		

		//문자열 비교 자바에서는 문자열은 string 자료형의므로, 변수로 접근할 수 있는 값은 문자열이 아니라 주소.
		// 따라서 == 사용 불가
		System.out.println("이름을 입력해주세요");
		Scanner scan = new Scanner(System.in);
		String hi = scan.nextLine();
		if(hi.equals("코딩온")) {
			System.out.println("코딩온");
		}
		scan.close();
		s.close();
		
		int i =0;
		while(i<10) {
			System.out.println(i);
			i++;
		}
		String c = "124";
		c=c.replace("4","3");
		boolean b = c =="123";
		boolean b2= "123" == "123";
		System.out.println(b);
		System.out.println(b2);
				
	}

}
