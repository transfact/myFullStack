package classPratice;

public class PraticeFinal {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vehicle c1 = new Car(120,"아반떼");
		Vehicle c2 = new Car(130,"소나타");
		Vehicle c3 = new Car(200,"BMW");
		
		Vehicle a1 = new Airplane(365,"대한항공");
		Vehicle a2 = new Airplane(400,"보잉");
		Vehicle[] vehicles = {c1,a1,c2,c3,a2};
		
		//instanceof 객체가 어떤거의 인스턴지인지 확인가능
		
		for(Vehicle v : vehicles) {
			if(v instanceof Flyable) {
				((Airplane) v).Fly();
			}
			v.move();

		}
	}

}
