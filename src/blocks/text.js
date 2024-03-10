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
        [ "coins", "coins"]
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
        [ "coins", "coins"]
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
  "nextStatement": null,
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
  "nextStatement": null,
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
// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(
    [playerVar,setPlayerVar,playerAlert,playerChat,playerFinish,playerSafety,onGameStart,onPlayerTick,blockVar,getBlockAt,getBlock,
  shatterBlock]);