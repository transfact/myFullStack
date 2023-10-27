package myCollections;

import java.util.*;


public class CollectionPratice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner s = new Scanner(System.in);

//		Set<Integer> hs = new HashSet<>();
//		while(true) {
//			int k = s.nextInt();
//			hs.add(k);
//			if(k==-1) {
//				break;
//			}
//		}
//		System.out.println(hs);

		
		
		Map<String,Integer> map = new HashMap<>();
		while(true) {
			System.out.print("이름 입력, 종료 입력시 종료");
			String name = s.nextLine();
			if(name.equals("종료")) {
				break;
			}
			System.out.print("나이 입력");
			int age= s.nextInt();
			s.nextLine();
			if(!map.containsKey(name)) {
				map.put(name, age);
			}else {
				map.replace(name, age);
			}
		}
		s.close();
		System.out.println(map);
	}

}
