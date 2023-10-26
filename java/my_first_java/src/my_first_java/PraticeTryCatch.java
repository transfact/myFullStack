package my_first_java;

import java.util.InputMismatchException;
import java.util.Scanner;

public class PraticeTryCatch {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		System.out.println("배열의 크기를 입력해주세요");
		int n=-1;
		try {
			n= s.nextInt();	
		}catch(InputMismatchException e) {
			System.out.println(e);	
			System.out.println("입력한 값이 정수가 아닙니다.");
			return;
		}
		if(n<0) {
			System.out.println("입력한 정수가 0미만입니다.");
			s.close();
			return;
		}else if(n==0) {
			System.out.println("평균은 0 입니다." );
			s.close();
			return ;
		}
		
		int[] intArray= new int[n];
		System.out.println("배열의 요소를 입력해주세요.");
		int i=0;
		while(true) {
			int k;
			while(true) {
				try {
					k= s.nextInt();
					intArray[i]=k;
					break;
				}catch(InputMismatchException e){
					System.out.println("입력한 값이 정수가 아닙니다. 다시 입력하세요.");
					s.nextLine();
				}
			}
			if(++i == n) {
				break;
			}
		}
		
		int sum =0;
		for(int a : intArray) {
			sum+=a;
		}
		System.out.println("평균은 " +(double)sum/n +"입니다." );
		s.close();
	}

}
