public class ConversionDemo {
   public static void main(String[] args) {
      long a = 1;
      long b = 2;

	  // When you declare a long you need to add an “L” at the end;  as Java treats all literal numbers as ints.  
	  // Without the “L” you’ll get an overlength error.
      long min = -9223372036854775808L;
      long max = 9223372036854775807L;
      long testLongVar = 9223372036854775700L;
      int testIntVar = 10;

      System.out.println(a + b); // = 3 (long)
      System.out.println(min); // -9223372036854775808L
      System.out.println(max); // 9223372036854775807L
      System.out.println(testLongVar + testIntVar); // 9223372036854775710L

   }
}