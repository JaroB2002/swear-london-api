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
      try {
        let parsedData = JSON.parse(data);

        if (parsedData.action === "update") {
          //update the orders list
          primus.write({
            action: "update",
            data: {
              count: parsedData.data.ordersCount,
              shoes: parsedData.data.shoes,
            },
          });
        }
        if (parsedData.action === "post") {
          //update the orders list with the new order
          primus.write({
            action: "post",
            data: {
              shoe: parsedData.data.shoe,
            },
          });
        }
        if (parsedData.action === "delete") {
          //update the orders list with the new order
          primus.write({
            action: "delete",
            data: {
              count: parsedData.data.ordersCount - 1,
            },
          });
        }
      } catch (err) {
        console.log("de error is:", err);
      }
    });
  });
};

//export
module.exports.go = go;
