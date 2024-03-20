/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';


// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

/*
const addText = {
  'type': 'add_text',
  'message0': 'Add text %1 with color %2',
  'args0': [
    {
      'type': 'input_value',
      'name': 'TEXT',
      'check': 'String',
    },
    {
      'type': 'input_value',
      'name': 'COLOR',
      'check': 'Colour',
    },
  ],
  'previousStatement': null,
  'nextStatement': null,
  'colour': 160,
  'tooltip': '',
  'helpUrl': '',
};
*/

const playerVar = {
  'type' : 'player_var',
  'message0' : 'Player %1',
  'args0': [
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "health", "health" ],
        [ "max health", "maxhealth" ],
        [ "rotation", "rotation" ],
        [ "speed", "speed" ],
        [ "jump", "jump" ],
        [ "acceleration", "accel" ],
        [ "gravity", "gravity" ],
        [ "fov", "fov" ],
        [ "x velocity", "xvelocity" ],
        [ "y velocity", "yvelocity" ],
        [ "x position", "x" ],
        [ "y position", "y" ],
        [ "next x position", "xpos" ],
        [ "next y position", "ypos" ],
        [ "safe x position", "safex" ],
        [ "safe y position", "safey" ],
        [ "camera x position", "camerax" ],
        [ "camera y position", "cameray" ],
        [ "camera stiffness", "stiffness" ],
        [ "invulnerability time", "recoverytimer" ],
        [ "stun time", "hurttimer" ],
        [ "frost time", "frost" ],
        [ "mouse x position", "mousex" ],
        [ "mouse y position", "mousey" ],
        [ "coins", "coins"],
        [ "outline color", "outline"],
        [ "outline thickness", "outlinethickness"],
      ]
    }
  ],
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  "output": "Number",
};

const setPlayerVar = {
  'type' : 'set_player_var',
  'message0' : 'Set player %1 to %2',
  'args0': [
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "health", "health" ],
        [ "max health", "maxhealth" ],
        [ "rotation", "rotation" ],
        [ "speed", "speed" ],
        [ "jump", "jump" ],
        [ "acceleration", "accel" ],
        [ "gravity", "gravity" ],
        [ "fov", "fov" ],
        [ "x velocity", "xvelocity" ],
        [ "y velocity", "yvelocity" ],
        [ "x position", "x" ],
        [ "y position", "y" ],
        [ "next x position", "xpos" ],
        [ "next y position", "ypos" ],
        [ "safe x position", "safex" ],
        [ "safe y position", "safey" ],
        [ "camera x position", "camerax" ],
        [ "camera y position", "cameray" ],
        [ "camera stiffness", "stiffness" ],
        [ "invulnerability time", "recoverytimer" ],
        [ "stun time", "hurttimer" ],
        [ "frost time", "frost" ],
        [ "mouse x position", "mousex" ],
        [ "mouse y position", "mousey" ],
        [ "coins", "coins"],
        [ "outline color", "outline"],
        [ "outline thickness", "outlinethickness"],
        [ "opacity", "alpha"],
      ]
    },
    {
      "type": "input_value",
      "name": "VALUE"
    }
  ],
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
};

const playerAlert = {
  'type' : 'player_alert',
  'message0' : 'Send an alert with text %1',
  'args0': [
    {
      "type": "input_value",
      "name": "text"
    }
  ],
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
}

const playerChat = {
  'type' : 'player_chat',
  'message0' : 'Send a chat message with text %1',
  'args0': [
    {
      "type": "input_value",
      "name": "text"
    },
  ],
  'colour' : 90,
  //'inputsInline': true,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
}

const playerFinish = {
  'type' : 'player_finish',
  'message0' : "Make the player finish the level",
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
}

const playerSafety = {
  'type' : 'player_safety',
  'message0' : "Return the player to the last safe position",
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
}

const onGameStart = {
  "type": "on_game_start",
  "message0": "On game start %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 55,
  "tooltip": "Runs the code within it when the match starts",
  "helpUrl": "https://pr3hub.com/lua/modules/game.html#start"
}

const onPlayerTick = {
  "type": "on_player_tick",
  "message0": "On player tick %1 %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "code"
    }
  ],
  "colour": 55,
  "tooltip": "Runs the code within it on every tick while the player is alive.",
  "helpUrl": "https://pr3hub.com/lua/modules/player.html#tick"
}

const blockVar = {
  "type" : "block_var",
  "message0" : "Block",
  "colour" : 15,
  "tooltip" : "The block that the player touched to run lua",
  "helpUrl" : "https://pr3hub.com/lua/modules/block.html",
  "output" : "Block",
}

