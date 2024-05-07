# Matthew Goldberg

[Expose](https://mattqgoldberg.github.io/sp24-cse110-lab5/expose)
[Expose](https://mattqgoldberg.github.io/sp24-cse110-lab5/explore)

1. Using a unit test to test a send message feature would be difficult. It would require you to have 2 instances of the client running in order to test both sending and receiving functionality. It is difficult to test how this send message function would interact with the server and the other client so a unit test is likely not good. You could test if the function is sending the correct format of message but not how it interacts with the other parts.

2. Something like this is very simple and effective to use a unit test for. You can very easily check the input and output of the function you are testing to see if the 80 character limit is working.