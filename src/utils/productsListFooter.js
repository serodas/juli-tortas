import rosa1 from '@images/rosa_1.png';
import rosa2 from '@images/rosa_2.png';
import rosa3 from '@images/rosa_3.png';
import rosa4 from '@images/rosa_4.png';
import rosa5 from '@images/rosa_5.png';

import frozen1 from '@images/frozen_1.png';
import frozen2 from '@images/frozen_2.png';
import frozen3 from '@images/frozen_3.png';
import frozen4 from '@images/frozen_4.png';

import modista1 from '@images/modista_1.png';
import modista2 from '@images/modista_2.png';
import modista3 from '@images/modista_3.png';
import modista4 from '@images/modista_4.png';

const productsListFooter = [
    {
        id: 1,
        name: 'Rosa 1',
        image: rosa1,
        description: 'sdfsdfsd',
        images: [
            {
                id: 1,
                image: rosa1,
            },
            {
                id: 2,
                image: rosa2,
            },
            {
                id: 3,
                image: rosa3,
            },
            {
                id: 4,
                image: rosa4,
            },
            {
                id: 5,
                image: rosa5,
            },
        ]
    },
    {
        id: 2,
        name: 'grado',
        image: modista1,
        description: 'sdfsdfsd',
        images: [
            {
                id: 1,
                image: modista2,
            },
            {
                id: 2,
                image: modista3,
            },
            {
                id: 3,
                image: modista4,
            },
        ]
    },
    {
        id: 3,
        name: 'Frozen',
        image: frozen1,
        description: 'sdfsdfsd',
        images: [
            {
                id: 1,
                image: frozen2,
            },
            {
                id: 2,
                image: frozen3,
            },
            {
                id: 3,
                image: frozen4,
            },
        ]
    }
];

export default productsListFooter;