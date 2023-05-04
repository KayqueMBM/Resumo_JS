function Confirmar()
{
    texto = nome.value //Pega o que foi digitado//
    teste.innerHTML = texto // Inserir id no span//
}
function MostrarJanela()
{
    janelinha.style.display = "block"
}
function FecharJanela()
{
    janelinha.style.display = "none"
}
soma = 0
function Somar()
{
    soma = soma + 1
    resultado.valor = soma
}
function Imprimir()
{
    window.print();
}