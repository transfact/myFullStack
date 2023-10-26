package java_interface;

public class Valorant implements GameConsole {

	@Override
	public void up() {
		// TODO Auto-generated method stub
		System.out.println("업");
	}

	@Override
	public void down() {
		// TODO Auto-generated method stub
		System.out.println("다운");
	}

	@Override
	public void right() {
		// TODO Auto-generated method stub
		System.out.println("오른");
		
	}

	@Override
	public void left() {
		// TODO Auto-generated method stub
		System.out.println("왼");
	}

}
