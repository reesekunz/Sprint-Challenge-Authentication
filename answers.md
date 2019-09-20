#1. What is the purpose of using sessions?

- Sessions allows the server to store information about the client and persist that client information across multiple requests. For example, we can use sesions to persist authentication for the client so that they don't have to contiunually login every time they make a new server request.

#2. What does bcrypt do to help us store passwords in a secure manner.

- Bcrpt gives us the ability to implement Cyptographic Hashes, which allows us to hash our passwords being stored in the database.

#3. What does bcrypt do to slow down attackers?

- Bcrpyt allows us to hash our information (typically passwords) multiple times, meaning that the attacker needs to know more specific details than just guessing a password. They would have to have that particular hash, know the algorithm used to hash it, and how many rounds we used to hash that password (or whatever other information we are hashing).

#4. What are the three parts of the JSON Web Token?

1.  Header
2.  Payload - where the data goes
3.  Verify signature - server can verify the data hasn't been tampered with
