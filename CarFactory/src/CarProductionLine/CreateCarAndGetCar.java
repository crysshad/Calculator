package CarProductionLine;

public class CreateCarAndGetCar {

	public String carName;
	public String color;
	public String carType;

	public String createCar(String carName, String color, String carType) {

		this.carName = carName;
		this.color = color;
		this.carType = carType;

		return carName + " is create";

	}

	public String getCar(String carName) {

		
		carName = this.carName;
		String color =this.color;
		

		return color;

	}

}
