$("#btnFloat").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + ".";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });
   $("#btn0").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "0";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn1").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "1";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn2").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "2";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn3").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "3";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn4").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "4";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn5").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "5";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });
  //Jquery permite para executar uma function após o click em um botão:
  $("#btn6").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    texto = texto + "6";

    document.getElementById("inputTexto").value = texto;
  });

  $("#btn7").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "7";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn8").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "8";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btn9").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 8 na variavel
    texto = texto + "9";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnSoma").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "+";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnSubtracao").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "-";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnMultiplicacao").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "*";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnDivisao").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "/";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnSqrt").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //concatena o caracter 7 na variavel
    texto = texto + "√";

    //atualiza o input
    document.getElementById("inputTexto").value = texto;
  });

  $("#btnReset").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    document.getElementById("inputTexto").value = "";
  });

  $("#btnIgual").click(function () {
    //documentação sobre o método getElementById: https://www.w3schools.com/jsref/met_document_getelementbyid.asp
    var texto = document.getElementById("inputTexto").value;

    //se a variavel texto contiver o caracter + o método indexOf irá retornar o indice desse caracter
    //documentacao sobre o metodo indexOF : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
    if (texto.indexOf("+") > -1) {
      //documentacao sobre o método substring: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substring
      //substring: retorna uma nova string a partir de um ponto inicial e final.
      var p1 = texto.substring(0, texto.indexOf("+"));
      p1 = parseFloat(p1);

      var p2 = texto.substring(texto.indexOf("+") + 1, texto.length);
      p2 = parseFloat(p2);

      if (isNaN(p1) || isNaN(p2)) {
        alert("Operadores inválidos !!");
        document.getElementById("inputTexto").value = "";
      } else {
        //atualiza o input
        document.getElementById("inputTexto").value = p1 + p2;
      }
    } else if (texto.indexOf("-") > -1) {
      
      var p1 = texto.substring(0, texto.indexOf("-"));
      p1 = parseFloat(p1);

      var p2 = texto.substring(texto.indexOf("-") + 1, texto.length);
      p2 = parseFloat(p2);

      if (isNaN(p1) || isNaN(p2)) {
        alert("Operadores inválidos !!");
        document.getElementById("inputTexto").value = "";
      } else {
        //atualiza o input
        document.getElementById("inputTexto").value = p1 - p2;
      }
    } else if (texto.indexOf("*") > -1) {

      var p1 = texto.substring(0, texto.indexOf("*"));
      p1 = parseFloat(p1);

      var p2 = texto.substring(texto.indexOf("*") + 1, texto.length);
      p2 = parseFloat(p2);

      if (isNaN(p1) || isNaN(p2)) {
        alert("Operadores inválidos !!");
        document.getElementById("inputTexto").value = "";

      } else {
        //atualiza o input
        document.getElementById("inputTexto").value = p1 * p2;
      }

    } else if (texto.indexOf("/") > -1) {

      var p1 = texto.substring(0, texto.indexOf("/"));
      p1 = parseFloat(p1);

      var p2 = texto.substring(texto.indexOf("/") + 1, texto.length);
      p2 = parseFloat(p2);

      if (isNaN(p1) || isNaN(p2)) {
        alert("Operadores inválidos !!");
        document.getElementById("inputTexto").value = "";
      } else {
        //atualiza o input
        document.getElementById("inputTexto").value = p1 / p2;
      }

  } else if (texto.indexOf("√") > -1) {

      var p2 = texto.substring(texto.indexOf("√") + 1, texto.length);
      p2 = parseFloat(p2);

      if (isNaN(p2)) {
      alert("Operador inválido !!");
      document.getElementById("inputTexto").value = "";
      } else {
      //atualiza o input
      document.getElementById("inputTexto").value = Math.sqrt(p2);
      }

    } else {
      alert("Operação inválida!");
      document.getElementById("inputTexto").value = "";
    }
  });