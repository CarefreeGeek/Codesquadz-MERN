// Utility to create labeled input with wrapper and optional remove button
function createInputBlock(labelText, type, name, required = true) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-inline-group";

    const label = document.createElement("label");
    label.textContent = labelText;

    const input = document.createElement("input");
    input.type = type;
    input.name = name;
    if (required) input.required = true;

    wrapper.appendChild(label);
    wrapper.appendChild(input);

    return wrapper;
}

function createTextareaBlock(labelText, name) {
    const wrapper = document.createElement("div");
    wrapper.className = "form-inline-group";

    const label = document.createElement("label");
    label.textContent = labelText;

    const textarea = document.createElement("textarea");
    textarea.name = name;
    textarea.required = true;

    wrapper.appendChild(label);
    wrapper.appendChild(textarea);

    return wrapper;
}

// Creates a remove button
function createRemoveButton(container) {
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.type = "button";
    removeBtn.className = "remove-btn";
    removeBtn.addEventListener("click", () => {
        container.remove();
    });
    return removeBtn;
}

// Add Skill
function addSkill() {
    const parent = document.querySelector("#add-skill-btn").parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-wrapper";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "skill[]";
    input.placeholder = "Another skill";
    input.required = true;

    const removeBtn = createRemoveButton(wrapper);
    wrapper.appendChild(input);
    wrapper.appendChild(removeBtn);
    parent.insertBefore(wrapper, document.getElementById("add-skill-btn"));
}

// Add Work History
document.getElementById("add-work-history-btn").addEventListener("click", () => {
    const group = document.getElementById("add-work-history-btn").parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-wrapper";

    wrapper.appendChild(createInputBlock("Company Name:", "text", "company-name"));
    wrapper.appendChild(createInputBlock("Job Title:", "text", "job-title"));
    wrapper.appendChild(createInputBlock("Location:", "text", "location"));
    wrapper.appendChild(createInputBlock("Duration:", "text", "duration"));
    wrapper.appendChild(createTextareaBlock("Responsibilities:", "responsibilities"));
    wrapper.appendChild(createRemoveButton(wrapper));

    group.appendChild(wrapper);
});

// Add Education
document.getElementById("add-education-btn").addEventListener("click", () => {
    const group = document.getElementById("add-education-btn").parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-wrapper";

    wrapper.appendChild(createInputBlock("Degree:", "text", "degree"));
    wrapper.appendChild(createInputBlock("Institution:", "text", "institution"));
    wrapper.appendChild(createInputBlock("Location:", "text", "location"));
    wrapper.appendChild(createInputBlock("Passing Year:", "date", "expected-graduation-date"));
    wrapper.appendChild(createRemoveButton(wrapper));

    group.appendChild(wrapper);
});

// Add Certification
document.getElementById("add-certification-btn").addEventListener("click", () => {
    const group = document.getElementById("add-certification-btn").parentElement;
    const wrapper = document.createElement("div");
    wrapper.className = "dynamic-wrapper";

    wrapper.appendChild(createInputBlock("Certification Name:", "text", "certification-name"));
    wrapper.appendChild(createInputBlock("Issuing Organization:", "text", "issuing-organization"));
    wrapper.appendChild(createInputBlock("Date:", "date", "certification-date"));
    wrapper.appendChild(createRemoveButton(wrapper));

    group.appendChild(wrapper);
});





// document.querySelector("form").addEventListener("preview", function (e) {
//     e.preventDefault(); // Stop actual submission

//     const formData = new FormData(this);
//     const data = {};

//     formData.forEach((value, key) => {
//         // Handle inputs with same name
//         if (key.endsWith("[]")) {
//             const cleanedKey = key.replace("[]", "");
//             if (!data[cleanedKey]) data[cleanedKey] = [];
//             data[cleanedKey].push(value);
//         } else if (data[key]) {
//             if (!Array.isArray(data[key])) data[key] = [data[key]];
//             data[key].push(value);
//         } else {
//             data[key] = value;
//         }
//     });

//     // Save to localStorage
//     localStorage.setItem("resumeData", JSON.stringify(data));

//     // Redirect to preview.html
//     window.location.href = "preview.html";
// });
