package for_pratice;
import java.util.ArrayList;
import java.util.Scanner;

public class PraticeManager {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);
		ArrayList<Rectangle> arrRect = new ArrayList<Rectangle>(); 
		while(true) {
			System.out.println("너비와 높이를 입력, 0 0 입력시 종료.");
			int w= s.nextInt();
			int h= s.nextInt();
			if(w==0 && h==0) {
				break;
			}else {
				s.nextLine();
				Rectangle rect = new Rectangle(w);
				rect.setHeight(h);
				arrRect.add(rect);
			}	
		}

		for(int i=0; i<arrRect.size();i++) {
			System.out.println("가로길이는 : "+arrRect.get(i).getWidth());
			System.out.println("세로길이는 : "+arrRect.get(i).getHeight());
			System.out.println("넓이는 : "+arrRect.get(i).calcArea());
			System.out.println("-------------------------------------------");
		}
		System.out.println("직사각형의 인스턴스의 개수 : "+arrRect.get(0).getNum());
		s.close();
	}

}
