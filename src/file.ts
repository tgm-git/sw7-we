const fs = require('fs');

export class File {
  public static save(path: string, data: string, callback?: Function) {
    fs.writeFile(__dirname + "/" + path, data, (err: Error) => {
      if (err) {
        console.error(err.message);
        callback(err);
      }
      if (callback) {
        callback();
      }
      console.log("write succesful");
    });
  }

  public static read(path: string, callback: Function) {
    fs.readFile(__dirname + "/" + path, 'utf8', (err: Error, data: string) => {
      if (err) {
        let tempdata = [
          {
            name: "user",
            armies: [
              {
                "name": "Penguin of doom!!",
                "bp": 37,
                "pieces": [
                  {
                    "id": 0,
                    "name": "king",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-king-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-king-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-king-256.png",
                    "svg": "../../assets/pieces/black/black-king-resource.svg",
                    "bp": 6,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": 1
                      }
                    ],
                    "notation": "K"
                  },
                  {
                    "id": 1,
                    "name": "queen",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-queen-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-queen-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-queen-256.png",
                    "svg": "../../assets/pieces/black/black-queen-resource.svg",
                    "bp": 5,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 2,
                        "y": 0
                      },
                      {
                        "x": 3,
                        "y": 0
                      },
                      {
                        "x": 4,
                        "y": 0
                      },
                      {
                        "x": 5,
                        "y": 0
                      },
                      {
                        "x": 6,
                        "y": 0
                      },
                      {
                        "x": 7,
                        "y": 0
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": -2,
                        "y": 0
                      },
                      {
                        "x": -3,
                        "y": 0
                      },
                      {
                        "x": -4,
                        "y": 0
                      },
                      {
                        "x": -5,
                        "y": 0
                      },
                      {
                        "x": -6,
                        "y": 0
                      },
                      {
                        "x": -7,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": 0,
                        "y": 2
                      },
                      {
                        "x": 0,
                        "y": 3
                      },
                      {
                        "x": 0,
                        "y": 4
                      },
                      {
                        "x": 0,
                        "y": 5
                      },
                      {
                        "x": 0,
                        "y": 6
                      },
                      {
                        "x": 0,
                        "y": 7
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 0,
                        "y": -2
                      },
                      {
                        "x": 0,
                        "y": -3
                      },
                      {
                        "x": 0,
                        "y": -4
                      },
                      {
                        "x": 0,
                        "y": -5
                      },
                      {
                        "x": 0,
                        "y": -6
                      },
                      {
                        "x": 0,
                        "y": -7
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": "Q"
                  },
                  {
                    "id": 2,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 3,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 4,
                    "name": "knight",
                    "colour": "black",
                    "mp": 2,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-knight-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-knight-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-knight-256.png",
                    "svg": "../../assets/pieces/black/black-knight-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 2,
                        "y": 1
                      },
                      {
                        "x": 1,
                        "y": 2
                      },
                      {
                        "x": -1,
                        "y": 2
                      },
                      {
                        "x": -2,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": -2
                      },
                      {
                        "x": 1,
                        "y": -2
                      },
                      {
                        "x": 2,
                        "y": -1
                      }
                    ],
                    "notation": "N"
                  },
                  {
                    "id": 5,
                    "name": "knight",
                    "colour": "black",
                    "mp": 2,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-knight-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-knight-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-knight-256.png",
                    "svg": "../../assets/pieces/black/black-knight-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 2,
                        "y": 1
                      },
                      {
                        "x": 1,
                        "y": 2
                      },
                      {
                        "x": -1,
                        "y": 2
                      },
                      {
                        "x": -2,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": -2
                      },
                      {
                        "x": 1,
                        "y": -2
                      },
                      {
                        "x": 2,
                        "y": -1
                      }
                    ],
                    "notation": "N"
                  },
                  {
                    "id": 6,
                    "name": "rook",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-rook-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-rook-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-rook-256.png",
                    "svg": "../../assets/pieces/black/black-rook-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 2,
                        "y": 0
                      },
                      {
                        "x": 3,
                        "y": 0
                      },
                      {
                        "x": 4,
                        "y": 0
                      },
                      {
                        "x": 5,
                        "y": 0
                      },
                      {
                        "x": 6,
                        "y": 0
                      },
                      {
                        "x": 7,
                        "y": 0
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": -2,
                        "y": 0
                      },
                      {
                        "x": -3,
                        "y": 0
                      },
                      {
                        "x": -4,
                        "y": 0
                      },
                      {
                        "x": -5,
                        "y": 0
                      },
                      {
                        "x": -6,
                        "y": 0
                      },
                      {
                        "x": -7,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": 0,
                        "y": 2
                      },
                      {
                        "x": 0,
                        "y": 3
                      },
                      {
                        "x": 0,
                        "y": 4
                      },
                      {
                        "x": 0,
                        "y": 5
                      },
                      {
                        "x": 0,
                        "y": 6
                      },
                      {
                        "x": 0,
                        "y": 7
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 0,
                        "y": -2
                      },
                      {
                        "x": 0,
                        "y": -3
                      },
                      {
                        "x": 0,
                        "y": -4
                      },
                      {
                        "x": 0,
                        "y": -5
                      },
                      {
                        "x": 0,
                        "y": -6
                      },
                      {
                        "x": 0,
                        "y": -7
                      }
                    ],
                    "notation": "R"
                  },
                  {
                    "id": 7,
                    "name": "rook",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-rook-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-rook-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-rook-256.png",
                    "svg": "../../assets/pieces/black/black-rook-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 2,
                        "y": 0
                      },
                      {
                        "x": 3,
                        "y": 0
                      },
                      {
                        "x": 4,
                        "y": 0
                      },
                      {
                        "x": 5,
                        "y": 0
                      },
                      {
                        "x": 6,
                        "y": 0
                      },
                      {
                        "x": 7,
                        "y": 0
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": -2,
                        "y": 0
                      },
                      {
                        "x": -3,
                        "y": 0
                      },
                      {
                        "x": -4,
                        "y": 0
                      },
                      {
                        "x": -5,
                        "y": 0
                      },
                      {
                        "x": -6,
                        "y": 0
                      },
                      {
                        "x": -7,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": 0,
                        "y": 2
                      },
                      {
                        "x": 0,
                        "y": 3
                      },
                      {
                        "x": 0,
                        "y": 4
                      },
                      {
                        "x": 0,
                        "y": 5
                      },
                      {
                        "x": 0,
                        "y": 6
                      },
                      {
                        "x": 0,
                        "y": 7
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 0,
                        "y": -2
                      },
                      {
                        "x": 0,
                        "y": -3
                      },
                      {
                        "x": 0,
                        "y": -4
                      },
                      {
                        "x": 0,
                        "y": -5
                      },
                      {
                        "x": 0,
                        "y": -6
                      },
                      {
                        "x": 0,
                        "y": -7
                      }
                    ],
                    "notation": "R"
                  },
                  {
                    "id": 8,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 9,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 10,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 11,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 12,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 13,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 14,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 15,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  }
                ]
              },
              {
                "name": "Army lawl",
                "bp": 39,
                "pieces": [
                  {
                    "id": 16,
                    "name": "king",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-king-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-king-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-king-256.png",
                    "svg": "../../assets/pieces/black/black-king-resource.svg",
                    "bp": 6,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": 1
                      }
                    ],
                    "notation": "K"
                  },
                  {
                    "id": 17,
                    "name": "queen",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-queen-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-queen-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-queen-256.png",
                    "svg": "../../assets/pieces/black/black-queen-resource.svg",
                    "bp": 5,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 2,
                        "y": 0
                      },
                      {
                        "x": 3,
                        "y": 0
                      },
                      {
                        "x": 4,
                        "y": 0
                      },
                      {
                        "x": 5,
                        "y": 0
                      },
                      {
                        "x": 6,
                        "y": 0
                      },
                      {
                        "x": 7,
                        "y": 0
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": -2,
                        "y": 0
                      },
                      {
                        "x": -3,
                        "y": 0
                      },
                      {
                        "x": -4,
                        "y": 0
                      },
                      {
                        "x": -5,
                        "y": 0
                      },
                      {
                        "x": -6,
                        "y": 0
                      },
                      {
                        "x": -7,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": 0,
                        "y": 2
                      },
                      {
                        "x": 0,
                        "y": 3
                      },
                      {
                        "x": 0,
                        "y": 4
                      },
                      {
                        "x": 0,
                        "y": 5
                      },
                      {
                        "x": 0,
                        "y": 6
                      },
                      {
                        "x": 0,
                        "y": 7
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 0,
                        "y": -2
                      },
                      {
                        "x": 0,
                        "y": -3
                      },
                      {
                        "x": 0,
                        "y": -4
                      },
                      {
                        "x": 0,
                        "y": -5
                      },
                      {
                        "x": 0,
                        "y": -6
                      },
                      {
                        "x": 0,
                        "y": -7
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": "Q"
                  },
                  {
                    "id": 18,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 19,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 20,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 21,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 22,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 23,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 24,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 25,
                    "name": "bishop",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-bishop-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-bishop-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-bishop-256.png",
                    "svg": "../../assets/pieces/black/black-bishop-resource.svg",
                    "bp": 3,
                    "movement": [
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": ""
                  },
                  {
                    "id": 26,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 27,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 28,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  },
                  {
                    "id": 29,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  }
                ]
              },
              {
                "name": "Army 1337",
                "bp": 12,
                "pieces": [
                  {
                    "id": 30,
                    "name": "king",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-king-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-king-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-king-256.png",
                    "svg": "../../assets/pieces/black/black-king-resource.svg",
                    "bp": 6,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -1,
                        "y": 1
                      }
                    ],
                    "notation": "K"
                  },
                  {
                    "id": 31,
                    "name": "queen",
                    "colour": "black",
                    "mp": 7,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-queen-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-queen-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-queen-256.png",
                    "svg": "../../assets/pieces/black/black-queen-resource.svg",
                    "bp": 5,
                    "movement": [
                      {
                        "x": 1,
                        "y": 0
                      },
                      {
                        "x": 2,
                        "y": 0
                      },
                      {
                        "x": 3,
                        "y": 0
                      },
                      {
                        "x": 4,
                        "y": 0
                      },
                      {
                        "x": 5,
                        "y": 0
                      },
                      {
                        "x": 6,
                        "y": 0
                      },
                      {
                        "x": 7,
                        "y": 0
                      },
                      {
                        "x": -1,
                        "y": 0
                      },
                      {
                        "x": -2,
                        "y": 0
                      },
                      {
                        "x": -3,
                        "y": 0
                      },
                      {
                        "x": -4,
                        "y": 0
                      },
                      {
                        "x": -5,
                        "y": 0
                      },
                      {
                        "x": -6,
                        "y": 0
                      },
                      {
                        "x": -7,
                        "y": 0
                      },
                      {
                        "x": 0,
                        "y": 1
                      },
                      {
                        "x": 0,
                        "y": 2
                      },
                      {
                        "x": 0,
                        "y": 3
                      },
                      {
                        "x": 0,
                        "y": 4
                      },
                      {
                        "x": 0,
                        "y": 5
                      },
                      {
                        "x": 0,
                        "y": 6
                      },
                      {
                        "x": 0,
                        "y": 7
                      },
                      {
                        "x": 0,
                        "y": -1
                      },
                      {
                        "x": 0,
                        "y": -2
                      },
                      {
                        "x": 0,
                        "y": -3
                      },
                      {
                        "x": 0,
                        "y": -4
                      },
                      {
                        "x": 0,
                        "y": -5
                      },
                      {
                        "x": 0,
                        "y": -6
                      },
                      {
                        "x": 0,
                        "y": -7
                      },
                      {
                        "x": 1,
                        "y": 1
                      },
                      {
                        "x": 2,
                        "y": 2
                      },
                      {
                        "x": 3,
                        "y": 3
                      },
                      {
                        "x": 4,
                        "y": 4
                      },
                      {
                        "x": 5,
                        "y": 5
                      },
                      {
                        "x": 6,
                        "y": 6
                      },
                      {
                        "x": 7,
                        "y": 7
                      },
                      {
                        "x": 1,
                        "y": -1
                      },
                      {
                        "x": 2,
                        "y": -2
                      },
                      {
                        "x": 3,
                        "y": -3
                      },
                      {
                        "x": 4,
                        "y": -4
                      },
                      {
                        "x": 5,
                        "y": -5
                      },
                      {
                        "x": 6,
                        "y": -6
                      },
                      {
                        "x": 7,
                        "y": -7
                      },
                      {
                        "x": -1,
                        "y": 1
                      },
                      {
                        "x": -2,
                        "y": 2
                      },
                      {
                        "x": -3,
                        "y": 3
                      },
                      {
                        "x": -4,
                        "y": 4
                      },
                      {
                        "x": -5,
                        "y": 5
                      },
                      {
                        "x": -6,
                        "y": 6
                      },
                      {
                        "x": -7,
                        "y": 7
                      },
                      {
                        "x": -1,
                        "y": -1
                      },
                      {
                        "x": -2,
                        "y": -2
                      },
                      {
                        "x": -3,
                        "y": -3
                      },
                      {
                        "x": -4,
                        "y": -4
                      },
                      {
                        "x": -5,
                        "y": -5
                      },
                      {
                        "x": -6,
                        "y": -6
                      },
                      {
                        "x": -7,
                        "y": -7
                      }
                    ],
                    "notation": "Q"
                  },
                  {
                    "id": 32,
                    "name": "pawn",
                    "colour": "black",
                    "mp": 1,
                    "hitpoints": 1,
                    "attack": 1,
                    "image": "../../assets/pieces/black/256/black-pawn-256.png",
                    "imageWhite": "../../assets/pieces/white/256/white-pawn-256.png",
                    "imageBlack": "../../assets/pieces/black/256/black-pawn-256.png",
                    "svg": "../../assets/pieces/black/black-pawn-resource.svg",
                    "bp": 1,
                    "movement": [
                      {
                        "x": 0,
                        "y": -1
                      }
                    ],
                    "notation": "",
                    "firstMove": true
                  }
                ]
              }
            ]
          },
          {
            name: "tom",
            armies: []
          }
        ];
        // create file
        fs.writeFile(path, JSON.stringify(tempdata), (err) => {
            if (err) return console.error(err);
            callback(JSON.stringify(tempdata));
        })
      } else {
        callback(data);
      }
    });
  }

  public static test() {
    return "testing";
  }
}


