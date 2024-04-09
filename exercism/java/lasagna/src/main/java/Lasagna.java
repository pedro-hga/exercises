public class Lasagna {

  public int expectedMinutesInOven() {
    return 40;
  }

  public int remainingMinutesInOven(int minutesInOven) {
    return expectedMinutesInOven() - minutesInOven;
  }

  public int preparationTimeInMinutes(int numOfLayers) {
    return numOfLayers * 2;
  }

  public int totalTimeInMinutes(int numOfLayers, int timeInOven) {
    return preparationTimeInMinutes(numOfLayers) + timeInOven;
  }
  // TODO: define the 'totalTimeInMinutes()' method
}
