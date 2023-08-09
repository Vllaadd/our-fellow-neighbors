const treeData = [
  {
    coordinates:
    {
      lat: 40.674586,
      lng: -73.961682
    },
    type: 'Japanese Zelkova',
    img:
    {
      img: require('../assets/Japanese-zelkova.png'),
      leafImg: require('../assets/japanese-zelkova-leaf.jpeg')
    },
    about: {
      Name: "Japanese Zelkova",
      NativeTo: "Japan, China, Taiwan",
      Height: "Typically reaches 50-80 feet",
      Lifespan: "Can live for over 100 years",
      FunFact: "Japanese Zlekova is often mistaken for the American Elm due to its similar appearance, and its popular alternative where Dutch Elm Disease is a concern"
    }
  },
  {
    coordinates:
    {
      lat: 40.694756,
      lng: -73.975830
    },
    type: 'London Plane Tree',
    img:
    {
      img: require('../assets/london-plane-tree.jpeg'),
      leafImg: require('../assets/london-plane-tree-leaf.jpeg')
    },
    about: {
      Name: 'London Plane Tree',
      NativeTo: 'Europe and Asia',
      Height: 'Can reach 70-100 feet',
      Lifespan: 'Typically lives for 150-200 years',
      FunFact: 'The London Plane Tree is a popular urban tree due to its tolerance for pollution and adaptable growth.'
    }
  },
  {
    coordinates:
    {
      lat: 40.688163,
      lng: -73.974073
    },
    type: 'Norway Maple',
    img:
    {
      img: require('../assets/norway-maple.jpeg'),
      leafImg: require('../assets/norway-maple-leaf.jpeg')
    },
    about: {
      Name: 'Norway Maple',
      NativeTo: 'Europe and western Asia',
      Height: 'Usually grows 40-50 feet, occasionally up to 100 feet',
      Lifespan: 'Can live for 100-200 years',
      FunFact: 'The Norway Maple is widely planted as a shade tree but can be considered invasive in some regions due to its prolific seed production and ability to outcompete native species.'

    }
  }, {
    coordinates:
    {
      lat: 40.698077,
      lng: -73.967489
    },
    type: 'Oak',
    img:
    {
      img: require('../assets/oak.jpeg'),
      leafImg: require('../assets/oak-leaf.jpeg')
    },
    about: {
      Name: 'Oak',
      NativeTo: 'Northern Hemisphere',
      Height: 'Height varies by species, ranging from 30-100 feet or more',
      Lifespan: 'Can live for several hundred years',
      FunFact: 'Oaks are iconic trees and have cultural significance in many societies. They are known for their strong wood and are important for supporting diverse ecosystems.'

    }
  },
  {
    coordinates:
    {
      lat: 40.683128,
      lng: -73.974932
    },
    type: 'American Elm',
    img:
    {
      img: require('../assets/american-elm.webp'),
      leafImg: require('../assets/american-elm-leaf.jpeg')
    },
    about: {
      Name: 'American Elm',
      NativeTo: 'Eastern North America',
      Height: 'Typically reaches 60-80 feet',
      Lifespan: 'Can live for several hundred years',
      FunFact: 'The American Elm was once a dominant and beloved urban tree, but its population was devastated by Dutch Elm Disease. Efforts are ongoing to restore this iconic species.'

    }
  },
  {
    coordinates:
    {
      lat: 40.679772,
      lng: -73.975377
    },
    type: 'Tulip Tree',
    img:
    {
      img: require('../assets/tulip-tree.jpeg'),
      leafImg: require('../assets/tulip-tree-leaf.jpeg')
    },
    about: {
      Name: 'Tulip Tree',
      NativeTo: 'Eastern North America',
      Height: 'Can reach 70-90 feet or more',
      Lifespan: 'Typically lives for 150-200 years',
      FunFact: 'The Tulip Tree, also known as the Tulip Poplar, produces distinct tulip-like flowers and is one of the tallest hardwood trees in North America.'

    }
  },
  {
    coordinates:
    {
      lat: 40.662100,
      lng: -73.976751
    },
    type: 'Red Maple',
    img:
    {
      img: require('../assets/red-maple.jpeg'),
      leafImg: require('../assets/red-maple-leaf.webp')
    },
    about: {
      Name: 'Red Maple',
      NativeTo: 'Eastern North America',
      Height: 'Can vary from 40-60 feet, sometimes taller',
      Lifespan: 'Typically lives for 100-150 years',
      FunFact: 'The Red Maple is known for its vibrant red leaves in the fall. It is a versatile and adaptable tree, often found in a variety of habitats.'

    }
  },
  {
    coordinates:
    {
      lat: 40.660968,
      lng: -73.981799
    },
    type: 'White Oak',
    img:
    {
      img: require('../assets/white-oak.webp'),
      leafImg: require('../assets/white-oak-leaf.jpeg')
    },
    about: {
      Name: 'White Oak',
      NativeTo: 'Eastern North America',
      Height: 'Can grow 60-100 feet tall',
      Lifespan: 'Lives for several hundred years',
      FunFact: 'The White Oak is a symbol of strength and endurance. It is highly valued for its strong wood and is often used in furniture-making, construction, and barrel production.'

    }
  },
  {
    coordinates:
    {
      lat: 40.693921,
      lng: -73.990115
    },
    type: 'Black Cherry',
    img:
    {
      img: require('../assets/black-cherry.jpeg'),
      leafImg: require('../assets/black-cherry-leaf.jpeg')
    },
    about: {
      Name: 'Black Cherry',
      NativeTo: 'Eastern North America',
      Height: 'Typically grows 50-80 feet tall',
      Lifespan: 'Can live for 30-50 years or more',
      FunFact: 'The Black Cherry tree produces small, dark fruit that is often used for making jams and pies. Its also a valuable timber tree and serves as an important food source for wildlife.'
    }
  },
  {
    coordinates:
    {
      lat: 40.655648,
      lng: -73.958816
    },
    type: 'Eastern Redcedar',
    img:
    {
      img: require('../assets/eastern-red-cedar.jpeg'),
      leafImg: require('../assets/eastern-red-cedar-leaf.jpeg')
    },
    about: {
      Name: 'Eastern Redcedar',
      NativeTo: 'Eastern North America',
      Height: 'Can grow 20-40 feet tall',
      Lifespan: 'Typically lives for 30-40 years, but some can live longer',
      FunFact: 'The Eastern Redcedar is not a true cedar but a juniper. Its wood is aromatic and insect-resistant, and its often used for making cedar chests and other wooden items'

    }
  },
  {
    coordinates:
    {
      lat: 40.688273,
      lng: -73.974238
    },
    type: 'Sugar Maple',
    img:
    {
      img: require('../assets/sugar-maple.jpeg'),
      leafImg: require('../assets/sugar-maple-leaf.jpeg')
    },
    about: {
      Name: 'Sugar Maple',
      NativeTo: 'Eastern North America',
      Height: 'Typically grows 60-75 feet tall',
      Lifespan: 'Can live for several hundred years',
      FunFact: 'The Sugar Maple is known for its brilliant fall foliage and is the primary source of maple syrup. Its wood is also used for furniture-making and flooring.'

    }
  },
  {
    coordinates:
    {
      lat: 40.650619,
      lng: -73.962350
    },
    type: 'Sassafras',
    img:
    {
      img: require('../assets/sassafras.jpeg'),
      leafImg: require('../assets/sassafras-leaf.jpeg')
    },
    about: {
      Name: 'Sugar Maple',
      NativeTo: 'Eastern North America',
      Height: 'Typically grows 60-75 feet tall',
      Lifespan: 'Can live for several hundred years',
      FunFact: 'The Sugar Maple is known for its brilliant fall foliage and is the primary source of maple syrup. Its wood is also used for furniture-making and flooring.'

    }
  },
  {
    coordinates:
    {
      lat: 40.691829,
      lng: -73.998659
    },
    type: 'Hackberry',
    img:
    {
      img: require('../assets/hackberry.jpeg'),
      leafImg: require('../assets/hackberry-leaf.jpeg')
    },
    about: {
      Name: 'Hackberry',
      NativeTo: 'North America, Europe, and Asia',
      Height: 'Can grow 40-60 feet tall',
      Lifespan: 'Typically lives for 20-30 years, but can live longer',
      FunFact: 'The Hackberry tree is known for its distinctive bark and small, sweet, berry-like fruits. It provides important habitat and food for birds and wildlife.'

    }
  },
  {
    coordinates:
    {
      lat: 40.679772,
      lng: -73.974932
    },
    type: 'Bald Cypress',
    img:
    {
      img: require('../assets/bald-cypress.webp'),
      leafImg: require('../assets/bald-cypress-leaf.jpeg')
    },
    about: {
      Name: 'Bald Cypress',
      NativeTo: 'Southeastern United States and Mexico',
      Height: 'Can reach 70-120 feet tall',
      Lifespan: 'Lives for several hundred years',
      FunFact: 'The Bald Cypress is known for its unique appearance, with "knees" or protrusions that emerge from the water. It is well-adapted to wetlands and is often planted as an ornamental tree.'

    }
  },
  {
    coordinates:
    {
      lat: 40.664876,
      lng: -73.991946
    },
    type: 'Red Horse Chestnut',
    img:
    {
      img: require('../assets/red-horse-chestnut.jpeg'),
      leafImg: require('../assets/red-horse-chestnut-leaf.jpg')
    },
    about: {
      Name: 'Red Horse Chestnut',
      NativeTo: 'Southern Europe and western Asia',
      Height: 'Typically grows 30-50 feet tall',
      Lifespan: 'Can live for 50-150 years',
      FunFact: 'The Red Horse Chestnut is known for its showy, red flower clusters in the spring. Its often planted as an ornamental tree for its aesthetic value.'

    }
  },
  {
    coordinates:
    {
      lat: 40.677726,
      lng: -73.961932
    },
    type: 'Silver Maple',
    img:
    {
      img: require('../assets/silver-maple.jpeg'),
      leafImg: require('../assets/silver-maple-leaf.jpg')
    },
    about: {
      Name: 'Silver Maple',
      NativeTo: 'Eastern North America',
      Height: 'Can grow 50-80 feet tall',
      Lifespan: 'Lives for 15-100 years',
      FunFact: 'The Silver Maple is known for its rapid growth rate and distinctive silver underside of its leaves. Its commonly found near bodies of water and is valued for its shade.'

    }
  },
  {
    coordinates:
    {
      lat: 40.660641,
      lng: -73.961579
    },
    type: 'Honey Locust',
    img:
    {
      img: require('../assets/honey-locust.webp'),
      leafImg: require('../assets/honey-locust-leaf.webp')
    },
    about: {
      Name: 'Honey Locust',
      NativeTo: 'Eastern and central North America',
      Height: 'Can grow 30-70 feet tall',
      Lifespan: 'Lives for 30-150 years',
      FunFact: 'The Honey Locust tree produces long, twisted pods with sweet pulp thats edible for humans and animals.Its thorns, however, can make it challenging to work with.'
      
    }
  },
  {
    coordinates:
    {
      lat: 40.697128,
      lng: -73.972063
    },
    type: 'Black Tupelo',
    img:
    {
      img: require('../assets/black-tupelo.jpeg'),
      leafImg: require('../assets/black-tupelo-leaf.jpeg')
    },
    about: {
      Name: 'Black Tupelo',
      NativeTo: 'Eastern North America',
      Height: 'Typically grows 30-50 feet tall',
      Lifespan: 'Can live for 200-600 years',
      FunFact: 'The Black Tupelo, also known as the Black Gum, is valued for its brilliant fall foliage and its berries that provide food for wildlife. It has a long lifespan and can thrive in various soil conditions.'

    }
  },
  {
    coordinates:
    {
      lat: 40.676482,
      lng: -73.981926
    },
    type: 'Basswood',
    img:
    {
      img: require('../assets/basswood.jpeg'),
      leafImg: require('../assets/basswood-leaf.jpeg')
    },
    about: {
      Name: 'Basswood',
      NativeTo: 'North America, Europe, and Asia',
      Height: 'Can grow 60-80 feet tall',
      Lifespan: 'Typically lives for 100-150 years',
      FunFact: 'The Basswood tree, also known as the American Linden, produces fragrant, nectar-rich flowers that attract bees. Its soft wood is used for carving and its leaves provide food for caterpillars.'

    }
  },
  {
    coordinates:
    {
      lat: 40.669719,
      lng: -73.960290
    },
    type: 'Southern Magnolia',
    img:
    {
      img: require('../assets/southern-magnolia.avif'),
      leafImg: require('../assets/southern-magnolia-leaf.jpeg')
    },
    about: {
      Name: 'Southern Magnolia',
      NativeTo: 'Southern United States',
      Height: 'Can grow 60-80 feet tall',
      Lifespan: 'Typically lives for 80-120 years',
      FunFact: 'The Southern Magnolia is known for its large, fragrant flowers and glossy evergreen leaves. Its a popular ornamental tree in the southern U.S.and has cultural significance.'
    }
  },
  {
    coordinates:
    {
      lat: 40.700247,
      lng: -73.983698
    },
    type: 'Buckeye',
    img:
    {
      img: require('../assets/buckeye.jpeg'),
      leafImg: require('../assets/buckeye-leaf.jpeg')
    },
    about: {
      Name: 'Buckeye',
      NativeTo: 'Eastern North America',
      Height: 'Typically grows 20-40 feet tall',
      Lifespan: 'Lives for 20-50 years',
      FunFact: 'The Buckeye tree produces distinctive, shiny brown seeds that resemble the eye of a deer, giving it its name. Some species are also known for their showy flowers.'
    }
  },
  {
    coordinates:
    {
      lat: 40.685735,
      lng: -73.965118
    },
    type: 'Pignut Hickory',
    img:
    {
      img: require('../assets/pignut-tree.jpg'),
      leafImg: require('../assets/pignut-hickory-leave.jpeg')
    },
    about: {
      Name: 'Pignut Hickory',
      NativeTo: 'Eastern North America',
      Height: 'Can grow 60-100 feet tall',
      Lifespan: 'Lives for 100-200 years',
      FunFact: 'The Pignut Hickory is valued for its hard, strong wood and its edible nuts. Its an important food source for wildlife and has historical uses in Native American cultures.'
    }
  },
];

export default treeData;

