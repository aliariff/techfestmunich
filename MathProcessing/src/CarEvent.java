
public class CarEvent {

	private int carID;
	private Status stat;
	private double speed;
	
	public double getSpeed() {
		return speed;
	}
	public void setSpeed(double speed) {
		this.speed = speed;
	}
	public Status getStat() {
		return stat;
	}
	public void setStat(Status stat) {
		this.stat = stat;
	}
	public int getCarID() {
		return carID;
	}
	public void setCarID(int carID) {
		this.carID = carID;
	}
}
