package myGeneric;

class Box<T extends Number>{
	private T item;

	public T getItem() {
		return item;
	}

	public void setItem(T item) {
		this.item = item;
	}
	public void print() {
		System.out.println(item);
	}

}

interface Movable{
	void Move();
}

class Car implements Movable{
	public void Move() {
		System.out.println("자동차 출발");
	}
}
//Movable이 없는 T는 용납하지 않음
class Container<T extends Movable>{
	private T item;
	public Container(T item) {
		this.item=item;
	}
	public void MoveStart() {
		item.Move();
	}
	
	public <S extends Number> S unDecide(S num) {
		return num;
	}
}
public class MyGeneric2 {
	public static void main(String[] args) {
		Box<Integer> myBox =new Box<Integer>();
		myBox.setItem(1);
		myBox.print();
		
		Container<Car> container = new Container<Car>(new Car());
		
	}



	
}
