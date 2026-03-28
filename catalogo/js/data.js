// Exporta um array contendo todas as categorias de conteúdo com seus respectivos itens
export const categories = [
    // ===== PRIMEIRA CATEGORIA: ÉPICOS =====
    {
        // Título da categoria que será exibido na interface
        title: "Mais Assistidos",
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
                img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GRMG8ZQZR-backdrop_wide",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=ZcsbhQxhFqU"
            },

            // Sexto item
            {
                // URL da imagem de capa
                img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/86a1341f9d211bbf478cf2921823dc09.png",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=MkzFKJjNnvM"
            },

            // Sétimo item
            {
                // URL da imagem de capa
                img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=cover,format=auto,quality=85,width=1920/keyart/GR751KNZY-backdrop_wide",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=LV-nazLVmgo"
            },

            // Oitavo item

            {
                // URL da imagem de capa
                img: "https://gqcanimes.com.br/wp-content/uploads/2024/09/Tensei-Shitara-Slime-Datta-Ken-tensura-anime-1250x703.webp",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=gqrkjNpoeQM"
            },

            // Nono item
            {
                // URL da imagem de capa
                img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3393070/2da767822d14b2961a51e05b3dc8461ac5490ebb/capsule_616x353.jpg?t=1764040502",
                // Progresso de assistência
                progress: 0,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=JwF7bhvnCxI"
            },
        ]
    },
    
    // ===== SEGUNDA CATEGORIA: RECOMENDADOS PARA VOCÊ =====
    {
        // Título da categoria que será exibido na interface
        title: "Recomendados para você",
        // Array com os itens (séries) da categoria
        items: [
            // Primeira série - com badge "Nova temporada" e está no top10
            { 
                // URL da imagem de capa
                img: "https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2023/07/hells-paradise.jpg?resize=1200%2C640&ssl=1",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Nova temporada",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=aaHZdwPZX6g"
            },
            // Segunda série - está no top10, sem badge
            { 
                // URL da imagem de capa
                img: "https://a.storyblok.com/f/178900/1920x1080/b736a20882/my-hero-academia-season-7-key-art-wide.png/m/1200x0/filters:quality(95)format(webp)",
                // Flag indicando se está no top 10
                top10: true,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=zz37nGym3OQ"
            },
            // Terceira série - com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABayJnADyFoK-MV-x3H3RsDZIyJASAuh8VDjTxhFsi6okDmsghQoSJCFCShzksIipJQ2-osZNxU0r3PPh8DsHcITowwClRBE2IYSA.jpg?r=56f",
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=3RHXK5fMnU4"
            },
            // Quarta série - com badge "Novidade"
            { 
                // URL da imagem de capa
                img: "https://wallpapers.com/images/hd/trigun-pictures-4gffh21jsn8vipep.jpg",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=AzZYXqUdp5o"
            },

            // Quinto item - com badge "Novidade"
             { 
                // URL da imagem de capa
                img: "https://images.mubicdn.net/images/film/254699/cache-505127-1745496716/image-w1280.jpg?size=800x",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=G2raRyN6kgY"
            },

            // Sexto item - com badge "Novidade"
             { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/48821409bc0fa041265932039e92d773be98d651d0ad809662ae38fb1d2fcae6.png",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=BwdMT-OiARI"
            },
            
             // Sétimo item - com badge "Novidade"

             { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/d579827231f8a258e217ae9f0f2b8abeffca06a8388f9d06e999605a74608e57.jpg",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=n0QWVEXoUHI"
            },

                // Oitavo item - com badge "Novidade"
             { 
                // URL da imagem de capa
                img: "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/0da0a0e6627dfbc45cfc1411b02ee649.jpg",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=AYlksPeSXrs"
            },

                // Nono item - com badge "Novidade"

             { 
                // URL da imagem de capa
                img: "https://wallpapers.com/images/hd/overlord-pictures-o2hl2on9dwto7kpc.jpg",
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=uhlBqFj9kDw"
            },

            { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/M/MV5BZTNhZDdkNmItYzI4Mi00Zjg1LWI0ZDktOWQ1NWRlNzZiZmY5XkEyXkFqcGc@._V1_.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=3UiP4GwWNv0",
            },
            // Segundo item - está no top10, com badge "Novidade"
            { 
                // URL da imagem de capa
                img: "https://i0.wp.com/geekpopnews.com.br/wp-content/uploads/2025/06/Gachiakuta.jpg?resize=1200%2C640&ssl=1",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=XxvHDUw_4jc"
            },
        ]
    },
    
    // ===== TERCEIRA CATEGORIA: Séries =====
    {
        // Título da categoria que será exibido na interface
        title: "Clássicos Imperdíveis",
        // Array com os itens (séries/filmes) da categoria
        items: [
            // Primeiro item - está no top10, sem badge
            { 
                // URL da imagem de capa
                img: "https://a.storyblok.com/f/178900/1460x820/c43bdf0071/code-geass-hoshioi-no-aspal-key-visual-horizontal.jpg/m/1200x0/filters:quality(95)format(webp)",
                // Flag indicando se está no top 10
                top10: true,
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=v-AGjx0N24U",
            },
            // Segundo item - está no top10, com badge "Novidade"
            { 
                // URL da imagem de capa
                img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/46ad6dab-ca26-48c5-af71-0727ae79d735/compose?aspectRatio=1.78&format=webp&width=1200",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novidade",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=eqSZbVvgylI"
            },
            // Terceiro item - está no top10, com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://images.justwatch.com/backdrop/178120963/s640/naruto.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=-G9BqkgZXRA"
            },
            // Quarto item - está no top10, com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/2fac05d582494e996087fbc93b4137e8413f81c8891f5d38a58e46d36cd84966.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=NlJZ-YgAt-c"
            },

            // Quinto item - está no top10, com badge "Novo episódio"

            { 
                // URL da imagem de capa
                img: "https://quintacapa.com.br/wp-content/uploads/2020/07/Hunter-x-Hunter-hunter-x-hunter-destaque.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=d6kBeJjTGnY"
            },

                // Sexto item - está no top10, com badge "Novo episódio"
            { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/5aebe5495ba8d8233a7f7065aae472a0ccf6e7fb4b772e9835845a6b97cb10ad.png",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=13nSISwxrY4"
            },

            // Sétimo item - está no top10, com badge "Novo episódio"

            { 
                // URL da imagem de capa
                img: "https://gaming-cdn.com/images/products/21229/orig/steins-gate-re-boot-pc-steam-cover.jpg?v=1764148062",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=uMYhjVwp0Fk"
            },

            // Oitavo item - está no top10, com badge "Novo episódio"

            { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/2fac05d582494e996087fbc93b4137e8413f81c8891f5d38a58e46d36cd84966.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=NlJZ-YgAt-c"
            },
            

            { 
                // URL da imagem de capa
                img: "https://i.ytimg.com/vi/ND9UmCXLgYY/maxresdefault.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=OhNwckCLzis"
            },

            { 
                // URL da imagem de capa
                img: "https://m.media-amazon.com/images/S/pv-target-images/6ef970938930c37de818cdc445006c971fc0b145cbf63048f9ed0ae1f49f8ac8._BR-6_AC_SX720_FMjpg_.jpg",
                // Flag indicando se está no top 10
                top10: true,
                // Texto do badge (etiqueta)
                badge: "Novo episódio",
                // Cor do badge
                badgeColor: "red",
                // URL do vídeo/trailer no YouTube
                youtube: "https://www.youtube.com/watch?v=xWKzbhAUeZE"
            },
        ]
    }
    // // Fim do array de categorias
];
