// Configuração de URLs de imagens para R6 Tactical Hub
// Corrigido: via.placeholder.com foi descontinuado — substituído por placehold.co

// Imagens dos Mapas
const MAP_IMAGES = {
    "clube":     "https://placehold.co/1600x900/1a1a2e/00d4ff?text=CLUBE+-+Hannover",
    "chale":     "https://placehold.co/1600x900/2d1b4e/ff007f?text=CHALÉ+-+Courchevel",
    "oregon":    "https://placehold.co/1600x900/1a2e2e/00f0ff?text=OREGON+-+Redmond",
    "banco":     "https://placehold.co/1600x900/2d1b4e/ff007f?text=BANCO+-+Los+Angeles",
    "cafe":      "https://placehold.co/1600x900/2e1a1a/ff007f?text=CAFÉ+-+Moscou",
    "consulado": "https://placehold.co/1600x900/1a2e3d/00f0ff?text=CONSULADO+-+Costa+do+Marfim"
};

// Imagens dos Operadores
const OPERATOR_IMAGES = {
    "thermite":  "https://placehold.co/300x280/ff6b6b/ffffff?text=THERMITE",
    "ace":       "https://placehold.co/300x280/4ecdc4/ffffff?text=ACE",
    "hibana":    "https://placehold.co/300x280/f7dc6f/ffffff?text=HIBANA",
    "buck":      "https://placehold.co/300x280/bb8fce/ffffff?text=BUCK",
    "flores":    "https://placehold.co/300x280/85c1e2/ffffff?text=FLORES",
    "iana":      "https://placehold.co/300x280/f8b88b/ffffff?text=IANA",
    "nomad":     "https://placehold.co/300x280/a8e6cf/ffffff?text=NOMAD",
    "ying":      "https://placehold.co/300x280/ff9999/ffffff?text=YING",
    "grim":      "https://placehold.co/300x280/dda15e/ffffff?text=GRIM",
    "dokkaebi":  "https://placehold.co/300x280/bc6c25/ffffff?text=DOKKAEBI",
    "zero":      "https://placehold.co/300x280/9b59b6/ffffff?text=ZERO",
    "bandit":    "https://placehold.co/300x280/e74c3c/ffffff?text=BANDIT",
    "kaid":      "https://placehold.co/300x280/16a085/ffffff?text=KAID",
    "mute":      "https://placehold.co/300x280/2980b9/ffffff?text=MUTE",
    "azami":     "https://placehold.co/300x280/8e44ad/ffffff?text=AZAMI",
    "smoke":     "https://placehold.co/300x280/34495e/ffffff?text=SMOKE",
    "wamai":     "https://placehold.co/300x280/f39c12/ffffff?text=WAMAI",
    "mira":      "https://placehold.co/300x280/c0392b/ffffff?text=MIRA",
    "valkyrie":  "https://placehold.co/300x280/1abc9c/ffffff?text=VALKYRIE",
    "fenrir":    "https://placehold.co/300x280/95a5a6/ffffff?text=FENRIR",
    "thatcher":  "https://placehold.co/300x280/27ae60/ffffff?text=THATCHER"
};

// Função para obter URL da imagem do mapa
function getMapImage(mapId) {
    return MAP_IMAGES[mapId] || "https://placehold.co/1600x900/1a1a2e/cccccc?text=Imagem+Indisponível";
}

// Função para obter URL da imagem do operador
function getOperatorImage(operatorName) {
    const key = operatorName.toLowerCase().replace(/\s+/g, '');
    return OPERATOR_IMAGES[key] || "https://placehold.co/300x280/cccccc/ffffff?text=Operador";
}
