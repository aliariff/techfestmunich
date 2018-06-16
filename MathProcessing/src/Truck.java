
public class Truck {

	private int id;
	private double speed;
	
	public Truck(int id, int speed){
		
		this.id = id;
		this.speed = speed;
		
	}
	
	public void setspeed(double s){
		
		this.speed = s;
	}
	public double getSpeed(){
		return speed;
	}
	
	public int getID(){
		return id;
	}
	
}
