package java_interface;

interface Playable{
	void play();
	void pause();
	void stop();

}
class Mp3Player implements Playable{

	@Override
	public void play() {
		System.out.println("음악재생");
		
	}

	@Override
	public void pause() {
		System.out.println("음악 일시정지");
		
	}

	@Override
	public void stop() {
		System.out.println("음악정지");
		
	}
	
}

class DVDPlayer implements Playable{

	@Override
	public void play() {
		System.out.println("영화재생");
		
	}

	@Override
	public void pause() {
		System.out.println("영화 일시정지");
		
	}

	@Override
	public void stop() {
		System.out.println("영화 정지");
		
	}
	
}
public class InterPratice {
	public static void main(String[] args) {
		DVDPlayer dvd= new DVDPlayer();
		Mp3Player mp3 = new Mp3Player();
		dvd.play();
		dvd.pause();
		dvd.play();
		dvd.stop();
		System.out.println("--------------------------------");
		mp3.play();
		mp3.pause();
		mp3.play();
		mp3.stop();
		
	}
}
