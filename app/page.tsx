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
          "Here's something surprising: a single hamburger requires 2,400 liters of water to produce. That's roughly the same as 100,000 ChatGPT queries (2,500 L). So every time you order a burger, you're consuming about as much water as asking ChatGPT 100,000 questions.",
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
          "At 0.3 watt-hours per query, 100,000 ChatGPT queries consume 30 kWh total. A hamburger needs about 2.5 kWh to produce—so those 100,000 queries could have made a dozen burgers. That's a lot of computational power for what amounts to a small cookout!",
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
          "Each cheeseburger adds 1.9 kg of CO₂ to the atmosphere. With 100,000 queries producing 13.5 kg CO₂-e, that's equivalent to about 7 cheeseburgers. Next time you're at a BBQ, consider that the carbon footprint of the burgers on the grill equals hundreds of thousands of AI interactions.",
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
          "Phone charging is incredibly efficient—just 0.012 kWh per charge, which uses only 0.14 liters of water through power generation. That means 100,000 ChatGPT queries (2,500 L) consume the same water as charging your iPhone every single night for 47 years!",
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
          "Your iPhone uses just 0.019 kWh per charge—that's impressively efficient. Meanwhile, 100,000 ChatGPT queries burn through 30 kWh. You could charge your phone 1,580 times with that energy—that's over 4 years of daily charging!",
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
          "Each iPhone charge releases about 8.5 grams of CO₂. The 13.5 kg from 100,000 ChatGPT queries? That equals 1,580 phone charges. If you charge nightly, those queries match your phone's carbon footprint for the next 4.3 years.",
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
          "Refining jet fuel is surprisingly water-intensive at 0.34 liters per liter of fuel. A Boeing 737 burns about 2,500 kg of fuel per hour. With 100,000 ChatGPT queries using 2,500 L of water, you could refine enough fuel to keep that plane aloft for over 2.5 days!",
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
          "A Boeing 737 burns through 410 kWh of energy every minute it flies. Those 100,000 ChatGPT queries at 30 kWh? That's just 4.4 minutes of flight time. By the time you finish reading this sentence, a 737 has already consumed more energy than all those queries combined.",
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
          "Every minute you're on a domestic flight, you personally generate about 4.2 kg of CO₂. The entire carbon footprint of 100,000 ChatGPT queries (13.5 kg) equals just 3.2 minutes of your flight time—less than the time it takes to reach cruising altitude.",
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
          "That trendy avocado toast comes at a cost: 320 liters of water per avocado. Divide 2,500 L (from 100,000 queries) by 320 L and you get 7.8 avocados. So your massive ChatGPT session equals less than 8 pieces of avocado toast—suddenly that brunch habit seems pretty thirsty!",
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
          "Good news for avocado lovers: at just 0.4 kWh per avocado, they're relatively energy-light. With 100,000 queries using 30 kWh, you could produce 75 avocados—enough for avocado toast every morning for over two months!",
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
          "Avocados are carbon champions among foods at just 0.19 kg CO₂ each. Those 100,000 queries producing 13.5 kg CO₂? That's 71 avocados worth. You could eat avocado toast daily for over two months before matching the carbon footprint of that ChatGPT marathon.",
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
          "Your morning latte secretly gulps 200 liters of water—from growing coffee beans to raising dairy cows. With 2,500 L total from 100,000 queries, that's just 12.5 lattes. Put another way: skip your coffee for two weeks and you've saved as much water as a massive AI session.",
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
          "From bean to cup, each latte requires 0.54 kWh—but here's where it gets interesting. Those 100,000 queries at 30 kWh could make 600 lattes! That's nearly two years of daily coffee runs, all from the energy of querying ChatGPT.",
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
          "Coffee's carbon footprint is hefty at 0.55 kg per latte. Divide the 13.5 kg from 100,000 queries by that, and you get about 25 lattes. That's your entire month's worth of coffee shop visits packed into one AI conversation session.",
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
          "Beer production is thirsty work—168 liters per pint from barley field to brewery. Those 2,500 L from 100,000 queries? That's only 15 pints. Next Friday's happy hour could consume more water than your entire ChatGPT habit.",
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
          "Modern breweries are surprisingly efficient, using just 0.3 kWh per pint. The 30 kWh from those queries could brew 100 pints—that's a proper party! Or looked at differently, every 1,000 ChatGPT questions equals the energy in one cold beer.",
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
          "Each pint releases half a kilogram of CO₂—and that's before the bubbles! With 13.5 kg from 100,000 queries, that equals 27 pints. So a month of weekend drinks has the same carbon impact as all those AI interactions.",
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
          "Gasoline refining needs about 0.34 liters of water per liter of fuel. With the average car getting 25 mpg and using 3.8 L per day commuting, that's 1.3 L of water daily. Those 2,500 L from 100,000 queries? That's three weeks of commuting—not bad for a technology often accused of being wasteful!",
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
          "A typical car burns through 40 kWh of energy per hour of driving. Those 100,000 queries at 30 kWh? That's just 45 minutes on the highway. Your daily commute likely uses more energy than months of ChatGPT conversations.",
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
          "Cars emit about 177 grams of CO₂ per kilometer. The 13.5 kg from 100,000 queries equals just 76 km of driving—about an hour and a quarter on the road. Many people drive that far just getting to work and back.",
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
          "Power plants evaporate 7.6 liters of water per kWh generated. The average Melbourne home uses about 24 kWh daily, evaporating 182 liters. With 2,500 L from those queries, that's roughly two weeks of household electricity. Every time you flip a switch, water literally goes up in steam.",
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
          "The average Melbourne home consumes about 24 kWh per day. Those 100,000 queries using 30 kWh? That's keeping your lights on, fridge running, and devices charged for just 30 hours. A single day and a quarter of normal life equals a massive AI session.",
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
          "Victoria's coal-heavy grid emits 0.85 kg CO₂ per kWh—nearly double the global average. Still, those 100,000 queries at 13.5 kg CO₂ equal just 16 kWh on the local grid. That's only 16 hours of typical household electricity use in Melbourne.",
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
          "F1 cars are limited to 110 kg of fuel per race, requiring about 147 liters of water to refine. With 2,500 L from 100,000 queries, you could fuel 17 complete Formula 1 races! That's almost an entire season of racing from what seems like a lot of ChatGPT usage.",
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
          "An F1 car's 110 kg fuel load packs 1,300 kWh of energy. Those 100,000 queries at 30 kWh? That's just 2% of a single race's fuel. In F1 terms, that's about 3 laps around the track—blink and you'll miss it.",
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
          "One F1 race burns 110 kg of fuel, releasing 348 kg of CO₂. The 13.5 kg from those queries? That's just 4% of one race. Lewis Hamilton produces more carbon in a single qualifying lap than your entire ChatGPT session.",
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
          "Manufacturing a single car requires a staggering 148,000 liters of water—enough to fill 74 average swimming pools. In comparison, those 2,500 L from 100,000 queries? That's just 1.7% of building one car. You'd need 6 million ChatGPT queries to match the water footprint of that new vehicle in your driveway.",
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
          "Before a car even hits the road, it's already consumed 24,000 kWh in manufacturing. Your 100,000 queries at 30 kWh? That's 0.125% of making one car—roughly equivalent to installing the cup holders. You'd need 80 million queries to match the energy of manufacturing a single vehicle.",
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
          "A car's manufacturing releases 5.6 tonnes of CO₂ before it drives a single kilometer. Those 13.5 kg from 100,000 queries? That's just 0.24% of one car's production emissions—about what's released making the floor mats. The real carbon cost is in what we drive, not what we type.",
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
            <h3 className="text-lg font-semibold text-blue-700">Water Usage</h3>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-900">{item.citations.water.calculation}</p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium">{item.activity}&apos;s water usage:</p>
              <blockquote className="border-l-4 border-blue-200 pl-4 italic mt-2">
                &ldquo;{item.citations.water.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.water.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.citations.water.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium">ChatGPT&apos;s water usage:</p>
              <blockquote className="border-l-4 border-blue-200 pl-4 italic mt-2">
                &ldquo;{item.citations.water.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.water.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
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
            <h3 className="text-lg font-semibold text-yellow-700">
              Energy Usage
            </h3>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-900">
              {item.citations.energy.calculation}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium">
                {item.activity}&apos;s energy usage:
              </p>
              <blockquote className="border-l-4 border-yellow-200 pl-4 italic mt-2">
                &ldquo;{item.citations.energy.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.energy.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.citations.energy.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium">ChatGPT&apos;s energy usage:</p>
              <blockquote className="border-l-4 border-yellow-200 pl-4 italic mt-2">
                &ldquo;{item.citations.energy.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.energy.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
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
            <h3 className="text-lg font-semibold text-green-700">
              Carbon Emissions
            </h3>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-900">
              {item.citations.carbon.calculation}
            </p>
          </div>
          <div className="space-y-4">
            <div>
              <p className="font-medium">
                {item.activity}&apos;s carbon emissions:
              </p>
              <blockquote className="border-l-4 border-green-200 pl-4 italic mt-2">
                &ldquo;{item.citations.carbon.comparison.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.carbon.comparison.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {item.citations.carbon.comparison.author}
                </a>
              </p>
            </div>

            <div>
              <p className="font-medium">ChatGPT&apos;s carbon emissions:</p>
              <blockquote className="border-l-4 border-green-200 pl-4 italic mt-2">
                &ldquo;{item.citations.carbon.chatgpt.quote}&rdquo;
              </blockquote>
              <p className="mt-2">
                —{" "}
                <a
                  href={item.citations.carbon.chatgpt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="w-full">
        {/* Header */}

        {/* Main Content Card */}
        <Card className="md:mx-4 md:my-4 border-0 md:border shadow-none md:shadow-xl">
          <CardContent className="p-0 md:p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold text-gray-900 py-2 px-1 md:py-3 md:px-3">
                    <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                      100,000 ChatGPT queries is like...
                    </h1>
                  </TableHead>
                  <TableHead className="font-semibold text-blue-700 py-2 px-1 md:py-3 md:px-3 text-center">
                    💧
                  </TableHead>
                  <TableHead className="font-semibold text-yellow-700 py-2 px-1 md:py-3 md:px-3 text-center">
                    ⚡
                  </TableHead>
                  <TableHead className="font-semibold text-green-700 py-2 px-1 md:py-3 md:px-3 text-center">
                    🌱
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {environmentalData.map((item, index) => (
                  <TableRow
                    key={index}
                    className={`hover:bg-gray-50 transition-colors cursor-pointer ${
                      selectedActivity === item.activity ? "bg-gray-100" : ""
                    }`}
                    onClick={() =>
                      setSelectedActivity(
                        selectedActivity === item.activity
                          ? null
                          : item.activity
                      )
                    }
                  >
                    <TableCell className="font-medium py-1 px-2 md:py-2 md:px-3">
                      {item.activity}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-blue-700 text-center">
                      {item.water}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-yellow-700 text-center">
                      {item.energy}
                    </TableCell>
                    <TableCell className="py-1 px-2 md:py-2 md:px-3 text-green-700 text-center">
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
            <Card className="border-0 md:border shadow-none md:shadow">
              <CardContent className="prose prose-gray max-w-none p-2 md:p-6 pt-0">
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
