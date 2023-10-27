package myGeneric;

class Pair <K,V>{
	private K key;
	private V value;
	public K getKey() {
		return key;
	}
	public void setKey(K key) {
		this.key = key;
	}
	public V getValue() {
		return value;
	}
	public void setValue(V value) {
		this.value = value;
	}
	public Pair(K key, V value) {
		super();
		this.key = key;
		this.value = value;
	}
	
	
}

public class MyPracticeGeneric {
	

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Pair<String,Integer> pair1= new Pair<>("One",1);
		Pair<Integer,String> pair2= new Pair<>(2,"TWO");
		System.out.println("KEY : "+pair1.getKey()+" , VALUE : "+pair1.getValue() );
		System.out.println("KEY : "+pair2.getKey()+" , VALUE : "+pair2.getValue() );

	}

}
