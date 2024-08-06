const {
    validarSenha,
    validarRepeticaoSenha,
    verificarIdade,
    validarFormulario,
    contarCaracteres,
    verificarConfirmacaoSenha,
} = require('./SongBOX');

it('Senha Válida', () => {
    expect(validarSenha('20Jul2017')).toBe(true);
});

it('Senha Inválida', () => {
    expect(validarSenha('senha')).toBe(false);
    expect(validarSenha('SENHA')).toBe(false);
    expect(validarSenha('seNha17')).toBe(false);
});

it('Senhas Incorretas', () => {
    expect(validarRepeticaoSenha('20Jul2017', '20Jul2017')).toBe(true);
});

it('Maior Idade', () => {
    expect(verificarIdade(18)).toBe(true);
    expect(verificarIdade(20)).toBe(true);
});

it('Menor Idade', () => {
    expect(verificarIdade(11)).toBe(false);
    expect(verificarIdade(15)).toBe(false);
});

it('Bem-Vindo', () => {
    expect(validarFormulario('Senha1234', 'Senha1234', 20, 'MG')).toBe('Seja bem-vindo ao Song BOX.');
});

it('Contagem de Caracteres', () => {
    expect(contarCaracteres('Texto')).toBe('5/200 caracteres');
});

it('Confirmar Senha', () => {
    expect(verificarConfirmacaoSenha('Senha1234', 'Senha1234')).toBe('Senhas conferem');
});