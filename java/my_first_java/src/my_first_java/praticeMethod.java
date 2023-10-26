package my_first_java;

import java.util.Scanner;

public class praticeMethod {
	public static double add(double a ,double b) {
		return a+b;
	}
	public static double sub(double a ,double b) {
		return a-b;
	}
	public static double mul(double a ,double b) {
		return a*b;
	}
	public static double div(double a ,double b) {
		if((int) b ==0 ) {
			return -1.0;
		}else {
			return a/b;
		}
		
	}
	
	
	public static double getArea(int r) {
		return Math.PI * r * r;
	}
	public static double getArea(int width, int height) {
		return width * height;
	}
	public static double getArea(double height, double row) {
		return  row * height /2 ;
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		System.out.println("실습 1 나이를 입력하세요");
		int age = s.nextInt();
		s.nextLine();
		if(age<0) {
			System.out.println("0살이하입니다");
		}else if(age<8) {
			System.out.println("유아입니다");
		}else if(age<14) {
			System.out.println("초등학생입니다");
		}else if(age<16) {
			System.out.println("중학생입니다");
		}else if(age<20) {
			System.out.println("고등학생입니다");
		}else  {
			System.out.println("성인입니다");
		}

		System.out.println("실습2 이름을 입력하세요");
		Scanner s2 = new Scanner(System.in);
		String name =s2.nextLine();
		switch(name) {
		case "홍길동":
			System.out.println("남자입니다");
			break;
		case "성춘향":
			System.out.println("여자입니다");
			break;
		default:
			System.out.println("모르겠어요");
		}

		
		
		System.out.println("실습3 숫자를 입력하세요");
		Scanner s3 = new Scanner(System.in);
		int num =s3.nextInt();
		s3.nextLine();
		for(int i=1; i<=num;i++) {
			System.out.print(i+" ");
		}
		System.out.println();
		System.out.println("실습4 숫자 2개를 입력하세요");
		Scanner s4 = new Scanner(System.in);

		double num1 = s4.nextDouble();
		double num2 = s4.nextDouble();
		s4.nextLine();
		System.out.printf("덧셈 결과 : %f", add(num1, num2));
		System.out.printf("뺄셈 결과 : %f", sub(num1, num2));
		System.out.printf("곱셈 결과 : %f", mul(num1, num2));
		System.out.printf("나누기 결과 : %f", div(num1, num2));

		System.out.println();
		System.out.println("실습5 반지름, 가로,세로 너비, 높이를 입력해주세요.");
		
		Scanner s5 = new Scanner(System.in);
		int r = s5.nextInt();
		int w = s5.nextInt();
		int h = s5.nextInt();
		double doubleW = s5.nextDouble();
		double doubleH=s5.nextDouble();
		System.out.printf("반지름이 %d인 원의 크기 : %.1f",r,getArea(r));
		System.out.printf("가로 %d, 세로 %d인 직사각형 크기 : %.1f",w,h, getArea(w,h));
		System.out.printf("밑변 %d, 높이 %d인 삼각형 넓이 : %.1f",(int)doubleW,(int)doubleH ,getArea(doubleW, doubleH));
		s.close();
		s2.close();
		s3.close();
		s4.close();
		s5.close();
		
	}

}
