// This is your local database
const HUBBLE_DB = {
    "timeline": [
        {
            year: 1,
            title: "Great Storm on Saturn",
            desc: "Hubble observes a rare and massive white dust storm enveloping much of Saturn's northern hemisphere.",
            url: "img/year-1-major-storm-on-saturn_54398802956_o.jpg",
            ra: 18.5, dec: -22.5
        },
        {
            year: 2,
            title: "The Jet of Galaxy M87",
            desc: "A detailed look at the plasma jet ejected from the supermassive black hole at the center of the elliptical galaxy M87.",
            url: "img/year-2-core-and-jet-of-m87_52717778088_o.jpg",
            ra: 12.5, dec: 12.3
        },
        {
            year: 3,
            title: "Proplyds in the Orion Nebula",
            desc: "Hubble reveals disks of gas and dust (proplyds) around young stars, the fundamental building blocks of future planetary systems.",
            url: "img/year-3-m42-gas-plume--proplyds_52717568049_o.jpg",
            ra: 5.5, dec: -5.4
        },
        {
            year: 4,
            title: "Open Star Cluster",
            desc: "A sparkling view of thousands of young stars bound together by gravity in a star cluster.",
            url: "img/year-4-star-cluster-r136_52716796092_o.jpg",
            ra: 5.6, dec: -69.1
        },
        {
            year: 5,
            title: "Impact of Comet Shoemaker-Levy 9",
            desc: "Hubble captures the scars left by the impact of comet fragments in Jupiter's atmosphere.",
            url: "img/year-5-comet-shoemaker-levy-9-impact_52717825173_o.jpg",
            ra: 14.2, dec: -12.1
        },
        {
            year: 6,
            title: "Hourglass Nebula",
            desc: "MyCn 18 shows an extraordinarily symmetrical hourglass structure formed by the winds of a dying star.",
            url: "img/year-6-hourglass-nebula_52717361881_o.jpg",
            ra: 13.6, dec: -67.4
        },
        {
            year: 7,
            title: "Eta Carinae",
            desc: "A massive and unstable star that ejected two huge lobes of gas and dust during a major eruption.",
            url: "img/year-7-eta-carinae_52717856843_o.jpg",
            ra: 10.7, dec: -59.7
        },
        {
            year: 8,
            title: "Antennae Galaxies",
            desc: "Two colliding spiral galaxies triggering the formation of millions of new stars.",
            url: "img/year-8-antennae-galaxies_52718240358_o.jpg",
            ra: 12.0, dec: -18.9
        },
        {
            year: 9,
            title: "Southern Ring Nebula (NGC 3132)",
            desc: "A planetary nebula with expanding layers of gas created by a dying star at its center.",
            url: "img/year-9-southern-ring-nebula_52717361881_o.jpg",
            ra: 10.1, dec: -40.4
        },
        {
            year: 10,
            title: "Abell Galaxy Cluster",
            desc: "A giant galaxy cluster acting as a gravitational lens, bending the light of galaxies behind it.",
            url: "img/year-10-abell-2218_52717776676_o.jpg",
            ra: 16.6, dec: 66.2
        },
        {
            year: 11,
            title: "Spirograph Nebula",
            desc: "Characterized by intricate patterns reminiscent of a spirograph's drawings, formed by ionized gas.",
            url: "img/year-11-spirograph-nebula_52717787671_o.jpg",
            ra: 5.1, dec: -12.7
        },
        {
            year: 12,
            title: "The Planet Mars",
            desc: "A close-up portrait of Mars during its closest approach to Earth, revealing surface details and clouds.",
            url: "img/year-12-mars_52717803766_o.jpg",
            ra: 20.1, dec: -20.5
        },
        {
            year: 13,
            title: "Seyfert's Sextet",
            desc: "A compact group of galaxies locked in a gravitational dance that will eventually lead them to merge.",
            url: "img/year-13-seyferts-sextet_52718243755_o.jpg",
            ra: 15.9, dec: 20.7
        },
        {
            year: 14,
            title: "Helix Nebula",
            desc: "Known as the Eye of God, it's one of the closest and most spectacular examples of a planetary nebula.",
            url: "img/year-14-helix-nebula_52718269430_o.jpg",
            ra: 22.5, dec: -20.8
        },
        {
            year: 15,
            title: "NGC 1300",
            desc: "One of the most perfect barred spiral galaxies ever observed, with sinuous arms and a bright nucleus.",
            url: "img/year-15-ngc-1300_52718117564_o.jpg",
            ra: 3.3, dec: -19.4
        },
        {
            year: 16,
            title: "Crab Nebula",
            desc: "The remnants of a supernova that exploded in 1054, observed by Chinese astronomers and still expanding today.",
            url: "img/year-16-crab-nebula_52717339847_o.jpg",
            ra: 5.6, dec: 22.0
        },
        {
            year: 17,
            title: "V838 Monocerotis",
            desc: "A breathtaking light echo created by the light from a stellar explosion reflecting off surrounding dust.",
            url: "img/year-17-v838-monocerotis_52718138069_o.jpg",
            ra: 7.1, dec: -3.8
        },
        {
            year: 18,
            title: "NGC 6397",
            desc: "One of the closest globular clusters to us, containing hundreds of thousands of ancient stars.",
            url: "img/year-18-ngc-6397_52717362117_o.jpg",
            ra: 17.7, dec: -53.7
        },
        {
            year: 19,
            title: "Jupiter and Ganymede",
            desc: "Hubble captures the moon Ganymede passing in front of the majestic gas planet Jupiter.",
            url: "img/year-19-jupiter-and-ganymede_52717369362_o.jpg",
            ra: 1.1, dec: 5.2
        },
        {
            year: 20,
            title: "30 Doradus",
            desc: "A giant stellar nursery located in the Large Magellanic Cloud, home to some of the most massive stars known.",
            url: "img/year-20-30-doradus_52718381738_o.jpg",
            ra: 5.6, dec: -69.1
        },
        {
            year: 21,
            title: "Starburst Cluster NGC 3603",
            desc: "A frenetic stellar nursery where stars are born at an incredible rate from hydrogen clouds.",
            url: "img/year-21-starburst-cluster-ngc-3603_52717380682_o.jpg",
            ra: 11.1, dec: -61.3
        },
        {
            year: 22,
            title: "NGC 2841",
            desc: "A 'flocculent' spiral galaxy with short, fragmented arms laden with dust and young blue stars.",
            url: "img/year-22-ngc-2841_52717915421_o.jpg",
            ra: 9.4, dec: 50.9
        },
        {
            year: 23,
            title: "eXtreme Deep Field (XDF)",
            desc: "The deepest image of the universe ever made, revealing thousands of galaxies billions of light-years away.",
            url: "img/year-23-extreme-deep-field_52718357905_o.jpg",
            ra: 3.5, dec: -27.8
        },
        {
            year: 24,
            title: "Messier 15",
            desc: "An incredibly dense globular cluster, one of the oldest in the known universe.",
            url: "img/year-24-messier-15_52717417372_o.jpg",
            ra: 21.5, dec: 12.2
        },
        {
            year: 25,
            title: "Andromeda Galaxy",
            desc: "The largest and sharpest panorama ever taken of our neighboring galaxy, showing millions of individual stars.",
            url: "img/year-25-andromeda-galaxy_52718380610_o.jpg",
            ra: 0.7, dec: 41.3
        },
        {
            year: 26,
            title: "Herbig-Haro 24 Jet",
            desc: "A rising star shooting jets of material into space, resembling a sci-fi double lightsaber.",
            url: "img/year-26-herbig-haro-24-jet_52717434517_o.jpg",
            ra: 5.7, dec: 0.2
        },
        {
            year: 27,
            title: "NGC 248",
            desc: "Two emission nebulae in the Small Magellanic Cloud that appear to merge into a single glowing cloud.",
            url: "img/year-27-ngc-248_52718231104_o.jpg",
            ra: 0.7, dec: -73.3
        },
        {
            year: 28,
            title: "Milky Way Bulge",
            desc: "A deep look into the heart of our galaxy, where stars are densely packed.",
            url: "img/year-28-milky-way-bulge_52717448977_o.jpg",
            ra: 17.7, dec: -29.0
        },
        {
            year: 29,
            title: "Galaxy M100",
            desc: "A 'grand design' spiral galaxy captured to show the evolution of Hubble's capabilities over the years.",
            url: "img/year-29-m100_52718468663_o.jpg",
            ra: 12.4, dec: 15.8
        },
        {
            year: 30,
            title: "Arp-Madore 2026-424",
            desc: "A system of colliding galaxies that temporarily takes the form of a spectral face.",
            url: "img/year-30-arp-madore-2026-424_52717462602_o.jpg",
            ra: 20.4, dec: -42.8
        },
        {
            year: 31,
            title: "Caldwell 69",
            desc: "Known as the Bug Nebula, it is a bipolar nebula with a complex butterfly-like structure.",
            url: "img/year-31-caldwell-69-butterfly-nebula_52718476738_o.jpg",
            ra: 17.2, dec: -37.1
        },
        {
            year: 32,
            title: "CW Leonis",
            desc: "A dying red giant star shedding its outer layers, creating a web of dark dust.",
            url: "img/year-32-cw-leonis_52717990416_o.jpg",
            ra: 9.8, dec: 13.3
        },
        {
            year: 33,
            title: "NGC 1850",
            desc: "An unusual star cluster composed of two populations of stars of very different ages.",
            url: "img/year-33-ngc-1850_54396405537_o.jpg",
            ra: 5.1, dec: -68.2
        },
        {
            year: 34,
            title: "HP Tau",
            desc: "A triple star system surrounded by a reflection nebula, glowing with the light scattered by young stars.",
            url: "img/year-34-hp-tau_54393577608_o.jpg",
            ra: 4.6, dec: 24.3
        }
    ]
};
