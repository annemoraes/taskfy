export function loadLists() {
    return [{
            title: 'A fazer',
            creatable: true,
            cards: [
                {
                    id: 1,
                    content: 'Implementar testes unitários',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 2,
                    content: 'Criar interface do projeto NodeJS',
                    labels: ['#DC143C'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
               
                {
                    id: 3,
                    content: 'Aplicativo com React Native',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 4,
                    content: 'Utilizar server-side rendering com ReactJS"',
                    labels: ['#B8860B'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 5,
                    content: 'Gravar deploy ReactJS',
                    labels: ['#54e1f7'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
            ]
        },
        {
            title: 'Em andamento',
            creatable: false,
            cards: [{
                id: 6,
                content: 'Backend',
                labels: ['#DC143C'],
                user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
            }]
        },
        {
            title: 'Tarefas pausadas',
            creatable: false,
            cards: [{
                    id: 7,
                    content: 'Gravar sobre Geolocalização e mapas com React Native',
                    labels: ['#7159c1'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 8,
                    content: 'Gravar testes',
                    labels: ['#54e1f7'],
                    user: 'https://api.adorable.io/avatars/285/abott@adorable.png'
                },
                {
                    id: 9,
                    content: 'Ajustes na biblioteca unform',
                    labels: [],
                }
            ]
        },
        {
            title: 'Concluído',
            creatable: false,
            done: true,
            cards: [{
                    id: 10,
                    content: 'Escolha das tecnologias',
                    labels: [],
                },
                {
                    id: 12,
                    content: 'Prototipo da interface',
                    labels: ['#54e1f7'],
                },
                {
                    id: 13,
                    content: 'Funcionalidades"',
                    labels: ['#7159c1'],
                }
            ]
        },
    ];
}