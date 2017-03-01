## Battleships tech test

#### Setup:
- `git clone https://github.com/samjbro/battleships-tech-test.git`
- `npm init`
- run tests with `npm test`

```
  User Stories (implemented)
    As a player,
    So I can set up my side of the game,
    I want to add a ship to my board.

    As a player,
    So I can control the placement of my ships,
    I want to place them at a specified location, and have them report their location.

    As a player,
    So I can avoid collisions,
    I want to be prevented from placing my ships at occupied positions.

    As a player,
    So I can know if a ship was hit,
    I want it to report a hit or miss.

    As a player,
    So I can know when a ship was sunk,
    I want it to report when it sinks.

    As a player,
    So I can know if I can keep playing,
    I want to have lost when all my ships are sunk.

  User Stories (unimplemented)
  Wave 1:
    As a player,
    So I can play a coherent game,
    I want my board to have a bounded size.

    As a player,
    So I can avoid illegal ship placement,
    I want to be prevented from placing a ship outside my board.

    As a player,
    So I can give my fleet variety,
    I want to be able to choose the size of my ship.

    As a player,
    So I can have fine control over ship placement,
    I want to specify the orientation of placed ships.

  Wave 2:
    As a player,
    So I can have a meaningful game,
    I would like to have an opponent.

    As a player,
    So I can attack my opponent,
    I would like to be able to fire on their board.

    As a player,
    So I can have a meaningful game,
    I would like my opponent and I to take turns to fire.

    As a player,
    So I can know the outcome of my moves,
    I want to know if I have hit/miss/sunk one of my opponent's ships.

    As a player,
    So I can have a meaningful game,
    I want my opponent to fire at my board on their turn.

    As a player,
    So I can consider my next shot,
    I want an overview of my hits and misses.

    As a player,
    So I know when the game is over,
    I want to be told when I have won or lost.

    Wave 3:

    As a player,
    So I can play against a human opponent,
    I want to have the option of a two-player game.
```
