
function getInstruction(food, step, callback, errorCallback) {
    setTimeout(() => {
      
      let instruction;
  
      if (food === "mashedPotatoes") {
        instruction = mashedPotatoes[step];
      } else if (food === "steak") {
        instruction = steak[step];
      } else if (food === "brusselsSprouts") {
        instruction = brusselsSprouts[step];
      } else if (food === "broccoli") {
        instruction = broccoli[step];
      }
  
      
      if (!instruction) {
        errorCallback("Instruction step does not exist!");
      } else {
        callback(instruction);
      }
    }, Math.floor(Math.random() * 1000));
  }
  
