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
    "title": "Start with the care you need",
    "note": "The Services menu is a separate entrance. Visitors do not need to use provider search or understand Altru’s regional structure to begin learning.",
    "try": "Choose Heart & Vascular Care from the open Services menu.",
    "screen": "learn-1",
    "short": "Start with Services, without requiring a provider search or location choice."
   },
   {
    "title": "Get the overall picture",
    "note": "The shared page introduces prevention, diagnosis, treatment and recovery. It provides a direct provider shortcut while letting someone keep reading without setting a location.",
    "try": "Read the introduction, then select Next to explore the service content.",
    "screen": "learn-2",
    "short": "Explain the service before asking someone to choose a person or place."
   },
   {
    "title": "Explore useful service content",
    "note": "Clinical topics explain the breadth of heart care before the location comparison. On the full site they lead to existing Altru information. This static review keeps the focus on the suggested journey.",
    "try": "Review the prepared service topics, then select Next to continue.",
    "screen": "learn-3",
    "short": "Offer useful clinical topics before local care and provider discovery."
   },
   {
    "title": "Choose a next step when ready",
    "note": "The same service page connects learning with people and places. Find a provider opens the heart-care team; location choice is optional.",
    "try": "Select Find a provider to see the related team.",
    "screen": "learn-4",
    "short": "Connect service learning with the relevant provider team when ready."
   },
   {
    "title": "Meet the relevant providers",
    "note": "The provider finder carries the heart-care specialty into the results. It shows each sample provider’s care location so the visitor can decide what to explore next.",
    "try": "Inspect the matching team, then finish this path.",
    "screen": "learn-5",
    "short": "Carry the heart-care specialty into provider results."
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
    "title": "Arrive directly on a service page",
    "note": "A service page can be a visitor’s first entrance from search, a referral or a shared link. Its context should make sense without a prior visit to provider search.",
    "try": "Read the service introduction, then continue to the clinical topic.",
    "screen": "topic-1",
    "short": "A service page should make sense as a visitor’s first entrance."
   },
   {
    "title": "Find the topic that matches the concern",
    "note": "Heart rhythm care connects a familiar concern with electrophysiology. On the full site, this learning link would open detailed clinical information on Altru.org rather than filter clinicians.",
    "try": "Select the outlined Heart rhythm care link to continue.",
    "screen": "topic-2",
    "short": "Use a familiar concern to lead to detailed clinical information."
   },
   {
    "title": "Return with a useful next step",
    "note": "After reading detailed Altru information, a visitor can return to the shared service context, keep learning or find a provider. This prepared screen illustrates that return point without opening the live clinical page.",
    "try": "Review the return point, then finish the learning path.",
    "screen": "topic-3",
    "short": "Keep a useful return point after clinical reading."
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
    "title": "See the breadth of the service",
    "note": "The clinical overview organizes care into understandable topics. The visitor can assess whether the service relates to their concern without being pushed immediately into results.",
    "try": "Read the overview and topics, then continue to the care approach.",
    "screen": "evaluate-1",
    "short": "Show the breadth of care before asking for a selection."
   },
   {
    "title": "Understand how care connects",
    "note": "A visible care-approach section explains how specialties and recovery support fit together. This is sample editorial content for discussion, rather than a new expertise or outcomes claim.",
    "try": "Read the prepared care-approach section, then select Next.",
    "screen": "evaluate-2",
    "short": "Explain how specialists, treatment and recovery connect."
   },
   {
    "title": "Keep learning at your own pace",
    "note": "Relevant prevention, ongoing-care and recovery resources give someone useful ways to continue. They do not need to pick a provider or location to access this material.",
    "try": "Review the learning resources, then select Next to see the provider path.",
    "screen": "evaluate-3",
    "short": "Let someone keep learning without choosing a provider or location."
   },
   {
    "title": "Connect understanding with a care team",
    "note": "When the visitor is ready, the page leads to relevant providers. The overview, local offerings and provider relationships stay connected as distinct types of information.",
    "try": "Review the provider shortcut, then finish this path.",
    "screen": "evaluate-4",
    "short": "Connect understanding with a relevant care team when the visitor is ready."
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
    "try": "Amundson is prefilled. Select the outlined Search link to see the prepared match.",
    "screen": "known-1",
    "short": "Use the same search for a name, specialty or clinic."
   },
   {
    "title": "Recognize the named match",
    "note": "Matthew Amundson appears even with the anonymous new region selected. His specialty and care location help the visitor confirm the match. Distances are illustrative.",
    "try": "Open Matthew Amundson’s profile.",
    "screen": "known-2",
    "short": "Keep a known doctor findable across Altru communities."
   },
   {
    "title": "Confirm where the doctor practices",
    "note": "The profile connects the provider to a care location, preserves the starting point and keeps scheduling in MyChart. Provider finding does not add appointment routing.",
    "try": "Open Altru Family Medicine Center in the care-location section.",
    "screen": "known-3",
    "short": "Confirm the doctor’s care location while retaining the chosen starting point."
   },
   {
    "title": "Move naturally to location details",
    "note": "The location page provides practical information, services and connected providers. A verified address can lead to Google Maps directions in a new tab.",
    "try": "Review the place details, then finish the path.",
    "screen": "known-4",
    "short": "Connect the provider to practical location information."
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
    "try": "Choose the North Clinic suggestion to view its providers.",
    "screen": "clinic-1",
    "short": "Use a familiar clinic as an entrance to its provider team."
   },
   {
    "title": "See the clinic’s provider team",
    "note": "The results are limited to the selected clinic. This is a provider relationship in the sample; it does not establish every treatment available at that clinic.",
    "try": "Open Elena Brooks’s sample profile.",
    "screen": "clinic-2",
    "short": "Show providers connected to the selected clinic."
   },
   {
    "title": "Keep the selected clinic first",
    "note": "For a provider with several locations, North Clinic stays first because the visitor chose it. This is separate from the starting location used to calculate distance.",
    "try": "Open North Clinic from the profile’s care locations.",
    "screen": "clinic-3",
    "short": "Keep the visitor’s chosen clinic first in a multi-location profile."
   },
   {
    "title": "Confirm the place without inventing details",
    "note": "North Clinic has a sample location page connected to services and providers. Address, phone, hours and map details stay withheld for the anonymous region.",
    "try": "Review the sample location page, then finish.",
    "screen": "clinic-4",
    "short": "Explain the anonymous place without inventing contact or map details."
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
    "title": "Choose a starting point when useful",
    "note": "The origin is optional and explicitly chosen. It can represent where the patient needs care rather than the reviewer’s device location.",
    "try": "Select the outlined New region · demo option to continue.",
    "screen": "nearby-1",
    "short": "Let visitors choose the patient’s starting location explicitly."
   },
   {
    "title": "Search by the care needed",
    "note": "A specialty uses the same search bar as a known name or clinic. The location stays alongside the search rather than becoming a separate regional site.",
    "try": "Primary care is prefilled. Select the outlined Search link.",
    "screen": "nearby-2",
    "short": "Search for a type of care with the starting point retained."
   },
   {
    "title": "Compare relevant options by distance",
    "note": "The sample results put matching nearby providers first and show their specific care locations. Farther matching providers remain available in the same experience.",
    "try": "Open Elena Brooks’s sample profile.",
    "screen": "nearby-3",
    "short": "Put relevant nearby providers first; keep distant matches discoverable."
   },
   {
    "title": "Check the care location before continuing",
    "note": "The profile keeps the selected origin and lists the provider’s care locations. Sample distances support the flow discussion; actual availability is not represented.",
    "try": "Review the care locations, then finish.",
    "screen": "nearby-4",
    "short": "Check the provider’s specific practice location before continuing."
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
    "title": "Move from shared content to local care",
    "note": "Service education comes first. The care-by-location section then helps someone who is ready to compare where care is delivered.",
    "try": "Review the sample locations and delivery labels.",
    "screen": "offerings-1",
    "short": "Connect shared service education with local care differences."
   },
   {
    "title": "See differences before choosing a place",
    "note": "The demonstration distinguishes onsite cardiology, visiting specialists, testing, rehabilitation and advanced procedures. North Clinic and Regional Hospital show different sample offerings.",
    "try": "Open View local care for Regional Hospital.",
    "screen": "offerings-2",
    "short": "Compare onsite and visiting care before choosing a location."
   },
   {
    "title": "Understand this location’s offering",
    "note": "A local service page adds useful delivery detail to the shared service. It explains what can be received here and when some care takes place elsewhere.",
    "try": "Read the sample local capabilities, then select Next to explore the team.",
    "screen": "offerings-3",
    "short": "Explain the care delivered at this specific location."
   },
   {
    "title": "Connect local care with its providers",
    "note": "The local offering has a connected care team. This next step carries both the service and the chosen location into provider search.",
    "try": "Select View this care team.",
    "screen": "offerings-4",
    "short": "Connect a local service offering with its relevant care team."
   },
   {
    "title": "See only the relevant local team",
    "note": "The provider results carry both heart care and Regional Hospital. The visitor does not need to re-enter the specialty or reconstruct the location choice.",
    "try": "Open Avery Sutton’s sample profile.",
    "screen": "offerings-5",
    "short": "Carry both the service and location into provider results."
   },
   {
    "title": "Keep the selected care location visible",
    "note": "Regional Hospital stays first on the provider’s profile. This sample team association does not identify which clinician performs a particular procedure.",
    "try": "Confirm the selected location, then finish.",
    "screen": "offerings-6",
    "short": "Keep the selected hospital first in the provider’s care locations."
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
    "title": "Compare a specific type of care",
    "note": "The clinical service remains shared across regions. This prepared example changes All heart care to Advanced heart procedures to show how a specific capability can narrow the local comparison.",
    "try": "Select the outlined Type of care control to preview Advanced heart procedures.",
    "screen": "farther-1",
    "short": "Compare a specific type of care across communities."
   },
   {
    "title": "Explain why the match is farther away",
    "note": "The sample offers advanced procedures at Altru Hospital. A plain-language message explains travel instead of producing an empty local result or changing the visitor’s origin.",
    "try": "Open the Altru Hospital local-care page.",
    "screen": "farther-2",
    "short": "Explain travel while keeping the visitor’s starting location."
   },
   {
    "title": "Confirm what happens at the destination",
    "note": "The local service page makes hospital-based care explicit. All coverage relationships here are illustrative and need Altru’s validation.",
    "try": "Read the sample capabilities, then select Next to continue to the team.",
    "screen": "farther-3",
    "short": "Confirm the sample capabilities at the matching destination."
   },
   {
    "title": "Keep the destination and service connected",
    "note": "The provider shortcut belongs to this local offering. The visitor does not have to reconstruct the service or location choice in a separate search.",
    "try": "Select See heart care providers here.",
    "screen": "farther-4",
    "short": "Keep the chosen service and destination connected."
   },
   {
    "title": "Reach the connected team",
    "note": "The next view carries heart care and Altru Hospital into provider results. The team list is a relevant next step, with clinical and procedure assignments still requiring validation.",
    "try": "Review the connected team, then finish.",
    "screen": "farther-5",
    "short": "Show the team connected to the matching distant location."
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
    "title": "Use the dedicated place finder",
    "note": "Finding a place is distinct from filtering providers by clinic. The provider search offers a direct Find a clinic or hospital route.",
    "try": "Select Find a clinic or hospital.",
    "screen": "place-1",
    "short": "Give place finding its own entrance alongside provider search."
   },
   {
    "title": "Set location in the finder",
    "note": "The finder lets a visitor choose a city or ZIP without leaving the overlay. This origin helps order places, while name and community controls remain available.",
    "try": "58201 is prefilled. Select the outlined Set location link.",
    "screen": "place-2",
    "short": "Set an optional starting point within the clinic finder."
   },
   {
    "title": "Compare places with practical context",
    "note": "The place list stays central, with a map alongside it when there is room. This static copy shows the map area without loading a live map. Anonymous-region map details remain withheld.",
    "try": "Open View location for Altru Family Medicine Center.",
    "screen": "place-3",
    "short": "Show the matching place and its practical location details."
   },
   {
    "title": "Get useful location details",
    "note": "The location page connects Getting Here, About, Services and Providers. In the full experience, a verified public address leads to Google Maps. Here, the guidance link advances to the return point.",
    "try": "Select the outlined Get directions link to continue.",
    "screen": "place-4",
    "short": "Connect a verified address with directions in the full experience."
   },
   {
    "title": "Keep the concept available",
    "note": "After checking directions, the visitor can return to the location page. Its service and provider relationships remain available. This prepared screen illustrates the return point without starting an appointment flow.",
    "try": "Review the services and care-team connections, then finish.",
    "screen": "place-5",
    "short": "Keep services and providers available after checking directions."
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
    "title": "Choose the patient’s starting location",
    "note": "The concept does not use device geolocation. A caregiver can select the patient’s city or ZIP explicitly, even if the caregiver is somewhere else.",
    "try": "Select the outlined Grand Forks, ND option to continue.",
    "screen": "caregiver-1",
    "short": "Choose the patient’s location rather than the caregiver’s device location."
   },
   {
    "title": "Find a familiar provider for them",
    "note": "The patient’s starting location remains visible while searching by name. A caregiver does not need a different website or a separate regional mode.",
    "try": "Amundson is prefilled. Select the outlined Search link.",
    "screen": "caregiver-2",
    "short": "Keep the patient’s starting point while searching by name."
   },
   {
    "title": "Confirm the person and place",
    "note": "The profile preserves Grand Forks as the starting point and connects the doctor to a care location. The same controls remain available on a phone.",
    "try": "Open Altru Family Medicine Center from care locations.",
    "screen": "caregiver-3",
    "short": "Confirm both the doctor and the associated care location."
   },
   {
    "title": "Retain context while checking details",
    "note": "The location page keeps the patient’s chosen origin and offers contact details and Google Maps directions. A location change remains an explicit action.",
    "try": "Review Getting Here and the chosen starting location, then finish.",
    "screen": "caregiver-4",
    "short": "Retain the patient’s location while checking Getting Here details."
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
    "try": "Select Search all Altru providers.",
    "screen": "recover-1",
    "short": "Explain the empty result and offer a clear way to widen the search."
   },
   {
    "title": "Keep the useful search context",
    "note": "The widened results restore the known-name match while retaining Amundson and the anonymous new-region starting point. Only the conflicting filter is removed.",
    "try": "Open Matthew Amundson’s profile.",
    "screen": "recover-2",
    "short": "Keep the name and starting point; remove the conflicting filter."
   },
   {
    "title": "Continue from the recovered result",
    "note": "The visitor can inspect the provider’s care location without retyping the name or selecting an origin again. The profile keeps scheduling in MyChart.",
    "try": "Review the recovered profile, then finish.",
    "screen": "recover-3",
    "short": "Continue to the recovered profile without starting over."
   }
  ]
 }
];

 function readReviewState(search){
  const params=new URLSearchParams(search),id=params.get('path');
  if(!id)return {path:null,index:0,invalid:false};
  const path=paths.find(p=>p.id===id);if(!path)return {path:null,index:0,invalid:true};
  const raw=params.get('step')||'1';
  const number=/^[1-9]\d*$/.test(raw)?Number(raw):1;
  return {path,index:Math.min(Number.isFinite(number)?number-1:0,path.steps.length),invalid:false};
 }
 const reviewURL=(id,index=0)=>'?path='+encodeURIComponent(id)+'&step='+(index+1);
 const api={paths,readReviewState,reviewURL,revision:'b44d4839aede'};
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
 else root.AltruJourneys=api;
})(typeof window!=='undefined'?window:this);
