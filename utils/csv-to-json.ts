// scripts/csv-to-json.js
import * as fs from 'fs';

// Lê o CSV (IMPORTANTE: encoding 'latin1' por causa do DATASUS)
const csv = fs.readFileSync('./CID-10-SUBCATEGORIAS.CSV', 'latin1');

// Processa linha por linha
const lines = csv.split('\n');
const header = lines[0]; // SUBCAT;DESCRICAO

const cids = [];

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) continue; // Pula linhas vazias

    const [code, name] = line.split(';');

    if (code && name) {
        cids.push({
            code: code.trim(),
            name: name.trim()
        });
    }
}

// Salva JSON
fs.writeFileSync(
    '../backend/src/data/cids.json',
    JSON.stringify(cids, null, 2)
);

console.log(`✅ Convertidos ${cids.length} CIDs para JSON`);
console.log(`📄 Arquivo salvo em: ./src/data/cids.json`);
console.log(`📊 Exemplo:`, cids[0]);