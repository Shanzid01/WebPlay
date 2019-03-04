# WebPlay

See demo at: https://shanzid.com/proj/WebPlay/index.html

A new and refined website version of the Android app WordPlay.
The program takes two inputs:
1) The scrambled string of letters ("Letters")
2) The desired word length of the output ("Spaces")

Although two word lists there, the program only takes the smaller word list for improved speed and accuracy.
(The bigger word list has meaningless words and often causes severe lag on lower-end devices.)

How it works:
Basically brute force. Matches each word in the dictionary to see if the letters present match the input letters.
