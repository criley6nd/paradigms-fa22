(require '[clojure.string :as str])
(def rows (str/split (slurp "graph.csv") #"\n"))
(defn splitRow [x] (str/split x #","))
(def columns (map splitRow rows)