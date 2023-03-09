let anterior = 0;
let atual = 1;
let numero = 34;
let count = 0;
for (let i = 0; i <100;i++){
    if (atual == numero){
        console.log('Seu número está na sequência de Fibonacci');
        count++;
        return;
    }
    atual = atual+anterior;
    anterior = atual-anterior;

}
if (count ==0){
    console.log('Não existe esse número na sequência de Fibonacci');
}