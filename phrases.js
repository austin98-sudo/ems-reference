/* Examples
const predefinedPhrases = {
      "IV procedure": {
        fields: [
          { label: "Needle Size", type: "input", placeholder: "e.g., 20g", default: "20g" },
          { label: "Location", type: "input", placeholder: "e.g., LAC", default: "LAC" }
        ],
        previewTemplate: (values) => `A ${values[0]} IV was established in the ${values[1]}.`
      },
      "Medication": {
        fields: [
          { label: "Medication Name", type: "input", placeholder: "Enter medication name...", default: "Aspirin" },
          { label: "Dosage", type: "input", placeholder: "Enter dosage...", default: "100mg" },
          { label: "Route", type: "select", options: ["Oral", "IV", "IM", "Subcutaneous"], multiple: false, default: "Oral" }
        ],
        previewTemplate: (values) => `${values[0]} ${values[1]} via ${values[2]}.`
      },
      "Diagnosis": {
        type: "input",
        placeholder: "Enter diagnosis...",
        default: "Hypertension"
      },
      // Example using a yesno prompt:
      "Procedure Consent": {
        fields: [
          { label: "Did the patient consent?", type: "yesno", default: "Yes" },
          { label: "Procedure details", type: "input", placeholder: "e.g., IV insertion" }
        ],
        previewTemplate: (values) => {
          // If the first answer is empty (i.e. No), then omit the consent text.
          return (values[0] ? "Consent given. " : "Pt did not give consent") + values[1];
        }
      }
    };
*/

const predefinedPhrases = {
    "Dispatch Info": {
        fields: [
            {label: "Station Dispatched", type: "select", options:["Wintergreen station 1", "Wintergreen station 2", "Nelson EMS"]},
            {label: "Complaint", type: "input", placeholder: "chest pain, shortness of breath, etc."},
            {label: "Level", type: "select", options: ["Rescue", "Trauma", "Medic"]},
            {label: "Unit", type: "input", placeholder: "unit number"},
            {label: "Response Mode", type: "select", options: ["emergent", "non-emergent"]}
        ],
        previewTemplate: (values) => `${values[0]} was dispatched for ${values[1]}. ${values[2]} ${values[3]} responded ${values[4]}.`
    },
    "IV Access": {
        fields: [
            {label: "IV Size", type: "select", options: ["18g", "20g", "22g", "24g"]},
            {label: "IV Location", type: "select", options: ["LAC", "RAC", "left hand", "light hand", "left forearm", "right forearem"]},
            {label: "Comments", type: "input", default: "No infiltration or pain noted, IV flushes easily"}
        ],
        previewTemplate: (values) => `A ${values[0]} IV was established in the ${values[1]}. ${values[2]}.`
    }
  };