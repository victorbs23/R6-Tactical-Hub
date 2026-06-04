// BANCO DE DADOS LOCAL DOS MAPAS DO RAINBOW SIX SIEGE
const MAPS_DATABASE = {
    clube: {
        name: "Clube",
        location: "Hannover, Alemanha",
        description: "Um clube industrial fortificado de motoqueiros. Caracteriza-se por confrontos intensos em ambientes fechados com rotas subterrâneas e janelas de rapel cruciais. É um dos mapas mais desafiadores para o ataque.",
        image: "clube",
        stats: {
            dificuldade: 75,
            destruicao: 85,
            verticalidade: 60
        },
        calls: [
            "CCTV",
            "Caixa (Cash)",
            "Garagem",
            "Construção (Construction)",
            "Jacuzzi",
            "Mestre (Master Bedroom)",
            "Academia (Gym)",
            "Bar",
            "Cozinha",
            "Igreja",
            "Arsenal",
            "Azul (Blue)"
        ],
        operators: {
            attack: [
                { name: "Thermite", desc: "Abertura termita pesada" },
                { name: "Ace", desc: "Abertura à distância" },
                { name: "Hibana", desc: "Abertura de alçapões" },
                { name: "Thatcher", desc: "Desativar eletrônicos" },
                { name: "Buck", desc: "Destruição vertical de pisos" }
            ],
            defense: [
                { name: "Bandit", desc: "Prevenção de brechas (CCTV)" },
                { name: "Kaid", desc: "Eletrificação de alçapões" },
                { name: "Mute", desc: "Bloqueio de drones e brechas" },
                { name: "Azami", desc: "Criar barreiras defensivas" },
                { name: "Smoke", desc: "Controle de tempo e gás" }
            ]
        }
    },
    chale: {
        name: "Chalé",
        location: "Courchevel, França",
        description: "Um luxuoso chalé de madeira e pedra nos Alpes Franceses. Composto por uma grande garagem no subsolo e diversos quartos conectados no segundo andar. A limpeza vertical e o controle da garagem são cruciais.",
        image: "chale",
        stats: {
            dificuldade: 80,
            destruicao: 75,
            verticalidade: 70
        },
        calls: [
            "Garagem",
            "Snowmobile",
            "Adega (Wine Cellar)",
            "Mestre",
            "Escritório",
            "Solário",
            "Bar",
            "Gaming",
            "Cozinha",
            "Sala de Troféus",
            "Biblioteca"
        ],
        operators: {
            attack: [
                { name: "Ace", desc: "Abertura à distância" },
                { name: "Hibana", desc: "Abertura de alçapões" },
                { name: "Buck", desc: "Destruição vertical de pisos" },
                { name: "Iana", desc: "Informação e hologramas Gemini" },
                { name: "Nomad", desc: "Cobertura contra runouts/flancos" }
            ],
            defense: [
                { name: "Kaid", desc: "Eletrificar paredes e alçapões" },
                { name: "Bandit", desc: "Prevenção de brechas (Garagem)" },
                { name: "Azami", desc: "Criar coberturas com barreiras Kiba" },
                { name: "Smoke", desc: "Negar passagens com gás" },
                { name: "Wamai", desc: "Capturar projéteis de ataque" }
            ]
        }
    },
    oregon: {
        name: "Oregon",
        location: "Redmond, EUA",
        description: "Um complexo rústico de fazenda com diversas construções interconectadas. Possui rotas de fuga estreitas, um sótão altamente disputado no andar superior e um porão (Lavatório) com controle crucial.",
        image: "oregon",
        stats: {
            dificuldade: 70,
            destruicao: 80,
            verticalidade: 80
        },
        calls: [
            "Lavanderia",
            "Suprimentos",
            "Torre Pequena",
            "Torre Grande",
            "Dormitórios",
            "Armário",
            "Cozinha",
            "Refeitório",
            "Reunião (Meeting)",
            "Palco",
            "Freezer",
            "Elétrica"
        ],
        operators: {
            attack: [
                { name: "Ace", desc: "Abertura rápida do Sótão" },
                { name: "Thermite", desc: "Abertura termita principal" },
                { name: "Buck", desc: "Verticalidade na Cozinha" },
                { name: "Flores", desc: "Destruição remota de gadgets" },
                { name: "Nomad", desc: "Proteção contra flancos" }
            ],
            defense: [
                { name: "Smoke", desc: "Negar entrada com gás" },
                { name: "Wamai", desc: "Captura de granadas de ataque" },
                { name: "Kaid", desc: "Eletrificar alçapões cruciais" },
                { name: "Fenrir", desc: "Minas F-NATT de controle de área" },
                { name: "Mute", desc: "Bloqueio de drones e brechas" }
            ]
        }
    },
    banco: {
        name: "Banco",
        location: "Los Angeles, EUA",
        description: "Um banco financeiro imponente com salas de escritórios abertas e um cofre fortificado no subsolo. Os atacantes costumam explorar as claraboias e as janelas de rapel elevadas para ganhar vantagem.",
        image: "banco",
        stats: {
            dificuldade: 85,
            destruicao: 70,
            verticalidade: 75
        },
        calls: [
            "Cofre (Vault)",
            "Arquivos",
            "CEO",
            "Bolsa (Stock)",
            "Servidores",
            "Escada Azul",
            "Escada Principal",
            "Arquivo Aberto",
            "Recepção",
            "Garagem"
        ],
        operators: {
            attack: [
                { name: "Ace", desc: "Abertura à distância" },
                { name: "Thermite", desc: "Brecha termita gigante" },
                { name: "Hibana", desc: "Abertura de alçapões" },
                { name: "Dokkaebi", desc: "Chamada telefônica e hack" },
                { name: "Zero", desc: "Informação e laser Argus" }
            ],
            defense: [
                { name: "Mira", desc: "Visão blindada no Cofre" },
                { name: "Kaid", desc: "Eletrificar paredes e alçapões" },
                { name: "Smoke", desc: "Gás para bloquear caminhos" },
                { name: "Valkyrie", desc: "Câmeras Black Eye no lobby" },
                { name: "Fenrir", desc: "Controle de área com minas F-NATT" }
            ]
        }
    },
    cafe: {
        name: "Café Dostoyevsky",
        location: "Moscou, Rússia",
        description: "Um luxuoso café e museu de alta gastronomia em Moscou. O mapa se destaca por sua forte disputa vertical no terceiro andar (Bar e Clarabóia) e na cozinha do andar térreo.",
        image: "cafe",
        stats: {
            dificuldade: 78,
            destruicao: 72,
            verticalidade: 90
        },
        calls: [
            "Padaria",
            "Cozinha",
            "Bar",
            "Piano",
            "Leitura",
            "Natal (Christmas)",
            "Cocktail",
            "Freezer",
            "Escada Vermelha",
            "Escada Branca",
            "Escada Marrom"
        ],
        operators: {
            attack: [
                { name: "Buck", desc: "Destruição sob/sobre o bomb" },
                { name: "Flores", desc: "Drones explosivos RCE-Ratero" },
                { name: "Ace", desc: "Abertura à distância" },
                { name: "Ying", desc: "Candelas cegantes de área" },
                { name: "Nomad", desc: "Bloqueio de runouts em janelas" }
            ],
            defense: [
                { name: "Smoke", desc: "Controle de tempo em bombs" },
                { name: "Azami", desc: "Barreiras Kiba em posições-chave" },
                { name: "Wamai", desc: "Capturar projéteis de ataque" },
                { name: "Mira", desc: "Mira de informação no Bar" },
                { name: "Fenrir", desc: "Minas de cegueira e atraso" }
            ]
        }
    },
    consulado: {
        name: "Consulado",
        location: "Abidjan, Costa do Marfim",
        description: "Um prédio consular fortificado na Costa do Marfim. O mapa apresenta confrontos intensos focados em janelas de rapel externas, além de um subsolo (Garagem e Arquivos) altamente defendi.",
        image: "consulado",
        stats: {
            dificuldade: 82,
            destruicao: 78,
            verticalidade: 70
        },
        calls: [
            "Garagem",
            "Cafeteria",
            "Piano",
            "Administração",
            "CEO",
            "Arquivos",
            "Reunião",
            "Consulado",
            "Janela Amarela",
            "Escada Amarela"
        ],
        operators: {
            attack: [
                { name: "Ace", desc: "Abertura de brechas à distância" },
                { name: "Thermite", desc: "Brecha termita pesada na Garagem" },
                { name: "Buck", desc: "Abertura e controle vertical" },
                { name: "Dokkaebi", desc: "Chamada telefônica e info de roamers" },
                { name: "Grim", desc: "Minas de abelha Kawan para controle" }
            ],
            defense: [
                { name: "Azami", desc: "Barreiras de proteção Kiba" },
                { name: "Valkyrie", desc: "Câmeras externas para coletar info" },
                { name: "Kaid", desc: "Eletrificar paredes reforçadas" },
                { name: "Smoke", desc: "Negação de passagens e plant com gás" },
                { name: "Fenrir", desc: "Controle de área com minas F-NATT" }
            ]
        }
    }
};

