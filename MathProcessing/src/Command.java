
public class Command {

	private int carID;
	private Instruction instr;
	private double deltav;
	private double deltat;
	
	public Command(int ID, Instruction In, double dv, double dt){
		setCarID(ID);
		setInstruction(In); 
		setDeltav(dv);
		setDeltat(dt);
	}

	public double getDeltav() {
		return deltav;
	}

	public void setDeltav(double deltav) {
		this.deltav = deltav;
	}

	public double getDeltat() {
		return deltat;
	}

	public void setDeltat(double deltat) {
		this.deltat = deltat;
	}

	public Instruction getInstruction() {
		return instr;
	}

	public void setInstruction(Instruction instr) {
		this.instr = instr;
	}

	public int getCarID() {
		return carID;
	}

	public void setCarID(int carID) {
		this.carID = carID;
	}
	
	
	
}
