const fishData = [
    {
        name: "Striped Bass",
        behaviorAndDiet: "Striped Bass are known for their migratory behavior. They often move between saltwater and freshwater habitats, making them anadromous. They typically spawn in freshwater rivers and then migrate to coastal and marine waters. Their diet consists of various fish, such as menhaden, herring, and shad, as well as crustaceans and squid.",
        lifeSpan: "Striped Bass can live up to 30 years or more, depending on environmental conditions and fishing pressures.",
        reproductionAndLifeCycle: "Striped Bass reproduce in freshwater rivers. Adults migrate upstream to spawn, with females releasing their eggs and males releasing sperm. The fertilized eggs hatch into larvae, which drift downstream into brackish or saltwater environments. As they grow, the young bass move to coastal waters, eventually becoming adults.",
        predatorsAndPrey: "Striped Bass are apex predators in their ecosystems, preying on a variety of smaller fish and invertebrates. They are also preyed upon by larger predators like sharks, dolphins, and larger predatory fish."
    }, {
        name: "Bluefish",
        behaviorAndDiet: "Bluefish are highly migratory and can be found in both coastal and offshore waters. They are known for their voracious feeding habits and are often referred to as 'choppers' due to their sharp teeth. Their diet primarily consists of smaller fish, such as menhaden, herring, and anchovies, as well as squid and crustaceans.",
        lifeSpan: "Bluefish have a relatively short life span, typically living up to around 9 to 10 years.",
        reproductionAndLifeCycle: "Bluefish reproduce through broadcast spawning, where females release eggs into the water and males release sperm to fertilize them. After hatching, the larvae drift in the ocean currents. As they grow, they move into coastal waters and estuaries, where they continue to develop.",
        predatorsAndPrey: "Bluefish are apex predators themselves, feeding on a variety of smaller fish and squid. They are known for their aggressive feeding behavior, often attacking schools of baitfish. Bluefish are also preyed upon by larger predators like sharks and dolphins."
    }, {
        name: "Flounder",
        behaviorAndDiet: "Flounder are flatfish known for their unique body shape, with both eyes located on one side of their body. They are bottom-dwelling fish that spend much of their time lying camouflaged on the ocean floor. Flounder are ambush predators, feeding on smaller fish and crustaceans that they capture by lying in wait and striking quickly.",
        lifeSpan: "Flounder can have varying life spans depending on the species and environmental factors. On average, they may live for about 7 to 10 years.",
        reproductionAndLifeCycle: "Flounder go through an interesting metamorphosis as they grow. They start out as symmetrical larvae but undergo a transformation where one eye migrates to the opposite side of their body, allowing them to lay flat on the ocean floor. Flounder reproduce by releasing eggs into the water, where they are fertilized externally. The larvae hatch and eventually settle on the ocean floor.",
        predatorsAndPrey: "Flounder are preyed upon by larger fish, sharks, and marine mammals. Their flattened body shape and camouflaging abilities help them evade predators. As ambush predators themselves, flounder feed on smaller fish, crustaceans, and other bottom-dwelling organisms."

    }, {
        name: "Black Sea Bass",
        behaviorAndDiet: "Black Sea Bass are carnivorous fish that inhabit rocky reefs, wrecks, and other underwater structures. They have a varied diet that includes small fish, crustaceans, and squid. They are known for being opportunistic predators, lying in wait to ambush their prey.",
        lifeSpan: "Black Sea Bass have a relatively long life span, often living up to 20 years or more.",
        reproductionAndLifeCycle: "Black Sea Bass reproduce through external fertilization. During spawning season, females release eggs into the water, and males release sperm to fertilize the eggs. The fertilized eggs develop into larvae that drift in ocean currents before settling in shallow waters and estuaries.",
        predatorsAndPrey: "Black Sea Bass have a few natural predators, including larger fish and marine mammals. They, in turn, prey on smaller fish, crustaceans, and other small organisms that are abundant in their habitat."

    }, {
        name: "Porgy (Scup)",
        behaviorAndDiet: "Porgy, also known as Scup, are bottom-dwelling fish that inhabit nearshore waters and feed primarily on small crustaceans, mollusks, and other invertebrates. They use their specialized teeth to crush shells and extract food from the seabed.",
        lifeSpan: "Porgy typically have a life span of around 7 to 10 years, although this can vary depending on factors like habitat and food availability.",
        reproductionAndLifeCycle: "Porgy reproduce through external fertilization. During spawning season, females release eggs into the water, and males release sperm to fertilize the eggs. The fertilized eggs develop into larvae that eventually settle in shallow coastal waters.",
        predatorsAndPrey: "Porgy are preyed upon by larger fish, birds, and marine mammals. They, in turn, play a role in regulating populations of small invertebrates and maintaining the balance of their marine ecosystem."

    }, {
        name: "Weakfish",
        behaviorAndDiet: "Weakfish are predatory fish known for their sharp teeth and hunting behavior. They primarily feed on smaller fish, crustaceans, and squid. They are often active predators during low-light conditions such as dawn and dusk.",
        lifeSpan: "Weakfish have a relatively short life span, typically living for about 5 to 6 years. However, their longevity can vary depending on factors such as environmental conditions and predation.",
        reproductionAndLifeCycle: "Weakfish have complex reproductive behavior. They are known for their hermaphroditic characteristics, where some individuals can change their sex from male to female. Spawning occurs in nearshore waters during the warmer months, with females releasing eggs and males releasing sperm.",
        predatorsAndPrey: "Weakfish are preyed upon by larger predatory fish, sharks, and birds. As predators themselves, they play a role in controlling populations of smaller fish and maintaining the balance of their ecosystem."

    }, {
        name: "Blue Crab",
        behaviorAndDiet: "Blue crabs are scavengers and opportunistic feeders. They have a varied diet that includes detritus, mollusks, small fish, algae, and even plant matter. They use their strong claws to crush and consume their prey.",
        lifeSpan: "Blue crabs typically have a lifespan of around 3 to 4 years. However, this can vary based on factors such as habitat conditions and predation.",
        reproductionAndLifeCycle: "Female blue crabs mate shortly after molting, and the males transfer sperm to a specialized structure in the female's body. Females store the sperm until they are ready to fertilize their eggs. After fertilization, females carry the fertilized eggs on their abdomen until they hatch into larvae. The larvae go through several stages before developing into juvenile crabs.",
        predatorsAndPrey: "Blue crabs are both predators and prey in their ecosystem. They are preyed upon by various species of fish, birds, and larger crabs. Blue crabs, in turn, feed on a wide range of small organisms, including mollusks, crustaceans, and detritus."

    }, {
        name: "Haddock",
        behaviorAndDiet: "Haddock are carnivorous fish that primarily feed on small fish, crustaceans, and bottom-dwelling organisms. They are known to be opportunistic feeders, adapting their diet based on the availability of prey.",
        lifeSpan: "Haddock typically have a lifespan of around 10 to 20 years, depending on factors such as habitat and fishing pressure.",
        reproductionAndLifeCycle: "Haddock reproduction involves the release of eggs and sperm into the water column. After fertilization, the eggs develop into larval fish that drift in ocean currents. As they grow, haddock transition from a pelagic (open water) habitat to a demersal (bottom-dwelling) habitat. They undergo significant changes in body shape and behavior during their development.",
        predatorsAndPrey: "Haddock serve as both predators and prey in the marine ecosystem. They are preyed upon by larger fish, seabirds, and marine mammals. As predators, haddock play a role in controlling the populations of smaller fish and invertebrates."

    }, {
        name: "Pollock",
        behaviorAndDiet: "Pollock are schooling fish known for their migratory behavior. They feed on a variety of prey, including small fish, crustaceans, and zooplankton. Their schooling behavior offers protection from predators and allows for efficient feeding.",
        lifeSpan: "Pollock generally have a lifespan of around 15 to 20 years, although this can vary depending on factors such as habitat and fishing pressure.",
        reproductionAndLifeCycle: "Pollock reproduction involves the release of eggs and sperm into the water, where fertilization takes place. The larvae hatch from eggs and drift in ocean currents. As they grow, pollock undergo several stages of development, including transitioning from a pelagic (open water) habitat to a more demersal (bottom-dwelling) habitat.",
        predatorsAndPrey: "Pollock are both predators and prey in the marine food web. They are important prey for larger fish, marine mammals, and seabirds, while also feeding on smaller fish, krill, and other planktonic organisms.",
        funFact: "Pollock are widely used in the production of surimi, a seafood product commonly known as imitation crab meat. Surimi is made from the finely minced flesh of pollock and is a versatile ingredient in various dishes."

    }, {
        name: "Red Hake",
        behaviorAndDiet: "Red Hake are bottom-dwelling fish that often bury themselves in the sediment to hide from predators and ambush prey. They primarily feed on smaller fish, crustaceans, and various bottom-dwelling organisms.",
        lifeSpan: "Red Hake typically have a lifespan of around 10 to 12 years, although this can vary depending on factors such as habitat conditions and fishing pressure.",
        reproductionAndLifeCycle: "Red Hake reproduce by releasing eggs and sperm into the water, where fertilization takes place. The larvae hatch from eggs and spend a portion of their early life in the planktonic stage, drifting in ocean currents. As they mature, they settle to the ocean floor and adopt a more demersal (bottom-dwelling) lifestyle.",
        predatorsAndPrey: "Red Hake serve as both predators and prey in the marine ecosystem. They are a valuable food source for larger fish, marine mammals, and seabirds. At the same time, they consume a variety of smaller prey, including crustaceans and small fish.",
        funFact: "The name 'Red Hake' is derived from the reddish coloration on their pectoral fins. They are sometimes referred to as 'ling' in the northeastern United States."

    }, {
        name: "Cunner",
        behaviorAndDiet: "Cunner are small fish known for their aggressive and territorial behavior. They often inhabit rocky areas and use their strong jaws and teeth to feed on a diet of small crustaceans, mollusks, and various types of marine invertebrates.",
        lifeSpan: "Cunner typically have a lifespan of around 5 to 6 years, although this can vary based on factors such as habitat quality and predation pressure.",
        reproductionAndLifeCycle: "Cunner reproduce through the release of eggs and sperm into the water, where fertilization takes place. The eggs are pelagic (free-floating) and hatch into larvae, which then develop into juvenile fish. As they mature, cunner transition to a demersal (bottom-dwelling) lifestyle.",
        predatorsAndPrey: "Cunner play a role in the marine food web as both predators and prey. They are preyed upon by larger fish and marine birds. At the same time, they feed on small invertebrates and help control populations of these organisms.",
        funFact: "Cunner are known for their vibrant and intricate coloration, often featuring shades of blue, green, yellow, and orange. Their distinctive appearance contributes to their popularity among marine enthusiasts."

    }, {
        name: "Skates and Rays (Various Species)",
        behaviorAndDiet: "Skates and rays are flat-bodied fish that typically inhabit the ocean floor. They use their pectoral fins to glide gracefully through the water, and many species have specialized adaptations for feeding on bottom-dwelling prey such as crustaceans, mollusks, and small fish.",
        lifeSpan: "The lifespan of skates and rays varies widely among species. Some may live for several years, while others can live for decades, depending on factors like size, habitat, and predation.",
        reproductionAndLifeCycle: "Skates and rays reproduce through internal fertilization. Males transfer sperm to females using specialized structures called claspers. The fertilized eggs are encased in leathery egg cases, which are often referred to as 'mermaid's purses.' After a period of development, the eggs hatch into miniature versions of the adults.",
        predatorsAndPrey: "Skates and rays have a diverse range of predators, including larger fish, sharks, and marine mammals. They are also important predators themselves, helping to control populations of bottom-dwelling organisms in marine ecosystems.",
        funFact: "Skates and rays are known for their unique reproductive strategy. The leathery egg cases they produce are often found washed up on beaches and can serve as indicators of the presence of these fascinating marine creatures."

    }, {
        name: "Atlantic Silverside",
        behaviorAndDiet: "Atlantic Silversides are small, schooling fish that are commonly found in nearshore and estuarine habitats. They have a silvery coloration that helps them blend in with their surroundings and avoid predators. Their diet primarily consists of plankton and small invertebrates.",
        lifeSpan: "Atlantic Silversides typically have a lifespan of about 1 to 2 years.",
        reproductionAndLifeCycle: "During the breeding season, male Atlantic Silversides compete for the attention of females through colorful displays and courtship behaviors. After mating, females lay adhesive eggs on submerged objects like vegetation and rocks. The eggs hatch within a week, and the larvae drift in coastal currents before settling into shallow nursery areas.",
        predatorsAndPrey: "Atlantic Silversides serve as an important food source for many predatory fish, birds, and marine mammals. They are an essential part of the food web in estuarine and nearshore environments, linking planktonic communities to larger predators.",
        funFact: "Atlantic Silversides play a crucial role in coastal ecosystems by serving as both prey for larger animals and consumers of plankton. Their schooling behavior provides protection against predators and enhances their chances of survival."

    }, {
        name: "Mummichog (Atlantic Killifish)",
        behaviorAndDiet: "Mummichogs are small, resilient fish that inhabit brackish and coastal waters. They have the ability to tolerate a wide range of salinity levels and can even survive in low-oxygen environments. They feed on a variety of aquatic organisms, including insects, algae, small crustaceans, and detritus.",
        lifeSpan: "Mummichogs typically have a lifespan of about 2 to 3 years.",
        reproductionAndLifeCycle: "Mummichogs are known for their unique reproductive strategy called 'broadcast spawning.' During high tides, males and females release their eggs and sperm into the water, where fertilization occurs externally. The hatched larvae are carried by currents to shallow, protected areas where they mature.",
        predatorsAndPrey: "Mummichogs are a key forage species for many predators, including larger fish, birds, and crustaceans. Their adaptability to varying salinity levels and their abundance make them an important food source for many animals.",
        funFact: "Mummichogs have a remarkable ability to tolerate changes in environmental conditions, including salinity and temperature fluctuations. This adaptability contributes to their success in a wide range of coastal habitats."

    }, {
        name: "Bay Anchovy",
        behaviorAndDiet: "Bay anchovies are small, silvery fish that inhabit coastal and estuarine waters. They are known for forming large schools near the water's surface. Their diet primarily consists of plankton, small crustaceans, and other tiny aquatic organisms.",
        lifeSpan: "Bay anchovies typically have a lifespan of about 1 to 2 years.",
        reproductionAndLifeCycle: "Bay anchovies have a unique reproductive strategy. Females release adhesive eggs that attach to various substrates, such as vegetation or objects in the water. After hatching, the larvae go through several stages before reaching maturity.",
        predatorsAndPrey: "Bay anchovies serve as a vital link in the aquatic food web. They are preyed upon by larger fish, birds, and marine mammals. Their abundance makes them an important food source for many predators.",
        funFact: "Bay anchovies are an essential part of the coastal ecosystem, playing a crucial role in transferring energy from lower trophic levels to higher trophic levels."

    }, {
        name: "Sand Lance",
        behaviorAndDiet: "Sand lances are slender, elongated fish that inhabit sandy and gravelly substrates along the ocean floor. They are known for their burrowing behavior, often digging into the sand to avoid predators. Their diet mainly consists of plankton and other small organisms.",
        lifeSpan: "Sand lances typically have a lifespan of 3 to 4 years.",
        reproductionAndLifeCycle: "Sand lances are unique in their reproductive strategy. They release their eggs directly into the water, where fertilization occurs externally. The eggs then hatch into larvae, which eventually develop into juvenile fish.",
        predatorsAndPrey: "Sand lances are an important prey species for many marine predators, including larger fish, birds, and marine mammals. Their burrowing behavior and sand-colored bodies help them avoid detection by predators.",
        funFact: "Sand lances are well-adapted to their sandy environments, and their ability to burrow into the substrate provides them with protection from predators. Their abundance makes them a critical food source for various marine animals."

    }, {
        name: "Menhaden (Bunker)",
        behaviorAndDiet: "Menhaden are filter-feeding fish that primarily consume plankton and other microscopic organisms. They swim with their mouths open, filtering water through their gills to extract food. Menhaden often travel in large schools near the water's surface.",
        lifeSpan: "Menhaden typically have a lifespan of 3 to 5 years.",
        reproductionAndLifeCycle: "Menhaden reproduce by releasing eggs and sperm into the water, where fertilization occurs externally. The eggs hatch into larvae, which go through several developmental stages before becoming juvenile fish. They are an important forage species, providing food for many predators.",
        predatorsAndPrey: "Menhaden play a vital role in the marine food chain as a primary prey species for various predators, including larger fish, marine mammals, and seabirds. They are also commercially valuable as baitfish and for their use in fish meal and fish oil products.",
        funFact: "Menhaden are known for their significant ecological role as filter feeders that help control plankton populations. Their oil-rich bodies have historically been used for various industrial and nutritional purposes."

    }, {
            name: "Atlantic Needlefish",
            behaviorAndDiet: "Atlantic Needlefish are predatory fish known for their long, slender bodies and needle-like beak. They primarily feed on smaller fish and crustaceans, using their sharp beak to strike and capture prey. These fish are often found near the water's surface and are known for their swift and agile swimming behavior.",
            lifeSpan: "Atlantic Needlefish typically have a lifespan of around 3 to 5 years.",
            reproductionAndLifeCycle: "Atlantic Needlefish reproduce by releasing eggs and sperm into the water, where fertilization occurs externally. The fertilized eggs hatch into larvae, which then go through various developmental stages before reaching adulthood. They are part of the larger food web, both as predators and potential prey for larger fish and birds.",
            predatorsAndPrey: "Atlantic Needlefish occupy a mid-level position in the marine food chain. They prey on smaller fish and crustaceans, while being targeted by larger predators such as larger fish, marine mammals, and seabirds.",
            funFact: "One of the distinctive features of Atlantic Needlefish is their elongated, slender bodies and their sharp, pointed beak. These features make them well-suited for hunting in shallow coastal waters and estuaries. They are also known for their ability to leap out of the water, which can sometimes lead to them inadvertently landing in boats or onshore areas."
          
    },{
        name: "Spot",
behaviorAndDiet: "Spot are schooling fish known for their silvery bodies and distinctive spot behind the gills. They primarily feed on plankton, small crustaceans, and aquatic insects. Spots often form large schools near the shore and estuaries.",
lifeSpan: "Spot typically have a lifespan of 3 to 4 years.",
reproductionAndLifeCycle: "Spot reproduce by releasing eggs and sperm into the water, where fertilization occurs externally. The fertilized eggs hatch into larvae, which then undergo various developmental stages before becoming juvenile fish. They serve as an important forage species for larger predatory fish.",
funFact: "One interesting aspect of Spot is the dark spot they have behind their gills, which gives them their name. This spot is more prominent in younger individuals and fades as they mature. Spot fish are popular among recreational anglers due to their abundance and relatively small size."
},{
    name: "Spot",
behaviorAndDiet: "Spot are schooling fish known for their silvery bodies and distinctive spot behind the gills. They primarily feed on plankton, small crustaceans, and aquatic insects. Spots often form large schools near the shore and estuaries.",
lifeSpan: "Spot typically have a lifespan of 3 to 4 years.",
reproductionAndLifeCycle: "Spot reproduce by releasing eggs and sperm into the water, where fertilization occurs externally. The fertilized eggs hatch into larvae, which then undergo various developmental stages before becoming juvenile fish. They serve as an important forage species for larger predatory fish.",
funFact: "One interesting aspect of Spot is the dark spot they have behind their gills, which gives them their name. This spot is more prominent in younger individuals and fades as they mature. Spot fish are popular among recreational anglers due to their abundance and relatively small size."
},{
    name: "Striped Sea Robin",
behaviorAndDiet: "Striped Sea Robin are bottom-dwelling fish with elongated bodies and pectoral fins that resemble wings. They primarily feed on small crustaceans, mollusks, and other bottom-dwelling organisms. They use their 'legs' to walk along the ocean floor.",
lifeSpan: "Striped Sea Robin typically have a lifespan of 3 to 4 years.",
reproductionAndLifeCycle: "Striped Sea Robin reproduce by laying adhesive eggs on the ocean floor. The male guards and tends to the eggs until they hatch. The larvae go through several stages of development before maturing into juvenile fish. They are an important part of the coastal ecosystem.",
funFact: "One fascinating aspect of Striped Sea Robin is their unique pectoral fins that resemble legs. These fins are used to 'walk' along the ocean floor in search of prey. Despite their appearance, they are not related to true land-dwelling animals."
},{
    name: "Winter Skate",
    behaviorAndDiet: "Winter Skate are cartilaginous fish related to rays and sharks. They primarily feed on a variety of bottom-dwelling organisms such as crustaceans, mollusks, and small fish. They use their flattened bodies to glide gracefully along the ocean floor.",
    lifeSpan: "Winter Skate typically have a lifespan of 7 to 10 years.",
    reproductionAndLifeCycle: "Winter Skate reproduce by laying eggs enclosed in leathery capsules known as 'mermaid's purses.' These egg cases are anchored to the ocean floor. The embryos develop within the capsules and eventually hatch as fully-formed juvenile skates. They play a role in maintaining balance in marine ecosystems.",
    funFact: "One interesting fact about Winter Skate is their unique reproductive method using egg capsules. These capsules protect the developing embryos and are often found washed up on beaches, commonly referred to as 'mermaid's purses.' Winter Skates' flat bodies and unique reproductive strategy make them intriguing subjects for marine biology research."
    },{
        name: "Smooth Dogfish",
behaviorAndDiet: "Smooth Dogfish, also known as smooth-hound sharks, are small and slender sharks found in coastal waters. They primarily feed on a variety of prey including fish, crustaceans, and squid. They are known for their relatively docile behavior.",
lifeSpan: "Smooth Dogfish typically have a lifespan of 20 to 25 years.",
reproductionAndLifeCycle: "Smooth Dogfish reproduce via internal fertilization. The females have a longer gestation period, giving birth to live pups after several months. The pups are self-sufficient upon birth and grow relatively slowly. They play a role in maintaining the balance of marine ecosystems.",
funFact: "One interesting fact about Smooth Dogfish is their social behavior. They often form schools and can be seen swimming near the surface in groups. Despite being sharks, they are not considered a threat to humans and are of significance to both commercial and recreational fisheries."
},{
    name: "Spiny Dogfish",
behaviorAndDiet: "Spiny Dogfish are small, schooling sharks found in temperate and cold waters. They have a diverse diet that includes small fish, squid, and crustaceans. They often form large schools and are known for their migratory behavior.",
lifeSpan: "Spiny Dogfish typically have a lifespan of 30 to 40 years.",
reproductionAndLifeCycle: "Spiny Dogfish reproduce via internal fertilization. The females have a relatively long gestation period, giving birth to live pups after about 18 to 24 months. The pups are born fully formed and can be relatively independent at birth. Spiny Dogfish are an important predator in marine ecosystems.",
funFact: "One intriguing fact about Spiny Dogfish is their unique adaptations. They possess spines in front of their dorsal fins, which can be mildly venomous. These spines are used as a defense mechanism against predators. Spiny Dogfish are also commercially valuable for their meat and liver oil."
}
];

