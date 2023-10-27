package myGeneric;

import java.util.ArrayList;

class MyCustomList{
	ArrayList<String> list = new ArrayList<>();
	public void addElement(String element) {
		list.add(element);
	}
	public void removeElement(String element) {
		list.remove(element);
	}
	public void print() {
		for (String s : list) {
			System.out.print(s+" ");
		}
		System.out.println();
	}
}

class MyCustomListGeneric<T>{
	ArrayList<T> list = new ArrayList<>();
	public void addElement(T element) {
		list.add(element);
	}
	public void removeElement(T element) {
		list.remove(element);
	}

	//extends 이유 난 Number 전체를 받고 싶어서 만들었는데 
	public MyCustomListGeneric(ArrayList<? extends T> inputList) {
		for(T item :inputList) {
			list.add(item);
		}
	}
	
	
	public void print() {
		for (T s : list) {
			System.out.print(s.toString()+" ");
		}
		System.out.println();
	}
	public ArrayList<T> getList() {
		return list;
	}
	public void setList(ArrayList<? extends T> inputList) {
		for(T item : inputList) {
			list.clear();
			list.add(item);
		}
	}
}

public class MyGeneric {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		MyCustomList myList = new MyCustomList();
		myList.addElement("hi");
		myList.addElement("hi4");
		myList.addElement("hi2");
		myList.addElement("hi3");
		myList.print();
		myList.removeElement("hi");
		myList.print();
		
//		MyCustomListGeneric<String> myList2 = new MyCustomListGeneric<String>();
//		myList2.addElement("hi");
//		myList2.addElement("hi4");
//		myList2.addElement("hi2");
//		myList2.addElement("hi3");
//		myList2.print();
//		myList2.removeElement("hi");
//		myList2.print();
//		
//		MyCustomListGeneric<Number> myList3 = new MyCustomListGeneric<>();
//		myList3.addElement(1);
//		myList3.addElement(2);
//		myList3.addElement(3);
//		myList3.addElement(7);
//		myList3.addElement(4.5);
//		myList3.addElement(5);
//		myList3.print();
//		myList3.removeElement(5);
//		myList3.print();
//		
	    ArrayList<Integer> intList = new ArrayList<>();
	    intList.add(1);
	    intList.add(2);
	    intList.add(3);
	    intList.add(4);	
	    intList.add(5);
		MyCustomListGeneric<Number> myList4 = new MyCustomListGeneric<>(intList);
		//
//		MyCustomListGeneric<Object> myList5	 = myList4; 
	}

}
