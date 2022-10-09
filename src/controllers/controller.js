const { empresa} = require('../db')
const ver = require('../db');
const  dataEmpresa  = require('../utils/dataEmpresa');

const getEmpresa = async (req,res) => {
  let allEmpresa = []
  try {
    const validateExisteEmpresa = await empresa.findOne({ where: { name: "Prevalent" } })
    console.log(validateExisteEmpresa)
    if (validateExisteEmpresa === null) {
      dataEmpresa.map( async(item) => {
        const newUser = await empresa.create({
          name:item.name,
          razon:item.razon,
          nit:item.nit,
          identificacion:item.identificacion,
          empleados:item.empleados,
          logo:item.logo,
          aprobada:item.aprobada
        })  
      })
    }else{
      allEmpresa = await empresa.findAll()
    }
     res.send(allEmpresa).end()
  } catch (error) {
    console.log(error)
  }
        
}
const getEmpresagetCompra = async (req, res) => {
    console.log(typeof req.body)
    const {name, apellido, empresa, pais, departamento, ciudad, direccion, postal, telefono, email, pedido } = req.body;
    try {
      const newUser = await users.create({
        name,
        apellido,
        empresa,
        pais,
        departamento,
        ciudad,
        direccion,
        postal,
        telefono,
        email,
      });
      let idUser = newUser.dataValues.id
      pedido.map(async (item) => {
        await product.create({
          name:item.name,
          combo:item.secondName,
          cantidad:item.cantidadForm,
          subtotal:item.subtotalForm,
          id_users:idUser,
        })
      })
      
     sentMail( name, apellido, empresa, pais, departamento, ciudad, direccion, postal, telefono, email, pedido)
      console.log("new",newUser.dataValues.id)
      res.json(newUser);
    } catch (error) {
       console.log(error)
    }
  };

module.exports = {
  getEmpresa,
}