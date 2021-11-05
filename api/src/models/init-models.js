import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _tb_cliente from  "./infoc_tcc_cliente.js";
import _tb_endereco from  "./infoc_tcc_endereco.js";
import _tb_produto from  "./infoc_tcc_produto.js";
import _tb_venda_item from  "./infoc_tcc_venda_item.js";
import _tb_venda from  "./infoc_tcc_venda.js";

export default function initModels(sequelize) {
  var tb_cliente = _tb_cliente.init(sequelize, DataTypes);
  var tb_endereco = _tb_endereco.init(sequelize, DataTypes);
  var tb_produto = _tb_produto.init(sequelize, DataTypes);
  var tb_venda_item = _tb_venda_item.init(sequelize, DataTypes);
  var tb_venda = _tb_venda.init(sequelize, DataTypes);
  

  return {
    tb_cliente,
    tb_endereco,
    tb_produto,
    tb_venda_item,
    tb_venda,
  };
}


