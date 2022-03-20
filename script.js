'use strick';
//var
let somaCorte = 0;
let somaProgressiva = 0;
let somaUnhas = 0;

let vendaCorte = 0.00;
let vendaProgressiva = 0.00;
let vendaUnhas = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');
let btnPdf = document.getElementById('pdf');


//events
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);
btnPdf.addEventListener('click', pdf, false);

//functions
function venda(e){
    if(document.getElementById('corte').checked){

        somaCorte = somaCorte +1;
        vendaCorte = vendaCorte + 25.00;
        document.getElementById('quantidadeCortes').innerHTML = somaCorte;
        document.getElementById('valorCortes').innerHTML = vendaCorte;

    }else if(document.getElementById('progressiva').checked){

        somaProgressiva = somaProgressiva +1;
        vendaProgressiva = vendaProgressiva +25.00;
        document.getElementById('quantidadeProgressiva').innerHTML = somaProgressiva;
        document.getElementById('valorProgressiva').innerHTML = vendaProgressiva;

    }else if(document.getElementById('unhas').checked){
        
        somaUnhas = somaUnhas +1;
        vendaUnhas = vendaUnhas +25.00;
        document.getElementById('quantidadeUnhas').innerHTML = somaUnhas;
        document.getElementById('valorUnhas').innerHTML = vendaUnhas;

    }
}

function estorno(e){
    if(document.getElementById('corte').checked){

        somaCorte = somaCorte -1;
        vendaCorte = vendaCorte - 25.00;
        if(somaCorte < 0){
            somaCorte = 0;
            vendaCorte = 0.00;
        }
        document.getElementById('quantidadeCortes').innerHTML = somaCorte;
        document.getElementById('valorCorte').innerHTML = vendaCorte;

    }else if(document.getElementById('progressiva').checked){

        somaProgressiva = somaProgressiva -1;
        vendaProgressiva = vendaProgressiva -25.00;
        if(somaProgressiva < 0){
            somaProgressiva = 0;
            vendaProgressiva = 0.00;
        }
        document.getElementById('quantidadeProgressiva').innerHTML = somaProgressiva;
        document.getElementById('valorProgressiva').innerHTML = vendaProgressiva;

    }else if(document.getElementById('unhas').checked){
        
        somaUnhas = somaUnhas -1;
        vendaUnhas = vendaUnhas -25.00;
        if(vendaUnhas < 0){
            somaUnhas = 0;
            vendaUnhas = 0.00;
        }
        document.getElementById('quantidadeUnhas').innerHTML = somaUnhas;
        document.getElementById('valorUnhas').innerHTML = vendaUnhas;

    }
}

function pdf(e){
    const hd = document.getElementById('hd').innerHTML;
    const mn1 = document.getElementById('mn1').innerHTML;
    const mn2 = document.getElementById('mn2').innerHTML;
    const mn3 = document.getElementById('mn3').innerHTML;
    const pdf = window.open('','','width=800, height=600');
    pdf.document.write('<html><head>');
    pdf.document.write('<title>-----Fechamento Caixa-----</title></head>');
    pdf.document.write('<body');
    pdf.document.write('<span>-----', hd , '-----</span>' ,'<br>');
    pdf.document.write(mn1,'<br>');
    pdf.document.write(mn2,'<br>');
    pdf.document.write( mn3);
    pdf.document.write('</body></html>');
    pdf.document.close();
    pdf.print();
}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'))
}

