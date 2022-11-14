import sys
import random

class Game:
    def __init__(self, fn='words.txt'):
        '''
        creates a new wordle instance
        '''

        #reads in the word list assigns it to the words set
        fp = open(fn)
        words = set()
        for word in fp:
            words.add(word.strip())
        fp.close()
        self.words = words

        #picks random word as answer
        self.answer = random.choice(tuple(words))

        #init answer arrays
        self.goodLetters = []
        self.badLetters = []
        self.correctLetters = ['']*5
        self.guesses = 0
        
        #write answer to answer.txt
        fp = open('answer.txt', 'w')
        fp.write(self.answer)
        fp.close()

    def guess(self, word):
        '''
        make a guess for the wordle instance
        returns false if more guesses can be made
        returns true if game is over
        '''
        word = word.strip().upper()

        #check if word is valid
        if word not in self.words:
            print("Enter a valid word")
            return False

        self.guesses += 1

        #check if correct word
        if word == self.answer:
            print(f"Congratulations, you correctly identified the word after {self.guesses} attempts")
            return True
        
        #go through letters in guess
        for i in range(len(word)):

            #check for correct letters
            if word[i] == self.answer[i]:
                self.correctLetters[i] = word[i]
                if word[i] not in self.goodLetters:
                    self.goodLetters.append(word[i])

            #check for good letters
            elif word[i] in self.answer:
                if word[i] not in self.goodLetters:
                    self.goodLetters.append(word[i])
            
            #check for bad letters
            else:
                if word[i] not in self.badLetters:
                    self.badLetters.append(word[i])

        #print self arrays
        print(f"Good letters= {self.goodLetters}")
        print(f"Bad letters= {self.badLetters}")
        print(f"Correct letters= {self.correctLetters}")
        print()

        #check for loss
        if self.guesses == 6:
            print(f'The answer is {self.answer}. You did not correctly guess it within {self.guesses} tries.')
            return True
        
        return False


g = Game()
while True:
    if g.guess(sys.stdin.readline()):
        break


