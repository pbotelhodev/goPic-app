export const validarCPF = (cpf) => {
  const cpfLimpo = cpf.replace(/\D/g, "");

  if (cpfLimpo.length !== 11 || /^(\d)\1+$/.test(cpfLimpo)) return false;

  let soma = 0;
  let resto;

  for (let i = 1; i <= 9; i++) {
    soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpfLimpo.substring(9, 10))) return false;

  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma = soma + parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;

  if (resto !== parseInt(cpfLimpo.substring(10, 11))) return false;

  return true;
};

export const validarTelefone = (phone) => {
  const limpo = phone.replace(/\D/g, "");
  return limpo.length === 11;
};


export const validarData = (dataString) => {
  // 1. Verifica formato básico
  if (dataString.length !== 10) return false;

  // 2. Quebra a string em dia, mês e ano
  const partes = dataString.split("/");
  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10);
  const ano = parseInt(partes[2], 10);

  // 3. Validação do Calendário (Se a data existe)
  // O mês no JS é base 0 (Jan = 0), por isso 'mes - 1'
  const dataEvento = new Date(ano, mes - 1, dia);

  if (
    dataEvento.getFullYear() !== ano ||
    dataEvento.getMonth() + 1 !== mes ||
    dataEvento.getDate() !== dia
  ) {
    return false; // Data não existe (ex: 31/02)
  }

  // 4. Validação de Tempo (Passado vs Futuro)
  // Pega a data de HOJE e zera as horas para comparar apenas o dia
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  // Zera as horas da data do evento também para comparação justa
  dataEvento.setHours(0, 0, 0, 0);

  // Se a data do evento for MENOR que hoje, retorna falso (evento no passado)
  if (dataEvento < hoje) {
    return false;
  }

  return true;
};

export const validarCEP = (cep) => {
  // 1. Limpa (tira o traço)
  const limpo = cep.replace(/\D/g, "");

  // 2. Verifica se tem 8 dígitos exatos
  // (Pode adicionar uma verificação extra pra não aceitar 00000000 se quiser)
  return limpo.length === 8;
};
