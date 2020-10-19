
import * as Blockly from 'blockly/core';  // eslint-disable-line no-unused-vars

// function getGlobalVariablesStatement(block, addLineReturn) {
//   if(addLineReturn=== undefined) {
//     addLineReturn = true;
//   }
//   // taken from blockly/blob/master/generators/python/procedures.js
//   var globals = [];
//   var workspace = block.workspace;
//   var varName;
//   var variables = workspace.getAllVariables() || [];
//   for (var i = 0, variable; variable = variables[i]; i++) {
//     varName = variable.name;
//       globals.push(Blockly.Python.variableDB_.getName(varName,
//           Blockly.Variables.NAME_TYPE));
//   }
//   var globals = globals.length ? '  global ' + globals.join(', ') + (addLineReturn?'\n':'') : '';
//   return globals;
// }

Blockly.JavaScript['motor_forward'] = function(block) { // eslint-disable-line no-unused-vars
  var code ='drivar.motor_move(2000)\n'; // eslint-disable-line no-undef
  return code;// eslint-disable-line no-undef
};

Blockly.JavaScript['motor_backward'] = function(block) { // eslint-disable-line no-unused-vars
    var code ='drivar.motor_move(2000, -200)\n'; // eslint-disable-line no-undef
    return code;// eslint-disable-line no-undef
  };
  

// Blockly.Python['motor_forward'] = function(block) { // eslint-disable-line no-unused-vars
//   code+='drivar.motor_move(durationInMs=2000)\n'; // eslint-disable-line no-undef
//   return code;// eslint-disable-line no-undef
// };

// Blockly.Python['motor_backward'] = function(block) {// eslint-disable-line no-unused-vars
//   code+='drivar.motor_move(direction=Drivar.BACKWARD,durationInMs=2000)\n';// eslint-disable-line no-undef
//   return code;// eslint-disable-line no-undef
// };

// Blockly.Python['motor_turn'] = function(block) {// eslint-disable-line no-unused-vars
//   code+='drivar.motor_turn(durationInMs=2000)\n';// eslint-disable-line no-undef
//   return code;// eslint-disable-line no-undef
// };