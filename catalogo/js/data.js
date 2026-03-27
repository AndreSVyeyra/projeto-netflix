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
                img: "https://m.media-amazon.com/images/M/MV5BZTNhZDdkNmItYzI4Mi00Zjg1LWI0ZDktOWQ1NWRlNzZiZmY5XkEyXkFqcGc@._V1_.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta) a ser exibido
                badge: "Clássico",
                // Cor do badge em CSS
                badgeColor: "red",
                // Progresso de assistência (0 = não assistido)
                progress: 50,
                // URL do link do YouTube para trailer ou preview
                youtube: "https://www.youtube.com/watch?v=a9tq0aS5Zu8"
            },
            // Segundo item - Gladiador
            {
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/c7dd731ac66fef6805cce493c2eebd2affd504db9adbdb30e67057fb371ede8d.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=ztO4Bk0ALGI"
            },
            // Terceiro item
            {
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/82d449a8fb2604a42c68376608c999216302fedb61011888f71c4f2093e16148.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=ujv2fLp3lU8"
            },
            // Quarto item
            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
            },

            // Quinto item

            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
            },

            // Sexto item
            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
            },

            // Sétimo item
            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
            },

            // Oitavo item

            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
            },

            // Nono item
            {
                // URL da imagem de capa
                img: "https://is1-ssl.mzstatic.com/image/thumb/Video211/v4/29/21/34/2921340a-8566-d6c8-321d-968c3e03abb5/SPE_CHAINSAW_MAN_THE_MOVIE_REZE_ARC_TH_BR_ARTWORK_PT-BR_3840x2160_54LYXJ00001G71.jpg/1200x675.jpg",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-FzTVkZNCRM"
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
