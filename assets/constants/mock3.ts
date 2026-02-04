const data = [
        {
                "id": "1",
                "nome": "Sensor Capacitivo",
                "text": "Detecta toque através de mudanças na capacitância, usado em telas sensíveis ao toque.",
                "imagem": require('@/assets/images/Capacitivo.jpg')
        },
        {
                "id": "2",
                "nome": " Sensor Resistivo",
                "text": " Responde ao toque por pressão, comum em telas de tablets e painéis sensíveis.",
                "imagem": require('@/assets/images/Resistivo.jpg')
        },
        {
                "id": "3",
                "nome": "Sensor de Proximidade",
                "text": "Detecta se algo está próximo à tela, útil para toque sem contato direto.",
                "imagem": require('@/assets/images/Proximidade.jpg')
        },
        {
                "id": "4",
                "nome": "Sensor de Pressao",
                "text": "Detecta a força do toque, permitindo diferentes ações baseadas na pressão aplicada.",
                "imagem": require('@/assets/images/Pressao.webp')
        },
        {
                "id": "5",
                "nome": "Sensor Infravermelha de Toque",
                "text": "Usa luz infravermelha para detectar toque sem contato físico, ideal para painéis públicos.",
                "imagem": require('@/assets/images/Infravermelho.jpg'),
        },
];

export default data;