const mammalsData = [
    {
        Name: "White-tailed Deer",
        Lifespan: "Average lifespan in the wild is 4 to 6 years, but can reach up to 20 years in protected environments",
        LifeCycle: "The life cycle of white-tailed deer begins with mating in the fall. After a gestation period of about 6 to 7 months, does give birth to one to three fawns in the spring. Fawns are born with spots to help camouflage them from predators. They spend their early weeks hidden in tall grass or vegetation. As they grow, fawns start to accompany their mothers and learn essential survival skills, including finding food and avoiding danger.",
        Diet: "Herbivores that primarily feed on a variety of plant matter, including leaves, grasses, twigs, fruits, and acorns.",
        FunFact: "White-tailed deer are known for their impressive leaping ability, capable of jumping heights of up to 8 feet and distances of up to 30 feet."

    }, {
        Name: "Bats",
        Lifespan: "Lifespan varies by species, ranging from 5 to 30 years.",
        LifeCycle: "Bats undergo a complex life cycle that involves mating, giving birth, and raising young. Female bats give birth to live young, known as pups, rather than laying eggs. Pups are usually born in late spring or early summer, depending on the species. They are nursed by their mothers and gradually learn to fly and hunt for food.",
        Diet: "Bats are primarily insectivores, feeding on a wide variety of insects such as mosquitoes, moths, and beetles. Some bats also consume fruit, nectar, or pollen.",
        FunFact: "Bats are the only mammals capable of sustained flight. They use echolocation to navigate and locate prey in the dark. Bats play a crucial role in pest control by consuming large numbers of insects, helping to balance ecosystems."
    }, {
        Name: "Coyotes",
        Lifespan: "Coyotes typically live 6 to 8 years in the wild.",
        LifeCycle: "Coyotes have a complex life cycle that involves mating, denning, and raising pups. Mating usually occurs in late winter or early spring, with pups born in spring. Female coyotes give birth to a litter of 4 to 7 pups on average. The pups are cared for and protected by both parents until they are old enough to venture out on their own.",
        Diet: "Coyotes are opportunistic omnivores, feeding on a varied diet that includes small mammals, birds, insects, fruits, and even scavenging for human food. They are adaptable and can adjust their diet based on the availability of resources.",
        FunFact: "Coyotes have successfully adapted to urban environments, including New York City. They are highly adaptable and can thrive in a variety of habitats. Coyotes help control rodent populations and play a role in urban ecosystems."

    }, {
        Name: "Eastern Chipmunks",
        Lifespan: "Chipmunks typically live around 2 to 3 years in the wild.",
        LifeCycle: "Eastern chipmunks have a seasonal breeding pattern. They mate in early spring and again in early summer. After a gestation period of about 30 days, females give birth to a litter of 2 to 8 pups. The pups are born blind, hairless, and helpless, and they stay in the burrow for a few weeks before venturing out.",
        Diet: "Chipmunks are omnivores, with a diet that includes a variety of foods such as nuts, seeds, fruits, insects, and even small vertebrates. They have specialized cheek pouches that allow them to store and carry food back to their burrows.",
        FunFact: "Eastern chipmunks are known for their distinctive black and white stripes along their sides and their habit of collecting and storing food in their cheek pouches. They are energetic and active animals, frequently seen darting around in search of food."

    }, {
        Name: "Eastern Gray Squirrels",
        Lifespan: "Gray squirrels typically live around 6 to 12 years in the wild.",
        LifeCycle: "Eastern gray squirrels breed twice a year, once in late winter and again in early summer. After a gestation period of about 44 days, females give birth to a litter of 2 to 4 pups. The young squirrels are born blind, hairless, and completely dependent on their mother for several months.",
        Diet: "Gray squirrels are primarily herbivores, with a diet that includes nuts, acorns, seeds, fruits, and even the buds and bark of trees. They are known for their habit of caching food, burying it in the ground for later consumption.",
        FunFact: "Eastern gray squirrels are highly adaptable and are often seen in urban environments. They have a distinctive bushy tail and are skilled climbers, able to navigate trees and structures with ease. Their population and behavior can vary greatly based on local conditions."

    }, {
        Name: "Raccoons",
        Lifespan: "Raccoons typically live around 2 to 3 years in the wild, but some individuals can live longer in urban environments.",
        LifeCycle: "Raccoons breed in late winter to early spring, with a gestation period of about 63 days. Females give birth to a litter of 3 to 5 kits. The kits are born blind and helpless, and they stay with their mother for several months before becoming independent.",
        Diet: "Raccoons are opportunistic omnivores, meaning they eat a wide variety of foods. Their diet includes fruits, vegetables, insects, small mammals, birds, eggs, and even human food and garbage in urban areas.",
        FunFact: "Raccoons are known for their distinctive black mask-like markings around their eyes and their ringed tails. They have highly dexterous front paws that they use to manipulate objects and open containers. Raccoons are well-adapted to both natural and urban environments."

    }, {
        Name: "Red Foxes",
        Lifespan: "Red Foxes typically live around 3 to 4 years in the wild, but they can live up to 14 years in captivity.",
        LifeCycle: "Red Foxes breed in late winter to early spring, and after a gestation period of about 51 days, females give birth to a litter of 4 to 5 pups. The pups are born blind and dependent on their parents for several months.",
        Diet: "Red Foxes are omnivores with a varied diet. They eat small mammals, birds, insects, fruits, and vegetation. In urban areas, they may scavenge for human food and garbage.",
        FunFact: "Red Foxes are known for their striking reddish-brown fur, white underparts, and bushy tails. They are adaptable animals that can thrive in both natural and urban environments. Foxes are skilled hunters and are known for their cunning behavior."

    }, {
        Name: "Seals",
        Lifespan: "Seals have varied lifespans depending on the species. Common harbor seals typically live around 20 to 30 years.",
        LifeCycle: "Seals have a complex life cycle that involves giving birth to pups on land or ice. They are born with a thick layer of blubber and a waterproof coat of fur. Seal pups are dependent on their mothers for nursing and protection.",
        Diet: "Seals are carnivorous marine mammals. They primarily feed on fish, squid, and other marine creatures. Their diets vary based on their species and habitat.",
        FunFact: "Seals can often be spotted in the waters around New York City, especially in the winter months. Species like harbor seals and grey seals are known to visit the area. These marine mammals haul out on rocks and shores, making it possible for residents and visitors to catch a glimpse of these fascinating creatures."

    }, {
        Name: "Striped Skunks",
        Lifespan: "Striped skunks typically live around 2 to 4 years in the wild.",
        LifeCycle: "Striped skunks have a well-defined breeding season, during which males actively seek out females. After mating, a female gives birth to a litter of typically 4 to 7 kits after a gestation period of about 7 to 10 weeks. The kits are born blind and rely on their mother for several weeks before becoming more independent.",
        Diet: "Striped skunks are omnivorous and have a varied diet. They feed on insects, small mammals, fruits, berries, and even human food scraps.",
        FunFact: "One of the most recognizable features of striped skunks is their ability to release a strong-smelling spray from glands located near their tail. This spray is a defensive mechanism used to deter predators. While they are known for their distinctive odor, striped skunks play an important role in controlling insect populations and are considered valuable members of local ecosystems."

    }, {
        Name: "Virginia Opossums",
        Lifespan: "Virginia opossums typically live around 1 to 2 years in the wild.",
        LifeCycle: "Virginia opossums have a unique reproductive strategy. Females give birth to relatively undeveloped young after a short gestation period of about 12 to 13 days. The newborns, called joeys, are born blind and are about the size of a honeybee. They immediately crawl into the mother's pouch, where they continue to develop and nurse. As they grow, they gradually venture out of the pouch and ride on the mother's back.",
        Diet: "Virginia opossums are opportunistic omnivores. They feed on a wide variety of foods, including insects, fruits, vegetables, small animals, carrion, and human food scraps.",
        FunFact: "Virginia opossums are the only marsupials native to North America. They are often referred to simply as 'opossums.' Despite their somewhat rat-like appearance, opossums play an important role in controlling insect populations and cleaning up carrion, helping to maintain the health of local ecosystems."

    }, {
        Name: "White-Tailed Deer",
        Lifespan: "White-tailed deer in the wild generally live about 4 to 6 years, although some can live longer.",
        LifeCycle: "White-tailed deer have a reproductive cycle closely tied to the seasons. Mating, or rutting, usually occurs in the fall. Females, known as does, give birth to one to three fawns in the spring after a gestation period of about 6 to 7 months. Fawns are born with spots that help camouflage them in the forest. They nurse from their mothers and gradually transition to eating vegetation.",
        Diet: "White-tailed deer are herbivores and primarily feed on a variety of plants, including leaves, grasses, shrubs, and fruits. Their diet changes with the seasons, and they adapt to available food sources.",
        FunFact: "White-tailed deer (Odocoileus virginianus) have established populations in the Bronx and throughout Staten Island’s green spaces. They are large mammals that can weigh up to 300 pounds. However, they’re also very mobile; they can swim, run up to 35 miles per hour, and jump several feet in the air. White-tailed deer eat a variety of plants, fruits, bark, and leaves. During their breeding season in the fall, known as the rut, they become more active as they look for mates. During this time, deer-vehicle collisions are more likely to occur. Drivers should stay alert and drive slowly near deer habitat. White-tailed deer can also carry ticks that harbor tick-borne illnesses like Lyme disease. Tick checks are recommended when leaving parks and greenspaces."

    }, {

    }
]

export default mammalsData;