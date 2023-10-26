package my_first_java;

import java.util.Scanner;
import java.math.BigDecimal;
public class FirstProject {

	public static void main(String[] args) {
		System.out.println("hello world");
//		Scanner a = new Scanner(System.in);
//		String name = a.nextLine();
//		System.out.println(name);
//		a.close();
		Boolean b= 0.1+1.1 == 2.2;
		System.out.println(b);
		System.out.println(0.1+1.1);

		BigDecimal alpha = new BigDecimal("1.1");
		BigDecimal beta = new BigDecimal("0.1");
		
		
		BigDecimal sum = alpha.add(beta);
		System.out.println(sum);
		BigDecimal subtract = alpha.subtract(beta);
		System.out.println(subtract);
		
		BigDecimal mul = alpha.multiply(beta);
		System.out.println(mul);
		BigDecimal div = alpha.divide(beta);
		System.out.println(div);
		
		
		System.out.printf("%d %f",10, 11.11f).println();
		System.out.printf("%c", 'q').println();
		System.out.printf("%1f \n", 111.11111f);
		
		
		System.out.println("실습");
		//표준 입력 스트림을 나타내며, 키보드 입력을 위해 사용.
		Scanner pratice1 = new Scanner(System.in);
		

//		System.out.println("키를 입력하세요");
//		double height =pratice1.nextDouble();
//		System.out.println("결혼여부를 입력하세요");
//		boolean isSingle =pratice1.nextBoolean();  ,height,isSingle 키는 %f 이시고, 독신 여부는 %b입니다
		
		System.out.println("이름을 입력하세요");
		String name = pratice1.nextLine();
		System.out.println("나이를 입력하세요");
		int age = pratice1.nextInt();

		System.out.printf("안녕하세요, %s님 (%d) .", name,age);
		pratice1.close();
		
		char[] helloStrs = {'안','녕','하','세','요'};
		for(int i=0; i<helloStrs.length;i++) {
			System.out.print(helloStrs[i]);
		}
		System.out.println();
	}

}
