package my_first_java;

import java.util.Scanner;

public class Pratice2ndArray {

	public static void main(String[] args) {
//		double[][] score = {{3.5,3.7},{4.0,4.1},{4.0,4.0},{4.5,4.5},};
//		int[] intArray = { 1,2,3,4,5,6};
//		double sum=0;
//		int n = 0;
//		for(int i=0; i<score.length;i++) {
//			for(int j=0;j<score[i].length;j++) {
//				sum+=score[i][j];
//				n++;
//			}
//		}
//		System.out.println(sum/n);
//		
//		for(int arr : intArray) {
//			System.out.print(arr+" ");
//		}
		
		Scanner s = new Scanner(System.in);
		String[] strArray = s.nextLine().split(" ");
		int[] intArray = new int[5];
		int sum =0;
		for(int i=0; i<intArray.length;i++) {
			intArray[i]=Integer.parseInt(strArray[i]);
		}
		
		for (int num : intArray) {
			sum+=num;
		}
		System.out.println((double)sum/intArray.length);
		s.close();
	}

}
