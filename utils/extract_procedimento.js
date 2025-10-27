import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const CO_PROCEDIMENTO = linha.substring(0, 10).trim();
    const NO_PROCEDIMENTO = linha.substring(10, 260).trim();
    const TP_COMPLEXIDADE = linha.substring(260, 261).trim();
    const TP_SEXO = linha.substring(261, 262).trim();
    const QT_MAXIMA_EXECUCAO = linha.substring(262, 266).trim();
    const QT_DIAS_PERMANENCIA = linha.substring(266, 270).trim();
    const QT_PONTOS = linha.substring(270, 274).trim();
    const VL_IDADE_MINIMA = linha.substring(274, 278).trim();
    const VL_IDADE_MAXIMA = linha.substring(278, 282).trim();
    const VL_SH = linha.substring(282, 294).trim();
    const VL_SA = linha.substring(294, 306).trim();
    const VL_SP = linha.substring(306, 318).trim();
    const CO_FINANCIAMENTO = linha.substring(318, 320).trim();
    const CO_RUBRICA = linha.substring(320, 326).trim();
    const QT_TEMPO_PERMANENCIA = linha.substring(326, 330).trim();
    const DT_COMPETENCIA = linha.substring(330, 336).trim();

    return {
        CO_PROCEDIMENTO,
        NO_PROCEDIMENTO,
        TP_COMPLEXIDADE,
        TP_SEXO,
        QT_MAXIMA_EXECUCAO: QT_MAXIMA_EXECUCAO ? parseInt(QT_MAXIMA_EXECUCAO) : null,
        QT_DIAS_PERMANENCIA: QT_DIAS_PERMANENCIA ? parseInt(QT_DIAS_PERMANENCIA) : null,
        QT_PONTOS: QT_PONTOS ? parseInt(QT_PONTOS) : null,
        VL_IDADE_MINIMA: VL_IDADE_MINIMA ? parseInt(VL_IDADE_MINIMA) : null,
        VL_IDADE_MAXIMA: VL_IDADE_MAXIMA ? parseInt(VL_IDADE_MAXIMA) : null,
        VL_SH: VL_SH ? parseFloat(VL_SH) / 100 : null,
        VL_SA: VL_SA ? parseFloat(VL_SA) / 100 : null,
        VL_SP: VL_SP ? parseFloat(VL_SP) / 100 : null,
        CO_FINANCIAMENTO,
        CO_RUBRICA,
        QT_TEMPO_PERMANENCIA: QT_TEMPO_PERMANENCIA ? parseInt(QT_TEMPO_PERMANENCIA) : null,
        DT_COMPETENCIA
    };
}

function processarArquivo(textoCompleto) {
    const linhas = textoCompleto.split('\n');

    const resultado = linhas
        .filter(linha => linha.trim().length > 0)
        .map(linha => processarLinha(linha));

    return resultado;
}


const caminhoArquivo = "src/data/txt/"

try {
    const dadosTxt = fs.readFileSync(`${caminhoArquivo}tb_procedimento.txt`, 'utf-8');

    const resultado = processarArquivo(dadosTxt);

    console.log(JSON.stringify(resultado, null, 2));

    const caminhoSaida = path.join("src/data/json/procedimento.json");

    const dirSaida = path.dirname(caminhoSaida);
    if (!fs.existsSync(dirSaida)) {
        fs.mkdirSync(dirSaida, { recursive: true });
    }

    fs.writeFileSync(caminhoSaida, JSON.stringify(resultado, null, 2));
    console.log(`\nArquivo JSON salvo em: ${caminhoSaida}`);

} catch (erro) {
    console.error('Erro ao processar o arquivo:', erro.message);
}