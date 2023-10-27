package myGeneric;
import java.util.*;

public class MyTest {
	public static int sumLessThan(int[] intArr,int k) {
		Arrays.sort(intArr);

		int sum =0;
		int i=0;
		while(true) {
			sum+=intArr[i];
			if(intArr[++i]>=k) {
				break;
			}
			if(i==intArr.length-1) {
				break;
			}
		}
		return sum;
	}
	public static String findIndices(int[] arr,int target) {
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr.length;j++) {
				if((arr[i] + arr[j])==target) {
					if(i<=j) {
						int[] temp = {i,j};
						return "["+i+","+j+"]";
					}else {
						int[] temp = {j,i};
						return "["+j+","+i+"]";
					}
				}
			}
		}
		return null;
	}
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int[] nums3 = {3142,433,1,6,2,4,7,4,3,34,234,234,4342};
//		System.out.println(sumLessThan(nums1,10));
		int[] nums1= {2,5,8,3,7,11,13,17,19};
		System.out.println(findIndices(nums1,36));
		
	}

}
