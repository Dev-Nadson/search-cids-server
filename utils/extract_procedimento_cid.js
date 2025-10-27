import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const CO_PROCEDIMENTO = linha.substring(0, 10).trim();
    const CO_CID = linha.substring(10, 14).trim();
    const ST_PRINCIPAL = linha.substring(14, 15).trim();
    const DT_COMPETENCIA = linha.substring(15, 21).trim();

    return {
        CO_PROCEDIMENTO,
        CO_CID,
        ST_PRINCIPAL,
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
    const dadosTxt = fs.readFileSync(`${caminhoArquivo}rl_procedimento_cid.txt`, 'utf-8');

    const resultado = processarArquivo(dadosTxt);

    console.log(JSON.stringify(resultado, null, 2));

    const caminhoSaida = path.join("src/data/json/procedimento_cid.json");

    const dirSaida = path.dirname(caminhoSaida);
    if (!fs.existsSync(dirSaida)) {
        fs.mkdirSync(dirSaida, { recursive: true });
    }

    fs.writeFileSync(caminhoSaida, JSON.stringify(resultado, null, 2));
    console.log(`\nArquivo JSON salvo em: ${caminhoSaida}`);

} catch (erro) {
    console.error('Erro ao processar o arquivo:', erro.message);
}