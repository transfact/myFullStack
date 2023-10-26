package my_first_java;
import java.util.ArrayList;


public class MyArrayList {
	public static void main(String[] args) {
		ArrayList<String> list = new ArrayList<>();
		list.add("google");
		list.add(0,"amazon");
		System.out.println(list);

		ArrayList<String> list2 = new ArrayList<>();
		list2.add("apple");
		list2.add("samsung");
		System.out.println(list2);
		list2.addAll(list);
		System.out.println(list2 );
		System.out.println(list2.size() );
		//파람이 있을까? 없을까 여부
		System.out.println(list2.contains("apple"));
		System.out.println(list2.get(1));
		System.out.println(list2.set(2,"현대"));
		
		System.out.println(list2.indexOf("google") );
		
		System.out.println(list.isEmpty());
		list2.clear();
		System.out.println(list2);
		
		
		
		
	}
}
