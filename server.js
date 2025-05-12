const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, 'public', 'json.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

function readData() {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
}

function writeData(data) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));
}

app.post('/api/update', (req, res) => {
    const updatedNode = req.body.newData;
    let data = readData();
    data = data.map(node => node.id === updatedNode.id ? { ...node, ...updatedNode } : node);
    writeData(data);
    res.json({ status: 'updated', node: updatedNode });
});


app.post('/api/update', (req, res) => {
    const args = req.body;
    let data = readData();
    console.log(args)
    // data = data.map(node => node.id === updatedNode.id ? { ...node, ...updatedNode } : node);
    writeData(data);
    res.json({ status: 'updated', node: updatedNode });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
