import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const cid_code = linha.substring(0, 4).trim();
    const description = linha.substring(4, 104).trim();
    const injury_type = linha.substring(104, 105).trim();
    const gender = linha.substring(105, 106).trim();
    const stage = linha.substring(106, 107).trim();
    const irradiated_fields = linha.substring(107, 111).trim();

    return {
        cid_code,
        description,
        injury_type,
        gender,
        stage,
        irradiated_fields: irradiated_fields ? parseInt(irradiated_fields) : null
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