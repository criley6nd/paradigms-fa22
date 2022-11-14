
package multithreading;

import java.util.Random;
import java.util.concurrent.Executors;
import java.util.concurrent.ExecutorService;


public class PrintTaskExecutorApp {

    public static void main(String[] args) {

        Thread t1 = new Thread(new PrintTask("task1"));
        Thread t2 = new Thread(new PrintTask("task2"));
        System.out.println("Starting the executor");
        ExecutorService threadExecutor = Executors.newCachedThreadPool();
        threadExecutor.execute(t1);
        threadExecutor.execute(t2);
        threadExecutor.shutdown(); // it does not accept any more jobs & waits for the threads to finish.
        System.out.println("End main");
    }
}