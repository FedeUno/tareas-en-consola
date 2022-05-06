require('colors')

const { inquireMenu, pausa } = require('./helpers/inquirer');
const Tarea = require('./modelos/tarea');
const Tareas = require('./modelos/tareas');

const main = async() => {

    console.log('Evaristo vende pizzas'.rainbow) ;

    let opt = '' ;
    const tareas = new Tareas() ;
    
    do{
     opt = await inquireMenu() ;

        console.log({opt}) 
        
        //const tarea = new Tarea('comprar bolsas') ;

        //tareas._listado[tarea.id] = tarea

        console.log(tareas) ;
        
        await pausa()
        

    } while(opt !== '0') ;

}


main();