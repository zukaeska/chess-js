var startingPosition = `{
    "positions":{
        "quantity":32, 
        "pieces":[
                {
                "position":"A_1",
                "name":"white_rook"
            },
            {
                "position":"A_2",
                "name":"white_pawn"
            },
            {
                "position":"A_7",
                "name":"black_pawn"
            },
            {
                "position":"A_8",
                "name":"black_rook"
            },
            {
                "position":"B_1",
                "name":"white_knight"
            },
            {
                "position":"B_2",
                "name":"white_pawn"
            },
            {
                "position":"B_7",
                "name":"black_pawn"
            },
            {
                "position":"B_8",
                "name":"black_knight"
            },
            {
                "position":"C_1",
                "name":"white_bishop"
            },
            {
                "position":"C_2",
                "name":"white_pawn"
            },
            {
                "position":"C_7",
                "name":"black_pawn"
            },
            {
                "position":"C_8",
                "name":"black_bishop"
            },
            {
                "position":"D_1",
                "name":"white_queen"
            },
            {
                "position":"D_2",
                "name":"white_pawn"
            },
            {
                "position":"D_7",
                "name":"black_pawn"
            },
            {
                "position":"D_8",
                "name":"black_queen"
            },
            {
                "position":"E_1",
                "name":"white_king"
            },
            {
                "position":"E_2",
                "name":"white_pawn"
            },
            {
                "position":"E_7",
                "name":"black_pawn"
            },
            {
                "position":"E_8",
                "name":"black_king"
            },
            {
                "position":"F_1",
                "name":"white_bishop"
            },
            {
                "position":"F_2",
                "name":"white_pawn"
            },
            {
                "position":"F_7",
                "name":"black_pawn"
            },
            {
                "position":"F_8",
                "name":"black_bishop"
            },
            {
                "position":"G_1",
                "name":"white_knight"
            },
            {
                "position":"G_2",
                "name":"white_pawn"
            },
            {
                "position":"G_7",
                "name":"black_pawn"
            },
            {
                "position":"G_8",
                "name":"black_knight"
            },
            {
                "position":"H_1",
                "name":"white_rook"
            },
            {
                "position":"H_2",
                "name":"white_pawn"
            },
            {
                "position":"H_7",
                "name":"black_pawn"
            },
            {
                "position":"H_8",
                "name":"black_rook"
            }
        ] 
    }    
}`;
var games = 
    `{
        "number1": {
            "total_move": "24",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_2",
                    "ending_position": "E_4"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_7",
                    "ending_position": "C_5"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "F_3"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_7",
                    "ending_position": "E_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_4"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "C_5",
                    "ending_position": "D_4"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "kill",
                    "name": "knight",
                    "starting_position": "F_3",
                    "ending_position": "D_4"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_8",
                    "ending_position": "C_6"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "D_4",
                    "ending_position": "B_5"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_7",
                    "ending_position": "D_6"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_2",
                    "ending_position": "C_4"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_1",
                    "ending_position": "C_3"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "A_7",
                    "ending_position": "A_6"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_5",
                    "ending_position": "A_3"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_6",
                    "ending_position": "D_5"
                },
                {
                    "number": "17",
                    "color": "white",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "C_4",
                    "ending_position": "D_5"
                },
                {
                    "number": "18",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "E_6",
                    "ending_position": "D_5"
                },
                {
                    "number": "19",
                    "color": "white",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "E_4",
                    "ending_position": "D_5"
                },
                {
                    "number": "20",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "C_6",
                    "ending_position": "B_4"
                },
                {
                    "number": "21",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_1",
                    "ending_position": "E_2"
                },
                {
                    "number": "22",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_8",
                    "ending_position": "C_5"
                },
                {
                    "number": "23",
                    "color": "white",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_1",
                    "ending_position": "G_1"
    
                },
                {
                    "number": "24",
                    "color": "black",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_8",
                    "ending_position": "G_8"
                }
            ]
        },
        "number2": {
            "total_move": "20",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_4"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_7",
                    "ending_position": "D_5"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_2",
                    "ending_position": "C_4"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_7",
                    "ending_position": "C_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "F_3"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_1",
                    "ending_position": "C_3"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_7",
                    "ending_position": "E_6"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_2",
                    "ending_position": "E_3"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_8",
                    "ending_position": "D_7"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_1",
                    "ending_position": "D_3"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "D_5",
                    "ending_position": "C_4"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "kill",
                    "name": "bishop",
                    "starting_position": "D_3",
                    "ending_position": "C_4"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "B_7",
                    "ending_position": "B_5"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "C_4",
                    "ending_position": "D_3"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_8",
                    "ending_position": "D_6"
                },
                {
                    "number": "17",
                    "color": "white",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_1",
                    "ending_position": "G_1"
                },
                {
                    "number": "18",
                    "color": "black",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_8",
                    "ending_position": "G_8"
                },
                {
                    "number": "19",
                    "color": "white",
                    "move_type": "usual",
                    "name": "queen",
                    "starting_position": "D_1",
                    "ending_position": "C_2"
                },
                {
                    "number": "20",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "C_8",
                    "ending_position": "B_7"
                }
            ]
        },
        "number3": {
            "total_move": "22",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_4"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_2",
                    "ending_position": "C_4"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_7",
                    "ending_position": "E_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_1",
                    "ending_position": "C_3"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_8",
                    "ending_position": "B_4"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_2",
                    "ending_position": "E_3"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_7",
                    "ending_position": "C_5"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "A_2",
                    "ending_position": "A_3"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "kill",
                    "name": "bishop",
                    "starting_position": "B_4",
                    "ending_position": "C_3"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "B_2",
                    "ending_position": "C_3"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "B_7",
                    "ending_position": "B_6"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "F_1",
                    "ending_position": "D_3"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bishop",
                    "starting_position": "C_8",
                    "ending_position": "C_7"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "F_2",
                    "ending_position": "F_3"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_8",
                    "ending_position": "C_6"
                },
                {
                    "number": "17",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "E_2"
                },
                {
                    "number": "18",
                    "color": "black",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_8",
                    "ending_position": "G_8"
                },
                {
                    "number": "19",
                    "color": "white",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_1",
                    "ending_position": "G_1"
                },
                {
                    "number": "20",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "C_6",
                    "ending_position": "A_5"
                },
                {
                    "number": "21",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_3",
                    "ending_position": "E_4"
                },
                {
                    "number": "22",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "F_6",
                    "ending_position": "E_8"
                }
            ]
        },
        "number4": {
            "total_move": "18",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_2",
                    "ending_position": "E_4"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_7",
                    "ending_position": "E_5"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "F_3"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_4"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "E_5",
                    "ending_position": "D_4"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_4",
                    "ending_position": "E_5"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "F_6",
                    "ending_position": "E_4"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "kill",
                    "name": "queen",
                    "starting_position": "D_1",
                    "ending_position": "D_4"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_7",
                    "ending_position": "D_6"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "E_5",
                    "ending_position": "D_6"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "kill",
                    "name": "knight",
                    "starting_position": "E_4",
                    "ending_position": "D_6"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_1",
                    "ending_position": "C_3"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_8",
                    "ending_position": "C_6"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "queen",
                    "starting_position": "D_4",
                    "ending_position": "F_4"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "D_6",
                    "ending_position": "F_5"
                },
                {
                    "number": "17",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "F_1",
                    "ending_position": "B_5"
                },
                {
                    "number": "18",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "F_8",
                    "ending_position": "D_6"
                }
            ]
        },
        "number5": {
            "total_move": "16",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "F_3"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_7",
                    "ending_position": "D_5"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_2",
                    "ending_position": "C_4"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_7",
                    "ending_position": "C_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_4"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "D_5",
                    "ending_position": "C_4"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_2",
                    "ending_position": "E_4"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "B_7",
                    "ending_position": "B_5"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "A_2",
                    "ending_position": "A_4"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_4",
                    "ending_position": "E_5"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "F_6",
                    "ending_position": "D_5"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "A_4",
                    "ending_position": "B_5"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "kill",
                    "name": "pawn",
                    "starting_position": "C_6",
                    "ending_position": "B_5"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "B_2",
                    "ending_position": "B_3"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "usual",
                    "name": "queen",
                    "starting_position": "D_8",
                    "ending_position": "C_7"
                }
            ]
        },
        "number6": {
            "total_move": "16",
            "move": [
                {
                    "number": "1",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_2",
                    "ending_position": "C_4"
                },
                {
                    "number": "2",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_8",
                    "ending_position": "F_6"
                },
                {
                    "number": "3",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "G_2",
                    "ending_position": "G_3"
                },
                {
                    "number": "4",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "C_7",
                    "ending_position": "C_6"
                },
                {
                    "number": "5",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "F_1",
                    "ending_position": "G_2"
                },
                {
                    "number": "6",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_7",
                    "ending_position": "D_5"
                },
                {
                    "number": "7",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "B_2",
                    "ending_position": "B_3"
                },
                {
                    "number": "8",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "C_8",
                    "ending_position": "F_5"
                },
                {
                    "number": "9",
                    "color": "white",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "C_1",
                    "ending_position": "B_2"
                },
                {
                    "number": "10",
                    "color": "black",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "E_7",
                    "ending_position": "E_6"
                },
                {
                    "number": "11",
                    "color": "white",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "G_1",
                    "ending_position": "F_3"
                },
                {
                    "number": "12",
                    "color": "black",
                    "move_type": "usual",
                    "name": "bioshop",
                    "starting_position": "F_8",
                    "ending_position": "D_6"
                },
                {
                    "number": "13",
                    "color": "white",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_1",
                    "ending_position": "G_1"
                },
                {
                    "number": "14",
                    "color": "black",
                    "move_type": "usual",
                    "name": "knight",
                    "starting_position": "B_8",
                    "ending_position": "D_7"
                },
                {
                    "number": "15",
                    "color": "white",
                    "move_type": "usual",
                    "name": "pawn",
                    "starting_position": "D_2",
                    "ending_position": "D_3"
                },
                {
                    "number": "16",
                    "color": "black",
                    "move_type": "castling",
                    "name": "king",
                    "starting_position": "E_8",
                    "ending_position": "G_8"
                }
            ]
        }
}`;
var playersInfo = `{
    "players":[
        {
            "player_id" : "player1",
            "name" : "Garry Kasparov",
            "nation" :"Russian",
            "birthdate" : "April 13, 1963",
            "world_titles" : 14,
            "Peak_rating" : 2879
        },
        {
            "player_id" : "player2",
            "name" : "Viswanathan Anand",
            "nation" : "Indian",
            "birthdate" : "December 11, 1969",
            "world_titles" : 5,
            "Peak_rating" : 2817
        },
        {
            "player_id" : "player3",
            "name" : "Max Euwe",
            "nation" : "holland",
            "birthdate" : "May 20, 1901",
            "world_titles" : 3,
            "Peak_rating" : 2530 
        }
    ]
}`;
var gamesInfo = `{
    "player1":{
        "games":[
                {
                "game_id":"number1",
                "date":"1985, November, 9",
                "style":"black",
                "players":[
                    "Garry Kasparov",
                    "Anatoly Karpov"
                ]
            },
            {
                "game_id":"number4",
                "date":"1996, December, 5",
                "style":"white",
                "players":[
                    "Garry Kasparov",
                    "Politis Dionisos"
                ]
            }
        ]
    },
    "player2":{
        "games":[
                {
                "game_id":"number2",
                "date":"2013, January, 16",
                "style":"black",
                "players":[
                    "Viswanathan Anand",
                    "Levon Aronian"
                ]
            },
            {
                "game_id":"number5",
                "date":"2007, December, 5",
                "style":"white",
                "players":[
                    "Viswanathan Anand",
                    "Antonio Martin Manzano"
                ]
            }
        ]
    },
    "player3":{
            "games":[
                {
                "game_id":"number3",
                "date":"1953, september, 9",
                "style":"black",
                "players":[
                    "Max Euwe",
                    "Efim Geller"
                ]
            },
            {
                "game_id":"number6",
                "date":"1955, January, 26",
                "style":"white",
                "players":[
                    "Max Euwe",
                    "J Graafland"
                ]
            }
        ]
    }
}`;