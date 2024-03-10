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
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [playerVar,setPlayerVar,playerAlert,playerChat,playerFinish,playerSafety,onGameStart,onPlayerTick,blockVar,getBlockAt,getBlock,
  shatterBlock,removeBlock,blockGetVar,disableInput,hexRGB,playerChatColor,
  getRemotePlayer,getRemotePlayers,remoteVar,logicExists]);
