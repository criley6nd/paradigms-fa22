; Name spaces
(ns library)        ; Going to work in this ns

(def x 5)           ; Map symbol x to a var
(defn average [x y] ; Map symbol average to a var
   (/ (+ x y) 2))   ; Local x and y are not vars

(println "AVERAGE of 2 and 4 %n" (average 2 4))

(def x 8)           ; Vars are mutable

(ns application)    ; Switch to new namespace

(println "Library x is = " library/x)
(println "AVERAGE of 2 and 4 =" (library/average 2 4))
(use 'library)
(println "Library x is = " x)
