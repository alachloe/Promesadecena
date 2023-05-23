
function obtainInstruction(food, step) {
    return new Promise((resolve, reject) => {
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
          reject("Instruction step does not exist!");
        } else {
          resolve(instruction);
        }
      }, Math.floor(Math.random() * 1000));
    });
  }
  
  