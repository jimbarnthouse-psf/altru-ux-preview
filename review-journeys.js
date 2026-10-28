(function(root){
 'use strict';
 const paths=[
 {
  "id": "learn",
  "group": "Understand the care",
  "title": "Learn about a service",
  "goal": "I want to understand what Altru offers before choosing a doctor or a location.",
  "outcome": "A service entrance supports learning first, with optional routes to people and places when the visitor is ready.",
  "question": "Can someone explain the service and find a useful next topic without choosing a location?",
  "related": [
   "topic",
   "evaluate",
   "offerings"
  ],
  "steps": [
   {
    "title": "Open the Services menu",
    "note": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "screen": "learn-1",
    "try": "Selects Services.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "short": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "screen": "learn-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Get the overall picture",
    "note": "The shared page introduces prevention, diagnosis, treatment and recovery. It provides a direct provider shortcut while letting someone keep reading without setting a location.",
    "short": "Explain the service before asking someone to choose a person or place.",
    "screen": "learn-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Explore useful service content",
    "note": "Clinical topics explain the breadth of heart care before the location comparison. On the full site they lead to existing Altru information. This static review keeps the focus on the suggested journey.",
    "short": "Offer useful clinical topics before local care and provider discovery.",
    "screen": "learn-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Choose a next step when ready",
    "note": "The same service page connects learning with people and places. Find a provider opens the heart-care team; location choice is optional.",
    "short": "Connect service learning with the relevant provider team when ready.",
    "screen": "learn-5",
    "try": "Selects Find a provider.",
    "demo": {
     "page": "services/heart",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Meet the relevant providers",
    "note": "The provider finder carries the heart-care specialty into the results. It shows each sample provider’s care location so the visitor can decide what to explore next.",
    "short": "Carry the heart-care specialty into provider results.",
    "screen": "learn-6",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "providers?service=heart",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "topic",
  "group": "Understand the care",
  "title": "Explore a diagnosis or treatment",
  "goal": "I know a condition or treatment name and want more specific information.",
  "outcome": "Clinical detail has a real information destination, independent of provider and location filtering.",
  "question": "Does the topic label make its destination clear, without forcing an early care-location choice?",
  "related": [
   "learn",
   "evaluate"
  ],
  "steps": [
   {
    "title": "Open the Services menu",
    "note": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "screen": "topic-1",
    "try": "Selects Services.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "short": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "screen": "topic-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Arrive on Heart & Vascular Care",
    "note": "After choosing Heart & Vascular Care from the website’s Services menu, the visitor reads the shared service introduction before exploring a specific condition or treatment.",
    "short": "Read the heart-care overview after entering through the website’s Services menu.",
    "screen": "topic-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Find the topic that matches the concern",
    "note": "The visitor selects Heart rhythm care to read the existing clinical information on Altru.org. Learning about a condition or treatment does not require choosing a provider or location.",
    "short": "Choose Heart rhythm care to read the existing clinical information.",
    "screen": "topic-4",
    "try": "Selects Heart rhythm care (Altru.org, opens in a new tab).",
    "demo": {
     "page": "services/heart",
     "handoff": "Altru.org clinical detail",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Read the existing Altru clinical page",
    "note": "The visitor selects Heart rhythm care and reaches the existing electrophysiology information on Altru.org. This journey ends at the clinical information destination.",
    "short": "The visitor selects Heart rhythm care and reaches the existing electrophysiology information on Altru.org. This journey ends at the clinical information destination.",
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
  "id": "evaluate",
  "group": "Understand the care",
  "title": "Understand Altru’s approach",
  "goal": "I am considering Altru and want to understand the breadth and approach to care.",
  "outcome": "The page explains the service and connected care approach before asking the visitor to choose a person or place.",
  "question": "Is there enough useful information to understand Altru’s approach before making a selection?",
  "related": [
   "learn",
   "offerings",
   "nearby"
  ],
  "steps": [
   {
    "title": "Open the Services menu",
    "note": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "screen": "evaluate-1",
    "try": "Selects Services.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "short": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "screen": "evaluate-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Arrive on Heart & Vascular Care",
    "note": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "short": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "screen": "evaluate-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "See the breadth of the service",
    "note": "The clinical overview organizes care into understandable topics. The visitor can assess whether the service relates to their concern without being pushed immediately into results.",
    "short": "Show the breadth of care before asking for a selection.",
    "screen": "evaluate-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Understand how care connects",
    "note": "A visible care-approach section explains how specialties and recovery support fit together. This is sample editorial content for discussion, rather than a new expertise or outcomes claim.",
    "short": "Explain how specialists, treatment and recovery connect.",
    "screen": "evaluate-5",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Keep learning at your own pace",
    "note": "Relevant prevention, ongoing-care and recovery resources give someone useful ways to continue. They do not need to pick a provider or location to access this material.",
    "short": "Let someone keep learning without choosing a provider or location.",
    "screen": "evaluate-6",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Connect understanding with a care team",
    "note": "When the visitor is ready, the page leads to relevant providers. The overview, local offerings and provider relationships stay connected as distinct types of information.",
    "short": "Connect understanding with a relevant care team when the visitor is ready.",
    "screen": "evaluate-7",
    "try": "Selects Find a provider.",
    "demo": {
     "page": "services/heart",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "See the relevant heart-care providers",
    "note": "The service context carries into the provider finder. The visitor can compare people and care locations when ready.",
    "short": "The service context carries into the provider finder. The visitor can compare people and care locations when ready.",
    "screen": "evaluate-8",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "provider",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "known",
  "group": "Find the right person",
  "title": "Find a doctor you know",
  "goal": "I know my doctor’s name and want to find their profile and care location.",
  "outcome": "A known name remains findable across communities, even when the selected starting location is far away.",
  "question": "Can a returning patient find the right doctor without understanding the acquisition?",
  "related": [
   "clinic",
   "caregiver",
   "recover"
  ],
  "steps": [
   {
    "title": "Use one familiar search",
    "note": "The same search accepts a provider name, specialty or clinic. A chosen starting location adds context without hiding an exact name match in another community.",
    "short": "Use the same search for a name, specialty or clinic.",
    "screen": "known-1",
    "try": "Types “Amundson”, then selects Search.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "Amundson"
     },
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Recognize the named match",
    "note": "Matthew Amundson appears even with the anonymous new region selected. His specialty and care location help the visitor confirm the match. Distances are illustrative.",
    "short": "Keep a known doctor findable across Altru communities.",
    "screen": "known-2",
    "try": "Selects View profile for Matthew Amundson, MD.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm where the doctor practices",
    "note": "The profile connects the provider to a care location, preserves the starting point and keeps scheduling in MyChart. Provider finding does not add appointment routing.",
    "short": "Confirm the doctor’s care location while retaining the chosen starting point.",
    "screen": "known-3",
    "try": "Selects Altru Family Medicine Center.",
    "demo": {
     "page": "provider:profile:matthew",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Move naturally to location details",
    "note": "The location page provides practical information, services and connected providers. A verified address can lead to Google Maps directions in a new tab.",
    "short": "Connect the provider to practical location information.",
    "screen": "known-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "locations/gf-family",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "clinic",
  "group": "Find the right person",
  "title": "Search through a familiar clinic",
  "goal": "I remember my clinic and want to find the providers who see patients there.",
  "outcome": "A familiar clinic becomes a provider filter; the selected clinic stays clear when a provider has several care locations.",
  "question": "Does the clinic remain visible as context through the provider profile?",
  "related": [
   "known",
   "place",
   "caregiver"
  ],
  "steps": [
   {
    "title": "Start with the name you remember",
    "note": "A clinic suggestion is clearly labeled as a place. Choosing it finds its providers directly, without asking the visitor to change search modes.",
    "short": "Use a familiar clinic as an entrance to its provider team.",
    "screen": "clinic-1",
    "try": "Types “North Clinic”, then selects North Clinic New region · demo · View providers →.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "North Clinic"
     },
     "reveal": "#suggestions",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "See the clinic’s provider team",
    "note": "The results are limited to the selected clinic. This is a provider relationship in the sample; it does not establish every treatment available at that clinic.",
    "short": "Show providers connected to the selected clinic.",
    "screen": "clinic-2",
    "try": "Selects View profile for Elena Brooks, MD.",
    "demo": {
     "page": "providers?location=new-c2",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Keep the selected clinic first",
    "note": "For a provider with several locations, North Clinic stays first because the visitor chose it. This is separate from the starting location used to calculate distance.",
    "short": "Keep the visitor’s chosen clinic first in a multi-location profile.",
    "screen": "clinic-3",
    "try": "Selects North Clinic.",
    "demo": {
     "page": "providers?location=new-c2:profile:elena",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the place without inventing details",
    "note": "North Clinic has a sample location page connected to services and providers. Address, phone, hours and map details stay withheld for the anonymous region.",
    "short": "Explain the anonymous place without inventing contact or map details.",
    "screen": "clinic-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "locations/new-c2",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "nearby",
  "group": "Find the right person",
  "title": "Find care near you",
  "goal": "I need a type of care and want to compare relevant providers near a chosen starting point.",
  "outcome": "An optional starting location prioritizes matching care, while providers in other communities remain discoverable.",
  "question": "Can visitors use proximity without assuming the nearest provider offers every service?",
  "related": [
   "farther",
   "caregiver",
   "clinic"
  ],
  "steps": [
   {
    "title": "Set a starting location when it helps",
    "note": "The visitor opens City or ZIP to add geographic context. Starting location is optional and stays separate from choosing a clinic.",
    "short": "The visitor opens City or ZIP to add geographic context. Starting location is optional and stays separate from choosing a clinic.",
    "screen": "nearby-1",
    "try": "Selects All communities.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose a starting point when useful",
    "note": "The origin is optional and explicitly chosen. It can represent where the patient needs care rather than the reviewer’s device location.",
    "short": "Let visitors choose the patient’s starting location explicitly.",
    "screen": "nearby-2",
    "try": "Selects New region · demo.",
    "demo": {
     "page": "provider:modal:origin",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Search by the care needed",
    "note": "A specialty uses the same search bar as a known name or clinic. The location stays alongside the search rather than becoming a separate regional site.",
    "short": "Search for a type of care with the starting point retained.",
    "screen": "nearby-3",
    "try": "Types “Primary care”, then selects Search.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "Primary care"
     },
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Compare relevant options by distance",
    "note": "The sample results put matching nearby providers first and show their specific care locations. Farther matching providers remain available in the same experience.",
    "short": "Put relevant nearby providers first; keep distant matches discoverable.",
    "screen": "nearby-4",
    "try": "Selects View profile for Elena Brooks, MD.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Check the care location before continuing",
    "note": "The profile keeps the selected origin and lists the provider’s care locations. Sample distances support the flow discussion; actual availability is not represented.",
    "short": "Check the provider’s specific practice location before continuing.",
    "screen": "nearby-5",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "provider:profile:elena",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "offerings",
  "group": "Compare care and places",
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
    "title": "Open the Services menu",
    "note": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "screen": "offerings-1",
    "try": "Selects Services.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "short": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "screen": "offerings-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Arrive on Heart & Vascular Care",
    "note": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "short": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "screen": "offerings-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Move from shared content to local care",
    "note": "Service education comes first. The care-by-location section then helps someone who is ready to compare where care is delivered.",
    "short": "Connect shared service education with local care differences.",
    "screen": "offerings-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "See differences before choosing a place",
    "note": "The demonstration distinguishes onsite cardiology, visiting specialists, testing, rehabilitation and advanced procedures. North Clinic and Regional Hospital show different sample offerings.",
    "short": "Compare onsite and visiting care before choosing a location.",
    "screen": "offerings-5",
    "try": "Selects View heart care at Regional Hospital.",
    "demo": {
     "page": "services/heart",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Understand this location’s offering",
    "note": "A local service page adds useful delivery detail to the shared service. It explains what can be received here and when some care takes place elsewhere.",
    "short": "Explain the care delivered at this specific location.",
    "screen": "offerings-6",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart/at/new-h1",
     "kind": "read"
    }
   },
   {
    "title": "Connect local care with its providers",
    "note": "The local offering has a connected care team. This next step carries both the service and the chosen location into provider search.",
    "short": "Connect a local service offering with its relevant care team.",
    "screen": "offerings-7",
    "try": "Selects View this care team.",
    "demo": {
     "page": "services/heart/at/new-h1",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "See only the relevant local team",
    "note": "The provider results carry both heart care and Regional Hospital. The visitor does not need to re-enter the specialty or reconstruct the location choice.",
    "short": "Carry both the service and location into provider results.",
    "screen": "offerings-8",
    "try": "Selects View profile for Avery Sutton, MD.",
    "demo": {
     "page": "providers?service=heart&location=new-h1",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Keep the selected care location visible",
    "note": "Regional Hospital stays first on the provider’s profile. This sample team association does not identify which clinician performs a particular procedure.",
    "short": "Keep the selected hospital first in the provider’s care locations.",
    "screen": "offerings-9",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "providers?service=heart&location=new-h1:profile:avery",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "farther",
  "group": "Compare care and places",
  "title": "Find care farther away",
  "goal": "The care I need may be outside my community; I want to understand where it is offered.",
  "outcome": "A distant matching service stays visible, with the starting location retained and a clear explanation of travel.",
  "question": "Can someone identify the matching service without a local-only dead end?",
  "related": [
   "offerings",
   "nearby",
   "recover"
  ],
  "steps": [
   {
    "title": "Open the Services menu",
    "note": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "The visitor selects Services in the website’s main navigation. On a phone, they first open the website menu.",
    "screen": "farther-1",
    "try": "Selects Services.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose Heart & Vascular Care",
    "note": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "short": "The open Services menu offers a direct route to the shared service page. A provider search or location choice is not required.",
    "screen": "farther-2",
    "try": "Selects Heart & Vascular Care.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Arrive on Heart & Vascular Care",
    "note": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "short": "The shared service introduction explains the breadth of care. The visitor can read before choosing a provider or local offering.",
    "screen": "farther-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart",
     "kind": "read"
    }
   },
   {
    "title": "Compare a specific type of care",
    "note": "The clinical service remains shared across regions. This prepared example changes All heart care to Advanced heart procedures to show how a specific capability can narrow the local comparison.",
    "short": "Compare a specific type of care across communities.",
    "screen": "farther-4",
    "try": "Chooses “Advanced heart procedures”.",
    "demo": {
     "page": "services/heart",
     "choiceLabel": "Advanced heart procedures",
     "kind": "select",
     "value": "procedures"
    }
   },
   {
    "title": "Explain why the match is farther away",
    "note": "The sample offers advanced procedures at Altru Hospital. A plain-language message explains travel instead of producing an empty local result or changing the visitor’s origin.",
    "short": "Explain travel while keeping the visitor’s starting location.",
    "screen": "farther-5",
    "try": "Selects View heart care at Altru Hospital.",
    "demo": {
     "page": "services/heart?care=procedures",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm what happens at the destination",
    "note": "The local service page makes hospital-based care explicit. All coverage relationships here are illustrative and need Altru’s validation.",
    "short": "Confirm the sample capabilities at the matching destination.",
    "screen": "farther-6",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "services/heart/at/gf-hospital",
     "kind": "read"
    }
   },
   {
    "title": "Keep the destination and service connected",
    "note": "The provider shortcut belongs to this local offering. The visitor does not have to reconstruct the service or location choice in a separate search.",
    "short": "Keep the chosen service and destination connected.",
    "screen": "farther-7",
    "try": "Selects See heart care providers here.",
    "demo": {
     "page": "services/heart/at/gf-hospital",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Reach the connected team",
    "note": "The next view carries heart care and Altru Hospital into provider results. The team list is a relevant next step, with clinical and procedure assignments still requiring validation.",
    "short": "Show the team connected to the matching distant location.",
    "screen": "farther-8",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "providers?service=heart&location=gf-hospital",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "place",
  "group": "Compare care and places",
  "title": "Find a clinic or hospital",
  "goal": "I need a place’s address, directions, services or connected providers.",
  "outcome": "Place finding has its own flow, with a map when space permits and a full location page before external directions.",
  "question": "Can a visitor find practical place information without first selecting a doctor?",
  "related": [
   "clinic",
   "offerings",
   "caregiver"
  ],
  "steps": [
   {
    "title": "Open Locations from the site menu",
    "note": "The visitor selects Locations in the website’s main navigation. On a phone, they first open the website menu.",
    "short": "Start with the actual Locations link in the site navigation.",
    "screen": "place-1",
    "try": "Selects Locations.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Set location in the finder",
    "note": "The finder lets a visitor choose a city or ZIP without leaving the overlay. This origin helps order places, while name and community controls remain available.",
    "short": "Set an optional starting point within the clinic finder.",
    "screen": "place-2",
    "try": "Types “58201”, then selects Set location.",
    "demo": {
     "page": "provider:modal:clinic",
     "typing": {
      "selector": "#clinic-origin",
      "text": "58201"
     },
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Compare places with practical context",
    "note": "The place list stays central, with a map alongside it when there is room. This static copy shows the map area without loading a live map. Anonymous-region map details remain withheld.",
    "short": "Show the matching place and its practical location details.",
    "screen": "place-3",
    "try": "Types “Family Medicine”, then selects Altru Family Medicine Center.",
    "demo": {
     "page": "provider:modal:clinic",
     "typing": {
      "selector": "#clinic-query",
      "text": "Family Medicine"
     },
     "reveal": "#location-list",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Review services at this location",
    "note": "The visitor reads the clinic’s services and connected providers before leaving the site for directions. The clinic identity and chosen starting location stay available.",
    "short": "Review local services and providers before getting directions.",
    "screen": "place-4",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "locations/gf-family",
     "kind": "read"
    }
   },
   {
    "title": "Get directions when ready",
    "note": "The visitor returns to the location heading and selects Get directions. A verified public address is handed to Google Maps; this journey ends at that outbound action.",
    "short": "Select Get directions on the clinic page to continue to Google Maps.",
    "screen": "place-5",
    "try": "Selects Get directions.",
    "demo": {
     "page": "locations/gf-family",
     "handoff": "Google Maps directions",
     "kind": "click",
     "value": ""
    }
   }
  ]
 },
 {
  "id": "caregiver",
  "group": "Keep the visitor’s context",
  "title": "Help someone in another community",
  "goal": "I am helping someone else and need to use their location rather than my own.",
  "outcome": "An explicitly chosen patient location carries through the provider and place views, and can be changed at any time.",
  "question": "Is it clear whose starting location is being used, especially on a phone?",
  "related": [
   "known",
   "nearby",
   "place"
  ],
  "steps": [
   {
    "title": "Set a starting location when it helps",
    "note": "The visitor opens City or ZIP to add geographic context. Starting location is optional and stays separate from choosing a clinic.",
    "short": "The visitor opens City or ZIP to add geographic context. Starting location is optional and stays separate from choosing a clinic.",
    "screen": "caregiver-1",
    "try": "Selects All communities.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Choose the patient’s starting location",
    "note": "The concept does not use device geolocation. A caregiver can select the patient’s city or ZIP explicitly, even if the caregiver is somewhere else.",
    "short": "Choose the patient’s location rather than the caregiver’s device location.",
    "screen": "caregiver-2",
    "try": "Selects Grand Forks, ND.",
    "demo": {
     "page": "provider:modal:origin",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Find a familiar provider for them",
    "note": "The patient’s starting location remains visible while searching by name. A caregiver does not need a different website or a separate regional mode.",
    "short": "Keep the patient’s starting point while searching by name.",
    "screen": "caregiver-3",
    "try": "Types “Amundson”, then selects Search.",
    "demo": {
     "page": "provider",
     "typing": {
      "selector": "#query",
      "text": "Amundson"
     },
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Confirm the person and place",
    "note": "The profile preserves Grand Forks as the starting point and connects the doctor to a care location. The same controls remain available on a phone.",
    "short": "Confirm both the doctor and the associated care location.",
    "screen": "caregiver-4",
    "try": "Selects Altru Family Medicine Center.",
    "demo": {
     "page": "provider:profile:matthew",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Retain context while checking details",
    "note": "The location page keeps the patient’s chosen origin and offers contact details and Google Maps directions. A location change remains an explicit action.",
    "short": "Retain the patient’s location while checking Getting Here details.",
    "screen": "caregiver-5",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "locations/gf-family",
     "kind": "read"
    }
   }
  ]
 },
 {
  "id": "recover",
  "group": "Keep the visitor’s context",
  "title": "Recover from no matches",
  "goal": "My filters returned no matches; I want a useful way forward without starting over.",
  "outcome": "Widening clears conflicting filters while retaining the provider query and chosen origin.",
  "question": "Does recovery preserve useful work and make the widened scope understandable?",
  "related": [
   "known",
   "nearby",
   "farther"
  ],
  "steps": [
   {
    "title": "Explain the empty result",
    "note": "This example combines Amundson with a conflicting kidney-care specialty filter. The empty state explains that filters may be limiting the search and offers a direct way to widen it.",
    "short": "Explain the empty result and offer a clear way to widen the search.",
    "screen": "recover-1",
    "try": "Selects Search all Altru providers.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Keep the useful search context",
    "note": "The widened results restore the known-name match while retaining Amundson and the anonymous new-region starting point. Only the conflicting filter is removed.",
    "short": "Keep the name and starting point; remove the conflicting filter.",
    "screen": "recover-2",
    "try": "Selects View profile for Matthew Amundson, MD.",
    "demo": {
     "page": "provider",
     "kind": "click",
     "value": ""
    }
   },
   {
    "title": "Continue from the recovered result",
    "note": "The visitor can inspect the provider’s care location without retyping the name or selecting an origin again. The profile keeps scheduling in MyChart.",
    "short": "Continue to the recovered profile without starting over.",
    "screen": "recover-3",
    "try": "Reads this part of the page before continuing.",
    "demo": {
     "page": "provider:profile:matthew",
     "kind": "read"
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
 const api={paths,readReviewState,reviewURL,revision:'3c8e69a08e53'};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.AltruJourneys=api;
})(typeof window!=='undefined'?window:this);
