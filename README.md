# For In A Row

## Game instructions:
The goal of the game is to draw either a vertical, horizontal or diagonal line with fours balls of the same player chained together.
Two players take turns in threading their balls into one of the seven columns. A ball falls down as low as possible to the next
empty square within the selected column. The game immediately ends when one player connects four balls or when there is a tie.
 
 
 ## Proeject Instructions
1. Import this repository into your github account.
2. Clone the repository from your account to your computer.
3. Install the project dependencies.
4. Create new branch for your all work.
5. Change the project to meet the requirements, commit only to your work branch.
6. Make sure you projects passes all of the tests attached.


## Requirements:
- The players should have a className to be recognized with: player1, player2 
- The game board should be consisted of 7 columns, with each of them having an id: column1, column2, column3...
- Each of the columns should be consisted of 6 squares, with each of them having an id: square1, square2, square3..
- When a square is being clicked by one of the players, a sub-div will be inserted into it with the className of it's player (player1 goes first)
- Game result (victory/tie) should be represented in a modal, that is labeled with the className: winModal


## Tests:
- Board is initially empty when the game starts
- First and second squares to be clicked will gain the classNames player1 and player2 respectively
- The game can be ended with a tie (identified with a pop-up modal)
- Player can win the game by having 4 balls in a row
- Player can win the game by having 4 balls in a column
- Player can win the game by having 4 balls in an ascending diagonal line
- Player can win the game by having 4 balls in a descending diagonal line
