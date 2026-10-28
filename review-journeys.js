(function(root){
 'use strict';
 const paths=[
 {
  "id": "known",
  "group": "Find a provider",
  "title": "Find a doctor you know",
  "goal": "I know my doctor’s name and want to find their profile and care location.",
  "outcome": "A known provider name leads from the website navigation to the result, profile and practice location without a regional gate.",
  "question": "Can a returning patient find the right doctor without understanding the acquisition?",
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
    "title": "Choose the provider’s care location",
    "note": "The provider profile connects the doctor with Altru Family Medicine Center. The visitor selects that location; scheduling remains in MyChart.",
    "short": "The provider profile connects the doctor with Altru Family Medicine Center. The visitor selects that location; scheduling remains in MyChart.",
    "screen": "known-4",
    "try": "Selects Altru Family Medicine Center.",
    "demo": {
     "page": "provider:profile:matthew",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the clinic details",
    "note": "The location page supplies the clinic identity, public address, contact details, services and provider links.",
    "short": "The location page supplies the clinic identity, public address, contact details, services and provider links.",
    "screen": "known-5",
    "try": "Reads the clinic name, address and practical details.",
    "demo": {
     "page": "locations/gf-family",
     "origin": null,
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "clinic",
  "group": "Find a provider",
  "title": "Find providers at a familiar clinic",
  "goal": "I remember my clinic and want to find the providers who practice there.",
  "outcome": "A familiar clinic becomes a provider filter; the selected clinic stays clear when a provider has several care locations.",
  "question": "Does the clinic remain visible as context through the provider profile?",
  "related": [
   "known",
   "place",
   "nearby"
  ],
  "steps": [
   {
    "title": "Start with Find a Provider on the homepage",
    "note": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Find a Provider in the main navigation. On a phone, they first open the website menu.",
    "screen": "clinic-1",
    "try": "Selects Find a Provider.",
    "demo": {
     "page": "home",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Search by a familiar clinic name",
    "note": "The visitor types North Clinic. The place suggestion is labeled clearly; selecting it opens the providers who practice there.",
    "short": "The visitor types North Clinic. The place suggestion is labeled clearly; selecting it opens the providers who practice there.",
    "screen": "clinic-2",
    "try": "Types “North Clinic”, then selects North Clinic New region · demo · View providers →.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "North Clinic"
     },
     "reveal": "#suggestions",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Select a provider at the clinic",
    "note": "The results carry the selected North Clinic filter. The visitor selects Elena Brooks’s View profile action.",
    "short": "The results carry the selected North Clinic filter. The visitor selects Elena Brooks’s View profile action.",
    "screen": "clinic-3",
    "try": "Selects View profile for Elena Brooks, MD.",
    "demo": {
     "page": "providers?location=new-c2",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Open the clinic from the provider profile",
    "note": "North Clinic stays first among the provider’s care locations because the visitor selected it. The visitor chooses its location link.",
    "short": "North Clinic stays first among the provider’s care locations because the visitor selected it. The visitor chooses its location link.",
    "screen": "clinic-4",
    "try": "Selects North Clinic.",
    "demo": {
     "page": "providers?location=new-c2:profile:elena",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the familiar clinic",
    "note": "The clinic page connects local services and providers. Address, phone, hours and map details remain withheld for this anonymous example.",
    "short": "The clinic page connects local services and providers. Address, phone, hours and map details remain withheld for this anonymous example.",
    "screen": "clinic-5",
    "try": "Reads the clinic’s identity and available care information.",
    "demo": {
     "page": "locations/new-c2",
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
  "goal": "I need a type of care near the patient’s chosen starting location.",
  "outcome": "An optional starting location prioritizes matching care, while providers in other communities remain discoverable.",
  "question": "Can visitors use proximity without assuming the nearest provider offers every service?",
  "related": [
   "known",
   "farther",
   "clinic"
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
    "title": "Open the city or ZIP control",
    "note": "The visitor chooses City or ZIP to use the patient’s starting location. It can be a different place from the reviewer’s own location.",
    "short": "The visitor chooses City or ZIP to use the patient’s starting location. It can be a different place from the reviewer’s own location.",
    "screen": "nearby-2",
    "try": "Selects All communities.",
    "demo": {
     "page": "provider",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the patient’s starting point",
    "note": "The visitor explicitly selects the anonymous new-region example. The site does not assume a community or use device geolocation.",
    "short": "The visitor explicitly selects the anonymous new-region example. The site does not assume a community or use device geolocation.",
    "screen": "nearby-3",
    "try": "Selects New region · demo.",
    "demo": {
     "page": "provider:modal:origin",
     "origin": null,
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
  "outcome": "A service entrance supports learning first, with optional routes to people and places when the visitor is ready.",
  "question": "Can a visitor understand the service before following its provider results, profile and practice location?",
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
    "note": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "short": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "screen": "learn-3",
    "try": "Reads the shared heart-care introduction.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Explore the breadth of heart care",
    "note": "The visitor scrolls through the clinical topics to understand the service before choosing a care team.",
    "short": "The visitor scrolls through the clinical topics to understand the service before choosing a care team.",
    "screen": "learn-4",
    "try": "Scrolls through the heart-care topics.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Find providers for this service",
    "note": "The visitor returns to the service page’s Find a provider action. This carries the heart-care specialty into the provider finder.",
    "short": "The visitor returns to the service page’s Find a provider action. This carries the heart-care specialty into the provider finder.",
    "screen": "learn-5",
    "try": "Selects Find a provider.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Open a heart-care provider",
    "note": "The matching team is shown. The visitor selects Rabeea Aboufakher’s View profile action, rather than jumping directly into a profile.",
    "short": "The matching team is shown. The visitor selects Rabeea Aboufakher’s View profile action, rather than jumping directly into a profile.",
    "screen": "learn-6",
    "try": "Selects View profile for Rabeea Aboufakher, MD.",
    "demo": {
     "page": "providers?service=heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the provider’s practice location",
    "note": "The profile connects the selected cardiology provider with Altru Hospital. The visitor follows its location link.",
    "short": "The profile connects the selected cardiology provider with Altru Hospital. The visitor follows its location link.",
    "screen": "learn-7",
    "try": "Selects Altru Hospital.",
    "demo": {
     "page": "providers?service=heart:profile:rabeea",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review the hospital details",
    "note": "The hospital page gives practical place information and links to services and providers. Provider presence alone does not establish procedure availability.",
    "short": "The hospital page gives practical place information and links to services and providers. Provider presence alone does not establish procedure availability.",
    "screen": "learn-8",
    "try": "Reads the chosen hospital’s location details.",
    "demo": {
     "page": "locations/gf-hospital",
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
  "title": "Compare local service offerings",
  "goal": "I understand the service and want to know how care may differ at each location.",
  "outcome": "The shared explanation connects to explicit local offerings and then the relevant team, without treating provider presence as proof of treatment capability.",
  "question": "Are onsite, visiting and hospital-based care easy to distinguish?",
  "related": [
   "farther",
   "learn",
   "place"
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
    "note": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "short": "The shared service page introduces prevention, diagnosis, treatment and recovery before asking the visitor to choose a person or place.",
    "screen": "offerings-3",
    "try": "Reads the shared heart-care introduction.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Open Care locations",
    "note": "When ready to compare places, the visitor selects the website’s Care locations shortcut.",
    "short": "When ready to compare places, the visitor selects the website’s Care locations shortcut.",
    "screen": "offerings-4",
    "try": "Selects Care locations.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Set a starting location for the comparison",
    "note": "In Heart care by location, the visitor opens the city or ZIP control. A starting location is optional; this example uses it to explain nearby and farther care.",
    "short": "In Heart care by location, the visitor opens the city or ZIP control. A starting location is optional; this example uses it to explain nearby and farther care.",
    "screen": "offerings-5",
    "try": "Selects Choose city or ZIP.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the patient’s community",
    "note": "The location picker opens over the service page. The visitor explicitly chooses the anonymous new-region example; it is not assumed or taken from device location.",
    "short": "The location picker opens over the service page. The visitor explicitly chooses the anonymous new-region example; it is not assumed or taken from device location.",
    "screen": "offerings-6",
    "try": "Selects New region · demo.",
    "demo": {
     "page": "services/heart:modal:origin",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Compare the local offerings",
    "note": "With the chosen community visible, the visitor compares onsite visits, visiting specialists, testing, rehabilitation and hospital-based care. These sample offerings require Altru’s validation.",
    "short": "With the chosen community visible, the visitor compares onsite visits, visiting specialists, testing, rehabilitation and hospital-based care. These sample offerings require Altru’s validation.",
    "screen": "offerings-7",
    "try": "Compares what is offered at each location.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "kind": "read"
    }
   },
   {
    "title": "Choose heart care at Regional Hospital",
    "note": "The visitor selects Regional Hospital’s View local care link to understand that specific service offering.",
    "short": "The visitor selects Regional Hospital’s View local care link to understand that specific service offering.",
    "screen": "offerings-8",
    "try": "Selects View heart care at Regional Hospital.",
    "demo": {
     "page": "services/heart",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read this location’s service details",
    "note": "The local service page explains how heart care is delivered here, before presenting its related team.",
    "short": "The local service page explains how heart care is delivered here, before presenting its related team.",
    "screen": "offerings-9",
    "try": "Reads the location-specific heart-care offering.",
    "demo": {
     "page": "services/heart/at/new-h1",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Open the connected local care team",
    "note": "The visitor scrolls to the local team section and selects View this care team. The service and selected hospital both carry forward.",
    "short": "The visitor scrolls to the local team section and selects View this care team. The service and selected hospital both carry forward.",
    "screen": "offerings-10",
    "try": "Selects View this care team.",
    "demo": {
     "page": "services/heart/at/new-h1",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose a provider from that team",
    "note": "The results show the heart-care team at Regional Hospital. The visitor selects Avery Sutton’s View profile action.",
    "short": "The results show the heart-care team at Regional Hospital. The visitor selects Avery Sutton’s View profile action.",
    "screen": "offerings-11",
    "try": "Selects View profile for Avery Sutton, MD.",
    "demo": {
     "page": "providers?service=heart&location=new-h1",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the provider and selected hospital",
    "note": "Regional Hospital remains first on the profile. This illustrative relationship does not assign a procedure to a particular clinician.",
    "short": "Regional Hospital remains first on the profile. This illustrative relationship does not assign a procedure to a particular clinician.",
    "screen": "offerings-12",
    "try": "Checks the selected provider’s Regional Hospital care location.",
    "demo": {
     "page": "providers?service=heart&location=new-h1:profile:avery",
     "origin": "new",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "farther",
  "group": "Explore services and locations",
  "title": "Find specialized care farther away",
  "goal": "The care I need may be outside my community; I want to understand where it is offered.",
  "outcome": "A distant matching service stays visible, with the starting location retained and a clear explanation of travel.",
  "question": "Can someone identify the matching service without a local-only dead end?",
  "related": [
   "offerings",
   "nearby",
   "place"
  ],
  "steps": [
   {
    "title": "Start with Services on the homepage",
    "note": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "short": "The visitor starts on the website homepage and selects Services in the main navigation. On a phone, they first open the website menu.",
    "screen": "farther-1",
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
    "screen": "farther-2",
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
    "screen": "farther-3",
    "try": "Reads the shared heart-care introduction.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "Open Care locations",
    "note": "When ready to compare places, the visitor selects the website’s Care locations shortcut.",
    "short": "When ready to compare places, the visitor selects the website’s Care locations shortcut.",
    "screen": "farther-4",
    "try": "Selects Care locations.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Set a starting location for the comparison",
    "note": "In Heart care by location, the visitor opens the city or ZIP control. A starting location is optional; this example uses it to explain nearby and farther care.",
    "short": "In Heart care by location, the visitor opens the city or ZIP control. A starting location is optional; this example uses it to explain nearby and farther care.",
    "screen": "farther-5",
    "try": "Selects Choose city or ZIP.",
    "demo": {
     "page": "services/heart",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the patient’s community",
    "note": "The location picker opens over the service page. The visitor explicitly chooses the anonymous new-region example; it is not assumed or taken from device location.",
    "short": "The location picker opens over the service page. The visitor explicitly chooses the anonymous new-region example; it is not assumed or taken from device location.",
    "screen": "farther-6",
    "try": "Selects New region · demo.",
    "demo": {
     "page": "services/heart:modal:origin",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the specific type of care",
    "note": "The visitor chooses Advanced heart procedures in Type of care. This narrows the comparison by capability rather than assuming every local clinic provides it.",
    "short": "The visitor chooses Advanced heart procedures in Type of care. This narrows the comparison by capability rather than assuming every local clinic provides it.",
    "screen": "farther-7",
    "try": "Chooses “Advanced heart procedures”.",
    "demo": {
     "page": "services/heart",
     "choiceLabel": "Advanced heart procedures",
     "origin": "new",
     "kind": "select",
     "value": "procedures"
    }
   },
   {
    "title": "Choose the farther matching hospital",
    "note": "The comparison explains why this sample care may require travel. The visitor selects View local care at Altru Hospital; the chosen starting point is retained.",
    "short": "The comparison explains why this sample care may require travel. The visitor selects View local care at Altru Hospital; the chosen starting point is retained.",
    "screen": "farther-8",
    "try": "Selects View heart care at Altru Hospital.",
    "demo": {
     "page": "services/heart?care=procedures",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm care at the destination",
    "note": "The local service page makes the hospital-based offering explicit. The visitor reads this information before choosing a provider.",
    "short": "The local service page makes the hospital-based offering explicit. The visitor reads this information before choosing a provider.",
    "screen": "farther-9",
    "try": "Reads the destination’s service details.",
    "demo": {
     "page": "services/heart/at/gf-hospital",
     "origin": null,
     "kind": "read"
    }
   },
   {
    "title": "See providers connected with this service here",
    "note": "The visitor selects the provider shortcut on this hospital’s heart-care page. Both the service and hospital carry into the results.",
    "short": "The visitor selects the provider shortcut on this hospital’s heart-care page. Both the service and hospital carry into the results.",
    "screen": "farther-10",
    "try": "Selects See heart care providers here.",
    "demo": {
     "page": "services/heart/at/gf-hospital",
     "origin": null,
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Open a provider from the matching hospital team",
    "note": "The visitor selects Rabeea Aboufakher’s View profile action in the filtered heart-care team.",
    "short": "The visitor selects Rabeea Aboufakher’s View profile action in the filtered heart-care team.",
    "screen": "farther-11",
    "try": "Selects View profile for Rabeea Aboufakher, MD.",
    "demo": {
     "page": "providers?service=heart&location=gf-hospital",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Open the provider’s destination location",
    "note": "The profile identifies Altru Hospital as the practice location. The visitor selects that link to review practical place details.",
    "short": "The profile identifies Altru Hospital as the practice location. The visitor selects that link to review practical place details.",
    "screen": "farther-12",
    "try": "Selects Altru Hospital.",
    "demo": {
     "page": "providers?service=heart&location=gf-hospital:profile:rabeea",
     "origin": "new",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review the hospital before traveling",
    "note": "The hospital page retains the selected starting point and supplies verified public contact and address information. Sample distances and care relationships remain illustrative.",
    "short": "The hospital page retains the selected starting point and supplies verified public contact and address information. Sample distances and care relationships remain illustrative.",
    "screen": "farther-13",
    "try": "Reads the destination hospital’s practical details.",
    "demo": {
     "page": "locations/gf-hospital",
     "origin": "new",
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
 const api={paths,readReviewState,reviewURL,revision:'3e7448333395'};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AltruJourneys=api;
})(typeof window!=='undefined'?window:this);
