export interface EnvironmentalImpact {
  name: string;
  waterUsage: {
    value: number;
    unit: string;
    sources: string[];
  };
  energyUsage: {
    value: number;
    unit: string;
    sources: string[];
  };
  carbonEmissions: {
    value: number;
    unit: string;
    sources: string[];
  };
  perUnit: string;
}

export const environmentalData: EnvironmentalImpact[] = [
  {
    name: "ChatGPT Query",
    waterUsage: {
      value: 0.5,
      unit: "ml",
      sources: ["https://arxiv.org/abs/2304.03271"],
    },
    energyUsage: {
      value: 0.002,
      unit: "kWh",
      sources: [
        "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
      ],
    },
    carbonEmissions: {
      value: 0.0017,
      unit: "kg CO₂e",
      sources: [
        "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        "https://ourworldindata.org/grapher/carbon-intensity-electricity",
      ],
    },
    perUnit: "per query",
  },
  {
    name: "Beef (1 lb)",
    waterUsage: {
      value: 1800,
      unit: "gal",
      sources: ["https://www.waterfootprint.org/resources/Report16Vol1.pdf"],
    },
    energyUsage: {
      value: 31.5,
      unit: "kWh",
      sources: [
        "https://askwonder.com/research/energy-in-btus-expended-used-produce-1-pound-beef-chicken-pork-retail-k5gwibwm3",
      ],
    },
    carbonEmissions: {
      value: 15,
      unit: "kg CO₂e",
      sources: [
        "https://engineering.wisc.edu/news/a-more-digestible-co2-calculator-swaps-cheeseburgers-for-carbon",
      ],
    },
    perUnit: "per pound",
  },
  {
    name: "Avocado",
    waterUsage: {
      value: 320,
      unit: "L",
      sources: [
        "https://old.danwatch.dk/en/undersogelse/avocados-and-stolen-water",
      ],
    },
    energyUsage: {
      value: 0.5,
      unit: "kWh",
      sources: [
        "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat",
      ],
    },
    carbonEmissions: {
      value: 0.19,
      unit: "kg CO₂e",
      sources: [
        "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat",
      ],
    },
    perUnit: "per avocado",
  },
  {
    name: "Coffee (Latte)",
    waterUsage: {
      value: 200,
      unit: "L",
      sources: [
        "https://www.triplepundit.com/story/2011/coffees-grande-water-footprint/74751",
      ],
    },
    energyUsage: {
      value: 0.5,
      unit: "kWh",
      sources: [
        "https://www.nicolebattefeld.com/post/carbon-footprint-of-coffee",
      ],
    },
    carbonEmissions: {
      value: 0.55,
      unit: "kg CO₂e",
      sources: [
        "https://www.nicolebattefeld.com/post/carbon-footprint-of-coffee",
      ],
    },
    perUnit: "per 16oz latte",
  },
];
