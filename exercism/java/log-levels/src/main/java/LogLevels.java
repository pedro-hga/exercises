public class LogLevels {

  public static String message(String logLine) {
    String[] msg = logLine.split(":");
    return msg[1].strip();
  }

  public static String logLevel(String logLine) {

    int startIndex = logLine.indexOf("[");
    int endIndex = logLine.indexOf("]");

    String level = logLine.substring(startIndex + 1, endIndex);
    return level.toLowerCase();
  }

  public static String reformat(String logLine) {
    String concatenatedMsg = message(logLine) + " " + "(" + logLevel(logLine) + ")";
    return concatenatedMsg;
  }
}