const getBlockAt = {
  "type" : "get_block_at",
  "message0" : "Get the block at coordinates (%1, %2)",
  "args0": [
    {
      "type": "input_value",
      "name": "x",
      "check" : "Number",
    },
    {
      "type": "input_value",
      "name": "y",
      "check" : "Number",
    }
  ],
  "colour" : 15,
  "tooltip" : "Returns the block found at absolute coordinates (x,y)",
  "helpUrl" : "https://pr3hub.com/lua/modules/block.html",
  "output" : "Block",
}

const getBlock = {
  "type" : "get_block",
  "message0" : "From %1, get the block at (%2, %3)",
  "args0": [
    {
      "type": "input_value",
      "name": "block",
      "check" : "Block",
    },
    {
      "type": "input_value",
      "name": "x",
      "check" : "Number",
    },
    {
      "type": "input_value",
      "name": "y",
      "check" : "Number",
    }
  ],
  "colour" : 15,
  "tooltip" : "Returns the block found at (x,y) relative to the block",
  "helpUrl" : "https://pr3hub.com/lua/modules/block.html",
  "output" : "Block",
}

const shatterBlock = {
  "type" : "block_shatter",
  "message0" : "Shatter %1",
  "args0": [
    {
      "type": "input_value",
      "name": "block",
      "check" : "Block",
    },
  ],
  "colour" : 15,
  "tooltip" : "Shatters the block",
  "helpUrl" : "https://pr3hub.com/lua/modules/block.html",
  'nextStatement': null,
  'previousStatement': null,
}

const removeBlock = {
  "type" : "block_remove",
  "message0" : "Remove %1",
  "args0": [
    {
      "type": "input_value",
      "name": "block",
      "check" : "Block",
    },
  ],
  "colour" : 15,
  "tooltip" : "Removes the block",
  "helpUrl" : "https://pr3hub.com/lua/modules/block.html",
  'nextStatement': null,
  'previousStatement': null,
}

const blockGetVar = {
  'type' : 'block_get_var',
  'message0' : "Block %1's %2",
  'args0': [
    {
      "type": "input_value",
      "name": "block",
      "check" : "Block",
    },
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "health", "health" ],
        [ "x position", "xpos" ],
        [ "y position", "ypos" ],
      ]
    }
  ],
  'colour' : 15,
  'tooltip' : "Get block information",
  'helpUrl': "https://pr3hub.com/lua/modules/block.html",
  "output": "Number",
};

const disableInput = {
  'type' : 'disable_input',
  'message0' : 'Disable %1 for %2 ticks',
  'args0': [
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "up", "up" ],
        [ "down", "down" ],
        [ "left", "left" ],
        [ "right", "right" ],
        [ "space", "space" ],
      ]
    },
    {
      "type": "input_value",
      "name": "ticks",
      "check": "Number"
    }
  ],
  'colour' : 90,
  'helpUrl': "https://pr3hub.com/lua/modules/player.html",
  'nextStatement': null,
  'previousStatement': null,
};

const hexRGB = {
  "type": "hex_rgb",
  "implicitAlign0": "RIGHT",
  "message0": "RGB Color from %1 Red %2 %3 Green %4 %5 Blue %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "field_number",
      "name": "red",
      "value": 0,
      "min": 0,
      "max": 255,
      "precision": 1
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "green",
      "value": 0,
      "min": 0,
      "max": 255,
      "precision": 1
    },
    {
      "type": "input_dummy",
      "align": "RIGHT"
    },
    {
      "type": "field_number",
      "name": "blue",
      "value": 0,
      "min": 0,
      "max": 255,
      "precision": 1
    }
  ],
  "inputsInline": false,
  "output": "Number",
  "colour": 35,
  "tooltip": "Specify a color with RGB values",
}

const playerChatColor = {
  "type": "player_chat_color",
  "message0": "Send a chat message with text %1 and color %2",
  "args0": [
    {
      "type": "input_value",
      "name": "text"
    },
    {
      "type": "input_value",
      "name": "color",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip": "Sends a chat message with a specified text and color",
  "helpUrl": "https://pr3hub.com/lua/modules/player.html#chat"
}

const getRemotePlayer = {
  "type" : "get_remote_player",
  "message0" : "Remote player of index %1",
  'args0' : [
    {
      "type": "input_value",
      "name": "index",
      "check": "Number",
    }
  ],
  "colour" : 75,
  "tooltip" : "Gets the remote player of a specified index",
  "output" : "Player",
}

const getRemotePlayers = {
  "type" : "get_remote_players",
  "message0" : "List of all players",
  "colour" : 75,
  "tooltip" : "Gets a list of all players",
  "output" : "Array",
}

const remoteVar = {
  "type" : "remote_player_var",
  "message0": "%1's %2",
  'args0': [
    {
      "type": "input_value",
      "name": "player",
      "check": "Player",
    },
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "health", "health" ],
        [ "rotation", "rotation" ],
        [ "speed", "speed" ],
        [ "jump", "jump" ],
        [ "acceleration", "accel" ],
        [ "x position", "x" ],
        [ "y position", "y" ],
        [ "outline color", "outline" ],
        [ "outline thickness", "outlinethickness" ],
        [ "opacity", "alpha" ],
      ]
    }
  ],
  "output": "Number",
  "colour": 75,
  "tooltip": "Retrieve data from a remote player",
}

