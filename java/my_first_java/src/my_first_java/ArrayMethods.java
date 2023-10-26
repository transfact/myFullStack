package my_first_java;

import java.util.Arrays;

public class ArrayMethods {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int arr[]= {1,2,3,4,5,6,7};
		int[] newArr = Arrays.copyOf(arr, 10);
		int[] newArr2 = Arrays.copyOfRange(arr, 1, 4);
		arr[2]=11;
		System.out.println(Arrays.toString(newArr));
		System.out.println(Arrays.toString(newArr2));
		int[] checkArray=new int[6]; 
		for(int i =0;i<checkArray.length;i++) {
			checkArray[i]=arr[i];
		}
		arr[2]=11;
		//역시나 얕은 복사
		System.out.println(Arrays.toString(checkArray));
		//fill : 가득 채우기
		Arrays.fill(arr, 10);
		System.out.println(Arrays.toString(arr));
		//fill (원본,시작,끝,fill값)
		Arrays.fill(arr, 2,4,9999);
		System.out.println(Arrays.toString(arr));
		
		//sort (ㅋㅋ;)
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));
		
		//그럼... 리버스는? 자바는 import안하면 리버스가 없음. 대 황 파 이 썬
		for(int i =0 ;i<arr.length/2;i++) {
			int temp = arr[i];
			arr[i]=arr[arr.length-i-1];
			arr[arr.length-i-1]=temp;
		}
		int[] reverseArr = new int[7];
		for(int i = arr.length-1, j=0; i>=0; i--,j++ ) {
			reverseArr[j]=arr[i];
		}
		System.out.println(Arrays.toString(reverseArr));
		System.out.println(Arrays.toString(arr));
		
		//1차원 배열 비교
		int newarr[]= {1,2,3,4,5,6,7};
		System.out.println(Arrays.equals(arr,newarr));
		//2차원 이상 비교
		int[][] qArr= {{1,2},{3,4}};
		int[][] qArr2= {{1,2},{3,4}};
		System.out.println(Arrays.deepEquals(qArr,qArr2));
		
		
		
		
	}

}
