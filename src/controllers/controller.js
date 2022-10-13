const { empresa} = require('../db')
const ver = require('../db');
const  dataEmpresa  = require('../utils/dataEmpresa');

const getEmpresa = async (req,res) => {
  let allEmpresa = []
  try {
    const validateExisteEmpresa = await empresa.findOne({ where: { name: "Prevalent" } })
    console.log(validateExisteEmpresa)
    if (validateExisteEmpresa === null) {
      await Promise.all (dataEmpresa.map( async(item) => {
        await empresa.create({
          name:item.name,
          razon:item.razon,
          nit:item.nit,
          identificacion:item.identificacion,
          empleados:item.empleados,
          logo:item.logo,
          aprobada:item.aprobada
        })  
      }))
    }
    allEmpresa = await empresa.findAll()
    res.send(allEmpresa).end()
  } catch (error) {
    console.log(error)
  }
        
}
const edit = async (req, res) => {
    console.log(typeof req.body)
    const {name, aprobada } = req.body;
    try {
      const validateExisteEmpresa = await empresa.findOne({ where: { name: name } })
      console.log(validateExisteEmpresa.dataValues.id)
      const update =  await empresa.upsert({
        id: validateExisteEmpresa.dataValues.id,
        name,
        razon: validateExisteEmpresa.dataValues.razon,
        nit: validateExisteEmpresa.dataValues.nit,
        identificacion: validateExisteEmpresa.dataValues.identificacion,
        empleados: validateExisteEmpresa.dataValues.empleados,
        logo: '',
        aprobada: aprobada
      });
      res.send(update)
    } catch (error) {
      console.log(error)
    }
      res.end()
   
  };

module.exports = {
  getEmpresa,
  edit,
}