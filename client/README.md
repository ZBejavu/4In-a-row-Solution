# For In A Row

## Game instructions:
The goal of the game is to draw either a vertical, horizontal or diagonal line with fours balls of the same player chained together.
Two players take turns in threading their balls into one of the seven columns. A ball falls down as low as possible to the next
empty square within the selected column. The game immediately ends when one player connects four balls or when there is a tie.
 

## Requirements:
- The players should have a className to be recognized with: player1, player2 
- The game board should be consisted of 7 columns (array of columns), with each of them having an id: column1, column2, column3...
- Each of the columns should be consisted of 6 squares (array of squares), with each of them having an id: square1, square2, square3..
- When a square is being clicked by one of the players, it will gain the className of it's player (player1 goes first)
- Game result (victory/tie) should be represented in a modal, that is labeled with the className: winModal


## Tests:
- Board is initially empty when the game starts
- First and second squares to be clicked will gain the classNames player1 and player2 respectively
- The game can be ended with a tie (identified with a pop-up modal)
- Player can win the game by having 4 balls in a row
- Player can win the game by having 4 balls in a column
- Player can win the game by having 4 balls in an ascending diagonal line
- Player can win the game by having 4 balls in a descending diagonal line
