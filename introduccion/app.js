
let user = {
     name : 'Joel',
     correo: 'alex@gmail.com',
     telefono: 4260475,
     estado : true,
     saluda : ()=>{
          setTimeout( ()=> 
          alert('Hola soy ' + this.name),
          1000)
     }
}

for(const prop in user){
     console.log(user[prop])
}

let cursos = [
     {
          name : 'VueJS2',
          estado: true
     },
     {
          name: 'Html5',
          estado: true
     },
     {
          name: 'JavaScript',
          estado: true
     },
     {
          name: 'PHP',
          estado: false
     }
]

/* cursos.forEach( (element)=> {
     console.log(element)
} ) */
var curso = [];

for (const iterator of cursos) {
     console.log(iterator)
}



