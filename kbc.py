print("Welcome to the \"Kaun Banega Corerpati\" game")
print("There are total 4 Question")
print("You do not have any lifelines")
print("One incorrect answer and u will exit from the game")
print("The following are the prize pool","\n1 Correct Q - 2000 rs","\n2 Correct Q's - 5000 rs","\n3 Correct Q's - 7000 rs","\n4 Correct Q's - 10000 rs")
a=input("Have u read all rules and r u ready to start? ")
if(a==("yes")):
    print("Lets start")
    print("Q.1) What is the capital of India ?")
    t1=("a.Mumbai","b.Delhi","c.Ahmedabad","d.Bengaluru")
    print(t1)
    a1=input()
    if(a1==("b")):
        print("Correct answer","\nNow lets proceed to next Q","\nTotal prize - 2000 rs")
        print("Q.2) Which place is also knwon as \"Scotland\" of India ?")
        t2=("a.Darjeeling","b.Coonor","c.Shimla","d.Coorg")
        print(t2)
        a2=input()
        if(a2==("d")):
            print("Correct answer","\nNow lets proceed to next Q","\nTotal prize - 5000 rs")
            print("Q.3) Which place is also known as \"Mini Switerzland\" of India ?")
            t3=("a.Khajjair","b.Phalgam","c.Nubra","d.Meghalaya")
            print(t3)
            a3=input()
            if(a3==("a")):
                print("Correct answer","\nNow lets proceed to last Q","\nTotal prize - 7000 rs")
                print("Q.4) Which is the highest saltwater lake of India ?")
                t4=("a.Dal lake","b.Nainital lake","c.Pangong lake","d.Fateh Sagar lake")
                print(t4)
                a4=input()
                if(a4==("c")):
                     print("Correct answer","\nYou have won the Jackpot","\nTotal prize - 10000 rs")
                     exit
                else:
                    print("Incorrect answer","You are now out of game with prize money of 7000 rs")
                    exit
            else:
                print("Incorrect answer","You are now out of game with prize money of 5000 rs")

                
        else:
            print("Incorrect answer","You are now out of game with prize money of 2000 rs")

    else:
        print("Incorrect answer","You are out of game now")
        exit
elif(a==("no")):
    exit
else:
    print("Wrong choice entered...plz enter either \"yes\" or \"no\"")