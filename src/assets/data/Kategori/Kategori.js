import { 
    faBreadSlice, 
    faCalendar, 
    faCocktail, 
    faCoffee, 
    faCoins, 
    faLeaf, 
    faMugHot, 
    faWineGlassAlt 
} from '@fortawesome/free-solid-svg-icons'

const Category = [
    {
        id: 0,
        value: 'Kategori',
        icon: faCoffee,
        item: [
            {
                id: 0,
                title: 'Hot Coffee',
                link: 'hot'
            },
            {
                id: 1,
                title: 'Ice Coffee',
                link: 'Ice'
            }
        ]
    },
    {
        id: 1,
        value: 'Rasa',
        icon: faCocktail,
        item: [
            {
                id: 0,
                title: 'Vanilla',
                link: 'vanilla'
            },
            {
                id: 1,
                title: 'Chocolate',
                link: 'chocolate'
            },
        ]
    },{
        id: 2,
        value: 'Teh',
        icon: faLeaf,
        item: [
            {
                id: 0,
                title: 'Green Tea',
                link: 'greetea'
            },
            {
                id: 1,
                title: 'Black Tea',
                link: 'blacktea'
            },
        ]
    },{
        id: 3,
        value: 'Coldrink',
        icon: faMugHot,
        item: [
            {
                id: 0,
                title: 'Ice Tea',
                link: 'icetea'
            },
            {
                id: 1,
                title: 'Lemonade',
                link: 'lemonade'
            },
        ]
    },{
        id: 4,
        value: 'Makanan',
        icon: faBreadSlice,
        item: [
            {
                id: 0,
                title: 'Croissant',
                link: 'croissant'
            },
            {
                id: 1,
                title: 'Bagel',
                link: 'bagel'
            },
        ]
    },{
        id: 5,
        value: 'Ukuran',
        icon: faWineGlassAlt,
        item: [
            {
                id: 0,
                title: 'Small',
                link: 'small'
            },
            {
                id: 1,
                title: 'Medium',
                link: 'medium'
            },
            {
                id: 3,
                title: 'Large',
                link: 'large'
            },
        ]
    },{
        id: 6,
        value: 'Harga',
        icon: faCoins,
        item: [
            {
                id: 0,
                title: 'Dibawah Rp20.000',
                link: 'basic'
            },
            {
                id: 1,
                title: 'Rp20.000 - Rp50.000',
                link: 'medium'
            },
            {
                id: 2,
                title: 'Rp50.000 - Rp100.000',
                link: 'royal'
            },
            {
                id: 3,
                title: 'Diatas Rp100.000',
                link: 'luxury'
            },
        ]
    },
    {
        id: 7,
        value: 'Event',
        icon: faCalendar,
        item: [
            {
                id: 0,
                title: 'Live Music',
                link: 'livemusic'
            },
            {
                id: 1,
                title: 'Open Mic',
                link: 'openmic'
            },
        ]
    }
]

export default Category;