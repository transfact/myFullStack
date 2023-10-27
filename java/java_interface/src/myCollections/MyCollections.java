package myCollections;

import java.util.*;

public class MyCollections {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> arrayList =new ArrayList<>();
		
		List<String> linkedList = new LinkedList<>();
		linkedList.add("1");
		linkedList.add("1");
		linkedList.add("1");
		System.out.println(linkedList);
		
		Set<String> hashSet =new HashSet<>();
		hashSet.add("A");
		hashSet.add("B");
		hashSet.add("C");
		hashSet.add("A");
		System.out.println(hashSet);
		
		Set<String> Test =new HashSet<>(linkedList);
		System.out.println(Test);
		
		Set<String> Test2 = new LinkedHashSet<>();
		System.out.println(Test2);
		
		Set<String> treeSet = new TreeSet<>();
		treeSet.add("B");
		treeSet.add("A");
		treeSet.add("C");
		System.out.println(treeSet);
		
		Map<String,Integer> hashMap = new HashMap<String, Integer>();
		hashMap.put("one", 1);
		hashMap.put("two", 1);
		hashMap.put("three", 1);
		hashMap.get("one");
		System.out.println(hashMap);
		
		Map<String,Integer> link = new LinkedHashMap<>();
		link.put("two",2);
		link.put("three",3);
		link.put("four",4);
		System.out.println(link);
		
		Map<String,Integer> treeMap =new TreeMap<>();
		treeMap.put("two",2);
		treeMap.put("three",3);
		treeMap.put("four",4);
		System.out.println(treeMap);
		
	}

}
