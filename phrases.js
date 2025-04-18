let predefinedPhrases = {
  "dispatch info": {
    "fields": [
      {
        "label": "Station",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "Wintergreen Station 1",
          "Wintergreen Station 2",
          "Nelson EMS"
        ],
        "multiple": false
      },
      {
        "label": "Complaint",
        "type": "input",
        "placeholder": "Chest pain, Shortness of breath, etc.",
        "default": ""
      },
      {
        "label": "Level",
        "type": "select",
        "placeholder": "",
        "default": "Medic",
        "options": [
          "Rescue",
          "Trauma",
          "Medic"
        ],
        "multiple": false
      },
      {
        "label": "Unit Number",
        "type": "input",
        "placeholder": "",
        "default": ""
      },
      {
        "label": "Response mode",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "emergent",
          "non-emergent"
        ],
        "multiple": false
      },
      {
        "label": "Secondary information",
        "type": "input",
        "placeholder": "Call details",
        "default": ""
      }
    ],
    "template": "{0} was dispatched for {1}. {2} {3} responded {4}. Secondary information provided was {5}.",
    "section": "Pre-Generated",
    "visible": false,
    "order": 1000,
    "name": "dispatch info"
  },
  "complaints": {
    "fields": [
      {
        "label": "Age",
        "type": "input",
        "placeholder": "",
        "default": ""
      },
      {
        "label": "Gender",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "M",
          "F"
        ],
        "multiple": false
      },
      {
        "label": "Chief Complaint",
        "type": "input",
        "placeholder": "chest pain, SOB, etc...",
        "default": ""
      },
      {
        "label": "Secondary complaints",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any secondary complaints"
      }
    ],
    "template": "Pt presents to EMS as a {0} YO{1} who has {2}. {3}.",
    "section": "Pre-Generated",
    "visible": false,
    "order": 2000,
    "name": "complaints"
  },
  "age/gender": {
    "fields": [
      {
        "label": "Age",
        "type": "input",
        "placeholder": "eg. 32",
        "default": ""
      },
      {
        "label": "Gender",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "M",
          "F"
        ],
        "multiple": false
      }
    ],
    "template": "{0} YO {1}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 3000,
    "name": "age/gender"
  },
  "arrival": {
    "fields": [
      {
        "label": "How was the patient found?",
        "type": "input",
        "placeholder": "sitting upright in a chair",
        "default": ""
      },
      {
        "label": "Alert Status",
        "type": "input",
        "placeholder": "",
        "default": "acknowledges providers and answers questions appropriately"
      }
    ],
    "template": "Upon arrival the Pt was found {0}. Pt {1}.",
    "section": "Pre-Generated",
    "visible": false,
    "order": 4000,
    "name": "arrival"
  },
  "abc": {
    "fields": [
      {
        "label": "airway",
        "type": "input",
        "placeholder": "",
        "default": "Airway is patent with no adjuncts needed"
      },
      {
        "label": "breathing",
        "type": "input",
        "placeholder": "",
        "default": "Breathing is at an appropriate rate and depth to sustain life"
      },
      {
        "label": "circulation",
        "type": "input",
        "placeholder": "",
        "default": "Pulse is present"
      }
    ],
    "template": "{0}. {1}. {2}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 5000,
    "name": "abc"
  },
  "neuro": {
    "fields": [
      {
        "label": "AAO",
        "type": "input",
        "placeholder": "",
        "default": "Pt is alert and oriented to person, place, time, and event"
      },
      {
        "label": "GCS",
        "type": "input",
        "placeholder": "E: 4, V: 5, M: 6",
        "default": "15"
      },
      {
        "label": "Stroke symptoms",
        "type": "input",
        "placeholder": "",
        "default": "No facial droop or slurred speech noted"
      }
    ],
    "template": "{0}. GCS is {1}. {2}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 6000,
    "name": "neuro"
  },
  "heent": {
    "fields": [
      {
        "label": "Abnormalities",
        "type": "input",
        "placeholder": "",
        "default": "No visible abnormalities noted to the head or face"
      },
      {
        "label": "Pupils",
        "type": "select",
        "placeholder": "",
        "default": "PERRL",
        "options": [
          "PERRL",
          "unequal",
          "sluggish"
        ],
        "multiple": false
      }
    ],
    "template": "{0}. Pupils are {1}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 7000,
    "name": "heent"
  },
  "cv": {
    "fields": [
      {
        "label": "chest pains",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any chest pains"
      },
      {
        "label": "12-lead",
        "type": "input",
        "placeholder": "",
        "default": ""
      }
    ],
    "template": "{0}. {1}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 8000,
    "name": "cv"
  },
  "pulm": {
    "fields": [
      {
        "label": "Shortness of breath?",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any shortness of breath"
      },
      {
        "label": "Lung sounds",
        "type": "input",
        "placeholder": "",
        "default": "Lung sounds are clear bilaterally in the upper and lower lobes"
      },
      {
        "label": "SPO2 percent",
        "type": "input",
        "placeholder": "95%, 98%, etc",
        "default": ""
      },
      {
        "label": "Oxygen level",
        "type": "select",
        "placeholder": "",
        "default": "RA",
        "options": [
          "RA",
          "2LPM",
          "4LPM",
          "6LPM",
          "8LPM",
          "10LPM",
          "15LPM"
        ],
        "multiple": false
      }
    ],
    "template": "{0}. {1}. SPO2 was noted to be {2} on {3}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 9000,
    "name": "pulm"
  },
  "ms/ortho/skin": {
    "fields": [
      {
        "label": "Motor function",
        "type": "input",
        "placeholder": "",
        "default": "Gross motor function is present in all extremities"
      },
      {
        "label": "Additional notes",
        "type": "input",
        "placeholder": "Abnormalities, spine assessment",
        "default": ""
      }
    ],
    "template": "{0}. {1}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 11000,
    "name": "ms/ortho/skin"
  },
  "move to stretcher": {
    "fields": [
      {
        "label": "How was the patient moved",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "stand and pivot",
          "walking",
          "draw sheet"
        ],
        "multiple": false
      },
      {
        "label": "position",
        "type": "select",
        "placeholder": "",
        "default": "semi-fowlers",
        "options": [
          "sitting",
          "semi-fowlers",
          "supine"
        ],
        "multiple": false
      }
    ],
    "template": "Pt was moved to the stretcher via {0}. Once the Pt was on the stretcher, the Pt was secured via seat belts x3 with shoulder straps and both rails raised. Pt was placed in a {1} position",
    "section": "Pre-Generated",
    "visible": false,
    "order": 13000,
    "name": "move to stretcher"
  },
  "transport": {
    "fields": [
      {
        "label": "Hospital",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "UVA",
          "Augusta Health",
          "LGH",
          "Martha Jefferson"
        ],
        "multiple": false
      },
      {
        "label": "transport mode",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "emergent",
          "non-emergent"
        ],
        "multiple": false
      },
      {
        "label": "Communication",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "radio",
          "phone"
        ],
        "multiple": false
      }
    ],
    "template": "Pt was transported to {0}, {1}. During transport {0} was contacted and given a med report via {2}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 14000,
    "name": "transport"
  },
  "hospital transfer": {
    "fields": [
      {
        "label": "room/triage",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "a room",
          "triage"
        ],
        "multiple": false
      },
      {
        "label": "transfer",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "Pt was transferred to the hospital bed",
          "Pt was transferred to the wheelchair"
        ],
        "multiple": false
      },
      {
        "label": "transfer to via",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "stand and pivot",
          "walking",
          "sliding",
          "draw sheet"
        ],
        "multiple": false
      }
    ],
    "template": "{0}. {1} via {2}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 1741101495163,
    "name": "hospital transfer"
  },
  "iv insertion": {
    "fields": [
      {
        "label": "IV Size",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "14g",
          "16g",
          "18g",
          "20g",
          "22g",
          "24g"
        ],
        "multiple": false
      },
      {
        "label": "Location",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "LAC",
          "RAC",
          "left forearm",
          "right forearm",
          "left hand",
          "right forearm"
        ],
        "multiple": false
      },
      {
        "label": "Attempt success",
        "type": "select",
        "placeholder": "",
        "default": "established",
        "options": [
          "established",
          "attempted"
        ],
        "multiple": false
      }
    ],
    "template": "A {0} IV was {2} in the {1}.",
    "section": "Procedure",
    "visible": true,
    "order": 15000,
    "name": "iv insertion"
  },
  "synchronized cardioversion": {
    "fields": [
      {
        "label": "Joules",
        "type": "input",
        "placeholder": "120J",
        "default": ""
      }
    ],
    "template": "Monitor was synchronized and Pt was cardioverted at {0}",
    "section": "Procedure",
    "visible": true,
    "order": 1741102227469,
    "name": "synchronized cardioversion"
  },
  "adenosine": {
    "fields": [
      {
        "label": "First dose",
        "type": "input",
        "placeholder": "6mg",
        "default": "Pt was administered adenosine with an initial dose of 6mg"
      },
      {
        "label": "Second dose",
        "type": "input",
        "placeholder": "12mg",
        "default": "Pt was monitored throughout procedure and 2 minutes after. After no change in rhythm a secondary dose of 12mg was administered. Pt was monitored after second dose."
      }
    ],
    "template": "{0}. {1}.",
    "section": "Medication",
    "visible": true,
    "order": 1740625534116,
    "name": "adenosine"
  },
  "soc/psych": {
    "fields": [
      {
        "label": "Drugs",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any drug use"
      },
      {
        "label": "Alcohol",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any alcohol use"
      }
    ],
    "template": "{0}. {1}.",
    "section": "Pre-Generated",
    "visible": false,
    "order": 12000,
    "name": "soc/psych"
  },
  "12-lead": {
    "fields": [
      {
        "label": "Interpretation",
        "type": "input",
        "placeholder": "",
        "default": "sinus rhythm"
      }
    ],
    "template": "A 12-lead was performed and interpreted as {0}.",
    "section": "Procedure",
    "visible": true,
    "order": 1741102314309,
    "name": "12-lead"
  },
  "BGL": {
    "fields": [
      {
        "label": "BGL Reading",
        "type": "input",
        "placeholder": "",
        "default": ""
      }
    ],
    "template": "A blood glucose analysis was performed and noted to be {0}mg/dL.",
    "section": "Procedure",
    "visible": true,
    "order": 1741214923455,
    "name": "BGL"
  },
  "abd/gi/gu": {
    "fields": [
      {
        "label": "Abdominal pain",
        "type": "input",
        "placeholder": "",
        "default": "Pt denies any abdominal pain"
      },
      {
        "label": "Abdomen palpation",
        "type": "input",
        "placeholder": "",
        "default": "no pain, rigidity, or tenderness noted"
      },
      {
        "label": "Bathroom habits",
        "type": "input",
        "placeholder": "",
        "default": "Pt reports no pain or discomfort when using the bathroom. Pt also reports normal bathroom habits with no discolorations."
      }
    ],
    "template": "{0}. All four quadrants were palpated with {1}. Pt reports {2}",
    "section": "Pre-Generated",
    "visible": false,
    "order": 10000,
    "name": "abd/gi/gu"
  },
  "witness": {
    "fields": [
      {
        "label": "Relation",
        "type": "input",
        "placeholder": "husband, girlfriend, healthcare worker",
        "default": ""
      }
    ],
    "template": "Pt's {0} signed as a witness. The Pt's {0} was also advised that if anything changed they could call 911.",
    "section": "Pre-Generated",
    "visible": false,
    "order": 1741214644124,
    "name": "witness"
  },
  "intubation": {
    "fields": [
      {
        "label": "Method",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "a king vision",
          "direct laryngoscopy"
        ],
        "multiple": false
      },
      {
        "label": "Size ET",
        "type": "input",
        "placeholder": "7.0, 7.5 ",
        "default": ""
      }
    ],
    "template": "Pt was intubated using {0}. A size {1} ET Tube was advanced through the vocal cord. ET Tube balloon was inflated and blade was retracted. ET Tube was secured with a tube holder.",
    "section": "Procedure",
    "visible": true,
    "order": 1741215680844,
    "name": "intubation"
  },
  "io": {
    "fields": [
      {
        "label": "IO Size",
        "type": "select",
        "placeholder": "",
        "default": "",
        "options": [
          "15mm",
          "25mm",
          "45mm"
        ],
        "multiple": false
      },
      {
        "label": "Site",
        "type": "input",
        "placeholder": "proximal tibia, humerus",
        "default": ""
      }
    ],
    "template": "A {0} was inserted in the {1}. Extension set was connected and IO was flushed with 10mLs of NS.",
    "section": "Procedure",
    "visible": true,
    "order": 1740625260759,
    "name": "io"
  },
  "asa": {
    "fields": [
      {
        "label": "how many?",
        "type": "input",
        "placeholder": "",
        "default": "4"
      },
      {
        "label": "total dosage",
        "type": "input",
        "placeholder": "",
        "default": "324"
      }
    ],
    "template": "{0} x 81mg of baby aspirin was administered for a total of {1}",
    "section": "Medication",
    "visible": true,
    "order": 1741215784421,
    "name": "asa"
  }
}