import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const procedure_code = linha.substring(0, 10).trim();
    const cid_code = linha.substring(10, 14).trim();
    const is_principal = linha.substring(14, 15).trim();
    const competence_date = linha.substring(15, 21).trim();

    return {
        procedure_code,
        cid_code,
        is_principal,
        competence_date
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