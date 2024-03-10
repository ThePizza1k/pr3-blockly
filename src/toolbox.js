/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export const toolbox = {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Logic',
      'categorystyle': 'logic_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'controls_if',
        },
        {
          'kind': 'block',
          'type': 'logic_compare',
        },
        {
          'kind': 'block',
          'type': 'logic_operation',
        },
        {
          'kind': 'block',
          'type': 'logic_negate',
        },
        {
          'kind': 'block',
          'type': 'logic_boolean',
        },
        {
          'kind': 'block',
          'type': 'logic_null',
        },
        {
          'kind': 'block',
          'type': 'logic_ternary',
        },
        {
          'kind': 'block',
          'type': 'logic_exists',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Loops',
      'categorystyle': 'loop_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'controls_repeat_ext',
          'inputs': {
            'TIMES': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'controls_whileUntil',
        },
        {
          'kind': 'block',
          'type': 'controls_for',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'TO': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
            'BY': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'controls_forEach',
        },
        {
          'kind': 'block',
          'type': 'controls_flow_statements',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Math',
      'categorystyle': 'math_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'math_number',
          'fields': {
            'NUM': 123,
          },
        },
        {
          'kind': 'block',
          'type': 'math_arithmetic',
          'inputs': {
            'A': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'B': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_single',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 9,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_trig',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 45,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_constant',
        },
        {
          'kind': 'block',
          'type': 'math_number_property',
          'inputs': {
            'NUMBER_TO_CHECK': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_round',
          'fields': {
            'OP': 'ROUND',
          },
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 3.1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_on_list',
          'fields': {
            'OP': 'SUM',
          },
        },
        {
          'kind': 'block',
          'type': 'math_modulo',
          'inputs': {
            'DIVIDEND': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 64,
                },
              },
            },
            'DIVISOR': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_constrain',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 50,
                },
              },
            },
            'LOW': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'HIGH': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 100,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_random_int',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'TO': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 100,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_random_float',
        },
        {
          'kind': 'block',
          'type': 'math_atan2',
          'inputs': {
            'X': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'Y': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Text',
      'categorystyle': 'text_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'text',
        },
        {
          'kind': 'block',
          'type': 'text_multiline',
        },
        {
          'kind': 'block',
          'type': 'text_join',
        },
        {
          'kind': 'block',
          'type': 'text_append',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': '',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_length',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_isEmpty',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': '',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_indexOf',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
            'FIND': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_charAt',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_getSubstring',
          'inputs': {
            'STRING': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_changeCase',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_trim',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_count',
          'inputs': {
            'SUB': {
              'shadow': {
                'type': 'text',
              },
            },
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_replace',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'text',
              },
            },
            'TO': {
              'shadow': {
                'type': 'text',
              },
            },
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_reverse',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Lists',
      'categorystyle': 'list_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'lists_create_with',
        },
        {
          'kind': 'block',
          'type': 'lists_create_with',
        },
        {
          'kind': 'block',
          'type': 'lists_repeat',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 5,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_length',
        },
        {
          'kind': 'block',
          'type': 'lists_isEmpty',
        },
        {
          'kind': 'block',
          'type': 'lists_indexOf',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_getIndex',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_setIndex',
          'inputs': {
            'LIST': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_getSublist',
          'inputs': {
            'LIST': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_split',
          'inputs': {
            'DELIM': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': ',',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_sort',
        },
        {
          'kind': 'block',
          'type': 'lists_reverse',
        },
      ],
    },
    {
      'kind' : 'category',
      'name' : 'Colors',
      'colour' : 35,
      'contents' : [
        {
          'kind': 'block',
          'type': 'hex_rgb',
        },
      ]
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'Events',
      'colour': '55',
      'contents': [
        {
          'kind': 'block',
          'type': 'on_game_start',
        },
        {
          'kind': 'block',
          'type': 'on_player_tick',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Player',
      'colour': '90',
      'contents': [
        {
          'kind': 'block',
          'type': 'player_var',
        },
        {
          'kind': 'block',
          'type': 'set_player_var',
        },
        {
          'kind': 'block',
          'type': 'player_alert',
        },
        {
          'kind': 'block',
          'type': 'player_chat',
        },
        {
          'kind': 'block',
          'type': 'player_chat_color',
        },
        {
          'kind': 'block',
          'type': 'player_finish',
        },
        {
          'kind': 'block',
          'type': 'player_safety',
        },
        {
          'kind': 'block',
          'type': 'disable_input',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Remote Player',
      'colour': '75',
      'contents': [
        {
          'kind': 'block',
          'type': 'get_remote_player',
        },
        {
          'kind': 'block',
          'type': 'get_remote_players',
        },
        {
          'kind': 'block',
          'type': 'remote_player_var',
        },
      ]
    },
    {
      'kind': 'category',
      'name': 'Block',
      'colour': '15',
      'contents': [
        {
          'kind': 'block',
          'type': 'block_var',
        },
        {
          'kind': 'block',
          'type': 'get_block_at',
        },
        {
          'kind': 'block',
          'type': 'get_block',
        },
        {
          'kind': 'block',
          'type': 'block_shatter',
        },
        {
          'kind': 'block',
          'type': 'block_remove',
        },
        {
          'kind': 'block',
          'type': 'block_get_var',
        },
      ]
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'Variables',
      'categorystyle': 'variable_category',
      'custom': 'VARIABLE',
    },
    {
      'kind': 'category',
      'name': 'Functions',
      'categorystyle': 'procedure_category',
      'custom': 'PROCEDURE',
    },
  ],
};
