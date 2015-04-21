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
    if (tqnumber === 299){
      tqnumber = 100
    }
    else{
      tqnumber += 1
      taquilla_queu.push(tqnumber)
      people = taquilla_queu.length - 1
      wait_time = (taquilla_queu.length * 3) - 3
      document.getElementById("newticket").innerHTML = tqnumber;
      document.getElementById("people").innerHTML = people;
      document.getElementById("waitingtime").innerHTML = wait_time;
      break;
    }
    case 2:
    ttqnumber += 1
    taquilla_tercera_queu.push(ttqnumber)
    people = taquilla_tercera_queu.length - 1
    wait_time = (taquilla_tercera_queu.length * 5) - 5
    document.getElementById("newticket").innerHTML = ttqnumber;
    document.getElementById("people").innerHTML = people;
    document.getElementById("waitingtime").innerHTML = wait_time;
    break;
    case 3:
    acqnumber += 1
    atencion_cliente_queu.push(acqnumber)
    wait_time = (atencion_cliente_queu.length * 8) - 8
    people = atencion_cliente_queu.length - 1
    console.log(atencion_cliente_queu)
    document.getElementById("newticket").innerHTML = acqnumber;
    document.getElementById("people").innerHTML = people;
    document.getElementById("waitingtime").innerHTML = wait_time;
    break;
    case 4:
    actqnumber += 1
    atencion_cliente_tercera_queu.push(actqnumber)
    wait_time = (atencion_cliente_tercera_queu.length * 12) - 12
    people = atencion_cliente_tercera_queu.length - 1
    document.getElementById("newticket").innerHTML = actqnumber;
    document.getElementById("people").innerHTML = people;
    document.getElementById("waitingtime").innerHTML = wait_time;
    break;
    default:
    break;
  }

}


function pop_taquilla_client(){
  document.getElementById("toattend1").innerHTML = taquilla_queu[0];
  document.getElementById("ticketlist1").innerHTML = taquilla_queu.join('<br>');
  taquilla_queu.shift()

}

function pop_taquilla_tercera_client(){
  document.getElementById("toattend2").innerHTML = taquilla_tercera_queu[0];
  document.getElementById("ticketlist2").innerHTML = taquilla_tercera_queu;
  taquilla_tercera_queu.shift()

}

function pop_atencion_client() {
  document.getElementById("toattend3").innerHTML = atencion_cliente_queu[0];
  document.getElementById("ticketlist3").innerHTML = atencion_cliente_queu;
  atencion_cliente_queu.shift()
}

function pop_atencion_tercera_client(){
  document.getElementById("toattend4").innerHTML = atencion_cliente_tercera_queu[0];
  document.getElementById("ticketlist4").innerHTML = atencion_cliente_tercera_queu;
  atencion_cliente_tercera_queu.shift()

}

