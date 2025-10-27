import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const CO_CID = linha.substring(0, 4).trim();
    const NO_CID = linha.substring(4, 104).trim();
    const TP_AGRAVO = linha.substring(104, 105).trim();
    const TP_SEXO = linha.substring(105, 106).trim();
    const TP_ESTADIO = linha.substring(106, 107).trim();
    const VL_CAMPOS_IRRADIADOS = linha.substring(107, 111).trim();

    return {
        CO_CID,
        NO_CID,
        TP_AGRAVO,
        TP_SEXO,
        TP_ESTADIO,
        VL_CAMPOS_IRRADIADOS: VL_CAMPOS_IRRADIADOS ? parseInt(VL_CAMPOS_IRRADIADOS) : null
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
    const dadosTxt = fs.readFileSync(`${caminhoArquivo}tb_cid.txt`, 'latin1');

    const resultado = processarArquivo(dadosTxt);

    console.log(JSON.stringify(resultado, null, 2));

    const caminhoSaida = path.join("src/data/json/cid.json");

    const dirSaida = path.dirname(caminhoSaida);
    if (!fs.existsSync(dirSaida)) {
        fs.mkdirSync(dirSaida, { recursive: true });
    }

    fs.writeFileSync(caminhoSaida, JSON.stringify(resultado, null, 2));
    console.log(`\nArquivo JSON salvo em: ${caminhoSaida}`);

} catch (erro) {
    console.error('Erro ao processar o arquivo:', erro.message);
}