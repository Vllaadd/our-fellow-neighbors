const birdsData = [
    {
        img: require('../assets/birds/american-robin.jpeg'),
        name: "American Robin",
        lifeSpan: "Average lifespan in the wild is 2 to 6 years.",
        migration: "Migratory bird found across North America. They migrate south for the winter and return to breed in the spring.",
        reproduction: "They build cup-shaped nests and lay blue-green eggs. They often raise multiple broods in a season.",
        conservationStatus: "Least Concern",
        funFact: "The American Robin is known for its cheerful song and is often associated with the arrival of spring."
    },
    {
        img: require('../assets/birds/northern-cardinal.jpeg'),
        name: "Northern Cardinal",
        lifeSpan: "Average lifespan is 3 years, but can live longer in ideal conditions.",
        migration: "Resident bird found in North America. Some populations may move locally in response to food availability.",
        reproduction: "Pairs mate for life. The female lays eggs in a cup-shaped nest.",
        conservationStatus: "Least Concern",
        funFact: "Male Northern Cardinals are known for their bright red plumage, while females have a more subtle coloration."
    },
    {
        img: require('../assets/birds/house-sparrow.jpeg'),
        name: "House Sparrow",
        lifeSpan: "Average lifespan in the wild is 3 to 4 years.",
        migration: "Non-migratory bird that has spread to urban and suburban areas worldwide.",
        reproduction: "They build nests in cavities, including human-made structures.",
        conservationStatus: "Least Concern",
        funFact: "House Sparrows are adaptable and often seen near human habitation."
    },{
        name: "Rock Pigeon (Pigeon)",
        lifeSpan: "Average lifespan in the wild is 3 to 5 years.",
        migration: "Non-migratory bird that has adapted to urban environments worldwide.",
        reproduction: "They build nests in crevices and ledges of buildings.",
        conservationStatus: "Least Concern",
        funFact: "Rock Pigeons are descendants of wild cliff-dwelling pigeons and have a long history of association with humans."
    },
    {
        img: require('../assets/birds/european-starling.jpeg'),
        name: "European Starling",
        lifeSpan: "Average lifespan is about 2 to 3 years.",
        migration: "Migratory bird that often forms large flocks during migration.",
        reproduction: "They build nests in cavities and crevices, and females lay pale blue-green eggs.",
        conservationStatus: "Least Concern",
        funFact: "The introduction of the European Starling to North America was a deliberate action by individuals who wanted to introduce all birds mentioned in Shakespeare's works."
    },
    {
        img: require('../assets/birds/mourning-dove.jpeg'),
        name: "Mourning Dove",
        lifeSpan: "Average lifespan in the wild is 1 to 5 years.",
        migration: "Migratory bird with populations that move in response to food and weather conditions.",
        reproduction: "They build flimsy nests in trees and shrubs, and females lay two eggs.",
        conservationStatus: "Least Concern",
        funFact: "Mourning Doves are one of the most widespread and abundant bird species in North America."
    },
    {
        img: require('../assets/birds/canada-goose.jpeg'),
        name: "Canada Goose",
        lifeSpan: "Average lifespan in the wild is 10 to 25 years.",
        migration: "Migratory bird that travels long distances between breeding and wintering grounds.",
        reproduction: "They build nests near water bodies, and females lay 3 to 8 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Canada Geese are known for their V-shaped flight formations during migration."
    },
    {
        img: require('../assets/birds/mallard-duck.jpeg'),
        name: "Mallard Duck",
        lifeSpan: "Average lifespan in the wild is 5 to 10 years.",
        migration: "Migratory bird that often forms mixed flocks with other dabbling ducks.",
        reproduction: "They build nests in grassy areas, and females lay 8 to 13 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Mallards are highly adaptable and can be found in a wide range of wetland habitats."
    },
    {
        img: require('../assets/birds/red-tailed-hawk.jpeg'),
        name: "Red-tailed Hawk",
        lifeSpan: "Average lifespan in the wild is 10 to 15 years.",
        migration: "Partially migratory species with some populations migrating south for the winter.",
        reproduction: "They build large nests in trees and lay 2 to 3 eggs.",
        conservationStatus: "Least Concern",
        funFact: "The Red-tailed Hawk's distinctive scream is often used as a stock sound effect in movies and television."
    },{
        img: require('../assets/birds/peregrine-falcon.jpeg'),
        name: "Peregrine Falcon",
        lifeSpan: "Average lifespan in the wild is 7 to 15 years.",
        migration: "Migratory bird found on every continent except Antarctica. Populations in northern regions may migrate south for the winter.",
        reproduction: "They build nests on ledges and cliffs, and females lay 3 to 4 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Peregrine Falcons are known for their incredible diving speeds, making them the fastest animals in the world."
    },
    {
        img: require('../assets/birds/american-crow.jpeg'),
        name: "American Crow",
        lifeSpan: "Average lifespan in the wild is 7 to 8 years.",
        migration: "Resident bird found across North America. Some individuals may move short distances seasonally.",
        reproduction: "They build bulky nests in trees, and females lay 3 to 6 eggs.",
        conservationStatus: "Least Concern",
        funFact: "American Crows are highly intelligent and have been observed using tools to obtain food."
    },
    {
        img: require('../assets/birds/common-grackle.jpeg'),
        name: "Common Grackle",
        lifeSpan: "Average lifespan in the wild is 3 to 4 years.",
        migration: "Migratory bird found in North America. Populations in the northern part of their range may migrate south for the winter.",
        reproduction: "They build nests in trees and shrubs, and females lay 3 to 7 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Common Grackles are known for their iridescent plumage and raucous calls."
    },
    {
        img: require('../assets/birds/house-sparrow.jpeg'),
        name: "White-throated Sparrow",
        lifeSpan: "Average lifespan in the wild is 2 to 3 years.",
        migration: "Migratory bird found in North America. They breed in northern areas and migrate south for the winter.",
        reproduction: "They build well-hidden nests on or near the ground, and females lay 3 to 5 eggs.",
        conservationStatus: "Least Concern",
        funFact: "White-throated Sparrows have distinct song variations that can be linked to geographic regions."
    },
    {
        img: require('../assets/birds/american-goldfinch.jpeg'),
        name: "American Goldfinch",
        lifeSpan: "Average lifespan in the wild is 3 to 6 years.",
        migration: "Migratory bird found in North America. They breed in northern regions and migrate south for the winter.",
        reproduction: "They build cup-shaped nests in shrubs, and females lay 3 to 7 eggs.",
        conservationStatus: "Least Concern",
        funFact: "American Goldfinches are known for their bright yellow plumage, which is more vibrant in males during the breeding season."
    },
    {
        img: require('../assets/birds/black-capped-chickadee.jpeg'),
        name: "Black-capped Chickadee",
        lifeSpan: "Average lifespan in the wild is 1.5 to 6.5 years.",
        migration: "Non-migratory bird found in North America.",
        reproduction: "They build cozy nests in tree cavities, and females lay 6 to 8 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Black-capped Chickadees have distinctive calls that sound like their name: chick-a-dee-dee-dee."
    },
    {   img: require('../assets/birds/tufted-timouse.jpeg'),
        name: "Tufted Titmouse",
        lifeSpan: "Average lifespan in the wild is 2.1 years.",
        migration: "Non-migratory bird found in eastern North America.",
        reproduction: "They build nests in tree cavities and nest boxes, and females lay 3 to 9 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Tufted Titmice are social birds that often join mixed-species foraging flocks."
    },
    {
        img: require('../assets/birds/blue-jay.webp'),
        name: "Blue Jay",
        lifeSpan: "Average lifespan in the wild is 7 years.",
        migration: "Partially migratory bird found in North America. Some populations may migrate south for the winter.",
        reproduction: "They build nests in trees, and females lay 2 to 7 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Blue Jays are known for their striking blue plumage and their mimicry of other bird species' calls."
    },
    {
        img: require('../assets/birds/yellow-warbler.jpeg'),
        name: "Yellow Warbler",
        lifeSpan: "Average lifespan in the wild is 2 to 3 years.",
        migration: "Migratory bird that breeds in North America and migrates to Central and South America for the winter.",
        reproduction: "They build cup-shaped nests in shrubs and trees, and females lay 3 to 5 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Yellow Warblers are known for their bright yellow plumage and sweet-sounding songs."
    },{
        img: require('../assets/birds/ruby-throated-hummingbird.jpeg'),
        name: "Ruby-throated Hummingbird",
        lifeSpan: "Average lifespan is 3 to 5 years.",
        migration: "Migratory bird found in North America. They breed in eastern North America and migrate to Central America for the winter.",
        reproduction: "They build tiny cup-shaped nests on branches, and females lay 1 to 3 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Ruby-throated Hummingbirds are known for their iridescent ruby-red throats and incredible hovering flight."
    },
    {
        img: require('../assets/birds/eastern-bluebird.avif'),
        name: "Eastern Bluebird",
        lifeSpan: "Average lifespan in the wild is 6 to 10 years.",
        migration: "Some populations are migratory, while others are non-migratory.",
        reproduction: "They build nests in tree cavities and nest boxes, and females lay 2 to 7 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Eastern Bluebirds are often associated with happiness and are considered a symbol of hope."
    },
    {
        img: require('../assets/birds/northern-mockingbird.jpeg'),
        name: "Northern Mockingbird",
        lifeSpan: "Average lifespan in the wild is 8 to 10 years.",
        migration: "Resident bird found across North America. Some populations may move locally in response to food availability.",
        reproduction: "They build nests in trees and shrubs, and females lay 2 to 6 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Northern Mockingbirds are skilled mimics, imitating the calls of other birds and even mechanical sounds."
    },
    {
        img: require('../assets/birds/brown-headed-cowbird.jpeg'),
        name: "Brown-headed Cowbird",
        lifeSpan: "Average lifespan in the wild is 3 to 4 years.",
        migration: "Migratory bird found in North America. They are known as brood parasites, laying eggs in other birds' nests.",
        reproduction: "Females do not build nests; they lay eggs in the nests of other bird species.",
        conservationStatus: "Least Concern",
        funFact: "Brown-headed Cowbirds have a unique reproductive strategy, as they rely on other bird species to raise their young."
    },
    {
        img: require('../assets/birds/yellow-warbler.jpeg'),
        name: "Yellow-rumped Warbler",
        lifeSpan: "Average lifespan is 4 to 9 years.",
        migration: "Migratory bird found in North America. They breed in northern regions and migrate to southern regions for the winter.",
        reproduction: "They build cup-shaped nests in trees, and females lay 4 to 5 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Yellow-rumped Warblers are highly adaptable and can digest waxy fruits that other warblers can't."
    },
    {
        img: require('../assets/birds/eastern-townhee.jpeg'),
        name: "Eastern Towhee",
        lifeSpan: "Average lifespan in the wild is 2 to 6 years.",
        migration: "Partially migratory bird found in eastern North America. Some populations migrate south for the winter.",
        reproduction: "They build nests on the ground in dense vegetation, and females lay 2 to 6 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Eastern Towhees are known for their distinctive 'drink-your-tea' call."
    },
    {
        img: require('../assets/birds/baltimore-oriole.jpeg'),
        name: "Baltimore Oriole",
        lifeSpan: "Average lifespan is about 7 years.",
        migration: "Migratory bird found in eastern North America. They migrate to Central and South America for the winter.",
        reproduction: "They build hanging basket-like nests, and females lay 3 to 7 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Baltimore Orioles are known for their bright orange plumage and beautiful flute-like songs."
    },
    {
        img: require('../assets/birds/osprey.jpeg'),
        name: "Osprey",
        lifeSpan: "Average lifespan is 7 to 10 years.",
        migration: "Migratory bird found on every continent except Antarctica. They migrate between their breeding and wintering grounds.",
        reproduction: "They build large stick nests near water bodies, and females lay 2 to 4 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Ospreys are also known as 'fish hawks' because their diet primarily consists of fish."
    },
    {
        img: require('../assets/birds/great-egret.jpeg'),
        name: "Great Egret",
        lifeSpan: "Average lifespan in the wild is 15 to 20 years.",
        migration: "Migratory bird found in North America. Populations in northern regions may migrate south for the winter.",
        reproduction: "They build nests in trees and shrubs, and females lay 2 to 6 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Great Egrets are known for their elegant appearance and their habit of standing still while hunting for fish."
    },
    {
        img: require('../assets/birds/snowy-egret.jpeg'),
        name: "Snowy Egret",
        lifeSpan: "Average lifespan is 15 to 20 years.",
        migration: "Migratory bird found in North America. Populations in northern regions may migrate south for the winter.",
        reproduction: "They build nests in trees and shrubs, and females lay 3 to 5 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Snowy Egrets are known for their striking white plumage and their 'foot-stirring' feeding behavior."
    },
    {
        img: require('../assets/birds/double-crested-cormorant.jpeg'),
        name: "Double-crested Cormorant",
        lifeSpan: "Average lifespan is 5 to 10 years.",
        migration: "Migratory bird found in North America. They migrate between their breeding and wintering grounds.",
        reproduction: "They build stick nests near water bodies, and females lay 3 to 4 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Double-crested Cormorants are skilled divers and can dive to significant depths to catch fish."
    },
    {
        img: require('../assets/birds/ring-billed-gull.jpeg'),
        name: "Ring-billed Gull",
        lifeSpan: "Average lifespan is 10 to 15 years.",
        migration: "Migratory bird found in North America. Populations in northern regions may migrate south for the winter.",
        reproduction: "They build nests on the ground, and females lay 2 to 4 eggs.",
        conservationStatus: "Least Concern",
        funFact: "Ring-billed Gulls are often found in urban and suburban areas, scavenging for food."
    }
];
