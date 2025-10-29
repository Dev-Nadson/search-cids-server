import * as fs from 'fs';

const path = "/src/data/csv/"

const csv = fs.readFileSync(`${path}CID-10-SUBCATEGORIAS.CSV`, 'latin1');

const lines = csv.split('\n');

const cids = [];

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) continue;

    const [SUBCAT, , , , DESCRICAO] = line.split(';');

    if (SUBCAT) {
        cids.push({
            SUBCAT: SUBCAT.trim(),
            DESCRICAO: DESCRICAO.trim(),
        });
    }
}

fs.appendFileSync(
    '../src/data/json/cids2.json',
    JSON.stringify(cids, null, 2)
);

console.log(`✅ Convertidos ${cids.length} CIDs para JSON`);
console.log(`📄 Arquivo salvo em: ../src/data/cids2.json`);
console.log(`📊 Exemplo:`, cids[0]);