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