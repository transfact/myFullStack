package my_first_java;

import java.util.ArrayList;
import java.util.Scanner;

public class PraticeArrayList {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		ArrayList<String> al = new ArrayList<String>();
		Scanner s = new Scanner(System.in);
		while(true) {
			System.out.print("문자를 입력해주세요 : ");
			String str = s.nextLine();
			if(str.equals("exit")) {
				break;
			}else {
				al.add(str);
			}
		}
		for(int i=0; i<al.size();i++) {
			System.out.println(al.get(i));
		}
		s.close();
		
 	}

}
