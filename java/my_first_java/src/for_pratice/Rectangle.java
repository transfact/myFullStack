package for_pratice;

public class Rectangle {
	private int width;
	private int height;
	private static int num=0;
	
	public Rectangle(int width, int height) {
		this.width=width;
		this.height=height;
		num++;
	}

	public Rectangle(int width) {
		this.width=width;
		num++;
	}
	public int getNum() {
		return num;
	}

	public int getWidth() {
		return width;
	}
	
	public int calcArea() {
		return this.width*this.height;
	}

	public void setWidth(int width) {
		this.width = width;
	}

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
}
