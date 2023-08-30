# Palindrome Checker
This algorithm checks if a given string is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.

## How it works:
1. First, the string is cleaned to remove any non-alphanumeric characters and is converted to lowercase.

2. Then, the cleaned string's characters are added to both a stack and a queue. This is to check characters from the front and the back of the string simultaneously.

3. The algorithm pops a character from the stack and dequeues a character from the queue, then compares them. If they are not equal at any point, the string is not a palindrome.
If all characters are equal and the stack is exhausted, the string is a palindrome.
