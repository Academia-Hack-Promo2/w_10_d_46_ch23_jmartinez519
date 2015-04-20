var tqnumber = 100
var ttqnumber = 300
var acqnumber = 500
var actqnumber = 700
var taquilla_queu = [];
var taquilla_tercera_queu = [];
var atencion_cliente_queu = [];
var atencion_cliente_tercera_queu = [];

function new_ticket(queu){
  switch (queu) {
    case 1:
      tqnumber += 1
      taquilla_queu.push(tqnumber)
      people = taquilla_queu.length
      wait_time = taquilla_queu.length * 3
      response = 'Su numero de ticket es ' + 'T-' + tqnumber +
                  '\nHay ' + people + ' personas delante de usted' +
                  '\nEl tiempo de espera aproximado es de ' + wait_time + ' minutos';
      console.log(response)
      break;
    case 2:
      ttqnumber += 1
      taquilla_tercera_queu.push(ttqnumber)
      wait_time = taquilla_tercera_queu.length * 5
      console.log('Su numero de ticket es ' + 'TE-' + ttqnumber)
      break;
    case 3:
      acqnumber += 1
      atencion_cliente_queu.push(acqnumber)
      wait_time = atencion_cliente_queu.length * 8
      console.log('Su numero de ticket es ' + 'AC-' + acqnumber)
      break;
    case 4:
      actqnumber += 1
      atencion_cliente_tercera_queu.push(actqnumber)
      wait_time = atencion_cliente_tercera_queu.length * 12
      console.log('Su numero de ticket es ' + 'ACE-' + actqnumber)
      break;
    default:
      break;
  }

}

function pop_taquilla_client(){
  taquilla_queu.shift()
  console.log('Cliente atendido')

}

function pop_taquilla_tercera_client(){
  taquilla_tercera_queu.shift()
  console.log('Cliente atendido')
}


function pop_atencion_client () {
  atencion_cliente_queu.shift()
  console.log('Cliente atendido')
}

function pop_atencion_tercera_client (){
  atencion_cliente_tercera_queu.shift()
  console.log('Cliente atendido')

}

// new_ticket(1)
// new_ticket(1)
// pop_taquilla_client()
// new_ticket(1)
// new_ticket(1)
// pop_taquilla_client() 
// console.log(taquilla_queu)
// console.log(taquilla_queu.length)
