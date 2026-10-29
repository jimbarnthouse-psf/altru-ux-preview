(function(root){
 'use strict';
 const paths=[
 {
  "id": "known",
  "group": "Find a provider",
  "title": "Find a doctor you know",
  "goal": "I know my doctor’s name and want the office phone number.",
  "outcome": "A named-provider search leads to a profile with a prominent office phone number. Care locations remain supporting information; finding the number does not require another page.",
  "question": "Can a returning patient identify the doctor and call the office directly from the profile?",
  "related": [
   "clinic",
   "nearby",
   "place"
  ],
  "steps": [
   {
    "title": "Start with Find a Provider on the homepage",
    "note": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "screen": "known-1",
    "try": "Selects Find a Provider.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Search for a doctor by name",
    "note": "The visitor enters Amundson in the single provider search and selects Search. No city or regional selection is required.",
    "short": "The visitor enters Amundson in the single provider search and selects Search. No city or regional selection is required.",
    "screen": "known-2",
    "try": "Types “Amundson”, then selects Search.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "Amundson"
     },
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Open the matching provider",
    "note": "The result shows Matthew Amundson’s name, specialty and care location. The visitor selects View profile to confirm the match.",
    "short": "The result shows Matthew Amundson’s name, specialty and care location. The visitor selects View profile to confirm the match.",
    "screen": "known-3",
    "try": "Selects View profile for Matthew Amundson, MD.",
    "demo": {
     "page": "provider",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Find the office phone number on the profile",
    "note": "The phone number is featured directly beneath the provider’s name and specialty. Care locations remain available below; a separate location page is not required to find the number.",
    "short": "The phone number is featured directly beneath the provider’s name and specialty. Care locations remain available below; a separate location page is not required to find the number.",
    "screen": "known-4",
    "try": "Confirms the provider and office phone number.",
    "demo": {
     "page": "provider:profile:matthew",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Call the provider’s office",
    "note": "The visitor selects the phone number shown on the profile. On a phone, the real website would open the calling app. This review illustrates the handoff without placing a call.",
    "short": "The visitor selects the phone number shown on the profile. On a phone, the real website would open the calling app. This review illustrates the handoff without placing a call.",
    "screen": "known-5",
    "try": "Selects Call Matthew Amundson’s office at 701.795.2000.",
    "demo": {
     "page": "provider:profile:matthew",
     "handoff": "Phone call",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   }
  ]
 },
 {
  "id": "clinic",
  "group": "Find a provider",
  "title": "Find providers at a familiar clinic",
  "goal": "I remember my clinic and want to find the providers who practice there.",
  "outcome": "A familiar clinic leads through Locations to its location page, then to its providers with the clinic context retained.",
  "question": "Can a visitor find the familiar clinic, view its providers and confirm that relationship on a profile?",
  "related": [
   "known",
   "place",
   "nearby"
  ],
  "steps": [
   {
    "title": "Start with Locations on the homepage",
    "note": "The visitor starts on the website homepage and selects Locations in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Locations in the main navigation. On a phone, they first open the website menu.",
    "screen": "clinic-1",
    "try": "Selects Locations.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Find the familiar clinic in Locations",
    "note": "The visitor types North Clinic in the location finder and selects View location. A known clinic is a place-first task; it does not require a provider search first.",
    "short": "The visitor types North Clinic in the location finder and selects View location. A known clinic is a place-first task; it does not require a provider search first.",
    "screen": "clinic-2",
    "try": "Types “North Clinic”, then selects View location.",
    "demo": {
     "page": "home:modal:clinic",
     "typing": {
      "selector": "#clinic-query",
      "text": "North Clinic"
     },
     "reveal": "#location-list",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the familiar clinic",
    "note": "The visitor reaches North Clinic’s own location page. The clinic identity, services and provider connections establish the right place before choosing a doctor.",
    "short": "The visitor reaches North Clinic’s own location page. The clinic identity, services and provider connections establish the right place before choosing a doctor.",
    "screen": "clinic-3",
    "try": "Confirms the clinic’s identity.",
    "demo": {
     "page": "locations/new-c2",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "View providers at this clinic",
    "note": "The visitor selects View providers on the clinic’s location page. North Clinic carries into the provider results as a visible filter.",
    "short": "The visitor selects View providers on the clinic’s location page. North Clinic carries into the provider results as a visible filter.",
    "screen": "clinic-4",
    "try": "Selects View providers.",
    "demo": {
     "page": "locations/new-c2",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Select a provider who practices here",
    "note": "The results show providers at North Clinic. The visitor selects Elena Brooks’s View profile action.",
    "short": "The results show providers at North Clinic. The visitor selects Elena Brooks’s View profile action.",
    "screen": "clinic-5",
    "try": "Selects View profile for Elena Brooks, MD.",
    "demo": {
     "page": "providers?location=new-c2",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review the provider in the clinic context",
    "note": "The profile confirms the provider and keeps the selected North Clinic first among the care locations. Anonymous phone details will be added once confirmed.",
    "short": "The profile confirms the provider and keeps the selected North Clinic first among the care locations. Anonymous phone details will be added once confirmed.",
    "screen": "clinic-6",
    "try": "Confirms the provider’s relationship to the selected clinic.",
    "demo": {
     "page": "providers?location=new-c2:profile:elena",
     "origin": null,
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "nearby",
  "group": "Find a provider",
  "title": "Find a nearby provider",
  "goal": "I want care nearby and need to check or update my estimated location.",
  "outcome": "Approximate IP-based location helps visitors start near them. A visible Change option lets them correct it or choose another community before searching.",
  "question": "Is the location clearly an estimate, and is changing or choosing it straightforward?",
  "related": [
   "known",
   "clinic",
   "place"
  ],
  "steps": [
   {
    "title": "Start with Find a Provider on the homepage",
    "note": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "screen": "nearby-1",
    "try": "Selects Find a Provider.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Check the estimated location and change it if needed",
    "note": "The site estimates Grand Forks from IP and shows it beside the search. Keeping that estimate needs no action. This example demonstrates a correction: the visitor selects Change to search near another community.",
    "short": "The site estimates Grand Forks from IP and shows it beside the search. Keeping that estimate needs no action. This example demonstrates a correction: the visitor selects Change to search near another community.",
    "screen": "nearby-2",
    "try": "Selects Change estimated location: Grand Forks, ND.",
    "demo": {
     "page": "provider",
     "origin": "gf",
     "estimatedOrigin": "gf",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the correct starting location",
    "note": "The visitor can enter a city or ZIP, choose a community, or search without a location. This example replaces the approximate IP estimate with the anonymous new-region community.",
    "short": "The visitor can enter a city or ZIP, choose a community, or search without a location. This example replaces the approximate IP estimate with the anonymous new-region community.",
    "screen": "nearby-3",
    "try": "Selects New region · demo.",
    "demo": {
     "page": "provider:modal:origin",
     "origin": "gf",
     "estimatedOrigin": "gf",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Search for the type of care needed",
    "note": "With the starting point visible, the visitor types Primary care and selects Search.",
    "short": "With the starting point visible, the visitor types Primary care and selects Search.",
    "screen": "nearby-4",
    "try": "Types “Primary care”, then selects Search.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "Primary care"
     },
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose a nearby matching provider",
    "note": "Matching providers are ordered using the chosen starting point. The visitor opens Elena Brooks’s profile; farther matching care remains available.",
    "short": "Matching providers are ordered using the chosen starting point. The visitor opens Elena Brooks’s profile; farther matching care remains available.",
    "screen": "nearby-5",
    "try": "Selects View profile for Elena Brooks, MD.",
    "demo": {
     "page": "provider",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose where to see this provider",
    "note": "The profile lists the provider’s care locations. The visitor selects Central Clinic rather than assuming every location offers the same care.",
    "short": "The profile lists the provider’s care locations. The visitor selects Central Clinic rather than assuming every location offers the same care.",
    "screen": "nearby-6",
    "try": "Selects Central Clinic.",
    "demo": {
     "page": "provider:profile:elena",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review the chosen clinic",
    "note": "The location page retains the patient’s starting point and shows the clinic’s service and provider connections. Anonymous contact and map details stay withheld.",
    "short": "The location page retains the patient’s starting point and shows the clinic’s service and provider connections. Anonymous contact and map details stay withheld.",
    "screen": "nearby-7",
    "try": "Reads the selected clinic’s care information.",
    "demo": {
     "page": "locations/new-c1",
     "origin": "new",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "learn",
  "group": "Find a provider",
  "title": "Find a provider from a service page",
  "goal": "I know the type of care I need and want to find its providers.",
  "outcome": "Services leads to Heart & Vascular Care, its overview and Find a provider, ending on matching heart-care providers. Exploring clinical topics remains optional.",
  "question": "Can a visitor understand the service and reach matching providers directly, with clinical-topic exploration optional?",
  "related": [
   "topic",
   "offerings",
   "known"
  ],
  "steps": [
   {
    "title": "Start with Services on the homepage",
    "note": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "screen": "learn-1",
    "try": "Selects Services.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "short": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "screen": "learn-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read the heart-care overview",
    "note": "The visitor reads the shared introduction to heart care. Clinical topics are available for optional exploration; they can choose Find a provider directly from this overview when ready.",
    "short": "The visitor reads the shared introduction to heart care. Clinical topics are available for optional exploration; they can choose Find a provider directly from this overview when ready.",
    "screen": "learn-3",
    "try": "Reads the heart-care overview.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Find providers for this service",
    "note": "The visitor selects Find a provider beside the overview. This carries the heart-care specialty into the provider finder without a clinical-topic detour.",
    "short": "The visitor selects Find a provider beside the overview. This carries the heart-care specialty into the provider finder without a clinical-topic detour.",
    "screen": "learn-4",
    "try": "Selects Find a provider.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "View the matching heart-care providers",
    "note": "The provider finder opens with Heart care already selected. The visitor can review and choose a provider here; this guided journey ends at the matching results.",
    "short": "The provider finder opens with Heart care already selected. The visitor can review and choose a provider here; this guided journey ends at the matching results.",
    "screen": "learn-5",
    "try": "Reviews providers for Heart & Vascular Care.",
    "demo": {
     "page": "providers?service=heart",
     "origin": null,
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "topic",
  "group": "Explore services and locations",
  "title": "Explore a diagnosis or treatment",
  "goal": "I know a condition or treatment name and want more specific information.",
  "outcome": "Clinical detail has a real information destination, independent of provider and location filtering.",
  "question": "Does the topic label make its destination clear, without forcing an early care-location choice?",
  "related": [
   "learn",
   "offerings"
  ],
  "steps": [
   {
    "title": "Start with Services on the homepage",
    "note": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "screen": "topic-1",
    "try": "Selects Services.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "short": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "screen": "topic-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read the heart-care overview",
    "note": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "short": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "screen": "topic-3",
    "try": "Reads the shared heart-care introduction.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Choose the relevant condition or treatment topic",
    "note": "The visitor scrolls to the clinical topics and selects Heart rhythm care to read the existing Altru.org information.",
    "short": "The visitor scrolls to the clinical topics and selects Heart rhythm care to read the existing Altru.org information.",
    "screen": "topic-4",
    "try": "Selects Heart rhythm care (Altru.org, opens in a new tab).",
    "demo": {
     "page": "services/heart",
     "handoff": "Altru.org clinical detail",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read the clinical information",
    "note": "The visitor reaches the existing electrophysiology information on Altru.org. This journey ends at its information destination.",
    "short": "The visitor reaches the existing electrophysiology information on Altru.org. This journey ends at its information destination.",
    "screen": "topic-5",
    "try": "Reads the existing Altru clinical information.",
    "demo": {
     "page": "reference:ep",
     "reference": "ep",
     "kind": "reference"
    }
   }
  ]
 },
 {
  "id": "offerings",
  "group": "Explore services and locations",
  "title": "Explore care at nearby locations",
  "goal": "I want to see what care is offered at locations near me.",
  "outcome": "Care locations shows nearby places and the heart-care services available at each, using an approximate IP-based location. Visitors can browse all care types and open a local offering for more detail.",
  "question": "Can visitors see what care is offered at nearby locations and understand a selected location’s offering?",
  "related": [
   "place",
   "topic"
  ],
  "steps": [
   {
    "title": "Start with Services on the homepage",
    "note": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "screen": "offerings-1",
    "try": "Selects Services.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "short": "From the open website Services menu, the visitor chooses Heart & Vascular Care.",
    "screen": "offerings-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read the heart-care overview",
    "note": "The service page introduces the care first. An approximate community is estimated from IP; the visitor can change it, without a location gate before learning.",
    "short": "The service page introduces the care first. An approximate community is estimated from IP; the visitor can change it, without a location gate before learning.",
    "screen": "offerings-3",
    "try": "Reads the shared heart-care introduction.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "estimatedOrigin": "new",
     "kind": "read"
    }
   },
   {
    "title": "Open Care locations",
    "note": "The visitor selects Care locations. Nearby offerings are already prioritized using the approximate IP-based location, with Change location available.",
    "short": "The visitor selects Care locations. Nearby offerings are already prioritized using the approximate IP-based location, with Change location available.",
    "screen": "offerings-4",
    "try": "Selects Care locations.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "estimatedOrigin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "See what each nearby location offers",
    "note": "The visitor browses nearby locations and the care listed at each, using the approximate IP-based location. All heart care is shown; choosing a care type is optional. Sample offerings require Altru’s validation.",
    "short": "The visitor browses nearby locations and the care listed at each, using the approximate IP-based location. All heart care is shown; choosing a care type is optional. Sample offerings require Altru’s validation.",
    "screen": "offerings-5",
    "try": "Browses the care offered at nearby locations.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "estimatedOrigin": "new",
     "kind": "read"
    }
   },
   {
    "title": "Choose heart care at Regional Hospital",
    "note": "The visitor selects Regional Hospital’s View local care link to understand that specific service offering.",
    "short": "The visitor selects Regional Hospital’s View local care link to understand that specific service offering.",
    "screen": "offerings-6",
    "try": "Selects View heart care at Regional Hospital.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "estimatedOrigin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read this location’s service details",
    "note": "The local service page explains the care offered at this location and how it is delivered. The journey ends with the local service information.",
    "short": "The local service page explains the care offered at this location and how it is delivered. The journey ends with the local service information.",
    "screen": "offerings-7",
    "try": "Reads the care available at this location.",
    "demo": {
     "page": "services/heart/at/new-h1",
     "origin": "new",
     "estimatedOrigin": "new",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "place",
  "group": "Explore services and locations",
  "title": "Find a clinic or hospital",
  "goal": "I need a place’s address, directions, services or connected providers.",
  "outcome": "Place finding has its own flow, with a map when space permits and a full location page before external directions.",
  "question": "Can a visitor find practical place information without first selecting a doctor?",
  "related": [
   "clinic",
   "offerings",
   "known"
  ],
  "steps": [
   {
    "title": "Start with Locations on the homepage",
    "note": "The visitor starts on the website homepage and selects Locations in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Locations in the main navigation. On a phone, they first open the website menu.",
    "screen": "place-1",
    "try": "Selects Locations.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Set a city or ZIP in the location finder",
    "note": "The finder opens over the homepage. The visitor enters 58201 and selects Set location to order the places shown.",
    "short": "The finder opens over the homepage. The visitor enters 58201 and selects Set location to order the places shown.",
    "screen": "place-2",
    "try": "Types “58201”, then selects Set location.",
    "demo": {
     "page": "home:modal:clinic",
     "typing": {
      "selector": "#clinic-origin",
      "text": "58201"
     },
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Find and select the familiar clinic",
    "note": "With Grand Forks selected, the visitor types Family Medicine, reviews the matching place and chooses View location.",
    "short": "With Grand Forks selected, the visitor types Family Medicine, reviews the matching place and chooses View location.",
    "screen": "place-3",
    "try": "Types “Family Medicine”, then selects Altru Family Medicine Center.",
    "demo": {
     "page": "home:modal:clinic",
     "typing": {
      "selector": "#clinic-query",
      "text": "Family Medicine"
     },
     "reveal": "#location-list",
     "origin": "gf",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Arrive on the clinic’s location page",
    "note": "The visitor first sees the clinic name, address, phone and location navigation. The journey does not skip directly to a lower section.",
    "short": "The visitor first sees the clinic name, address, phone and location navigation. The journey does not skip directly to a lower section.",
    "screen": "place-4",
    "try": "Reads the clinic’s identity and contact information.",
    "demo": {
     "page": "locations/gf-family",
     "origin": "gf",
     "kind": "read"
    }
   },
   {
    "title": "Open Services on the location page",
    "note": "The visitor selects Services in the clinic page’s own navigation to see what is offered here.",
    "short": "The visitor selects Services in the clinic page’s own navigation to see what is offered here.",
    "screen": "place-5",
    "try": "Selects Services.",
    "demo": {
     "page": "locations/gf-family",
     "origin": "gf",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review services and provider connections",
    "note": "The Services section connects the place with care and relevant providers. It does not infer procedure capability from a provider relationship.",
    "short": "The Services section connects the place with care and relevant providers. It does not infer procedure capability from a provider relationship.",
    "screen": "place-6",
    "try": "Reads the clinic’s services and provider links.",
    "demo": {
     "page": "locations/gf-family",
     "origin": "gf",
     "kind": "read"
    }
   },
   {
    "title": "Open Getting Here",
    "note": "The visitor chooses Getting Here in the location navigation before checking arrival information.",
    "short": "The visitor chooses Getting Here in the location navigation before checking arrival information.",
    "screen": "place-7",
    "try": "Selects Getting Here.",
    "demo": {
     "page": "locations/gf-family",
     "origin": "gf",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Check arrival information",
    "note": "The Getting Here section shows the verified address and practical information, with the chosen starting point retained.",
    "short": "The Getting Here section shows the verified address and practical information, with the chosen starting point retained.",
    "screen": "place-8",
    "try": "Reads the address and arrival information.",
    "demo": {
     "page": "locations/gf-family",
     "origin": "gf",
     "kind": "read"
    }
   },
   {
    "title": "Get directions when ready",
    "note": "The visitor returns to Get directions and selects it. The verified public clinic address is handed to Google Maps; the journey ends at this outbound action.",
    "short": "The visitor returns to Get directions and selects it. The verified public clinic address is handed to Google Maps; the journey ends at this outbound action.",
    "screen": "place-9",
    "try": "Selects Get directions.",
    "demo": {
     "page": "locations/gf-family",
     "handoff": "Google Maps directions",
     "origin": "gf",
     "kind": "click",
     "value": ""
    }
   }
  ]
 }
];

 function readReviewState(search){
  const params=new URLSearchParams(search),id=params.get('path');
  if(!id)return {path:null,index:0,invalid:false};
  const path=paths.find(p=>p.id===id);if(!path)return {path:null,index:0,invalid:true};
  const raw=params.get('step')||'1',number=/^[1-9]\d*$/.test(raw)?Number(raw):1;
  return {path,index:Math.min(Number.isFinite(number)?number-1:0,path.steps.length),invalid:false};
 }
 const reviewURL=(id,index=0)=>'?path='+encodeURIComponent(id)+'&step='+(index+1);
 const api={paths,readReviewState,reviewURL,revision:'bd0976e085e0'};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AltruJourneys=api;
})(typeof window!=='undefined'?window:this);
