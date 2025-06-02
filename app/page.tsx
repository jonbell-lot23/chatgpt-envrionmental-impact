"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface Source {
  quote: string;
  author: string;
  url: string;
}

interface Citation {
  quote: string;
  author: string;
  url: string;
}

interface Citations {
  chatgpt: Citation;
  comparison: Citation;
  calculation: string;
}

interface EnvironmentalItem {
  activity: string;
  water: string;
  energy: string;
  carbon: string;
  sources: {
    water: Source;
    energy: Source;
    carbon: Source;
  };
  citations: {
    water: Citations;
    energy: Citations;
    carbon: Citations;
  };
}

const environmentalData: EnvironmentalItem[] = [
  {
    activity: "Hamburgers",
    water: "1 burger",
    energy: "3.8",
    carbon: "5.4",
    sources: {
      water: {
        quote:
          "It takes about 2,400 L of water to produce a single quarter-pound hamburger.",
        author: "Water Footprint Network",
        url: "https://waterfootprint.org/resources/schoolresources/AquaPASS_WFN_Final.pdf",
      },
      energy: {
        quote:
          "A quarter-pound burger requires 7–20 MJ of fossil energy (≈2–5 kWh).",
        author: "Sonesson & Hallström, 2012 (LCA)",
        url: "https://www.researchgate.net/figure/Energy-use-for-a-hamburger-MJ-per-hamburger_fig1_237432172",
      },
      carbon: {
        quote: "A cheeseburger emits ~1.9 kg CO₂-e.",
        author: "Carbon Independent factsheet",
        url: "https://en.wikipedia.org/wiki/Individual_action_on_climate_change#Food",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "A single hamburger's water footprint is 2,400 liters.",
          author: "Water Footprint Network, 2023",
          url: "https://waterfootprint.org/en/resources/interactive-tools/product-gallery/",
        },
        calculation:
          "A hamburger requires 2,400 liters of water to produce. With ChatGPT using 25 liters per 1,000 queries, 100,000 queries use 2,500 liters. That's roughly equal to making just one hamburger.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote:
            "A quarter-pound burger requires 7–20 MJ of fossil energy (≈2–5 kWh).",
          author: "Sonesson & Hallström, 2012 (LCA)",
          url: "https://www.researchgate.net/figure/Energy-use-for-a-hamburger-MJ-per-hamburger_fig1_237432172",
        },
        calculation:
          "Making a hamburger uses about 2.5 kWh of energy. At 0.3 watt-hours per query, 100,000 queries consume 30 kWh. That's enough energy to make 12 hamburgers.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "A cheeseburger emits ~1.9 kg CO₂-e.",
          author: "Carbon Independent factsheet",
          url: "https://en.wikipedia.org/wiki/Individual_action_on_climate_change#Food",
        },
        calculation:
          "A cheeseburger produces 1.9 kg of CO₂. ChatGPT generates 0.135 g CO₂ per query, so 100,000 queries produce 13.5 kg. That equals about 7 cheeseburgers worth of emissions.",
      },
    },
  },
  {
    activity: "iPhone charges",
    water: "17,400 charges",
    energy: "1,580",
    carbon: "1,580",
    sources: {
      water: {
        quote:
          "Thermo- & hydro-electric generation evaporate 7.6 L of water per kWh.",
        author: "DataCenterKnowledge, 2016",
        url: "https://www.datacenterknowledge.com/business/heres-how-much-water-all-us-data-centers-consume",
      },
      energy: {
        quote: "Charging an iPhone 13 Pro uses 0.019 kWh.",
        author: "EnergySage, 2024",
        url: "https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/",
      },
      carbon: {
        quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
        author: "Our World in Data / Ember",
        url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "A single iPhone charge's energy consumption is 0.012 kWh.",
          author: "Apple Inc., 2023",
          url: "https://www.apple.com/environment/",
        },
        calculation:
          "Charging an iPhone uses 0.012 kWh, which requires 0.14 liters of water for power generation. 100,000 ChatGPT queries use 2,500 liters. That means the queries use as much water as 17,400 iPhone charges.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Charging an iPhone 13 Pro uses 0.019 kWh.",
          author: "EnergySage, 2024",
          url: "https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/",
        },
        calculation:
          "An iPhone charge takes 0.019 kWh. Since 100,000 queries use 30 kWh total, that's equivalent to 1,580 phone charges.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "Charging an iPhone 13 Pro uses 0.019 kWh.",
          author: "EnergySage, 2024",
          url: "https://www.energysage.com/electricity/house-watts/how-many-watts-does-a-phone-charger-use/",
        },
        calculation:
          "Each iPhone charge creates 8.5 g of CO₂ (0.019 kWh × 450 g/kWh). With 100,000 queries producing 13.5 kg CO₂, that equals 1,580 phone charges.",
      },
    },
  },
  {
    activity: "Domestic flight",
    water: "2.6 days",
    energy: "4.4min",
    carbon: "3.2min",
    sources: {
      water: {
        quote: "Jet-fuel refining uses 0.09 gal water / gal fuel.",
        author: "ScienceDirect refinery study, 2017",
        url: "https://www.sciencedirect.com/science/article/pii/S0016236117309511",
      },
      energy: {
        quote: "Jet fuel holds 11.9 kWh per kg.",
        author: "Autosport",
        url: "https://www.autosport.com/f1/news/how-much-fuel-does-a-formula-1-car-use-f1-nascar-more-compared-4980266/",
      },
      carbon: {
        quote:
          "A Boeing 737 emits ≈ 90 kg CO₂ per passenger-hour (≈ 1.5 kg min-¹).",
        author: "Carbon Independent",
        url: "https://www.carbonindependent.org/sources_aviation.html",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "Jet-fuel refining uses 0.09 gal water / gal fuel.",
          author: "ScienceDirect refinery study, 2017",
          url: "https://www.sciencedirect.com/science/article/pii/S0016236117309511",
        },
        calculation:
          "Refining jet fuel requires 0.34 liters of water per liter of fuel. A 737 burns 40 liters per minute, needing 976 liters of water daily for fuel refining. So 100,000 queries (2,500 L) equals 2.6 days of flight fuel water usage.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Jet fuel holds 11.9 kWh per kg.",
          author: "Autosport",
          url: "https://www.autosport.com/f1/news/how-much-fuel-does-a-formula-1-car-use-f1-nascar-more-compared-4980266/",
        },
        calculation:
          "A Boeing 737 consumes 410 kWh per minute of flight. With 100,000 queries using 30 kWh, that equals just 4.4 minutes of flight time.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote:
            "A domestic flight's carbon footprint is 0.25 metric tons CO2e per passenger.",
          author: "ICAO, 2023",
          url: "https://www.icao.int/environmental-protection/Pages/calculator.aspx",
        },
        calculation:
          "Each passenger generates 4.2 kg CO₂ per minute on a domestic flight. Since 100,000 queries produce 13.5 kg CO₂, that's equivalent to 3.2 minutes of flight time.",
      },
    },
  },
  {
    activity: "Avocado toast",
    water: "7.8 toasts",
    energy: "75",
    carbon: "71",
    sources: {
      water: {
        quote:
          "Growing one avocado in Chile's Petorca valley needs ≈ 320 L of water.",
        author: "Danwatch, 2017",
        url: "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat/",
      },
      energy: {
        quote: "Energy ~0.4 kWh per avocado via WA-Ag LCA",
        author: "Washington Agriculture LCA",
        url: "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat/",
      },
      carbon: {
        quote: "The average carbon footprint of one avocado is 0.19 kg CO₂-e.",
        author: "Viva!, 2021",
        url: "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat/",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "A single avocado's water footprint is 320 liters.",
          author: "Water Footprint Network, 2023",
          url: "https://waterfootprint.org/en/resources/interactive-tools/product-gallery/",
        },
        calculation:
          "One avocado needs 320 liters of water to grow. 100,000 queries use 2,500 liters total, which equals 7.8 avocados worth of water.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Energy ~0.4 kWh per avocado via WA-Ag LCA",
          author: "Washington Agriculture LCA",
          url: "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat/",
        },
        calculation:
          "Each avocado requires 0.4 kWh to produce. Since 100,000 queries consume 30 kWh, that's the same energy as producing 75 avocados.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote:
            "The average carbon footprint of one avocado is 0.19 kg CO₂-e.",
          author: "Viva!, 2021",
          url: "https://viva.org.uk/planet/are-avocados-worse-for-the-environment-than-meat/",
        },
        calculation:
          "An avocado generates 0.19 kg CO₂ from farm to table. With 100,000 queries producing 13.5 kg, that equals the carbon footprint of 71 avocados.",
      },
    },
  },
  {
    activity: "Lattes",
    water: "12.5 lattes",
    energy: "600",
    carbon: "39",
    sources: {
      water: {
        quote: "It takes more than 200 L of water to make a grande latte.",
        author: "TriplePundit, 2011",
        url: "https://www.triplepundit.com/story/2011/coffees-grande-water-footprint/74751",
      },
      energy: {
        quote:
          "A detailed LCA found the embodied energy of a latte is 0.54 kWh.",
        author: "BarTalks, 2021",
        url: "https://bartalks.net/study-on-carbon-footprint-for-coffee-and-77-cut/",
      },
      carbon: {
        quote: "Lattes have a carbon footprint of ≈ 0.55 kg CO₂.",
        author: "Nicole Battefeld, 2021",
        url: "https://www.nicolebattefeld.com/post/carbon-footprint-of-coffee",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "A single latte's water footprint is 200 liters.",
          author: "Water Footprint Network, 2023",
          url: "https://waterfootprint.org/en/resources/interactive-tools/product-gallery/",
        },
        calculation:
          "A latte requires 200 liters of water (from bean cultivation to milk production). So 100,000 queries at 2,500 liters equals 12.5 lattes.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote:
            "A detailed LCA found the embodied energy of a latte is 0.54 kWh.",
          author: "BarTalks, 2021",
          url: "https://bartalks.net/study-on-carbon-footprint-for-coffee-and-77-cut/",
        },
        calculation:
          "Making a latte uses 0.05 kWh of energy. 100,000 queries at 30 kWh could make 600 lattes.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "Lattes have a carbon footprint of ≈ 0.55 kg CO₂.",
          author: "Nicole Battefeld, 2021",
          url: "https://www.nicolebattefeld.com/post/carbon-footprint-of-coffee",
        },
        calculation:
          "Each latte produces 0.55 kg CO₂. Since 100,000 queries generate 13.5 kg, that's equivalent to 25 lattes' worth of emissions.",
      },
    },
  },
  {
    activity: "Beer",
    water: "15 pints",
    energy: "100",
    carbon: "27",
    sources: {
      water: {
        quote: "It takes 168 L of water to produce one pint of beer.",
        author: "The Guardian, 2013",
        url: "https://www.theguardian.com/sustainable-business/gallery/how-much-water-to-make-food-drink",
      },
      energy: {
        quote: "Brewing uses ≈ 0.2 kWh per bottle.",
        author: "ChooseEnergy, 2020",
        url: "https://www.chooseenergy.com/news/article/how-much-energy-it-takes-to-brew-st-patricks-day-beer/",
      },
      carbon: {
        quote: "A bottled pint carries ≈ 500 g CO₂-e.",
        author: "The Guardian, 2010",
        url: "https://www.theguardian.com/environment/green-living-blog/2010/jun/04/carbon-footprint-beer",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "A single beer's water footprint is 74 liters.",
          author: "Water Footprint Network, 2023",
          url: "https://waterfootprint.org/en/resources/interactive-tools/product-gallery/",
        },
        calculation:
          "Brewing one pint of beer uses 168 liters of water. 100,000 queries consume 2,500 liters, which equals about 15 pints of beer.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Brewing uses ≈ 0.2 kWh per bottle.",
          author: "ChooseEnergy, 2020",
          url: "https://www.chooseenergy.com/news/article/how-much-energy-it-takes-to-brew-st-patricks-day-beer/",
        },
        calculation:
          "Brewing a pint requires 0.3 kWh. With 100,000 queries using 30 kWh, that's enough energy to brew 100 pints.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "A bottled pint carries ≈ 500 g CO₂-e.",
          author: "The Guardian, 2010",
          url: "https://www.theguardian.com/environment/green-living-blog/2010/jun/04/carbon-footprint-beer",
        },
        calculation:
          "A pint of beer generates 0.5 kg CO₂. 100,000 queries produce 13.5 kg, which equals 27 pints worth of carbon emissions.",
      },
    },
  },
  {
    activity: "Car commute",
    water: "~21 days",
    energy: "45min",
    carbon: "76min",
    sources: {
      water: {
        quote: "Jet-fuel refining uses 0.09 gal water / gal fuel.",
        author: "Fluence Corp",
        url: "https://www.fluencecorp.com/water-use-in-petroleum-refining/",
      },
      energy: {
        quote:
          "Greenhouse-Gas Emissions from a Typical Passenger Vehicle - 404 g CO₂ mile-¹",
        author: "US EPA, 2020",
        url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
      },
      carbon: {
        quote:
          "Greenhouse-Gas Emissions from a Typical Passenger Vehicle - 404 g CO₂ mile-¹",
        author: "US EPA, 2020",
        url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "Jet-fuel refining uses 0.09 gal water / gal fuel.",
          author: "Fluence Corp",
          url: "https://www.fluencecorp.com/water-use-in-petroleum-refining/",
        },
        calculation:
          "Refining gasoline uses 0.34 L water per liter of fuel. A typical commute uses 3.8 L fuel daily, requiring 1.3 L water. So 100,000 queries (2,500 L) equals 21 days of commuting fuel water.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote:
            "Greenhouse-Gas Emissions from a Typical Passenger Vehicle - 404 g CO₂ mile-¹",
          author: "US EPA, 2020",
          url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
        },
        calculation:
          "Driving uses about 40 kWh per hour. Since 100,000 queries consume 30 kWh, that's 45 minutes of driving.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote:
            "Greenhouse-Gas Emissions from a Typical Passenger Vehicle - 404 g CO₂ mile-¹",
          author: "US EPA, 2020",
          url: "https://www.epa.gov/greenvehicles/greenhouse-gas-emissions-typical-passenger-vehicle",
        },
        calculation:
          "Cars emit 177 g CO₂ per kilometer. 100,000 queries produce 13.5 kg CO₂, which equals 76 km of driving—about 76 minutes on the road.",
      },
    },
  },
  {
    activity: "Melbourne electricity",
    water: "~14 days",
    energy: "30h",
    carbon: "16h",
    sources: {
      water: {
        quote:
          "Thermo- & hydro-electric generation evaporate 7.6 L of water per kWh.",
        author: "DataCenterKnowledge, 2016",
        url: "https://www.datacenterknowledge.com/business/heres-how-much-water-all-us-data-centers-consume",
      },
      energy: {
        quote: "Victoria grid intensity article – 0.85 kg CO₂ kWh-¹",
        author: "The Australian, 2024",
        url: "https://www.theaustralian.com.au/nation/politics/victorias-grid-dirtiest-as-experts-say-yallourn-may-stay-open-longer-than-planned/news-story/8725102ad58fb5efd454d157a5074b1b",
      },
      carbon: {
        quote: "Victoria grid intensity article – 0.85 kg CO₂ kWh-¹",
        author: "The Australian, 2024",
        url: "https://www.theaustralian.com.au/nation/politics/victorias-grid-dirtiest-as-experts-say-yallourn-may-stay-open-longer-than-planned/news-story/8725102ad58fb5efd454d157a5074b1b",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote:
            "Thermo- & hydro-electric generation evaporate 7.6 L of water per kWh.",
          author: "DataCenterKnowledge, 2016",
          url: "https://www.datacenterknowledge.com/business/heres-how-much-water-all-us-data-centers-consume",
        },
        calculation:
          "Generating 1 kWh evaporates 7.6 liters of water. A Melbourne home uses 24 kWh daily (182 L water). 100,000 queries use 2,500 L, equivalent to 14 days of household electricity water use.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Victoria grid intensity article – 0.85 kg CO₂ kWh-¹",
          author: "The Australian, 2024",
          url: "https://www.theaustralian.com.au/nation/politics/victorias-grid-dirtiest-as-experts-say-yallourn-may-stay-open-longer-than-planned/news-story/8725102ad58fb5efd454d157a5074b1b",
        },
        calculation:
          "Melbourne homes average 24 kWh per day. With 100,000 queries using 30 kWh, that powers a home for 30 hours.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "Victoria grid intensity article – 0.85 kg CO₂ kWh-¹",
          author: "The Australian, 2024",
          url: "https://www.theaustralian.com.au/nation/politics/victorias-grid-dirtiest-as-experts-say-yallourn-may-stay-open-longer-than-planned/news-story/8725102ad58fb5efd454d157a5074b1b",
        },
        calculation:
          "Victoria's grid emits 0.85 kg CO₂ per kWh. 100,000 queries produce 13.5 kg CO₂, equivalent to using 16 kWh on Victoria's grid—or 16 hours of typical home electricity.",
      },
    },
  },
  {
    activity: "Formula 1 race",
    water: "17 races",
    energy: "0.02",
    carbon: "0.04",
    sources: {
      water: {
        quote: "F1 Cars Can Use up to 110 kg Fuel per Race",
        author: "Autosport, 2021",
        url: "https://www.autosport.com/f1/news/how-much-fuel-does-a-formula-1-car-use-f1-nascar-more-compared-4980266/",
      },
      energy: {
        quote: "Jet-fuel energy density ≈ 11.9 kWh kg-¹",
        author: "Wired Energy blog, 2023",
        url: "https://h2sciencecoalition.com/blog/hydrogen-for-aircraft-number-crunching-the-solution-or-the-hoax/",
      },
      carbon: {
        quote: "ICCT / ICAO constant – 3.16 kg CO₂ kg-¹ jet fuel",
        author: "ICCT, 2021",
        url: "https://theicct.org/sites/default/files/publications/variation-aviation-emissions-itinerary-jul2021-1.pdf",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "F1 Cars Can Use up to 110 kg Fuel per Race",
          author: "Autosport, 2021",
          url: "https://www.autosport.com/f1/news/how-much-fuel-does-a-formula-1-car-use-f1-nascar-more-compared-4980266/",
        },
        calculation:
          "An F1 car uses 110 kg fuel per race, requiring 147 L water to refine. 100,000 queries use 2,500 L water, enough to fuel 17 F1 races.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Jet-fuel energy density ≈ 11.9 kWh kg-¹",
          author: "Wired Energy blog, 2023",
          url: "https://h2sciencecoalition.com/blog/hydrogen-for-aircraft-number-crunching-the-solution-or-the-hoax/",
        },
        calculation:
          "F1 fuel contains 11.9 kWh per kg, so 110 kg equals 1,300 kWh per race. 100,000 queries at 30 kWh is just 2.3% of one race's energy.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "ICCT / ICAO constant – 3.16 kg CO₂ kg-¹ jet fuel",
          author: "ICCT, 2021",
          url: "https://theicct.org/sites/default/files/publications/variation-aviation-emissions-itinerary-jul2021-1.pdf",
        },
        calculation:
          "Burning 110 kg of F1 fuel releases 348 kg CO₂. With 100,000 queries producing 13.5 kg, that's 3.9% of one race's emissions.",
      },
    },
  },
  {
    activity: "Manufacturing a car",
    water: "0.01 car",
    energy: "0.0015",
    carbon: "0.002",
    sources: {
      water: {
        quote: "Producing a car uses over 39,000 gal (148,000 L) of water.",
        author: "Automotive World, 2014",
        url: "https://www.automotiveworld.com/articles/water-water-everywhere-vehicle-manufacturing/",
      },
      energy: {
        quote: "Embedded energy of a VW Golf: ≈ 24,000 kWh.",
        author: "Ricardo",
        url: "https://www.greencarcongress.com/2011/06/lowcvp-20110608.html",
      },
      carbon: {
        quote: "Mid-size gasoline car: 5.6 t CO₂-e embodied.",
        author: "Zemo Partnership lifecycle report, 2011",
        url: "https://www.zemo.org.uk/assets/workingdocuments/MC-P-11-15a%20Lifecycle%20emissions%20report.pdf",
      },
    },
    citations: {
      water: {
        chatgpt: {
          quote:
            "ChatGPT 'drinks' a 500 mL bottle of fresh water for roughly 20–50 questions.",
          author: "Li et al., 2023",
          url: "https://arxiv.org/abs/2304.03271",
        },
        comparison: {
          quote: "Producing a car uses over 39,000 gal (148,000 L) of water.",
          author: "Automotive World, 2014",
          url: "https://www.automotiveworld.com/articles/water-water-everywhere-vehicle-manufacturing/",
        },
        calculation:
          "Car manufacturing requires 148,000 liters of water. 100,000 queries use 2,500 liters, which is just 1.7% of making one car.",
      },
      energy: {
        chatgpt: {
          quote: "Typical GPT-4 requests consume about 0.3 watt-hours.",
          author: "Epoch AI, 2025",
          url: "https://epoch.ai/gradient-updates/how-much-energy-does-chatgpt-use",
        },
        comparison: {
          quote: "Embedded energy of a VW Golf: ≈ 24,000 kWh.",
          author: "Ricardo",
          url: "https://www.greencarcongress.com/2011/06/lowcvp-20110608.html",
        },
        calculation:
          "Manufacturing a car takes 24,000 kWh. With 100,000 queries using 30 kWh, that's 0.125% of building one vehicle.",
      },
      carbon: {
        chatgpt: {
          quote: "2024 world-average grid: ≈ 450 g CO₂-e per kWh.",
          author: "Our World in Data / Ember",
          url: "https://ourworldindata.org/grapher/carbon-intensity-electricity",
        },
        comparison: {
          quote: "Mid-size gasoline car: 5.6 t CO₂-e embodied.",
          author: "Zemo Partnership lifecycle report, 2011",
          url: "https://www.zemo.org.uk/assets/workingdocuments/MC-P-11-15a%20Lifecycle%20emissions%20report.pdf",
        },
        calculation:
          "Car production emits 5.6 tonnes of CO₂. 100,000 queries generate 13.5 kg, just 0.24% of manufacturing one car.",
      },
    },
  },
];

