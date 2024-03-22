/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/lua';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!

export const forBlock = Object.create(null);

/*
forBlock['add_text'] = function (block, generator) {
  const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
  const color =
    generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'0xffffff'";

  const addText = generator.provideFunction_(
      'addText',
      `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

  // Add text to the output area.
  const outputDiv = document.getElementById('output');
  const textEl = document.createElement('p');
  textEl.innerText = text;
  textEl.style.color = color;
  outputDiv.appendChild(textEl);
}`
  );
  // Generate the function call for this block.
  const code = `${addText}(${text}, ${color});\n`;
  return code;
};
*/

forBlock['player_var'] = function (block, generator) {
  const fieldValue = block.getFieldValue('var');
  const code = `tolua(player.${fieldValue})`;
  return [code,Order.ATOMIC];
}

forBlock['set_player_var'] = function (block, generator) {
  const fieldValue = block.getFieldValue('var');
  const innerCode = generator.valueToCode(block, 'VALUE',Order.NONE);
  const code = `player.${fieldValue} = ${innerCode}\n`;
  return code;
}

forBlock['player_alert'] = function (block, generator) {
  const innerCode = generator.valueToCode(block, 'text',Order.NONE);
  const code = `player.alert(${innerCode})\n`;
  return code;
}

forBlock['player_chat'] = function (block, generator) {
  const textCode = generator.valueToCode(block, 'text',Order.NONE);
  const code = `player.chat(${textCode})\n`;
  return code;
}

forBlock['player_finish'] = function(block, generator) {
  return "player.finish()\n";
}

forBlock['player_safety'] = function(block, generator) {
  return "player.safety()\n";
}

forBlock['on_game_start'] = function(block, generator) {
  const statement = generator.statementToCode(block, 'code');
  const code = 'game.start.addListener(function()\n' + statement + 'end)';
  return code;
}

forBlock['on_player_tick'] = function(block, generator) {
  const statement = generator.statementToCode(block, 'code');
  const code1 = "do local t; t = game.newTimer(33,-1,function() if player then player.tick.addListener(function()\n";
  const code2 = "end) t.destroy() end end) end"
  return code1 + statement + code2;
}

forBlock['block_var'] = function (block, generator) {
  return ["block",Order.ATOMIC];
}

forBlock['get_block_at'] = function (block, generator) {
  const innerX = generator.valueToCode(block, 'x', Order.NONE);
  const innerY = generator.valueToCode(block, 'y', Order.NONE);
  const code = `game.level.getBlockAt(${innerX},${innerY})`;
  return [code,Order.ATOMIC];
}

forBlock['get_block'] = function (block, generator) {
  const innerBlock = generator.valueToCode(block, 'block', Order.HIGH);
  const innerX = generator.valueToCode(block, 'x', Order.NONE);
  const innerY = generator.valueToCode(block, 'y', Order.NONE);
  const code = `${innerBlock}.getblock(${innerX},${innerY})`;
  return [code,Order.ATOMIC];
}

forBlock['block_shatter'] = function (block, generator) {
  const innerBlock = generator.valueToCode(block, 'block', Order.HIGH);
  const code = `${innerBlock}.shatter()\n`;
  return code;
}

forBlock['block_remove'] = function (block, generator) {
  const innerBlock = generator.valueToCode(block, 'block', Order.HIGH);
  const code = `${innerBlock}.remove()\n`;
  return code;
}

forBlock['block_get_var'] = function (block, generator) {
  const innerBlock = generator.valueToCode(block, 'block', Order.HIGH);
  const innerChoice = block.getFieldValue('var');
  const code = `tolua(${innerBlock}.${innerChoice})`;
  return [code,Order.ATOMIC];
}

forBlock['disable_input'] = function (block, generator) {
  const innerChoice = block.getFieldValue('var');
  const innerVal = generator.valueToCode(block, 'ticks', Order.NONE);
  const code = `player.disable${innerChoice}(${innerVal})\n`;
  return code;
}

function decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding = typeof (padding) === "undefined" || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
        hex = "0" + hex;
    }

    return hex;
}

forBlock['hex_rgb'] = function (block,generator) {
  const red = decimalToHex(block.getFieldValue('red'),2);
  const green = decimalToHex(block.getFieldValue('green'),2);
  const blue = decimalToHex(block.getFieldValue('blue'),2);
  const code = `0x${red}${green}${blue}`;
  return [code,Order.ATOMIC];
}

forBlock['player_chat_color'] = function (block, generator) {
  const textCode = generator.valueToCode(block, 'text',Order.NONE);
  const innerColor = generator.valueToCode(block, 'color', Order.NONE);
  const code = `player.chat(${textCode},${innerColor})\n`;
  return code;
}

forBlock['get_remote_player'] = function(block, generator) {
  const innerCode = generator.valueToCode(block, 'index',Order.NONE);
  const code = `game.getPlayer(${innerCode})`;
  return [code,Order.ATOMIC];
}

forBlock['get_remote_players'] = function(block, generator) {
  return ["totable(game.getAllPlayers())",Order.ATOMIC];
}

forBlock['remote_player_var'] = function(block, generator) {
  const innerPlayer = generator.valueToCode(block, 'player',Order.NONE);
  const innerChoice = block.getFieldValue('var');
  const code = `tolua(${innerPlayer}.${innerChoice})`;
  return [code,Order.ATOMIC];
}

forBlock['logic_exists'] = function(block, generator) {
  const innerObject = generator.valueToCode(block, 'item', Order.NONE);
  const code = `type(tolua(${innerObject})) ~= "nil"`;
  return [code,Order.RELATIONAL];
}

forBlock['set_remote_player_var'] = function(block, generator) {
  const innerPlayer = generator.valueToCode(block, 'player',Order.NONE);
  const innerChoice = block.getFieldValue('var');
  const innerValue = generator.valueToCode(block, 'value',Order.NONE);
  const code = `${innerPlayer}.${innerChoice} = ${innerValue}\n`;
  return code;
}

forBlock['set_team'] = function (block, generator) {
  const innerCode = generator.valueToCode(block, 'team',Order.NONE);
  const code = `player.team = ${innerCode}\n`;
  return code;
}

forBlock["player_key_down"] = function (block, generator) {
  const innerChoice = block.getFieldValue('var');
  const code = `tolua(player.${innerChoice}pressed)`;
  return [code,Order.ATOMIC];
}

forBlock['play_sound'] = function (block, generator) {
  const innerCode = generator.valueToCode(block, 'volume',Order.NONE);
  const innerChoice = block.getFieldValue('sound');
  const code = `player.playsound(${innerChoice},${innerCode})\n`;
  return code;
}

forBlock['switch_blocks'] = function (block, generator) {
  const x1 = generator.valueToCode(block, 'x1',Order.NONE);
  const y1 = generator.valueToCode(block, 'y1',Order.NONE);
  const x2 = generator.valueToCode(block, 'x2',Order.NONE);
  const y2 = generator.valueToCode(block, 'y2',Order.NONE);
  const code = `game.level.switchblocks(${x1},${y1},${x2},${y2})\n`;
  return code;
}
