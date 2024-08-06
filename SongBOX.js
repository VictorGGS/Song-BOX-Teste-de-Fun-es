// Função para validar a senha
function validarSenha(senha) {
    if (senha.length < 8) return false;
    if (!/[A-Z]/.test(senha)) return false;
    if (!/[0-9]/.test(senha)) return false;
    return true;
}

// Função para validar a repetição da senha
function validarRepeticaoSenha(senha, confirmacaoSenha) {
    return senha === confirmacaoSenha;
}

// Função para verificar a idade
function verificarIdade(idade) {
    return idade >= 18;
}

// Função para habilitar o campo de cidades com base no estado selecionado
function habilitarCidades(estadoSelecionado) {
    let cidades = [];
    switch (estadoSelecionado) {
        case 'MG':
            cidades = ['Raposos', 'Nova Lima', 'Belo Horizonte'];
            break;
        case 'RJ':
            cidades = ['Rio de Janeiro', 'Petrópolis', 'Cabo Frio'];
            break;
        case 'SP':
            cidades = ['São Paulo', 'Araraquara', 'Americana'];
            break;
        case 'ES':
            cidades = ['Vila Velha', 'Serra', 'Vitória'];
            break;
        default:
            cidades = [];
    }
    return cidades;
}

// Função para mostrar mensagem de confirmação
function mostrarMensagemConfirmacao() {
    return 'Seja bem-vindo ao Song BOX.';
}

// Função para validar o formulário
function validarFormulario(senha, confirmacaoSenha, idade, estadoSelecionado) {
    if (!validarSenha(senha)) return 'A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um número.';
    if (!validarRepeticaoSenha(senha, confirmacaoSenha)) return 'Senhas incorretas.';
    if (!verificarIdade(idade)) return 'Só para maiores de idade..';
    habilitarCidades(estadoSelecionado);
    return mostrarMensagemConfirmacao();
}

// Função para contar caracteres no textarea
function contarCaracteres(textareaValue) {
    const limite = 200;
    const quantidade = textareaValue.length;
    return `${quantidade}/${limite} caracteres`;
}

// Função para exibir regras da senha dinamicamente
function atualizarRegrasSenha(senha) {
    return {
        regra1: senha.length >= 8 ? 'rule-valid' : 'rule-invalid',
        regra2: /[A-Z]/.test(senha) ? 'rule-valid' : 'rule-invalid',
        regra3: /[0-9]/.test(senha) ? 'rule-valid' : 'rule-invalid'
    };
}

// Função para verificar confirmação de senha em tempo real
function verificarConfirmacaoSenha(senha, confirmacaoSenha) {
    return senha === confirmacaoSenha ? 'Senhas conferem' : 'Senhas não conferem';
}

// Função para mudar a cor do fundo do site
function mudarCorFundo(cor) {
    return cor;
}

// Função para aumentar o tamanho da fonte
function aumentarFonte(fontSize) {
    return fontSize + 2;
}

// Função para diminuir o tamanho da fonte
function diminuirFonte(fontSize) {
    return fontSize - 2;
}

module.exports = {
    validarSenha,
    validarRepeticaoSenha,
    verificarIdade,
    habilitarCidades,
    mostrarMensagemConfirmacao,
    validarFormulario,
    contarCaracteres,
    atualizarRegrasSenha,
    verificarConfirmacaoSenha,
    mudarCorFundo,
    aumentarFonte,
    diminuirFonte
};
