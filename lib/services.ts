export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  featureOne: {
    title: string;
    kicker: string;
    body: string;
    image: string;
    alt: string;
  };
  featureTwo: {
    title: string;
    kicker: string;
    body: string;
    image: string;
    alt: string;
  };
};

export const services: Service[] = [
  {
    slug: "new-builds",
    name: "New Builds",
    eyebrow: "Made from the ground up",
    headline: "Homes made with heart and skill.",
    intro:
      "A new home should feel unmistakably yours. We bring thoughtful planning, dependable craftsmanship and a calm, transparent process to every stage of the build.",
    heroImage: "/images/centreline/hero-home.png",
    heroAlt: "Modern dark-clad home built by Centreline Build",
    featureOne: {
      title: "Made for you",
      kicker: "Personalised plans",
      body:
        "We create homes designed around your life, from the ground up. Our team works closely with you to understand your needs and vision, making sure every detail is planned to fit your lifestyle. With practical guidance at every stage, we bring your dream home to life.",
      image: "/images/centreline/new-build-primary.png",
      alt: "Contemporary home with a wraparound timber deck",
    },
    featureTwo: {
      title: "Quality you can trust",
      kicker: "Creating spaces for real life",
      body:
        "Building a new home is a big step, and we’re here to make it easier. We use quality materials and skilled craftsmanship to build homes that stand the test of time. From start to finish, our focus stays on the details that make a home feel solid, comfortable and ready for years of memories.",
      image: "/images/centreline/new-build-secondary.png",
      alt: "Long dark home with newly built timber decking",
    },
  },
  {
    slug: "renovations-extensions",
    name: "Renovations & Extensions",
    eyebrow: "Rework the home you love",
    headline: "Building your dreams, one detail at a time.",
    intro:
      "Whether you are opening up an old room or adding something entirely new, we create considered additions that feel like they have always belonged.",
    heroImage: "/images/dundeal/timber-cladding.jpg",
    heroAlt: "Detailed timber cladding on a modern renovation project",
    featureOne: {
      title: "Transform your space",
      kicker: "Upgrade your home",
      body:
        "Whether you’re looking to update an old room or add something entirely new, we’re here to help. Our team works closely with you to create a space that fits your needs and style. From design to final touches, every step is handled with care and attention.",
      image: "/images/centreline/renovation-primary.png",
      alt: "Wall tiling being installed above a benchtop",
    },
    featureTwo: {
      title: "Built for your vision",
      kicker: "Built to fit your life",
      body:
        "Every home should reflect the people who live in it. Our renovations and extensions are designed to match your unique vision. Using quality materials and skilled workmanship, we bring ideas to life while adding lasting value and comfort to your home.",
      image: "/images/centreline/renovation-secondary.png",
      alt: "Carpenter cutting timber with a drop saw",
    },
  },
  {
    slug: "kitchens",
    name: "Kitchens",
    eyebrow: "The heart of the home",
    headline: "Building dreams, Kiwi style.",
    intro:
      "Beautiful to look at and effortless to live in, our kitchens balance layout, durable finishes and the small practical details that make every day easier.",
    heroImage: "/images/centreline/kitchen-secondary.png",
    heroAlt: "Dark contemporary kitchen with island seating",
    featureOne: {
      title: "Custom creations",
      kicker: "Personalised spaces",
      body:
        "We design kitchens that fit your lifestyle and make everyday cooking and dining enjoyable. From sleek modern designs to timeless classic styles, our team works with you to create a kitchen that not only looks amazing but also functions smoothly.",
      image: "/images/centreline/kitchen-primary.png",
      alt: "Modern open-plan kitchen with a black stone island",
    },
    featureTwo: {
      title: "Quality and care",
      kicker: "Crafted with care",
      body:
        "Our kitchens are crafted with quality materials and expert workmanship, ensuring they stand the test of time. We believe in creating spaces that not only look good but also last for years, so you can enjoy them without worry.",
      image: "/images/centreline/kitchen-detail.png",
      alt: "Dark kitchen cabinetry and island in a renovated home",
    },
  },
  {
    slug: "bathrooms",
    name: "Bathrooms",
    eyebrow: "Quiet, practical retreats",
    headline: "Your vision, our build.",
    intro:
      "From a hardworking family bathroom to a refined ensuite, we create spaces that feel calm, function beautifully and hold up to real life.",
    heroImage: "/images/centreline/bathroom-secondary.png",
    heroAlt: "Bright modern bathroom with bath and vanity",
    featureOne: {
      title: "Relaxing retreats",
      kicker: "Your relaxation zone",
      body:
        "We build bathrooms that are perfect for relaxing and unwinding. Whether you prefer a modern look or a classic style, we create spaces that match your lifestyle. Using quality materials and paying close attention to detail, we make sure your bathroom is both beautiful and useful.",
      image: "/images/centreline/bathroom-primary.png",
      alt: "Modern bathroom with freestanding bath and tiled wall",
    },
    featureTwo: {
      title: "Elegant and functional",
      kicker: "Stylish and practical",
      body:
        "A great bathroom should look good and work well. We design layouts that make the best use of your space, so it feels open and organised. With sturdy materials and skilled work, we create bathrooms that handle everyday use and keep their style.",
      image: "/images/centreline/bathroom-detail.png",
      alt: "Light bathroom with bath, toilet and floating shelves",
    },
  },
  {
    slug: "decks-fences",
    name: "Decks & Fences",
    eyebrow: "Better life outdoors",
    headline: "Strong fences, beautiful decks—built to last.",
    intro:
      "Extend your living space, create privacy and give your property a sharp finish with outdoor work made for Nelson conditions.",
    heroImage: "/images/centreline/new-build-primary.png",
    heroAlt: "Home opening onto a freshly finished timber deck",
    featureOne: {
      title: "Outdoors made easy",
      kicker: "Making outdoor living a breeze",
      body:
        "We design and build decks that expand your outdoor living space, perfect for family gatherings or quiet evenings. Built with quality materials, our decks are strong, safe and made to handle the weather while still feeling like a natural extension of your home.",
      image: "/images/centreline/deck-primary.png",
      alt: "Dark home connected by a spacious deck at dusk",
    },
    featureTwo: {
      title: "Built once, built right",
      kicker: "Fences that stand the test of time",
      body:
        "Our fences provide privacy, security and style for your property. Built with durability in mind, they are crafted to last and look good for years to come. We offer a range of styles to complement your home and create a boundary that blends strength with considered design.",
      image: "/images/centreline/fence-secondary.png",
      alt: "New timber boundary fence beside a family home",
    },
  },
];

export const serviceBySlug = new Map(
  services.map((service) => [service.slug, service]),
);

