package java_interface;
//1. 추사화 : 메서드 선언해 상속받은 클래스 사용
//2 . 하나의 인터페이스는 여러 클래스에 implements 될 수 있음
//3. 하나의 인터페이스를 통해 여러 클래스에서 공통의 동작을 정의가능.
//4. 여러클래스는 자신에 맞게 interface 구현
public interface GameConsole {
	void up();
	void down();
	void right();
	void left();
}
