
// Iteration 1 - using callbacks
getInstruction(
    "mashedPotatoes",
    0,
    (paso) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${paso}</li>`;
     
      getInstruction(
        "mashedPotatoes",
        1,
        
        (step) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step}</li>`;
        
          getInstruction(
            "mashedPotatoes",
            2,
           
            (step) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step}</li>`;
             
              getInstruction(
                "mashedPotatoes",
                3,
                (step) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step}</li>`;
                 
                  getInstruction(
                    "mashedPotatoes",
                    4,
                    (step) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step}</li>`;
                      getInstruction(
                        "mashedPotatoes",
                        5,
                        (step) => {
                          document.querySelector(
                            "#mashedPotatoes"
                          ).innerHTML += `<li>${step}</li>`;
                          document
                            .querySelector("#mashedPotatoesImg")
                            .removeAttribute("hidden");
                        },
                        (error) => console.log(error)
                      );
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
  // Iteration 2 - using promises
  obtainInstruction("steak", 0)
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 1);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 2);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 3);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 4);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 5);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 6);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      return obtainInstruction("steak", 7);
    })
    .then((paso) => {
      document.querySelector("#steak").innerHTML += `<li>${paso}</li>`;
      setTimeout(() => {
        document.querySelector("#steak").innerHTML += `<li>Steak is ready</li>`;
        document.querySelector("#steakImg").removeAttribute("hidden");
      }, 1000);
    })
    .catch((error) => console.log(error));
  
  // Iteration 3 using async/await
 
  const makeBroccoliTryCatch = async () => {
    try {
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 0)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 1)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 2)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 3)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 4)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 5)}</li>`;
      document.querySelector(
        "#broccoli"
      ).innerHTML += `<li>${await obtainInstruction("broccoli", 6)}</li>`;
      setTimeout(() => {
        document.querySelector(
          "#broccoli"
        ).innerHTML += `<li>Broccoli is ready</li>`;
        document.querySelector("#broccoliImg").removeAttribute("hidden");
      }, 1000);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };
  makeBroccoliTryCatch();
  
  let paso0 = obtainInstruction("brusselsSprouts", 0);
  let paso1 = obtainInstruction("brusselsSprouts", 1);
  let paso2 = obtainInstruction("brusselsSprouts", 2);
  let paso3 = obtainInstruction("brusselsSprouts", 3);
  let paso4 = obtainInstruction("brusselsSprouts", 4);
  let paso5 = obtainInstruction("brusselsSprouts", 5);
  let paso6 = obtainInstruction("brusselsSprouts", 6);
  let paso7 = obtainInstruction("brusselsSprouts", 7);

  
  const brusselSproutsPromiseAll = () => {
    Promise.all([paso0, paso1, paso2, paso3, paso4, paso5, paso6, paso7])
      .then((arrayDePasos) => {
        arrayDePasos.forEach((pasoIndividual) => {
          console.log(pasoIndividual);
          document.querySelector(
            "#brusselsSprouts"
          ).innerHTML += `<li>${pasoIndividual}</li>`;
        });
        setTimeout(() => {
          document.querySelector(
            "#brusselsSprouts"
          ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
          document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
        }, 1000);
      });
    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels Sprouts are ready!</li>`;
  };
  brusselSproutsPromiseAll();