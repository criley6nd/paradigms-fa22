package datastructures;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Arrays;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.TreeSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class BFS {
    public List<String> traverse(String root, Map<String,List<String>> graph){
        // queue with nodes to be visited
        Queue<String> toVisit = new LinkedList<>();
        toVisit.add(root); // initializes queue with root node
        // list of visited nodes
        List<String> output = new ArrayList<>();
        // set of visited nodes, to avoid getting stuck
        Set<String> visited = new HashSet<>();

        // keep visiting while there are nodes in the queue
        while(!toVisit.isEmpty()){
            String node = toVisit.poll();           // front of the queue
            if(!visited.contains(node)){            // node wasn't visited yet
                output.add(node);                   // adds to the output
                visited.add(node);                  // mark as visited
                toVisit.addAll(graph.get(node));    // adds all children to the queue
            }
        }
        // returns the visited nodes, in order
        return output;
    }

    
}