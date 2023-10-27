package myGeneric;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyGeneric3 {
	//1.ArrayList 에 한정 2.그럼... Iterable 모두에게서 Object는 안됨.
	public static void print(Iterable<?> arr) {
        for (Object item : arr) {
            System.out.println(item);
        }
	}
	//Object도 지우고 싶다.
	
	public static void print2(Iterable<?> arr) {
        for (Object item : arr) {
            System.out.println(item);
        }
	}
	
	public void processList(ArrayList<? extends Number> list) {
		//add는 불가
		for(Number num : list) {
			System.out.println(num);
		}
	}
	
	public <T extends Number> void addToList(ArrayList<T> list,T item) {
		list.add(item);
	}

	//와일드카드 <? extends T>는 읽기 전용으로 주로 사용
	public static void main(String[] args) {
	    ArrayList<Integer> intList = new ArrayList<>();
	    intList.add(1);
	    intList.add(2);
	    intList.add(3);
	    intList.add(4);	
	    intList.add(5);
	    ArrayList<Character> charList = new ArrayList<>();
	    charList.add('a');
	    charList.add('b');
	    charList.add('d');
	    charList.add('z');	
	    charList.add('b');
	    print(intList); // ! Error
	    print(charList);
	    
	}
	
}
