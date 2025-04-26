class AnnalynsInfiltration {
  public static boolean canFastAttack(boolean knightIsAwake) {
    return (knightIsAwake == false) ? true : false;
  }

  public static boolean canSpy(
      boolean knightIsAwake, boolean archerIsAwake, boolean prisonerIsAwake) {
    return (prisonerIsAwake == true || knightIsAwake == true || archerIsAwake == true)
        ? true
        : false;
  }

  public static boolean canSignalPrisoner(boolean archerIsAwake, boolean prisonerIsAwake) {
    return (prisonerIsAwake && !archerIsAwake);
  }

  public static boolean canFreePrisoner(
      boolean knightIsAwake,
      boolean archerIsAwake,
      boolean prisonerIsAwake,
      boolean petDogIsPresent) {
    if (petDogIsPresent) {
      return !archerIsAwake;
    } else {
      return (!knightIsAwake && !archerIsAwake && prisonerIsAwake);
    }
  }
}
