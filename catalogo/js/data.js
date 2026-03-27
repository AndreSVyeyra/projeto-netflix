// Exporta um array contendo todas as categorias de conteúdo com seus respectivos itens
export const categories = [
    // ===== PRIMEIRA CATEGORIA: ÉPICOS =====
    {
        // Título da categoria que será exibido na interface
        title: "Épicos",
        // Array com os itens (filmes/séries) da categoria
        items: [
            // Primeiro item - Forrest Gump
            {
                // URL da imagem de capa do filme
                img: "https://m.media-amazon.com/images/S/pv-target-images/81ef9334873b4dc9a7fe746881d20216a19411f5ab1d122e21e6c65ae2b45eab.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta) a ser exibido
                badge: "Clássico",
                // Cor do badge em CSS
                badgeColor: "red",
                // Progresso de assistência (0 = não assistido)
                progress: 0,
                // URL do link do YouTube para trailer ou preview
                youtube: "https://www.youtube.com/watch?v=OhNwckCLzis"
            },
            // Segundo item - Gladiador
            {
                // URL da imagem de capa
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            // Terceiro item
            {
                // URL da imagem de capa
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            // Quarto item
            {
                // URL da imagem de capa
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    
    // ===== SEGUNDA CATEGORIA: SÉRIES =====
    {
        // Título da categoria que será exibido na interface
        title: "Séries",
        // Array com os itens (séries) da categoria
        items: [
            // Primeira série - com badge "Nova temporada" e está no top10
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Nova temporada",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Segunda série - está no top10, sem badge
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Terceira série - com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Quarta série - com badge "Novidade"
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    },
    
    // ===== TERCEIRA CATEGORIA: PARA MARATONAR =====
    {
        // Título da categoria que será exibido na interface
        title: "Para maratonar",
        // Array com os itens (séries/filmes) da categoria
        items: [
            // Primeiro item - está no top10, sem badge
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Segundo item - está no top10, com badge "Novidade"
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Terceiro item - está no top10, com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            // Quarto item - está no top10, com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    }
    // Fim do array de categorias
];
