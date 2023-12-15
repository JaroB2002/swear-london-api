//require primus
const Primus = require("primus");

//function to start primus
const go = (server) => {
  let primus = new Primus(server, {});

  //check if primus is working, then log
  primus.on("connection", (spark) => {
    console.log("connected");

    //check if data received from client, then log
    spark.on("data", (data) => {
      console.log(data);
      try{
        let parsedData = JSON.parse(data);
        console.log(`received data from client`, parsedData);
        primus.write({
          action: "updateCount",
          data: {
            count: parsedData.data.ordersCount
          }
        });
      }catch (err){
        console.log("de error is:", err);
      }
    });
  });
};

//export
module.exports.go = go;
