
public class Computation {



public static Command computeCommand(CarEvent e, Truck follower){
	
	int id = follower.getID();
	double followerSpeed = follower.getSpeed();
	double eventSpeed = e.getSpeed();
	Status eventStatus = e.getStat();
	
	Instruction instr;
	
	if(eventStatus == Status.obstacle){
		
		instr = Instruction.slowdown;
	}
	
	
	Status s = e.getStat();
	
	Command c = new Command();
	
	
	return c;
}

}