const logicExists = {
  "type" : "logic_exists",
  "message0": "%1 exists",
  'args0' : [
    {
      "type": "input_value",
      "name": "item",
    }
  ],
  "output": 'Boolean',
  "colour": 210,
  "tooltip": "Check if a value exists",
}

const setRemoteVar = {
  "type" : "set_remote_player_var",
  "message0": "Set %1 of %2 to %3",
  'args0': [
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "outline color", "outline" ],
        [ "outline thickness", "outlinethickness" ],
        [ "opacity", "alpha" ],
      ]
    },
    {
      "type": "input_value",
      "name": "player",
      "check": "Player",
    },
    {
      "type": "input_value",
      "name": "value",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  
  "previousStatement": null,
  "nextStatement": null,
  "colour": 75,
  "tooltip": "Set local data of a remote player",
}

const setTeam = {
  "type" : "set_team",
  "message0" : "Set player's team to %1",
  "args0" : [
    {
      "type": "input_value",
      "name": "team",
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip" : "Sets the player's team",
}

const playerKeyDown = {
  "type" : "player_key_down",
  "message0": "Player is holding %1",
  'args0' : [
    {
      "type": "field_dropdown",
      "name": "var",
      "options": [
        [ "down", "down" ],
        [ "up", "up" ],
        [ "left", "left" ],
        [ "right", "right" ],
        [ "space", "space" ],
      ]
    },
  ],
  "output": 'Boolean',
  "colour": 90,
  "tooltip": "Check if a player is holding down a main key",
}

const playSound = {
  "type" : "play_sound",
  "message0" : "Play the sound %1 with a volume of %2",
  "args0" : [
    {
      "type": "field_dropdown",
      "name": "sound",
      "options": [
        [ "jetpack", "0" ],
        [ "level start", "1" ],
        [ "sword", "2" ],
        [ "lightning", "3" ],
        [ "coin", "4" ],
        [ "jump", "5" ],
        [ "item block", "6" ],
        [ "black hole", "7" ],
        [ "rocket launcher", "8" ],
        [ "shatter", "9" ],
        [ "sad block", "10" ],
        [ "laser gun hit", "11" ],
        [ "ready", "12" ],
        [ "explosion", "13" ],
        [ "teleport", "14" ],
        [ "match end", "15" ],
        [ "shield", "16" ],
        [ "shield extra", "17" ],
        [ "bow draw", "18" ],
        [ "water enter", "19" ],
        [ "happy block", "20" ],
        [ "speed burst end", "21" ],
        [ "speed burst", "22" ],
        [ "bump", "23" ],
        [ "cheer", "24" ],
        [ "laser gun shot", "25" ],
        [ "ouch", "26" ],
        [ "bouncy block", "27" ],
        [ "bow fire", "28" ],
        [ "water exit", "29" ],
        [ "portable block", "30" ],
        [ "superjump", "31" ],
        [ "angel wings", "32" ],
        [ "water effect 1", "33" ],
        [ "water effect 2", "34" ],
        [ "water effect 3", "35" ],
        [ "water effect 4", "36" ],
        [ "freeze ray", "37" ],
        [ "snowball hit", "38" ],
        [ "napalm", "39" ],
        [ "heart", "40" ],
        [ "C3 piano note", "41" ],
        [ "D3 piano note", "42" ],
        [ "E3 piano note", "43" ],
        [ "F3 piano note", "44" ],
        [ "G3 piano note", "45" ],
        [ "A4 piano note", "46" ],
        [ "B4 piano note", "47" ],
        [ "C4 piano note", "48" ],
      ]
    },
    {
      "type": "input_value",
      "name": "volume",
      "check" : "Number",
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 90,
  "tooltip" : "Sets the player's team",
}

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [playerVar,setPlayerVar,playerAlert,playerChat,playerFinish,playerSafety,onGameStart,onPlayerTick,blockVar,getBlockAt,getBlock,
  shatterBlock,removeBlock,blockGetVar,disableInput,hexRGB,playerChatColor,
  getRemotePlayer,getRemotePlayers,remoteVar,logicExists,setRemoteVar,setTeam,playerKeyDown,
  playSound]);
