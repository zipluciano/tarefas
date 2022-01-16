const express = require("express");
const { confirmList } = require("../utils/constants");

module.exports = {
  async positions(req, res) {
    try {
      const { names } = await req.body;
      for (let item of names) {
        if (!confirmList.includes(item)) {
          throw new Error("Invalid name on the list");
        }
      }

      const getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const changeNumberPosition = (
        defaultPosition = getRandomInt(1, names.length - 1)
      ) => {
        const suportArray = [...names];
        const aux = names[defaultPosition];
        suportArray[defaultPosition] = suportArray[0];
        suportArray[0] = aux;
        return suportArray;
      };
      res.status(200).json({
        rule1: changeNumberPosition(),
        rule2: changeNumberPosition(names.indexOf("Danilo")),
      });
    } catch (error) {
      // bad request: https://pt.wikipedia.org/wiki/Lista_de_c%C3%B3digos_de_estado_HTTP#400_Requisi%C3%A7%C3%A3o_inv%C3%A1lida
      res.status(400).send(error.message);
    }
  },
};
