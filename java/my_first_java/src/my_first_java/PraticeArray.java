package my_first_java;


import java.util.Arrays;
public class PraticeArray {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] intArray = new int[3][4];
		for(int i=0;i<3;i++) {
			for(int j=0;j<4;j++) {
				intArray[i][j]=i+j;
			}
		}
		for(int i=0;i<3;i++) {
			for(int j=0;j<4;j++) {
				System.out.print(intArray[i][j]+ " ");
			}
			System.out.println();
		}
		System.out.println(Arrays.toString(intArray));
		
		int[][] intArray2 = new int[2][];
		intArray2[0] = new int[5];
		intArray2[1] = new int[19];
		
		for(int i=0;i<intArray2.length;i++) {
			for(int j=0;j<intArray2[i].length;j++) {
				System.out.print(intArray2[i][j]+ " ");
			}
			System.out.println();
		}
	}

}
