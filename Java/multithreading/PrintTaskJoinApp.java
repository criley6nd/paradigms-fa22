package multithreading;
/**
 * Main class for the PrintTask example that uses Thread.joing() and Thread.wait()
 * 
 */ 
public class PrintTaskJoinApp {
    public static void main(String[] args) {
        try {
            Thread t1 = new Thread(new PrintTask("task1"));
            Thread t2 = new Thread(new PrintTask("task2"));
            System.out.println("Starting the two threads");
            t1.start();
            t2.start();
            System.out.println("Prints right away");
            t1.join();
            t2.join(); // waits for the threads to die.
            System.out.println("Prints after all threads finished");
        } catch (InterruptedException e) {
            System.out.println(e.getMessage());
        }
    }

}