export default function HomePage() {
  const [waterUsage, setWaterUsage] = useState("25");
  const [selectedActivity, setSelectedActivity] = useState<string | null>(
    "Hamburgers"
  );

  const renderCitations = (item: (typeof environmentalData)[0]) => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Water Usage Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💧</span>
            <h3 className="text-lg font-semibold text-blue-400">Water Usage</h3>
          </div>
          <div className="bg-blue-900/30 p-4 rounded-lg">
            <p className="text-blue-200">{item.citations.water.calculation}</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-100">
                {item.activity}&apos;s water usage:
              </p>
              <blockquote className="border-l-4 border-blue-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.water.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.water.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  {item.citations.water.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-100">
                ChatGPT&apos;s water usage:
              </p>
              <blockquote className="border-l-4 border-blue-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.water.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.water.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  {item.citations.water.chatgpt.author}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Energy Usage Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            <h3 className="text-lg font-semibold text-yellow-400">
              Energy Usage
            </h3>
          </div>
          <div className="bg-yellow-900/30 p-4 rounded-lg">
            <p className="text-yellow-200">
              {item.citations.energy.calculation}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-100">
                {item.activity}&apos;s energy usage:
              </p>
              <blockquote className="border-l-4 border-yellow-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.energy.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.energy.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 hover:underline"
                >
                  {item.citations.energy.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-100">
                ChatGPT&apos;s energy usage:
              </p>
              <blockquote className="border-l-4 border-yellow-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.energy.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.energy.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 hover:underline"
                >
                  {item.citations.energy.chatgpt.author}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Carbon Emissions Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌱</span>
            <h3 className="text-lg font-semibold text-green-400">
              Carbon Emissions
            </h3>
          </div>
          <div className="bg-green-900/30 p-4 rounded-lg">
            <p className="text-green-200">
              {item.citations.carbon.calculation}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-gray-100">
                {item.activity}&apos;s carbon emissions:
              </p>
              <blockquote className="border-l-4 border-green-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.carbon.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.carbon.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 hover:underline"
                >
                  {item.citations.carbon.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium text-gray-100">
                ChatGPT&apos;s carbon emissions:
              </p>
              <blockquote className="border-l-4 border-green-700 pl-4 italic mt-2 text-gray-300">
                &ldquo;{item.citations.carbon.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.carbon.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 hover:underline"
                >
                  {item.citations.carbon.chatgpt.author}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full">
        {/* Header */}

        {/* Main Content Card */}
        <Card className="md:mx-4 md:my-4 border-0 md:border bg-gray-800 border-gray-700">
          <CardContent className="p-0 md:p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-700">
                  <TableHead className="font-semibold text-gray-100 py-2 px-1 md:py-3 md:px-3">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-100">
                      100,000 ChatGPT queries is like...
                    </h1>
                  </TableHead>
                  <TableHead className="font-semibold text-blue-400 py-2 px-1 md:py-3 md:px-3 text-center">
                    💧
                  </TableHead>
                  <TableHead className="font-semibold text-yellow-400 py-2 px-1 md:py-3 md:px-3 text-center">
                    ⚡
                  </TableHead>
                  <TableHead className="font-semibold text-green-400 py-2 px-1 md:py-3 md:px-3 text-center">
                    🌱
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {environmentalData.map((item, index) => (
                  <TableRow
                    key={index}
                    className={`hover:bg-gray-700 transition-colors cursor-pointer border-gray-700 ${
                      selectedActivity === item.activity ? "bg-gray-700" : ""
                    }`}
                    onClick={() =>
                      setSelectedActivity(
                        selectedActivity === item.activity
                          ? null
                          : item.activity
                      )
                    }
                  >
                    <TableCell className="font-medium py-1 px-2 md:py-2 md:px-3 text-gray-100">
                      {item.activity}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-blue-400 text-center">
                      {item.water}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-yellow-400 text-center">
                      {item.energy}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-green-400 text-center">
                      {item.carbon}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Sources Section */}
        {selectedActivity && (
          <div className="mt-4 md:mt-8 mx-0 md:mx-4">
            <Card className="border-0 md:border bg-gray-800 border-gray-700">
              <CardContent className="prose prose-invert max-w-none p-2 md:p-6 pt-0">
                {(() => {
                  const item = environmentalData.find(
                    (i) => i.activity === selectedActivity
                  );
                  if (!item) return null;
                  return renderCitations(item);
                })()}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
