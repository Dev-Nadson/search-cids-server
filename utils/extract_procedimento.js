import fs from 'fs'
import path from 'path'

function processarLinha(linha) {
    linha = linha.trimEnd();

    const procedure_code = linha.substring(0, 10).trim();
    const procedure_name = linha.substring(10, 260).trim();
    const complexity = linha.substring(260, 261).trim();
    const gender = linha.substring(261, 262).trim();
    const max_execution = linha.substring(262, 266).trim();
    const days_permanence = linha.substring(266, 270).trim();
    const points = linha.substring(270, 274).trim();
    const min_age = linha.substring(274, 278).trim();
    const max_age = linha.substring(278, 282).trim();
    const vl_sh = linha.substring(282, 294).trim();
    const vl_sa = linha.substring(294, 306).trim();
    const vl_sp = linha.substring(306, 318).trim();
    const financing_code = linha.substring(318, 320).trim();
    const rubric_code = linha.substring(320, 326).trim();
    const time_permanence = linha.substring(326, 330).trim();
    const competence_date = linha.substring(330, 336).trim();

    return {
        procedure_code,
        procedure_name,
        complexity,
        gender,
        max_execution: max_execution ? parseInt(max_execution) : null,
        days_permanence: days_permanence ? parseInt(days_permanence) : null,
        points: points ? parseInt(points) : null,
        min_age: min_age ? parseInt(min_age) : null,
        max_age: max_age ? parseInt(max_age) : null,
        vl_sh: vl_sh ? parseFloat(vl_sh) / 100 : null,
        vl_sa: vl_sa ? parseFloat(vl_sa) / 100 : null,
        vl_sp: vl_sp ? parseFloat(vl_sp) / 100 : null,
        financing_code,
        rubric_code,
        time_permanence: time_permanence ? parseInt(time_permanence) : null,
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


const caminhoArquivo = "src/database/seeds/data/txt/"

try {
    const dadosTxt = fs.readFileSync(`${caminhoArquivo}tb_procedimento.txt`, 'latin1');

    const resultado = processarArquivo(dadosTxt);

    console.log(JSON.stringify(resultado, null, 2));

    const caminhoSaida = path.join("src/database/seeds/data/json/procedimento.json");

    const dirSaida = path.dirname(caminhoSaida);
    if (!fs.existsSync(dirSaida)) {
        fs.mkdirSync(dirSaida, { recursive: true });
    }

    fs.writeFileSync(caminhoSaida, JSON.stringify(resultado, null, 2));
    console.log(`\nArquivo JSON salvo em: ${caminhoSaida}`);

} catch (erro) {
    console.error('Erro ao processar o arquivo:', erro.message);
}