// CONTROLE DO DOM
document.addEventListener("DOMContentLoaded", () => {
    const mapTabs = document.querySelectorAll(".map-tab");
    const dynamicContainer = document.getElementById("dynamic-map-content");
    
    // Elementos Dinâmicos
    const mapNameEl = document.getElementById("map-name");
    const mapLocationEl = document.getElementById("map-location");
    const mapDescriptionEl = document.getElementById("map-description");
    const mapHeroImgEl = document.getElementById("map-hero-img");
    const fallbackHudEl = document.getElementById("fallback-hud");
    
    // Barras de Progresso
    const barDificuldade = document.getElementById("bar-dificuldade");
    const barDestruicao = document.getElementById("bar-destruicao");
    const barVerticalidade = document.getElementById("bar-verticalidade");
    
    // Valores numéricos das barras
    const valDificuldade = document.getElementById("val-dificuldade");
    const valDestruicao = document.getElementById("val-destruicao");
    const valVerticalidade = document.getElementById("val-verticalidade");
    
    // Listas
    const callsListEl = document.getElementById("calls-list");
    const attackOpsEl = document.getElementById("attack-ops");
    const defenseOpsEl = document.getElementById("defense-ops");
    const recommendedCarouselEl = document.getElementById("recommended-carousel");
    const carouselDescriptionEl = document.getElementById("carousel-description");

    // Função para resetar o carrossel para o primeiro operador visível
    function resetCarouselView() {
        const carousel = document.getElementById("recommended-carousel");
        if (carousel) {
            carousel.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        }
    }

    // Função para renderizar os detalhes do mapa
    function renderMap(mapId) {
        const mapData = MAPS_DATABASE[mapId];
        if (!mapData) return;
        
        // Adiciona classe de animação no painel completo
        dynamicContainer.classList.remove("fade-in-slide");
        void dynamicContainer.offsetWidth; // Força reflow para reiniciar animação
        dynamicContainer.classList.add("fade-in-slide");
        
        // Atualiza textos básicos
        mapNameEl.textContent = mapData.name;
        mapLocationEl.innerHTML = `<span style="font-size:1.2rem;">📍</span> ${mapData.location}`;
        mapDescriptionEl.textContent = mapData.description;
        
        // Tratamento da imagem do mapa usando getMapImage() para URLs do CDN
        if (mapData.image) {
            const imageUrl = getMapImage(mapData.image);
            mapHeroImgEl.src = imageUrl;
            mapHeroImgEl.style.display = "block";
            fallbackHudEl.style.display = "none";
            
            // Caso ocorra erro ao carregar a imagem
            mapHeroImgEl.onerror = () => {
                mapHeroImgEl.style.display = "none";
                fallbackHudEl.style.display = "flex";
                const iconSpan = fallbackHudEl.querySelector(".fallback-map-name");
                if (iconSpan) iconSpan.textContent = `Aguardando Imagem do Mapa: ${mapData.name}`;
            };
        } else {
            mapHeroImgEl.style.display = "none";
            fallbackHudEl.style.display = "flex";
        }
        
        // Atualiza as estatísticas (barras animadas)
        setTimeout(() => {
            barDificuldade.style.width = `${mapData.stats.dificuldade}%`;
            valDificuldade.textContent = `${mapData.stats.dificuldade}%`;
            
            barDestruicao.style.width = `${mapData.stats.destruicao}%`;
            valDestruicao.textContent = `${mapData.stats.destruicao}%`;
            
            barVerticalidade.style.width = `${mapData.stats.verticalidade}%`;
            valVerticalidade.textContent = `${mapData.stats.verticalidade}%`;
        }, 100);
        
        // Renderiza Calls
        callsListEl.innerHTML = "";
        mapData.calls.forEach((call, index) => {
            const num = String(index + 1).padStart(2, '0');
            const item = document.createElement("div");
            item.className = "call-item";
            item.innerHTML = `
                <span class="call-number">${num}</span>
                <span class="call-name">${call}</span>
            `;
            callsListEl.appendChild(item);
        });
        
        // Renderiza Operadores do Ataque
        attackOpsEl.innerHTML = "";
        mapData.operators.attack.forEach(op => {
            const badge = document.createElement("div");
            badge.className = "op-badge";
            // Primeira letra como ícone para estilo minimalista
            const firstLetter = op.name.charAt(0);
            badge.innerHTML = `
                <div class="op-icon">${firstLetter}</div>
                <div>
                    <div class="op-name">${op.name}</div>
                    <div style="font-size:0.75rem; color:var(--text-secondary);">${op.desc}</div>
                </div>
            `;
            attackOpsEl.appendChild(badge);
        });
        
        // Renderiza Operadores da Defesa
        defenseOpsEl.innerHTML = "";
        mapData.operators.defense.forEach(op => {
            const badge = document.createElement("div");
            badge.className = "op-badge";
            const firstLetter = op.name.charAt(0);
            badge.innerHTML = `
                <div class="op-icon">${firstLetter}</div>
                <div>
                    <div class="op-name">${op.name}</div>
                    <div style="font-size:0.75rem; color:var(--text-secondary);">${op.desc}</div>
                </div>
            `;
            defenseOpsEl.appendChild(badge);
        });

        // Filtra e exibe os operadores recomendados do carrossel para o mapa
        if (recommendedCarouselEl) {
            const allCards = recommendedCarouselEl.querySelectorAll(".carousel-card");
            allCards.forEach(card => {
                const cardMapId = card.getAttribute("data-map");
                card.style.display = cardMapId === mapId ? "flex" : "none";
            });
        }

        if (carouselDescriptionEl) {
            carouselDescriptionEl.textContent = `${mapData.name}: operadores recomendados.`;
        }

        // Reset do carrossel para o primeiro operador
        currentCardIndex = 0;
        resetCarouselView();
    }
    
    // Configura os ouvintes dos botões do seletor
    mapTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            // Remove active de todos
            mapTabs.forEach(t => t.classList.remove("active"));
            
            // Adiciona active no clicado
            tab.classList.add("active");
            
            // Renderiza o mapa associado
            const targetMap = tab.getAttribute("data-map");
            renderMap(targetMap);
        });
    });
    
    // Formulário de Feedback Tático
    const feedbackForm = document.getElementById("tacticalForm");
    const formStatus = document.getElementById("formStatus");
    
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const nameVal = document.getElementById("opName").value.trim();
            const strategyVal = document.getElementById("strategyDesc").value.trim();
            
            if (!nameVal || !strategyVal) {
                formStatus.className = "form-status error";
                formStatus.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
                return;
            }
            
            // Simulação de Envio Tático
            formStatus.className = "form-status";
            formStatus.textContent = "📡 Transmitindo dados estratégicos criptografados...";
            
            setTimeout(() => {
                formStatus.className = "form-status success";
                formStatus.textContent = "⚡ Sucesso! Estratégia registrada no Hub Central.";
                feedbackForm.reset();
                
                // Limpa a mensagem após 4 segundos
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 4000);
            }, 1500);
        });
    }

    // Autoplay do Carrossel (Slideshow)
    let carouselAutoplayInterval;
    let currentCardIndex = 0;
    const CAROUSEL_INTERVAL = 4000; // 4 segundos por card

    function getCarouselCards() {
        const carousel = document.getElementById("recommended-carousel");
        if (!carousel) return [];
        // Retorna apenas os cards visíveis (não ocultos)
        return Array.from(carousel.querySelectorAll(".carousel-card")).filter(card => card.style.display !== "none");
    }

    function scrollToCard(index) {
        const carousel = document.getElementById("recommended-carousel");
        const cards = getCarouselCards();
        
        if (!carousel || cards.length === 0) return;

        // Garante que o índice seja válido e faz loop
        currentCardIndex = index % cards.length;
        const card = cards[currentCardIndex];

        if (card) {
            card.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            });
        }
    }

    function startCarouselAutoplay() {
        if (carouselAutoplayInterval) clearInterval(carouselAutoplayInterval);
        
        carouselAutoplayInterval = setInterval(() => {
            currentCardIndex++;
            scrollToCard(currentCardIndex);
        }, CAROUSEL_INTERVAL);
    }

    // Para o autoplay ao passar o mouse
    const carouselElement = document.getElementById("recommended-carousel");
    if (carouselElement) {
        carouselElement.addEventListener("mouseenter", () => {
            if (carouselAutoplayInterval) clearInterval(carouselAutoplayInterval);
        });

        carouselElement.addEventListener("mouseleave", () => {
            startCarouselAutoplay();
        });
    }
    
    // Inicializa carregando o mapa "Clube"
    renderMap("clube");
    
    // Inicia o autoplay do carrossel após um breve delay
    setTimeout(() => {
        startCarouselAutoplay();
    }, 500);
});
