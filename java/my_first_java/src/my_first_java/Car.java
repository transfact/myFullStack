package my_first_java;

public class Car {
	private int speed;
	
	//public : 가능한 전부, 다른 패키지도 가능
	//default 같은 클래스, 같은 패키지
	//protected 상속만
	//private 객체 내부만
	public Car() {
		this.speed=0;	
	}
	public Car(int speed) {
		this.speed=speed;
	}
	
	public void start() {
		System.out.println("차 시작속도 : "+this.speed);
	}
	public int getSpeed() {
		return speed;
	}

	public void setSpeed(int speed) {
		//잘못된 값에서 부터 객체를 보호
		if(speed <= 0) {
			System.out.println("속도는 음수가 될 수 없습니다.");
		}
		this.speed = speed;
	}
	
	public int changeSpeed(int speed) {
		this.speed =this.speed+speed;
		if(this.speed<0) {
			this.speed =0;
		}
		return this.speed;
	}
}
